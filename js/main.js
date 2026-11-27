var seg=document.querySelector('.seg'),okEl=document.getElementById('ok');
seg.querySelectorAll('button').forEach(function(b){b.onclick=function(){seg.dataset.v=b.dataset.r;seg.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-selected',x===b)});document.querySelectorAll('.wf').forEach(function(f){f.classList.toggle('on',f.dataset.r===b.dataset.r)});okEl.textContent=''}});
document.querySelectorAll('.wf').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();okEl.textContent=f.dataset.r==='f'?'It’s a deal. You’re on the founder waitlist.':'It’s a deal. You’re on the advisor waitlist.';f.reset()})});
var v=document.getElementById('v'),b=document.getElementById('pp');
function st(p){b.textContent=p?'▶':'❚❚';b.setAttribute('aria-label',p?'Play background video':'Pause background video')}
b.addEventListener('click',function(){if(v.paused){v.play();st(false)}else{v.pause();st(true)}});
if(window.matchMedia('(prefers-reduced-motion:reduce)').matches){v.removeAttribute('autoplay');v.pause();st(true)}
document.querySelectorAll('[data-dup]').forEach(function(t){t.innerHTML+=t.innerHTML});
var rv=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){document.documentElement.classList.add('js');var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});rv.forEach(function(el){io.observe(el)})}
var EXPERTS=[
{n:"Yassine F.",r:"Advisor and operator | Strategy, partnerships and growth",t:"Partnerships",l:"Portland, Oregon, US",img:"assets/advisors/yassine-f.jpg",u:"#people"},
{n:"Kritika D Monga",r:"Principal Consultant, Edge Marketing Consultancy | 18 years of go-to-market across India, UAE and South-East Asia",t:"Go-to-market",l:"Gurugram, India",img:"assets/advisors/kritika-d-monga.jpg",u:"#people"},
{n:"Alisha Nanda",r:"General Manager, Global Marketing and Innovation | AI solutions architect",t:"AI strategy",l:"Mumbai, India",img:"assets/advisors/alisha-nanda.jpg",u:"#people"},
{n:"Aayushi Karanwal",r:"B2B SaaS revenue and GTM operator | 7+ years in sales, GTM and growth",t:"Sales",l:"India",img:"assets/advisors/aayushi-karanwal.jpg",u:"#people"}];
var rl=document.getElementById('rail');
rl.innerHTML=EXPERTS.map(function(e){return "<article class='ad'><div class='ap'><img src='"+e.img+"' alt='"+e.n+"'></div><div class='ab'><span class='tp'>"+e.t+"</span><h3>"+e.n+"<i>✓</i></h3><p class='rr'>"+e.r+"</p><div class='lo'>"+e.l+"</div><a class='li' href='"+e.u+"' aria-label='"+e.n+" on LinkedIn'><b>in</b>View on LinkedIn</a></div></article>"}).join('');
document.getElementById('nx').onclick=function(){rl.scrollBy({left:324})};
document.getElementById('pv').onclick=function(){rl.scrollBy({left:-324})};
var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
var mfEl=document.getElementById('mf');mfEl.innerHTML=mfEl.textContent.trim().split(/\s+/).map(function(w){return '<span>'+w+'</span>'}).join(' ');
var ws=mfEl.children;
function cl(x){return Math.max(0,Math.min(1,x))}
function fx(){var H=innerHeight,r=mfEl.getBoundingClientRect(),n=ws.length,p=RM?1:cl((H*.85-r.top)/(r.height+H*.25));for(var i=0;i<n;i++)ws[i].classList.toggle('on',i<p*n*1.02);}
addEventListener('scroll',fx,{passive:true});addEventListener('resize',fx);fx();
var MQ=[['Go-to-market',1,'How do we take our product to market in a new region?'],['First enterprise deal',3,'We’re chasing our first enterprise deal. Where do we start?'],['Partnerships',0,'Which partnerships are worth our time at this stage?'],['AI strategy',2,'Where does AI actually help our business, and where doesn’t it?'],['Entering the GCC',1,'We’re considering the GCC. What do we need to know before entering?']];
var mc=document.getElementById('mc'),mo=document.getElementById('mo'),mtm;
mc.innerHTML=MQ.map(function(m,i){return '<button type="button" aria-pressed="false" data-i="'+i+'">'+m[0]+'</button>'}).join('');
var NP=[[70,62],[330,62],[70,198],[330,198]];
function net(){var s='<svg class="mn" viewBox="0 0 400 260" aria-hidden="true"><defs>',i;for(i=0;i<4;i++)s+='<clipPath id="mcp'+i+'"><circle cx="'+NP[i][0]+'" cy="'+NP[i][1]+'" r="38"/></clipPath>';s+='</defs>';
for(i=0;i<4;i++)s+='<path class="fl mf'+i+'" d="M'+NP[i][0]+' '+NP[i][1]+'Q200 '+(i<2?40:220)+' 200 130"/>';
s+='<circle class="ring" cx="200" cy="130" r="34"/><circle cx="200" cy="130" r="34" fill="#1B1B1F"/><path d="M200 106Q203 127 224 130Q203 133 200 154Q197 133 176 130Q197 127 200 106Z" fill="#A6E24B"/>';
for(i=0;i<4;i++)s+='<g class="nd" id="mn'+i+'" style="animation-delay:-'+i+'s"><circle cx="'+NP[i][0]+'" cy="'+NP[i][1]+'" r="43" fill="#fff"/><image href="'+EXPERTS[i].img+'" x="'+(NP[i][0]-38)+'" y="'+(NP[i][1]-38)+'" width="76" height="76" clip-path="url(#mcp'+i+')" preserveAspectRatio="xMidYMid slice"/><circle class="hl" cx="'+NP[i][0]+'" cy="'+NP[i][1]+'" r="44" fill="none" stroke="#A6E24B" stroke-width="5"/></g>';
return s+'</svg>'}
mo.innerHTML=net()+'<div class="mi" id="mi"><p class="mh">Pick a challenge and see who we’d match you with.</p></div>';
var mi=document.getElementById('mi');
function ms(k){for(var i=0;i<4;i++){var g=document.getElementById('mn'+i),l=mo.querySelector('.mf'+i);g.classList.remove('hi','dim');l.style.opacity='';if(k>=0){g.classList.add(i===k?'hi':'dim');l.style.opacity=i===k?1:.15}}}
mc.onclick=function(e){var b=e.target.closest('button');if(!b)return;mc.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});var m=MQ[b.dataset.i],x=EXPERTS[m[1]];clearTimeout(mtm);ms(-1);mo.classList.add('busy');mi.innerHTML='<div class="ld"><i></i><i></i><i></i></div>';mtm=setTimeout(function(){mo.classList.remove('busy');ms(m[1]);mi.innerHTML='<div class="rs"><span class="mb">Matched in under 48 hours</span><h3>'+x.n+'</h3><p class="mq2">'+x.r+'</p><p class="mq3">Has faced: “'+m[2]+'”</p><a class="btn dark" href="#waitlist" data-role="f">Join the waitlist</a></div>'},1100)};
function setRole(r){var b=document.querySelector('.seg button[data-r="'+r+'"]');if(b)b.click()}
document.querySelectorAll('a.btn').forEach(function(a){if(/help others/i.test(a.textContent)){a.href='#waitlist';a.dataset.role='x'}else if(a.getAttribute('href')==='#waitlist'){a.dataset.role='f'}});
document.addEventListener('click',function(e){var a=e.target.closest('a[data-role]');if(a)setRole(a.dataset.role)});
var fw=document.getElementById('fw'),fb=document.getElementById('fwb'),wlE=document.getElementById('waitlist');
fb.onclick=function(){var o=fw.classList.toggle('open');fb.setAttribute('aria-expanded',o)};
fw.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){fw.classList.remove('open');fb.setAttribute('aria-expanded',false)})});
function fp(){var on=scrollY>innerHeight*.8&&wlE.getBoundingClientRect().top>innerHeight*.6;fw.classList.toggle('on',on);if(!on)fw.classList.remove('open')}
addEventListener('scroll',fp,{passive:true});fp();
if(!RM){document.querySelectorAll('.ex').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+x*10+'deg) rotateX('+-y*10+'deg) translateY(-8px)'});c.addEventListener('mouseleave',function(){c.style.transform=''})});
document.querySelectorAll('.btn.lime,.btn.dark,.btn.ghost').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.18+'px,'+(e.clientY-r.top-r.height/2)*.3+'px)'});b.addEventListener('mouseleave',function(){b.style.transform=''})})}
(function(){var dm=document.getElementById('dm');if(!dm)return;
dm.querySelectorAll('img[data-e]').forEach(function(i){i.src=EXPERTS[i.dataset.e].img});
function rw(e,k,c){return '<div class="rw '+(c||'')+'" style="--d:'+k+'s;--o:'+(c==='out'?(k+1.2):0)+'s"><img src="'+e.img+'" alt=""><div><b>'+e.n+'</b><small>'+e.l+'</small></div><em>'+e.t+'</em></div>'}
var A=dm.querySelector('[data-r=a]'),B=dm.querySelector('[data-r=b]');
A.innerHTML=EXPERTS.map(function(e,i){return rw(e,2.8+i*.18)}).join('');
B.innerHTML=[0,1,2,3].map(function(i){return rw(EXPERTS[i],.2+i*.15,i===0||i===2?'out':i===1?'pick':'')}).join('');
B.children[0].style.setProperty('--o','1.8s');B.children[2].style.setProperty('--o','2.6s');
var ss=dm.querySelectorAll('.sc'),ds=dm.querySelectorAll('.ds'),pr=document.getElementById('dpr'),pb=document.getElementById('dpp'),ct=document.getElementById('ct'),n=ss.length,cur=0,playing=!RM,vis=false,tm,ci,T=[5600,6200,5200,5200,5400,5000,6600,5400];
function fm(s){return Math.floor(s/60)+':'+('0'+s%60).slice(-2)}
function run(){clearTimeout(tm);clearInterval(ci);pr.style.transition='none';pr.style.width='0';void pr.offsetWidth;
if(cur===4){var s=761;ct.textContent=fm(s);ci=setInterval(function(){ct.textContent=fm(++s)},1000)}
if(playing&&vis){pr.style.transition='width '+T[cur]+'ms linear';pr.style.width='100%';tm=setTimeout(function(){go(cur+1)},T[cur])}}
function go(i){cur=(i+n)%n;ss.forEach(function(s,k){s.classList.toggle('on',k===cur)});ds.forEach(function(d,k){d.classList.toggle('on',k===cur);d.classList.toggle('done',k<cur)});var tb=dm.querySelector('.dm-t'),ac=ds[cur];if(tb.scrollWidth>tb.clientWidth)tb.scrollLeft=ac.offsetLeft-(tb.clientWidth-ac.offsetWidth)/2;run()}
ds.forEach(function(d){d.onclick=function(){go(+d.dataset.i)}});
pb.onclick=function(){playing=!playing;pb.textContent=playing?'❚❚':'▶';pb.setAttribute('aria-label',playing?'Pause walkthrough':'Play walkthrough');run()};
if(RM)pb.textContent='▶';
if('IntersectionObserver' in window){new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis){go(cur)}else{clearTimeout(tm);clearInterval(ci)}},{threshold:.35}).observe(dm)}else{vis=true;run()}
})();
var pg=document.getElementById('pg');addEventListener('scroll',function(){var h=document.documentElement;pg.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
