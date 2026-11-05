import {DAILY_SCHEDULE} from './daily-schedule.js';
import {Q} from './questions.js';
export const taipeiDate=(now=new Date())=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
export function km(a,b){let p=Math.PI/180,dl=(b.lat-a.lat)*p,dn=(b.lng-a.lng)*p,h=Math.sin(dl/2)**2+Math.cos(a.lat*p)*Math.cos(b.lat*p)*Math.sin(dn/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(h)))}
export function calcScore(d){return Math.min(100,Math.max(0,Math.round(100*Math.exp(-d/85))))}
export function hash(t){let h=2166136261;for(const ch of t){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
export function rand(s){return()=>{s=(s+0x6d2b79f5)|0;let a=Math.imul(s^s>>>15,1|s);a^=a+Math.imul(a^a>>>7,61|a);return((a^a>>>14)>>>0)/4294967296}}
export function shuffle(a,r){a=a.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
// Calendar compiled with regional bag fairness and daily diversity constraints.
// Day index depends only on the Taiwan date, never local history or request order.
export function makeSet(key){
 const day=/^\d{4}-\d{2}-\d{2}$/.test(key)?Math.floor(Date.parse(key+'T00:00:00Z')/86400000):hash(key);
 const offset=((day%DAILY_SCHEDULE.length)+DAILY_SCHEDULE.length)%DAILY_SCHEDULE.length;
 return shuffle(DAILY_SCHEDULE[offset],rand(hash(key)));
}
