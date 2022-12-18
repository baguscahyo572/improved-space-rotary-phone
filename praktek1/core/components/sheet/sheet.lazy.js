(function framework7ComponentLoader(e,s){void 0===s&&(s=!0);var t=e.$,o=e.utils,p=e.getDevice,a=e.getSupport,r=(e.Class,e.Modal),l=(e.ConstructorMethods,e.ModalMethods),i=(e.$jsx,o.extend),n=o.now,c=o.getTranslate;class h extends r{constructor(e,s){const o=i({on:{}},e.params.sheet,s);super(e,o);const r=this,l=a(),h=p();let d,m,u,g;if(r.params=o,void 0===r.params.backdrop&&(r.params.backdrop="ios"!==e.theme),d=r.params.el?t(r.params.el).eq(0):t(r.params.content).filter((e=>1===e.nodeType)).eq(0),d&&d.length>0&&d[0].f7Modal)return d[0].f7Modal;if(0===d.length)return r.destroy();function f(e){const s=e.target,o=t(s);!h.desktop&&h.cordova&&(window.Keyboard&&window.Keyboard.isVisible||window.cordova.plugins&&window.cordova.plugins.Keyboard&&window.cordova.plugins.Keyboard.isVisible)||0===o.closest(r.el).length&&(r.params.closeByBackdropClick&&r.params.backdrop&&r.backdropEl&&r.backdropEl===s||r.params.closeByOutsideClick)&&r.close()}function w(e){27===e.keyCode&&r.params.closeOnEscape&&r.close()}function y(s){return(e.height-2*s)/e.height}r.params.backdrop&&r.params.backdropEl?m=t(r.params.backdropEl):r.params.backdrop&&(r.params.backdropUnique?(m=t('<div class="sheet-backdrop sheet-backdrop-unique"></div>'),r.$containerEl.append(m)):m=r.$containerEl.children(".sheet-backdrop"),0===m.length&&(m=t('<div class="sheet-backdrop"></div>'),r.$containerEl.append(m))),i(r,{app:e,push:d.hasClass("sheet-modal-push")||r.params.push,$el:d,el:d[0],$backdropEl:m,backdropEl:m&&m[0],type:"sheet",$htmlEl:t("html")}),r.params.push&&d.addClass("sheet-modal-push");let b,C,v,S,k,E,T,$,P,M,x,O,H,B,_,q,N,D,I=!1,K=!1;function X(e){I||!r.params.swipeToClose&&!r.params.swipeToStep||r.params.swipeHandler&&0===t(e.target).closest(r.params.swipeHandler).length||(I=!0,K=!1,b={x:"touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,y:"touchstart"===e.type?e.targetTouches[0].pageY:e.pageY},S=n(),v=void 0,E=d.hasClass("sheet-modal-top"),r.params.swipeHandler||"touchstart"!==e.type||(_=t(e.target).closest(".page-content")[0]))}function Y(s){if(!I)return;if(C={x:"touchmove"===s.type?s.targetTouches[0].pageX:s.pageX,y:"touchmove"===s.type?s.targetTouches[0].pageY:s.pageY},void 0===v&&(v=!!(v||Math.abs(C.x-b.x)>Math.abs(C.y-b.y))),v)return I=!1,void(K=!1);k=b.y-C.y;const t=k<0?"to-bottom":"to-top";if(!K){if(_&&!d.hasClass("modal-in-swipe-step")&&(q=_.scrollTop,N=_.scrollHeight,D=_.offsetHeight,!(N===D||"to-bottom"===t&&0===q||"to-top"===t&&q===N-D)))return d.transform(""),I=!1,void(K=!1);r.push&&g&&(H=e.$el.children(".view, .views")),M=d[0].offsetHeight,$=c(d[0],"y"),E?(x=r.params.swipeToClose?-M:-T,O=0):(x=0,O=r.params.swipeToClose?M:T),K=!0}if(P=$-k,P=Math.min(Math.max(P,x),O),s.preventDefault(),r.push&&g){let e=(P-$)/M;r.params.swipeToStep&&(e=E?P/T:1-(T-P)/T),e=Math.abs(e),e=Math.min(Math.max(e,0),1);const s=1-e,t=1-(1-y(g))*s;H.transition(0).forEach((e=>{e.style.setProperty("transform",`translate3d(0,0,0) scale(${t})`,"important")})),r.params.swipeToStep&&H.css("border-radius",B*s+"px")}if(d.transition(0).transform(`translate3d(0,${P}px,0)`),r.params.swipeToStep){let e;e=E?1-P/T:(T-P)/T,e=Math.min(Math.max(e,0),1),d.trigger("sheet:stepprogress",e),r.emit("local::stepProgress sheetStepProgress",r,e)}}function z(){if(I=!1,!K)return;K=!1,d.transform("").transition(""),r.push&&g&&(H.transition("").transform(""),H.css("border-radius",""));const e=k<0?"to-bottom":"to-top",s=Math.abs(k);if(0===s||P===$)return;const t=(new Date).getTime()-S;if(!r.params.swipeToStep){if(e!==(E?"to-top":"to-bottom"))return;return void((t<300&&s>20||t>=300&&s>M/2)&&r.close())}const o=E?"to-bottom":"to-top",p=E?"to-top":"to-bottom",a=Math.abs(P),l=Math.abs(T);if(t<300&&s>10)return e===o&&a<l&&(d.removeClass("modal-in-swipe-step"),d.trigger("sheet:stepprogress",1),r.emit("local::stepProgress sheetStepProgress",r,1),r.emit("local::_swipeStep",!1),d.trigger("sheet:stepopen"),r.emit("local::stepOpen sheetStepOpen",r),r.push&&g&&(r.$htmlEl[0].style.setProperty("--f7-sheet-push-scale",y(g)),H.css("border-radius",""))),e===p&&a>l&&(r.params.swipeToClose?r.close():(d.addClass("modal-in-swipe-step"),d.trigger("sheet:stepprogress",0),r.emit("local::stepProgress sheetStepProgress",r,0),r.emit("local::_swipeStep",!0),d.trigger("sheet:stepclose"),r.emit("local::stepClose sheetStepClose",r),r.push&&g&&(r.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"),H.css("border-radius","0px")))),void(e===p&&a<=l&&(d.addClass("modal-in-swipe-step"),d.trigger("sheet:stepprogress",0),r.emit("local::stepProgress sheetStepProgress",r,0),r.emit("local::_swipeStep",!0),d.trigger("sheet:stepclose"),r.emit("local::stepClose sheetStepClose",r),r.push&&g&&(r.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"),H.css("border-radius","0px"))));if(t>=300){const e=!d.hasClass("modal-in-swipe-step");e?e&&(a>l+(M-l)/2?r.params.swipeToClose&&r.close():a>l/2&&(d.addClass("modal-in-swipe-step"),d.trigger("sheet:stepprogress",0),r.emit("local::stepProgress sheetStepProgress",r,0),r.emit("local::_swipeStep",!0),d.trigger("sheet:stepclose"),r.emit("local::stepClose sheetStepClose",r),r.push&&g&&(r.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"),H.css("border-radius","0px")))):a<l/2?(d.removeClass("modal-in-swipe-step"),d.trigger("sheet:stepprogress",1),r.emit("local::stepProgress sheetStepProgress",r,1),r.emit("local::_swipeStep",!1),d.trigger("sheet:stepopen"),r.emit("local::stepOpen sheetStepOpen",r),r.push&&g&&(r.$htmlEl[0].style.setProperty("--f7-sheet-push-scale",y(g)),H.css("border-radius",""))):a-l>(M-l)/2&&r.params.swipeToClose&&r.close()}}function A(){r.setSwipeStep(!0)}r.setSwipeStep=function(e){void 0===e&&(e=!0);const s=d.find(".sheet-modal-swipe-step").eq(0);s.length&&(T=d.hasClass("sheet-modal-top")?-(s.offset().top-d.offset().top+s[0].offsetHeight):d[0].offsetHeight-(s.offset().top-d.offset().top+s[0].offsetHeight),d[0].style.setProperty("--f7-sheet-swipe-step",`${T}px`),e||(d.addClass("modal-in-swipe-step"),r.emit("local::_swipeStep",!0)))};const L=!!l.passiveListener&&{passive:!0};return(r.params.swipeToClose||r.params.swipeToStep)&&(d.on(e.touchEvents.start,X,L),e.on("touchmove",Y),e.on("touchend:passive",z),r.once("sheetDestroy",(()=>{d.off(e.touchEvents.start,X,L),e.off("touchmove",Y),e.off("touchend:passive",z)}))),r.on("open",(()=>{r.params.closeOnEscape&&t(document).on("keydown",w),d.prevAll(".popup.modal-in").addClass("popup-behind"),r.params.swipeToStep&&(r.setSwipeStep(!1),e.on("resize",A)),r.params.scrollToEl&&function(){const e=t(r.params.scrollToEl).eq(0);if(0===e.length)return;if(u=e.parents(".page-content"),0===u.length)return;const s=parseInt(u.css("padding-top"),10),o=parseInt(u.css("padding-bottom"),10),p=u[0].offsetHeight-s-d.height(),a=u[0].scrollHeight-s-d.height(),l=u.scrollTop();let i;const n=e.offset().top-s+e[0].offsetHeight;if(n>p){const e=l+n-p;e+p>a&&(i=e+p-a+o,p===a&&(i=d.height()),u.css({"padding-bottom":`${i}px`})),u.scrollTop(e,300)}}(),r.push&&(g=parseInt(d.css("--f7-sheet-push-offset"),10),Number.isNaN(g)&&(g=0),g&&(d.addClass("sheet-modal-push"),r.$htmlEl.addClass("with-modal-sheet-push"),r.params.swipeToStep?(H=e.$el.children(".view, .views"),B=parseFloat(d.css(`border-${E?"bottom":"top"}-left-radius`)),H.css("border-radius","0px")):r.$htmlEl[0].style.setProperty("--f7-sheet-push-scale",y(g))))})),r.on("opened",(()=>{(r.params.closeByOutsideClick||r.params.closeByBackdropClick)&&e.on("click",f)})),r.on("close",(()=>{r.params.swipeToStep&&(d.removeClass("modal-in-swipe-step"),r.emit("local::_swipeStep",!1),e.off("resize",A)),r.params.closeOnEscape&&t(document).off("keydown",w),r.params.scrollToEl&&u&&u.length>0&&u.css({"padding-bottom":""}),(r.params.closeByOutsideClick||r.params.closeByBackdropClick)&&e.off("click",f),d.prevAll(".popup.modal-in").eq(0).removeClass("popup-behind"),r.push&&g&&(r.$htmlEl.removeClass("with-modal-sheet-push"),r.$htmlEl.addClass("with-modal-sheet-push-closing"))})),r.on("closed",(()=>{r.push&&g&&(r.$htmlEl.removeClass("with-modal-sheet-push-closing"),r.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"))})),r.stepOpen=function(){d.removeClass("modal-in-swipe-step"),r.emit("local::_swipeStep",!1),r.push&&(g||(g=parseInt(d.css("--f7-sheet-push-offset"),10),Number.isNaN(g)&&(g=0)),g&&r.$htmlEl[0].style.setProperty("--f7-sheet-push-scale",y(g)))},r.stepClose=function(){d.addClass("modal-in-swipe-step"),r.emit("local::_swipeStep",!0),r.push&&r.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale")},r.stepToggle=function(){d.toggleClass("modal-in-swipe-step"),r.emit("local::_swipeStep",d.hasClass("modal-in-swipe-step"))},d[0].f7Modal=r,r}}var d={name:"sheet",params:{sheet:{push:!1,backdrop:void 0,backdropEl:void 0,backdropUnique:!1,closeByBackdropClick:!0,closeByOutsideClick:!1,closeOnEscape:!1,swipeToClose:!1,swipeToStep:!1,swipeHandler:null,containerEl:null}},static:{Sheet:h},create(){const e=this;e.sheet=i({},l({app:e,constructor:h,defaultSelector:".sheet-modal.modal-in"}),{stepOpen(s){const t=e.sheet.get(s);if(t&&t.stepOpen)return t.stepOpen()},stepClose(s){const t=e.sheet.get(s);if(t&&t.stepClose)return t.stepClose()},stepToggle(s){const t=e.sheet.get(s);if(t&&t.stepToggle)return t.stepToggle()}})},clicks:{".sheet-open":function(e,s){void 0===s&&(s={});const o=this;t(".sheet-modal.modal-in").length>0&&s.sheet&&t(s.sheet)[0]!==t(".sheet-modal.modal-in")[0]&&o.sheet.close(".sheet-modal.modal-in"),o.sheet.open(s.sheet,s.animate,e)},".sheet-close":function(e,s){void 0===s&&(s={});this.sheet.close(s.sheet,s.animate,e)}}};if(s){if(e.prototype.modules&&e.prototype.modules[d.name])return;e.use(d),e.instance&&(e.instance.useModuleParams(d,e.instance.params),e.instance.useModule(d))}return d}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
