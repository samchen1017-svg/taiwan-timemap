import {countyCenters} from './geography.js';
export function createMap({state,choose}) {
// A single topological vector map: GeoJSON/TopoJSON geometry decodes entirely in the browser.
// The map needs no raster tile server. In offline mode, the approximate coast remains available.
const $=id=>document.getElementById(id);
const svg=$('themap'),frame=$('mapframe'),ns='http://www.w3.org/2000/svg';const view={cx:390,cy:480,z:1};let detailedLoaded=false,townsData=[],countiesData=[],islandGeom=[],countyGeom=[],countyBounds={};let drag=null,pointers=new Map(),pinchDist=0,suppressClick=false;
const coast=[[121.55,25.31],[121.72,25.28],[121.83,25.18],[121.95,25.05],[121.88,24.9],[121.84,24.72],[121.78,24.52],[121.73,24.32],[121.65,24.12],[121.63,23.95],[121.55,23.73],[121.46,23.52],[121.39,23.33],[121.32,23.14],[121.23,22.95],[121.16,22.75],[121.07,22.55],[120.96,22.32],[120.85,22.08],[120.82,21.91],[120.73,21.91],[120.69,22.03],[120.61,22.22],[120.51,22.44],[120.4,22.61],[120.29,22.78],[120.23,22.94],[120.18,23.13],[120.12,23.34],[120.11,23.51],[120.15,23.75],[120.24,23.92],[120.36,24.09],[120.48,24.27],[120.59,24.43],[120.69,24.61],[120.83,24.79],[121,24.98],[121.18,25.13],[121.38,25.27]];
function isIsland(lat,lng){return lat>25.7?'matsu':lng<118.9?'kinmen':lng<119.80&&lat>23.1&&lat<24.05?'penghu':'main'}
function project(lat,lng){const type=isIsland(lat,lng);return type==='matsu'?{x:40+(lng-119.82)*170,y:183+(26.42-lat)*185}:type==='kinmen'?{x:35+(lng-118.18)*240,y:728+(24.59-lat)*215}:type==='penghu'?{x:30+(lng-119.30)*200,y:431+(23.95-lat)*200}:{x:215+(lng-119.7)*182,y:95+(25.45-lat)*197}}
function unproject(x,y){let type=x<210&&y>700?'kinmen':x<205&&y>390&&y<575?'penghu':x<205&&y>140&&y<330?'matsu':'main';return type==='matsu'?{lat:26.42-(y-183)/185,lng:119.82+(x-40)/170}:type==='kinmen'?{lat:24.59-(y-728)/215,lng:118.18+(x-35)/240}:type==='penghu'?{lat:23.95-(y-431)/200,lng:119.30+(x-30)/200}:{lat:25.45-(y-95)/197,lng:119.7+(x-215)/182}}
const pth=arr=>arr.map((p,i)=>{let a=project(p[1],p[0]);return(i?'L':'M')+a.x.toFixed(2)+','+a.y.toFixed(2)}).join(' ')+'Z';$('fallbackCoast').setAttribute('d',pth(coast));
const BUILTIN_COUNTIES=[["連江縣","M56,228L64,231L56,234L56,228ZM70,217L70,217ZM152,190L156,193L152,190ZM68,266L67,269L65,270L68,266ZM61,264L61,264Z"],["金門縣","M91,740L106,757L105,760L101,765L84,761L69,772L59,766L62,750L79,753L91,740ZM52,757L56,763L46,768L52,757ZM171,186L171,186Z"],["宜蘭縣","M627,187L613,196L602,217L605,251L613,263L592,319L566,308L562,319L556,318L555,318L513,304L511,291L525,276L535,248L559,239L559,226L590,212L607,199L606,191L627,187Z"],["彰化縣","M353,340L393,378L386,379L382,412L393,417L393,419L391,421L326,416L310,407L353,340Z"],["南投縣","M514,337L504,346L510,364L503,370L500,404L489,426L494,447L490,459L480,462L476,476L464,476L454,492L448,485L422,485L418,459L384,455L386,423L391,421L393,419L382,412L386,379L405,381L423,356L432,361L450,357L482,336L514,337Z"],["雲林縣","M386,423L384,455L403,456L400,466L367,460L364,457L360,453L343,454L319,473L314,470L313,478L296,475L290,453L310,407L326,416L386,423Z"],["屏東縣","M427,609L434,617L432,629L413,638L404,666L413,692L406,701L414,709L411,716L415,724L433,726L434,768L424,777L426,795L409,783L404,790L402,791L399,788L394,770L400,754L387,715L347,682L347,677L347,673L356,610L370,611L387,600L427,609Z"],["臺東縣","M542,493L524,537L526,555L486,607L484,625L456,647L432,709L433,726L415,724L414,709L406,701L413,692L404,666L413,638L432,629L434,617L419,585L430,571L436,531L459,518L467,532L486,538L500,557L509,556L528,508L524,502L533,490L542,493Z"],["花蓮縣","M592,319L564,363L570,379L562,389L542,493L528,495L510,555L500,557L486,538L467,532L457,519L460,513L449,507L464,476L476,476L480,462L492,454L496,438L489,426L511,358L503,354L504,350L504,346L515,341L534,309L562,319L566,308L592,319Z"],["澎湖縣","M87,486L93,501L104,501L109,510L99,509L92,519L80,513L90,513L83,506L91,504L86,488L74,495L73,508L66,508L72,491L87,486ZM58,577L56,582L58,577ZM69,542L71,550L69,542ZM92,470L90,474L89,473L92,470ZM105,568L105,568Z"],["基隆市","M598,157L585,173L566,156L581,149L598,157Z"],["新竹市","M440,240L429,235L438,212L455,222L458,231L449,228L440,240Z"],["臺北市","M556,145L564,174L573,178L560,181L560,191L541,182L543,167L535,163L556,145Z"],["新北市","M581,149L566,156L577,170L590,172L589,162L598,157L619,160L622,177L634,183L606,191L603,202L559,226L559,239L539,248L529,230L531,221L517,215L509,200L511,188L527,180L503,160L523,155L534,134L549,125L565,130L581,149Z"],["臺中市","M534,309L514,337L500,332L450,357L432,361L423,356L405,381L384,375L381,360L370,358L353,340L383,294L421,323L436,323L440,313L460,322L487,303L494,305L499,294L509,294L520,308L534,309Z"],["臺南市","M389,533L373,561L334,599L301,595L298,583L275,565L291,511L310,519L333,499L359,500L368,513L365,532L389,533Z"],["桃園市","M503,160L527,180L509,196L517,215L531,221L529,230L539,248L523,265L506,244L506,230L459,194L448,195L461,175L503,160Z"],["苗栗縣","M499,294L494,305L487,303L460,322L440,313L436,323L426,324L383,294L400,262L434,235L465,260L465,282L491,279L499,294Z"],["新竹縣","M440,240L449,228L458,231L455,222L438,212L448,195L459,194L508,232L506,244L525,264L525,276L501,296L491,279L465,282L465,260L440,240Z"],["嘉義市","M351,476L361,481L362,484L360,488L341,487L351,476Z"],["嘉義縣","M403,457L418,459L422,485L444,485L398,521L387,519L389,533L365,532L368,513L349,496L326,502L307,520L291,511L299,500L293,475L313,478L314,470L319,473L343,454L360,453L364,457L367,460L393,465L403,464L403,457Z"],["高雄市","M301,595L330,599L345,594L385,543L387,519L403,517L436,487L454,489L449,507L460,517L436,531L430,571L419,585L427,609L387,600L370,611L356,610L347,682L326,673L301,595Z"]];
function createSVG(tag,attrs,text){let el=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs||{}))el.setAttribute(k,v);if(text!==undefined)el.textContent=text;return el}
function clearLandVisuals(){for(const id of ['countyShadow','islandShadow','terrainLines','islandTerrain'])$(id).replaceChildren()}
function addLandVisual(d,island){let behind=$(island?'islandShadow':'countyShadow');let texture=$(island?'islandTerrain':'terrainLines');behind.append(createSVG('path',{d,class:'extruded-land',transform:'translate(0 6)'}));texture.append(createSVG('path',{d,class:'terrain-lines',fill:'url(#topoLines)'}))}
function initOfflineCountyMap(){let co=$('counties'),is=$('islandAreas');co.replaceChildren();is.replaceChildren();clearLandVisuals();for(const [name,d] of BUILTIN_COUNTIES){let el=createSVG('path',{d,class:'map-county','data-county':name});let island=['澎湖縣','金門縣','連江縣'].includes(name);(island?is:co).append(el);addLandVisual(d,island);try{let b=el.getBBox();countyBounds[name]={x:b.x+b.width/2,y:b.y+b.height/2}}catch(e){}}$('fallbackCoast').style.display='none';$('mapcredit').textContent='翡翠立體地形圖 · 內建 22 縣市';$('mapstatus').textContent='✓ 22 縣市翡翠地形圖 · 載入行政區';applyView()}
let viewRaf=0,labelsDirty=false,gestureRect=null,mapInteraction=false;
function applyView(refreshLabels=true){
 const w=780/view.z,h=960/view.z;
 view.cx=Math.max(w/2,Math.min(780-w/2,view.cx));
 view.cy=Math.max(h/2,Math.min(960-h/2,view.cy));
 svg.setAttribute('viewBox',`${view.cx-w/2} ${view.cy-h/2} ${w} ${h}`);
 const detailed=detailedLoaded&&view.z>=2.4;
 if(frame.classList.contains('detailed')!==detailed)frame.classList.toggle('detailed',detailed);
 const townDisplay=view.z>=2.4?'':'none';
 if($('towns').style.display!==townDisplay)$('towns').style.display=townDisplay;
 const labelDisplay=view.z>=3.4?'':'none';
 if($('townLabels').style.display!==labelDisplay)$('townLabels').style.display=labelDisplay;
 drawMarkers();
 if(refreshLabels){renderLabels();labelsDirty=false}else labelsDirty=true;
}
function scheduleView(){
 if(viewRaf)return;
 viewRaf=requestAnimationFrame(()=>{viewRaf=0;applyView(false)});
}
function finishView(){
 const pending=!!viewRaf;
 if(pending){cancelAnimationFrame(viewRaf);viewRaf=0}
 if(pending||labelsDirty)applyView(true);
 frame.classList.remove('interacting');
}
function zoom(factor,focus,transient=false){let next=Math.min(detailedLoaded?18:11,Math.max(1,view.z*factor));if(focus){let prop=view.z/next;view.cx=focus.x+(view.cx-focus.x)*prop;view.cy=focus.y+(view.cy-focus.y)*prop}view.z=next;if(transient)scheduleView();else applyView()}
function resetView(){view.cx=390;view.cy=480;view.z=1;applyView()}
function focusAt(pt,z){view.cx=pt.x;view.cy=pt.y;view.z=z;applyView()}
function renderLabels(){let cg=$('countyLabels');cg.replaceChildren();let z=view.z;for(const [name,lat,lng] of countyCenters){let p=project(lat,lng);if(z>=4.1&&detailedLoaded)continue;let compact=z<1.8;let shortName=compact?name.replace(/(?:縣|市)$/,'').replace('臺','台'):name.replace('臺','台');let nord=['新北市','臺北市','基隆市','桃園市','新竹縣','新竹市'].includes(name);let tweaks={'新北市':[-19,-15],'臺北市':[16,12],'基隆市':[13,-10],'新竹市':[-14,14],'新竹縣':[8,11],'桃園市':[-14,0]};if(compact&&tweaks[name]){p.x+=tweaks[name][0];p.y+=tweaks[name][1]}let font=Math.max(2.5,Math.min(23,(compact&&nord?18:21)/z));let lbl=createSVG('text',{x:p.x,y:p.y,'text-anchor':'middle','dominant-baseline':'middle','font-size':font,class:'county-label',style:'stroke-width:'+Math.min(3.2,3/view.z)+'px'},shortName);cg.append(lbl)}let tg=$('townLabels');tg.replaceChildren();if(z<3.4||!detailedLoaded)return;let w=780/z,h=960/z;let n=0,placed=[];for(const r of townsData){let p=r.centroid;if(Math.abs(p.x-view.cx)>w/2-5||Math.abs(p.y-view.cy)>h/2-5)continue;if(n>=60)break;let name=r.name;if(!name)continue;const width=name.length*15/z;if(placed.some(b=>Math.abs(p.x-b.x)<(width+b.width)/2+5/z&&Math.abs(p.y-b.y)<20/z))continue;placed.push({...p,width});n++;tg.append(createSVG('text',{x:p.x,y:p.y,'text-anchor':'middle','dominant-baseline':'middle','font-size':Math.max(1.1,15/z),class:'town-label',style:'stroke-width:'+Math.min(2.2,2/view.z)+'px'},name))}}
function decodeTopology(topo){let cache=new Map();function getArc(i){let k=i>=0?i:~i,reverse=i<0;if(!cache.has(k)){let raw=topo.arcs[k],coords=[],x=0,y=0;for(const [dx,dy] of raw){x+=dx;y+=dy;coords.push([x*topo.transform.scale[0]+topo.transform.translate[0],y*topo.transform.scale[1]+topo.transform.translate[1]])}cache.set(k,coords)}let list=cache.get(k);return reverse?[...list].reverse():list}function join(arcs){let out=[];for(const i of arcs){let pts=getArc(i);out.push(...(out.length?pts.slice(1):pts))}return out}function rings(g){let parts=g.type==='Polygon'?[g.arcs]:g.type==='MultiPolygon'?g.arcs:[];return parts.flatMap(p=>p.map(join))}let countyObj=topo.objects.counties||null,townObj=topo.objects.towns||null;if(!countyObj||!townObj)return false;countiesData=countyObj.geometries.map(g=>({name:g.properties.COUNTYNAME||g.properties.name||'',rings:rings(g)}));townsData=townObj.geometries.map(g=>({name:g.properties.TOWNNAME||g.properties.name||'',county:g.properties.COUNTYNAME||'',rings:rings(g)}));return true}
function pathFromRings(rings){return rings.map(r=>pth(r)).join(' ')}
function displayGeo(){let co=$('counties'),tw=$('towns'),is=$('islandAreas');co.replaceChildren();tw.replaceChildren();is.replaceChildren();clearLandVisuals();countyBounds={};for(const c of countiesData){let d=pathFromRings(c.rings),el=createSVG('path',{d,class:'map-county','data-county':c.name});let island=['金門縣','連江縣','澎湖縣'].includes(c.name);(island?is:co).append(el);addLandVisual(d,island);try{let b=el.getBBox();countyBounds[c.name]={x:b.x+b.width/2,y:b.y+b.height/2}}catch(e){}}for(const t of townsData){let d=pathFromRings(t.rings),el=createSVG('path',{d,class:'map-town','data-county':t.county,'data-town':t.name});(t.county==='金門縣'||t.county==='連江縣'||t.county==='澎湖縣'?is:tw).append(el);let xy=t.rings.flat().map(q=>project(q[1],q[0]));let xs=xy.map(q=>q.x),ys=xy.map(q=>q.y);t.centroid=xs.length?{x:(Math.min(...xs)+Math.max(...xs))/2,y:(Math.min(...ys)+Math.max(...ys))/2}:project(24,121)}$('fallbackCoast').style.display='none';detailedLoaded=true;$('mapstatus').classList.remove('warning');$('mapstatus').textContent='✓ '+countiesData.length+' 縣市、'+townsData.length+' 鄉鎮市區';$('mapcredit').textContent='行政區向量圖資 © 內政部國土測繪中心';applyView()}
async function loadGeo(){let cache=null;try{cache=localStorage.getItem('timemap:topology:towns10t')}catch(e){}if(cache){try{if(decodeTopology(JSON.parse(cache))){displayGeo();return}}catch(e){console.warn('cached topology invalid',e)}}const urls=[new URL('../assets/towns-10t.json',import.meta.url).href];let loaded=false;for(let u of urls){try{let ctrl=new AbortController();let timer;let resp;try{const ctrl=new AbortController();timer=setTimeout(()=>ctrl.abort(),5000);resp=await fetch(u,{signal:ctrl.signal})}finally{clearTimeout(timer)}if(!resp.ok)continue;let text=await resp.text(),geo=JSON.parse(text);if(decodeTopology(geo)){loaded=true;displayGeo();try{localStorage.setItem('timemap:topology:towns10t',text)}catch(e){}break}}catch(e){console.warn('向量圖資未連線',u,e.message)}}if(!loaded){$('mapstatus').textContent='✓ 22 縣市可操作 · 詳細圖資暫時無法載入';$('mapstatus').classList.add('warning');$('mapcredit').textContent='內建翡翠地圖 · 詳細界線載入失敗'}}
function marker(p,which){return `<circle class="pin-outer" cx="${p.x}" cy="${p.y}" r="${Math.max(2,11/view.z)}"/><circle class="pin-${which}" cx="${p.x}" cy="${p.y}" r="${Math.max(1.5,7/view.z)}"/>`}
function drawMarkers(){let el=$('markers'),q=state.qs[state.idx];if(!q){el.innerHTML='';return}let a=state.guess?project(state.guess.lat,state.guess.lng):null,b=project(q.lat,q.lng);let h='';if(a&&state.locked)h+=`<path class="connector" d="M${a.x} ${a.y} L${b.x} ${b.y}"/>`;if(a)h+=marker(a,'guess');if(state.locked)h+=marker(b,'answer');el.innerHTML=h}
function svgpt(clientX,clientY){let p=svg.createSVGPoint();p.x=clientX;p.y=clientY;return p.matrixTransform(svg.getScreenCTM().inverse())}
function setMapInteraction(enabled){
 mapInteraction=enabled;
 pointers.clear();drag=null;pinchDist=0;gestureRect=null;suppressClick=false;finishView();
 frame.classList.toggle('map-interaction',enabled);
 $('mapInteraction').setAttribute('aria-pressed',String(enabled));
 $('mapInteraction').textContent=enabled?'完成移動，回到插旗':'移動／縮放地圖';
 $('mapHelp').textContent=enabled
  ?'地圖操作中：單指拖曳、雙指縮放，可用 ＋／－ 縮放；此模式不插旗。完成後點上方按鈕恢復頁面滑動。滑鼠滾輪仍可捲動頁面。'
  :'手機：單指上下滑動可捲動頁面，輕觸插旗。開啟「操作地圖」後，可單指拖曳、雙指縮放；完成後請關閉。電腦：拖曳移動，滾輪捲動頁面；皆可用 ＋／－ 縮放。';
}
$('mapInteraction').addEventListener('click',()=>setMapInteraction(!mapInteraction));
function pointerDistance(){let arr=[...pointers.values()];return arr.length>=2?Math.hypot(arr[0].x-arr[1].x,arr[0].y-arr[1].y):0}
svg.addEventListener('pointerdown',e=>{
 if(e.button!==0)return;
 pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
 drag={x:e.clientX,y:e.clientY,moved:false};
 gestureRect=svg.getBoundingClientRect();
 if(pointers.size===1)suppressClick=false;
 if(e.pointerType!=='touch'||mapInteraction){try{svg.setPointerCapture(e.pointerId)}catch(_){}}
 if(pointers.size===2&&mapInteraction){pinchDist=pointerDistance();suppressClick=true;frame.classList.add('interacting')}
});
svg.addEventListener('pointermove',e=>{
 if(!pointers.has(e.pointerId))return;
 if(e.pointerType==='touch'&&!mapInteraction){
  if(drag&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>4)suppressClick=true;
  return;
 }
 let prev=pointers.get(e.pointerId);
 pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(pointers.size>=2){
  const d=pointerDistance();
  if(pinchDist&&d>0)zoom(d/pinchDist,undefined,true);
  pinchDist=d;suppressClick=true;frame.classList.add('interacting');return;
 }
 if(!drag)return;
 let dx=e.clientX-prev.x,dy=e.clientY-prev.y;
 if(Math.abs(e.clientX-drag.x)+Math.abs(e.clientY-drag.y)>4)drag.moved=true;
 if(drag.moved){
  frame.classList.add('interacting');
  const rect=gestureRect||svg.getBoundingClientRect();
  const scale=Math.max((780/view.z)/Math.max(1,rect.width),(960/view.z)/Math.max(1,rect.height));
  view.cx-=dx*scale;view.cy-=dy*scale;
  scheduleView();
 }
});
function release(e){
 if(!pointers.has(e.pointerId))return;
 if(e.type==='pointercancel'||e.type==='lostpointercapture')suppressClick=true;
 if(drag?.moved)suppressClick=true;
 pointers.delete(e.pointerId);
 if(!pointers.size){
  drag=null;pinchDist=0;gestureRect=null;finishView();
 }else if(pointers.size===1){
  const left=[...pointers.values()][0];
  drag={x:left.x,y:left.y,moved:true};
  pinchDist=0;
 }
}
svg.addEventListener('pointerup',release);svg.addEventListener('pointercancel',release);svg.addEventListener('lostpointercapture',release);
svg.addEventListener('click',e=>{if(state.locked||mapInteraction||suppressClick){suppressClick=false;return}let pt=svgpt(e.clientX,e.clientY);if(pt.x<0||pt.x>780||pt.y<0||pt.y>960)return;let coord=unproject(pt.x,pt.y);let target=e.target.closest('[data-town],[data-county]');let where=target?.dataset.town?`${target.dataset.county} ${target.dataset.town}`:target?.dataset.county||'';choose(coord.lat,coord.lng,where)});
svg.addEventListener('dblclick',e=>{e.preventDefault();zoom(1.65,svgpt(e.clientX,e.clientY))});
// No wheel handler: native page scrolling works over the map in both modes.
$('zoomIn').addEventListener('click',()=>zoom(1.8));$('zoomOut').addEventListener('click',()=>zoom(1/1.8));$('zoomHome').addEventListener('click',resetView);
let sel=$('jumpCounty');for(const [name] of countyCenters)sel.add(new Option(name,name));sel.addEventListener('change',()=>{let name=sel.value;if(!name)return resetView();let row=countyCenters.find(x=>x[0]===name);let p=project(row[1],row[2]);focusAt(p,name==='金門縣'||name==='連江縣'||name==='澎湖縣'?3.6:5.2)});
$('viewAnswer').addEventListener('click',()=>{let q=state.qs[state.idx];let p=project(q.lat,q.lng);focusAt(p,8);drawMarkers()});

try{initOfflineCountyMap();resetView()}catch(e){console.warn(e);$('mapstatus').textContent='地圖簡化模式'}
loadGeo().catch(e=>console.warn(e));
svg.addEventListener('keydown',e=>{const directions={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};if(directions[e.key]){e.preventDefault();const [x,y]=directions[e.key];view.cx+=x*80/view.z;view.cy+=y*80/view.z;applyView()}if(e.key==='Enter'){e.preventDefault();chooseCenter()}});
function chooseCenter(){const p=unproject(view.cx,view.cy);choose(p.lat,p.lng,'地圖中心')}
return {setMapInteraction,resetView,drawMarkers,chooseCenter};
}
