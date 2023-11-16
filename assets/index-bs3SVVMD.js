(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))b(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&b(f)}).observe(document,{childList:!0,subtree:!0});function p(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function b(s){if(s.ep)return;s.ep=!0;const i=p(s);fetch(s.href,i)}})();function E(){let t=[],p=[];const b=n=>{if(t.length>=8)return;const r={name:"player"+(t.length+1),score:0,pushOut:!1,fouls:0,index:t.length+1};t.push(r),s(n,"players--"),n.classList.add("players--"+t.length);const o=document.querySelector(".player").cloneNode(!0);o.classList.remove("player--template"),o.setAttribute("data-player-id",t.length),o.querySelector(".player__name__label").innerText=r.name,o.querySelector(".player__score").innerText=r.score,document.querySelector(".players").appendChild(o)},s=(n,r)=>{const a=new RegExp("\\b"+r+"[^ ]*[ ]?\\b","g");n.className=n.className.replace(a,"")},i=n=>{const r={};for(let c=0;c<n.length;c++){const d=n[c];r[d.name]?r[d.name]+=d.score:r[d.name]=d.score}let a=[];for(var o in r)a.push([o,r[o]]);return a.sort((c,d)=>d[1]-c[1]).map(c=>({name:c[0],score:c[1]}))},f=()=>{const n={};for(let r=0;r<p.length;r++){const a=p[r];for(let o=0;o<a.length;o++){const c=a[o];n[c.name]||(n[c.name]=0)}}return n},L=(n=!1)=>{let r=f();if(n)return r={},r;for(let a=0;a<p.length;a++){const o=p[a],c=i(o);r[c[0].name]+=1}return r},S=(n=!1)=>{n||(document.querySelectorAll(".player").forEach(a=>{a.classList.remove("player--disqualified"),a.querySelector(".player__fouls").setAttribute("data-fouls",0),a.querySelectorAll(".player__foul").forEach(o=>o.classList.remove("player__foul--on")),a.querySelector('[data-tool="pushout"]').setAttribute("data-pushout","false"),a.querySelector('[data-tool="pushout"]').classList.remove("player__toolbar__item--disabled")}),t.forEach(a=>{a.score=0,a.fouls=0,a.pushOut=0}),L(!0))};window.onload=()=>{const n=document.querySelector('[data-config="add-player"]'),r=document.querySelector('[data-config="reset"]'),a=document.querySelector('[data-config="next-game"]'),o=document.querySelector('[data-config="leaderboard"]'),c=document.querySelector('[data-config="fullscreen"]'),d=document.querySelector(".players");n.addEventListener("click",e=>{e.preventDefault(),b(d)}),r.addEventListener("click",()=>{t=[],d.querySelectorAll(".player:not(.player--template)").forEach(e=>e.remove()),p=[]}),a.addEventListener("click",()=>{const e=t.map(l=>({...l}));p.push(e);const _=document.querySelectorAll(".player");_.length&&_.forEach(l=>{const u=parseInt(l.getAttribute("data-player-id"));u<1||(t[u-1].score=0,t[u-1].pushOut=!1,l.querySelector(".player__score").innerText=0,S(!1))}),document.querySelector(".page").setAttribute("data-already-running","true")});const v=document.querySelector(".leaderboard");if(v!==null){const e=v.querySelector(".leaderboard__container__close"),_=document.querySelector(".leaderboard__list");o.addEventListener("click",()=>{_.innerHTML="",v.classList.add("leaderboard--open");const l=L();for(const u in l){const m=document.createElement("div"),h=document.createElement("h4"),q=document.createElement("div");m.classList.add("leaderboard__list__item"),h.classList.add("leaderboard__list__name"),q.classList.add("leaderboard__list__winscore"),h.innerText=u,q.innerText=l[u],m.appendChild(h),m.appendChild(q),_.appendChild(m)}}),e.addEventListener("click",()=>{v.classList.remove("leaderboard--open")})}const y=document.documentElement;c.addEventListener("click",()=>{c.classList.toggle("fullscreen"),document.fullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():y.requestFullscreen?y.requestFullscreen():y.webkitRequestFullscreen?y.webkitRequestFullscreen():y.msRequestFullscreen&&y.msRequestFullscreen()}),d.addEventListener("click",e=>{e.preventDefault();let _=parseInt(e.target.closest(".player").getAttribute("data-player-id"))-1;if(document.querySelector(".page").getAttribute("data-already-running")!=="true"&&e.target.matches(".player__name__edit")&&(e.target.parentElement.classList.contains("player__name--editing")?(e.target.parentElement.querySelector("input").value!==""&&(t[_].name=e.target.parentElement.querySelector("input").value,e.target.parentElement.querySelector(".player__name__label").innerText=t[_].name),e.target.parentElement.classList.remove("player__name--editing")):(e.target.parentElement.classList.add("player__name--editing"),e.target.parentElement.querySelector("input").focus())),e.target.matches('[data-tool="score"]')){const l=parseInt(e.target.closest(".player").getAttribute("data-player-id"))-1,u=parseInt(e.target.getAttribute("data-value"));t[l].score=t[l].score+u,e.target.closest(".player").querySelector(".player__score").innerText=t[l].score}if(e.target.matches('[data-tool="pushout"]')){if(e.target.classList.contains("player__toolbar__item--disabled"))return;e.target.classList.add("player__toolbar__item--disabled")}if(e.target.matches(".player__fouls")||e.target.matches(".player__foul")){const l=parseInt(e.target.closest(".player").getAttribute("data-player-id"));if(t[l-1].fouls+=1,e.target.setAttribute("data-fouls",t[l-1].fouls),e.target.querySelectorAll(".player__foul")[t[l-1].fouls-1].classList.add("player__foul--on"),t[l-1].fouls>=3){e.target.closest(".player").classList.add("player--disqualified"),t[l-1].score=-9999;return}}if(e.target.matches(".player__remove")){const l=parseInt(e.target.closest(".player").getAttribute("data-player-id"))-1;t.splice(l,1),t.forEach((u,m)=>{m!==u.index-1&&(u.index=m+1)}),s(e.target.closest(".players"),"players--"),e.target.closest(".players").classList.add("players--"+t.length),e.target.closest(".player").remove()}})}}document.querySelector("#app").innerHTML=`
  <header class="header config">
      <div class="config__item" data-config="add-player"><span class="config__item__label">Add Player</span></div>
      <div class="config__item" data-config="leaderboard"><span class="config__item__label">Leaderboard</span></div>
      <div class="config__item" data-config="next-game"><span class="config__item__label">Next Game</span></div>
      <div class="config__item ml bl" data-config="settings"><span class="config__item__label"></span></div>
      <div class="config__item bl" data-config="fullscreen"><span class="config__item__label"></span></div>
      <div class="config__item bl" data-config="reset"><span class="config__item__label">Reset Game</span></div>
  </header>

  <main class="page">

  <section class="players players--3">
      <article class="board player player--template" data-player-id="0">
          <div class="player__name">
              <span class="player__name__label">{{ player.name }}</span>
              <input type="text" name="inp-player-name" placeholder="player" value="" />
              <span class="editor player__name__edit"></span>
          </div>
          
          <div class="player__score">{{ player.score }}</div>

          <div class="player__toolbar">
              <span class="player__toolbar__item" data-tool="pushout" data-pushout="false"></span>
          </div>
          <div class="player__toolbar">
              <span class="player__toolbar__item" data-tool="score" data-value="-1">-1</span>
              <span class="player__toolbar__item" data-tool="score" data-value="+1">+1</span>
              <span class="player__toolbar__item" data-tool="score" data-value="+2">+2</span>
          </div>

          <div class="player__fouls" data-fouls="0">
              <span class="player__foul"></span>
              <span class="player__foul"></span>
              <span class="player__foul"></span>
          </div>

          <!-- remove -->
          <span class="player__remove"></span>
      </article>
      
  </section>

  </main>

  <aside class="leaderboard">
  <div class="leaderboard__container">
      <h3 class="leaderboard__heading">Leaderboard</h3>
      <div class="leaderboard__list">
      </div>
      <span class="leaderboard__container__close"></span>
  </div>
  </aside>
`;E();
