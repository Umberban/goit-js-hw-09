const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body");let l=null;e.addEventListener("click",(function(){l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!1,e.disabled=!0,disableChange()})),t.addEventListener("click",(function(){clearInterval(l),e.disabled=!1,t.disabled=!0})),console.log(t),console.log(e);
//# sourceMappingURL=01-color-switcher.2f989d38.js.map
