(self.webpackChunkgame_phone=self.webpackChunkgame_phone||[]).push([[9589],{79589:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var r=t(74165),a=t(15861),i=t(54816),o=t(84863),u=t(52592),l=t(10549),s=t(30708),c=t(74486),d=t(29191),f=t(24563),m=t(71249),p=1/0;var v=function(e){return e?(e=(0,m.Z)(e))===p||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0};var h=function(e){var n=v(e),t=n%1;return n===n?t?n-t:n:0},y=Math.ceil,g=Math.max;var x=function(e,n,t){n=(t?(0,f.Z)(e,n,t):void 0===n)?1:g(h(n),0);var r=null==e?0:e.length;if(!r||n<1)return[];for(var a=0,i=0,o=Array(y(r/n));a<r;)o[i++]=(0,d.Z)(e,a,a+=n);return o},w=t(60742),b=t.n(w),k=t(42374),j=function(){var e=(0,l.TL)(),n=(0,l.CG)((function(e){return e.invite.broadcastList}));(0,s.Z)((0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((0,c.tK)());case 1:case"end":return n.stop()}}),n)}))));var d=(0,i.useMemo)((function(){for(var e=n.length,t=x(n,Math.ceil(e/3));t.length<3;)t.push([]);return t}),[n]);return console.log(d,"marqueeList"),(0,k.jsxs)(o.cB,{children:[(0,k.jsx)("div",{className:"level-box"}),(0,k.jsxs)("div",{className:"rewards-box",children:[(0,k.jsx)("img",{src:t(98681),alt:""}),(0,k.jsxs)("div",{className:"text",children:[(0,k.jsx)("span",{style:{color:"red"},children:"0.2% "}),"dari taruhan pengguna B +dari taruhan pengguna B + ",(0,k.jsx)("span",{style:{color:"red"},children:"20%*0.2%"})," dari taruhan pengguna Cdari taruhan pengguna C"]})]}),(0,k.jsx)("div",{className:"desc",children:"*Sistem akan diperbarui pada pukul 0:00 setiap hari"}),d.map((function(e,n){return(0,k.jsx)(u.Z,{pauseOnHover:!0,className:"notice",direction:"left",style:{width:"100%"},loop:0,children:e.map((function(e,n){return(0,k.jsxs)("div",{className:b()("item",{"one-item":0===n,"tow-item":1===n}),children:[e.nickname," berhasil mengundang pemain ",e.sub_nickname,", dapatkan bonus 400"]},n)}))},n)}))]})},C=(0,i.memo)(j)},52592:function(e,n,t){var r=t(861).default,a=t(38416).default,i=t(27424).default;var o=t(54816);function u(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var l=u(o);!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0.1));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');var s=o.forwardRef((function(e,n){var t=e.style,u=void 0===t?{}:t,s=e.className,c=void 0===s?"":s,d=e.autoFill,f=void 0!==d&&d,m=e.play,p=void 0===m||m,v=e.pauseOnHover,h=void 0!==v&&v,y=e.pauseOnClick,g=void 0!==y&&y,x=e.direction,w=void 0===x?"left":x,b=e.speed,k=void 0===b?50:b,j=e.delay,C=void 0===j?0:j,M=e.loop,E=void 0===M?0:M,N=e.gradient,_=void 0!==N&&N,Z=e.gradientColor,q=void 0===Z?"white":Z,O=e.gradientWidth,S=void 0===O?200:O,A=e.onFinish,R=e.onCycleComplete,B=e.onMount,F=e.children,L=o.useState(0),z=i(L,2),H=z[0],I=z[1],T=o.useState(0),X=i(T,2),G=X[0],K=X[1],W=o.useState(1),D=i(W,2),J=D[0],P=D[1],Q=o.useState(!1),U=i(Q,2),V=U[0],Y=U[1],$=o.useRef(null),ee=n||$,ne=o.useRef(null),te=o.useCallback((function(){if(ne.current&&ee.current){var e=ee.current.getBoundingClientRect(),n=ne.current.getBoundingClientRect(),t=e.width,r=n.width;"up"!==w&&"down"!==w||(t=e.height,r=n.height),P(f&&t&&r&&r<t?Math.ceil(t/r):1),I(t),K(r)}}),[f,ee,w]);o.useEffect((function(){if(V&&(te(),ne.current&&ee.current)){var e=new ResizeObserver((function(){return te()}));return e.observe(ee.current),e.observe(ne.current),function(){e&&e.disconnect()}}}),[te,ee,V]),o.useEffect((function(){te()}),[te,F]),o.useEffect((function(){Y(!0)}),[]),o.useEffect((function(){"function"===typeof B&&B()}),[]);var re=o.useMemo((function(){return f?G*J/k:G<H?H/k:G/k}),[f,H,G,J,k]),ae=o.useMemo((function(){return Object.assign(Object.assign({},u),a(a(a(a({},"--pause-on-hover",!p||h?"paused":"running"),"--pause-on-click",!p||h&&!g||g?"paused":"running"),"--width","up"===w||"down"===w?"100vh":"100%"),"--transform","up"===w?"rotate(-90deg)":"down"===w?"rotate(90deg)":"none"))}),[u,p,h,g,w]),ie=o.useMemo((function(){return a(a({},"--gradient-color",q),"--gradient-width","number"===typeof S?"".concat(S,"px"):S)}),[q,S]),oe=o.useMemo((function(){return a(a(a(a(a(a({},"--play",p?"running":"paused"),"--direction","left"===w?"normal":"reverse"),"--duration","".concat(re,"s")),"--delay","".concat(C,"s")),"--iteration-count",E?"".concat(E):"infinite"),"--min-width",f?"auto":"100%")}),[p,w,re,C,E,f]),ue=o.useMemo((function(){return a({},"--transform","up"===w?"rotate(90deg)":"down"===w?"rotate(-90deg)":"none")}),[w]),le=o.useCallback((function(e){return r(Array(Number.isFinite(e)&&e>=0?e:0)).map((function(e,n){return l.default.createElement(o.Fragment,{key:n},o.Children.map(F,(function(e){return l.default.createElement("div",{style:ue,className:"rfm-child"},e)})))}))}),[ue,F]);return V?l.default.createElement("div",{ref:ee,style:ae,className:"rfm-marquee-container "+c},_&&l.default.createElement("div",{style:ie,className:"rfm-overlay"}),l.default.createElement("div",{className:"rfm-marquee",style:oe,onAnimationIteration:R,onAnimationEnd:A},l.default.createElement("div",{className:"rfm-initial-child-container",ref:ne},o.Children.map(F,(function(e){return l.default.createElement("div",{style:ue,className:"rfm-child"},e)}))),le(J-1)),l.default.createElement("div",{className:"rfm-marquee",style:oe},le(J))):null}));n.Z=s},98681:function(e,n,t){"use strict";e.exports=t.p+"static/media/js.1aa716e0a99f67a57611.webp"},85372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},68872:function(e){e.exports=function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i,o,u=[],l=!0,s=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw a}}return u}},e.exports.__esModule=!0,e.exports.default=e.exports},12218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},27424:function(e,n,t){var r=t(85372),a=t(68872),i=t(86116),o=t(12218);e.exports=function(e,n){return r(e)||a(e,n)||i(e,n)||o()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);