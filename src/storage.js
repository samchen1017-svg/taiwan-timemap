import {Q} from './questions.js';
import {calcScore,taipeiDate} from './logic.js';
const catalog=new Map(Q.map(q=>[q.id,q]));
export function validateRun(value){
 if(!value||!Array.isArray(value.ids)||value.ids.length!==5||new Set(value.ids).size!==5||!value.ids.every(id=>catalog.has(id))||!Array.isArray(value.answers)||value.answers.length>5)return null;
 const answers=[];
 for(const [i,a] of value.answers.entries()){
  if(a.id!==value.ids[i]||!Number.isFinite(a.distance)||a.distance<0||a.distance>21000||a.score!==calcScore(a.distance))return null;
  const guess=a.guess&&Number.isFinite(a.guess.lat)&&Number.isFinite(a.guess.lng)?a.guess:null;
  answers.push({...a,guess});
 }
 const idx=Math.max(0,Math.min(5,Number.isInteger(value.idx)?value.idx:answers.length));
 if(idx>answers.length||idx<answers.length-1)return null;
 return {ids:value.ids,idx,answers,version:3};
}
export function createStorage(storage,onError=()=>{}){
 const read=key=>{try{return JSON.parse(storage.getItem(key)||'null')}catch{return null}};
 const write=(key,value)=>{try{storage.setItem(key,JSON.stringify(value));return true}catch{onError();return false}};
 return {
  load(date){return validateRun(read('timemap:v3:'+date))||validateRun(read('timemap:v2:'+date))},
  save(date,run){return write('timemap:v3:'+date,run)},
  history(){const data=read('timemap:history:v3');return Array.isArray(data)?data.filter(r=>/^\d{4}-\d{2}-\d{2}$/.test(r.date)&&Number.isFinite(r.score)&&r.score>=0&&r.score<=500).slice(-365):[]},
  complete(date,run){if(run.answers.length!==5)return;const history=this.history();if(!history.some(r=>r.date===date)){history.push({date,score:run.answers.reduce((s,a)=>s+a.score,0),ids:run.ids});history.sort((a,b)=>a.date.localeCompare(b.date));write('timemap:history:v3',history.slice(-365))}},
 };
}
export function streak(history,today=taipeiDate()){
 const dates=new Set(history.map(r=>r.date));const d=new Date(today+'T12:00:00+08:00');
 if(!dates.has(today))d.setUTCDate(d.getUTCDate()-1);
 let count=0;while(dates.has(taipeiDate(d))){count++;d.setUTCDate(d.getUTCDate()-1)}return count;
}
