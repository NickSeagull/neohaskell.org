// Adapted from HyperFrames headline-slam, rgb-glitch-text and logo-sting.
// Explicit timeline keys keep impact accents deterministic under random seeking.
window.nhImpact=function(tl,target,at,strength){var n=strength==null?1:strength;
 tl.fromTo(target,{x:0,y:0,rotation:0},{x:14*n,y:-9*n,rotation:.22*n,duration:1/30,ease:'none',immediateRender:false},at);
 tl.to(target,{x:-9*n,y:6*n,rotation:-.16*n,duration:1/30,ease:'none'},at+1/30);
 tl.to(target,{x:4*n,y:-2*n,rotation:.06*n,duration:1/30,ease:'none'},at+2/30);
 tl.to(target,{x:0,y:0,rotation:0,duration:2/30,ease:'power2.out'},at+3/30);
};
window.nhSplit=function(tl,target,at,strength){var n=strength==null?1:strength,d=12*n;
 tl.fromTo(target,{textShadow:'0px 0px 0px #7df9ff, 0px 0px 0px #c989e7'},{textShadow:d+'px 0px 0px #7df9ff, '+(-d)+'px 0px 0px #c989e7',duration:1/30,ease:'steps(1)',immediateRender:false},at);
 tl.to(target,{textShadow:(-d/2)+'px 0px 0px #7df9ff, '+(d/2)+'px 0px 0px #c989e7',duration:1/30,ease:'steps(1)'},at+1/30);
 tl.to(target,{textShadow:'0px 0px 0px #7df9ff, 0px 0px 0px #c989e7',duration:2/30,ease:'power2.out'},at+2/30);
};
window.nhShockwave=function(tl,target,at,strength){var n=strength==null?1:strength;
 gsap.utils.toArray(target).forEach(function(el){el.innerHTML='<svg viewBox="0 0 480 480" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="square" aria-hidden="true"><path d="M240 180V30M240 300v150M180 240H30M300 240h150M190 190 65 65M290 190 415 65M190 290 65 415M290 290 415 415"/></svg>';});
 tl.set(target,{opacity:0,scale:.35},0);
 tl.fromTo(target,{opacity:.95,scale:.35},{opacity:0,scale:1.8*n,duration:.28,ease:'power3.out',immediateRender:false},at);
};
window.nhSweep=function(tl,target,at,duration){var d=duration||.35;
 tl.set(target,{opacity:0,scaleX:0},0);
 tl.fromTo(target,{opacity:0,scaleX:0},{opacity:1,scaleX:1,duration:d*.38,ease:'expo.out',immediateRender:false},at);
 tl.to(target,{opacity:0,scaleX:1.12,duration:d*.62,ease:'power2.out'},at+d*.38);
};
