!function(e){"use strict";function r(e,r){e.lastscrolltop=r}var t=jQuery.fn.revolution,a=t.is_mobile(),i={alias:"Parallax Min JS",name:"revolution.extensions.parallax.min.js",min_core:"5.4.5",version:"2.2.3"};jQuery.extend(!0,t,{checkForParallax:function(e,r){function l(e){if("3D"==o.type||"3d"==o.type){e.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),e.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+o.ddd_layer_overflow+';"></div>'),e.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var t=e.find(".dddwrapper"),a=e.find(".dddwrapper-layer");e.find(".dddwrapper-layertobggroup").appendTo(t),"carousel"==r.sliderType&&("on"==o.ddd_shadow&&t.addClass("dddwrappershadow"),punchgs.TweenLite.set(t,{borderRadius:r.carousel.border_radius})),punchgs.TweenLite.set(e,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(t,{force3D:"auto",transformOrigin:"50% 50%"}),punchgs.TweenLite.set(a,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5}),punchgs.TweenLite.set(r.ul,{transformStyle:"preserve-3d",transformPerspective:1600})}}if("stop"===t.compare_version(i).check)return!1;var o=r.parallax;if(!o.done){if(o.done=!0,a&&"on"==o.disable_onmobile)return!1;"3D"!=o.type&&"3d"!=o.type||(punchgs.TweenLite.set(r.c,{overflow:o.ddd_overflow}),punchgs.TweenLite.set(r.ul,{overflow:o.ddd_overflow}),"carousel"!=r.sliderType&&"on"==o.ddd_shadow&&(r.c.prepend('<div class="dddwrappershadow"></div>'),punchgs.TweenLite.set(r.c.find(".dddwrappershadow"),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}))),r.li.each(function(){l(jQuery(this))}),("3D"==o.type||"3d"==o.type)&&r.c.find(".tp-static-layers").length>0&&(punchgs.TweenLite.set(r.c.find(".tp-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),l(r.c.find(".tp-static-layers"))),o.pcontainers=new Array,o.pcontainer_depths=new Array,o.bgcontainers=new Array,o.bgcontainer_depths=new Array,r.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function(){var e=jQuery(this),t=e.data("bgparallax")||r.parallax.bgparallax;void 0!==(t="on"==t?1:t)&&"off"!==t&&(o.bgcontainers.push(e),o.bgcontainer_depths.push(r.parallax.levels[parseInt(t,0)-1]/100))});for(n=1;n<=o.levels.length;n++)r.c.find(".rs-parallaxlevel-"+n).each(function(){var e=jQuery(this).closest(".tp-parallax-wrap");e.data("parallaxlevel",o.levels[n-1]),e.addClass("tp-parallax-container"),o.pcontainers.push(e),o.pcontainer_depths.push(o.levels[n-1])});"mouse"!=o.type&&"scroll+mouse"!=o.type&&"mouse+scroll"!=o.type&&"3D"!=o.type&&"3d"!=o.type||(e.mouseenter(function(r){var t=e.find(".active-revslide"),a=e.offset().top,i=e.offset().left,l=r.pageX-i,o=r.pageY-a;t.data("enterx",l),t.data("entery",o)}),e.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(t,a){var i=a&&a.li?a.li:e.find(".active-revslide");if("enterpoint"==o.origo){var l=e.offset().top,s=e.offset().left;void 0==i.data("enterx")&&i.data("enterx",t.pageX-s),void 0==i.data("entery")&&i.data("entery",t.pageY-l);var n=i.data("enterx")||t.pageX-s,d=i.data("entery")||t.pageY-l,p=n-(t.pageX-s),c=d-(t.pageY-l),u=o.speed/1e3||.4}else var l=e.offset().top,s=e.offset().left,p=r.conw/2-(t.pageX-s),c=r.conh/2-(t.pageY-l),u=o.speed/1e3||3;"mouseleave"==t.type&&(p=o.ddd_lasth||0,c=o.ddd_lastv||0,u=1.5);for(var h=0;h<o.pcontainers.length;h++){var f=o.pcontainers[h],w=o.pcontainer_depths[h],v="3D"==o.type||"3d"==o.type?w/200:w/100,g=p*v,y=c*v;"scroll+mouse"==o.type||"mouse+scroll"==o.type?punchgs.TweenLite.to(f,u,{force3D:"auto",x:g,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(f,u,{force3D:"auto",x:g,y:y,ease:punchgs.Power3.easeOut,overwrite:"all"})}if("3D"==o.type||"3d"==o.type){var b=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===r.sliderType&&(b=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),r.c.find(b).each(function(){var e=jQuery(this),a=o.levels[o.levels.length-1]/200,i=p*a,l=c*a,s=0==r.conw?0:Math.round(p/r.conw*a*100)||0,n=0==r.conh?0:Math.round(c/r.conh*a*100)||0,d=e.closest("li"),h=0,f=!1;e.hasClass("dddwrapper-layer")&&(h=o.ddd_z_correction||65,f=!0),e.hasClass("dddwrapper-layer")&&(i=0,l=0),d.hasClass("active-revslide")||"carousel"!=r.sliderType?"on"!=o.ddd_bgfreeze||f?punchgs.TweenLite.to(e,u,{rotationX:n,rotationY:-s,x:i,z:h,y:l,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==t.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),a&&(window.ondeviceorientation=function(t){var a=Math.round(t.beta||0)-70,i=Math.round(t.gamma||0),l=e.find(".active-revslide");if(jQuery(window).width()>jQuery(window).height()){var s=i;i=a,a=s}var n=360/e.width()*i,d=180/e.height()*a,p=o.speed/1e3||3,c=[];if(l.find(".tp-parallax-container").each(function(e){c.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){c.push(jQuery(this))}),jQuery.each(c,function(){var e=jQuery(this),r=parseInt(e.data("parallaxlevel"),0)/100,t=n*r*2,a=d*r*4;punchgs.TweenLite.to(e,p,{force3D:"auto",x:t,y:a,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==o.type||"3d"==o.type){var u=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===r.sliderType&&(u=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),r.c.find(u).each(function(){var e=jQuery(this),a=o.levels[o.levels.length-1]/200,i=n*a,l=d*a*3,s=0==r.conw?0:Math.round(n/r.conw*a*500)||0,c=0==r.conh?0:Math.round(d/r.conh*a*700)||0,u=e.closest("li"),h=0,f=!1;e.hasClass("dddwrapper-layer")&&(h=o.ddd_z_correction||65,f=!0),e.hasClass("dddwrapper-layer")&&(i=0,l=0),u.hasClass("active-revslide")||"carousel"!=r.sliderType?"on"!=o.ddd_bgfreeze||f?punchgs.TweenLite.to(e,p,{rotationX:c,rotationY:-s,x:i,z:h,y:l,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==t.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}));var s=r.scrolleffect;if(s.bgs=new Array,s.on){if("on"===s.on_slidebg)for(var n=0;n<r.allslotholder.length;n++)s.bgs.push(r.allslotholder[n]);s.multiplicator_layers=parseFloat(s.multiplicator_layers),s.multiplicator=parseFloat(s.multiplicator)}void 0!==s.layers&&0===s.layers.length&&(s.layers=!1),void 0!==s.bgs&&0===s.bgs.length&&(s.bgs=!1),t.scrollTicker(r,e)}},scrollTicker:function(e,r){1!=e.scrollTicker&&(e.scrollTicker=!0,a?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){t.scrollHandling(e)},r,!1,1)):document.addEventListener("scroll",function(r){t.scrollHandling(e,!0)},{passive:!0})),t.scrollHandling(e,!0)},scrollHandling:function(e,i,l){if(e.lastwindowheight=e.lastwindowheight||window.innerHeight,e.conh=0===e.conh||void 0===e.conh?e.infullscreenmode?e.minHeight:e.c.height():e.conh,e.lastscrolltop==window.scrollY&&!e.duringslidechange&&!i)return!1;punchgs.TweenLite.delayedCall(.2,r,[e,window.scrollY]);var o=e.c[0].getBoundingClientRect(),s=e.viewPort,n=e.parallax,d=o.top<0||o.height>e.lastwindowheight?o.top/o.height:o.bottom>e.lastwindowheight?(o.bottom-e.lastwindowheight)/o.height:0;if(e.scrollproc=d,t.callBackHandling&&t.callBackHandling(e,"parallax","start"),s.enable){var p=1-Math.abs(d);p=p<0?0:p,jQuery.isNumeric(s.visible_area)||-1!==s.visible_area.indexOf("%")&&(s.visible_area=parseInt(s.visible_area)/100),1-s.visible_area<=p?e.inviewport||(e.inviewport=!0,t.enterInViewPort(e)):e.inviewport&&(e.inviewport=!1,t.leaveViewPort(e))}if(a&&"on"==n.disable_onmobile)return!1;if("3d"!=n.type&&"3D"!=n.type){if(("scroll"==n.type||"scroll+mouse"==n.type||"mouse+scroll"==n.type)&&n.pcontainers)for(w=0;w<n.pcontainers.length;w++)if(n.pcontainers[w].length>0){var c=n.pcontainers[w],u=n.pcontainer_depths[w]/100,h=Math.round(d*(-u*e.conh)*10)/10||0,f=void 0!==l?l:n.speedls/1e3||0;c.data("parallaxoffset",h),punchgs.TweenLite.to(c,f,{overwrite:"auto",force3D:"auto",y:h})}if(n.bgcontainers)for(var w=0;w<n.bgcontainers.length;w++){var v=n.bgcontainers[w],h=d*(-n.bgcontainer_depths[w]*e.conh)||0,f=void 0!==l?l:n.speedbg/1e3||0;punchgs.TweenLite.to(v,f,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:h+"px"})}}var g=e.scrolleffect;if(g.on&&("on"!==g.disable_on_mobile||!a)){var y=Math.abs(d)-g.tilt/100;if(y=y<0?0:y,!1!==g.layers){var b=1-y*g.multiplicator_layers,x={backfaceVisibility:"hidden",force3D:"true",z:.001,perspective:600};if("top"==g.direction&&d>=0&&(b=1),"bottom"==g.direction&&d<=0&&(b=1),b=b>1?1:b<0?0:b,"on"===g.fade&&(x.opacity=b),"on"===g.scale){m=b;x.scale=1-m+1}if("on"===g.blur){T=(1-b)*g.maxblur;x["-webkit-filter"]="blur("+T+"px)",x.filter="blur("+T+"px)"}if("on"===g.grayscale){L="grayscale("+(_=100*(1-b))+"%)";x["-webkit-filter"]=void 0===x["-webkit-filter"]?L:x["-webkit-filter"]+" "+L,x.filter=void 0===x.filter?L:x.filter+" "+L}punchgs.TweenLite.set(g.layers,x)}if(!1!==g.bgs){var b=1-y*g.multiplicator,x={backfaceVisibility:"hidden",force3D:"true"};if("top"==g.direction&&d>=0&&(b=1),"bottom"==g.direction&&d<=0&&(b=1),b=b>1?1:b<0?0:b,"on"===g.fade&&(x.opacity=b),"on"===g.scale){var m=b;punchgs.TweenLite.set(jQuery(".tp-kbimg-wrap"),{transformOrigin:"50% 50%",scale:m,force3D:!0})}if("on"===g.blur){var T=(1-b)*g.maxblur;x["-webkit-filter"]="blur("+T+"px)",x.filter="blur("+T+"px)"}if("on"===g.grayscale){var _=100*(1-b),L="grayscale("+_+"%)";x["-webkit-filter"]=void 0===x["-webkit-filter"]?L:x["-webkit-filter"]+" "+L,x.filter=void 0===x.filter?L:x.filter+" "+L}punchgs.TweenLite.set(g.bgs,x)}}t.callBackHandling&&t.callBackHandling(e,"parallax","end")}})}(jQuery);