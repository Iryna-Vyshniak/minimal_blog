window.onload=function(){const e=document.querySelector(".about");if(e){const t=document.querySelector(".hero-about__container"),o=document.querySelector(".parallax__img"),n=40,r=.05;let s=0,c=0,a=0,u=0;!function e(){s+=(a-s)*r,c+=(u-c)*r,o.style.cssText=`transform: translate(${s/n}%,${c/n}%);`,requestAnimationFrame(e)}(),e.addEventListener("mousemove",(function(t){const o=e.offsetWidth,n=e.offsetHeight,r=t.pageX-o/2,s=t.pageY-n/2;a=r/o*100,u=s/n*100}));let f=[];for(let e=0;e<=1;e+=.005)f.push(e);new IntersectionObserver((function(o,n){!function(e){t.style.cssText=`transform: translate(0%,-${e/9}%);`}(window.pageYOffset/e.offsetHeight*100)}),{threshold:f}).observe(document.querySelector(".content"))}};
//# sourceMappingURL=about.a8632234.js.map