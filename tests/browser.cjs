const fs=require('node:fs'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium,webkit,devices}=require('playwright');
const target=process.env.TEST_URL;
const path=require('node:path');
const server=http.createServer((req,res)=>{try{const url=new URL(req.url,'http://localhost'),name=url.pathname==='/'?'/index.html':url.pathname.replace(/^\/taiwan-timemap/, '');const file=path.resolve('.','.'+(name==='/'?'/index.html':name));if(!file.startsWith(process.cwd()+path.sep))throw Error();res.setHeader('Content-Type',({'.js':'text/javascript','.css':'text/css','.html':'text/html','.json':'application/json'})[path.extname(file)]||'text/plain');res.end(fs.readFileSync(file))}catch{res.writeHead(404);res.end('missing')}});
fs.mkdirSync('test-output',{recursive:true});
const results=[];
const check=(name,ok)=>{assert(ok,name);results.push(name);console.log('PASS',name)};
const pause=p=>p.waitForTimeout(250);
async function position(p){await p.locator('#themap').evaluate(e=>window.scrollTo({top:e.getBoundingClientRect().top+scrollY-180,behavior:'instant'}));await pause(p);const b=await p.locator('#themap').boundingBox();return {x:b.x+b.width*.55,y:b.y+160};}
const box=p=>p.locator('#themap').getAttribute('viewBox');
async function swipe(c,p,x,y,dy){
 await c.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y,id:1}]});
 for(let i=1;i<=12;i++){await c.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y+dy*i/12,id:1}]});await p.waitForTimeout(20)}
 await c.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(500);
}
async function run(){
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=target||'http://127.0.0.1:'+server.address().port;
 for(const engine of [chromium,webkit]){
  const b=await engine.launch({headless:true});
  try{
   const ctx=await b.newContext({viewport:{width:1280,height:900}}),p=await ctx.newPage(),errors=[];
   p.on('pageerror',e=>errors.push(e.message));
   await p.goto(base);await p.locator('#dailyStart').click();await p.locator('#game').waitFor({state:'visible'});
   check(engine.name()+' daily starts with five questions',(await p.locator('#qcount').textContent()).includes('1 / 5'));
   let pt=await position(p),v=await box(p),y=await p.evaluate(()=>scrollY);
   await p.mouse.move(pt.x,pt.y);await p.mouse.wheel(0,140);await pause(p);
   check(engine.name()+' wheel down scrolls page without zoom',await p.evaluate(()=>scrollY)>y+30&&await box(p)===v);
   y=await p.evaluate(()=>scrollY);await p.mouse.wheel(0,-100);await pause(p);
   check(engine.name()+' wheel up scrolls page without zoom',await p.evaluate(()=>scrollY)<y-20&&await box(p)===v);
   await p.locator('#mapInteraction').click();pt=await position(p);y=await p.evaluate(()=>scrollY);await p.mouse.move(pt.x,pt.y);await p.mouse.wheel(0,90);await pause(p);
   check(engine.name()+' wheel scrolls with map mode enabled',await p.evaluate(()=>scrollY)>y+20&&await box(p)===v);
   await p.locator('#themap').click({position:{x:100,y:100}});check(engine.name()+' map movement mode never pins',await p.locator('#submit').isDisabled());
   await p.locator('#zoomIn').click();await pause(p);check(engine.name()+' plus zooms',await box(p)!==v);v=await box(p);
   await p.locator('#counties').evaluate(el=>{window.originalCountyNode=el.firstChild;window.geometryMutations=0;window.geometryObserver=new MutationObserver(records=>window.geometryMutations+=records.length);window.geometryObserver.observe(el,{childList:true,subtree:true})});
   pt=await position(p);await p.mouse.move(pt.x,pt.y);await p.mouse.down();await p.mouse.move(pt.x+60,pt.y+70,{steps:8});await p.mouse.up();await pause(p);
   check(engine.name()+' mouse drag pans and does not place pin',await box(p)!==v&&await p.locator('#submit').isDisabled());
   check(engine.name()+' pan preserves SVG geometry nodes',await p.locator('#counties').evaluate(el=>el.firstChild===window.originalCountyNode&&window.geometryMutations===0));
   v=await box(p);await p.locator('#zoomOut').click();await pause(p);
   check(engine.name()+' minus zooms out',Number((await box(p)).split(' ')[2])>Number(v.split(' ')[2]));
   await p.locator('#zoomHome').click();
   // Finish a real five-question daily run through the public UI.
   await p.locator('#mapInteraction').click();let sum=0,ids;
   for(let i=0;i<5;i++){
    await p.locator('#zoomHome').click();await p.locator('#themap').click({position:{x:(await p.locator('#themap').boundingBox()).width/2,y:(await p.locator('#themap').boundingBox()).height/2}});
    await p.locator('#submit').click();
    const points=Number((await p.locator('#points').textContent()).match(/\d+/)[0]);sum+=points;
    check(engine.name()+' question '+(i+1)+' has score and history sources',points>=0&&points<=100&&(await p.locator('#lessonFact').textContent()).length>5&&(await p.locator('#lessonKey').textContent()).length>5&&(await p.locator('#lessonSource').getAttribute('href')).startsWith('http'));
    const saved=await p.evaluate(()=>JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k=>k.startsWith('timemap:v3:')))));
    check(engine.name()+' question '+(i+1)+' saved once',saved.answers.length===i+1);
    if(i===0){ids=saved.ids;await p.reload();await p.locator('#dailyStart').click();check(engine.name()+' reload restores answer knowledge card',await p.locator('#result').isVisible());await p.locator('#next').click();check(engine.name()+' resumes at question 2',(await p.locator('#qcount').textContent()).includes('2 / 5'));continue}
    await p.locator('#next').click();
   }
   check(engine.name()+' five results and five knowledge cards',await p.locator('#review .review').count()===5&&await p.locator('#learnReview details').count()===5);
   check(engine.name()+' total equals sum of scores',Number((await p.locator('#finalScore').textContent()).split('/')[0])===sum);
   await p.reload();await p.locator('#dailyStart').click();check(engine.name()+' completed daily persists',await p.locator('#summary').isVisible());
   await p.evaluate(()=>{Object.defineProperty(navigator,'share',{value:undefined,configurable:true});Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{window.sharedText=text}},configurable:true})});await p.locator('#share').click();check(engine.name()+' share contains score without answer spoilers',await p.evaluate(()=>window.sharedText.includes('/ 500')&&!window.sharedText.includes('正確位置')));
   await p.locator('#again').click();check(engine.name()+' practice still works',(await p.locator('#qcount').textContent()).includes('自由練習')&&await p.locator('#mapInteraction').getAttribute('aria-pressed')==='false');
   check(engine.name()+' daily history recorded once',await p.locator('#historyList li').count()===1);
   check(engine.name()+' no JavaScript errors',errors.length===0);
   const axe=require('axe-core');await p.addScriptTag({content:axe.source});const audit=await p.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));fs.writeFileSync('test-output/'+engine.name()+'-axe.json',JSON.stringify(audit.violations,null,2));check(engine.name()+' WCAG A/AA automated checks',audit.violations.length===0);
   await p.locator('#themap').focus();await p.keyboard.press('Enter');check(engine.name()+' keyboard flag',await p.locator('#submit').isEnabled());
   await p.goto(base+'/taiwan-timemap/');await p.locator('#dailyStart').click();check(engine.name()+' GitHub Pages subpath',await p.locator('#summary').isVisible());
   await ctx.close();
   const fallbackContext=await b.newContext();await fallbackContext.route('**/assets/towns-10t.json',route=>route.abort());const f=await fallbackContext.newPage();await f.goto(base);await f.locator('#dailyStart').click();await f.waitForFunction(()=>document.getElementById('mapstatus').textContent.includes('暫時無法'));check(engine.name()+' missing topology retains 22 offline counties',await f.locator('.map-county').count()===22);await f.locator('#keyboardPin').click();await f.locator('#submit').click();check(engine.name()+' fallback still scores',await f.locator('#result').isVisible());await fallbackContext.close();
   const broken=await b.newContext();await broken.addInitScript(()=>{localStorage.setItem('timemap:v3:'+new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei'}).format(new Date()),'{broken');Object.defineProperty(Storage.prototype,'setItem',{value(){throw new DOMException('Quota exceeded','QuotaExceededError')}})});const ep=await broken.newPage();await ep.goto(base);await ep.locator('#dailyStart').click();await ep.locator('#keyboardPin').click();await ep.locator('#submit').click();check(engine.name()+' corrupt save and quota error remain playable with notice',await ep.locator('#result').isVisible()&&await ep.locator('#storageNotice').isVisible());await broken.close();
   const midnightContext=await b.newContext(),mp=await midnightContext.newPage();await mp.clock.install({time:new Date('2026-10-26T15:59:50Z')});await mp.goto(base);await mp.locator('#dailyStart').click();const original=await mp.locator('#qtitle').textContent();await mp.clock.fastForward(40000);check(engine.name()+' midnight preserves active run and announces new day',await mp.locator('#dayNotice').isVisible()&&await mp.locator('#qtitle').textContent()===original);await midnightContext.close();
   const mobile=await b.newContext({...devices['iPhone 13']}),m=await mobile.newPage();
   await m.goto(base);await m.locator('#dailyStart').tap();
   check(engine.name()+' mobile defaults to native page gestures',await m.locator('#themap').evaluate(e=>getComputedStyle(e).touchAction)==='pan-y pinch-zoom');
   pt=await position(m);await m.touchscreen.tap(pt.x,pt.y);
   check(engine.name()+' mobile tap places flag',await m.locator('#submit').isEnabled());
   await m.reload();await m.locator('#dailyStart').tap();
   if(engine===chromium){
    const c=await mobile.newCDPSession(m);pt=await position(m);v=await box(m);y=await m.evaluate(()=>scrollY);
    await swipe(c,m,pt.x,pt.y+100,-140);
    check('mobile swipe up scrolls down without moving map or placing flag',await m.evaluate(()=>scrollY)>y+30&&await box(m)===v&&await m.locator('#submit').isDisabled());
    pt=await position(m);y=await m.evaluate(()=>scrollY);await swipe(c,m,pt.x,pt.y,130);
    check('mobile swipe down scrolls up',await m.evaluate(()=>scrollY)<y-30&&await box(m)===v);
    await m.locator('#mapInteraction').tap();check('mobile map mode owns gestures',await m.locator('#themap').evaluate(e=>getComputedStyle(e).touchAction)==='none');
    await m.locator('#zoomIn').tap();pt=await position(m);v=await box(m);y=await m.evaluate(()=>scrollY);await swipe(c,m,pt.x,pt.y,80);
    check('mobile deliberate drag pans without page scroll or flag',await box(m)!==v&&Math.abs(await m.evaluate(()=>scrollY)-y)<3&&await m.locator('#submit').isDisabled());
    pt=await position(m);v=await box(m);
    await c.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:pt.x-30,y:pt.y,id:1},{x:pt.x+30,y:pt.y,id:2}]});
    for(let i=1;i<=8;i++)await c.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:pt.x-30-i*4,y:pt.y,id:1},{x:pt.x+30+i*4,y:pt.y,id:2}]});
    await c.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await pause(m);
    check('mobile deliberate pinch zooms without placing flag',await box(m)!==v&&await m.locator('#submit').isDisabled());
    await m.locator('#mapInteraction').tap();pt=await position(m);y=await m.evaluate(()=>scrollY);v=await box(m);await swipe(c,m,pt.x,pt.y+100,-140);
    check('mobile disabling mode restores page scroll',await m.evaluate(()=>scrollY)>y+30&&await box(m)===v);
    pt=await position(m);await m.touchscreen.tap(pt.x,pt.y);check('mobile tap works after scrolling and pinching',await m.locator('#submit').isEnabled());
   }
   await m.locator('#mapInteraction').scrollIntoViewIfNeeded();check(engine.name()+' no horizontal overflow',await m.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   check(engine.name()+' touch buttons at least 48px',await m.locator('button:visible').evaluateAll(els=>els.every(e=>e.getBoundingClientRect().width>=48&&e.getBoundingClientRect().height>=48)));
   await m.screenshot({path:'test-output/'+engine.name()+'-mobile.png',fullPage:true});await mobile.close();
  }finally{await b.close()}
 }
 fs.writeFileSync('test-output/browser-results.json',JSON.stringify({url:base,passed:results},null,2));
}
run().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>server.close());
