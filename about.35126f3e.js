window.onload=function(){var e=document.querySelector(".about");if(e){document.querySelector(".hero-about__container");var t=document.querySelector(".parallax__img"),o=0,n=0,a=0,r=0;!function e(){o+=.05*(a-o),n+=.05*(r-n),t.style.cssText="transform: translate(".concat(o/40,"%,").concat(n/40,"%);"),requestAnimationFrame(e)}(),e.addEventListener("mousemove",(function(t){var o=e.offsetWidth,n=e.offsetHeight,c=t.pageX-o/2,u=t.pageY-n/2;a=c/o*100,r=u/n*100}))}};
//# sourceMappingURL=about.35126f3e.js.map
