"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7395],{70034:function(e,t,n){n.d(t,{Dx:function(){return X},VY:function(){return Y},aV:function(){return K},dk:function(){return U},fC:function(){return B},jm:function(){return H},p8:function(){return w},x8:function(){return V},xz:function(){return j}});var r=n(46861),o=n(67294),i=n(1876),c=n(77514),l=n(22888),u=n(67663),d=n(57764),s=n(25714),m=n(48914),f=n(99428),h=n(46721),g=n(22686),p=n(57343),v=n(38600),b=n(34421);let E="Dialog",[y,w]=(0,l.b)(E),[$,k]=y(E),x=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:c,modal:l=!0}=e,s=(0,o.useRef)(null),m=(0,o.useRef)(null),[f=!1,h]=(0,d.T)({prop:r,defaultProp:i,onChange:c});return(0,o.createElement)($,{scope:t,triggerRef:s,contentRef:m,contentId:(0,u.M)(),titleId:(0,u.M)(),descriptionId:(0,u.M)(),open:f,onOpenChange:h,onOpenToggle:(0,o.useCallback)(()=>h(e=>!e),[h]),modal:l},n)},C=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,u=k("DialogTrigger",n),d=(0,c.e)(t,u.triggerRef);return(0,o.createElement)(h.W.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":u.open,"aria-controls":u.contentId,"data-state":W(u.open)},l,{ref:d,onClick:(0,i.M)(e.onClick,u.onOpenToggle)}))}),[R,P]=y("DialogPortal",{forceMount:void 0}),D="DialogOverlay",M=(0,o.forwardRef)((e,t)=>{let n=P(D,e.__scopeDialog),{forceMount:i=n.forceMount,...c}=e,l=k(D,e.__scopeDialog);return l.modal?(0,o.createElement)(f.z,{present:i||l.open},(0,o.createElement)(T,(0,r.Z)({},c,{ref:t}))):null}),T=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...i}=e,c=k(D,n);return(0,o.createElement)(p.Z,{as:b.g,allowPinchZoom:!0,shards:[c.contentRef]},(0,o.createElement)(h.W.div,(0,r.Z)({"data-state":W(c.open)},i,{ref:t,style:{pointerEvents:"auto",...i.style}})))}),S="DialogContent",A=(0,o.forwardRef)((e,t)=>{let n=P(S,e.__scopeDialog),{forceMount:i=n.forceMount,...c}=e,l=k(S,e.__scopeDialog);return(0,o.createElement)(f.z,{present:i||l.open},l.modal?(0,o.createElement)(I,(0,r.Z)({},c,{ref:t})):(0,o.createElement)(O,(0,r.Z)({},c,{ref:t})))}),I=(0,o.forwardRef)((e,t)=>{let n=k(S,e.__scopeDialog),l=(0,o.useRef)(null),u=(0,c.e)(t,n.contentRef,l);return(0,o.useEffect)(()=>{let e=l.current;if(e)return(0,v.R)(e)},[]),(0,o.createElement)(_,(0,r.Z)({},e,{ref:u,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,i.M)(e.onFocusOutside,e=>e.preventDefault())}))}),O=(0,o.forwardRef)((e,t)=>{let n=k(S,e.__scopeDialog),i=(0,o.useRef)(!1);return(0,o.createElement)(_,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(i.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),i.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(i.current=!0);let c=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(c))&&t.preventDefault()}}))}),_=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:u,...d}=e,f=k(S,n),h=(0,o.useRef)(null),p=(0,c.e)(t,h);return(0,g.E)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(m.M,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:l,onUnmountAutoFocus:u},(0,o.createElement)(s.XB,(0,r.Z)({role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":W(f.open)},d,{ref:p,onDismiss:()=>f.onOpenChange(!1)}))),!1)}),N="DialogTitle",Z=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...i}=e,c=k(N,n);return(0,o.createElement)(h.W.h2,(0,r.Z)({id:c.titleId},i,{ref:t}))}),F=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...i}=e,c=k("DialogDescription",n);return(0,o.createElement)(h.W.p,(0,r.Z)({id:c.descriptionId},i,{ref:t}))}),L=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...c}=e,l=k("DialogClose",n);return(0,o.createElement)(h.W.button,(0,r.Z)({type:"button"},c,{ref:t,onClick:(0,i.M)(e.onClick,()=>l.onOpenChange(!1))}))});function W(e){return e?"open":"closed"}let[H,z]=(0,l.k)("DialogTitleWarning",{contentName:S,titleName:N,docsSlug:"dialog"}),B=x,j=C,K=M,Y=A,X=Z,U=F,V=L},22686:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(67294);let o=0;function i(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:c()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:c()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function c(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},48914:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(46861),i=n(67294),c=n(77514),l=n(46721),u=n(71128);let d="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",m={bubbles:!1,cancelable:!0},f=(0,i.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:b,...E}=e,[y,w]=(0,i.useState)(null),$=(0,u.W)(f),k=(0,u.W)(b),x=(0,i.useRef)(null),C=(0,c.e)(t,e=>w(e)),R=(0,i.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,i.useEffect)(()=>{if(r){function e(e){if(R.paused||!y)return;let t=e.target;y.contains(t)?x.current=t:p(x.current,{select:!0})}function t(e){!R.paused&&y&&(y.contains(e.relatedTarget)||p(x.current,{select:!0}))}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}},[r,y,R.paused]),(0,i.useEffect)(()=>{if(y){v.add(R);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(d,m);y.addEventListener(d,$),y.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(h(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(y))}return()=>{y.removeEventListener(d,$),setTimeout(()=>{let t=new CustomEvent(s,m);y.addEventListener(s,k),y.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),y.removeEventListener(s,k),v.remove(R)},0)}}},[y,$,k,R]);let P=(0,i.useCallback)(e=>{if(!n&&!r||R.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let i=e.currentTarget,[c,l]=function(e){let t=h(e),n=g(t,e),r=g(t.reverse(),e);return[n,r]}(i);c&&l?e.shiftKey||o!==l?e.shiftKey&&o===c&&(e.preventDefault(),n&&p(l,{select:!0})):(e.preventDefault(),n&&p(c,{select:!0})):o===i&&e.preventDefault()}},[n,r,R.paused]);return(0,i.createElement)(l.W.div,(0,o.Z)({tabIndex:-1},E,{ref:C,onKeyDown:P}))});function h(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function g(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let v=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=b(r,e)).unshift(e)},remove(e){var t;null===(t=(r=b(r,e))[0])||void 0===t||t.resume()}});function b(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},38600:function(e,t,n){n.d(t,{R:function(){return d}});var r=new WeakMap,o=new WeakMap,i={},c=0,l=function(e){return e&&(e.host||l(e.parentNode))},u=function(e,t,n,u){var d=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=l(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return Boolean(e)});i[n]||(i[n]=new WeakMap);var s=i[n],m=[],f=new Set,h=new Set(d),g=function(e){e&&!f.has(e)&&(f.add(e),g(e.parentNode))};d.forEach(g);var p=function(e){e&&!h.has(e)&&Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else{var t=e.getAttribute(u),i=null!==t&&"false"!==t,c=(r.get(e)||0)+1,l=(s.get(e)||0)+1;r.set(e,c),s.set(e,l),m.push(e),1===c&&i&&o.set(e,!0),1===l&&e.setAttribute(n,"true"),i||e.setAttribute(u,"true")}})};return p(t),f.clear(),c++,function(){m.forEach(function(e){var t=r.get(e)-1,i=s.get(e)-1;r.set(e,t),s.set(e,i),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),i||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,i={})}},d=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),u(r,o,n,"aria-hidden")):function(){return null}}},57343:function(e,t,n){n.d(t,{Z:function(){return B}});var r,o,i,c,l,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var s=n(67294),m="right-scroll-bar-position",f="width-before-scroll-bar",h=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),i=[],c=!1,l={read:function(){if(c)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=o(e,c);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(c=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){c=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=u({async:!0,ssr:!1},r),l),g=function(){},p=s.forwardRef(function(e,t){var n,r,o,i=s.useRef(null),c=s.useState({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:g}),l=c[0],m=c[1],f=e.forwardProps,p=e.children,v=e.className,b=e.removeScrollBar,E=e.enabled,y=e.shards,w=e.sideCar,$=e.noIsolation,k=e.inert,x=e.allowPinchZoom,C=e.as,R=d(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),P=(n=[i,t],r=function(e){return n.forEach(function(t){var n;return"function"==typeof(n=t)?n(e):n&&(n.current=e),n})},(o=(0,s.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(a){var e=o.value;e!==a&&(o.value=a,o.callback(a,e))}}}})[0]).callback=r,o.facade),D=u(u({},R),l);return s.createElement(s.Fragment,null,E&&s.createElement(w,{sideCar:h,removeScrollBar:b,shards:y,noIsolation:$,inert:k,setCallbacks:m,allowPinchZoom:!!x,lockRef:i}),f?s.cloneElement(s.Children.only(p),u(u({},D),{ref:P})):s.createElement(void 0===C?"div":C,u({},D,{className:v,ref:P}),p))});p.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},p.classNames={fullWidth:f,zeroRight:m};var v=function(){var e=0,t=null;return{add:function(r){var o,i;0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=n.nc;return t&&e.setAttribute("nonce",t),e}())&&((o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)),e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},b=function(){var e=v();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},E=function(){var e=b();return function(t){return e(t.styles,t.dynamic),null}},y={left:0,top:0,right:0,gap:0},w=function(e){return parseInt(e||"",10)||0},$=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return y;var t,n,r,o,i,c=(t=e,r=(n=window.getComputedStyle(document.body))["padding"===t?"paddingLeft":"marginLeft"],o=n["padding"===t?"paddingTop":"marginTop"],i=n["padding"===t?"paddingRight":"marginRight"],[w(r),w(o),w(i)]),l=document.documentElement.clientWidth,u=window.innerWidth;return{left:c[0],top:c[1],right:c[2],gap:Math.max(0,u-l+c[2]-c[0])}},k=E(),x=function(e,t,n,r){var o=e.left,i=e.top,c=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(m," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(f," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(m," .").concat(m," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},C=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,i=s.useMemo(function(){return $(o)},[o]);return s.createElement(k,{styles:x(i,!t,o,n?"":"!important")})},R=!1;if("undefined"!=typeof window)try{var P=Object.defineProperty({},"passive",{get:function(){return R=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch(D){R=!1}var M=!!R&&{passive:!1},T=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},S=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),A(e,n)){var r=I(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},A=function(e,t){return"v"===e?T(t,"overflowY"):T(t,"overflowX")},I=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},O=function(e,t,n,r,o){var i,c=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),l=c*r,u=n.target,d=t.contains(u),s=!1,m=l>0,f=0,h=0;do{var g=I(e,u),p=g[0],v=g[1]-g[2]-c*p;(p||v)&&A(e,u)&&(f+=v,h+=p),u=u.parentNode}while(!d&&u!==document.body||d&&(t.contains(u)||t===u));return(m&&(o&&0===f||!o&&l>f)||!m&&(o&&0===h||!o&&-l>h))&&(s=!0),s},_=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},N=function(e){return[e.deltaX,e.deltaY]},Z=function(e){return e&&"current"in e?e.current:e},F=0,L=[],W=function(e){var t=e.sideCar,n=d(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return s.createElement(r,u({},n))};W.isSideCarExport=!0;var H=(h.useMedium(function(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(F++)[0],i=s.useState(function(){return E()})[0],c=s.useRef(e);s.useEffect(function(){c.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(Z),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=s.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,i=_(e),l=n.current,u="deltaX"in e?e.deltaX:l[0]-i[0],d="deltaY"in e?e.deltaY:l[1]-i[1],s=e.target,m=Math.abs(u)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===m&&"range"===s.type)return!1;var f=S(m,s);if(!f)return!0;if(f?o=m:(o="v"===m?"h":"v",f=S(m,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||d)&&(r.current=o),!o)return!0;var h=r.current||o;return O(h,t,e,"h"===h?u:d,!0)},[]),u=s.useCallback(function(e){if(L.length&&L[L.length-1]===i){var n="deltaY"in e?N(e):_(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should)e.cancelable&&e.preventDefault();else if(!r){var o=(c.current.shards||[]).map(Z).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=s.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),m=s.useCallback(function(e){n.current=_(e),r.current=void 0},[]),f=s.useCallback(function(t){d(t.type,N(t),t.target,l(t,e.lockRef.current))},[]),h=s.useCallback(function(t){d(t.type,_(t),t.target,l(t,e.lockRef.current))},[]);s.useEffect(function(){return L.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",u,M),document.addEventListener("touchmove",u,M),document.addEventListener("touchstart",m,M),function(){L=L.filter(function(e){return e!==i}),document.removeEventListener("wheel",u,M),document.removeEventListener("touchmove",u,M),document.removeEventListener("touchstart",m,M)}},[]);var g=e.removeScrollBar,p=e.inert;return s.createElement(s.Fragment,null,p?s.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,g?s.createElement(C,{gapMode:"margin"}):null)}),W),z=s.forwardRef(function(e,t){return s.createElement(p,u({},e,{ref:t,sideCar:H}))});z.classNames=p.classNames;var B=z},87395:function(e,t,n){n.d(t,{Z:function(){return $}});var r=n(67294),o=n(4204),i=n(70034),c=n(27603);let l={customPadding:{sm:"1rem",md:"1rem",lg:"2rem",xl:"2rem"},customMaxHeight:{sm:"80vh",md:"80vh",lg:"90vh",xl:"90vh"},customHeight:{sm:"max-content",md:"max-content",lg:"max-content",xl:"max-content"}},u=c.F4`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;function d(e,t,n){return"object"==typeof e[n]&&t in e[n]?e[n][t]:t in e&&e[t]?e[t]:l[t][n]}let s=(0,c.ZP)(i.aV)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 9999;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${u} 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`,m=c.ZP.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: ${({theme:e,customBackgroundColor:t})=>t||e.colors.white()};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  border-radius: ${({theme:e})=>e.borderRadius.md}
    ${({theme:e})=>e.borderRadius.md} 0 0;
  overflow: auto;
  z-index: 9999;

  padding: ${e=>d(e,"customPadding","sm")};
  height: ${e=>d(e,"customHeight","sm")};
  max-height: ${e=>d(e,"customMaxHeight","sm")};

  ${({theme:e})=>e.scrollbar()};

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    padding: ${e=>d(e,"customPadding","md")};
    height: ${e=>d(e,"customHeight","md")};
    max-height: ${e=>d(e,"customMaxHeight","md")};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${({theme:e})=>e.borderRadius.md};
    width: ${({customWidth:e})=>e||"max-content"};
    max-width: 60vw;
    padding: ${e=>d(e,"customPadding","lg")};
    height: ${e=>d(e,"customHeight","lg")};
    max-height: ${e=>d(e,"customMaxHeight","lg")};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktopLarge}) {
    padding: ${e=>d(e,"customPadding","xl")};
    height: ${e=>d(e,"customHeight","xl")};
    max-height: ${e=>d(e,"customMaxHeight","xl")};
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${u} 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`,f=(0,c.ZP)(i.x8)`
  background: transparent;
  line-height: 0;
  position: absolute;
  top: ${({theme:e})=>e.spacing.sm};
  right: ${({theme:e})=>e.spacing.sm};
  translate: filter 250ms;

  &:hover {
    filter: brightness(0.7);
  }
`,h=c.ZP.div`
  ${({theme:e})=>e.font(14,24,400)};
  display: flex;
  align-self: baseline;
  flex-direction: column;
  padding: ${({headerPadding:e})=>e||"0"};
`,g=c.ZP.span`
  line-height: 0;

  & > svg {
    margin-right: ${({theme:e})=>e.spacing.xs};
    width: ${({theme:e})=>e.rem(13)};
    height: ${({theme:e})=>e.rem(13)};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    & > svg {
      width: ${({theme:e})=>e.rem(16)};
      height: ${({theme:e})=>e.rem(16)};
    }
  }
`,p=c.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${({titlePadding:e})=>e||0};
`,v=(0,c.ZP)(i.Dx)`
  ${({theme:e})=>e.font(16,28,700)};
  color: ${({theme:e})=>e.colors.black(800)};
  text-transform: uppercase;
  margin: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${({theme:e})=>e.font(20,14,700)};
  }
`,b=c.ZP.span`
  color: ${({theme:e})=>e.colors.secondary(500)};
  ${({theme:e})=>e.font(20)}
  margin-left: ${({theme:e})=>e.spacing.xxs};
`,E=(0,c.ZP)(i.dk)`
  ${({theme:e})=>e.font(14,21)};
  color: ${({theme:e})=>e.colors.black(700)};

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${({theme:e})=>e.font(16,24)};
  }
`,y=c.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background: ${({theme:e,backgroundColor:t})=>t||e.colors.white()};
  background-image: url(${({backgroundImage:e})=>e});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: ${({theme:e})=>e.rem(150)};

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    background-size: ${({theme:e})=>e.rem(250)};
  }
  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    background-size: ${({theme:e})=>e.rem(212)};
  }
`,w=(0,c.ZP)(i.Dx)`
  ${({theme:e})=>e.font(12,18,700)};
  color: ${({theme:e})=>e.colors.white()};

  ${({backgroundImage:e})=>e?c.iv`
        margin: ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.rem(158)};
      `:c.iv`
        margin: ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.rem(64)};
      `}

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${({theme:e})=>e.font(14,24,700)};

    ${({backgroundImage:e})=>e?c.iv`
          margin: ${({theme:e})=>e.rem(48)}
            ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.rem(280)};
        `:c.iv`
          margin: ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)};
        `}
  }
  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    ${({theme:e})=>e.font(20,30,700)};

    ${({backgroundImage:e})=>e?c.iv`
          margin: ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(244)};
        `:c.iv`
          margin: ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)};
        `}
  }
`,$={Dialog:function({modal:e=!0,open:t,onOpenChange:n,buttonTrigger:c,customPadding:l,customWidth:u,customHeight:d,customBackgroundColor:h,closeColor:g,closeSize:p=24,sm:v,md:b,lg:E,xl:y,children:w}){return r.createElement(i.fC,{modal:e,open:t,onOpenChange:n},!!c&&r.createElement(i.xz,{asChild:!0},c),r.createElement(s,null),r.createElement(i.VY,{asChild:!0},r.createElement(m,{customPadding:l,customWidth:u,customHeight:d,customBackgroundColor:h,sm:v,md:b,lg:E,xl:y},r.createElement(f,{"aria-label":"Fechar"},r.createElement(o.bMz,{color:g,width:p,height:p,"aria-hidden":"true"})),w)))},DialogHeaderWithText:function({title:e,icon:t,alternativeText:n,headerPadding:o,description:i,titlePadding:c}){return r.createElement(h,{headerPadding:o},r.createElement(p,{titlePadding:c},e&&r.createElement(r.Fragment,null,!!t&&r.createElement(g,{"aria-hidden":"true"},t),r.createElement(v,null,e),n&&r.createElement(b,null,n))),i&&r.createElement(E,null,i))},DialogHeaderWithCustomSettings:function({image:e,title:t,background:n}){return r.createElement(y,{backgroundColor:n,backgroundImage:e,className:"DialogWithImage"},r.createElement(w,{backgroundImage:e,dangerouslySetInnerHTML:{__html:t}}))}}}}]);