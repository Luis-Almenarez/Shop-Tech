"use strict";const e=document.querySelector(".header__nav"),t=document.querySelector(".open__menu"),c=document.querySelector(".main");t.addEventListener("click",(()=>{e.classList.contains("visible")?e.classList.toggle("visible"):e.classList.add("visible")})),document.addEventListener("click",(r=>{c.contains(r.target)&&r.target!==t&&e.classList.remove("visible")}));const r=document.getElementById("product"),s=document.querySelector(".product__image"),n=document.querySelector(".product__thumbs"),u=document.querySelector("#increase-quantity"),a=document.querySelector("#decrease-quantity");let i=document.querySelector("#quantity");const l=r.querySelector("#property-color");n.addEventListener("click",(e=>{if("IMG"===e.target.tagName){const t=e.target.src,c=t.lastIndexOf("/"),r=t.substring(c+1);s.src=`./public/img/products/${r}`}})),l.addEventListener("click",(e=>{if("INPUT"===e.target.tagName){const t=e.target.value;s.src=`./public/img/products/${t}.jpg`;document.querySelectorAll(".product__thumb-img").forEach(((e,c)=>{e.src=`./public/img/thumbs/${t}/${t}${c+1}.jpg`}))}})),u.addEventListener("click",(e=>{i.value=parseInt(i.value)+1})),a.addEventListener("click",(e=>{i.value=parseInt(i.value)-1,parseInt(i.value)<=1&&(i.value=1)}));
//# sourceMappingURL=bundle.js.map
