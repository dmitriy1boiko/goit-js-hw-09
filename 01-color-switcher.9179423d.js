const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;function d(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){d(),o=setInterval(d,1e3),e.disabled=!1,t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),e.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.9179423d.js.map
