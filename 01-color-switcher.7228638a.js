let t=null;const e={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};function n(){e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.startBtn.addEventListener("click",(function(){e.startBtn.disabled=!0,e.stopBtn.disabled=!1,t=setInterval(n,1e3)})),e.stopBtn.addEventListener("click",(function(){clearInterval(t),e.startBtn.disabled=!1,e.stopBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.7228638a.js.map
