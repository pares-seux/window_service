(()=>{"use strict";const e=e=>{let t=e.getAttribute("href");document.getElementById(t.slice(1)).scrollIntoView({block:"start",behavior:"smooth"})};((e,t)=>{const a=document.querySelector(".slogan");a.classList.remove(e),a.classList.add("tagline")})("slogan"),(()=>{const e=document.getElementById("header"),t=document.getElementById("navigation-fixed"),a=()=>{t.style.marginTop=window.scrollY+60>=e.offsetHeight?0:""};window.addEventListener("scroll",a),a()})(),(()=>{const t=document.getElementById("navbar-collapse-fixed"),a=document.getElementById("navbar-collapse"),l=e=>{e.classList.toggle("collapse")};document.addEventListener("click",(o=>{+screen.width<992?(t.style="overflow-y: scroll;",o.target.closest("#navigation-fixed")&&(o.preventDefault(),o.target.closest(".navbar-toggle")&&l(t),"a"===o.target.localName&&(e(o.target),l(t))),o.target.closest("#navigation")&&o.target.closest(".navbar-toggle")&&l(a)):o.target.closest("#navigation-fixed")&&"a"===o.target.localName&&(o.preventDefault(),e(o.target))}))})()})();