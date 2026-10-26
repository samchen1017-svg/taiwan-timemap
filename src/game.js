import {Q,LESSONS,types} from './questions.js';
import {createMap} from './map.js';
import {taipeiDate,makeSet,km,calcScore} from './logic.js';
import {streak,createStorage} from './storage.js';

const $=id=>document.getElementById(id);
let date=taipeiDate();$('dateLabel').textContent=date+' · 臺灣時間';
const state={mode:'daily',qs:[],idx:0,answers:[],guess:null,locked:false};
const store=createStorage({getItem:key=>localStorage.getItem(key),setItem:(key,value)=>localStorage.setItem(key,value)},()=>{$('storageNotice').hidden=false});
function getSaved(){return store.load(date)}
function save(){if(state.mode==='daily'){const run={version:3,ids:state.qs.map(q=>q.id),idx:state.idx,answers:state.answers};store.save(date,run);if(state.answers.length===5)store.complete(date,run)}}
function show(id){for(const x of ['home','game','summary'])$(x).classList.toggle('hidden',x!==id);window.scrollTo(0,0)}
const map=createMap({state,choose});
function init(){renderHistory();let s=getSaved();$('dailyInfo').textContent=s?.answers?.length>=5?'今日挑戰已完成，可回顧成績或繼續自由練習':s?.answers?.length?'今日已完成 '+s.answers.length+' 題，可以繼續挑戰':'每日 5 題 · 全台分區出題 · 滿分 500 分 · 免費試玩';$('dailyStart').textContent=s?.answers?.length>=5?'查看今日成績 →':s?.answers?.length?'繼續今日挑戰 →':'開始今日挑戰 →'}
function start(mode){
 date=taipeiDate();$('dateLabel').textContent=date+' · 臺灣時間';$('dayNotice').hidden=true;
 state.mode=mode;const old=mode==='daily'?getSaved():null;
 const ids=old?.ids||makeSet(mode==='daily'?date:'practice'+Date.now());
 state.qs=ids.map(id=>Q.find(q=>q.id===id));state.answers=old?.answers||[];
 state.idx=old?.idx||0;state.locked=false;state.guess=null;
 if(state.answers.length===5)return summary();
 show('game');renderQuestion();
 if(old&&old.answers.length>state.idx){const a=old.answers[state.idx];state.answers.pop();state.guess=a.guess||{lat:state.qs[state.idx].lat,lng:state.qs[state.idx].lng};if(a.guess)submit();else{state.answers.push(a);state.idx++;if(state.idx>=5)summary();else renderQuestion()}}
}
function total(){return state.answers.reduce((sum,a)=>sum+a.score,0)}
function renderQuestion(){state.locked=false;state.guess=null;let q=state.qs[state.idx];$('qcount').textContent=`第 ${state.idx+1} / 5 題 · ${state.mode==='daily'?'每日挑戰':'自由練習'}`;$('score').textContent=total();$('progress').innerHTML=state.qs.map((_,i)=>`<div class="${i<state.idx?'done':i===state.idx?'active':''}"></div>`).join('');$('cat').textContent=types[q.c];$('year').textContent=q.year+(/^[0-9]+$/.test(q.year)?' 年':'');$('qtitle').textContent=q.title;$('difficulty').textContent=['','入門','進階','挑戰'][q.difficulty||2];$('flowStep').textContent='01 閱讀線索 → 02 地圖插旗 → 03 確認答案';$('qtitle').focus({preventScroll:true});$('submit').disabled=true;$('selectionText').textContent='尚未插旗 · 點圖選擇位置，或選縣市快速前往';$('mapBadge').textContent='📍 請在地圖上插旗';$('result').classList.add('hidden');$('jumpCounty').value='';map.setMapInteraction(false);map.resetView();map.drawMarkers();}
function choose(lat,lng,place){if(state.locked)return;if(lat<20||lat>27||lng<117||lng>123)return;state.guess={lat,lng};$('submit').disabled=false;$('selectionText').textContent=place?`已在 ${place} 插旗，可重新點選或確認`:'已插旗 · 可重新點選或確認位置';$('mapBadge').textContent='📍 位置已選擇';map.drawMarkers()}
function submit(){if(state.locked||!state.guess)return;let q=state.qs[state.idx],d=km(state.guess,q),score=calcScore(d);state.locked=true;state.answers.push({id:q.id,distance:d,score,guess:{...state.guess}});save();$('score').textContent=total();$('submit').disabled=true;$('distance').textContent='距離 '+(d<10?d.toFixed(1):Math.round(d))+' 公里';$('points').textContent='+'+score+' 分';$('answerTitle').textContent='正確位置：'+q.name;
const lesson=LESSONS[q.id];
$('lessonEra').textContent=q.year+' · '+q.county;
$('lessonFact').textContent=lesson?.fact||q.story;
$('lessonKey').textContent=lesson?.key||'讀完這段故事，你又多認識一個臺灣的角落。';
$('lessonSource').href=lesson?.src||q.src;
$('lessonSource').textContent='查閱史料：'+(lesson?.label||q.label)+' ↗';
$('story').textContent=q.story;$('locationNote').textContent='本題定位：'+q.audit.locationType+'。'+(q.audit.locationPrecision==='approximate-site'?'採場址概略位置。':'採官方列示點位。');$('source').href=q.src;$('source').textContent='資料來源：'+q.label+' ↗';$('next').textContent=state.idx===4?'查看總成績 →':'下一題 →';$('result').classList.remove('hidden');$('flowStep').textContent='04 揭曉與學習 → 05 下一個故事';$('answerTitle').focus({preventScroll:true});$('mapBadge').textContent='🟠 你的圖釘 · 🟢 正確位置';map.drawMarkers();$('result').scrollIntoView({behavior:'smooth',block:'nearest'})}
function next(){if(!state.locked)return;state.idx++;save();if(state.idx>=5)summary();else{renderQuestion();$('qcount').scrollIntoView({behavior:'smooth',block:'start'})}}
function summary(){show('summary');$('summaryTitle').focus({preventScroll:true});let n=total();$('summaryTitle').textContent=state.mode==='daily'?'今日挑戰完成！':'自由練習完成！';$('finalScore').innerHTML=n+'<span> / 500</span>';$('rank').textContent=n>=430?'地圖傳說 🏆':n>=340?'在地達人 🧭':n>=230?'島嶼探索家 🌿':'時光旅人 🗺️';$('review').innerHTML=state.answers.map((a,i)=>{let q=Q.find(x=>x.id===a.id);return `<div class="review"><div><b>${i+1}. ${q.name}</b><small>${types[q.c]} · 距離 ${a.distance<10?a.distance.toFixed(1):Math.round(a.distance)} 公里</small></div><strong>+${a.score}</strong></div>`}).join('');const wrap=$('learnReview');wrap.replaceChildren();
state.answers.forEach((answer,i)=>{
 const q=Q.find(x=>x.id===answer.id),lesson=q&&LESSONS[q.id];if(!q||!lesson)return;
 const details=document.createElement('details'),heading=document.createElement('summary'),body=document.createElement('div');
 heading.textContent=(i+1)+'. '+q.name+' · '+q.year;
 body.className='recap-body';
 const fact=document.createElement('p'),hint=document.createElement('p'),link=document.createElement('a');
 fact.textContent=lesson.fact;hint.textContent='記住這一點：'+lesson.key;
 link.textContent='查閱史料 ↗';link.href=lesson.src||q.src;link.target='_blank';link.rel='noopener noreferrer';
 body.append(fact,hint,link);details.append(heading,body);wrap.append(details);
});
$('shareFallback').classList.add('hidden');save();init()}
function shareText(){return `🗺️ 島嶼時光 3.0\n${state.mode==='daily'?date+' 每日挑戰':'自由練習'}\n${state.answers.map(a=>a.score>=85?'🟩':a.score>=60?'🟨':a.score>=30?'🟧':'⬜').join('')}\n總分：${total()} / 500\n今天的台灣故事，你猜對幾題？\nhttps://taiwan-timemap.pages.dev/`}
async function share(){let t=shareText();try{if(navigator.share){await navigator.share({title:'島嶼時光',text:t});return}if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(t);$('share').textContent='已複製 ✓';return}}catch(e){if(e.name==='AbortError')return}let el=$('shareFallback');el.value=t;el.classList.remove('hidden');el.focus();el.select();try{document.execCommand('copy')}catch(e){}}
function safeStart(mode){const el=$('launchStatus');el.classList.add('hidden');const btn=$(mode==='daily'?'dailyStart':'practiceStart');btn.disabled=true;try{start(mode);if(!$('game').classList.contains('hidden')||!$('summary').classList.contains('hidden')){el.textContent='';return;}throw new Error('遊戲畫面未顯示')}catch(e){console.error('遊戲啟動錯誤',e);el.textContent='啟動遇到問題：'+(e?.message||'未知錯誤')+'。請改用 Safari 或 Chrome 開啟下載的 HTML 檔案。';el.classList.remove('hidden');}finally{btn.disabled=false}}
$('dailyStart').addEventListener('click',()=>safeStart('daily'));$('practiceStart').addEventListener('click',()=>safeStart('practice'));$('submit').addEventListener('click',submit);$('next').addEventListener('click',next);$('share').addEventListener('click',share);$('again').addEventListener('click',()=>start('practice'));$('goHome').addEventListener('click',()=>{show('home');date=taipeiDate();$('dateLabel').textContent=date+' · 臺灣時間';$('dayNotice').hidden=true;init()});
init();

function renderHistory(){const rows=store.history();$('streak').textContent=streak(rows)+' 天';$('bestScore').textContent=rows.length?Math.max(...rows.map(r=>r.score))+' 分':'—';$('historyList').replaceChildren(...rows.slice(-7).reverse().map(r=>{const el=document.createElement('li');el.textContent=r.date+' · '+r.score+' / 500';return el}));$('historyEmpty').hidden=rows.length>0}
function checkDate(){if(taipeiDate()!==date){if($('home').classList.contains('hidden')){$('dayNotice').hidden=false}else{date=taipeiDate();$('dateLabel').textContent=date+' · 臺灣時間';init()}}}
setInterval(checkDate,30000);document.addEventListener('visibilitychange',checkDate);
$('keyboardPin').addEventListener('click',()=>map.chooseCenter());
