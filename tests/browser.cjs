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
   await p.goto(base);
   check(engine.name()+' homepage defers topology and SVG geometry',await p.locator('.map-county').count()===0&&!await p.evaluate(()=>performance.getEntriesByType('resource').some(r=>r.name.includes('towns-10t.json'))));
   await p.locator('#dailyStart').click();await p.locator('#game').waitFor({state:'visible'});
   await p.waitForFunction(()=>document.getElementById('mapstatus').textContent.includes('鄉鎮市區'));
   check(engine.name()+' town geometry waits for first close zoom',await p.locator('.map-town').count()===0);
   check(engine.name()+' daily starts with five questions',(await p.locator('#qcount').textContent()).includes('1 / 5'));
   let pt=await position(p),v=await box(p),y=await p.evaluate(()=>scrollY);
   await p.mouse.move(pt.x,pt.y);await p.mouse.wheel(0,140);await pause(p);
   check(engine.name()+' wheel down scrolls page without zoom',await p.evaluate(()=>scrollY)>y+30&&await box(p)===v);
   y=await p.evaluate(()=>scrollY);await p.mouse.wheel(0,-100);await pause(p);
   check(engine.name()+' wheel up scrolls page without zoom',await p.evaluate(()=>scrollY)<y-20&&await box(p)===v);
   pt=await position(p);y=await p.evaluate(()=>scrollY);await p.mouse.move(pt.x,pt.y);await p.mouse.wheel(0,90);await pause(p);
   check(engine.name()+' wheel over map still scrolls the page',await p.evaluate(()=>scrollY)>y+20&&await box(p)===v);
   {const mb=await p.locator('#themap').boundingBox();await p.locator('#themap').click({position:{x:mb.width*.55,y:mb.height*.52}})}check(engine.name()+' desktop tap places a pin',await p.locator('#submit').isEnabled());
   await p.locator('#zoomIn').click();await p.locator('#zoomIn').click();await pause(p);check(engine.name()+' plus zooms',await box(p)!==v);v=await box(p);
   // Inspect real, on-screen text boxes; DOM presence alone is not visible-label coverage.
   for(const [county,text] of [['臺中市','台中市'],['臺南市','台南市'],['臺北市','台北市']]){
    await p.locator('#jumpCounty').selectOption(county);await pause(p);
    check(engine.name()+' visible county at detailed zoom '+county,await p.locator('#countyLabels text').filter({hasText:text}).isVisible()&&(await p.locator('#mapLocation').textContent()).includes(county));
    const labels=await p.locator('#countyLabels text,#townLabels text').evaluateAll(els=>els.map(e=>{const b=e.getBoundingClientRect();return {text:e.textContent,x:b.x,y:b.y,w:b.width,h:b.height,county:e.classList.contains('county-label')}}));
    check(engine.name()+' labels avoid each other '+county,labels.every((a,i)=>labels.slice(i+1).every(b=>a.x+a.w+2<=b.x||b.x+b.w+2<=a.x||a.y+a.h+2<=b.y||b.y+b.h+2<=a.y)));
    check(engine.name()+' county hierarchy remains readable '+county,labels.filter(a=>a.county).every(a=>a.h>=16)&&labels.filter(a=>!a.county).every(a=>a.h>=10&&a.h<19));
   }
   await p.locator('#jumpCounty').selectOption('臺中市');await p.locator('#zoomIn').click();await p.locator('#zoomIn').click();await pause(p);
   check(engine.name()+' deep zoom retains county context',(await p.locator('#mapLocation').textContent()).includes('臺中市')&&await p.locator('.county-label-zoomed').count()>0);
   await p.screenshot({path:'test-output/'+engine.name()+'-desktop-zoom.png',fullPage:true});
   await p.locator('#jumpCounty').selectOption('臺中市');v=await box(p);
   await p.locator('#counties').evaluate(el=>{window.originalCountyNode=el.firstChild;window.geometryMutations=0;window.geometryObserver=new MutationObserver(records=>window.geometryMutations+=records.length);window.geometryObserver.observe(el,{childList:true,subtree:true})});
   pt=await position(p);await p.mouse.move(pt.x,pt.y);await p.mouse.down();await p.mouse.move(pt.x+60,pt.y+70,{steps:8});await p.mouse.up();await pause(p);
   check(engine.name()+' mouse drag pans while preserving the selected pin',await box(p)!==v&&await p.locator('#submit').isEnabled());
   check(engine.name()+' pan preserves SVG geometry nodes',await p.locator('#counties').evaluate(el=>el.firstChild===window.originalCountyNode&&window.geometryMutations===0));
   v=await box(p);await p.locator('#zoomOut').click();await pause(p);
   check(engine.name()+' minus zooms out',Number((await box(p)).split(' ')[2])>Number(v.split(' ')[2]));
   check(engine.name()+' close zoom mounts town geometry once',await p.locator('.map-town').count()>300);
   await p.locator('#zoomHome').click();
   // Finish a real five-question daily run through the public UI.
   let sum=0,ids;
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
   check(engine.name()+' completion records five collected stories and tomorrow cue',(await p.locator('#storyCount').textContent()).startsWith('5 /')&&(await p.locator('#nextDaily').textContent()).includes('00:00'));
   await p.reload();await p.locator('#dailyStart').click();check(engine.name()+' completed daily persists',await p.locator('#summary').isVisible());
   await p.evaluate(()=>{Object.defineProperty(navigator,'share',{value:undefined,configurable:true});Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{window.sharedText=text}},configurable:true})});await p.locator('#share').click();check(engine.name()+' share contains score without answer spoilers',await p.evaluate(()=>window.sharedText.includes('/ 500')&&!window.sharedText.includes('正確位置')));
   await p.locator('#again').click();check(engine.name()+' practice still works',(await p.locator('#qcount').textContent()).includes('自由練習')&&await p.locator('#mobileMapLaunch').isHidden());
   check(engine.name()+' daily history recorded once',await p.locator('#historyList li').count()===1);
   // History is deliberately absent from the active answering flow.
   check(engine.name()+' active game keeps history out of the way',await p.locator('#historySection').isHidden());
   check(engine.name()+' no JavaScript errors',errors.length===0);
   const axe=require('axe-core');await p.addScriptTag({content:axe.source});const audit=await p.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));fs.writeFileSync('test-output/'+engine.name()+'-axe.json',JSON.stringify(audit.violations,null,2));check(engine.name()+' WCAG A/AA automated checks',audit.violations.length===0);
   await p.locator('#themap').focus();await p.keyboard.press('Enter');check(engine.name()+' keyboard flag',await p.locator('#submit').isEnabled());
   await p.goto(base+'/taiwan-timemap/');await p.locator('#dailyStart').click();check(engine.name()+' GitHub Pages subpath',await p.locator('#summary').isVisible());
   await ctx.close();
   const fallbackContext=await b.newContext();await fallbackContext.route('**/assets/towns-10t.json',route=>route.abort());const f=await fallbackContext.newPage();await f.goto(base);await f.locator('#dailyStart').click();await f.waitForFunction(()=>document.getElementById('mapstatus').textContent.includes('暫時無法'));check(engine.name()+' missing topology retains 22 offline counties',await f.locator('.map-county').count()===22);await f.locator('#keyboardPin').click();await f.locator('#submit').click();check(engine.name()+' fallback still scores',await f.locator('#result').isVisible());await fallbackContext.close();
   const broken=await b.newContext();await broken.addInitScript(()=>{localStorage.setItem('timemap:v3:'+new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei'}).format(new Date()),'{broken');Object.defineProperty(Storage.prototype,'setItem',{value(){throw new DOMException('Quota exceeded','QuotaExceededError')}})});const ep=await broken.newPage();await ep.goto(base);await ep.locator('#dailyStart').click();await ep.locator('#keyboardPin').click();await ep.locator('#submit').click();check(engine.name()+' corrupt save and quota error remain playable with notice',await ep.locator('#result').isVisible()&&await ep.locator('#storageNotice').isVisible());await broken.close();
   const midnightContext=await b.newContext(),mp=await midnightContext.newPage();await mp.clock.install({time:new Date('2026-10-26T15:59:50Z')});await mp.goto(base);await mp.locator('#dailyStart').click();const original=await mp.locator('#qtitle').textContent();await mp.clock.fastForward(40000);check(engine.name()+' midnight preserves active run and announces new day',await mp.locator('#dayNotice').isVisible()&&await mp.locator('#qtitle').textContent()===original);await midnightContext.close();
   const mobile=await b.newContext({...devices['iPhone 13']}),m=await mobile.newPage(),mobileErrors=[];m.on('pageerror',e=>mobileErrors.push(e.message));
   await m.goto(base);await m.screenshot({path:'test-output/'+engine.name()+'-home.png',fullPage:true});await m.locator('#dailyStart').tap();
   check(engine.name()+' mobile uses a dedicated location picker',await m.locator('#mobileMapLaunch').isVisible()&&await m.locator('#mapframe').isHidden());
   await m.locator('#mobileMapLaunch').tap();
   check(engine.name()+' fullscreen map opens with direct gestures',await m.locator('#mapframe').isVisible()&&await m.locator('#mapframe').evaluate(e=>e.classList.contains('mobile-map-open'))&&await m.locator('#themap').evaluate(e=>getComputedStyle(e).touchAction)==='none');
   await m.screenshot({path:'test-output/'+engine.name()+'-picker.png'});pt=await position(m);await m.touchscreen.tap(pt.x,pt.y);
   check(engine.name()+' fullscreen tap places flag',await m.locator('#submit').isEnabled()&&await m.locator('#mobileMapDone').isEnabled());
   if(engine===chromium){
    await m.evaluate(()=>{window.gestureLabelMutations=0;window.labelObserver=new MutationObserver(records=>{if(document.getElementById('mapframe').classList.contains('interacting'))window.gestureLabelMutations+=records.length});for(const id of ['countyLabels','townLabels','towns'])window.labelObserver.observe(document.getElementById(id),{childList:true,subtree:true})});
    const c=await mobile.newCDPSession(m);pt=await position(m);v=await box(m);y=await m.evaluate(()=>scrollY);
    await m.locator('#zoomIn').tap();pt=await position(m);v=await box(m);await swipe(c,m,pt.x,pt.y,80);
    check('mobile fullscreen drag pans without page scroll and preserves flag',await box(m)!==v&&Math.abs(await m.evaluate(()=>scrollY)-y)<3&&await m.locator('#submit').isEnabled());
    pt=await position(m);v=await box(m);
    await c.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:pt.x-30,y:pt.y,id:1},{x:pt.x+30,y:pt.y,id:2}]});
    for(let i=1;i<=8;i++)await c.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:pt.x-30-i*4,y:pt.y,id:1},{x:pt.x+30+i*4,y:pt.y,id:2}]});
    await c.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await pause(m);
    check('mobile fullscreen pinch zooms and preserves flag',await box(m)!==v&&await m.locator('#submit').isEnabled());
    check('gesture frames defer labels and town mounting',await m.evaluate(()=>window.gestureLabelMutations===0));
   }
   await m.locator('#mobileMapDone').tap();
   check(engine.name()+' completing picker returns to question',await m.locator('#mapframe').isHidden()&&!await m.locator('body').evaluate(e=>e.classList.contains('map-picker-open'))&&await m.locator('#submit').isEnabled());
   if(engine===chromium){
    const c=await mobile.newCDPSession(m);y=await m.evaluate(()=>scrollY);await swipe(c,m,200,620,-150);
    check('mobile page scroll works after closing picker',await m.evaluate(()=>scrollY)>y+20);
   }
   check(engine.name()+' no horizontal overflow',await m.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   check(engine.name()+' touch buttons at least 44px',await m.locator('button:visible').evaluateAll(els=>els.every(e=>e.getBoundingClientRect().width>=44&&e.getBoundingClientRect().height>=44)));
   await m.screenshot({path:'test-output/'+engine.name()+'-mobile.png',fullPage:true});
   await m.locator('#submit').tap();
   check(engine.name()+' mobile knowledge card is readable',await m.locator('#lessonCard').isVisible()&&(await m.locator('#lessonFact').textContent()).length>10);
   await m.locator('#storyDetails summary').tap();check(engine.name()+' location provenance and audit date expand',await m.locator('#coordinateSource').isVisible()&&(await m.locator('#auditDate').textContent()).includes('史料核對'));
   await m.locator('#viewAnswer').tap();check(engine.name()+' mobile answer map is read only',await m.locator('#mobileMapDone').textContent()==='返回結果');
   await m.locator('#mobileMapDone').tap();
   await m.locator('#next').tap();
   await m.locator('#mobileMapLaunch').tap();
   check(engine.name()+' picker announces dialog and traps background focus',await m.locator('#mapframe').getAttribute('aria-modal')==='true'&&await m.locator('#qtitle').evaluate(e=>e.closest('[inert]')!==null));
   await m.locator('#mobileMapCancel').focus();await m.keyboard.press('Shift+Tab');check(engine.name()+' picker focus wraps to county selector',await m.locator('#jumpCounty').evaluate(e=>e===document.activeElement&&!e.inert));await m.keyboard.press('Tab');check(engine.name()+' picker Tab wraps back',await m.locator('#mobileMapCancel').evaluate(e=>e===document.activeElement));
   const axeMobile=require('axe-core');await m.addScriptTag({content:axeMobile.source});const dialogAudit=await m.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
   fs.writeFileSync('test-output/'+engine.name()+'-mobile-axe.json',JSON.stringify(dialogAudit.violations,null,2));check(engine.name()+' mobile dialog automated accessibility',dialogAudit.violations.length===0);
   await m.keyboard.press('Escape');check(engine.name()+' Escape closes picker and restores focus',await m.locator('#mapframe').isHidden()&&await m.locator('#mobileMapLaunch').evaluate(e=>e===document.activeElement));
   for(let i=1;i<5;i++){
    await m.locator('#mobileMapLaunch').tap();
    await m.locator('#jumpCounty').selectOption('臺東縣');
    check(engine.name()+' mobile county shortcut '+i,await box(m)!=='0 0 780 960');
    // Pick with the same tap used on phones, not a test-only state injection.
    await m.locator('#themap').tap({position:{x:215,y:360}});
    await m.locator('#mobileMapDone').tap();await m.locator('#submit').tap();await m.locator('#next').tap();
   }
   check(engine.name()+' mobile five-question run completes',await m.locator('#summary').isVisible()&&await m.locator('#learnReview details').count()===5);
   await m.locator('#learnReview summary').first().tap();check(engine.name()+' recap expands story and public source',await m.locator('#learnReview a').first().isVisible());
   await m.locator('#historyList summary').first().tap();check(engine.name()+' history reopens five learned stories',await m.locator('#historyList a').count()===5&&await m.locator('#historyList a').first().isVisible());
   await m.evaluate(()=>{Object.defineProperty(navigator,'share',{value:undefined,configurable:true});Object.defineProperty(navigator,'clipboard',{value:undefined,configurable:true})});await m.locator('#share').tap();check(engine.name()+' manual share fallback is available',await m.locator('#shareFallback').isVisible());
   await m.screenshot({path:'test-output/'+engine.name()+'-summary.png',fullPage:true});
   await m.locator('#goHome').tap();check(engine.name()+' homepage shows completed streak',await m.locator('#streak').textContent()==='1 天');
   for(const width of [320,375,430]){await m.setViewportSize({width,height:844});check(engine.name()+' home overflow at '+width,await m.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))}
   check(engine.name()+' mobile run has no JavaScript errors',mobileErrors.length===0);
   await mobile.close();
  }finally{await b.close()}
 }
 fs.writeFileSync('test-output/browser-results.json',JSON.stringify({url:base,passed:results},null,2));
}
run().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>server.close());
