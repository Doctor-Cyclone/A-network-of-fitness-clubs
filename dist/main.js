(()=>{"use strict";const e=function(e){var t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form"),l=document.getElementById("gift");t.style.display="none",n.style.display="none",l.style.display="none"};var t;(t=document.getElementById("thanks")).addEventListener("click",(function(e){var n=e.target;(n.closest(".close_icon")||n.closest(".close-btn")||n.closest(".overlay"))&&(t.style.display="none")}));const n=function(t){var n=document.createElement("div"),l=document.getElementById(t),c=l.querySelector("input[type=checkbox]"),o=l.querySelectorAll("input"),a=(l.querySelectorAll('[name = "name"]'),l.querySelectorAll('[name = "phone"]'),l.querySelector("button")),r=document.getElementById("thanks"),s=r.querySelector(".form-content"),i=l.querySelectorAll('[name = "club-name"]');n.style.color="#FFD11A",n.style.textAlign="center",n.style.fontSize="20px",c&&c.addEventListener("change",(function(){c.checked?a.disabled=!1:a.disabled=!0})),i&&(a.disabled=!0,i.forEach((function(e){e.checked?a.disabled=!1:e.addEventListener("change",(function(){a.disabled=!1}))})));var u=function(){o.forEach((function(e){e.value=""})),i&&i.forEach((function(e){e.checked=!1})),c&&(c.checked=!1)};l.addEventListener("submit",(function(t){t.preventDefault(),l.appendChild(n),n.innerHTML="Загрузка...";var c=new FormData(l),o={};c.forEach((function(e,t){o[t]=e})),d(o).then((function(t){if(200!==t.status)throw new Error("status network not 200");r.style.display="block",s.innerHTML='<h4>Спасибо!</h4>\n                        <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n                        <button class="btn close-btn">OK</button>',n.textContent="",u(),setTimeout((function(){e(),r.style.display="none"}),2e3)})).catch((function(e){console.log(e),r.style.display="block",s.innerHTML='<h4>Упс!</h4>\n                        <p>Что-то пошло не так. <br> Ваша заявка не отправлена.</p>\n                        <button class="btn close-btn">OK</button>',n.textContent="",u()}))}));var d=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};var l,c,o,a,r,s,i,u,d,y,f,v,m,p,b,g,h;h=document.querySelector(".club-select").querySelector(".clubs-list ul"),window.addEventListener("click",(function(e){var t=e.target;if(t.closest(".club-select"))"block"===h.style.display?h.style.display="none":h.style.display="block";else if(!t.closest(".clubs-list")){if("block"!==h.style.display)return;h.style.display="none"}})),m=document.getElementById("free_visit_form"),p=document.getElementById("callback_form"),b=document.getElementById("gift"),g=document.querySelector(".fixed-gift"),window.addEventListener("click",(function(t){var n=t.target;n.hasAttribute("type")||(n.classList.contains("open-popup")?m.style.display="block":n.classList.contains("callback-btn")?p.style.display="block":n.closest(".fixed-gift")?(g.style.display="none",b.style.display="block"):(n.closest(".close-form")||n.closest(".overlay")||n.closest(".close-btn"))&&e())})),i=document.querySelector(".main-slider"),u=i.querySelectorAll(".slide-text"),d=i.querySelectorAll(".slide"),y=0,f=function(){d[y].style.display="none",++y>=d.length&&(y=0),d[y].style.display="block"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;s=setInterval(f,e)},u.forEach((function(e){e.addEventListener("mouseover",(function(){clearInterval(s)})),e.addEventListener("mouseout",(function(){v(2e3)}))})),v(2e3),function(){var e,t=document.querySelector(".popup-menu"),n=document.querySelector(".menu-button"),l=document.querySelector(".top-menu"),c=document.querySelector(".head").clientHeight,o=window.getComputedStyle(n).display;e=function(){window.scrollY>c?l.classList.add("fixed-menu"):l.classList.remove("fixed-menu")},window.onscroll=function(){"block"===o&&e()},window.addEventListener("resize",(function(){var t=window.getComputedStyle(n).display;window.onscroll="block"===t?function(){e()}:function(){l.classList.remove("fixed-menu")}})),e();var a=function(){"block"===t.style.display?t.style.display="none":t.style.display="block"};n.addEventListener("click",a),t.addEventListener("click",(function(e){var t=e.target;(t.closest(".close-menu-btn")||"A"===t.tagName)&&a()}))}(),(r=document.getElementById("totop")).style.display="none",r.addEventListener("click",(function(){window.scrollTo(0,0),r.style.display="none"})),window.onscroll=function(){document.documentElement.scrollTop>=700?r.style.display="block":r.style.display="none"},l=document.querySelectorAll('[name = "name"]'),c=document.querySelectorAll('[name = "phone"]'),o=function(e){e.addEventListener("blur",(function(){if(e.value=e.value.replace(/\-{2,}/g,"-"),e.value=e.value.replace(/\s{2,}/g," "),e.value=e.value.replace(/\+{2,}/g,"+"),e.value=e.value.replace(/\({2,}/g,"("),e.value=e.value.replace(/\){2,}/g,")"),e.value=e.value.replace(/^[\s]+|[ \s]+$/,""),e.value=e.value.replace(/^[/-]+|[/-]+$/,""),"name"===e.getAttribute("name"))if(/\D{2}/g.test(e.value)){var t=e.value.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}));e.value=t.join(" ")}else e.value="";if("phone"===e.getAttribute("name")){e.value=e.value.replace(/\-{1,}/g,""),e.value=e.value.replace(/\s{1,}/g,""),e.value=e.value.replace(/\+{1,}/g,""),e.value=e.value.replace(/\({1,}/g,""),e.value=e.value.replace(/\){1,}/g,""),e.value=e.value.replace(/^[\s]+|[ \s]+$/,""),e.value=e.value.replace(/^[/-]+|[/-]+$/,""),e.value=e.value.replace(/\d{12,}/g,e.value.substr(0,11));var n=e.value.split("").length;if(/\+?[78]([-()]*\d){10}/g.test(e.value.replace(/\s{1,}/g,"")))return;n<11&&alert("Вы ввели ".concat(n," цифр из 11!")),e.value=""}}))},a=function(e){"name"===e.getAttribute("name")?(e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-яё\- ]/gi,"")})),o(e)):(e.addEventListener("input",(function(){e.value=e.value.replace(/[^-()\d\+ ]/g,"")})),o(e))},l.forEach((function(e){a(e)})),c.forEach((function(e){a(e)})),function(){document.querySelector('[name = "promoСode"]');var e=document.getElementById("price-total"),t=document.querySelectorAll('[name = "card-type"]'),n=document.getElementById("card_order"),l=document.querySelectorAll('#card_order [name = "club-name"]');e.innerHTML=0,n.addEventListener("change",(function(n){n.target,l.forEach((function(n){n.checked&&("mozaika"===n.value?t.forEach((function(t){if(t.checked)switch(t.value){case"1":e.innerHTML=1999;break;case"6":e.innerHTML=9900;break;case"9":e.innerHTML=13900;break;case"12":e.innerHTML=19900}})):t.forEach((function(t){if(t.checked)switch(t.value){case"1":e.innerHTML=2999;break;case"6":e.innerHTML=14990;break;case"9":e.innerHTML=21990;break;case"12":e.innerHTML=24990}})))})),t.forEach((function(e){}))}))}(),n("banner-form"),n("card_order"),n("footer_form"),n("form1"),n("form2")})();