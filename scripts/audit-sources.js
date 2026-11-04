// Network-only editorial aid. A successful response never establishes historical truth.
import {Q} from '../src/questions.js';
import {createHash} from 'node:crypto';
import {writeFile} from 'node:fs/promises';
const tasks=[...new Set(Q.flatMap(q=>[q.src,q.audit.coordinateSource]))];
const results=[];let cursor=0;
await Promise.all(Array.from({length:4},async()=>{
 while(cursor<tasks.length){const url=tasks[cursor++];let result={url};
  try{const r=await fetch(url,{signal:AbortSignal.timeout(30000)});const text=await r.text();result={...result,status:r.status,finalURL:r.url,title:text.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g,' ').trim()||null,bytes:Buffer.byteLength(text),sha256:createHash('sha256').update(text).digest('hex')};}
  catch(e){result.error=e.message}
  results.push(result);console.log(result.status||'ERROR',result.title||url);
 }
}));
await writeFile('docs/SOURCE-CHECK.json',JSON.stringify({checkedAt:new Date().toISOString(),scope:'All 45 questions and their coordinate sources; HTTP availability only. Semantic review is in QUESTION-AUDIT.md. Original 21 retain the 2026-10-26 editorial audit.',results:results.sort((a,b)=>a.url.localeCompare(b.url))},null,2)+'\n');
if(results.some(r=>r.status!==200))process.exitCode=1;
