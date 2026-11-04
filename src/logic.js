import {Q} from './questions.js';
export const taipeiDate=(now=new Date())=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
export function km(a,b){let p=Math.PI/180,dl=(b.lat-a.lat)*p,dn=(b.lng-a.lng)*p,h=Math.sin(dl/2)**2+Math.cos(a.lat*p)*Math.cos(b.lat*p)*Math.sin(dn/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(h)))}
export function calcScore(d){return Math.min(100,Math.max(0,Math.round(100*Math.exp(-d/85))))}
export function hash(t){let h=2166136261;for(const ch of t){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
export function rand(s){return()=>{s=(s+0x6d2b79f5)|0;let a=Math.imul(s^s>>>15,1|s);a^=a+Math.imul(a^a>>>7,61|a);return((a^a>>>14)>>>0)/4294967296}}
export function shuffle(a,r){a=a.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
// Regional bags rotate by Taiwan calendar day. No browser history affects today's set.
export function makeSet(key){
 const random=rand(hash(key)),regions=['north','central','south','east','islands'];
 const day=/^\d{4}-\d{2}-\d{2}$/.test(key)?Math.floor(Date.parse(key+'T00:00:00Z')/86400000):hash(key);
 const bags=regions.map(region=>{const bag=shuffle(Q.filter(q=>q.region===region),rand(hash('v3:'+region)));const offset=((day%bag.length)+bag.length)%bag.length;return [...bag.slice(offset),...bag.slice(0,offset)]});
 let best=null,bestScore=-Infinity;
 function visit(chosen,rotationCost){
  if(chosen.length===5){
   const categories=new Set(chosen.map(q=>q.c)).size;
   const levels=new Set(chosen.map(q=>q.difficulty)).size;
   const hard=chosen.filter(q=>q.difficulty===3).length;
   // At most 4^5 = 1024 combinations even as the catalog grows.
   const topics=new Set(chosen.map(q=>q.topic)).size;
   const largest=Math.max(...Object.values(chosen.reduce((counts,q)=>(counts[q.c]=(counts[q.c]||0)+1,counts),{})));
   const score=categories*100+levels*40+topics*18-Math.max(0,largest-2)*80-Math.abs(hard-1)*8-rotationCost*4;
   if(score>bestScore){bestScore=score;best=chosen}return;
  }
  bags[chosen.length].slice(0,4).forEach((q,i)=>visit([...chosen,q],rotationCost+i));
 }
 visit([],0);
 return shuffle(best,random).map(q=>q.id);
}
