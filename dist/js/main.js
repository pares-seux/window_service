(()=>{"use strict";const e=(e="#header")=>{document.getElementById(e.slice(1)).scrollIntoView({block:"start",behavior:"smooth"})},t=e=>{document.querySelector(".overlay").style.display="block",e.style.display="block"},s=e=>{const t=document.querySelector(".overlay");e.querySelectorAll("input")?.forEach((e=>{e.value=""})),t.style.display="none",e.style.display="none"},a=e=>{(()=>{switch(e.name){case"fio":return e.value.trim().length<3||/^([^\s]*\s){3,}[^\s]*$/.test(e.value.trim().replace(/\s+/g," "))?(e.classList.add("error"),e.classList.remove("success"),!1):(e.classList.remove("error"),e.classList.add("success"),!0);case"phone":/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e.value.trim())?(e.classList.remove("error"),e.classList.add("success")):(e.classList.add("error"),e.classList.remove("success"))}})()},r=({formName:e,someElem:s=[]})=>{const r=document.querySelector(`form[name=${e}]`),o=document.getElementById("responseMessage"),n=o.querySelector(".modal-content");try{if(!r)throw new Error("Верните форму");r.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=r.querySelectorAll("input"),l=new FormData(r),c={};var i;o.style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;",l.forEach(((e,t)=>{c[t]="page"!==t||"subject"!==t?e:""===e?"не задано":e})),s.forEach((e=>{const t=document.getElementById(e.id);null!==t&&"input"===e.type&&""!==t.value&&(c[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{a(e),e.classList.contains("error")&&(t=!1)})),t})(e)&&(i=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((s=>{n.innerHTML="Спасибо! Наш менеджер с Вами свяжется!",e.forEach((e=>{e.value="",e.classList.remove("success")})),document.querySelectorAll(".calc-item").forEach((e=>e.value="")),t(o)})).catch((e=>{n.innerHTML="Ошибка...",console.log(e)}))})()}))}catch(e){console.log(e.message)}},o=(e,t=3)=>{const s=document.getElementById(e.sliderBlockId);let a,r,o,n,l;const c=e=>e>=n.length?0:e<0?n.length-1:e,i=()=>{+window.innerWidth>=576?(o=t,l.style.justifyContent=""):(o=1,l.style.justifyContent="space-around")};""===e.slideWrapClass?(l=document.createElement("div"),l.classList.add(`${e.sliderBlockId}-wrap`),document.querySelector(`.${e.buttonClass}`).parentElement.before(l)):l=s.querySelector("."+e.slideWrapClass),n=s.querySelectorAll("."+e.slideClass),n.forEach((e=>{e.remove()})),null!==s?(a=n.length-1,i(),r=o,n.forEach(((e,t)=>{t<o&&l.append(e)})),s.addEventListener("click",(t=>{t.preventDefault(),t.target.closest(`.${e.buttonClass}--right`)&&(a=c(a+1),n[a].remove(),l.append(n[r]),r=c(r+1)),t.target.closest(`.${e.buttonClass}--left`)&&(r=c(r-1),n[r].remove(),l.prepend(n[a]),a=c(a-1))})),window.addEventListener("resize",(e=>{if(e.preventDefault(),i(),l.children.length>o)for(let e=0;e<l.children.length-o;e++)r=c(r-1),n[r].remove();else for(let e=0;e<o-l.children.length;e++)l.append(n[r]),r=c(r+1)}),!1)):console.log("error")};(()=>{const e=document.getElementById("header"),t=document.getElementById("navigation-fixed"),s=()=>{t.style.marginTop=window.scrollY+60>=e.offsetHeight?0:""};window.addEventListener("scroll",s),s()})(),(()=>{const t=document.getElementById("navbar-collapse-fixed"),s=document.getElementById("navbar-collapse"),a=e=>{e.classList.toggle("collapse")};document.addEventListener("click",(r=>{+window.innerWidth<992?(t.style="overflow-y: scroll;",r.target.closest("#navigation-fixed")&&(r.preventDefault(),r.target.closest(".navbar-toggle")&&a(t),"a"===r.target.localName&&(e(r.target.getAttribute("href")),a(t))),r.target.closest("#navigation")&&r.target.closest(".navbar-toggle")&&a(s)):r.target.closest("#navigation-fixed")&&"a"===r.target.localName&&(r.preventDefault(),e(r.target.getAttribute("href")))}))})(),(()=>{const t=document.querySelector(".smooth-scroll");t.addEventListener("click",(t=>{t.preventDefault(),e()}));const s=()=>{t.style.display=+window.innerHeight/2<+window.scrollY?"block":"none"};window.addEventListener("scroll",s),s()})(),(e=>{const t=document.querySelectorAll(".count-wrap");let s;const a=()=>{let a=(()=>{let t=new Date(e).getTime(),s=(new Date).getTime();if(s>t)return{timeRemaining:-1,hours:"00",minutes:"00",seconds:"00"};let a=(t-s)/1e3;return{timeRemaining:a,days:Math.floor(a/60/60/24),hours:Math.floor(a/60/60%24),minutes:Math.floor(a/60%60),seconds:Math.floor(a%60)}})();t.forEach((e=>{const[t,s,r,o]=e.children;a.days>0?t.children[1].textContent=(a.days+"").padStart(2,"0"):t.children[1].textContent="00",s.children[1].textContent=(a.hours+"").padStart(2,"0"),r.children[1].textContent=(a.minutes+"").padStart(2,"0"),o.children[1].textContent=(a.seconds+"").padStart(2,"0")})),a.timeRemaining<0&&clearInterval(s)};a(),s=setInterval((()=>{a()}),1e3)})("26 march 2022"),(()=>{const e=document.querySelector(".header-modal"),a=document.querySelector(".services-modal"),r=document.getElementById("responseMessage"),o=document.getElementById("order");let n=document.createElement("div");const l=document.createElement("span");o.style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;",n.style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;",document.body.append(n),document.addEventListener("click",(c=>{(c.target.closest(".button")&&c.target.closest("#header")||c.target.closest("#navigation-fixed")&&c.target.closest(".top-btn"))&&(c.preventDefault(),t(e)),c.target.closest(".service-button")&&(c.preventDefault(),t(a)),c.target.closest(".utp-button")&&(c.preventDefault(),t(o),l.classList.add("order-modal__close"),l.style="position: absolute; top: 15px; right: 15px; font-size: 36px; cursor: pointer;",l.innerText="x",o.append(l)),(c.target.classList.contains("services-modal__close")||c.target.closest(".overlay"))&&(c.preventDefault(),s(a)),(c.target.classList.contains("header-modal__close")||c.target.closest(".overlay"))&&(c.preventDefault(),s(e)),(c.target.classList.contains("order-modal__close")||c.target.closest(".overlay"))&&(c.preventDefault(),s(o)),c.target.closest(".sertificate-document")&&(c.preventDefault(),t(n),n.classList.add("sertificate-document__open"),n.innerHTML=`<img src="./images/documents/original/document4.jpg" alt="document" style=" height: ${document.body.clientHeight}px;">`),c.target.closest(".overlay")&&document?.querySelector(".sertificate-document__open")&&(c.preventDefault(),s(n),n.innerHTML=""),(c.target.classList.contains("fancyClose")||c.target.closest(".overlay"))&&(c.preventDefault(),s(r))}))})(),document.addEventListener("input",(e=>{switch(e.target.name){case"calc-input":e.target.value=e.target.value.replace(/[\D]+/,"");break;case"fio":if(e.target.value=e.target.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]+/g,""),e.target.classList.contains("error")||e.target.classList.contains("success")){let e=document.querySelector("input[name=fio]");a(e)}break;case"phone":if(e.target.value=e.target.value.replace(/[^\d\-()+\s]+/g,""),e.target.classList.contains("error")||e.target.classList.contains("success")){let e=document.querySelector("input[name=phone]");a(e)}}})),document.addEventListener("blur",(e=>{if("input"===e.target.localName&&!e.target.classList.contains("calc-item"))switch(e.target.name){case"fio":e.target.value=e.target.value.trim().replace(/\s+/g," ");break;case"phone":e.target.value=e.target.value.replace(/([-()@_.,?!~*'])(?=[-()@_.,?!~*']*\1)/g,"")}}),!0),document.addEventListener("invalid",(e=>{e.preventDefault(),"input"===e.target.localName&&"calc-input"!==!e.target.name&&e.target.classList.add("error")}),!0),r({formName:"action-form",someElem:[{type:"input",id:"calc-total"}]}),r({formName:"action-form2",someElem:[{type:"input",id:"calc-total"}]}),r({formName:"application-form",someElem:[{type:"input",id:"calc-total"}]}),r({formName:"callback-form",someElem:[{type:"input",id:"calc-total"}]}),r({formName:"order-form",someElem:[{type:"input",id:"calc-total"}]}),o({sliderBlockId:"benefits",slideWrapClass:"benefits-wrap",slideClass:"benefits__item",buttonClass:"benefits__arrow"},3),o({sliderBlockId:"services",slideWrapClass:"",slideClass:"col-md-12",buttonClass:"services__arrow"},2),(()=>{const e=document.getElementById("reviews").querySelector(".comments-container");let t=0;const s=(e,t)=>{const s=document.createElement("div");return s.className="row comment-item review-margin-bottom",s.innerHTML=`<div class="col-xs-3 col-sm-2"><div class="review-user"><img src="images/users/${e.image}" alt="" class="img-responsive avatar"></div></div><div class="col-xs-9 col-sm-9"><div class="review-inner review-${t.color} review-arrow review-arrow-left"><p class="text-normal">${e.author}</p><p>${e.comment}</p></div></div>`,s};e.innerHTML="",fetch("./comments.json",{method:"GET"}).then((e=>e.json())).then((a=>{console.log(a.comments),a.comments.forEach((a=>{switch(t){case 0:e.append(s(a,{margin:"review-margin-bottom",color:"green"}));break;case 1:case 3:e.append(((e,t)=>{const s=document.createElement("div");return s.className=`row comment-item ${t.margin}`,s.innerHTML=`<div class="col-xs-9 col-sm-9"><div class="review-inner review-${t.color} review-arrow review-arrow-right"><p class="text-normal">${e.author}</p><p>${e.comment}</p></div></div><div class="col-xs-3 col-sm-2"><div class="review-user"><img src="images/users/${e.image}" alt="" class="img-responsive avatar"></div></div>`,s})(a,{margin:"review-margin-bottom",color:"gray"}));break;case 2:e.append(s(a,{margin:"review-margin-bottom",color:"orange"}))}t=t+1<4?t+1:0}))}))})()})();