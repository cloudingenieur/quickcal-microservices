import{u as lt,a as rt,Q as R,b as $e,R as X}from"./QBtn.18536c2d.js";import{v as G,c as s,h as w,x as ee,g as he,i as Ie,y as te,z as We,r as k,w as C,l as Te,A as ot,Q as Be,B as nt,C as oe,D as it,E as ut,G as fe,H as Se,I as Qe,J as _e,K as xe,L as we,M as st,N as ct,O as qe,P as dt,R as vt,S as ft,U as ht,q as L,V as De,W as mt,n as Ee,o as bt,X as Le,Y as yt,Z as N,_ as gt,f,$ as b,a0 as E,a1 as Y,a2 as K,a3 as pt,a4 as zt,F as St}from"./index.13b6b415.js";import{u as Me,a as Oe}from"./use-dark.7886aba6.js";import{c as _t,b as I,u as wt,a as qt,d as Ct,e as kt,f as Bt,g as xt,Q as Tt,h as U,i as P}from"./use-timeout.b7da56e9.js";import{_ as Mt}from"./plugin-vue_export-helper.21dcd24c.js";var Ot=G({name:"QBanner",props:{...Me,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:o}){const{proxy:{$q:c}}=he(),y=Oe(e,c),t=s(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(y.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),l=s(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const n=[w("div",{class:"q-banner__avatar col-auto row items-center self-start"},ee(o.avatar)),w("div",{class:"q-banner__content col text-body2"},ee(o.default))],a=ee(o.action);return a!==void 0&&n.push(w("div",{class:l.value},a)),w("div",{class:t.value+(e.inlineActions===!1&&a!==void 0?" q-banner--top-padding":""),role:"alert"},n)}}}),Pt=G({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const c=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:c.value},ee(o.default))}}),At=G({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const c=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:c.value,role:"toolbar"},ee(o.default))}}),$t=G({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:c}){const{proxy:{$q:y}}=he(),t=Ie(We,te);if(t===te)return console.error("QHeader needs to be child of QLayout"),te;const l=k(parseInt(e.heightHint,10)),n=k(!0),a=s(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||y.platform.is.ios&&t.isContainer.value===!0),g=s(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return n.value===!0?l.value:0;const v=l.value-t.scroll.value.position;return v>0?v:0}),h=s(()=>e.modelValue!==!0||a.value===!0&&n.value!==!0),u=s(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),B=s(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(h.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=s(()=>{const v=t.rows.value.top,T={};return v[0]==="l"&&t.left.space===!0&&(T[y.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(T[y.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function S(v,T){t.update("header",v,T)}function p(v,T){v.value!==T&&(v.value=T)}function A({height:v}){p(l,v),S("size",v)}function x(v){u.value===!0&&p(n,!0),c("focusin",v)}C(()=>e.modelValue,v=>{S("space",v),p(n,!0),t.animate()}),C(g,v=>{S("offset",v)}),C(()=>e.reveal,v=>{v===!1&&p(n,e.modelValue)}),C(n,v=>{t.animate(),c("reveal",v)}),C(t.scroll,v=>{e.reveal===!0&&p(n,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const _={};return t.instances.header=_,e.modelValue===!0&&S("size",l.value),S("space",e.modelValue),S("offset",g.value),Te(()=>{t.instances.header===_&&(t.instances.header=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const v=ot(o.default,[]);return e.elevated===!0&&v.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(w(Be,{debounce:0,onResize:A})),w("header",{class:B.value,style:q.value,onFocusin:x},v)}}});const Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Qt=Object.keys(Pe);Pe.all=!0;function He(e){const o={};for(const c of Qt)e[c]===!0&&(o[c]=!0);return Object.keys(o).length===0?Pe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Dt=["INPUT","TEXTAREA"];function Ve(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Dt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Ce(e,o,c){const y=xe(e);let t,l=y.left-o.event.x,n=y.top-o.event.y,a=Math.abs(l),g=Math.abs(n);const h=o.direction;h.horizontal===!0&&h.vertical!==!0?t=l<0?"left":"right":h.horizontal!==!0&&h.vertical===!0?t=n<0?"up":"down":h.up===!0&&n<0?(t="up",a>g&&(h.left===!0&&l<0?t="left":h.right===!0&&l>0&&(t="right"))):h.down===!0&&n>0?(t="down",a>g&&(h.left===!0&&l<0?t="left":h.right===!0&&l>0&&(t="right"))):h.left===!0&&l<0?(t="left",a<g&&(h.up===!0&&n<0?t="up":h.down===!0&&n>0&&(t="down"))):h.right===!0&&l>0&&(t="right",a<g&&(h.up===!0&&n<0?t="up":h.down===!0&&n>0&&(t="down")));let u=!1;if(t===void 0&&c===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,u=!0,t==="left"||t==="right"?(y.left-=l,a=0,l=0):(y.top-=n,g=0,n=0)}return{synthetic:u,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:y,direction:t,isFirst:o.event.isFirst,isFinal:c===!0,duration:Date.now()-o.event.time,distance:{x:a,y:g},offset:{x:l,y:n},delta:{x:y.left-o.event.lastX,y:y.top-o.event.lastY}}}}let Et=0;var ne=nt({name:"touch-pan",beforeMount(e,{value:o,modifiers:c}){if(c.mouse!==!0&&oe.has.touch!==!0)return;function y(l,n){c.mouse===!0&&n===!0?st(l):(c.stop===!0&&_e(l),c.prevent===!0&&Qe(l))}const t={uid:"qvtp_"+Et++,handler:o,modifiers:c,direction:He(c),noop:it,mouseStart(l){Ve(l,t)&&ut(l)&&(fe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ve(l,t)){const n=l.target;fe(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,n){if(oe.is.firefox===!0&&Se(e,!0),t.lastEvt=l,n===!0||c.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const h=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Qe(h),l.cancelBubble===!0&&_e(h),Object.assign(h,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:h}}_e(l)}const{left:a,top:g}=xe(l);t.event={x:a,y:g,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:g}},move(l){if(t.event===void 0)return;const n=xe(l),a=n.left-t.event.x,g=n.top-t.event.y;if(a===0&&g===0)return;t.lastEvt=l;const h=t.event.mouse===!0,u=()=>{y(l,h);let S;c.preserveCursor!==!0&&c.preservecursor!==!0&&(S=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),h===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),_t(),t.styleCleanup=p=>{if(t.styleCleanup=void 0,S!==void 0&&(document.documentElement.style.cursor=S),document.body.classList.remove("non-selectable"),h===!0){const A=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{A(),p()},50):A()}else p!==void 0&&p()}};if(t.event.detected===!0){t.event.isFirst!==!0&&y(l,t.event.mouse);const{payload:S,synthetic:p}=Ce(l,t,!1);S!==void 0&&(t.handler(S)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=S.position.left,t.event.lastY=S.position.top,t.event.lastDir=p===!0?void 0:S.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||h===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(l);return}const B=Math.abs(a),q=Math.abs(g);B!==q&&(t.direction.horizontal===!0&&B>q||t.direction.vertical===!0&&B<q||t.direction.up===!0&&B<q&&g<0||t.direction.down===!0&&B<q&&g>0||t.direction.left===!0&&B>q&&a<0||t.direction.right===!0&&B>q&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,n){if(t.event!==void 0){if(we(t,"temp"),oe.is.firefox===!0&&Se(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=Ce(l===void 0?t.lastEvt:l,t,!0),g=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(g):g()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,c.mouse===!0){const l=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";fe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}oe.has.touch===!0&&fe(t,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const c=e.__qtouchpan;c!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&c.end(),c.handler=o.value),c.direction=He(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),oe.is.firefox===!0&&Se(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Fe=["vertical","horizontal"],ke={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},je={prevent:!0,mouse:!0,mouseAllDir:!0},Ne=e=>e>=250?50:Math.ceil(e/5);var Lt=G({name:"QScrollArea",props:{...Me,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:o,emit:c}){const y=k(!1),t=k(!1),l=k(!1),n={vertical:k(0),horizontal:k(0)},a={vertical:{ref:k(null),position:k(0),size:k(0)},horizontal:{ref:k(null),position:k(0),size:k(0)}},{proxy:g}=he(),h=Oe(e,g.$q);let u=null,B;const q=k(null),S=s(()=>"q-scrollarea"+(h.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=s(()=>{const i=a.vertical.size.value-n.vertical.value;if(i<=0)return 0;const d=I(a.vertical.position.value/i,0,1);return Math.round(d*1e4)/1e4}),a.vertical.thumbHidden=s(()=>(e.visible===null?l.value:e.visible)!==!0&&y.value===!1&&t.value===!1||a.vertical.size.value<=n.vertical.value+1),a.vertical.thumbStart=s(()=>a.vertical.percentage.value*(n.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=s(()=>Math.round(I(n.vertical.value*n.vertical.value/a.vertical.size.value,Ne(n.vertical.value),n.vertical.value))),a.vertical.style=s(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=s(()=>{const i=a.horizontal.size.value-n.horizontal.value;if(i<=0)return 0;const d=I(Math.abs(a.horizontal.position.value)/i,0,1);return Math.round(d*1e4)/1e4}),a.horizontal.thumbHidden=s(()=>(e.visible===null?l.value:e.visible)!==!0&&y.value===!1&&t.value===!1||a.horizontal.size.value<=n.horizontal.value+1),a.horizontal.thumbStart=s(()=>a.horizontal.percentage.value*(n.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=s(()=>Math.round(I(n.horizontal.value*n.horizontal.value/a.horizontal.size.value,Ne(n.horizontal.value),n.horizontal.value))),a.horizontal.style=s(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[g.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const p=s(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),A=[[ne,i=>{ue(i,"vertical")},void 0,{vertical:!0,...je}]],x=[[ne,i=>{ue(i,"horizontal")},void 0,{horizontal:!0,...je}]];function _(){const i={};return Fe.forEach(d=>{const z=a[d];i[d+"Position"]=z.position.value,i[d+"Percentage"]=z.percentage.value,i[d+"Size"]=z.size.value,i[d+"ContainerSize"]=n[d].value}),i}const v=ct(()=>{const i=_();i.ref=g,c("scroll",i)},0);function T(i,d,z){if(Fe.includes(i)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(i==="vertical"?De:qe)(q.value,d,z)}function ie({height:i,width:d}){let z=!1;n.vertical.value!==i&&(n.vertical.value=i,z=!0),n.horizontal.value!==d&&(n.horizontal.value=d,z=!0),z===!0&&D()}function ae({position:i}){let d=!1;a.vertical.position.value!==i.top&&(a.vertical.position.value=i.top,d=!0),a.horizontal.position.value!==i.left&&(a.horizontal.position.value=i.left,d=!0),d===!0&&D()}function W({height:i,width:d}){a.horizontal.size.value!==d&&(a.horizontal.size.value=d,D()),a.vertical.size.value!==i&&(a.vertical.size.value=i,D())}function ue(i,d){const z=a[d];if(i.isFirst===!0){if(z.thumbHidden.value===!0)return;B=z.position.value,t.value=!0}else if(t.value!==!0)return;i.isFinal===!0&&(t.value=!1);const V=ke[d],Z=n[d].value,me=(z.size.value-Z)/(Z-z.thumbSize.value),de=i.distance[V.dist],be=B+(i.direction===V.dir?1:-1)*de*me;le(be,d)}function se(i,d){const z=a[d];if(z.thumbHidden.value!==!0){const V=i[ke[d].offset];if(V<z.thumbStart.value||V>z.thumbStart.value+z.thumbSize.value){const Z=V-z.thumbSize.value/2;le(Z/n[d].value*z.size.value,d)}z.ref.value!==null&&z.ref.value.dispatchEvent(new MouseEvent(i.type,i))}}function J(i){se(i,"vertical")}function Q(i){se(i,"horizontal")}function D(){y.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,y.value=!1},e.delay),e.onScroll!==void 0&&v()}function le(i,d){q.value[ke[d].scroll]=i}let M=null;function re(){M!==null&&clearTimeout(M),M=setTimeout(()=>{M=null,l.value=!0},g.$q.platform.is.ios?50:0)}function ce(){M!==null&&(clearTimeout(M),M=null),l.value=!1}let H=null;return C(()=>g.$q.lang.rtl,i=>{q.value!==null&&qe(q.value,Math.abs(a.horizontal.position.value)*(i===!0?-1:1))}),dt(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),vt(()=>{if(H===null)return;const i=q.value;i!==null&&(qe(i,H.left),De(i,H.top))}),Te(v.cancel),Object.assign(g,{getScrollTarget:()=>q.value,getScroll:_,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:T,setScrollPercentage(i,d,z){T(i,d*(a[i].size.value-n[i].value)*(i==="horizontal"&&g.$q.lang.rtl===!0?-1:1),z)}}),()=>w("div",{class:S.value,onMouseenter:re,onMouseleave:ce},[w("div",{ref:q,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[w("div",{class:"q-scrollarea__content absolute",style:p.value},ft(o.default,[w(Be,{debounce:0,onResize:W})])),w(ht,{axis:"both",onScroll:ae})]),w(Be,{debounce:0,onResize:ie}),w("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:J}),w("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:Q}),L(w("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),A),L(w("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),x)])}}),Ht=G({name:"QAvatar",props:{...lt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:o}){const c=rt(e),y=s(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=s(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const l=e.icon!==void 0?[w(R,{name:e.icon})]:void 0;return w("div",{class:y.value,style:c.value},[w("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},mt(o.default,l))])}}});const Re=150;var Vt=G({name:"QDrawer",inheritAttrs:!1,props:{...wt,...Me,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:o,emit:c,attrs:y}){const t=he(),{proxy:{$q:l}}=t,n=Oe(e,l),{preventBodyScroll:a}=xt(),{registerTimeout:g,removeTimeout:h}=Ct(),u=Ie(We,te);if(u===te)return console.error("QDrawer needs to be child of QLayout"),te;let B,q=null,S;const p=k(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),A=s(()=>e.mini===!0&&p.value!==!0),x=s(()=>A.value===!0?e.miniWidth:e.width),_=k(e.showIfAbove===!0&&p.value===!1?!0:e.modelValue===!0),v=s(()=>e.persistent!==!0&&(p.value===!0||V.value===!0));function T(r,m){if(ue(),r!==!1&&u.animate(),$(0),p.value===!0){const O=u.instances[H.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),F(1),u.isContainer.value!==!0&&a(!0)}else F(0),r!==!1&&ge(!1);g(()=>{r!==!1&&ge(!0),m!==!0&&c("show",r)},Re)}function ie(r,m){se(),r!==!1&&u.animate(),F(0),$(D.value*x.value),pe(),m!==!0?g(()=>{c("hide",r)},Re):h()}const{show:ae,hide:W}=kt({showing:_,hideOnRouteChange:v,handleShow:T,handleHide:ie}),{addToHistory:ue,removeFromHistory:se}=Bt(_,W,v),J={belowBreakpoint:p,hide:W},Q=s(()=>e.side==="right"),D=s(()=>(l.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),le=k(0),M=k(!1),re=k(!1),ce=k(x.value*D.value),H=s(()=>Q.value===!0?"left":"right"),i=s(()=>_.value===!0&&p.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),d=s(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(Q.value?"R":"L")!==-1||l.platform.is.ios===!0&&u.isContainer.value===!0),z=s(()=>e.overlay===!1&&_.value===!0&&p.value===!1),V=s(()=>e.overlay===!0&&_.value===!0&&p.value===!1),Z=s(()=>"fullscreen q-drawer__backdrop"+(_.value===!1&&M.value===!1?" hidden":"")),me=s(()=>({backgroundColor:`rgba(0,0,0,${le.value*.4})`})),de=s(()=>Q.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),be=s(()=>Q.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Xe=s(()=>{const r={};return u.header.space===!0&&de.value===!1&&(d.value===!0?r.top=`${u.header.offset}px`:u.header.space===!0&&(r.top=`${u.header.size}px`)),u.footer.space===!0&&be.value===!1&&(d.value===!0?r.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(r.bottom=`${u.footer.size}px`)),r}),Ye=s(()=>{const r={width:`${x.value}px`,transform:`translateX(${ce.value}px)`};return p.value===!0?r:Object.assign(r,Xe.value)}),Ue=s(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=s(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":_.value===!0?"":" q-layout--prevent-focus")+(p.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${A.value===!0?"mini":"standard"}`+(d.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),Ge=s(()=>{const r=l.lang.rtl===!0?e.side:H.value;return[[ne,tt,void 0,{[r]:!0,mouse:!0}]]}),Je=s(()=>{const r=l.lang.rtl===!0?H.value:e.side;return[[ne,Ae,void 0,{[r]:!0,mouse:!0}]]}),Ze=s(()=>{const r=l.lang.rtl===!0?H.value:e.side;return[[ne,Ae,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ye(){at(p,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}C(p,r=>{r===!0?(B=_.value,_.value===!0&&W(!1)):e.overlay===!1&&e.behavior!=="mobile"&&B!==!1&&(_.value===!0?($(0),F(0),pe()):ae(!1))}),C(()=>e.side,(r,m)=>{u.instances[m]===J&&(u.instances[m]=void 0,u[m].space=!1,u[m].offset=0),u.instances[r]=J,u[r].size=x.value,u[r].space=z.value,u[r].offset=i.value}),C(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&ye()}),C(()=>e.behavior+e.breakpoint,ye),C(u.isContainer,r=>{_.value===!0&&a(r!==!0),r===!0&&ye()}),C(u.scrollbarWidth,()=>{$(_.value===!0?0:void 0)}),C(i,r=>{j("offset",r)}),C(z,r=>{c("onLayout",r),j("space",r)}),C(Q,()=>{$()}),C(x,r=>{$(),ze(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{ze(r,x.value)}),C(()=>l.lang.rtl,()=>{$()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(et(),u.animate())}),C(A,r=>{c("miniState",r)});function $(r){r===void 0?Ee(()=>{r=_.value===!0?0:x.value,$(D.value*r)}):(u.isContainer.value===!0&&Q.value===!0&&(p.value===!0||Math.abs(r)===x.value)&&(r+=D.value*u.scrollbarWidth.value),ce.value=r)}function F(r){le.value=r}function ge(r){const m=r===!0?"remove":u.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function et(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,q=setTimeout(()=>{q=null,re.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(r){if(_.value!==!1)return;const m=x.value,O=I(r.distance.x,0,m);if(r.isFinal===!0){O>=Math.min(75,m)===!0?ae():(u.animate(),F(0),$(D.value*m)),M.value=!1;return}$((l.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(m-O,0):Math.min(0,O-m)),F(I(O/m,0,1)),r.isFirst===!0&&(M.value=!0)}function Ae(r){if(_.value!==!0)return;const m=x.value,O=r.direction===e.side,ve=(l.lang.rtl===!0?O!==!0:O)?I(r.distance.x,0,m):0;if(r.isFinal===!0){Math.abs(ve)<Math.min(75,m)===!0?(u.animate(),F(1),$(0)):W(),M.value=!1;return}$(D.value*ve),F(I(1-ve/m,0,1)),r.isFirst===!0&&(M.value=!0)}function pe(){a(!1),ge(!0)}function j(r,m){u.update(e.side,r,m)}function at(r,m){r.value!==m&&(r.value=m)}function ze(r,m){j("size",r===!0?e.miniWidth:m)}return u.instances[e.side]=J,ze(e.miniToOverlay,x.value),j("space",z.value),j("offset",i.value),e.showIfAbove===!0&&e.modelValue!==!0&&_.value===!0&&e["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!0),bt(()=>{c("onLayout",z.value),c("miniState",A.value),B=e.showIfAbove===!0;const r=()=>{(_.value===!0?T:ie)(!1,!0)};if(u.totalWidth.value!==0){Ee(r);return}S=C(u.totalWidth,()=>{S(),S=void 0,_.value===!1&&e.showIfAbove===!0&&p.value===!1?ae(!1):r()})}),Te(()=>{S!==void 0&&S(),q!==null&&(clearTimeout(q),q=null),_.value===!0&&pe(),u.instances[e.side]===J&&(u.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const r=[];p.value===!0&&(e.noSwipeOpen===!1&&r.push(L(w("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ge.value)),r.push(Le("div",{ref:"backdrop",class:Z.value,style:me.value,"aria-hidden":"true",onClick:W},void 0,"backdrop",e.noSwipeBackdrop!==!0&&_.value===!0,()=>Ze.value)));const m=A.value===!0&&o.mini!==void 0,O=[w("div",{...y,key:""+m,class:[Ue.value,y.class]},m===!0?o.mini():ee(o.default))];return e.elevated===!0&&_.value===!0&&O.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Le("aside",{ref:"content",class:Ke.value,style:Ye.value},O,"contentclose",e.noSwipeClose!==!0&&p.value===!0,()=>Je.value)),w("div",{class:"q-drawer-container"},r)}}});const Ft={setup(){return{drawer:k(!1)}}},jt=K("a",{href:"https://cloudingenieur.com/"},"Privacy Policy",-1),Nt=K("span",null,"Free",-1),Rt={class:"absolute-top",style:{height:"150px","background-color":"#0097a7"}},It={class:"absolute-bottom bg-transparent"},Wt=K("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),Xt=K("div",{class:"text-weight-bold"},"Mohammed",-1),Yt=K("div",null,"Administrator",-1);function Ut(e,o,c,y,t,l){const n=yt("RouterView");return N(),gt(St,null,[f(Ot,{dense:"","inline-actions":"",class:"text-white bg-red"},{action:b(()=>[f($e,{flat:"",color:"white",label:"Upgrade to Pro!"})]),default:b(()=>[E(" You have 14 days left to data deletion. Please read "),jt,E(" for data retention. ")]),_:1}),f(zt,{view:"lHh Lpr lff",container:"",style:{height:"100vh"},class:"shadow-2"},{default:b(()=>[f($t,{elevated:"",class:"bg-cyan-8"},{default:b(()=>[f(At,null,{default:b(()=>[f(Pt,null,{default:b(()=>[E("BookMe "),Nt]),_:1}),f($e,{flat:"",onClick:o[0]||(o[0]=a=>y.drawer=!y.drawer),round:"",dense:"",icon:"menu"})]),_:1})]),_:1}),f(Vt,{modelValue:y.drawer,"onUpdate:modelValue":o[1]||(o[1]=a=>y.drawer=a),width:200,breakpoint:400},{default:b(()=>[f(Lt,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:b(()=>[f(Tt,{padding:""},{default:b(()=>[L((N(),Y(U,{clickable:"",to:"/dashboard",exact:""},{default:b(()=>[f(P,{avatar:""},{default:b(()=>[f(R,{name:"inbox"})]),_:1}),f(P,null,{default:b(()=>[E(" Dashboard ")]),_:1})]),_:1})),[[X]]),L((N(),Y(U,{clickable:"",to:"/calendar"},{default:b(()=>[f(P,{avatar:""},{default:b(()=>[f(R,{name:"calendar_month"})]),_:1}),f(P,null,{default:b(()=>[E(" Appointments ")]),_:1})]),_:1})),[[X]]),L((N(),Y(U,{clickable:"",to:"/clients"},{default:b(()=>[f(P,{avatar:""},{default:b(()=>[f(R,{name:"people"})]),_:1}),f(P,null,{default:b(()=>[E(" Customers ")]),_:1})]),_:1})),[[X]]),L((N(),Y(U,{clickable:"",to:"/services"},{default:b(()=>[f(P,{avatar:""},{default:b(()=>[f(R,{name:"electrical_services"})]),_:1}),f(P,null,{default:b(()=>[E(" Categories ")]),_:1})]),_:1})),[[X]]),L((N(),Y(U,{clickable:"",to:"/invoices"},{default:b(()=>[f(P,{avatar:""},{default:b(()=>[f(R,{name:"receipt"})]),_:1}),f(P,null,{default:b(()=>[E(" Invoices ")]),_:1})]),_:1})),[[X]]),L((N(),Y(U,{clickable:"",to:"/services"},{default:b(()=>[f(P,{avatar:""},{default:b(()=>[f(R,{name:"electrical_services"})]),_:1}),f(P,null,{default:b(()=>[E(" Orders ")]),_:1})]),_:1})),[[X]]),L((N(),Y(U,{clickable:"",to:"/settings"},{default:b(()=>[f(P,{avatar:""},{default:b(()=>[f(R,{name:"settings"})]),_:1}),f(P,null,{default:b(()=>[E(" Settings ")]),_:1})]),_:1})),[[X]])]),_:1})]),_:1}),K("div",Rt,[K("div",It,[f(Ht,{size:"56px",class:"q-mb-sm"},{default:b(()=>[Wt]),_:1}),Xt,Yt])])]),_:1},8,["modelValue"]),f(pt,null,{default:b(()=>[f(n)]),_:1})]),_:1})],64)}var aa=Mt(Ft,[["render",Ut]]);export{aa as default};
