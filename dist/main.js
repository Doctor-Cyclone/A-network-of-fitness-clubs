(()=>{"use strict";const e=function(e){var t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form"),c=document.getElementById("gift");t.style.display="none",n.style.display="none",c.style.display="none"};var t;(t=document.getElementById("thanks")).addEventListener("click",(function(e){var n=e.target;(n.closest(".close_icon")||n.closest(".close-btn")||n.closest(".overlay"))&&(t.style.display="none")}));const n=function(t){var n=document.createElement("div"),c=document.getElementById(t),o=c.querySelector('[type = "checkbox"]'),r=c.querySelector(".personal-data"),l=c.querySelector(".club"),a=c.querySelector("#card_leto_mozaika"),s=c.querySelector("#card_leto_schelkovo"),i=c.querySelectorAll('[name = "card-type"]'),u=document.getElementById("price-total"),d=c.querySelectorAll("input"),m=document.getElementById("thanks"),v=m.querySelector(".form-content");n.style.color="#FFD11A",n.style.textAlign="center",n.style.fontSize="20px";var y=function(){d.forEach((function(e){e.value=""})),l&&(a.checked=!1,s.checked=!1),i&&i.forEach((function(e){e.checked=!1})),u.innerHTML=0,o&&(o.checked=!1)};c.addEventListener("submit",(function(e){e.preventDefault();var t=function(){var e=document.createElement("div");e.classList.add("error-message"),e.style.cssText="color: red; font-size: 20px; margin-top: 15px",r.append(e)},n=function(){o.checked?(c.querySelector(".error-message").remove(),f()):c.querySelector(".error-message").textContent="Необходимо подтвердить согласие на обработку данных!"},u=function(){a.checked||s.checked?(c.querySelector(".error-message").remove(),f()):c.querySelector(".error-message").textContent="Необходимо выбрать клуб!"},d=function(){for(var e=0;e<i.length;e++){if(i[e].checked){console.log(1),a.checked||s.checked||o.checked?o.checked?a.checked||s.checked?(c.querySelector(".error-message").remove(),f()):c.querySelector(".error-message").textContent="Необходимо выбрать клуб!":c.querySelector(".error-message").textContent="Необходимо подтвердить согласие на обработку данных!":c.querySelector(".error-message").textContent="Необходимо выбрать клуб и подтвердить согласие на обработку данных!";break}console.log(2),c.querySelector(".error-message").textContent="Необходимо выбрать кол-во месяцев!"}};if(o&&l){if(c.querySelector(".error-message"))return void d();t(),d()}else if(o){if(c.querySelector(".error-message"))return void n();t(),n()}else if(l){if(c.querySelector(".error-message"))return void u();t(),u()}}));var f=function(){c.appendChild(n),n.innerHTML="Загрузка...";var t=new FormData(c),o={};t.forEach((function(e,t){o[t]=e})),p(o).then((function(t){if(200!==t.status)throw new Error("status network not 200");m.style.display="block",v.innerHTML='<h4>Спасибо!</h4>\n                        <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n                        <button class="btn close-btn">OK</button>',n.textContent="",y(),setTimeout((function(){e(),m.style.display="none"}),2e3)})).catch((function(e){console.log(e),m.style.display="block",v.innerHTML='<h4>Упс!</h4>\n                        <p>Что-то пошло не так. <br> Ваша заявка не отправлена.</p>\n                        <button class="btn close-btn">OK</button>',n.textContent="",y()}))},p=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};var c,o,r,l,a,s,i,u,d,m,v,y,f,p,g,h,k;k=document.querySelector(".club-select").querySelector(".clubs-list ul"),window.addEventListener("click",(function(e){var t=e.target;if(t.closest(".club-select"))"block"===k.style.display?k.style.display="none":k.style.display="block";else if(!t.closest(".clubs-list")){if("block"!==k.style.display)return;k.style.display="none"}})),f=document.getElementById("free_visit_form"),p=document.getElementById("callback_form"),g=document.getElementById("gift"),h=document.querySelector(".fixed-gift"),window.addEventListener("click",(function(t){var n=t.target;n.hasAttribute("type")||(n.classList.contains("open-popup")?f.style.display="block":n.classList.contains("callback-btn")?p.style.display="block":n.closest(".fixed-gift")?(h.style.display="none",g.style.display="block"):(n.closest(".close-form")||n.closest(".overlay")||n.closest(".close-btn"))&&e())})),i=document.querySelector(".main-slider"),u=i.querySelectorAll(".slide-text"),d=i.querySelectorAll(".slide"),m=0,v=function(){d[m].style.display="none",++m>=d.length&&(m=0),d[m].style.display="block"},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;s=setInterval(v,e)},u.forEach((function(e){e.addEventListener("mouseover",(function(){clearInterval(s)})),e.addEventListener("mouseout",(function(){y(2e3)}))})),y(2e3),function(){var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),c=document.querySelector(".slider-dots"),o=[],r=0;!function(){for(var e=0;e<n.length;e++){var t=document.createElement("li"),r=document.createElement("button");t.classList.add("dot"),r.classList.add("dot-btn"),o.push(t),t.append(r),c.append(t)}}(),o[0].classList.add("slick-active");var l=t.querySelectorAll(".dot"),a=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},i=function(){a(n,r,"slide-active"),a(l,r,"slick-active"),++r>=n.length&&(r=0),s(n,r,"slide-active"),s(l,r,"slick-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;e=setInterval(i,t)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".arrow-btn, .dot")&&(a(n,r,"slide-active"),a(l,r,"slick-active"),t.matches(".next")?r++:t.matches(".prev")?r--:t.matches(".dot")&&l.forEach((function(e,n){e===t&&(r=n)})),r>=n.length&&(r=0),r<0&&(r=n.length-1),s(n,r,"slide-active"),s(l,r,"slick-active"))})),t.addEventListener("mouseover",(function(t){(t.target.matches(".arrow-btn")||t.target.matches(".dot"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".arrow-btn")||e.target.matches(".dot"))&&u(3e3)})),u(3e3)}(),function(){var e=document.querySelector(".services-slider"),t=e.querySelector(".services-slider-container"),n=(e.querySelector("slide"),0);e.addEventListener("click",(function(e){e.preventDefault();var c=e.target;c.matches(".next")?((n+=226)>1130&&(n=0),t.style.left=-n+"px"):c.matches(".prev")&&((n-=226)<0&&(n=1130),t.style.left=-n+"px")}))}(),function(){var e,t=document.querySelector(".popup-menu"),n=document.querySelector(".menu-button"),c=document.querySelector(".top-menu"),o=document.querySelector(".head").clientHeight,r=window.getComputedStyle(n).display;e=function(){window.scrollY>o?c.classList.add("fixed-menu"):c.classList.remove("fixed-menu")},window.onscroll=function(){"block"===r&&e()},window.addEventListener("resize",(function(){var t=window.getComputedStyle(n).display;window.onscroll="block"===t?function(){e()}:function(){c.classList.remove("fixed-menu")}})),e();var l=function(){"block"===t.style.display?t.style.display="none":t.style.display="block"};n.addEventListener("click",l),t.addEventListener("click",(function(e){var t=e.target;(t.closest(".close-menu-btn")||"A"===t.tagName)&&l()}))}(),(a=document.getElementById("totop")).style.display="none",a.addEventListener("click",(function(){window.scrollTo(0,0),a.style.display="none"})),window.onscroll=function(){document.documentElement.scrollTop>=700?a.style.display="block":a.style.display="none"},c=document.querySelectorAll('[name = "name"]'),o=document.querySelectorAll('[name = "phone"]'),r=function(e){e.addEventListener("blur",(function(){if(e.value=e.value.replace(/\-{2,}/g,"-"),e.value=e.value.replace(/\s{2,}/g," "),e.value=e.value.replace(/\+{2,}/g,"+"),e.value=e.value.replace(/\({2,}/g,"("),e.value=e.value.replace(/\){2,}/g,")"),e.value=e.value.replace(/^[\s]+|[ \s]+$/,""),e.value=e.value.replace(/^[/-]+|[/-]+$/,""),"name"===e.getAttribute("name"))if(/\D{2}/g.test(e.value)){var t=e.value.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}));e.value=t.join(" ")}else e.value="";if("phone"===e.getAttribute("name")){e.value=e.value.replace(/\-{1,}/g,""),e.value=e.value.replace(/\s{1,}/g,""),e.value=e.value.replace(/\+{1,}/g,""),e.value=e.value.replace(/\({1,}/g,""),e.value=e.value.replace(/\){1,}/g,"");var n=e.value.split("");/\+?[78]([-()]*\d){10}/g.test(e.value.replace(/\s{1,}/g,"")),function(e){"7"!==e[0]&&"8"!==e[0]?11!==e.length?alert("Номер телефона должен начинаться с 8 или 7\nВы ввели ".concat(e.length," цифр из 11!")):alert("Номер телефона должен начинаться с 8 или 7"):11!==e.length&&alert("Вы ввели ".concat(e.length," цифр из 11!"))}(n)}}))},l=function(e){"name"===e.getAttribute("name")?(e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-яё\- ]/gi,"")})),r(e)):(e.addEventListener("input",(function(){e.value=e.value.replace(/[^-()\d\+ ]/g,"")})),r(e))},c.forEach((function(e){l(e)})),o.forEach((function(e){l(e)})),function(){document.querySelector('[name = "promoСode"]');var e=document.getElementById("price-total"),t=document.querySelectorAll('[name = "card-type"]'),n=document.getElementById("card_order"),c=document.querySelectorAll('#card_order [name = "club-name"]');e.innerHTML=0,n.addEventListener("change",(function(n){n.target,c.forEach((function(n){n.checked&&("mozaika"===n.value?t.forEach((function(t){if(t.checked)switch(t.value){case"1":e.innerHTML=1999;break;case"6":e.innerHTML=9900;break;case"9":e.innerHTML=13900;break;case"12":e.innerHTML=19900}})):t.forEach((function(t){if(t.checked)switch(t.value){case"1":e.innerHTML=2999;break;case"6":e.innerHTML=14990;break;case"9":e.innerHTML=21990;break;case"12":e.innerHTML=24990}})))})),t.forEach((function(e){}))}))}(),n("banner-form"),n("card_order"),n("footer_form"),n("form1"),n("form2")})();