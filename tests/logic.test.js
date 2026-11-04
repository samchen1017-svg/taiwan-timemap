import test from 'node:test';import assert from 'node:assert/strict';
import {Q,LESSONS} from '../src/questions.js';
import {taipeiDate,makeSet,km,calcScore} from '../src/logic.js';
import {createStorage,validateRun,streak} from '../src/storage.js';
test('Taiwan midnight independent of system time',()=>{assert.equal(taipeiDate(new Date('2026-10-25T15:59:59Z')),'2026-10-25');assert.equal(taipeiDate(new Date('2026-10-25T16:00:00Z')),'2026-10-26')});
test('daily stable, five regions, no duplicate, rotation covers catalog',()=>{const seen=new Set();for(let i=0;i<180;i++){const date=taipeiDate(new Date(Date.UTC(2026,0,i+1)));const ids=makeSet(date);assert.deepEqual(ids,makeSet(date));assert.equal(new Set(ids).size,5);assert.equal(new Set(ids.map(id=>Q.find(q=>q.id===id).region)).size,5);ids.forEach(id=>seen.add(id))}assert.equal(seen.size,Q.length)});
test('score and geographic distance boundaries',()=>{assert.equal(km(Q[0],Q[0]),0);assert.equal(calcScore(0),100);assert.equal(calcScore(10000),0);assert.ok(km({lat:25,lng:121},{lat:24,lng:121})>110);assert.ok(calcScore(20)>calcScore(100))});
test('question contract: sources, location, lesson, editorial metadata',()=>{assert.equal(new Set(Q.map(q=>q.id)).size,Q.length);for(const q of Q){assert.ok(q.lat>20&&q.lat<27&&q.lng>117&&q.lng<123,q.id);assert.ok(new URL(q.src).protocol==='https:');assert.ok(LESSONS[q.id]?.fact);assert.ok(q.difficulty>=1&&q.difficulty<=3);assert.ok(q.audit?.locationNote);assert.ok(q.audit?.checkedAt)}});
const run=()=>({ids:makeSet('2026-10-26'),idx:0,answers:[]});
test('corrupt saves rejected, legacy saves supported, quota failures graceful',()=>{const data=new Map();let failed=false;const store=createStorage({getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)});const r=run();data.set('timemap:v2:2026-10-26',JSON.stringify(r));assert.deepEqual(store.load('2026-10-26').ids,r.ids);assert.equal(validateRun({...r,ids:['unknown']}),null);assert.equal(validateRun({...r,answers:[{id:r.ids[0],distance:NaN,score:100}]}),null);data.set('timemap:v3:2026-10-27','broken');assert.equal(store.load('2026-10-27'),null);assert.equal(createStorage({setItem(){throw Error()},getItem(){throw Error()}},()=>failed=true).save('x',r),false);assert.ok(failed)});
test('history idempotent and streak allows yesterday but expires after gap',()=>{const data=new Map(),store=createStorage({getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)});const r=run();r.answers=r.ids.map(id=>({id,distance:0,score:100}));store.complete('2026-10-25',r);store.complete('2026-10-25',r);assert.equal(store.history().length,1);assert.equal(streak(store.history(),'2026-10-26'),1);assert.equal(streak(store.history(),'2026-10-27'),0);store.complete('2026-10-26',r);assert.equal(streak(store.history(),'2026-10-26'),2)});
test('v3.1 bank reaches 45 with 24 sourced regional additions',()=>{
 assert.equal(Q.length,45);const additions=Q.filter(q=>q.audit.reviewBatch==='v3.1');assert.equal(additions.length,24);
 assert.ok(additions.every(q=>q.region!=='north'));
 for(const region of ['central','south','east','islands'])assert.ok(Q.filter(q=>q.region===region).length>=9,region);
 for(const q of Q){assert.ok(['history','social','culture','sports'].includes(q.c));assert.ok(q.topic);assert.ok(['official-point','approximate-site'].includes(q.audit.locationPrecision));assert.equal(q.audit.factStatus,'reviewed');assert.equal(q.audit.sourceAvailability,'readable');assert.ok(new URL(q.audit.coordinateSource).protocol==='https:');assert.ok(q.audit.factNote);assert.ok(q.lesson.key.length>10)}
});
test('730 dates keep five regions, three difficulties, >=3 categories, <=2 per category and <=1 baseball',()=>{
 const seen=new Set();for(let i=0;i<730;i++){
  const key=new Date(Date.UTC(2026,0,i+1)).toISOString().slice(0,10),ids=makeSet(key),qs=ids.map(id=>Q.find(q=>q.id===id));
  assert.deepEqual(ids,makeSet(key));assert.equal(new Set(qs.map(q=>q.region)).size,5);assert.equal(new Set(qs.map(q=>q.difficulty)).size,3,key);assert.ok(new Set(qs.map(q=>q.c)).size>=3,key);
  for(const c of new Set(qs.map(q=>q.c)))assert.ok(qs.filter(q=>q.c===c).length<=2,key);
  assert.ok(qs.filter(q=>q.topic==='baseball').length<=1,key);ids.forEach(id=>seen.add(id));
 }assert.equal(seen.size,Q.length);
});
test('v3 saved IDs survive expansion and daily seed has a fixed regression fixture',()=>{
 // IDs are the persistence contract; a stored v3 run survives v3.1 expansion.
 const r=run();r.ids=['tianma','dragon','anping','beinan','penghu-fort'];
 assert.deepEqual(validateRun(r).ids,r.ids);
 assert.deepEqual(makeSet('2026-11-02'),['erkan','chiayi-prison','pinegarden','jiji','universiade17']);
});
test('malformed answer and history entries never break the UI',()=>{
 const r=run();assert.equal(validateRun({...r,answers:[null]}),null);
 const data=new Map([['timemap:history:v3',JSON.stringify([null,{}, {date:'2026-11-01',score:300,ids:['unknown',r.ids[0]]},{date:'2026-11-01',score:400}])]]);
 const store=createStorage({getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)});assert.equal(store.history().length,1);assert.deepEqual(store.history()[0].ids,[r.ids[0]]);
});
