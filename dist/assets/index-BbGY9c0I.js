function Zc(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in e)){const a=Object.getOwnPropertyDescriptor(s,l);a&&Object.defineProperty(e,l,a.get?a:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sd={exports:{}},Ws={},ld={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var An=Symbol.for("react.element"),e0=Symbol.for("react.portal"),t0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),i0=Symbol.for("react.suspense"),o0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),Vi=Symbol.iterator;function u0(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,od={};function Or(e,t,n){this.props=e,this.context=t,this.refs=od,this.updater=n||ad}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dd(){}dd.prototype=Or.prototype;function Aa(e,t,n){this.props=e,this.context=t,this.refs=od,this.updater=n||ad}var Da=Aa.prototype=new dd;Da.constructor=Aa;id(Da,Or.prototype);Da.isPureReactComponent=!0;var Ii=Array.isArray,ud=Object.prototype.hasOwnProperty,Va={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function xd(e,t,n){var s,l={},a=null,i=null;if(t!=null)for(s in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)ud.call(t,s)&&!cd.hasOwnProperty(s)&&(l[s]=t[s]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var d=Array(o),u=0;u<o;u++)d[u]=arguments[u+2];l.children=d}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)l[s]===void 0&&(l[s]=o[s]);return{$$typeof:An,type:e,key:a,ref:i,props:l,_owner:Va.current}}function c0(e,t){return{$$typeof:An,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===An}function x0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oi=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x0(""+e.key):t.toString(36)}function os(e,t,n,s,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case An:case e0:i=!0}}if(i)return i=e,l=l(i),e=s===""?"."+xl(i,0):s,Ii(l)?(n="",e!=null&&(n=e.replace(Oi,"$&/")+"/"),os(l,t,n,"",function(u){return u})):l!=null&&(Ia(l)&&(l=c0(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Oi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,s=s===""?".":s+":",Ii(e))for(var o=0;o<e.length;o++){a=e[o];var d=s+xl(a,o);i+=os(a,t,n,d,l)}else if(d=u0(e),typeof d=="function")for(e=d.call(e),o=0;!(a=e.next()).done;)a=a.value,d=s+xl(a,o++),i+=os(a,t,n,d,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $n(e,t,n){if(e==null)return e;var s=[],l=0;return os(e,s,"","",function(a){return t.call(n,a,l++)}),s}function m0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ds={transition:null},h0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ds,ReactCurrentOwner:Va};function md(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:$n,forEach:function(e,t,n){$n(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $n(e,function(){t++}),t},toArray:function(e){return $n(e,function(t){return t})||[]},only:function(e){if(!Ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Or;H.Fragment=t0;H.Profiler=n0;H.PureComponent=Aa;H.StrictMode=r0;H.Suspense=i0;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;H.act=md;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=id({},e.props),l=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Va.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(d in t)ud.call(t,d)&&!cd.hasOwnProperty(d)&&(s[d]=t[d]===void 0&&o!==void 0?o[d]:t[d])}var d=arguments.length-2;if(d===1)s.children=n;else if(1<d){o=Array(d);for(var u=0;u<d;u++)o[u]=arguments[u+2];s.children=o}return{$$typeof:An,type:e.type,key:l,ref:a,props:s,_owner:i}};H.createContext=function(e){return e={$$typeof:l0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s0,_context:e},e.Consumer=e};H.createElement=xd;H.createFactory=function(e){var t=xd.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:a0,render:e}};H.isValidElement=Ia;H.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:m0}};H.memo=function(e,t){return{$$typeof:o0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=ds.transition;ds.transition={};try{e()}finally{ds.transition=t}};H.unstable_act=md;H.useCallback=function(e,t){return ke.current.useCallback(e,t)};H.useContext=function(e){return ke.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};H.useEffect=function(e,t){return ke.current.useEffect(e,t)};H.useId=function(){return ke.current.useId()};H.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return ke.current.useMemo(e,t)};H.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};H.useRef=function(e){return ke.current.useRef(e)};H.useState=function(e){return ke.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return ke.current.useTransition()};H.version="18.3.1";ld.exports=H;var g=ld.exports;const Oa=qc(g),f0=Zc({__proto__:null,default:Oa},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=g,v0=Symbol.for("react.element"),g0=Symbol.for("react.fragment"),b0=Object.prototype.hasOwnProperty,w0=p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y0={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,n){var s,l={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)b0.call(t,s)&&!y0.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)l[s]===void 0&&(l[s]=t[s]);return{$$typeof:v0,type:e,key:a,ref:i,props:l,_owner:w0.current}}Ws.Fragment=g0;Ws.jsx=hd;Ws.jsxs=hd;sd.exports=Ws;var r=sd.exports,Il={},fd={exports:{}},Ve={},pd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,A){var I=E.length;E.push(A);e:for(;0<I;){var K=I-1>>>1,ee=E[K];if(0<l(ee,A))E[K]=A,E[I]=ee,I=K;else break e}}function n(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var A=E[0],I=E.pop();if(I!==A){E[0]=I;e:for(var K=0,ee=E.length,nt=ee>>>1;K<nt;){var Be=2*(K+1)-1,Oe=E[Be],Se=Be+1,wt=E[Se];if(0>l(Oe,I))Se<ee&&0>l(wt,Oe)?(E[K]=wt,E[Se]=I,K=Se):(E[K]=Oe,E[Be]=I,K=Be);else if(Se<ee&&0>l(wt,I))E[K]=wt,E[Se]=I,K=Se;else break e}}return A}function l(E,A){var I=E.sortIndex-A.sortIndex;return I!==0?I:E.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var d=[],u=[],p=1,m=null,v=3,b=!1,N=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var A=n(u);A!==null;){if(A.callback===null)s(u);else if(A.startTime<=E)s(u),A.sortIndex=A.expirationTime,t(d,A);else break;A=n(u)}}function y(E){if(k=!1,f(E),!N)if(n(d)!==null)N=!0,ue(M);else{var A=n(u);A!==null&&Ye(y,A.startTime-E)}}function M(E,A){N=!1,k&&(k=!1,h(R),R=-1),b=!0;var I=v;try{for(f(A),m=n(d);m!==null&&(!(m.expirationTime>A)||E&&!j());){var K=m.callback;if(typeof K=="function"){m.callback=null,v=m.priorityLevel;var ee=K(m.expirationTime<=A);A=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(d)&&s(d),f(A)}else s(d);m=n(d)}if(m!==null)var nt=!0;else{var Be=n(u);Be!==null&&Ye(y,Be.startTime-A),nt=!1}return nt}finally{m=null,v=I,b=!1}}var P=!1,L=null,R=-1,Q=5,V=-1;function j(){return!(e.unstable_now()-V<Q)}function T(){if(L!==null){var E=e.unstable_now();V=E;var A=!0;try{A=L(!0,E)}finally{A?D():(P=!1,L=null)}}else P=!1}var D;if(typeof c=="function")D=function(){c(T)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,F=U.port2;U.port1.onmessage=T,D=function(){F.postMessage(null)}}else D=function(){S(T,0)};function ue(E){L=E,P||(P=!0,D())}function Ye(E,A){R=S(function(){E(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){N||b||(N=!0,ue(M))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(E){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var I=v;v=A;try{return E()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,A){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=v;v=E;try{return A()}finally{v=I}},e.unstable_scheduleCallback=function(E,A,I){var K=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?K+I:K):I=K,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=I+ee,E={id:p++,callback:A,priorityLevel:E,startTime:I,expirationTime:ee,sortIndex:-1},I>K?(E.sortIndex=I,t(u,E),n(d)===null&&E===n(u)&&(k?(h(R),R=-1):k=!0,Ye(y,I-K))):(E.sortIndex=ee,t(d,E),N||b||(N=!0,ue(M))),E},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(E){var A=v;return function(){var I=v;v=A;try{return E.apply(this,arguments)}finally{v=I}}}})(vd);pd.exports=vd;var j0=pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=g,De=j0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,vn={};function sr(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(vn[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,k0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hi={},Ui={};function C0(e){return Ol.call(Ui,e)?!0:Ol.call(Hi,e)?!1:k0.test(e)?Ui[e]=!0:(Hi[e]=!0,!1)}function S0(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M0(e,t,n,s){if(t===null||typeof t>"u"||S0(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,s,l,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ha=/[\-:]([a-z])/g;function Ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ha,Ua);pe[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ha,Ua);pe[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ha,Ua);pe[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fa(e,t,n,s){var l=pe.hasOwnProperty(t)?pe[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M0(t,n,l,s)&&(n=null),s||l===null?C0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,s=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var bt=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qn=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),Wa=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),bd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),yd=Symbol.for("react.offscreen"),Fi=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Fi&&e[Fi]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ml;function tn(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var hl=!1;function fl(e,t){if(!e||hl)return"";hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),a=s.stack.split(`
`),i=l.length-1,o=a.length-1;1<=i&&0<=o&&l[i]!==a[o];)o--;for(;1<=i&&0<=o;i--,o--)if(l[i]!==a[o]){if(i!==1||o!==1)do if(i--,o--,0>o||l[i]!==a[o]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=o);break}}}finally{hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tn(e):""}function E0(e){switch(e.tag){case 5:return tn(e.type);case 16:return tn("Lazy");case 13:return tn("Suspense");case 19:return tn("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case fr:return"Portal";case Hl:return"Profiler";case Wa:return"StrictMode";case Ul:return"Suspense";case Fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wd:return(e.displayName||"Context")+".Consumer";case bd:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function z0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===Wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L0(e){var t=jd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){s=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gn(e){e._valueTracker||(e._valueTracker=L0(e))}function Nd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=jd(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $l(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kd(e,t){t=t.checked,t!=null&&Fa(e,"checked",t,!1)}function Ql(e,t){kd(e,t);var n=Dt(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $i(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||ws(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rn=Array.isArray;function Mr(e,t,n,s){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(rn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function Cd(e,t){var n=Dt(t.value),s=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Gi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kn,Md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kn=Kn||document.createElement("div"),Kn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var an={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(an).forEach(function(e){P0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),an[t]=an[e]})});function Ed(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||an.hasOwnProperty(e)&&an[e]?(""+t).trim():t+"px"}function zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,l=Ed(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,l):e[n]=l}}var T0=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(T0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,Er=null,zr=null;function Ki(e){if(e=In(e)){if(typeof ql!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ys(t),ql(e.stateNode,e.type,t))}}function Ld(e){Er?zr?zr.push(e):zr=[e]:Er=e}function Pd(){if(Er){var e=Er,t=zr;if(zr=Er=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function Td(e,t){return e(t)}function Bd(){}var pl=!1;function Rd(e,t,n){if(pl)return e(t,n);pl=!0;try{return Td(e,t,n)}finally{pl=!1,(Er!==null||zr!==null)&&(Bd(),Pd())}}function bn(e,t){var n=e.stateNode;if(n===null)return null;var s=Ys(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var ea=!1;if(ft)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{ea=!1}function B0(e,t,n,s,l,a,i,o,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var on=!1,ys=null,js=!1,ta=null,R0={onError:function(e){on=!0,ys=e}};function _0(e,t,n,s,l,a,i,o,d){on=!1,ys=null,B0.apply(R0,arguments)}function A0(e,t,n,s,l,a,i,o,d){if(_0.apply(this,arguments),on){if(on){var u=ys;on=!1,ys=null}else throw Error(C(198));js||(js=!0,ta=u)}}function lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yi(e){if(lr(e)!==e)throw Error(C(188))}function D0(e){var t=e.alternate;if(!t){if(t=lr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,s=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(s=l.return,s!==null){n=s;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Yi(l),e;if(a===s)return Yi(l),t;a=a.sibling}throw Error(C(188))}if(n.return!==s.return)n=l,s=a;else{for(var i=!1,o=l.child;o;){if(o===n){i=!0,n=l,s=a;break}if(o===s){i=!0,s=l,n=a;break}o=o.sibling}if(!i){for(o=a.child;o;){if(o===n){i=!0,n=a,s=l;break}if(o===s){i=!0,s=a,n=l;break}o=o.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==s)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Ad(e){return e=D0(e),e!==null?Dd(e):null}function Dd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dd(e);if(t!==null)return t;e=e.sibling}return null}var Vd=De.unstable_scheduleCallback,Ji=De.unstable_cancelCallback,V0=De.unstable_shouldYield,I0=De.unstable_requestPaint,le=De.unstable_now,O0=De.unstable_getCurrentPriorityLevel,Ka=De.unstable_ImmediatePriority,Id=De.unstable_UserBlockingPriority,Ns=De.unstable_NormalPriority,H0=De.unstable_LowPriority,Od=De.unstable_IdlePriority,$s=null,it=null;function U0(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot($s,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:$0,F0=Math.log,W0=Math.LN2;function $0(e){return e>>>=0,e===0?32:31-(F0(e)/W0|0)|0}var Yn=64,Jn=4194304;function nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,l=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var o=i&~l;o!==0?s=nn(o):(a&=i,a!==0&&(s=nn(a)))}else i=n&~l,i!==0?s=nn(i):a!==0&&(s=nn(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&l)&&(l=s&-s,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-et(t),l=1<<n,s|=e[n],t&=~l;return s}function Q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-et(a),o=1<<i,d=l[i];d===-1?(!(o&n)||o&s)&&(l[i]=Q0(o,t)):d<=t&&(e.expiredLanes|=o),a&=~o}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=Yn;return Yn<<=1,!(Yn&4194240)&&(Yn=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function K0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-et(n),a=1<<l;t[l]=0,s[l]=-1,e[l]=-1,n&=~a}}function Ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-et(n),l=1<<s;l&t|e[s]&t&&(e[s]|=t),n&=~l}}var G=0;function Ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fd,Ja,Wd,$d,Qd,na=!1,Xn=[],zt=null,Lt=null,Pt=null,wn=new Map,yn=new Map,kt=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function Yr(e,t,n,s,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:a,targetContainers:[l]},t!==null&&(t=In(t),t!==null&&Ja(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function J0(e,t,n,s,l){switch(t){case"focusin":return zt=Yr(zt,e,t,n,s,l),!0;case"dragenter":return Lt=Yr(Lt,e,t,n,s,l),!0;case"mouseover":return Pt=Yr(Pt,e,t,n,s,l),!0;case"pointerover":var a=l.pointerId;return wn.set(a,Yr(wn.get(a)||null,e,t,n,s,l)),!0;case"gotpointercapture":return a=l.pointerId,yn.set(a,Yr(yn.get(a)||null,e,t,n,s,l)),!0}return!1}function Gd(e){var t=Gt(e.target);if(t!==null){var n=lr(t);if(n!==null){if(t=n.tag,t===13){if(t=_d(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Wd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Zl=s,n.target.dispatchEvent(s),Zl=null}else return t=In(n),t!==null&&Ja(t),e.blockedOn=n,!1;t.shift()}return!0}function Zi(e,t,n){us(e)&&n.delete(t)}function X0(){na=!1,zt!==null&&us(zt)&&(zt=null),Lt!==null&&us(Lt)&&(Lt=null),Pt!==null&&us(Pt)&&(Pt=null),wn.forEach(Zi),yn.forEach(Zi)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,X0)))}function jn(e){function t(l){return Jr(l,e)}if(0<Xn.length){Jr(Xn[0],e);for(var n=1;n<Xn.length;n++){var s=Xn[n];s.blockedOn===e&&(s.blockedOn=null)}}for(zt!==null&&Jr(zt,e),Lt!==null&&Jr(Lt,e),Pt!==null&&Jr(Pt,e),wn.forEach(t),yn.forEach(t),n=0;n<kt.length;n++)s=kt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Gd(n),n.blockedOn===null&&kt.shift()}var Lr=bt.ReactCurrentBatchConfig,Cs=!0;function Z0(e,t,n,s){var l=G,a=Lr.transition;Lr.transition=null;try{G=1,Xa(e,t,n,s)}finally{G=l,Lr.transition=a}}function q0(e,t,n,s){var l=G,a=Lr.transition;Lr.transition=null;try{G=4,Xa(e,t,n,s)}finally{G=l,Lr.transition=a}}function Xa(e,t,n,s){if(Cs){var l=sa(e,t,n,s);if(l===null)Ml(e,t,s,Ss,n),Xi(e,s);else if(J0(l,e,t,n,s))s.stopPropagation();else if(Xi(e,s),t&4&&-1<Y0.indexOf(e)){for(;l!==null;){var a=In(l);if(a!==null&&Fd(a),a=sa(e,t,n,s),a===null&&Ml(e,t,s,Ss,n),a===l)break;l=a}l!==null&&s.stopPropagation()}else Ml(e,t,s,null,n)}}var Ss=null;function sa(e,t,n,s){if(Ss=null,e=Ga(s),e=Gt(e),e!==null)if(t=lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function Kd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O0()){case Ka:return 1;case Id:return 4;case Ns:case H0:return 16;case Od:return 536870912;default:return 16}default:return 16}}var St=null,Za=null,cs=null;function Yd(){if(cs)return cs;var e,t=Za,n=t.length,s,l="value"in St?St.value:St.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(s=1;s<=i&&t[n-s]===l[a-s];s++);return cs=l.slice(e,1<s?1-s:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function qi(){return!1}function Ie(e){function t(n,s,l,a,i){this._reactName=n,this._targetInst=l,this.type=s,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zn:qi,this.isPropagationStopped=qi,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=Ie(Hr),Vn=ne({},Hr,{view:0,detail:0}),ex=Ie(Vn),gl,bl,Xr,Qs=ne({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(gl=e.screenX-Xr.screenX,bl=e.screenY-Xr.screenY):bl=gl=0,Xr=e),gl)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),eo=Ie(Qs),tx=ne({},Qs,{dataTransfer:0}),rx=Ie(tx),nx=ne({},Vn,{relatedTarget:0}),wl=Ie(nx),sx=ne({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=Ie(sx),ax=ne({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ix=Ie(ax),ox=ne({},Hr,{data:0}),to=Ie(ox),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cx[e])?!!t[e]:!1}function ei(){return xx}var mx=ne({},Vn,{key:function(e){if(e.key){var t=dx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hx=Ie(mx),fx=ne({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ro=Ie(fx),px=ne({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),vx=Ie(px),gx=ne({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=Ie(gx),wx=ne({},Qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=Ie(wx),jx=[9,13,27,32],ti=ft&&"CompositionEvent"in window,dn=null;ft&&"documentMode"in document&&(dn=document.documentMode);var Nx=ft&&"TextEvent"in window&&!dn,Jd=ft&&(!ti||dn&&8<dn&&11>=dn),no=" ",so=!1;function Xd(e,t){switch(e){case"keyup":return jx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function kx(e,t){switch(e){case"compositionend":return Zd(t);case"keypress":return t.which!==32?null:(so=!0,no);case"textInput":return e=t.data,e===no&&so?null:e;default:return null}}function Cx(e,t){if(vr)return e==="compositionend"||!ti&&Xd(e,t)?(e=Yd(),cs=Za=St=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jd&&t.locale!=="ko"?null:t.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sx[e.type]:t==="textarea"}function qd(e,t,n,s){Ld(s),t=Ms(t,"onChange"),0<t.length&&(n=new qa("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var un=null,Nn=null;function Mx(e){uu(e,0)}function Gs(e){var t=wr(e);if(Nd(t))return e}function Ex(e,t){if(e==="change")return t}var eu=!1;if(ft){var yl;if(ft){var jl="oninput"in document;if(!jl){var ao=document.createElement("div");ao.setAttribute("oninput","return;"),jl=typeof ao.oninput=="function"}yl=jl}else yl=!1;eu=yl&&(!document.documentMode||9<document.documentMode)}function io(){un&&(un.detachEvent("onpropertychange",tu),Nn=un=null)}function tu(e){if(e.propertyName==="value"&&Gs(Nn)){var t=[];qd(t,Nn,e,Ga(e)),Rd(Mx,t)}}function zx(e,t,n){e==="focusin"?(io(),un=t,Nn=n,un.attachEvent("onpropertychange",tu)):e==="focusout"&&io()}function Lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(Nn)}function Px(e,t){if(e==="click")return Gs(t)}function Tx(e,t){if(e==="input"||e==="change")return Gs(t)}function Bx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Bx;function kn(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var l=n[s];if(!Ol.call(t,l)||!rt(e[l],t[l]))return!1}return!0}function oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uo(e,t){var n=oo(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oo(n)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nu(){for(var e=window,t=ws();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ws(e.document)}return t}function ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rx(e){var t=nu(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ru(n.ownerDocument.documentElement,n)){if(s!==null&&ri(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(s.start,l);s=s.end===void 0?a:Math.min(s.end,l),!e.extend&&a>s&&(l=s,s=a,a=l),l=uo(n,a);var i=uo(n,s);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _x=ft&&"documentMode"in document&&11>=document.documentMode,gr=null,la=null,cn=null,aa=!1;function co(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||gr==null||gr!==ws(s)||(s=gr,"selectionStart"in s&&ri(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),cn&&kn(cn,s)||(cn=s,s=Ms(la,"onSelect"),0<s.length&&(t=new qa("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=gr)))}function qn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionend:qn("Transition","TransitionEnd")},Nl={},su={};ft&&(su=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ks(e){if(Nl[e])return Nl[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in su)return Nl[e]=t[n];return e}var lu=Ks("animationend"),au=Ks("animationiteration"),iu=Ks("animationstart"),ou=Ks("transitionend"),du=new Map,xo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){du.set(e,t),sr(t,[e])}for(var kl=0;kl<xo.length;kl++){var Cl=xo[kl],Ax=Cl.toLowerCase(),Dx=Cl[0].toUpperCase()+Cl.slice(1);It(Ax,"on"+Dx)}It(lu,"onAnimationEnd");It(au,"onAnimationIteration");It(iu,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(ou,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(sn));function mo(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,A0(s,t,void 0,e),e.currentTarget=null}function uu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],l=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var i=s.length-1;0<=i;i--){var o=s[i],d=o.instance,u=o.currentTarget;if(o=o.listener,d!==a&&l.isPropagationStopped())break e;mo(l,o,u),a=d}else for(i=0;i<s.length;i++){if(o=s[i],d=o.instance,u=o.currentTarget,o=o.listener,d!==a&&l.isPropagationStopped())break e;mo(l,o,u),a=d}}}if(js)throw e=ta,js=!1,ta=null,e}function X(e,t){var n=t[ca];n===void 0&&(n=t[ca]=new Set);var s=e+"__bubble";n.has(s)||(cu(t,e,2,!1),n.add(s))}function Sl(e,t,n){var s=0;t&&(s|=4),cu(n,e,s,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function Cn(e){if(!e[es]){e[es]=!0,gd.forEach(function(n){n!=="selectionchange"&&(Vx.has(n)||Sl(n,!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,Sl("selectionchange",!1,t))}}function cu(e,t,n,s){switch(Kd(t)){case 1:var l=Z0;break;case 4:l=q0;break;default:l=Xa}n=l.bind(null,t,n,e),l=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ml(e,t,n,s,l){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var o=s.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(i===4)for(i=s.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;i=i.return}for(;o!==null;){if(i=Gt(o),i===null)return;if(d=i.tag,d===5||d===6){s=a=i;continue e}o=o.parentNode}}s=s.return}Rd(function(){var u=a,p=Ga(n),m=[];e:{var v=du.get(e);if(v!==void 0){var b=qa,N=e;switch(e){case"keypress":if(xs(n)===0)break e;case"keydown":case"keyup":b=hx;break;case"focusin":N="focus",b=wl;break;case"focusout":N="blur",b=wl;break;case"beforeblur":case"afterblur":b=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=vx;break;case lu:case au:case iu:b=lx;break;case ou:b=bx;break;case"scroll":b=ex;break;case"wheel":b=yx;break;case"copy":case"cut":case"paste":b=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ro}var k=(t&4)!==0,S=!k&&e==="scroll",h=k?v!==null?v+"Capture":null:v;k=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,h!==null&&(y=bn(c,h),y!=null&&k.push(Sn(c,y,f)))),S)break;c=c.return}0<k.length&&(v=new b(v,N,null,n,p),m.push({event:v,listeners:k}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&n!==Zl&&(N=n.relatedTarget||n.fromElement)&&(Gt(N)||N[pt]))break e;if((b||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,b?(N=n.relatedTarget||n.toElement,b=u,N=N?Gt(N):null,N!==null&&(S=lr(N),N!==S||N.tag!==5&&N.tag!==6)&&(N=null)):(b=null,N=u),b!==N)){if(k=eo,y="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ro,y="onPointerLeave",h="onPointerEnter",c="pointer"),S=b==null?v:wr(b),f=N==null?v:wr(N),v=new k(y,c+"leave",b,n,p),v.target=S,v.relatedTarget=f,y=null,Gt(p)===u&&(k=new k(h,c+"enter",N,n,p),k.target=f,k.relatedTarget=S,y=k),S=y,b&&N)t:{for(k=b,h=N,c=0,f=k;f;f=hr(f))c++;for(f=0,y=h;y;y=hr(y))f++;for(;0<c-f;)k=hr(k),c--;for(;0<f-c;)h=hr(h),f--;for(;c--;){if(k===h||h!==null&&k===h.alternate)break t;k=hr(k),h=hr(h)}k=null}else k=null;b!==null&&ho(m,v,b,k,!1),N!==null&&S!==null&&ho(m,S,N,k,!0)}}e:{if(v=u?wr(u):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var M=Ex;else if(lo(v))if(eu)M=Tx;else{M=Lx;var P=zx}else(b=v.nodeName)&&b.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(M=Px);if(M&&(M=M(e,u))){qd(m,M,n,p);break e}P&&P(e,v,u),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Gl(v,"number",v.value)}switch(P=u?wr(u):window,e){case"focusin":(lo(P)||P.contentEditable==="true")&&(gr=P,la=u,cn=null);break;case"focusout":cn=la=gr=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,co(m,n,p);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":co(m,n,p)}var L;if(ti)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else vr?Xd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Jd&&n.locale!=="ko"&&(vr||R!=="onCompositionStart"?R==="onCompositionEnd"&&vr&&(L=Yd()):(St=p,Za="value"in St?St.value:St.textContent,vr=!0)),P=Ms(u,R),0<P.length&&(R=new to(R,e,null,n,p),m.push({event:R,listeners:P}),L?R.data=L:(L=Zd(n),L!==null&&(R.data=L)))),(L=Nx?kx(e,n):Cx(e,n))&&(u=Ms(u,"onBeforeInput"),0<u.length&&(p=new to("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=L))}uu(m,t)})}function Sn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ms(e,t){for(var n=t+"Capture",s=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=bn(e,n),a!=null&&s.unshift(Sn(e,a,l)),a=bn(e,t),a!=null&&s.push(Sn(e,a,l))),e=e.return}return s}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ho(e,t,n,s,l){for(var a=t._reactName,i=[];n!==null&&n!==s;){var o=n,d=o.alternate,u=o.stateNode;if(d!==null&&d===s)break;o.tag===5&&u!==null&&(o=u,l?(d=bn(n,a),d!=null&&i.unshift(Sn(n,d,o))):l||(d=bn(n,a),d!=null&&i.push(Sn(n,d,o)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ix=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function fo(e){return(typeof e=="string"?e:""+e).replace(Ix,`
`).replace(Ox,"")}function ts(e,t,n){if(t=fo(t),fo(e)!==t&&n)throw Error(C(425))}function Es(){}var ia=null,oa=null;function da(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,po=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof po<"u"?function(e){return po.resolve(null).then(e).catch(Fx)}:ua;function Fx(e){setTimeout(function(){throw e})}function El(e,t){var n=t,s=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(s===0){e.removeChild(l),jn(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=l}while(n);jn(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),at="__reactFiber$"+Ur,Mn="__reactProps$"+Ur,pt="__reactContainer$"+Ur,ca="__reactEvents$"+Ur,Wx="__reactListeners$"+Ur,$x="__reactHandles$"+Ur;function Gt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vo(e);e!==null;){if(n=e[at])return n;e=vo(e)}return t}e=n,n=e.parentNode}return null}function In(e){return e=e[at]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ys(e){return e[Mn]||null}var xa=[],yr=-1;function Ot(e){return{current:e}}function Z(e){0>yr||(e.current=xa[yr],xa[yr]=null,yr--)}function J(e,t){yr++,xa[yr]=e.current,e.current=t}var Vt={},we=Ot(Vt),Le=Ot(!1),qt=Vt;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Vt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pe(e){return e=e.childContextTypes,e!=null}function zs(){Z(Le),Z(we)}function go(e,t,n){if(we.current!==Vt)throw Error(C(168));J(we,t),J(Le,n)}function xu(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(C(108,z0(e)||"Unknown",l));return ne({},n,s)}function Ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,qt=we.current,J(we,e),J(Le,Le.current),!0}function bo(e,t,n){var s=e.stateNode;if(!s)throw Error(C(169));n?(e=xu(e,t,qt),s.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(we),J(we,e)):Z(Le),J(Le,n)}var ct=null,Js=!1,zl=!1;function mu(e){ct===null?ct=[e]:ct.push(e)}function Qx(e){Js=!0,mu(e)}function Ht(){if(!zl&&ct!==null){zl=!0;var e=0,t=G;try{var n=ct;for(G=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}ct=null,Js=!1}catch(l){throw ct!==null&&(ct=ct.slice(e+1)),Vd(Ka,Ht),l}finally{G=t,zl=!1}}return null}var jr=[],Nr=0,Ps=null,Ts=0,Fe=[],We=0,er=null,xt=1,mt="";function $t(e,t){jr[Nr++]=Ts,jr[Nr++]=Ps,Ps=e,Ts=t}function hu(e,t,n){Fe[We++]=xt,Fe[We++]=mt,Fe[We++]=er,er=e;var s=xt;e=mt;var l=32-et(s)-1;s&=~(1<<l),n+=1;var a=32-et(t)+l;if(30<a){var i=l-l%5;a=(s&(1<<i)-1).toString(32),s>>=i,l-=i,xt=1<<32-et(t)+l|n<<l|s,mt=a+e}else xt=1<<a|n<<l|s,mt=e}function ni(e){e.return!==null&&($t(e,1),hu(e,1,0))}function si(e){for(;e===Ps;)Ps=jr[--Nr],jr[Nr]=null,Ts=jr[--Nr],jr[Nr]=null;for(;e===er;)er=Fe[--We],Fe[We]=null,mt=Fe[--We],Fe[We]=null,xt=Fe[--We],Fe[We]=null}var Ae=null,_e=null,q=!1,qe=null;function fu(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,_e=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:xt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,_e=null,!0):!1;default:return!1}}function ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(q){var t=_e;if(t){var n=t;if(!wo(e,t)){if(ma(e))throw Error(C(418));t=Tt(n.nextSibling);var s=Ae;t&&wo(e,t)?fu(s,n):(e.flags=e.flags&-4097|2,q=!1,Ae=e)}}else{if(ma(e))throw Error(C(418));e.flags=e.flags&-4097|2,q=!1,Ae=e}}}function yo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function rs(e){if(e!==Ae)return!1;if(!q)return yo(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!da(e.type,e.memoizedProps)),t&&(t=_e)){if(ma(e))throw pu(),Error(C(418));for(;t;)fu(e,t),t=Tt(t.nextSibling)}if(yo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ae?Tt(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=_e;e;)e=Tt(e.nextSibling)}function _r(){_e=Ae=null,q=!1}function li(e){qe===null?qe=[e]:qe.push(e)}var Gx=bt.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var s=n.stateNode}if(!s)throw Error(C(147,e));var l=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var o=l.refs;i===null?delete o[a]:o[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jo(e){var t=e._init;return t(e._payload)}function vu(e){function t(h,c){if(e){var f=h.deletions;f===null?(h.deletions=[c],h.flags|=16):f.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function s(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function l(h,c){return h=At(h,c),h.index=0,h.sibling=null,h}function a(h,c,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<c?(h.flags|=2,c):f):(h.flags|=2,c)):(h.flags|=1048576,c)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,c,f,y){return c===null||c.tag!==6?(c=Al(f,h.mode,y),c.return=h,c):(c=l(c,f),c.return=h,c)}function d(h,c,f,y){var M=f.type;return M===pr?p(h,c,f.props.children,y,f.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===jt&&jo(M)===c.type)?(y=l(c,f.props),y.ref=Zr(h,c,f),y.return=h,y):(y=bs(f.type,f.key,f.props,null,h.mode,y),y.ref=Zr(h,c,f),y.return=h,y)}function u(h,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Dl(f,h.mode,y),c.return=h,c):(c=l(c,f.children||[]),c.return=h,c)}function p(h,c,f,y,M){return c===null||c.tag!==7?(c=Xt(f,h.mode,y,M),c.return=h,c):(c=l(c,f),c.return=h,c)}function m(h,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Al(""+c,h.mode,f),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qn:return f=bs(c.type,c.key,c.props,null,h.mode,f),f.ref=Zr(h,null,c),f.return=h,f;case fr:return c=Dl(c,h.mode,f),c.return=h,c;case jt:var y=c._init;return m(h,y(c._payload),f)}if(rn(c)||Gr(c))return c=Xt(c,h.mode,f,null),c.return=h,c;ns(h,c)}return null}function v(h,c,f,y){var M=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return M!==null?null:o(h,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qn:return f.key===M?d(h,c,f,y):null;case fr:return f.key===M?u(h,c,f,y):null;case jt:return M=f._init,v(h,c,M(f._payload),y)}if(rn(f)||Gr(f))return M!==null?null:p(h,c,f,y,null);ns(h,f)}return null}function b(h,c,f,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(f)||null,o(c,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qn:return h=h.get(y.key===null?f:y.key)||null,d(c,h,y,M);case fr:return h=h.get(y.key===null?f:y.key)||null,u(c,h,y,M);case jt:var P=y._init;return b(h,c,f,P(y._payload),M)}if(rn(y)||Gr(y))return h=h.get(f)||null,p(c,h,y,M,null);ns(c,y)}return null}function N(h,c,f,y){for(var M=null,P=null,L=c,R=c=0,Q=null;L!==null&&R<f.length;R++){L.index>R?(Q=L,L=null):Q=L.sibling;var V=v(h,L,f[R],y);if(V===null){L===null&&(L=Q);break}e&&L&&V.alternate===null&&t(h,L),c=a(V,c,R),P===null?M=V:P.sibling=V,P=V,L=Q}if(R===f.length)return n(h,L),q&&$t(h,R),M;if(L===null){for(;R<f.length;R++)L=m(h,f[R],y),L!==null&&(c=a(L,c,R),P===null?M=L:P.sibling=L,P=L);return q&&$t(h,R),M}for(L=s(h,L);R<f.length;R++)Q=b(L,h,R,f[R],y),Q!==null&&(e&&Q.alternate!==null&&L.delete(Q.key===null?R:Q.key),c=a(Q,c,R),P===null?M=Q:P.sibling=Q,P=Q);return e&&L.forEach(function(j){return t(h,j)}),q&&$t(h,R),M}function k(h,c,f,y){var M=Gr(f);if(typeof M!="function")throw Error(C(150));if(f=M.call(f),f==null)throw Error(C(151));for(var P=M=null,L=c,R=c=0,Q=null,V=f.next();L!==null&&!V.done;R++,V=f.next()){L.index>R?(Q=L,L=null):Q=L.sibling;var j=v(h,L,V.value,y);if(j===null){L===null&&(L=Q);break}e&&L&&j.alternate===null&&t(h,L),c=a(j,c,R),P===null?M=j:P.sibling=j,P=j,L=Q}if(V.done)return n(h,L),q&&$t(h,R),M;if(L===null){for(;!V.done;R++,V=f.next())V=m(h,V.value,y),V!==null&&(c=a(V,c,R),P===null?M=V:P.sibling=V,P=V);return q&&$t(h,R),M}for(L=s(h,L);!V.done;R++,V=f.next())V=b(L,h,R,V.value,y),V!==null&&(e&&V.alternate!==null&&L.delete(V.key===null?R:V.key),c=a(V,c,R),P===null?M=V:P.sibling=V,P=V);return e&&L.forEach(function(T){return t(h,T)}),q&&$t(h,R),M}function S(h,c,f,y){if(typeof f=="object"&&f!==null&&f.type===pr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Qn:e:{for(var M=f.key,P=c;P!==null;){if(P.key===M){if(M=f.type,M===pr){if(P.tag===7){n(h,P.sibling),c=l(P,f.props.children),c.return=h,h=c;break e}}else if(P.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===jt&&jo(M)===P.type){n(h,P.sibling),c=l(P,f.props),c.ref=Zr(h,P,f),c.return=h,h=c;break e}n(h,P);break}else t(h,P);P=P.sibling}f.type===pr?(c=Xt(f.props.children,h.mode,y,f.key),c.return=h,h=c):(y=bs(f.type,f.key,f.props,null,h.mode,y),y.ref=Zr(h,c,f),y.return=h,h=y)}return i(h);case fr:e:{for(P=f.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(h,c.sibling),c=l(c,f.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Dl(f,h.mode,y),c.return=h,h=c}return i(h);case jt:return P=f._init,S(h,c,P(f._payload),y)}if(rn(f))return N(h,c,f,y);if(Gr(f))return k(h,c,f,y);ns(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(h,c.sibling),c=l(c,f),c.return=h,h=c):(n(h,c),c=Al(f,h.mode,y),c.return=h,h=c),i(h)):n(h,c)}return S}var Ar=vu(!0),gu=vu(!1),Bs=Ot(null),Rs=null,kr=null,ai=null;function ii(){ai=kr=Rs=null}function oi(e){var t=Bs.current;Z(Bs),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Pr(e,t){Rs=e,ai=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(ai!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(Rs===null)throw Error(C(308));kr=e,Rs.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var Kt=null;function di(e){Kt===null?Kt=[e]:Kt.push(e)}function bu(e,t,n,s){var l=t.interleaved;return l===null?(n.next=n,di(t)):(n.next=l.next,l.next=n),t.interleaved=n,vt(e,s)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,$&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,vt(e,n)}return l=s.interleaved,l===null?(t.next=t,di(s)):(t.next=l.next,l.next=t),s.interleaved=t,vt(e,n)}function ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Ya(e,n)}}function No(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _s(e,t,n,s){var l=e.updateQueue;Nt=!1;var a=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var d=o,u=d.next;d.next=null,i===null?a=u:i.next=u,i=d;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==i&&(o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=d))}if(a!==null){var m=l.baseState;i=0,p=u=d=null,o=a;do{var v=o.lane,b=o.eventTime;if((s&v)===v){p!==null&&(p=p.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var N=e,k=o;switch(v=t,b=n,k.tag){case 1:if(N=k.payload,typeof N=="function"){m=N.call(b,m,v);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=k.payload,v=typeof N=="function"?N.call(b,m,v):N,v==null)break e;m=ne({},m,v);break e;case 2:Nt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[o]:v.push(o))}else b={eventTime:b,lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(u=p=b,d=m):p=p.next=b,i|=v;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;v=o,o=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(p===null&&(d=m),l.baseState=d,l.firstBaseUpdate=u,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);rr|=i,e.lanes=i,e.memoizedState=m}}function ko(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=n,typeof l!="function")throw Error(C(191,l));l.call(s)}}}var On={},ot=Ot(On),En=Ot(On),zn=Ot(On);function Yt(e){if(e===On)throw Error(C(174));return e}function ci(e,t){switch(J(zn,t),J(En,e),J(ot,On),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yl(t,e)}Z(ot),J(ot,t)}function Dr(){Z(ot),Z(En),Z(zn)}function yu(e){Yt(zn.current);var t=Yt(ot.current),n=Yl(t,e.type);t!==n&&(J(En,e),J(ot,n))}function xi(e){En.current===e&&(Z(ot),Z(En))}var te=Ot(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function mi(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var hs=bt.ReactCurrentDispatcher,Pl=bt.ReactCurrentBatchConfig,tr=0,re=null,oe=null,ce=null,Ds=!1,xn=!1,Ln=0,Kx=0;function ve(){throw Error(C(321))}function hi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function fi(e,t,n,s,l,a){if(tr=a,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hs.current=e===null||e.memoizedState===null?Zx:qx,e=n(s,l),xn){a=0;do{if(xn=!1,Ln=0,25<=a)throw Error(C(301));a+=1,ce=oe=null,t.updateQueue=null,hs.current=em,e=n(s,l)}while(xn)}if(hs.current=Vs,t=oe!==null&&oe.next!==null,tr=0,ce=oe=re=null,Ds=!1,t)throw Error(C(300));return e}function pi(){var e=Ln!==0;return Ln=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?re.memoizedState=ce=e:ce=ce.next=e,ce}function Ke(){if(oe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ce===null?re.memoizedState:ce.next;if(t!==null)ce=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ce===null?re.memoizedState=ce=e:ce=ce.next=e}return ce}function Pn(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=Ke(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var s=oe,l=s.baseQueue,a=n.pending;if(a!==null){if(l!==null){var i=l.next;l.next=a.next,a.next=i}s.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,s=s.baseState;var o=i=null,d=null,u=a;do{var p=u.lane;if((tr&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(o=d=m,i=s):d=d.next=m,re.lanes|=p,rr|=p}u=u.next}while(u!==null&&u!==a);d===null?i=s:d.next=o,rt(s,t.memoizedState)||(ze=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=d,n.lastRenderedState=s}if(e=n.interleaved,e!==null){l=e;do a=l.lane,re.lanes|=a,rr|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Ke(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var s=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do a=e(a,i.action),i=i.next;while(i!==l);rt(a,t.memoizedState)||(ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,s]}function ju(){}function Nu(e,t){var n=re,s=Ke(),l=t(),a=!rt(s.memoizedState,l);if(a&&(s.memoizedState=l,ze=!0),s=s.queue,vi(Su.bind(null,n,s,e),[e]),s.getSnapshot!==t||a||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Tn(9,Cu.bind(null,n,s,l,t),void 0,null),xe===null)throw Error(C(349));tr&30||ku(n,t,l)}return l}function ku(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cu(e,t,n,s){t.value=n,t.getSnapshot=s,Mu(t)&&Eu(e)}function Su(e,t,n){return n(function(){Mu(t)&&Eu(e)})}function Mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function Eu(e){var t=vt(e,1);t!==null&&tt(t,e,1,-1)}function Co(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},t.queue=e,e=e.dispatch=Xx.bind(null,re,e),[t.memoizedState,e]}function Tn(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function zu(){return Ke().memoizedState}function fs(e,t,n,s){var l=lt();re.flags|=e,l.memoizedState=Tn(1|t,n,void 0,s===void 0?null:s)}function Xs(e,t,n,s){var l=Ke();s=s===void 0?null:s;var a=void 0;if(oe!==null){var i=oe.memoizedState;if(a=i.destroy,s!==null&&hi(s,i.deps)){l.memoizedState=Tn(t,n,a,s);return}}re.flags|=e,l.memoizedState=Tn(1|t,n,a,s)}function So(e,t){return fs(8390656,8,e,t)}function vi(e,t){return Xs(2048,8,e,t)}function Lu(e,t){return Xs(4,2,e,t)}function Pu(e,t){return Xs(4,4,e,t)}function Tu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bu(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4,4,Tu.bind(null,t,e),n)}function gi(){}function Ru(e,t){var n=Ke();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&hi(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function _u(e,t){var n=Ke();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&hi(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Au(e,t,n){return tr&21?(rt(n,t)||(n=Hd(),re.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Yx(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var s=Pl.transition;Pl.transition={};try{e(!1),t()}finally{G=n,Pl.transition=s}}function Du(){return Ke().memoizedState}function Jx(e,t,n){var s=_t(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Vu(e))Iu(t,n);else if(n=bu(e,t,n,s),n!==null){var l=Ne();tt(n,e,s,l),Ou(n,t,s)}}function Xx(e,t,n){var s=_t(e),l={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Iu(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,o=a(i,n);if(l.hasEagerState=!0,l.eagerState=o,rt(o,i)){var d=t.interleaved;d===null?(l.next=l,di(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=bu(e,t,l,s),n!==null&&(l=Ne(),tt(n,e,s,l),Ou(n,t,s))}}function Vu(e){var t=e.alternate;return e===re||t!==null&&t===re}function Iu(e,t){xn=Ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ou(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Ya(e,n)}}var Vs={readContext:Ge,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Zx={readContext:Ge,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:So,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fs(4194308,4,Tu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return fs(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=lt();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Jx.bind(null,re,e),[s.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Co,useDebugValue:gi,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Co(!1),t=e[0];return e=Yx.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=re,l=lt();if(q){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),xe===null)throw Error(C(349));tr&30||ku(s,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,So(Su.bind(null,s,a,e),[e]),s.flags|=2048,Tn(9,Cu.bind(null,s,a,n,t),void 0,null),n},useId:function(){var e=lt(),t=xe.identifierPrefix;if(q){var n=mt,s=xt;n=(s&~(1<<32-et(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ln++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qx={readContext:Ge,useCallback:Ru,useContext:Ge,useEffect:vi,useImperativeHandle:Bu,useInsertionEffect:Lu,useLayoutEffect:Pu,useMemo:_u,useReducer:Tl,useRef:zu,useState:function(){return Tl(Pn)},useDebugValue:gi,useDeferredValue:function(e){var t=Ke();return Au(t,oe.memoizedState,e)},useTransition:function(){var e=Tl(Pn)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:Du,unstable_isNewReconciler:!1},em={readContext:Ge,useCallback:Ru,useContext:Ge,useEffect:vi,useImperativeHandle:Bu,useInsertionEffect:Lu,useLayoutEffect:Pu,useMemo:_u,useReducer:Bl,useRef:zu,useState:function(){return Bl(Pn)},useDebugValue:gi,useDeferredValue:function(e){var t=Ke();return oe===null?t.memoizedState=e:Au(t,oe.memoizedState,e)},useTransition:function(){var e=Bl(Pn)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:Du,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pa(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zs={isMounted:function(e){return(e=e._reactInternals)?lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Ne(),l=_t(e),a=ht(s,l);a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,l),t!==null&&(tt(t,e,l,s),ms(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Ne(),l=_t(e),a=ht(s,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,l),t!==null&&(tt(t,e,l,s),ms(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),s=_t(e),l=ht(n,s);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,s),t!==null&&(tt(t,e,s,n),ms(t,e,s))}};function Mo(e,t,n,s,l,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,i):t.prototype&&t.prototype.isPureReactComponent?!kn(n,s)||!kn(l,a):!0}function Hu(e,t,n){var s=!1,l=Vt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ge(a):(l=Pe(t)?qt:we.current,s=t.contextTypes,a=(s=s!=null)?Rr(e,l):Vt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zs,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Eo(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Zs.enqueueReplaceState(t,t.state,null)}function va(e,t,n,s){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ui(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Ge(a):(a=Pe(t)?qt:we.current,l.context=Rr(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(pa(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Zs.enqueueReplaceState(l,l.state,null),_s(e,n,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t){try{var n="",s=t;do n+=E0(s),s=s.return;while(s);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tm=typeof WeakMap=="function"?WeakMap:Map;function Uu(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){Os||(Os=!0,Ea=s),ga(e,t)},n}function Fu(e,t,n){n=ht(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;n.payload=function(){return s(l)},n.callback=function(){ga(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof s!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function zo(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new tm;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(n)||(l.add(n),e=fm.bind(null,e,t,n),t.then(e,e))}function Lo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Po(e,t,n,s,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var rm=bt.ReactCurrentOwner,ze=!1;function je(e,t,n,s){t.child=e===null?gu(t,null,n,s):Ar(t,e.child,n,s)}function To(e,t,n,s,l){n=n.render;var a=t.ref;return Pr(t,l),s=fi(e,t,n,s,a,l),n=pi(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gt(e,t,l)):(q&&n&&ni(t),t.flags|=1,je(e,t,s,l),t.child)}function Bo(e,t,n,s,l){if(e===null){var a=n.type;return typeof a=="function"&&!Si(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Wu(e,t,a,s,l)):(e=bs(n.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:kn,n(i,s)&&e.ref===t.ref)return gt(e,t,l)}return t.flags|=1,e=At(a,s),e.ref=t.ref,e.return=t,t.child=e}function Wu(e,t,n,s,l){if(e!==null){var a=e.memoizedProps;if(kn(a,s)&&e.ref===t.ref)if(ze=!1,t.pendingProps=s=a,(e.lanes&l)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,gt(e,t,l)}return ba(e,t,n,s,l)}function $u(e,t,n){var s=t.pendingProps,l=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Sr,Re),Re|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Sr,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:n,J(Sr,Re),Re|=s}else a!==null?(s=a.baseLanes|n,t.memoizedState=null):s=n,J(Sr,Re),Re|=s;return je(e,t,l,n),t.child}function Qu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ba(e,t,n,s,l){var a=Pe(n)?qt:we.current;return a=Rr(t,a),Pr(t,l),n=fi(e,t,n,s,a,l),s=pi(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gt(e,t,l)):(q&&s&&ni(t),t.flags|=1,je(e,t,n,l),t.child)}function Ro(e,t,n,s,l){if(Pe(n)){var a=!0;Ls(t)}else a=!1;if(Pr(t,l),t.stateNode===null)ps(e,t),Hu(t,n,s),va(t,n,s,l),s=!0;else if(e===null){var i=t.stateNode,o=t.memoizedProps;i.props=o;var d=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Pe(n)?qt:we.current,u=Rr(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==s||d!==u)&&Eo(t,i,s,u),Nt=!1;var v=t.memoizedState;i.state=v,_s(t,s,i,l),d=t.memoizedState,o!==s||v!==d||Le.current||Nt?(typeof p=="function"&&(pa(t,n,p,s),d=t.memoizedState),(o=Nt||Mo(t,n,o,s,v,d,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=d),i.props=s,i.state=d,i.context=u,s=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,wu(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Xe(t.type,o),i.props=u,m=t.pendingProps,v=i.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ge(d):(d=Pe(n)?qt:we.current,d=Rr(t,d));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==m||v!==d)&&Eo(t,i,s,d),Nt=!1,v=t.memoizedState,i.state=v,_s(t,s,i,l);var N=t.memoizedState;o!==m||v!==N||Le.current||Nt?(typeof b=="function"&&(pa(t,n,b,s),N=t.memoizedState),(u=Nt||Mo(t,n,u,s,v,N,d)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,N,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,N,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=N),i.props=s,i.state=N,i.context=d,s=u):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),s=!1)}return wa(e,t,n,s,a,l)}function wa(e,t,n,s,l,a){Qu(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return l&&bo(t,n,!1),gt(e,t,a);s=t.stateNode,rm.current=t;var o=i&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=Ar(t,e.child,null,a),t.child=Ar(t,null,o,a)):je(e,t,o,a),t.memoizedState=s.state,l&&bo(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?go(e,t.pendingContext,t.pendingContext!==t.context):t.context&&go(e,t.context,!1),ci(e,t.containerInfo)}function _o(e,t,n,s,l){return _r(),li(l),t.flags|=256,je(e,t,n,s),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,n){var s=t.pendingProps,l=te.current,a=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(te,l&1),e===null)return ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=s.children,e=s.fallback,a?(s=t.mode,a=t.child,i={mode:"hidden",children:i},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=tl(i,s,0,null),e=Xt(e,s,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ja(n),t.memoizedState=ya,e):bi(t,i));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return nm(e,t,i,s,o,l,n);if(a){a=s.fallback,i=t.mode,l=e.child,o=l.sibling;var d={mode:"hidden",children:s.children};return!(i&1)&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=d,t.deletions=null):(s=At(l,d),s.subtreeFlags=l.subtreeFlags&14680064),o!==null?a=At(o,a):(a=Xt(a,i,n,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,i=e.child.memoizedState,i=i===null?ja(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=ya,s}return a=e.child,e=a.sibling,s=At(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function bi(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ss(e,t,n,s){return s!==null&&li(s),Ar(t,e.child,null,n),e=bi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,n,s,l,a,i){if(n)return t.flags&256?(t.flags&=-257,s=Rl(Error(C(422))),ss(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,l=t.mode,s=tl({mode:"visible",children:s.children},l,0,null),a=Xt(a,l,i,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&Ar(t,e.child,null,i),t.child.memoizedState=ja(i),t.memoizedState=ya,a);if(!(t.mode&1))return ss(e,t,i,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var o=s.dgst;return s=o,a=Error(C(419)),s=Rl(a,s,void 0),ss(e,t,i,s)}if(o=(i&e.childLanes)!==0,ze||o){if(s=xe,s!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|i)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,vt(e,l),tt(s,e,l,-1))}return Ci(),s=Rl(Error(C(421))),ss(e,t,i,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=pm.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,_e=Tt(l.nextSibling),Ae=t,q=!0,qe=null,e!==null&&(Fe[We++]=xt,Fe[We++]=mt,Fe[We++]=er,xt=e.id,mt=e.overflow,er=t),t=bi(t,s.children),t.flags|=4096,t)}function Ao(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),fa(e.return,t,n)}function _l(e,t,n,s,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=n,a.tailMode=l)}function Yu(e,t,n){var s=t.pendingProps,l=s.revealOrder,a=s.tail;if(je(e,t,s.children,n),s=te.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ao(e,n,t);else if(e.tag===19)Ao(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(J(te,s),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&As(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),_l(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&As(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}_l(t,!0,n,null,a);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sm(e,t,n){switch(t.tag){case 3:Gu(t),_r();break;case 5:yu(t);break;case 1:Pe(t.type)&&Ls(t);break;case 4:ci(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;J(Bs,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(J(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Ku(e,t,n):(J(te,te.current&1),e=gt(e,t,n),e!==null?e.sibling:null);J(te,te.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Yu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(te,te.current),s)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return gt(e,t,n)}var Ju,Na,Xu,Zu;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Na=function(){};Xu=function(e,t,n,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Yt(ot.current);var a=null;switch(n){case"input":l=$l(e,l),s=$l(e,s),a=[];break;case"select":l=ne({},l,{value:void 0}),s=ne({},s,{value:void 0}),a=[];break;case"textarea":l=Kl(e,l),s=Kl(e,s),a=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Es)}Jl(n,s);var i;n=null;for(u in l)if(!s.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var o=l[u];for(i in o)o.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in s){var d=s[u];if(o=l!=null?l[u]:void 0,s.hasOwnProperty(u)&&d!==o&&(d!=null||o!=null))if(u==="style")if(o){for(i in o)!o.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in d)d.hasOwnProperty(i)&&o[i]!==d[i]&&(n||(n={}),n[i]=d[i])}else n||(a||(a=[]),a.push(u,n)),n=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,o=o?o.__html:void 0,d!=null&&o!==d&&(a=a||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vn.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&X("scroll",e),a||o===d||(a=[])):(a=a||[]).push(u,d))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Zu=function(e,t,n,s){n!==s&&(t.flags|=4)};function qr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function lm(e,t,n){var s=t.pendingProps;switch(si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Pe(t.type)&&zs(),ge(t),null;case 3:return s=t.stateNode,Dr(),Z(Le),Z(we),mi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(Pa(qe),qe=null))),Na(e,t),ge(t),null;case 5:xi(t);var l=Yt(zn.current);if(n=t.type,e!==null&&t.stateNode!=null)Xu(e,t,n,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(C(166));return ge(t),null}if(e=Yt(ot.current),rs(t)){s=t.stateNode,n=t.type;var a=t.memoizedProps;switch(s[at]=t,s[Mn]=a,e=(t.mode&1)!==0,n){case"dialog":X("cancel",s),X("close",s);break;case"iframe":case"object":case"embed":X("load",s);break;case"video":case"audio":for(l=0;l<sn.length;l++)X(sn[l],s);break;case"source":X("error",s);break;case"img":case"image":case"link":X("error",s),X("load",s);break;case"details":X("toggle",s);break;case"input":Wi(s,a),X("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},X("invalid",s);break;case"textarea":Qi(s,a),X("invalid",s)}Jl(n,a),l=null;for(var i in a)if(a.hasOwnProperty(i)){var o=a[i];i==="children"?typeof o=="string"?s.textContent!==o&&(a.suppressHydrationWarning!==!0&&ts(s.textContent,o,e),l=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&ts(s.textContent,o,e),l=["children",""+o]):vn.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&X("scroll",s)}switch(n){case"input":Gn(s),$i(s,a,!0);break;case"textarea":Gn(s),Gi(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Es)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(n,{is:s.is}):(e=i.createElement(n),n==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,n),e[at]=t,e[Mn]=s,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(i=Xl(n,s),n){case"dialog":X("cancel",e),X("close",e),l=s;break;case"iframe":case"object":case"embed":X("load",e),l=s;break;case"video":case"audio":for(l=0;l<sn.length;l++)X(sn[l],e);l=s;break;case"source":X("error",e),l=s;break;case"img":case"image":case"link":X("error",e),X("load",e),l=s;break;case"details":X("toggle",e),l=s;break;case"input":Wi(e,s),l=$l(e,s),X("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=ne({},s,{value:void 0}),X("invalid",e);break;case"textarea":Qi(e,s),l=Kl(e,s),X("invalid",e);break;default:l=s}Jl(n,l),o=l;for(a in o)if(o.hasOwnProperty(a)){var d=o[a];a==="style"?zd(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Md(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&gn(e,d):typeof d=="number"&&gn(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(vn.hasOwnProperty(a)?d!=null&&a==="onScroll"&&X("scroll",e):d!=null&&Fa(e,a,d,i))}switch(n){case"input":Gn(e),$i(e,s,!1);break;case"textarea":Gn(e),Gi(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Dt(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Mr(e,!!s.multiple,a,!1):s.defaultValue!=null&&Mr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Es)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Zu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(C(166));if(n=Yt(zn.current),Yt(ot.current),rs(t)){if(s=t.stateNode,n=t.memoizedProps,s[at]=t,(a=s.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:ts(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(s.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[at]=t,t.stateNode=s}return ge(t),null;case 13:if(Z(te),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&_e!==null&&t.mode&1&&!(t.flags&128))pu(),_r(),t.flags|=98560,a=!1;else if(a=rs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[at]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),a=!1}else qe!==null&&(Pa(qe),qe=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):Ci())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Dr(),Na(e,t),e===null&&Cn(t.stateNode.containerInfo),ge(t),null;case 10:return oi(t.type._context),ge(t),null;case 17:return Pe(t.type)&&zs(),ge(t),null;case 19:if(Z(te),a=t.memoizedState,a===null)return ge(t),null;if(s=(t.flags&128)!==0,i=a.rendering,i===null)if(s)qr(a,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=As(e),i!==null){for(t.flags|=128,qr(a,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)a=n,e=s,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(te,te.current&1|2),t.child}e=e.sibling}a.tail!==null&&le()>Ir&&(t.flags|=128,s=!0,qr(a,!1),t.lanes=4194304)}else{if(!s)if(e=As(i),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!q)return ge(t),null}else 2*le()-a.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,s=!0,qr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=le(),t.sibling=null,n=te.current,J(te,s?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return ki(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Re&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function am(e,t){switch(si(t),t.tag){case 1:return Pe(t.type)&&zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),Z(Le),Z(we),mi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xi(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return Dr(),null;case 10:return oi(t.type._context),null;case 22:case 23:return ki(),null;case 24:return null;default:return null}}var ls=!1,be=!1,im=typeof WeakSet=="function"?WeakSet:Set,B=null;function Cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){se(e,t,s)}else n.current=null}function ka(e,t,n){try{n()}catch(s){se(e,t,s)}}var Do=!1;function om(e,t){if(ia=Cs,e=nu(),ri(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var l=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,o=-1,d=-1,u=0,p=0,m=e,v=null;t:for(;;){for(var b;m!==n||l!==0&&m.nodeType!==3||(o=i+l),m!==a||s!==0&&m.nodeType!==3||(d=i+s),m.nodeType===3&&(i+=m.nodeValue.length),(b=m.firstChild)!==null;)v=m,m=b;for(;;){if(m===e)break t;if(v===n&&++u===l&&(o=i),v===a&&++p===s&&(d=i),(b=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=b}n=o===-1||d===-1?null:{start:o,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},Cs=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var k=N.memoizedProps,S=N.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:Xe(t.type,k),S);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return N=Do,Do=!1,N}function mn(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&ka(t,n,a)}l=l.next}while(l!==s)}}function qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qu(e){var t=e.alternate;t!==null&&(e.alternate=null,qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Mn],delete t[ca],delete t[Wx],delete t[$x])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ec(e){return e.tag===5||e.tag===3||e.tag===4}function Vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sa(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Es));else if(s!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}function Ma(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ma(e,t,n),e=e.sibling;e!==null;)Ma(e,t,n),e=e.sibling}var he=null,Ze=!1;function yt(e,t,n){for(n=n.child;n!==null;)tc(e,t,n),n=n.sibling}function tc(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount($s,n)}catch{}switch(n.tag){case 5:be||Cr(n,t);case 6:var s=he,l=Ze;he=null,yt(e,t,n),he=s,Ze=l,he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?El(e.parentNode,n):e.nodeType===1&&El(e,n),jn(e)):El(he,n.stateNode));break;case 4:s=he,l=Ze,he=n.stateNode.containerInfo,Ze=!0,yt(e,t,n),he=s,Ze=l;break;case 0:case 11:case 14:case 15:if(!be&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var a=l,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&ka(n,t,i),l=l.next}while(l!==s)}yt(e,t,n);break;case 1:if(!be&&(Cr(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(o){se(n,t,o)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(be=(s=be)||n.memoizedState!==null,yt(e,t,n),be=s):yt(e,t,n);break;default:yt(e,t,n)}}function Io(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new im),t.forEach(function(s){var l=vm.bind(null,e,s);n.has(s)||(n.add(s),s.then(l,l))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];try{var a=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 5:he=o.stateNode,Ze=!1;break e;case 3:he=o.stateNode.containerInfo,Ze=!0;break e;case 4:he=o.stateNode.containerInfo,Ze=!0;break e}o=o.return}if(he===null)throw Error(C(160));tc(a,i,l),he=null,Ze=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(u){se(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rc(t,e),t=t.sibling}function rc(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),st(e),s&4){try{mn(3,e,e.return),qs(3,e)}catch(k){se(e,e.return,k)}try{mn(5,e,e.return)}catch(k){se(e,e.return,k)}}break;case 1:Je(t,e),st(e),s&512&&n!==null&&Cr(n,n.return);break;case 5:if(Je(t,e),st(e),s&512&&n!==null&&Cr(n,n.return),e.flags&32){var l=e.stateNode;try{gn(l,"")}catch(k){se(e,e.return,k)}}if(s&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,o=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&kd(l,a),Xl(o,i);var u=Xl(o,a);for(i=0;i<d.length;i+=2){var p=d[i],m=d[i+1];p==="style"?zd(l,m):p==="dangerouslySetInnerHTML"?Md(l,m):p==="children"?gn(l,m):Fa(l,p,m,u)}switch(o){case"input":Ql(l,a);break;case"textarea":Cd(l,a);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Mr(l,!!a.multiple,b,!1):v!==!!a.multiple&&(a.defaultValue!=null?Mr(l,!!a.multiple,a.defaultValue,!0):Mr(l,!!a.multiple,a.multiple?[]:"",!1))}l[Mn]=a}catch(k){se(e,e.return,k)}}break;case 6:if(Je(t,e),st(e),s&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(k){se(e,e.return,k)}}break;case 3:if(Je(t,e),st(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(k){se(e,e.return,k)}break;case 4:Je(t,e),st(e);break;case 13:Je(t,e),st(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(ji=le())),s&4&&Io(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||p,Je(t,e),be=u):Je(t,e),st(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(B=e,p=e.child;p!==null;){for(m=B=p;B!==null;){switch(v=B,b=v.child,v.tag){case 0:case 11:case 14:case 15:mn(4,v,v.return);break;case 1:Cr(v,v.return);var N=v.stateNode;if(typeof N.componentWillUnmount=="function"){s=v,n=v.return;try{t=s,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(k){se(s,n,k)}}break;case 5:Cr(v,v.return);break;case 22:if(v.memoizedState!==null){Ho(m);continue}}b!==null?(b.return=v,B=b):Ho(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{l=m.stateNode,u?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=m.stateNode,d=m.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,o.style.display=Ed("display",i))}catch(k){se(e,e.return,k)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(k){se(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Je(t,e),st(e),s&4&&Io(e);break;case 21:break;default:Je(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ec(n)){var s=n;break e}n=n.return}throw Error(C(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(gn(l,""),s.flags&=-33);var a=Vo(e);Ma(e,a,l);break;case 3:case 4:var i=s.stateNode.containerInfo,o=Vo(e);Sa(e,o,i);break;default:throw Error(C(161))}}catch(d){se(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dm(e,t,n){B=e,nc(e)}function nc(e,t,n){for(var s=(e.mode&1)!==0;B!==null;){var l=B,a=l.child;if(l.tag===22&&s){var i=l.memoizedState!==null||ls;if(!i){var o=l.alternate,d=o!==null&&o.memoizedState!==null||be;o=ls;var u=be;if(ls=i,(be=d)&&!u)for(B=l;B!==null;)i=B,d=i.child,i.tag===22&&i.memoizedState!==null?Uo(l):d!==null?(d.return=i,B=d):Uo(l);for(;a!==null;)B=a,nc(a),a=a.sibling;B=l,ls=o,be=u}Oo(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,B=a):Oo(e)}}function Oo(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||qs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!be)if(n===null)s.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);s.componentDidUpdate(l,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ko(t,a,s);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ko(t,i,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&jn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}be||t.flags&512&&Ca(t)}catch(v){se(t,t.return,v)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Ho(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Uo(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qs(4,t)}catch(d){se(t,n,d)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(d){se(t,l,d)}}var a=t.return;try{Ca(t)}catch(d){se(t,a,d)}break;case 5:var i=t.return;try{Ca(t)}catch(d){se(t,i,d)}}}catch(d){se(t,t.return,d)}if(t===e){B=null;break}var o=t.sibling;if(o!==null){o.return=t.return,B=o;break}B=t.return}}var um=Math.ceil,Is=bt.ReactCurrentDispatcher,wi=bt.ReactCurrentOwner,Qe=bt.ReactCurrentBatchConfig,$=0,xe=null,ae=null,fe=0,Re=0,Sr=Ot(0),de=0,Bn=null,rr=0,el=0,yi=0,hn=null,Ee=null,ji=0,Ir=1/0,ut=null,Os=!1,Ea=null,Rt=null,as=!1,Mt=null,Hs=0,fn=0,za=null,vs=-1,gs=0;function Ne(){return $&6?le():vs!==-1?vs:vs=le()}function _t(e){return e.mode&1?$&2&&fe!==0?fe&-fe:Gx.transition!==null?(gs===0&&(gs=Hd()),gs):(e=G,e!==0||(e=window.event,e=e===void 0?16:Kd(e.type)),e):1}function tt(e,t,n,s){if(50<fn)throw fn=0,za=null,Error(C(185));Dn(e,n,s),(!($&2)||e!==xe)&&(e===xe&&(!($&2)&&(el|=n),de===4&&Ct(e,fe)),Te(e,s),n===1&&$===0&&!(t.mode&1)&&(Ir=le()+500,Js&&Ht()))}function Te(e,t){var n=e.callbackNode;G0(e,t);var s=ks(e,e===xe?fe:0);if(s===0)n!==null&&Ji(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Ji(n),t===1)e.tag===0?Qx(Fo.bind(null,e)):mu(Fo.bind(null,e)),Ux(function(){!($&6)&&Ht()}),n=null;else{switch(Ud(s)){case 1:n=Ka;break;case 4:n=Id;break;case 16:n=Ns;break;case 536870912:n=Od;break;default:n=Ns}n=cc(n,sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sc(e,t){if(vs=-1,gs=0,$&6)throw Error(C(327));var n=e.callbackNode;if(Tr()&&e.callbackNode!==n)return null;var s=ks(e,e===xe?fe:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Us(e,s);else{t=s;var l=$;$|=2;var a=ac();(xe!==e||fe!==t)&&(ut=null,Ir=le()+500,Jt(e,t));do try{mm();break}catch(o){lc(e,o)}while(!0);ii(),Is.current=a,$=l,ae!==null?t=0:(xe=null,fe=0,t=de)}if(t!==0){if(t===2&&(l=ra(e),l!==0&&(s=l,t=La(e,l))),t===1)throw n=Bn,Jt(e,0),Ct(e,s),Te(e,le()),n;if(t===6)Ct(e,s);else{if(l=e.current.alternate,!(s&30)&&!cm(l)&&(t=Us(e,s),t===2&&(a=ra(e),a!==0&&(s=a,t=La(e,a))),t===1))throw n=Bn,Jt(e,0),Ct(e,s),Te(e,le()),n;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(C(345));case 2:Qt(e,Ee,ut);break;case 3:if(Ct(e,s),(s&130023424)===s&&(t=ji+500-le(),10<t)){if(ks(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){Ne(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ua(Qt.bind(null,e,Ee,ut),t);break}Qt(e,Ee,ut);break;case 4:if(Ct(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var i=31-et(s);a=1<<i,i=t[i],i>l&&(l=i),s&=~a}if(s=l,s=le()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*um(s/1960))-s,10<s){e.timeoutHandle=ua(Qt.bind(null,e,Ee,ut),s);break}Qt(e,Ee,ut);break;case 5:Qt(e,Ee,ut);break;default:throw Error(C(329))}}}return Te(e,le()),e.callbackNode===n?sc.bind(null,e):null}function La(e,t){var n=hn;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=Us(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&Pa(t)),e}function Pa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var l=n[s],a=l.getSnapshot;l=l.value;try{if(!rt(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~yi,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),s=1<<n;e[n]=-1,t&=~s}}function Fo(e){if($&6)throw Error(C(327));Tr();var t=ks(e,0);if(!(t&1))return Te(e,le()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var s=ra(e);s!==0&&(t=s,n=La(e,s))}if(n===1)throw n=Bn,Jt(e,0),Ct(e,t),Te(e,le()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,Ee,ut),Te(e,le()),null}function Ni(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Ir=le()+500,Js&&Ht())}}function nr(e){Mt!==null&&Mt.tag===0&&!($&6)&&Tr();var t=$;$|=1;var n=Qe.transition,s=G;try{if(Qe.transition=null,G=1,e)return e()}finally{G=s,Qe.transition=n,$=t,!($&6)&&Ht()}}function ki(){Re=Sr.current,Z(Sr)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hx(n)),ae!==null)for(n=ae.return;n!==null;){var s=n;switch(si(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&zs();break;case 3:Dr(),Z(Le),Z(we),mi();break;case 5:xi(s);break;case 4:Dr();break;case 13:Z(te);break;case 19:Z(te);break;case 10:oi(s.type._context);break;case 22:case 23:ki()}n=n.return}if(xe=e,ae=e=At(e.current,null),fe=Re=t,de=0,Bn=null,yi=el=rr=0,Ee=hn=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],s=n.interleaved,s!==null){n.interleaved=null;var l=s.next,a=n.pending;if(a!==null){var i=a.next;a.next=l,s.next=i}n.pending=s}Kt=null}return e}function lc(e,t){do{var n=ae;try{if(ii(),hs.current=Vs,Ds){for(var s=re.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}Ds=!1}if(tr=0,ce=oe=re=null,xn=!1,Ln=0,wi.current=null,n===null||n.return===null){de=1,Bn=t,ae=null;break}e:{var a=e,i=n.return,o=n,d=t;if(t=fe,o.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=o,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=Lo(i);if(b!==null){b.flags&=-257,Po(b,i,o,a,t),b.mode&1&&zo(a,u,t),t=b,d=u;var N=t.updateQueue;if(N===null){var k=new Set;k.add(d),t.updateQueue=k}else N.add(d);break e}else{if(!(t&1)){zo(a,u,t),Ci();break e}d=Error(C(426))}}else if(q&&o.mode&1){var S=Lo(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Po(S,i,o,a,t),li(Vr(d,o));break e}}a=d=Vr(d,o),de!==4&&(de=2),hn===null?hn=[a]:hn.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Uu(a,d,t);No(a,h);break e;case 1:o=d;var c=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Rt===null||!Rt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=Fu(a,o,t);No(a,y);break e}}a=a.return}while(a!==null)}oc(n)}catch(M){t=M,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function ac(){var e=Is.current;return Is.current=Vs,e===null?Vs:e}function Ci(){(de===0||de===3||de===2)&&(de=4),xe===null||!(rr&268435455)&&!(el&268435455)||Ct(xe,fe)}function Us(e,t){var n=$;$|=2;var s=ac();(xe!==e||fe!==t)&&(ut=null,Jt(e,t));do try{xm();break}catch(l){lc(e,l)}while(!0);if(ii(),$=n,Is.current=s,ae!==null)throw Error(C(261));return xe=null,fe=0,de}function xm(){for(;ae!==null;)ic(ae)}function mm(){for(;ae!==null&&!V0();)ic(ae)}function ic(e){var t=uc(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?oc(e):ae=t,wi.current=null}function oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=am(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ae=null;return}}else if(n=lm(n,t,Re),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);de===0&&(de=5)}function Qt(e,t,n){var s=G,l=Qe.transition;try{Qe.transition=null,G=1,hm(e,t,n,s)}finally{Qe.transition=l,G=s}return null}function hm(e,t,n,s){do Tr();while(Mt!==null);if($&6)throw Error(C(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(K0(e,a),e===xe&&(ae=xe=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||as||(as=!0,cc(Ns,function(){return Tr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Qe.transition,Qe.transition=null;var i=G;G=1;var o=$;$|=4,wi.current=null,om(e,n),rc(n,e),Rx(oa),Cs=!!ia,oa=ia=null,e.current=n,dm(n),I0(),$=o,G=i,Qe.transition=a}else e.current=n;if(as&&(as=!1,Mt=e,Hs=l),a=e.pendingLanes,a===0&&(Rt=null),U0(n.stateNode),Te(e,le()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],s(l.value,{componentStack:l.stack,digest:l.digest});if(Os)throw Os=!1,e=Ea,Ea=null,e;return Hs&1&&e.tag!==0&&Tr(),a=e.pendingLanes,a&1?e===za?fn++:(fn=0,za=e):fn=0,Ht(),null}function Tr(){if(Mt!==null){var e=Ud(Hs),t=Qe.transition,n=G;try{if(Qe.transition=null,G=16>e?16:e,Mt===null)var s=!1;else{if(e=Mt,Mt=null,Hs=0,$&6)throw Error(C(331));var l=$;for($|=4,B=e.current;B!==null;){var a=B,i=a.child;if(B.flags&16){var o=a.deletions;if(o!==null){for(var d=0;d<o.length;d++){var u=o[d];for(B=u;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:mn(8,p,a)}var m=p.child;if(m!==null)m.return=p,B=m;else for(;B!==null;){p=B;var v=p.sibling,b=p.return;if(qu(p),p===u){B=null;break}if(v!==null){v.return=b,B=v;break}B=b}}}var N=a.alternate;if(N!==null){var k=N.child;if(k!==null){N.child=null;do{var S=k.sibling;k.sibling=null,k=S}while(k!==null)}}B=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,B=i;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:mn(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,B=h;break e}B=a.return}}var c=e.current;for(B=c;B!==null;){i=B;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,B=f;else e:for(i=c;B!==null;){if(o=B,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:qs(9,o)}}catch(M){se(o,o.return,M)}if(o===i){B=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,B=y;break e}B=o.return}}if($=l,Ht(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot($s,e)}catch{}s=!0}return s}finally{G=n,Qe.transition=t}}return!1}function Wo(e,t,n){t=Vr(n,t),t=Uu(e,t,1),e=Bt(e,t,1),t=Ne(),e!==null&&(Dn(e,1,t),Te(e,t))}function se(e,t,n){if(e.tag===3)Wo(e,e,n);else for(;t!==null;){if(t.tag===3){Wo(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Rt===null||!Rt.has(s))){e=Vr(n,e),e=Fu(t,e,1),t=Bt(t,e,1),e=Ne(),t!==null&&(Dn(t,1,e),Te(t,e));break}}t=t.return}}function fm(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(fe&n)===n&&(de===4||de===3&&(fe&130023424)===fe&&500>le()-ji?Jt(e,0):yi|=n),Te(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=Jn,Jn<<=1,!(Jn&130023424)&&(Jn=4194304)):t=1);var n=Ne();e=vt(e,t),e!==null&&(Dn(e,t,n),Te(e,n))}function pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function vm(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(C(314))}s!==null&&s.delete(t),dc(e,n)}var uc;uc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,sm(e,t,n);ze=!!(e.flags&131072)}else ze=!1,q&&t.flags&1048576&&hu(t,Ts,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ps(e,t),e=t.pendingProps;var l=Rr(t,we.current);Pr(t,n),l=fi(null,t,s,e,l,n);var a=pi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(s)?(a=!0,Ls(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ui(t),l.updater=Zs,t.stateNode=l,l._reactInternals=t,va(t,s,e,n),t=wa(null,t,s,!0,a,n)):(t.tag=0,q&&a&&ni(t),je(null,t,l,n),t=t.child),t;case 16:s=t.elementType;e:{switch(ps(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=bm(s),e=Xe(s,e),l){case 0:t=ba(null,t,s,e,n);break e;case 1:t=Ro(null,t,s,e,n);break e;case 11:t=To(null,t,s,e,n);break e;case 14:t=Bo(null,t,s,Xe(s.type,e),n);break e}throw Error(C(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Xe(s,l),ba(e,t,s,l,n);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Xe(s,l),Ro(e,t,s,l,n);case 3:e:{if(Gu(t),e===null)throw Error(C(387));s=t.pendingProps,a=t.memoizedState,l=a.element,wu(e,t),_s(t,s,null,n);var i=t.memoizedState;if(s=i.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Vr(Error(C(423)),t),t=_o(e,t,s,n,l);break e}else if(s!==l){l=Vr(Error(C(424)),t),t=_o(e,t,s,n,l);break e}else for(_e=Tt(t.stateNode.containerInfo.firstChild),Ae=t,q=!0,qe=null,n=gu(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),s===l){t=gt(e,t,n);break e}je(e,t,s,n)}t=t.child}return t;case 5:return yu(t),e===null&&ha(t),s=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,i=l.children,da(s,l)?i=null:a!==null&&da(s,a)&&(t.flags|=32),Qu(e,t),je(e,t,i,n),t.child;case 6:return e===null&&ha(t),null;case 13:return Ku(e,t,n);case 4:return ci(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ar(t,null,s,n):je(e,t,s,n),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Xe(s,l),To(e,t,s,l,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,a=t.memoizedProps,i=l.value,J(Bs,s._currentValue),s._currentValue=i,a!==null)if(rt(a.value,i)){if(a.children===l.children&&!Le.current){t=gt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){i=a.child;for(var d=o.firstContext;d!==null;){if(d.context===s){if(a.tag===1){d=ht(-1,n&-n),d.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),fa(a.return,n,t),o.lanes|=n;break}d=d.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(C(341));i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),fa(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}je(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,Pr(t,n),l=Ge(l),s=s(l),t.flags|=1,je(e,t,s,n),t.child;case 14:return s=t.type,l=Xe(s,t.pendingProps),l=Xe(s.type,l),Bo(e,t,s,l,n);case 15:return Wu(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Xe(s,l),ps(e,t),t.tag=1,Pe(s)?(e=!0,Ls(t)):e=!1,Pr(t,n),Hu(t,s,l),va(t,s,l,n),wa(null,t,s,!0,e,n);case 19:return Yu(e,t,n);case 22:return $u(e,t,n)}throw Error(C(156,t.tag))};function cc(e,t){return Vd(e,t)}function gm(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,s){return new gm(e,t,n,s)}function Si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bm(e){if(typeof e=="function")return Si(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Qa)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,s,l,a){var i=2;if(s=e,typeof e=="function")Si(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case pr:return Xt(n.children,l,a,t);case Wa:i=8,l|=8;break;case Hl:return e=$e(12,n,t,l|2),e.elementType=Hl,e.lanes=a,e;case Ul:return e=$e(13,n,t,l),e.elementType=Ul,e.lanes=a,e;case Fl:return e=$e(19,n,t,l),e.elementType=Fl,e.lanes=a,e;case yd:return tl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bd:i=10;break e;case wd:i=9;break e;case $a:i=11;break e;case Qa:i=14;break e;case jt:i=16,s=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=$e(i,n,t,l),t.elementType=e,t.type=s,t.lanes=a,t}function Xt(e,t,n,s){return e=$e(7,e,s,t),e.lanes=n,e}function tl(e,t,n,s){return e=$e(22,e,s,t),e.elementType=yd,e.lanes=n,e.stateNode={isHidden:!1},e}function Al(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Dl(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wm(e,t,n,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Mi(e,t,n,s,l,a,i,o,d){return e=new wm(e,t,n,o,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=$e(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ui(a),e}function ym(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function xc(e){if(!e)return Vt;e=e._reactInternals;e:{if(lr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Pe(n))return xu(e,n,t)}return t}function mc(e,t,n,s,l,a,i,o,d){return e=Mi(n,s,!0,e,l,a,i,o,d),e.context=xc(null),n=e.current,s=Ne(),l=_t(n),a=ht(s,l),a.callback=t??null,Bt(n,a,l),e.current.lanes=l,Dn(e,l,s),Te(e,s),e}function rl(e,t,n,s){var l=t.current,a=Ne(),i=_t(l);return n=xc(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(a,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Bt(l,t,i),e!==null&&(tt(e,l,i,a),ms(e,l,i)),i}function Fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $o(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ei(e,t){$o(e,t),(e=e.alternate)&&$o(e,t)}function jm(){return null}var hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function zi(e){this._internalRoot=e}nl.prototype.render=zi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));rl(e,t,null,null)};nl.prototype.unmount=zi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){rl(null,e,null,null)}),t[pt]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=$d();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&Gd(e)}};function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qo(){}function Nm(e,t,n,s,l){if(l){if(typeof s=="function"){var a=s;s=function(){var u=Fs(i);a.call(u)}}var i=mc(t,s,e,0,null,!1,!1,"",Qo);return e._reactRootContainer=i,e[pt]=i.current,Cn(e.nodeType===8?e.parentNode:e),nr(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var o=s;s=function(){var u=Fs(d);o.call(u)}}var d=Mi(e,0,!1,null,null,!1,!1,"",Qo);return e._reactRootContainer=d,e[pt]=d.current,Cn(e.nodeType===8?e.parentNode:e),nr(function(){rl(t,d,n,s)}),d}function ll(e,t,n,s,l){var a=n._reactRootContainer;if(a){var i=a;if(typeof l=="function"){var o=l;l=function(){var d=Fs(i);o.call(d)}}rl(t,i,e,l)}else i=Nm(n,t,e,l,s);return Fs(i)}Fd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nn(t.pendingLanes);n!==0&&(Ya(t,n|1),Te(t,le()),!($&6)&&(Ir=le()+500,Ht()))}break;case 13:nr(function(){var s=vt(e,1);if(s!==null){var l=Ne();tt(s,e,1,l)}}),Ei(e,1)}};Ja=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=Ne();tt(t,e,134217728,n)}Ei(e,134217728)}};Wd=function(e){if(e.tag===13){var t=_t(e),n=vt(e,t);if(n!==null){var s=Ne();tt(n,e,t,s)}Ei(e,t)}};$d=function(){return G};Qd=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};ql=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var l=Ys(s);if(!l)throw Error(C(90));Nd(s),Ql(s,l)}}}break;case"textarea":Cd(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};Td=Ni;Bd=nr;var km={usingClientEntryPoint:!1,Events:[In,wr,Ys,Ld,Pd,Ni]},en={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cm={bundleType:en.bundleType,version:en.version,rendererPackageName:en.rendererPackageName,rendererConfig:en.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ad(e),e===null?null:e.stateNode},findFiberByHostInstance:en.findFiberByHostInstance||jm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{$s=is.inject(Cm),it=is}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Li(t))throw Error(C(200));return ym(e,t,null,n)};Ve.createRoot=function(e,t){if(!Li(e))throw Error(C(299));var n=!1,s="",l=hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Mi(e,1,!1,null,null,n,!1,s,l),e[pt]=t.current,Cn(e.nodeType===8?e.parentNode:e),new zi(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ad(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return nr(e)};Ve.hydrate=function(e,t,n){if(!sl(t))throw Error(C(200));return ll(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Li(e))throw Error(C(405));var s=n!=null&&n.hydratedSources||null,l=!1,a="",i=hc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=mc(t,null,e,1,n??null,l,!1,a,i),e[pt]=t.current,Cn(e),s)for(e=0;e<s.length;e++)n=s[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new nl(t)};Ve.render=function(e,t,n){if(!sl(t))throw Error(C(200));return ll(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!sl(e))throw Error(C(40));return e._reactRootContainer?(nr(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ni;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!sl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ll(e,t,n,!1,s)};Ve.version="18.3.1-next-f1338f8080-20240426";function fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)}catch(e){console.error(e)}}fc(),fd.exports=Ve;var Sm=fd.exports,Go=Sm;Il.createRoot=Go.createRoot,Il.hydrateRoot=Go.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Rn.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Ko="popstate";function Mm(e){e===void 0&&(e={});function t(s,l){let{pathname:a,search:i,hash:o}=s.location;return Ta("",{pathname:a,search:i,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:pc(l)}return zm(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Em(){return Math.random().toString(36).substr(2,8)}function Yo(e,t){return{usr:e.state,key:e.key,idx:t}}function Ta(e,t,n,s){return n===void 0&&(n=null),Rn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fr(t):t,{state:n,key:t&&t.key||s||Em()})}function pc(e){let{pathname:t="/",search:n="",hash:s=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function zm(e,t,n,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:a=!1}=s,i=l.history,o=Et.Pop,d=null,u=p();u==null&&(u=0,i.replaceState(Rn({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function m(){o=Et.Pop;let S=p(),h=S==null?null:S-u;u=S,d&&d({action:o,location:k.location,delta:h})}function v(S,h){o=Et.Push;let c=Ta(k.location,S,h);u=p()+1;let f=Yo(c,u),y=k.createHref(c);try{i.pushState(f,"",y)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;l.location.assign(y)}a&&d&&d({action:o,location:k.location,delta:1})}function b(S,h){o=Et.Replace;let c=Ta(k.location,S,h);u=p();let f=Yo(c,u),y=k.createHref(c);i.replaceState(f,"",y),a&&d&&d({action:o,location:k.location,delta:0})}function N(S){let h=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof S=="string"?S:pc(S);return c=c.replace(/ $/,"%20"),ie(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let k={get action(){return o},get location(){return e(l,i)},listen(S){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(Ko,m),d=S,()=>{l.removeEventListener(Ko,m),d=null}},createHref(S){return t(l,S)},createURL:N,encodeLocation(S){let h=N(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:b,go(S){return i.go(S)}};return k}var Jo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jo||(Jo={}));function Lm(e,t,n){return n===void 0&&(n="/"),Pm(e,t,n)}function Pm(e,t,n,s){let l=typeof t=="string"?Fr(t):t,a=bc(l.pathname||"/",n);if(a==null)return null;let i=vc(e);Tm(i);let o=null;for(let d=0;o==null&&d<i.length;++d){let u=Wm(a);o=Hm(i[d],u)}return o}function vc(e,t,n,s){t===void 0&&(t=[]),n===void 0&&(n=[]),s===void 0&&(s="");let l=(a,i,o)=>{let d={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};d.relativePath.startsWith("/")&&(ie(d.relativePath.startsWith(s),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(s.length));let u=Zt([s,d.relativePath]),p=n.concat(d);a.children&&a.children.length>0&&(ie(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vc(a.children,t,p,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Im(u,a.index),routesMeta:p})};return e.forEach((a,i)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))l(a,i);else for(let d of gc(a.path))l(a,i,d)}),t}function gc(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let i=gc(s.join("/")),o=[];return o.push(...i.map(d=>d===""?a:[a,d].join("/"))),l&&o.push(...i),o.map(d=>e.startsWith("/")&&d===""?"/":d)}function Tm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Om(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Bm=/^:[\w-]+$/,Rm=3,_m=2,Am=1,Dm=10,Vm=-2,Xo=e=>e==="*";function Im(e,t){let n=e.split("/"),s=n.length;return n.some(Xo)&&(s+=Vm),t&&(s+=_m),n.filter(l=>!Xo(l)).reduce((l,a)=>l+(Bm.test(a)?Rm:a===""?Am:Dm),s)}function Om(e,t){return e.length===t.length&&e.slice(0,-1).every((s,l)=>s===t[l])?e[e.length-1]-t[t.length-1]:0}function Hm(e,t,n){let{routesMeta:s}=e,l={},a="/",i=[];for(let o=0;o<s.length;++o){let d=s[o],u=o===s.length-1,p=a==="/"?t:t.slice(a.length)||"/",m=Um({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},p),v=d.route;if(!m)return null;Object.assign(l,m.params),i.push({params:l,pathname:Zt([a,m.pathname]),pathnameBase:Ym(Zt([a,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(a=Zt([a,m.pathnameBase]))}return i}function Um(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=Fm(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let a=l[0],i=a.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:s.reduce((u,p,m)=>{let{paramName:v,isOptional:b}=p;if(v==="*"){let k=o[m]||"";i=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const N=o[m];return b&&!N?u[v]=void 0:u[v]=(N||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Fm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,d)=>(s.push({paramName:o,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function Wm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}const $m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qm=e=>$m.test(e);function Gm(e,t){t===void 0&&(t="/");let{pathname:n,search:s="",hash:l=""}=typeof e=="string"?Fr(e):e,a;if(n)if(Qm(n))a=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),Pi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?a=Zo(n.substring(1),"/"):a=Zo(n,t)}else a=t;return{pathname:a,search:Jm(s),hash:Xm(l)}}function Zo(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Vl(e,t,n,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Km(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wc(e,t){let n=Km(e);return t?n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function yc(e,t,n,s){s===void 0&&(s=!1);let l;typeof e=="string"?l=Fr(e):(l=Rn({},e),ie(!l.pathname||!l.pathname.includes("?"),Vl("?","pathname","search",l)),ie(!l.pathname||!l.pathname.includes("#"),Vl("#","pathname","hash",l)),ie(!l.search||!l.search.includes("#"),Vl("#","search","hash",l)));let a=e===""||l.pathname==="",i=a?"/":l.pathname,o;if(i==null)o=n;else{let m=t.length-1;if(!s&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),m-=1;l.pathname=v.join("/")}o=m>=0?t[m]:"/"}let d=Gm(l,o),u=i&&i!=="/"&&i.endsWith("/"),p=(a||i===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(u||p)&&(d.pathname+="/"),d}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),Ym=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jc=["post","put","patch","delete"];new Set(jc);const qm=["get",...jc];new Set(qm);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _n(){return _n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_n.apply(this,arguments)}const Ti=g.createContext(null),eh=g.createContext(null),Hn=g.createContext(null),al=g.createContext(null),ar=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Nc=g.createContext(null);function Un(){return g.useContext(al)!=null}function il(){return Un()||ie(!1),g.useContext(al).location}function kc(e){g.useContext(Hn).static||g.useLayoutEffect(e)}function Bi(){let{isDataRoute:e}=g.useContext(ar);return e?mh():th()}function th(){Un()||ie(!1);let e=g.useContext(Ti),{basename:t,future:n,navigator:s}=g.useContext(Hn),{matches:l}=g.useContext(ar),{pathname:a}=il(),i=JSON.stringify(wc(l,n.v7_relativeSplatPath)),o=g.useRef(!1);return kc(()=>{o.current=!0}),g.useCallback(function(u,p){if(p===void 0&&(p={}),!o.current)return;if(typeof u=="number"){s.go(u);return}let m=yc(u,JSON.parse(i),a,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Zt([t,m.pathname])),(p.replace?s.replace:s.push)(m,p.state,p)},[t,s,i,a,e])}function rh(e,t){return nh(e,t)}function nh(e,t,n,s){Un()||ie(!1);let{navigator:l}=g.useContext(Hn),{matches:a}=g.useContext(ar),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let d=i?i.pathnameBase:"/";i&&i.route;let u=il(),p;if(t){var m;let S=typeof t=="string"?Fr(t):t;d==="/"||(m=S.pathname)!=null&&m.startsWith(d)||ie(!1),p=S}else p=u;let v=p.pathname||"/",b=v;if(d!=="/"){let S=d.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(S.length).join("/")}let N=Lm(e,{pathname:b}),k=oh(N&&N.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Zt([d,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?d:Zt([d,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),a,n,s);return t&&k?g.createElement(al.Provider,{value:{location:_n({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Et.Pop}},k):k}function sh(){let e=xh(),t=Zm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:l},n):null,null)}const lh=g.createElement(sh,null);class ah extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(ar.Provider,{value:this.props.routeContext},g.createElement(Nc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ih(e){let{routeContext:t,match:n,children:s}=e,l=g.useContext(Ti);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(ar.Provider,{value:t},s)}function oh(e,t,n,s){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),s===void 0&&(s=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=(l=n)==null?void 0:l.errors;if(o!=null){let p=i.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);p>=0||ie(!1),i=i.slice(0,Math.min(i.length,p+1))}let d=!1,u=-1;if(n&&s&&s.v7_partialHydration)for(let p=0;p<i.length;p++){let m=i[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=p),m.route.id){let{loaderData:v,errors:b}=n,N=m.route.loader&&v[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||N){d=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((p,m,v)=>{let b,N=!1,k=null,S=null;n&&(b=o&&m.route.id?o[m.route.id]:void 0,k=m.route.errorElement||lh,d&&(u<0&&v===0?(hh("route-fallback"),N=!0,S=null):u===v&&(N=!0,S=m.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,v+1)),c=()=>{let f;return b?f=k:N?f=S:m.route.Component?f=g.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=p,g.createElement(ih,{match:m,routeContext:{outlet:p,matches:h,isDataRoute:n!=null},children:f})};return n&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?g.createElement(ah,{location:n.location,revalidation:n.revalidation,component:k,error:b,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Cc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cc||{}),Sc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sc||{});function dh(e){let t=g.useContext(Ti);return t||ie(!1),t}function uh(e){let t=g.useContext(eh);return t||ie(!1),t}function ch(e){let t=g.useContext(ar);return t||ie(!1),t}function Mc(e){let t=ch(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function xh(){var e;let t=g.useContext(Nc),n=uh(),s=Mc();return t!==void 0?t:(e=n.errors)==null?void 0:e[s]}function mh(){let{router:e}=dh(Cc.UseNavigateStable),t=Mc(Sc.UseNavigateStable),n=g.useRef(!1);return kc(()=>{n.current=!0}),g.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,_n({fromRouteId:t},a)))},[e,t])}const qo={};function hh(e,t,n){qo[e]||(qo[e]=!0)}function fh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ec(e){let{to:t,replace:n,state:s,relative:l}=e;Un()||ie(!1);let{future:a,static:i}=g.useContext(Hn),{matches:o}=g.useContext(ar),{pathname:d}=il(),u=Bi(),p=yc(t,wc(o,a.v7_relativeSplatPath),d,l==="path"),m=JSON.stringify(p);return g.useEffect(()=>u(JSON.parse(m),{replace:n,state:s,relative:l}),[u,m,l,n,s]),null}function ln(e){ie(!1)}function ph(e){let{basename:t="/",children:n=null,location:s,navigationType:l=Et.Pop,navigator:a,static:i=!1,future:o}=e;Un()&&ie(!1);let d=t.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:d,navigator:a,static:i,future:_n({v7_relativeSplatPath:!1},o)}),[d,o,a,i]);typeof s=="string"&&(s=Fr(s));let{pathname:p="/",search:m="",hash:v="",state:b=null,key:N="default"}=s,k=g.useMemo(()=>{let S=bc(p,d);return S==null?null:{location:{pathname:S,search:m,hash:v,state:b,key:N},navigationType:l}},[d,p,m,v,b,N,l]);return k==null?null:g.createElement(Hn.Provider,{value:u},g.createElement(al.Provider,{children:n,value:k}))}function vh(e){let{children:t,location:n}=e;return rh(Ba(t),n)}new Promise(()=>{});function Ba(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(s,l)=>{if(!g.isValidElement(s))return;let a=[...t,l];if(s.type===g.Fragment){n.push.apply(n,Ba(s.props.children,a));return}s.type!==ln&&ie(!1),!s.props.index||!s.props.children||ie(!1);let i={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(i.children=Ba(s.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const gh="6";try{window.__reactRouterVersion=gh}catch{}const bh="startTransition",ed=f0[bh];function wh(e){let{basename:t,children:n,future:s,window:l}=e,a=g.useRef();a.current==null&&(a.current=Mm({window:l,v5Compat:!0}));let i=a.current,[o,d]=g.useState({action:i.action,location:i.location}),{v7_startTransition:u}=s||{},p=g.useCallback(m=>{u&&ed?ed(()=>d(m)):d(m)},[d,u]);return g.useLayoutEffect(()=>i.listen(p),[i,p]),g.useEffect(()=>fh(s),[s]),g.createElement(ph,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:i,future:s})}var td;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(td||(td={}));var rd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rd||(rd={}));const zc=g.createContext(null),yh=({children:e})=>{const[t,n]=g.useState(null),[s,l]=g.useState(!0);g.useEffect(()=>{const o=localStorage.getItem("user");o&&n(JSON.parse(o)),l(!1)},[]);const a=(o,d)=>{if(o==="user@example.com"&&d==="password123"){const u={email:o,name:"User"};return n(u),localStorage.setItem("user",JSON.stringify(u)),{success:!0}}else return{success:!1,message:"Invalid email or password"}},i=()=>{n(null),localStorage.removeItem("user")};return r.jsx(zc.Provider,{value:{user:t,login:a,logout:i,loading:s},children:!s&&e})},Lc=()=>g.useContext(zc);function jh(){const[e,t]=g.useState("user@example.com"),[n,s]=g.useState("password123"),[l,a]=g.useState(""),[i,o]=g.useState(!1),{login:d}=Lc(),u=Bi(),p=async m=>{m.preventDefault(),a(""),o(!0),setTimeout(()=>{d(e,n)?u("/dashboard"):(a("Invalid credentials. Please try again."),o(!1))},800)};return r.jsxs("div",{className:"min-h-screen w-full flex bg-slate-50 text-slate-900 font-sans",children:[r.jsxs("div",{className:"hidden lg:flex w-1/2 bg-blue-600 relative overflow-hidden items-center justify-center",children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("svg",{className:"h-full w-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0 100 C 20 0 50 0 100 100 Z",fill:"white"})})}),r.jsx("div",{className:"absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"}),r.jsx("div",{className:"absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"}),r.jsxs("div",{className:"relative z-10 text-white p-12 max-w-lg",children:[r.jsx("div",{className:"mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20",children:r.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})})}),r.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Secure Access for Healthcare Professionals"}),r.jsx("p",{className:"text-blue-100 text-lg leading-relaxed",children:"Streamline patient care with our advanced Care Navigator. Secure, efficient, and designed for modern medical teams."}),r.jsxs("div",{className:"mt-8 flex gap-4",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium text-blue-100",children:[r.jsx("svg",{className:"w-5 h-5 text-cyan-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"HIPAA Compliant"]}),r.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium text-blue-100",children:[r.jsx("svg",{className:"w-5 h-5 text-cyan-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"End-to-End Encrypted"]})]})]})]}),r.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center p-8 bg-white",children:r.jsxs("div",{className:"w-full max-w-md",children:[r.jsxs("div",{className:"mb-10",children:[r.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Sign in to Care Navigator"}),r.jsx("p",{className:"text-slate-500 mt-2",children:"Enter your credentials to access the dashboard."})]}),r.jsxs("form",{onSubmit:p,className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Email Address"}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx("svg",{className:"h-5 w-5 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})})}),r.jsx("input",{type:"email",required:!0,className:"block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm",placeholder:"doctor@hospital.com",value:e,onChange:m=>t(m.target.value)})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx("svg",{className:"h-5 w-5 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),r.jsx("input",{type:"password",required:!0,className:"block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm",placeholder:"••••••••",value:n,onChange:m=>s(m.target.value)})]})]}),l&&r.jsxs("div",{className:"p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),l]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("label",{className:"flex items-center",children:[r.jsx("input",{type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"}),r.jsx("span",{className:"ml-2 text-sm text-slate-600",children:"Remember me"})]}),r.jsx("a",{href:"#",className:"text-sm font-medium text-blue-600 hover:text-blue-500",children:"Forgot password?"})]}),r.jsx("button",{type:"submit",disabled:i,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed",children:i?r.jsxs("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):"Sign In"})]}),r.jsxs("div",{className:"mt-6",children:[r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-0 flex items-center",children:r.jsx("div",{className:"w-full border-t border-slate-200"})}),r.jsx("div",{className:"relative flex justify-center text-sm",children:r.jsx("span",{className:"px-2 bg-white text-slate-500",children:"Or continue with"})})]}),r.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[r.jsxs("button",{className:"w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors",children:[r.jsx("span",{className:"sr-only",children:"Sign in with Google"}),r.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{d:"M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.08 2.72-5.2 2.72-7.773 0-.773-.08-1.52-.213-2.24h-10.56z"})})]}),r.jsxs("button",{className:"w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors",children:[r.jsx("span",{className:"sr-only",children:"Sign in with Microsoft"}),r.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{d:"M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"})})]})]})]})]})})]})}function Nh({globalSearch:e="",setGlobalSearch:t=()=>{}}){return r.jsxs("header",{className:"h-14 bg-white border-b border-neutral-200 px-3 lg:px-4 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[r.jsx("div",{className:"text-sm font-semibold truncate",children:"XYZ — Care Navigator"}),r.jsxs("div",{className:"hidden md:flex text-xs text-neutral-500 items-center gap-2 shrink-0",children:[r.jsx("span",{children:"All Tenants"}),r.jsx("span",{children:"•"}),r.jsx("span",{children:"Today"})]})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"relative",children:r.jsx("input",{id:"globalSearch",type:"text",className:"h-9 w-56 lg:w-72 rounded-xl border border-neutral-300 px-3 text-sm focus:outline-none focus:ring focus:ring-neutral-200",placeholder:"Search patients, tasks, docs...",value:e,onChange:n=>t(n.target.value)})}),r.jsx("button",{id:"newBtn",className:"h-9 px-3 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800",children:"New"}),r.jsx("button",{className:"relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"messages",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-neutral-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.39-1.02L3 20l1.37-3.93A7.77 7.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),r.jsx("button",{className:"relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"notifications",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-neutral-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V10a6 6 0 10-12 0v6l-2 2v1h16v-1l-2-2z"})})}),r.jsx("div",{className:"relative",children:r.jsxs("button",{id:"userMenuBtn",className:"flex items-center gap-2 h-9 px-3 rounded-xl hover:bg-neutral-100 transition-colors",children:[r.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold",children:"A"}),r.jsx("span",{className:"text-sm font-medium text-neutral-700",children:"Admin"})]})})]})]})}function kh({leftBarRef:e,onCollapse:t,onShowDashboard:n,onShowTenantSetup:s,onShowDataReporting:l,onShowMasterTables:a,onShowUserManagement:i}){const[o,d]=g.useState(!1),[u,p]=g.useState("dialpad"),[m,v]=g.useState(""),[b,N]=g.useState(!1),[k,S]=g.useState(!1),[h,c]=g.useState([{id:1,author:"them",name:"John Doe",text:"Hello! How can I help you?"},{id:2,author:"me",name:"Me",text:"I need assistance with my care plan."}]),[f,y]=g.useState(""),[M,P]=g.useState(!1),[L,R]=g.useState(""),[Q,V]=g.useState(""),[j,T]=g.useState(""),[D,U]=g.useState(!1);g.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>document.body.style.overflow=""),[o]);function F(){d(!0),p("dialpad")}function ue(){d(!1)}function Ye(O){v(dt=>dt+String(O))}function E(){v(O=>O.slice(0,-1))}function A(){m&&N(!0)}function I(){N(!1)}function K(){S(!0)}function ee(){S(!1)}function nt(){const O=f.trim();O&&(c(dt=>[...dt,{id:Date.now(),author:"me",text:O}]),y(""))}function Be(){P(!0)}function Oe(){P(!1)}function Se(){const O=L.trim(),dt=j.trim();!O||!dt||(R(""),V(""),T(""),P(!1))}function wt(){U(!0)}function ir(){U(!1)}function ol(){U(!1)}return r.jsxs(r.Fragment,{children:[r.jsxs("aside",{id:"leftBar",ref:e,className:"h-full bg-white border-r border-neutral-200 flex flex-col items-center py-3 gap-2",children:[r.jsx("div",{className:"text-[10px] font-semibold tracking-wide",children:"MCP"}),r.jsxs("a",{href:"#",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5l-2 2-2-2H5a2 2 0 01-2-2V7z"})}),r.jsx("span",{className:"tooltip",children:"Tasks"})]}),r.jsxs("a",{href:"#",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M8 7V3m8 4V3M3 10h18M5 21h14a2 2 0 002-2v-9H3v9a2 2 0 002 2z"})}),r.jsx("span",{className:"tooltip",children:"Calendar"})]}),r.jsxs("a",{href:"ptdash.html",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M16 14a4 4 0 10-8 0v1a4 4 0 01-4 4h16a4 4 0 01-4-4v-1zM12 12a4 4 0 100-8 4 4 0 000 8z"})}),r.jsx("span",{className:"tooltip",children:"Patients"})]}),r.jsxs("a",{href:"#",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M8 7V3m8 4V3M3 10h18M5 21h14a2 2 0 002-2v-9H3v9a2 2 0 002 2z"})}),r.jsx("span",{className:"tooltip",children:"Chat"})]}),r.jsxs("button",{id:"openDashboard",onClick:()=>{n&&n()},className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),r.jsx("span",{className:"tooltip",children:"Dashboard"})]}),r.jsxs("button",{id:"openTenantSetup",onClick:()=>{s&&s()},className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),r.jsx("span",{className:"tooltip",children:"Tenant Setup"})]}),r.jsxs("button",{id:"openDataReporting",onClick:()=>{l&&l()},className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),r.jsx("span",{className:"tooltip",children:"Data"})]}),r.jsxs("button",{id:"openMasterTables",onClick:()=>{a&&a()},className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),r.jsx("span",{className:"tooltip",children:"Master"})]}),r.jsxs("button",{id:"openUserManagement",onClick:()=>{i&&i()},className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})}),r.jsx("span",{className:"tooltip",children:"Users"})]}),r.jsxs("div",{className:"mt-auto border-t border-neutral-200 pt-2 flex flex-col gap-2",children:[r.jsxs("button",{id:"openCallSection",onClick:F,className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),r.jsx("span",{className:"tooltip",children:"Call"})]}),r.jsxs("button",{id:"openChatSection",onClick:K,className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),r.jsx("span",{className:"tooltip",children:"Chat"})]}),r.jsxs("button",{id:"openMessageSection",onClick:Be,className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),r.jsx("span",{className:"tooltip",children:"Message"})]}),r.jsxs("button",{id:"openLogoutSection",onClick:wt,className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),r.jsx("span",{className:"tooltip",children:"Logout"})]}),r.jsx("button",{id:"collapseLeft",className:"w-10 h-10 rounded-xl hover:bg-neutral-100",title:"Collapse/expand left",onClick:t,children:r.jsx("svg",{className:"w-5 h-5 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M15 19l-7-7 7-7"})})})]})]}),r.jsxs("aside",{id:"callSection",className:`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${o?"":"hidden"}`,children:[r.jsxs("div",{className:"h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),r.jsx("div",{className:"text-xs font-semibold text-white",children:"Phone"})]}),r.jsx("button",{onClick:ue,className:"closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white","data-section":"callSection",children:r.jsx("svg",{className:"w-3.5 h-3.5 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]}),r.jsx("div",{className:"border-b border-neutral-200 bg-white",children:r.jsxs("div",{className:"flex text-center",children:[r.jsx("button",{onClick:()=>p("dialpad"),className:`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${u==="dialpad"?"text-blue-600 border-b-2 border-blue-600":"text-neutral-600"}`,children:"Dialpad"}),r.jsx("button",{onClick:()=>p("calls"),className:`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${u==="calls"?"text-blue-600 border-b-2 border-blue-600":"text-neutral-600"}`,children:"Calls"}),r.jsx("button",{onClick:()=>p("recordings"),className:`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${u==="recordings"?"text-blue-600 border-b-2 border-blue-600":"text-neutral-600"}`,children:"Recordings"}),r.jsx("button",{onClick:()=>p("hud"),className:`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${u==="hud"?"text-blue-600 border-b-2 border-blue-600":"text-neutral-600"}`,children:"HUD"})]})}),r.jsxs("div",{className:"overflow-y-auto",style:{maxHeight:"calc(85vh - 100px)"},children:[r.jsxs("div",{id:"dialpadTabContent",style:{display:u==="dialpad"?"flex":"none"},className:"tab-content p-3 flex flex-col items-center",children:[r.jsx("div",{className:"w-full mb-3",children:r.jsx("input",{id:"callNumberInput",type:"text",value:m,onChange:O=>v(O.target.value),className:"w-full text-center text-lg py-1.5 px-2 border-b-2 border-neutral-300 focus:border-blue-600 focus:outline-none bg-transparent",placeholder:"Enter a name or number"})}),r.jsx("div",{className:"grid grid-cols-3 gap-2.5 mb-3 w-full max-w-xs",children:[{n:"1",t:""},{n:"2",t:"ABC"},{n:"3",t:"DEF"},{n:"4",t:"GHI"},{n:"5",t:"JKL"},{n:"6",t:"MNO"},{n:"7",t:"PQRS"},{n:"8",t:"TUV"},{n:"9",t:"WXYZ"},{n:"*",t:""},{n:"0",t:"+"},{n:"#",t:""}].map(O=>r.jsxs("button",{onClick:()=>Ye(O.n),"data-number":O.n,className:"dialpad-sticky-btn flex flex-col items-center justify-center w-14 h-14 rounded-full border-2 border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 transition-all",children:[r.jsx("span",{className:"text-lg font-light text-neutral-800",children:O.n}),O.t&&r.jsx("span",{className:"text-[8px] text-neutral-500 uppercase",children:O.t})]},O.n))}),r.jsxs("div",{className:"flex flex-col items-center gap-1.5 mt-2",children:[r.jsx("button",{id:"btnStickyStartCall",onClick:A,className:`${b?"hidden":""} w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 flex items-center justify-center shadow-lg transition-all`,children:r.jsx("svg",{className:"w-5 h-5 text-white",fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),r.jsx("button",{id:"btnStickyEndCall",onClick:I,className:`${b?"":"hidden"} w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 flex items-center justify-center shadow-lg transition-all`,children:r.jsx("svg",{className:"w-5 h-5 text-white",fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"})})}),r.jsx("button",{id:"btnStickyBackspace",onClick:E,className:"text-neutral-600 hover:text-neutral-900 p-1.5 rounded-lg hover:bg-neutral-100",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414-6.414a2 2 0 012.828 0L21 12l-8.758 8.758a2 2 0 01-2.828 0L3 12z"})})})]})]}),u==="calls"&&r.jsx("div",{id:"callsTabContent",className:"tab-content p-3 w-full",children:r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-700",children:"Recent Calls"}),r.jsx("button",{className:"text-xs text-blue-600 hover:text-blue-700",children:"Clear All"})]}),r.jsx("div",{className:"space-y-1",children:r.jsxs("div",{onClick:()=>{v("+1 (555) 123-4567"),p("dialpad")},className:"flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg cursor-pointer",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{d:"M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.923A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"})})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("div",{className:"text-sm font-medium text-neutral-900 truncate",children:"Alice Brown"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"+1 (555) 123-4567"})]}),r.jsx("div",{className:"text-xs text-neutral-400",children:"2m ago"})]})})]})}),u==="recordings"&&r.jsx("div",{id:"recordingsTabContent",className:"tab-content p-3 w-full",children:r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-700",children:"Call Recordings"}),r.jsx("button",{className:"text-xs text-blue-600 hover:text-blue-700",children:"Settings"})]}),r.jsx("div",{className:"space-y-2",children:r.jsx("div",{className:"p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors",children:r.jsxs("div",{className:"flex items-start justify-between mb-2",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"text-sm font-medium text-neutral-900",children:"Alice Brown"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Dec 5, 2025 • 10:30 AM"})]}),r.jsx("span",{className:"text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded",children:"5:34"})]})})})]})}),u==="hud"&&r.jsx("div",{id:"hudTabContent",className:"tab-content p-3 w-full",children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-700",children:"Call Statistics"}),r.jsx("button",{className:"text-xs text-blue-600 hover:text-blue-700",children:"View All"})]}),r.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.jsxs("div",{className:"p-3 bg-green-50 rounded-lg",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1",children:[r.jsx("span",{className:"text-xs text-green-700 font-medium",children:"Answered"}),r.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})})]}),r.jsx("div",{className:"text-2xl font-bold text-green-700",children:"24"}),r.jsx("div",{className:"text-xs text-green-600",children:"Today"})]})})]})})]})]}),r.jsxs("aside",{id:"chatSection",className:`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${k?"":"hidden"}`,children:[r.jsxs("div",{className:"h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),r.jsx("div",{className:"text-xs font-semibold text-white",children:"Chat"})]}),r.jsx("button",{onClick:ee,className:"closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white","data-section":"chatSection",children:r.jsx("svg",{className:"w-3.5 h-3.5 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]}),r.jsxs("div",{className:"p-3 space-y-3 overflow-y-auto",style:{maxHeight:"calc(85vh - 40px)"},children:[r.jsx("div",{className:"h-48 overflow-y-auto border border-neutral-200 rounded-lg p-3 bg-neutral-50 space-y-2 text-sm",children:h.map(O=>r.jsxs("div",{className:`flex gap-2 ${O.author==="me"?"justify-end":""}`,children:[O.author!=="me"&&r.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white text-xs grid place-items-center flex-shrink-0",children:(O.name||"JD").split(" ").map(dt=>dt[0]).join("").slice(0,2)}),r.jsxs("div",{className:`${O.author==="me"?"bg-blue-600 text-white rounded-lg p-2 shadow-sm":"bg-white rounded-lg p-2 shadow-sm"}`,children:[O.author!=="me"&&r.jsx("div",{className:"font-medium text-xs text-neutral-600",children:O.name||"John Doe"}),r.jsx("div",{children:O.text})]})]},O.id))}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("input",{value:f,onChange:O=>y(O.target.value),className:"flex-1 h-9 rounded-lg border border-neutral-300 px-3 text-sm",placeholder:"Type a message…"}),r.jsx("button",{onClick:nt,className:"px-4 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm",children:"Send"})]})]})]}),r.jsxs("aside",{id:"messageSection",className:`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${M?"":"hidden"}`,children:[r.jsxs("div",{className:"h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),r.jsx("div",{className:"text-xs font-semibold text-white",children:"Message"})]}),r.jsx("button",{onClick:Oe,className:"closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white","data-section":"messageSection",children:r.jsx("svg",{className:"w-3.5 h-3.5 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]}),r.jsxs("div",{className:"p-3 space-y-3 overflow-y-auto",style:{maxHeight:"calc(85vh - 40px)"},children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-neutral-600 font-medium",children:"To"}),r.jsx("input",{value:L,onChange:O=>R(O.target.value),className:"w-full h-8 rounded-lg border border-neutral-300 px-2.5 text-xs mt-1",placeholder:"Email or phone number"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-neutral-600 font-medium",children:"Subject"}),r.jsx("input",{value:Q,onChange:O=>V(O.target.value),className:"w-full h-8 rounded-lg border border-neutral-300 px-2.5 text-xs mt-1",placeholder:"Enter subject"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-neutral-600 font-medium",children:"Message"}),r.jsx("textarea",{value:j,onChange:O=>T(O.target.value),rows:4,className:"w-full rounded-lg border border-neutral-300 p-2.5 text-xs mt-1",placeholder:"Type your message…"})]}),r.jsx("button",{onClick:Se,className:"w-full h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs",children:"Send Message"})]})]}),r.jsxs("aside",{id:"logoutSection",className:`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${D?"":"hidden"}`,children:[r.jsxs("div",{className:"h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),r.jsx("div",{className:"text-xs font-semibold text-white",children:"Logout"})]}),r.jsx("button",{onClick:ir,className:"closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white","data-section":"logoutSection",children:r.jsx("svg",{className:"w-3.5 h-3.5 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]}),r.jsxs("div",{className:"p-3 space-y-3 overflow-y-auto",style:{maxHeight:"calc(85vh - 40px)"},children:[r.jsxs("div",{className:"flex items-center gap-2.5 p-2.5 bg-neutral-50 rounded-lg",children:[r.jsx("div",{className:"w-10 h-10 rounded-full bg-neutral-900 text-white text-sm grid place-items-center",children:"JD"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs font-semibold",children:"John Doe"}),r.jsx("div",{className:"text-[10px] text-neutral-500",children:"john.doe@example.com"})]})]}),r.jsx("div",{className:"text-xs text-neutral-600",children:"Are you sure you want to logout from your account?"}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:ir,className:"flex-1 h-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs",children:"Cancel"}),r.jsx("button",{onClick:ol,className:"flex-1 h-8 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs",children:"Logout"})]})]})]})]})}function Ch({rightBarRef:e,onCollapse:t}){return r.jsxs("aside",{id:"rightBar",ref:e,className:"w-16 bg-gradient-to-b from-indigo-50 to-white border-l-2 border-indigo-200 flex flex-col items-center py-3 gap-2 shadow-lg",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md",children:r.jsxs("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),r.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),r.jsx("div",{className:"text-[9px] font-bold text-indigo-700 tracking-wider",children:"UTILITIES"}),r.jsxs("button",{id:"openScheduling",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),r.jsx("span",{className:"tooltip",children:"Scheduling"})]}),r.jsxs("button",{id:"openCommConfig",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),r.jsx("span",{className:"tooltip",children:"Communication"})]}),r.jsxs("button",{id:"openEmailTemplates",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),r.jsx("span",{className:"tooltip",children:"Email Templates"})]}),r.jsxs("button",{id:"openSMSTemplates",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})}),r.jsx("span",{className:"tooltip",children:"SMS Templates"})]}),r.jsxs("button",{id:"openNotificationSettings",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),r.jsx("span",{className:"tooltip",children:"Notifications"})]}),r.jsxs("button",{id:"openWorkflows",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M13 10V3L4 14h7v7l9-11h-7z"})}),r.jsx("span",{className:"tooltip",children:"Workflows"})]}),r.jsxs("button",{id:"openIntegrations",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"})}),r.jsx("span",{className:"tooltip",children:"Integrations"})]}),r.jsxs("button",{id:"openBackup",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),r.jsx("span",{className:"tooltip",children:"Backup & Restore"})]}),r.jsxs("div",{className:"mt-auto border-t-2 border-indigo-200 pt-2 flex flex-col gap-2",children:[r.jsxs("button",{id:"openSystemHealth",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-green-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),r.jsx("span",{className:"tooltip",children:"System Health"})]}),r.jsxs("button",{id:"openAPIDocs",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),r.jsx("span",{className:"tooltip",children:"API Docs"})]}),r.jsxs("button",{id:"openUtilitySettings",className:"nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group",children:[r.jsx("svg",{className:"w-5 h-5 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})}),r.jsx("span",{className:"tooltip",children:"Utility Settings"})]}),r.jsx("button",{id:"collapseRight",className:"w-10 h-10 rounded-xl hover:bg-indigo-100",title:"Collapse/expand utilities",onClick:t,children:r.jsx("svg",{className:"w-5 h-5 mx-auto text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 5l7 7-7 7"})})})]})]})}function Sh({rightListPaneRef:e,navigate:t}){const n=[{id:"exp",name:"Export Data",updated:"Now",desc:"CSV/XLSX export wizard"},{id:"imp",name:"Import Data",updated:"Today",desc:"Map + validate incoming fields"},{id:"aud",name:"Audit Log",updated:"Yesterday",desc:"User actions & PHI access trail"},{id:"rep",name:"Reports",updated:"2025-08-10",desc:"Operational KPIs & dashboards",action:()=>t("/rbc")},{id:"cfg",name:"Configuration",updated:"2025-08-07",desc:"Columns, roles, policies"}];return r.jsxs("section",{id:"rightListPane",ref:e,className:"w-[300px] min-w-[220px] max-w-[440px] bg-white border-l border-neutral-200 flex flex-col",children:[r.jsxs("div",{className:"h-12 px-3 flex items-center justify-between border-b border-neutral-200",children:[r.jsx("div",{className:"text-sm font-semibold",children:"Tools"}),r.jsx("div",{className:"flex items-center gap-1",children:r.jsx("button",{className:"h-8 w-8 rounded-lg hover:bg-neutral-100",title:"Refresh",onClick:()=>{},children:r.jsx("svg",{className:"w-4 h-4 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M4 4v6h6M20 20v-6h-6M20 9a8 8 0 10-3.3 6.5"})})})})]}),r.jsx("div",{id:"rightListItems",className:"flex-1 overflow-y-auto divide-y divide-neutral-200 text-sm",children:n.map(s=>r.jsxs("div",{className:"px-3 py-3 hover:bg-neutral-50 cursor-pointer",onClick:()=>{s.action&&s.action()},children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"text-sm font-medium",children:s.name}),r.jsx("span",{className:"text-[11px] text-neutral-500",children:s.updated})]}),r.jsx("div",{className:"text-xs text-neutral-500 truncate",children:s.desc})]},s.id))})]})}function Mh({onClose:e}){const[t,n]=g.useState("overview");function s({name:l,label:a}){const i=t===l,o="px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap",d=i?"text-indigo-600 border-indigo-600":"text-neutral-600 border-transparent hover:text-neutral-900 hover:border-neutral-300";return r.jsx("button",{onClick:()=>n(l),"aria-pressed":i,className:`dash-tab ${o} ${d}`,"data-tab":l,children:a})}return r.jsxs("div",{id:"dashboardView",className:"flex flex-col h-full",children:[r.jsxs("div",{className:"h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-white",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("svg",{className:"w-6 h-6 text-indigo-600",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-base font-semibold text-neutral-900",children:"XYZ Plan Dashboard"}),r.jsx("p",{className:"text-xs text-neutral-500",children:"Real-time insights and analytics"})]})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsxs("button",{className:"h-8 px-3 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50 flex items-center gap-1",children:[r.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Export"]}),r.jsx("button",{id:"closeDashboard",className:"h-8 w-8 rounded-lg hover:bg-neutral-100",onClick:e,children:r.jsx("svg",{className:"w-4 h-4 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]})]}),r.jsx("div",{className:"border-b border-neutral-200 bg-white",children:r.jsxs("div",{className:"flex overflow-x-auto px-4",children:[r.jsx(s,{name:"overview",label:"Overview"}),r.jsx(s,{name:"patients",label:"Patient Analytics"}),r.jsx(s,{name:"care",label:"Care Quality"}),r.jsx(s,{name:"financial",label:"Financial"}),r.jsx(s,{name:"operations",label:"Operations"})]})}),r.jsxs("div",{className:"flex-1 overflow-y-auto p-6 bg-neutral-50",children:[r.jsxs("div",{id:"dashOverview",className:t==="overview"?"dash-content":"dash-content hidden",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600",children:"Total Patients"}),r.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center",children:r.jsx("svg",{className:"w-4 h-4 text-blue-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})})]}),r.jsx("div",{className:"text-2xl font-bold text-neutral-900",children:"1,248"}),r.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[r.jsx("span",{className:"text-xs text-green-600 font-medium",children:"↑ 12%"}),r.jsx("span",{className:"text-xs text-neutral-500",children:"vs last month"})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600",children:"Active Care Plans"}),r.jsx("div",{className:"w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center",children:r.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})})})]}),r.jsx("div",{className:"text-2xl font-bold text-neutral-900",children:"892"}),r.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[r.jsx("span",{className:"text-xs text-green-600 font-medium",children:"↑ 8%"}),r.jsx("span",{className:"text-xs text-neutral-500",children:"completion rate"})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600",children:"Avg Response Time"}),r.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center",children:r.jsx("svg",{className:"w-4 h-4 text-amber-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),r.jsx("div",{className:"text-2xl font-bold text-neutral-900",children:"2.4h"}),r.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[r.jsx("span",{className:"text-xs text-green-600 font-medium",children:"↓ 18%"}),r.jsx("span",{className:"text-xs text-neutral-500",children:"improvement"})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600",children:"Patient Satisfaction"}),r.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center",children:r.jsx("svg",{className:"w-4 h-4 text-purple-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),r.jsx("div",{className:"text-2xl font-bold text-neutral-900",children:"4.8/5.0"}),r.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[r.jsx("span",{className:"text-xs text-green-600 font-medium",children:"↑ 0.3"}),r.jsx("span",{className:"text-xs text-neutral-500",children:"from 4.5"})]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900",children:"Patient Enrollment Trend"}),r.jsxs("select",{className:"text-xs border border-neutral-300 rounded px-2 py-1",children:[r.jsx("option",{children:"Last 6 Months"}),r.jsx("option",{children:"Last Year"})]})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-neutral-600",children:"January"}),r.jsx("span",{className:"text-xs font-semibold",children:"198"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:"75%"}})}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-neutral-600",children:"February"}),r.jsx("span",{className:"text-xs font-semibold",children:"215"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:"82%"}})}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-neutral-600",children:"March"}),r.jsx("span",{className:"text-xs font-semibold",children:"243"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:"92%"}})}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-neutral-600",children:"April"}),r.jsx("span",{className:"text-xs font-semibold",children:"264"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:"100%"}})})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Patient Risk Distribution"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-xs text-neutral-600",children:"High Risk"}),r.jsx("span",{className:"text-xs font-semibold text-red-600",children:"156 (12.5%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-red-500 h-3 rounded-full",style:{width:"12.5%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-xs text-neutral-600",children:"Medium Risk"}),r.jsx("span",{className:"text-xs font-semibold text-yellow-600",children:"437 (35%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-yellow-500 h-3 rounded-full",style:{width:"35%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-xs text-neutral-600",children:"Low Risk"}),r.jsx("span",{className:"text-xs font-semibold text-green-600",children:"655 (52.5%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-green-500 h-3 rounded-full",style:{width:"52.5%"}})})]})]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Recent Activities"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-start gap-3 pb-3 border-b border-neutral-100",children:[r.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0",children:r.jsxs("svg",{className:"w-4 h-4 text-blue-600",fill:"currentColor",viewBox:"0 0 20 20",children:[r.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),r.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})]})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-xs font-medium text-neutral-900",children:"Care Plan Updated"}),r.jsx("p",{className:"text-xs text-neutral-500",children:"Patient #1024 care plan reviewed"}),r.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"2 hours ago"})]})]}),r.jsxs("div",{className:"flex items-start gap-3 pb-3 border-b border-neutral-100",children:[r.jsx("div",{className:"w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-xs font-medium text-neutral-900",children:"New Patient Enrolled"}),r.jsx("p",{className:"text-xs text-neutral-500",children:"Sarah Johnson added to system"}),r.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"4 hours ago"})]})]}),r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0",children:r.jsxs("svg",{className:"w-4 h-4 text-purple-600",fill:"currentColor",viewBox:"0 0 20 20",children:[r.jsx("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),r.jsx("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})]})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-xs font-medium text-neutral-900",children:"Message Received"}),r.jsx("p",{className:"text-xs text-neutral-500",children:"Dr. Smith sent care notes"}),r.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"5 hours ago"})]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Critical Alerts"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg",children:[r.jsx("svg",{className:"w-5 h-5 text-red-600 flex-shrink-0 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-xs font-semibold text-red-900",children:"High Risk Patient Alert"}),r.jsx("p",{className:"text-xs text-red-700",children:"Patient #1087 - Vitals abnormal"}),r.jsx("button",{className:"text-xs text-red-600 font-medium hover:text-red-700 mt-1",children:"Review Now →"})]})]}),r.jsxs("div",{className:"flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg",children:[r.jsx("svg",{className:"w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-xs font-semibold text-amber-900",children:"Medication Review Due"}),r.jsx("p",{className:"text-xs text-amber-700",children:"15 patients need review today"}),r.jsx("button",{className:"text-xs text-amber-600 font-medium hover:text-amber-700 mt-1",children:"View List →"})]})]}),r.jsxs("div",{className:"flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg",children:[r.jsx("svg",{className:"w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-xs font-semibold text-blue-900",children:"Upcoming Appointments"}),r.jsx("p",{className:"text-xs text-blue-700",children:"28 scheduled for tomorrow"}),r.jsx("button",{className:"text-xs text-blue-600 font-medium hover:text-blue-700 mt-1",children:"View Schedule →"})]})]})]})]})]})]}),r.jsxs("div",{id:"dashPatients",className:t==="patients"?"dash-content":"dash-content hidden",children:[r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Age Demographics"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"18-35 years"}),r.jsx("span",{className:"font-semibold",children:"18%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"18%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"36-50 years"}),r.jsx("span",{className:"font-semibold",children:"28%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"28%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"51-65 years"}),r.jsx("span",{className:"font-semibold",children:"35%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-amber-500 h-2 rounded-full",style:{width:"35%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"65+ years"}),r.jsx("span",{className:"font-semibold",children:"19%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-purple-500 h-2 rounded-full",style:{width:"19%"}})})]})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Gender Distribution"}),r.jsxs("div",{className:"flex items-center justify-center h-32",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl font-bold text-blue-600",children:"52%"}),r.jsx("div",{className:"text-xs text-neutral-600",children:"Female"})]}),r.jsx("div",{className:"mx-6 h-20 w-px bg-neutral-200"}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl font-bold text-indigo-600",children:"48%"}),r.jsx("div",{className:"text-xs text-neutral-600",children:"Male"})]})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Top Chronic Conditions"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between p-2 bg-neutral-50 rounded",children:[r.jsx("span",{className:"text-xs text-neutral-700",children:"Hypertension"}),r.jsx("span",{className:"text-xs font-semibold text-neutral-900",children:"432"})]}),r.jsxs("div",{className:"flex items-center justify-between p-2 bg-neutral-50 rounded",children:[r.jsx("span",{className:"text-xs text-neutral-700",children:"Diabetes Type 2"}),r.jsx("span",{className:"text-xs font-semibold text-neutral-900",children:"368"})]}),r.jsxs("div",{className:"flex items-center justify-between p-2 bg-neutral-50 rounded",children:[r.jsx("span",{className:"text-xs text-neutral-700",children:"COPD"}),r.jsx("span",{className:"text-xs font-semibold text-neutral-900",children:"245"})]}),r.jsxs("div",{className:"flex items-center justify-between p-2 bg-neutral-50 rounded",children:[r.jsx("span",{className:"text-xs text-neutral-700",children:"Heart Disease"}),r.jsx("span",{className:"text-xs font-semibold text-neutral-900",children:"198"})]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm mb-4",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Patient Engagement Metrics"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"87%"}),r.jsx("div",{className:"text-xs text-neutral-600 mt-1",children:"Portal Usage"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl font-bold text-green-600",children:"92%"}),r.jsx("div",{className:"text-xs text-neutral-600 mt-1",children:"Appointment Adherence"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl font-bold text-purple-600",children:"78%"}),r.jsx("div",{className:"text-xs text-neutral-600 mt-1",children:"Medication Compliance"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl font-bold text-amber-600",children:"4.6/5"}),r.jsx("div",{className:"text-xs text-neutral-600 mt-1",children:"Satisfaction Score"})]})]})]})]}),r.jsxs("div",{id:"dashCare",className:t==="care"?"dash-content":"dash-content hidden",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Care Plan Adherence"}),r.jsx("div",{className:"text-2xl font-bold text-green-600",children:"94%"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"Target: 90%"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Quality Score"}),r.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"8.7/10"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"Industry Avg: 7.5"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Readmission Rate"}),r.jsx("div",{className:"text-2xl font-bold text-amber-600",children:"4.2%"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"↓ 1.3% vs last quarter"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Preventive Care"}),r.jsx("div",{className:"text-2xl font-bold text-purple-600",children:"89%"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"Screening completion"})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Quality Indicators by Category"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Clinical Outcomes"}),r.jsx("span",{className:"font-semibold text-green-600",children:"Excellent (95%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-green-500 h-3 rounded-full",style:{width:"95%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Patient Safety"}),r.jsx("span",{className:"font-semibold text-green-600",children:"Excellent (92%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-green-500 h-3 rounded-full",style:{width:"92%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Care Coordination"}),r.jsx("span",{className:"font-semibold text-blue-600",children:"Good (88%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-blue-500 h-3 rounded-full",style:{width:"88%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Documentation Quality"}),r.jsx("span",{className:"font-semibold text-amber-600",children:"Fair (76%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-amber-500 h-3 rounded-full",style:{width:"76%"}})})]})]})]})]}),r.jsxs("div",{id:"dashFinancial",className:t==="financial"?"dash-content":"dash-content hidden",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Monthly Revenue"}),r.jsx("div",{className:"text-2xl font-bold text-green-600",children:"$1.2M"}),r.jsx("div",{className:"text-xs text-green-600 mt-1",children:"↑ 15% MoM"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Operating Costs"}),r.jsx("div",{className:"text-2xl font-bold text-neutral-900",children:"$845K"}),r.jsx("div",{className:"text-xs text-green-600 mt-1",children:"↓ 3% efficiency gain"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Claims Pending"}),r.jsx("div",{className:"text-2xl font-bold text-amber-600",children:"$234K"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"128 claims"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Collection Rate"}),r.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"96.5%"}),r.jsx("div",{className:"text-xs text-green-600 mt-1",children:"Above target"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Revenue by Payer"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-center justify-between p-3 bg-blue-50 rounded",children:[r.jsx("span",{className:"text-xs font-medium",children:"Medicare"}),r.jsx("span",{className:"text-sm font-bold text-blue-600",children:"$485K (40%)"})]}),r.jsxs("div",{className:"flex items-center justify-between p-3 bg-green-50 rounded",children:[r.jsx("span",{className:"text-xs font-medium",children:"Private Insurance"}),r.jsx("span",{className:"text-sm font-bold text-green-600",children:"$425K (35%)"})]}),r.jsxs("div",{className:"flex items-center justify-between p-3 bg-purple-50 rounded",children:[r.jsx("span",{className:"text-xs font-medium",children:"Medicaid"}),r.jsx("span",{className:"text-sm font-bold text-purple-600",children:"$215K (18%)"})]}),r.jsxs("div",{className:"flex items-center justify-between p-3 bg-neutral-50 rounded",children:[r.jsx("span",{className:"text-xs font-medium",children:"Self-Pay"}),r.jsx("span",{className:"text-sm font-bold text-neutral-600",children:"$75K (7%)"})]})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Cost Breakdown"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"Personnel"}),r.jsx("span",{className:"font-semibold",children:"$420K (50%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-indigo-500 h-2 rounded-full",style:{width:"50%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"Facilities"}),r.jsx("span",{className:"font-semibold",children:"$210K (25%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"25%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"Technology"}),r.jsx("span",{className:"font-semibold",children:"$125K (15%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"15%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[r.jsx("span",{children:"Other"}),r.jsx("span",{className:"font-semibold",children:"$90K (10%)"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-2",children:r.jsx("div",{className:"bg-amber-500 h-2 rounded-full",style:{width:"10%"}})})]})]})]})]})]}),r.jsxs("div",{id:"dashOperations",className:t==="operations"?"dash-content":"dash-content hidden",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Staff Utilization"}),r.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"87%"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"Optimal range: 80-90%"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Avg Wait Time"}),r.jsx("div",{className:"text-2xl font-bold text-green-600",children:"12min"}),r.jsx("div",{className:"text-xs text-green-600 mt-1",children:"↓ 3min improvement"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"Task Completion"}),r.jsx("div",{className:"text-2xl font-bold text-purple-600",children:"94%"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"On-time rate"})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-600 mb-2",children:"System Uptime"}),r.jsx("div",{className:"text-2xl font-bold text-green-600",children:"99.8%"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"Last 30 days"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Team Performance"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-center justify-between p-3 border border-neutral-200 rounded",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-xs font-medium text-neutral-900",children:"Care Coordinators"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"24 active staff"})]}),r.jsxs("div",{className:"text-right",children:[r.jsx("div",{className:"text-sm font-bold text-green-600",children:"98%"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"efficiency"})]})]}),r.jsxs("div",{className:"flex items-center justify-between p-3 border border-neutral-200 rounded",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-xs font-medium text-neutral-900",children:"Nurses"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"18 active staff"})]}),r.jsxs("div",{className:"text-right",children:[r.jsx("div",{className:"text-sm font-bold text-blue-600",children:"92%"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"efficiency"})]})]}),r.jsxs("div",{className:"flex items-center justify-between p-3 border border-neutral-200 rounded",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-xs font-medium text-neutral-900",children:"Admin Staff"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"12 active staff"})]}),r.jsxs("div",{className:"text-right",children:[r.jsx("div",{className:"text-sm font-bold text-purple-600",children:"89%"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"efficiency"})]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Resource Allocation"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Direct Patient Care"}),r.jsx("span",{className:"font-semibold",children:"65%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-blue-500 h-3 rounded-full",style:{width:"65%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Documentation"}),r.jsx("span",{className:"font-semibold",children:"20%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-green-500 h-3 rounded-full",style:{width:"20%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Coordination"}),r.jsx("span",{className:"font-semibold",children:"10%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-purple-500 h-3 rounded-full",style:{width:"10%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[r.jsx("span",{className:"font-medium",children:"Training"}),r.jsx("span",{className:"font-semibold",children:"5%"})]}),r.jsx("div",{className:"w-full bg-neutral-100 rounded-full h-3",children:r.jsx("div",{className:"bg-amber-500 h-3 rounded-full",style:{width:"5%"}})})]})]})]})]})]})]})]})}function Eh({onClose:e}){const[t,n]=g.useState("list");function s({name:l,label:a}){const i=t===l,o="px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap",d=i?"text-emerald-600 border-emerald-600":"text-neutral-600 border-transparent hover:text-neutral-900 hover:border-neutral-300";return r.jsx("button",{onClick:()=>n(l),"aria-pressed":i,className:`tenant-tab ${o} ${d}`,"data-tab":l,children:a})}return r.jsxs("div",{id:"tenantSetupView",className:"flex flex-col h-full",children:[r.jsxs("div",{className:"h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-white",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("svg",{className:"w-6 h-6 text-emerald-600",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-base font-semibold text-neutral-900",children:"Tenant Management"}),r.jsx("p",{className:"text-xs text-neutral-500",children:"Onboard new clients and manage tenant settings"})]})]}),r.jsx("button",{id:"closeTenantSetup",className:"h-8 w-8 rounded-lg hover:bg-neutral-100",onClick:e,children:r.jsx("svg",{className:"w-4 h-4 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]}),r.jsx("div",{className:"border-b border-neutral-200 bg-white",children:r.jsxs("div",{className:"flex overflow-x-auto px-4",children:[r.jsx(s,{name:"list",label:"All Tenants"}),r.jsx(s,{name:"create",label:"Create New Tenant"})]})}),r.jsxs("div",{className:"flex-1 overflow-y-auto p-6 bg-neutral-50",children:[r.jsxs("div",{id:"tenantList",className:t==="list"?"tenant-content":"tenant-content hidden",children:[r.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("input",{type:"text",id:"searchTenants",placeholder:"Search tenants...",className:"h-9 w-64 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"}),r.jsxs("select",{className:"h-9 rounded-lg border border-neutral-300 px-3 text-sm",children:[r.jsx("option",{children:"All Status"}),r.jsx("option",{children:"Active"}),r.jsx("option",{children:"Inactive"}),r.jsx("option",{children:"Trial"})]})]}),r.jsxs("button",{id:"showCreateTenant",onClick:()=>n("create"),className:"h-9 px-4 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 4v16m8-8H4"})}),"Create New Tenant"]})]}),r.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow",children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsx("div",{className:"w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center",children:r.jsx("span",{className:"text-lg font-bold text-blue-600",children:"XYZ"})}),r.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded",children:"Active"})]}),r.jsx("h3",{className:"text-base font-semibold text-neutral-900 mb-1",children:"XYZ Plan"}),r.jsx("p",{className:"text-xs text-neutral-500 mb-3",children:"xyz.example.com"}),r.jsxs("div",{className:"space-y-2 mb-4 text-xs",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Patients:"}),r.jsx("span",{className:"font-semibold",children:"1,248"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Users:"}),r.jsx("span",{className:"font-semibold",children:"54"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Created:"}),r.jsx("span",{className:"font-semibold",children:"Jan 2024"})]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"Configure"}),r.jsx("button",{className:"flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"View"})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow",children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsx("div",{className:"w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center",children:r.jsx("span",{className:"text-lg font-bold text-purple-600",children:"HF"})}),r.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded",children:"Active"})]}),r.jsx("h3",{className:"text-base font-semibold text-neutral-900 mb-1",children:"HealthFirst Care"}),r.jsx("p",{className:"text-xs text-neutral-500 mb-3",children:"healthfirst.example.com"}),r.jsxs("div",{className:"space-y-2 mb-4 text-xs",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Patients:"}),r.jsx("span",{className:"font-semibold",children:"892"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Users:"}),r.jsx("span",{className:"font-semibold",children:"38"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Created:"}),r.jsx("span",{className:"font-semibold",children:"Mar 2024"})]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"Configure"}),r.jsx("button",{className:"flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"View"})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow",children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsx("div",{className:"w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center",children:r.jsx("span",{className:"text-lg font-bold text-amber-600",children:"CC"})}),r.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded",children:"Trial"})]}),r.jsx("h3",{className:"text-base font-semibold text-neutral-900 mb-1",children:"CareConnect"}),r.jsx("p",{className:"text-xs text-neutral-500 mb-3",children:"careconnect.example.com"}),r.jsxs("div",{className:"space-y-2 mb-4 text-xs",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Patients:"}),r.jsx("span",{className:"font-semibold",children:"156"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Users:"}),r.jsx("span",{className:"font-semibold",children:"12"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-neutral-600",children:"Created:"}),r.jsx("span",{className:"font-semibold",children:"Nov 2024"})]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"Configure"}),r.jsx("button",{className:"flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"View"})]})]})]})]}),r.jsxs("div",{id:"tenantCreate",className:t==="create"?"tenant-content":"tenant-content hidden",children:[r.jsx("div",{className:"mb-6",children:r.jsxs("div",{className:"flex items-center justify-between max-w-4xl mx-auto",children:[r.jsx("div",{className:"flex-1",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{id:"step1Indicator",className:"w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold text-sm",children:"1"}),r.jsxs("div",{className:"ml-3",children:[r.jsx("div",{className:"text-sm font-semibold text-neutral-900",children:"Basic Info"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Company details"})]})]})}),r.jsx("div",{className:"flex-1 h-px bg-neutral-300 mx-4"}),r.jsx("div",{className:"flex-1",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{id:"step2Indicator",className:"w-10 h-10 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-semibold text-sm",children:"2"}),r.jsxs("div",{className:"ml-3",children:[r.jsx("div",{className:"text-sm font-semibold text-neutral-600",children:"Configuration"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Email & Database"})]})]})}),r.jsx("div",{className:"flex-1 h-px bg-neutral-300 mx-4"}),r.jsx("div",{className:"flex-1",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{id:"step3Indicator",className:"w-10 h-10 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-semibold text-sm",children:"3"}),r.jsxs("div",{className:"ml-3",children:[r.jsx("div",{className:"text-sm font-semibold text-neutral-600",children:"Branding"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Logo & Theme"})]})]})}),r.jsx("div",{className:"flex-1 h-px bg-neutral-300 mx-4"}),r.jsx("div",{className:"flex-1",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{id:"step4Indicator",className:"w-10 h-10 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-semibold text-sm",children:"4"}),r.jsxs("div",{className:"ml-3",children:[r.jsx("div",{className:"text-sm font-semibold text-neutral-600",children:"Review"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Confirm & Deploy"})]})]})})]})}),r.jsxs("div",{className:"max-w-4xl mx-auto bg-white rounded-lg border border-neutral-200 shadow-sm p-6",children:[r.jsxs("div",{id:"step1Content",className:"setup-step",children:[r.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-4",children:"Basic Information"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Tenant Name *"}),r.jsx("input",{type:"text",id:"tenantName",required:!0,className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"e.g., XYZ Plan"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Subdomain *"}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{type:"text",id:"tenantSubdomain",required:!0,className:"w-full h-10 rounded-lg border border-neutral-300 px-3 pr-32 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"xyz"}),r.jsx("span",{className:"absolute right-3 top-2.5 text-sm text-neutral-500",children:".careplan.com"})]})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Company Name *"}),r.jsx("input",{type:"text",id:"companyName",required:!0,className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"XYZ Healthcare Inc."})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Admin Email *"}),r.jsx("input",{type:"email",id:"adminEmail",required:!0,className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"admin@xyz.com"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Admin Phone"}),r.jsx("input",{type:"tel",id:"adminPhone",className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"(555) 123-4567"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Address"}),r.jsx("textarea",{id:"tenantAddress",rows:"2",className:"w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"123 Healthcare Ave, Medical City, ST 12345"})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Plan Type *"}),r.jsxs("select",{id:"planType",required:!0,className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",children:[r.jsx("option",{value:"",children:"Select Plan"}),r.jsx("option",{value:"trial",children:"Trial (30 days)"}),r.jsx("option",{value:"basic",children:"Basic"}),r.jsx("option",{value:"professional",children:"Professional"}),r.jsx("option",{value:"enterprise",children:"Enterprise"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Max Users"}),r.jsx("input",{type:"number",id:"maxUsers",defaultValue:"50",className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"50"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Max Patients"}),r.jsx("input",{type:"number",id:"maxPatients",defaultValue:"1000",className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"1000"})]})]})]})]}),r.jsxs("div",{id:"step2Content",className:"setup-step hidden",children:[r.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-4",children:"Email & Database Configuration"}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[r.jsxs("h4",{className:"text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2",children:[r.jsx("svg",{className:"w-5 h-5 text-blue-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Email Configuration"]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"SMTP Host *"}),r.jsx("input",{type:"text",id:"smtpHost",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"smtp.gmail.com"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"SMTP Port *"}),r.jsx("input",{type:"number",id:"smtpPort",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"587",defaultValue:"587"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"SMTP Username *"}),r.jsx("input",{type:"text",id:"smtpUser",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"noreply@xyz.com"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"SMTP Password *"}),r.jsx("input",{type:"password",id:"smtpPassword",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"••••••••"})]}),r.jsxs("div",{className:"col-span-2",children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"From Email *"}),r.jsx("input",{type:"email",id:"fromEmail",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"noreply@xyz.com"})]})]}),r.jsx("button",{id:"testEmailBtn",className:"mt-3 h-8 px-4 rounded-lg border border-blue-300 text-blue-700 text-xs font-medium hover:bg-blue-100",children:"Test Email Connection"})]}),r.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg border border-purple-200",children:[r.jsxs("h4",{className:"text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2",children:[r.jsx("svg",{className:"w-5 h-5 text-purple-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})}),"Database Configuration"]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"Database Host *"}),r.jsx("input",{type:"text",id:"dbHost",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"localhost",defaultValue:"localhost"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"Database Port *"}),r.jsx("input",{type:"number",id:"dbPort",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"5432",defaultValue:"5432"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"Database Name *"}),r.jsx("input",{type:"text",id:"dbName",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"tenant_xyz"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"Database User *"}),r.jsx("input",{type:"text",id:"dbUser",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"db_user"})]}),r.jsxs("div",{className:"col-span-2",children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"Database Password *"}),r.jsx("input",{type:"password",id:"dbPassword",required:!0,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"••••••••"})]})]}),r.jsx("button",{id:"testDbBtn",className:"mt-3 h-8 px-4 rounded-lg border border-purple-300 text-purple-700 text-xs font-medium hover:bg-purple-100",children:"Test Database Connection"})]}),r.jsxs("div",{className:"p-4 bg-neutral-50 rounded-lg border border-neutral-200",children:[r.jsx("h4",{className:"text-sm font-semibold text-neutral-900 mb-3",children:"Additional Settings"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[r.jsx("input",{type:"checkbox",id:"enableSSL",className:"w-4 h-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"}),r.jsx("span",{className:"text-sm text-neutral-700",children:"Enable SSL/TLS"})]}),r.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[r.jsx("input",{type:"checkbox",id:"enableBackup",defaultChecked:!0,className:"w-4 h-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"}),r.jsx("span",{className:"text-sm text-neutral-700",children:"Enable Daily Backups"})]}),r.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[r.jsx("input",{type:"checkbox",id:"enableMonitoring",defaultChecked:!0,className:"w-4 h-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"}),r.jsx("span",{className:"text-sm text-neutral-700",children:"Enable System Monitoring"})]})]})]})]})]}),r.jsxs("div",{id:"step3Content",className:"setup-step hidden",children:[r.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-4",children:"Branding & Theme"}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"p-4 bg-neutral-50 rounded-lg border border-neutral-200",children:[r.jsx("h4",{className:"text-sm font-semibold text-neutral-900 mb-3",children:"Logo"}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{id:"logoPreview",className:"w-24 h-24 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center bg-white",children:r.jsx("svg",{className:"w-8 h-8 text-neutral-400",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),r.jsxs("div",{className:"flex-1",children:[r.jsxs("label",{className:"cursor-pointer inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-sm font-medium",children:[r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),"Upload Logo",r.jsx("input",{type:"file",id:"logoUpload",accept:"image/*",className:"hidden"})]}),r.jsx("p",{className:"text-xs text-neutral-500 mt-2",children:"PNG, JPG or SVG. Max 2MB. Recommended: 200x200px"})]})]})]}),r.jsxs("div",{className:"p-4 bg-neutral-50 rounded-lg border border-neutral-200",children:[r.jsx("h4",{className:"text-sm font-semibold text-neutral-900 mb-3",children:"Theme Colors"}),r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Primary Color"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("input",{type:"color",id:"primaryColor",defaultValue:"#3b82f6",className:"w-12 h-10 rounded border border-neutral-300 cursor-pointer"}),r.jsx("input",{type:"text",id:"primaryColorHex",defaultValue:"#3b82f6",className:"flex-1 h-10 rounded-lg border border-neutral-300 px-3 text-sm font-mono"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Secondary Color"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("input",{type:"color",id:"secondaryColor",defaultValue:"#8b5cf6",className:"w-12 h-10 rounded border border-neutral-300 cursor-pointer"}),r.jsx("input",{type:"text",id:"secondaryColorHex",defaultValue:"#8b5cf6",className:"flex-1 h-10 rounded-lg border border-neutral-300 px-3 text-sm font-mono"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Accent Color"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("input",{type:"color",id:"accentColor",defaultValue:"#10b981",className:"w-12 h-10 rounded border border-neutral-300 cursor-pointer"}),r.jsx("input",{type:"text",id:"accentColorHex",defaultValue:"#10b981",className:"flex-1 h-10 rounded-lg border border-neutral-300 px-3 text-sm font-mono"})]})]})]}),r.jsxs("div",{className:"mt-4 p-4 rounded-lg border border-neutral-200 bg-white",children:[r.jsx("div",{className:"text-xs font-semibold text-neutral-700 mb-3",children:"Theme Preview"}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{id:"previewPrimary",className:"h-8 px-4 rounded-lg text-white text-xs font-medium",style:{backgroundColor:"#3b82f6"},children:"Primary Button"}),r.jsx("button",{id:"previewSecondary",className:"h-8 px-4 rounded-lg text-white text-xs font-medium",style:{backgroundColor:"#8b5cf6"},children:"Secondary Button"}),r.jsx("button",{id:"previewAccent",className:"h-8 px-4 rounded-lg text-white text-xs font-medium",style:{backgroundColor:"#10b981"},children:"Accent Button"})]})]})]}),r.jsxs("div",{className:"p-4 bg-neutral-50 rounded-lg border border-neutral-200",children:[r.jsx("h4",{className:"text-sm font-semibold text-neutral-900 mb-3",children:"Custom CSS (Optional)"}),r.jsx("textarea",{id:"customCSS",rows:"4",className:"w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500",placeholder:"/* Add custom CSS here */"})]})]})]}),r.jsxs("div",{id:"step4Content",className:"setup-step hidden",children:[r.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-4",children:"Review & Deploy"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[r.jsx("h4",{className:"text-sm font-semibold text-blue-900 mb-3",children:"Tenant Summary"}),r.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-neutral-600 mb-1",children:"Tenant Name"}),r.jsx("div",{id:"reviewTenantName",className:"font-semibold text-neutral-900",children:"-"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-neutral-600 mb-1",children:"Subdomain"}),r.jsx("div",{id:"reviewSubdomain",className:"font-semibold text-neutral-900",children:"-"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-neutral-600 mb-1",children:"Admin Email"}),r.jsx("div",{id:"reviewEmail",className:"font-semibold text-neutral-900",children:"-"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-neutral-600 mb-1",children:"Plan Type"}),r.jsx("div",{id:"reviewPlan",className:"font-semibold text-neutral-900",children:"-"})]})]})]}),r.jsxs("div",{className:"p-4 bg-neutral-50 rounded-lg border border-neutral-200",children:[r.jsx("h4",{className:"text-sm font-semibold text-neutral-900 mb-3",children:"Deployment Checklist"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[r.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),r.jsx("span",{className:"text-neutral-700",children:"Basic information validated"})]}),r.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[r.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),r.jsx("span",{className:"text-neutral-700",children:"Email & database configured"})]}),r.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[r.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),r.jsx("span",{className:"text-neutral-700",children:"Branding setup complete"})]}),r.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[r.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),r.jsx("span",{className:"text-neutral-700",children:"Ready for deployment"})]})]})]}),r.jsx("div",{className:"p-4 bg-amber-50 rounded-lg border border-amber-200",children:r.jsxs("div",{className:"flex items-start gap-2",children:[r.jsx("svg",{className:"w-5 h-5 text-amber-600 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"text-sm font-semibold text-amber-900 mb-1",children:"Important"}),r.jsx("div",{className:"text-xs text-amber-700",children:"Once deployed, the tenant will be immediately available. Ensure all information is correct before proceeding."})]})]})})]}),r.jsxs("div",{className:"flex items-center justify-between mt-6 pt-6 border-t border-neutral-200",children:[r.jsx("button",{id:"prevStepBtn",className:"h-10 px-6 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50 hidden",children:"← Previous"}),r.jsx("div",{className:"flex-1"}),r.jsx("button",{id:"nextStepBtn",className:"h-10 px-6 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700",children:"Next →"}),r.jsx("button",{id:"deployTenantBtn",className:"h-10 px-6 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 hidden",children:"Deploy Tenant"})]})]})]})]})]})]})}function zh({onClose:e}){const[t,n]=g.useState("builder");function s({id:l,children:a}){return r.jsx("button",{onClick:()=>n(l),className:"px-4 py-3 text-sm font-medium whitespace-nowrap "+(t===l?"text-blue-600 border-b-2 border-blue-600":"text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300"),children:a})}return r.jsxs("div",{id:"dataReportingView",className:"flex flex-col h-full",children:[r.jsxs("div",{className:"h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("svg",{className:"w-6 h-6 text-blue-600",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-base font-semibold text-neutral-900",children:"Data Reporting & Analytics"}),r.jsx("p",{className:"text-xs text-neutral-500",children:"Generate reports, export data, and analyze trends"})]})]}),r.jsx("button",{id:"closeDataReporting",onClick:e,className:"h-8 w-8 rounded-lg hover:bg-neutral-100",children:r.jsx("svg",{className:"w-4 h-4 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]}),r.jsx("div",{className:"border-b border-neutral-200 bg-white",children:r.jsxs("div",{className:"flex overflow-x-auto px-4",children:[r.jsx(s,{id:"builder",children:"Report Builder"}),r.jsx(s,{id:"saved",children:"Saved Reports"}),r.jsx(s,{id:"scheduled",children:"Scheduled Reports"}),r.jsx(s,{id:"export",children:"Data Export"})]})}),r.jsxs("div",{className:"flex-1 overflow-y-auto p-6 bg-neutral-50",children:[t==="builder"&&r.jsx("div",{id:"reportBuilder",children:r.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[r.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Report Configuration"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Report Name"}),r.jsx("input",{type:"text",id:"reportName",placeholder:"Monthly Patient Summary",className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Report Type"}),r.jsxs("select",{id:"reportType",className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:[r.jsx("option",{value:"",children:"Select Type"}),r.jsx("option",{value:"patient",children:"Patient Report"}),r.jsx("option",{value:"care",children:"Care Plan Report"}),r.jsx("option",{value:"financial",children:"Financial Report"}),r.jsx("option",{value:"quality",children:"Quality Metrics"}),r.jsx("option",{value:"operational",children:"Operational Report"}),r.jsx("option",{value:"compliance",children:"Compliance Report"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Date Range"}),r.jsxs("select",{id:"dateRange",className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:[r.jsx("option",{value:"today",children:"Today"}),r.jsx("option",{value:"yesterday",children:"Yesterday"}),r.jsx("option",{value:"last7",children:"Last 7 Days"}),r.jsx("option",{value:"last30",selected:!0,children:"Last 30 Days"}),r.jsx("option",{value:"lastMonth",children:"Last Month"}),r.jsx("option",{value:"last90",children:"Last 90 Days"}),r.jsx("option",{value:"ytd",children:"Year to Date"}),r.jsx("option",{value:"custom",children:"Custom Range"})]})]}),r.jsxs("div",{id:"customDateRange",className:"hidden grid grid-cols-2 gap-2",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"From"}),r.jsx("input",{type:"date",id:"dateFrom",className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-1",children:"To"}),r.jsx("input",{type:"date",id:"dateTo",className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Format"}),r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsx("button",{className:"report-format-btn active h-9 rounded-lg border-2 border-blue-600 bg-blue-50 text-blue-700 text-xs font-medium","data-format":"pdf",children:"PDF"}),r.jsx("button",{className:"report-format-btn h-9 rounded-lg border-2 border-neutral-300 bg-white text-neutral-700 text-xs font-medium hover:border-blue-400","data-format":"excel",children:"Excel"}),r.jsx("button",{className:"report-format-btn h-9 rounded-lg border-2 border-neutral-300 bg-white text-neutral-700 text-xs font-medium hover:border-blue-400","data-format":"csv",children:"CSV"}),r.jsx("button",{className:"report-format-btn h-9 rounded-lg border-2 border-neutral-300 bg-white text-neutral-700 text-xs font-medium hover:border-blue-400","data-format":"json",children:"JSON"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs font-medium text-neutral-700 mb-2",children:"Filters"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("select",{className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm",children:[r.jsx("option",{children:"All Facilities"}),r.jsx("option",{children:"Main Campus"}),r.jsx("option",{children:"North Branch"}),r.jsx("option",{children:"South Branch"})]}),r.jsxs("select",{className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm",children:[r.jsx("option",{children:"All Care Levels"}),r.jsx("option",{children:"Independent Living"}),r.jsx("option",{children:"Assisted Living"}),r.jsx("option",{children:"Memory Care"}),r.jsx("option",{children:"Skilled Nursing"})]})]})]}),r.jsxs("div",{className:"pt-4 border-t border-neutral-200",children:[r.jsxs("button",{id:"generateReport",className:"w-full h-10 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Generate Report"]}),r.jsx("button",{className:"w-full h-9 mt-2 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-medium hover:bg-neutral-50",children:"Save Template"})]})]})]}),r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-3",children:"Quick Reports"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("button",{className:"w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between",children:[r.jsx("span",{children:"Daily Census"}),r.jsx("svg",{className:"w-4 h-4 text-neutral-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 5l7 7-7 7"})})]}),r.jsxs("button",{className:"w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between",children:[r.jsx("span",{children:"Medication Report"}),r.jsx("svg",{className:"w-4 h-4 text-neutral-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 5l7 7-7 7"})})]}),r.jsxs("button",{className:"w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between",children:[r.jsx("span",{children:"Incident Log"}),r.jsx("svg",{className:"w-4 h-4 text-neutral-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 5l7 7-7 7"})})]}),r.jsxs("button",{className:"w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between",children:[r.jsx("span",{children:"Financial Summary"}),r.jsx("svg",{className:"w-4 h-4 text-neutral-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 5l7 7-7 7"})})]})]})]})]}),r.jsx("div",{className:"lg:col-span-2",children:r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900",children:"Report Preview"}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"h-8 px-3 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"Preview"}),r.jsx("button",{className:"h-8 px-3 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50",children:"Print"})]})]}),r.jsxs("div",{className:"border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center min-h-[500px] flex flex-col items-center justify-center",children:[r.jsx("svg",{className:"w-16 h-16 text-neutral-400 mb-4",fill:"none",stroke:"currentColor",strokeWidth:"1",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),r.jsx("h4",{className:"text-base font-semibold text-neutral-900 mb-2",children:"No Report Generated"}),r.jsx("p",{className:"text-sm text-neutral-500 mb-4 max-w-md",children:'Configure your report settings and click "Generate Report" to see a preview here.'}),r.jsxs("div",{id:"reportPreviewStats",className:"hidden w-full max-w-2xl",children:[r.jsxs("div",{className:"mb-6 pb-4 border-b border-neutral-200",children:[r.jsx("h3",{className:"text-lg font-bold text-neutral-900 mb-1",children:"Patient Care Summary Report"}),r.jsx("p",{className:"text-sm text-neutral-600",children:"November 1, 2024 - November 30, 2024"})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[r.jsxs("div",{className:"text-center p-4 bg-blue-50 rounded-lg",children:[r.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"1,248"}),r.jsx("div",{className:"text-xs text-neutral-600 mt-1",children:"Total Patients"})]}),r.jsxs("div",{className:"text-center p-4 bg-green-50 rounded-lg",children:[r.jsx("div",{className:"text-2xl font-bold text-green-600",children:"892"}),r.jsx("div",{className:"text-xs text-neutral-600 mt-1",children:"Active Care Plans"})]}),r.jsxs("div",{className:"text-center p-4 bg-purple-50 rounded-lg",children:[r.jsx("div",{className:"text-2xl font-bold text-purple-600",children:"94%"}),r.jsx("div",{className:"text-xs text-neutral-600 mt-1",children:"Compliance Rate"})]})]}),r.jsxs("div",{className:"text-left space-y-3",children:[r.jsxs("div",{className:"flex justify-between text-sm",children:[r.jsx("span",{className:"text-neutral-600",children:"New Admissions:"}),r.jsx("span",{className:"font-semibold",children:"45"})]}),r.jsxs("div",{className:"flex justify-between text-sm",children:[r.jsx("span",{className:"text-neutral-600",children:"Discharges:"}),r.jsx("span",{className:"font-semibold",children:"28"})]}),r.jsxs("div",{className:"flex justify-between text-sm",children:[r.jsx("span",{className:"text-neutral-600",children:"Average Length of Stay:"}),r.jsx("span",{className:"font-semibold",children:"18.5 days"})]}),r.jsxs("div",{className:"flex justify-between text-sm",children:[r.jsx("span",{className:"text-neutral-600",children:"Patient Satisfaction:"}),r.jsx("span",{className:"font-semibold",children:"4.8/5.0"})]})]})]})]})]})})]})}),t==="saved"&&r.jsxs("div",{id:"reportSaved",children:[r.jsx("div",{className:"mb-4 flex items-center justify-between",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("input",{type:"text",id:"searchSavedReports",placeholder:"Search reports...",className:"h-9 w-64 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),r.jsxs("select",{className:"h-9 rounded-lg border border-neutral-300 px-3 text-sm",children:[r.jsx("option",{children:"All Types"}),r.jsx("option",{children:"Patient Reports"}),r.jsx("option",{children:"Financial Reports"}),r.jsx("option",{children:"Quality Reports"})]})]})}),r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow",children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center",children:r.jsx("svg",{className:"w-5 h-5 text-blue-600",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"})})}),r.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded",children:"Patient"})]}),r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-1",children:"Monthly Patient Summary"}),r.jsx("p",{className:"text-xs text-neutral-500 mb-3",children:"Last 30 days • PDF Format"}),r.jsxs("div",{className:"flex items-center justify-between text-xs text-neutral-600 mb-4",children:[r.jsx("span",{children:"Created: Nov 28, 2024"}),r.jsx("span",{children:"2.4 MB"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"flex-1 h-8 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700",children:"Download"}),r.jsx("button",{className:"h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center",children:r.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),r.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),r.jsx("button",{className:"h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center",children:r.jsx("svg",{className:"w-4 h-4 text-red-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]})})]}),t==="scheduled"&&r.jsxs("div",{id:"reportScheduled",children:[r.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[r.jsx("h3",{className:"text-base font-semibold text-neutral-900",children:"Automated Report Schedules"}),r.jsx("button",{id:"addScheduleBtn",className:"h-9 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2",children:"Add Schedule"})]}),r.jsx("div",{className:"space-y-3",children:r.jsx("div",{className:"bg-white rounded-lg border border-neutral-200 p-5",children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900",children:"Daily Census Report"}),r.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded",children:"Active"})]}),r.jsx("p",{className:"text-xs text-neutral-600 mb-3",children:"Automated patient census summary sent to admin team"}),r.jsxs("div",{className:"grid grid-cols-4 gap-4 text-xs",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-neutral-500 mb-1",children:"Frequency"}),r.jsx("div",{className:"font-semibold",children:"Daily at 8:00 AM"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-neutral-500 mb-1",children:"Format"}),r.jsx("div",{className:"font-semibold",children:"PDF"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-neutral-500 mb-1",children:"Recipients"}),r.jsx("div",{className:"font-semibold",children:"5 users"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-neutral-500 mb-1",children:"Last Run"}),r.jsx("div",{className:"font-semibold",children:"Today, 8:02 AM"})]})]})]}),r.jsxs("div",{className:"flex gap-2 ml-4",children:[r.jsx("button",{className:"h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center",title:"Edit",children:"Edit"}),r.jsx("button",{className:"h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center",title:"Pause",children:"Pause"}),r.jsx("button",{className:"h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center",title:"Delete",children:"Delete"})]})]})})})]}),t==="export"&&r.jsx("div",{id:"reportExport",children:r.jsx("div",{className:"max-w-4xl mx-auto",children:r.jsxs("div",{className:"bg-white rounded-lg border border-neutral-200 p-6",children:[r.jsx("h3",{className:"text-base font-semibold text-neutral-900 mb-4",children:"Bulk Data Export"}),r.jsx("p",{className:"text-sm text-neutral-600 mb-6",children:"Export large datasets for analysis, backup, or migration purposes."}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-3",children:"Select Data to Export"}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[r.jsxs("label",{className:"flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer",children:[r.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded text-blue-600"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-semibold text-sm",children:"Patient Data"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Demographics, contacts, medical history"})]})]}),r.jsxs("label",{className:"flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer",children:[r.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded text-blue-600"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-semibold text-sm",children:"Care Plans"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Active and historical care plans"})]})]}),r.jsxs("label",{className:"flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer",children:[r.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded text-blue-600"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-semibold text-sm",children:"Medications"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Prescriptions, dosages, schedules"})]})]}),r.jsxs("label",{className:"flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer",children:[r.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded text-blue-600"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-semibold text-sm",children:"Assessments"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Clinical assessments and evaluations"})]})]}),r.jsxs("label",{className:"flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer",children:[r.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded text-blue-600"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-semibold text-sm",children:"Financial Records"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Billing, payments, insurance claims"})]})]}),r.jsxs("label",{className:"flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer",children:[r.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded text-blue-600"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-semibold text-sm",children:"Activity Logs"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"System activities and audit trails"})]})]})]})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Export Format"}),r.jsxs("select",{className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm",children:[r.jsx("option",{children:"CSV (Comma Separated)"}),r.jsx("option",{children:"Excel (XLSX)"}),r.jsx("option",{children:"JSON"}),r.jsx("option",{children:"XML"}),r.jsx("option",{children:"SQL Dump"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-neutral-700 mb-2",children:"Date Range"}),r.jsxs("select",{className:"w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm",children:[r.jsx("option",{children:"All Time"}),r.jsx("option",{children:"Last 30 Days"}),r.jsx("option",{children:"Last 90 Days"}),r.jsx("option",{children:"Last 6 Months"}),r.jsx("option",{children:"Last Year"}),r.jsx("option",{children:"Custom Range"})]})]})]}),r.jsx("div",{className:"p-4 bg-amber-50 rounded-lg border border-amber-200",children:r.jsxs("div",{className:"flex items-start gap-2",children:[r.jsx("svg",{className:"w-5 h-5 text-amber-600 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"text-sm font-semibold text-amber-900 mb-1",children:"Privacy & Compliance Notice"}),r.jsx("div",{className:"text-xs text-amber-700",children:"Exported data contains PHI and must be handled according to HIPAA regulations. Ensure secure storage and transmission."})]})]})}),r.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-neutral-200",children:[r.jsxs("div",{className:"text-sm text-neutral-600",children:["Estimated size: ",r.jsx("span",{className:"font-semibold",children:"~24.5 MB"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{className:"h-10 px-6 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50",children:"Preview Selection"}),r.jsx("button",{id:"startExport",className:"h-10 px-6 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700",children:"Start Export"})]})]})]}),r.jsxs("div",{className:"mt-6 bg-white rounded-lg border border-neutral-200 p-6",children:[r.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"Recent Exports"}),r.jsx("div",{className:"space-y-3",children:r.jsxs("div",{className:"flex items-center justify-between p-3 bg-neutral-50 rounded-lg",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center",children:r.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-semibold",children:"Patient Data Export"}),r.jsx("div",{className:"text-xs text-neutral-500",children:"Completed Dec 5, 2024 • 18.2 MB • CSV"})]})]}),r.jsx("button",{className:"h-8 px-4 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700",children:"Download"})]})})]})]})})})]})]})}function Lh({onClose:e}){return g.useEffect(()=>{const t=S=>document.querySelector(S),n=S=>Array.from(document.querySelectorAll(S)),s=t("#closeMasterTables"),l=n(".master-table-card"),a=t("#masterTableDetail"),i=t("#backToMasterList"),o=t("#addNewRecord"),d=t("#recordModal"),u=t("#closeModal"),p=t("#cancelModal"),m=()=>{typeof e=="function"&&e()},v=S=>{const c=S.currentTarget.dataset.table||"Table",f=t("#masterTableTitle"),y=t("#masterTableSubtitle");f&&(f.textContent=c.replace(/[-_]/g," ").replace(/\b\w/g,M=>M.toUpperCase())),y&&(y.textContent=`Manage ${c} entries`),a&&a.classList.remove("hidden")},b=()=>{a&&a.classList.add("hidden")},N=()=>{d&&d.classList.remove("hidden")},k=()=>{d&&d.classList.add("hidden")};return s&&s.addEventListener("click",m),l.forEach(S=>S.addEventListener("click",v)),i&&i.addEventListener("click",b),o&&o.addEventListener("click",N),u&&u.addEventListener("click",k),p&&p.addEventListener("click",k),()=>{s&&s.removeEventListener("click",m),l.forEach(S=>S.removeEventListener("click",v)),i&&i.removeEventListener("click",b),o&&o.removeEventListener("click",N),u&&u.removeEventListener("click",k),p&&p.removeEventListener("click",k)}},[e]),r.jsx("div",{className:"h-full w-full",dangerouslySetInnerHTML:{__html:`
<!-- ========== MASTER TABLES MANAGEMENT VIEW ========== -->
<div id="masterTablesView" class="flex flex-col h-full">
    <!-- Header -->
    <div class="h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-purple-50 to-white">
        <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <div>
                <h2 class="text-base font-semibold text-neutral-900">Master Tables Management</h2>
                <p class="text-xs text-neutral-500">Configure application-wide settings and reference data</p>
            </div>
        </div>
        <button id="closeMasterTables" class="h-8 w-8 rounded-lg hover:bg-neutral-100">
            <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" />
            </svg>
        </button>
    </div>

    <!-- Categories Grid -->
    <div class="flex-1 overflow-y-auto p-6 bg-neutral-50">
        <div class="max-w-7xl mx-auto">
            <!-- Search and Filter Bar -->
            <div class="mb-6 flex items-center gap-4">
                <div class="flex-1 relative">
                    <input type="text" id="masterTableSearch" class="w-full h-10 rounded-lg border border-neutral-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Search master tables...">
                    <svg class="w-4 h-4 absolute left-3 top-3 text-neutral-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <select class="h-10 px-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>All Categories</option>
                    <option>Clinical</option>
                    <option>Administrative</option>
                    <option>Financial</option>
                    <option>Operational</option>
                    <option>System</option>
                </select>
            </div>

            <div class="space-y-6">
                <div class="bg-white rounded-lg border border-neutral-200 p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-base font-semibold text-neutral-900">Clinical Tables</h3>
                                <p class="text-xs text-neutral-500">Medical and care-related reference data</p>
                            </div>
                        </div>
                        <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">8 Tables</span>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="diagnosis-codes">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" /></svg>
                                <span class="text-xs text-neutral-600">1,248</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Diagnosis Codes</h4>
                            <p class="text-xs text-neutral-500">ICD-10 diagnosis codes</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="medications">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" /></svg>
                                <span class="text-xs text-neutral-600">3,542</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Medications</h4>
                            <p class="text-xs text-neutral-500">Drug database & formulary</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="procedures">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
                                <span class="text-xs text-neutral-600">486</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Procedures</h4>
                            <p class="text-xs text-neutral-500">CPT & procedure codes</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="care-levels">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                <span class="text-xs text-neutral-600">12</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Care Levels</h4>
                            <p class="text-xs text-neutral-500">Levels of care definitions</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="vital-signs">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                                <span class="text-xs text-neutral-600">24</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Vital Signs</h4>
                            <p class="text-xs text-neutral-500">Vitals parameters & ranges</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="allergies">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" /></svg>
                                <span class="text-xs text-neutral-600">856</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Allergies</h4>
                            <p class="text-xs text-neutral-500">Common allergens & reactions</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="lab-tests">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.122l1.027 1.027a4 4 0 01-2.171.102l-.47-.1a4 4 0 01-2.265-1.615l1.027-1.027A3 3 0 009 8.172z" /></svg>
                                <span class="text-xs text-neutral-600">342</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Lab Tests</h4>
                            <p class="text-xs text-neutral-500">Laboratory test catalog</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="assessments">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9 4a1 1 0 10-2 0v2H9a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V9z" /></svg>
                                <span class="text-xs text-neutral-600">67</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Assessments</h4>
                            <p class="text-xs text-neutral-500">Assessment templates</p>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <!-- Master Table Detail/CRUD View -->
    <div id="masterTableDetail" class="hidden flex-1 flex flex-col h-full bg-neutral-50">
        <div class="h-14 px-4 border-b border-neutral-200 bg-white flex items-center justify-between">
            <div class="flex items-center gap-3">
                <button id="backToMasterList" class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div>
                    <h2 id="masterTableTitle" class="text-base font-semibold text-neutral-900"></h2>
                    <p id="masterTableSubtitle" class="text-xs text-neutral-500"></p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button id="addNewRecord" class="h-9 px-4 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M12 4v16m8-8H4" />
                    </svg>
                    Add New
                </button>
            </div>
        </div>
        <div class="flex-1 p-4">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <p class="text-neutral-600">Select a master table to view and manage records.</p>
            </div>
        </div>
    </div>
</div>

<!-- Add/Edit Record Modal -->
<div id="recordModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
            <div>
                <h3 id="modalTitle" class="text-lg font-semibold text-neutral-900">Add New Record</h3>
                <p id="modalSubtitle" class="text-sm text-neutral-500 mt-1">Fill in the details below</p>
            </div>
            <button id="closeModal" class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div class="flex-1 overflow-y-auto px-6 py-4">
            <form id="recordForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                    <input type="text" name="name" required class="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter name">
                </div>
                <div>
                    <label class="block text-sm font-medium text-neutral-700 mb-2">Description</label>
                    <textarea name="description" rows="3" class="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter description"></textarea>
                </div>
            </form>
        </div>
        <div class="px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
            <div class="flex items-center gap-3 ml-auto">
                <button type="button" id="cancelModal" class="h-10 px-6 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50">Cancel</button>
                <button type="submit" form="recordForm" id="saveRecord" class="h-10 px-6 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Save Changes</button>
            </div>
        </div>
    </div>
</div>
`}})}function Ph({onClose:e}){return g.useEffect(()=>{const t=b=>document.querySelector(b),n=b=>Array.from(document.querySelectorAll(b)),s=t("#closeEmailTemplates"),l=t("#createNewTemplate"),a=n(".template-preview-btn"),i=n(".template-edit-btn"),o=n(".template-menu-btn"),d=()=>{typeof e=="function"&&e()},u=()=>{},p=b=>{},m=b=>{},v=b=>{};return s&&s.addEventListener("click",d),l&&l.addEventListener("click",u),a.forEach(b=>b.addEventListener("click",p)),i.forEach(b=>b.addEventListener("click",m)),o.forEach(b=>b.addEventListener("click",v)),()=>{s&&s.removeEventListener("click",d),l&&l.removeEventListener("click",u),a.forEach(b=>b.removeEventListener("click",p)),i.forEach(b=>b.removeEventListener("click",m)),o.forEach(b=>b.removeEventListener("click",v))}},[e]),r.jsx("div",{className:"h-full w-full",dangerouslySetInnerHTML:{__html:`
<!-- ========== EMAIL TEMPLATES VIEW ========== -->
<div id="emailTemplatesView" class="flex flex-col h-full bg-neutral-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white">
        <div class="px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-xl font-bold">Email Templates</h2>
                    <p class="text-sm text-indigo-100">Professional email templates for care communications</p>
                </div>
            </div>
            <button id="closeEmailTemplates" class="h-9 w-9 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Stats Bar -->
        <div class="px-6 pb-4 grid grid-cols-4 gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">12</div>
                <div class="text-xs text-indigo-100">Total Templates</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">8</div>
                <div class="text-xs text-indigo-100">Active Templates</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">247</div>
                <div class="text-xs text-indigo-100">Sent This Month</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">94%</div>
                <div class="text-xs text-indigo-100">Open Rate</div>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto p-6">
        <!-- Action Bar -->
        <div class="bg-white rounded-lg border border-neutral-200 p-4 mb-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="relative">
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search templates..." class="h-10 pl-10 pr-4 w-80 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <select class="h-10 px-4 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-500">
                    <option>All Categories</option>
                    <option>Appointments</option>
                    <option>Care Updates</option>
                    <option>Billing</option>
                    <option>Reminders</option>
                    <option>Notifications</option>
                </select>
            </div>
            <button id="createNewTemplate" class="h-10 px-6 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 4v16m8-8H4" />
                </svg>
                Create Template
            </button>
        </div>

        <!-- Templates Grid -->
        <div class="grid grid-cols-2 gap-6">
            <!-- Template Card 1: Appointment Confirmation -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Appointment Confirmation</h3>
                                <p class="text-sm text-neutral-600">Sent when appointments are scheduled</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Your Appointment is Confirmed</p>
                        <p class="text-xs">Dear {{patient_name}}, Your appointment with {{provider_name}} is confirmed for {{appointment_date}} at {{appointment_time}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 45 times</span>
                        <span>📬 98% open rate</span>
                        <span>🕐 Updated 2 days ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 2: Appointment Reminder -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Appointment Reminder</h3>
                                <p class="text-sm text-neutral-600">24-hour reminder before appointment</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Reminder: Appointment Tomorrow</p>
                        <p class="text-xs">Hi {{patient_name}}, This is a friendly reminder about your upcoming appointment tomorrow at {{appointment_time}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 89 times</span>
                        <span>📬 96% open rate</span>
                        <span>🕐 Updated 5 days ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 3: Care Plan Update -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Care Plan Update</h3>
                                <p class="text-sm text-neutral-600">Notify about care plan changes</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Your Care Plan Has Been Updated</p>
                        <p class="text-xs">Dear {{patient_name}}, We wanted to inform you about an update to your care plan. {{update_description}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 32 times</span>
                        <span>📬 92% open rate</span>
                        <span>🕐 Updated 1 week ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 4: Billing Statement -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Billing Statement</h3>
                                <p class="text-sm text-neutral-600">Monthly billing statements</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Your Monthly Care Statement</p>
                        <p class="text-xs">Dear {{patient_name}}, Your statement for {{billing_period}} is now available. Total amount: {{total_amount}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 67 times</span>
                        <span>📬 89% open rate</span>
                        <span>🕐 Updated 3 days ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 5: Welcome Email -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Welcome Email</h3>
                                <p class="text-sm text-neutral-600">First email to new patients</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Welcome to Our Care Family!</p>
                        <p class="text-xs">Dear {{patient_name}}, Welcome! We're thrilled to have you join our care community. Here's what you need to know...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 14 times</span>
                        <span>📬 100% open rate</span>
                        <span>🕐 Updated 1 month ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 6: Medication Reminder -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Medication Reminder</h3>
                                <p class="text-sm text-neutral-600">Prescription refill reminders</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">Draft</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Time to Refill Your Prescription</p>
                        <p class="text-xs">Hi {{patient_name}}, It's time to refill your prescription for {{medication_name}}. Please contact us to arrange...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Not yet sent</span>
                        <span>📬 — open rate</span>
                        <span>🕐 Created today</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`}})}function Th({onClose:e}){return g.useEffect(()=>{const t=d=>document.querySelector(d),n=d=>Array.from(document.querySelectorAll(d)),s=t("#closeScheduling"),l=n(".schedule-tab"),a=n(".schedule-content"),i=()=>{typeof e=="function"&&e()},o=d=>{const u=d.currentTarget,p=u.dataset.tab;l.forEach(N=>{N.classList.remove("active"),N.classList.remove("text-indigo-600","border-indigo-600"),N.classList.add("text-neutral-600","border-transparent")}),u.classList.add("active"),u.classList.remove("text-neutral-600","border-transparent"),u.classList.add("text-indigo-600","border-indigo-600"),a.forEach(N=>N.classList.add("hidden"));const v={calendar:"scheduleCalendar","business-hours":"scheduleBusinessHours","appointment-types":"scheduleAppointmentTypes",holidays:"scheduleHolidays","time-zones":"scheduleTimeZones"}[p],b=t(`#${v}`);b&&b.classList.remove("hidden")};return s&&s.addEventListener("click",i),l.forEach(d=>d.addEventListener("click",o)),()=>{s&&s.removeEventListener("click",i),l.forEach(d=>d.removeEventListener("click",o))}},[e]),r.jsx("div",{className:"h-full w-full",dangerouslySetInnerHTML:{__html:`
<!-- ========== SCHEDULING MANAGEMENT VIEW ========== -->
<div id="schedulingView" class="flex flex-col h-full bg-neutral-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white">
        <div class="px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-xl font-bold">Scheduling Management</h2>
                    <p class="text-sm text-indigo-100">Configure appointments, business hours, and
                        availability</p>
                </div>
            </div>
            <button id="closeScheduling"
                class="h-9 w-9 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Stats Bar -->
        <div class="px-6 pb-4 grid grid-cols-4 gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">48</div>
                <div class="text-xs text-indigo-100">Today's Appointments</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">12</div>
                <div class="text-xs text-indigo-100">Pending Confirmations</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">85%</div>
                <div class="text-xs text-indigo-100">Capacity Utilization</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">3</div>
                <div class="text-xs text-indigo-100">Blocked Time Slots</div>
            </div>
        </div>
    </div>

    <!-- Tabs -->
    <div class="bg-white border-b border-neutral-200 shadow-sm">
        <div class="flex overflow-x-auto px-6">
            <button
                class="schedule-tab active px-4 py-3 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 whitespace-nowrap flex items-center gap-2"
                data-tab="calendar">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar View
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="business-hours">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="appointment-types">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Appointment Types
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="holidays">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Holidays & Closures
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="time-zones">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Time Zones
            </button>
        </div>
    </div>

    <!-- Tab Content -->
    <div class="flex-1 overflow-y-auto">
        <!-- Calendar View Tab -->
        <div id="scheduleCalendar" class="schedule-content p-6">
            <div class="max-w-7xl mx-auto">
                <!-- Calendar Controls -->
                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 mb-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">
                            Today
                        </button>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                class="h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div class="text-lg font-semibold text-neutral-900">December 2025</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button id="syncCalendarBtn"
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium flex items-center gap-2"
                            title="Sync with External Calendars">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Sync
                        </button>
                        <div class="w-px h-6 bg-neutral-300"></div>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">
                            Day
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium bg-indigo-50 border-indigo-300 text-indigo-600">
                            Week
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">
                            Month
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M12 4v16m8-8H4" />
                            </svg>
                            New Appointment
                        </button>
                    </div>
                </div>

                <!-- Week Calendar -->
                <div class="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                    <!-- Calendar Header -->
                    <div class="grid grid-cols-8 border-b border-neutral-200 bg-neutral-50">
                        <div class="p-3 text-xs font-semibold text-neutral-500">TIME</div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">MON</div>
                            <div class="text-lg font-semibold text-neutral-900">4</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">TUE</div>
                            <div class="text-lg font-semibold text-neutral-900">5</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">WED</div>
                            <div class="text-lg font-semibold text-neutral-900">6</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200 bg-indigo-50">
                            <div class="text-xs font-medium text-indigo-600">THU</div>
                            <div class="text-lg font-semibold text-indigo-600">7</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">FRI</div>
                            <div class="text-lg font-semibold text-neutral-900">8</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">SAT</div>
                            <div class="text-lg font-semibold text-neutral-900">9</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">SUN</div>
                            <div class="text-lg font-semibold text-neutral-900">10</div>
                        </div>
                    </div>

                    <!-- Calendar Body -->
                    <div class="overflow-y-auto max-h-[500px]">
                        <!-- 8:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                8:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-blue-100 border-l-2 border-blue-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-blue-900">Initial Consultation
                                    </div>
                                    <div class="text-blue-700">John Doe</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 9:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                9:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                                <div
                                    class="bg-green-100 border-l-2 border-green-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-green-900">Follow-up</div>
                                    <div class="text-green-700">Sarah Wilson</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-purple-100 border-l-2 border-purple-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-purple-900">Assessment</div>
                                    <div class="text-purple-700">Mike Johnson</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                                <div
                                    class="bg-indigo-100 border-l-2 border-indigo-600 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-indigo-900">Care Review</div>
                                    <div class="text-indigo-700">Emma Davis</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 10:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                10:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-amber-100 border-l-2 border-amber-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-amber-900">Check-in</div>
                                    <div class="text-amber-700">Robert Lee</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-rose-100 border-l-2 border-rose-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-rose-900">Urgent Care</div>
                                    <div class="text-rose-700">Lisa Brown</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 11:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                11:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-teal-100 border-l-2 border-teal-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-teal-900">Consultation</div>
                                    <div class="text-teal-700">James Miller</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 12:00 PM Row (Lunch Break) -->
                        <div class="grid grid-cols-8 border-b border-neutral-100 bg-neutral-50">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                12:00 PM</div>
                            <div
                                class="p-1 border-r border-neutral-100 relative min-h-[60px] bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-indigo-100/50 flex items-center justify-center">
                                <span class="text-xs text-indigo-600">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Business Hours Tab -->
        <div id="scheduleBusinessHours" class="schedule-content hidden p-6">
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-lg border border-neutral-200 p-6">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h3 class="text-lg font-semibold text-neutral-900">Operating Hours</h3>
                            <p class="text-sm text-neutral-600">Configure your business hours for
                                each day of the week</p>
                        </div>
                        <button
                            class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium">
                            Save Changes
                        </button>
                    </div>

                    <!-- Days of Week -->
                    <div class="space-y-4">
                        <!-- Monday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Monday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Tuesday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Tuesday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Wednesday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Wednesday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Thursday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Thursday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Friday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Friday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Saturday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors opacity-60">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox"
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Saturday</span>
                            </label>
                            <input type="time" value="08:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-sm text-neutral-500 px-3">Closed</span>
                        </div>

                        <!-- Sunday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors opacity-60">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox"
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Sunday</span>
                            </label>
                            <input type="time" value="08:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-sm text-neutral-500 px-3">Closed</span>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="mt-6 pt-6 border-t border-neutral-200 flex items-center gap-3">
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                            Copy Monday to All Days
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                            Reset to Default
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Appointment Types Tab -->
        <div id="scheduleAppointmentTypes" class="schedule-content hidden p-6">
            <div class="max-w-5xl mx-auto">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900">Appointment Types</h3>
                        <p class="text-sm text-neutral-600">Manage different types of appointments
                            and their durations</p>
                    </div>
                    <button
                        class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path d="M12 4v16m8-8H4" />
                        </svg>
                        Add Appointment Type
                    </button>
                </div>

                <!-- Appointment Types Grid -->
                <div class="grid md:grid-cols-2 gap-4">
                    <!-- Initial Consultation -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-blue-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Initial Consultation
                                    </h4>
                                    <p class="text-xs text-neutral-500">60 minutes • $150</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Comprehensive first-time patient
                            assessment and care plan development</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 142 times</span>
                        </div>
                    </div>

                    <!-- Follow-up Visit -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-green-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Follow-up Visit</h4>
                                    <p class="text-xs text-neutral-500">30 minutes • $75</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Regular check-in and progress
                            monitoring for existing patients</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 328 times</span>
                        </div>
                    </div>

                    <!-- Assessment -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-purple-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Comprehensive
                                        Assessment</h4>
                                    <p class="text-xs text-neutral-500">90 minutes • $200</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Detailed evaluation and
                            comprehensive care planning session</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 87 times</span>
                        </div>
                    </div>

                    <!-- Urgent Care -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-rose-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Urgent Care</h4>
                                    <p class="text-xs text-neutral-500">45 minutes • $125</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Priority appointment for urgent
                            care needs and immediate attention</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 54 times</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Holidays Tab -->
        <div id="scheduleHolidays" class="schedule-content hidden p-6">
            <div class="max-w-4xl mx-auto">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900">Holidays & Closures</h3>
                        <p class="text-sm text-neutral-600">Manage dates when your facility will be
                            closed</p>
                    </div>
                    <button
                        class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path d="M12 4v16m8-8H4" />
                        </svg>
                        Add Holiday/Closure
                    </button>
                </div>

                <!-- Holidays List -->
                <div
                    class="bg-white rounded-lg border border-neutral-200 divide-y divide-neutral-200">
                    <!-- Holiday Item -->
                    <div class="p-4 hover:bg-neutral-50 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-red-100 flex flex-col items-center justify-center">
                                <div class="text-xs text-red-600 font-medium">DEC</div>
                                <div class="text-lg font-bold text-red-600">25</div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neutral-900">Christmas Day</h4>
                                <p class="text-sm text-neutral-600">December 25, 2025</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span
                                class="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">Full
                                Day Closure</span>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Holiday Item -->
                    <div class="p-4 hover:bg-neutral-50 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-blue-100 flex flex-col items-center justify-center">
                                <div class="text-xs text-blue-600 font-medium">JAN</div>
                                <div class="text-lg font-bold text-blue-600">1</div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neutral-900">New Year's Day</h4>
                                <p class="text-sm text-neutral-600">January 1, 2026</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span
                                class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">Full
                                Day Closure</span>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Holiday Item -->
                    <div class="p-4 hover:bg-neutral-50 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-amber-100 flex flex-col items-center justify-center">
                                <div class="text-xs text-amber-600 font-medium">NOV</div>
                                <div class="text-lg font-bold text-amber-600">28</div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neutral-900">Thanksgiving Day</h4>
                                <p class="text-sm text-neutral-600">November 28, 2025</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span
                                class="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Full
                                Day Closure</span>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Time Zones Tab -->
        <div id="scheduleTimeZones" class="schedule-content hidden p-6">
            <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-lg border border-neutral-200 p-6">
                    <h3 class="text-lg font-semibold text-neutral-900 mb-4">Time Zone Settings</h3>

                    <!-- Primary Time Zone -->
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Primary Time
                            Zone</label>
                        <select
                            class="w-full h-10 px-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-500">
                            <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option>(GMT-06:00) Central Time (US & Canada)</option>
                            <option>(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option>(GMT+00:00) UTC</option>
                        </select>
                        <p class="text-xs text-neutral-500 mt-2">All appointments will be displayed
                            in this time zone</p>
                    </div>

                    <!-- Automatic Daylight Saving -->
                    <div class="mb-6">
                        <label class="flex items-center gap-3">
                            <input type="checkbox" checked
                                class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                            <div>
                                <div class="text-sm font-medium text-neutral-900">Automatically
                                    adjust for Daylight Saving Time</div>
                                <div class="text-xs text-neutral-500">System will automatically
                                    adjust times when DST begins/ends</div>
                            </div>
                        </label>
                    </div>

                    <!-- Show User's Time Zone -->
                    <div class="mb-6">
                        <label class="flex items-center gap-3">
                            <input type="checkbox" checked
                                class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                            <div>
                                <div class="text-sm font-medium text-neutral-900">Display user's
                                    local time zone</div>
                                <div class="text-xs text-neutral-500">Show appointments in each
                                    user's local time zone</div>
                            </div>
                        </label>
                    </div>

                    <!-- Current Time Display -->
                    <div class="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div class="text-sm text-indigo-900 font-medium mb-2">Current Time</div>
                        <div class="text-2xl font-bold text-indigo-600">2:45 PM EST</div>
                        <div class="text-xs text-indigo-700 mt-1">December 7, 2025</div>
                    </div>

                    <!-- Save Button -->
                    <div class="mt-6 flex justify-end">
                        <button
                            class="h-10 px-6 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium">
                            Save Time Zone Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`}})}function Bh({onClose:e}){return g.useEffect(()=>{const t=d=>document.querySelector(d),n=d=>Array.from(document.querySelectorAll(d)),s=t("#closeUserManagement"),l=n(".um-tab"),a=n(".um-content"),i=()=>{typeof e=="function"&&e()},o=d=>{const u=d.currentTarget,p=u.dataset.tab;l.forEach(v=>{v.classList.remove("active"),v.classList.remove("text-blue-600","border-blue-600"),v.classList.add("text-neutral-600","border-transparent")}),u.classList.add("active"),u.classList.remove("text-neutral-600","border-transparent"),u.classList.add("text-blue-600","border-blue-600"),a.forEach(v=>v.classList.add("hidden"));const m=t(`#um${p.charAt(0).toUpperCase()+p.slice(1)}`);m&&m.classList.remove("hidden")};return s&&s.addEventListener("click",i),l.forEach(d=>d.addEventListener("click",o)),()=>{s&&s.removeEventListener("click",i),l.forEach(d=>d.removeEventListener("click",o))}},[e]),r.jsx("div",{className:"h-full w-full",dangerouslySetInnerHTML:{__html:`
<!-- User Management View -->
<div id="userManagementView" class="flex flex-col h-full bg-neutral-50">
    <!-- Enhanced Header with Stats -->
    <div class="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div class="h-16 px-6 flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div
                    class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-lg font-bold">User Management</h2>
                    <p class="text-xs text-blue-100">Manage users, roles, and permissions</p>
                </div>
            </div>
            <button id="closeUserManagement"
                class="h-9 w-9 rounded-lg hover:bg-white/20 transition-colors">
                <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M6 6l12 12M6 18L18 6" />
                </svg>
            </button>
        </div>

        <!-- Stats Bar -->
        <div class="px-6 pb-4">
            <div class="grid grid-cols-4 gap-4">
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold" id="totalUsersCount">22</div>
                    <div class="text-xs text-blue-100">Total Users</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold text-green-200" id="activeUsersCount">18</div>
                    <div class="text-xs text-blue-100">Active Now</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold text-amber-200" id="pendingUsersCount">3</div>
                    <div class="text-xs text-blue-100">Pending</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold text-red-200" id="inactiveUsersCount">1</div>
                    <div class="text-xs text-blue-100">Inactive</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Enhanced Tabs with Icons -->
    <div class="bg-white border-b border-neutral-200 shadow-sm">
        <div class="flex overflow-x-auto px-6">
            <button
                class="um-tab active px-6 py-4 text-sm font-semibold text-blue-600 border-b-3 border-blue-600 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="users">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Users</span>
                <span
                    class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">22</span>
            </button>
            <button
                class="um-tab px-6 py-4 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-b-3 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="roles">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Roles</span>
                <span
                    class="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-full text-xs font-bold">4</span>
            </button>
            <button
                class="um-tab px-6 py-4 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-b-3 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="permissions">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Permissions</span>
            </button>
            <button
                class="um-tab px-6 py-4 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-b-3 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="activity">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Activity Log</span>
            </button>
        </div>
    </div>

    <!-- Tab Content -->
    <div class="flex-1 overflow-y-auto p-6">
        <!-- Users Tab -->
        <div id="umUsers" class="um-content">
            <!-- Enhanced Search and Filter Bar -->
            <div class="mb-6 bg-white rounded-xl shadow-sm border border-neutral-200 p-4">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex-1 flex items-center gap-3">
                        <div class="relative flex-1 max-w-md">
                            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                                fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" id="searchUsers"
                                placeholder="Search by name, email, or ID..."
                                class="w-full h-10 pl-10 pr-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <select id="filterUserRole"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option value="">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="staff">Staff</option>
                            <option value="viewer">Viewer</option>
                        </select>
                        <select id="filterUserStatus"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                            <option value="suspended">Suspended</option>
                        </select>
                        <button id="clearUserFilters"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Clear
                        </button>
                    </div>
                    <div class="flex items-center gap-2">
                        <button id="exportUsersBtn"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Export
                        </button>
                        <button id="addUserBtn"
                            class="h-10 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M12 4v16m8-8H4" />
                            </svg>
                            Add New User
                        </button>
                    </div>
                </div>
            </div>

            <!-- Enhanced Users Table with Better UI -->
            <div class="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                <table class="w-full">
                    <thead
                        class="bg-gradient-to-r from-neutral-50 to-neutral-100 border-b-2 border-neutral-200">
                        <tr>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                <input type="checkbox" id="selectAllUsers"
                                    class="w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                User</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Email</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Role</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Department</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Status</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Last Login</th>
                            <th
                                class="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Actions</th>
                        </tr>
                    </thead>
                    <tbody id="usersTableBody" class="divide-y divide-neutral-200 bg-white">
                        <!-- Enhanced Sample Users -->
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR001">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            JD
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                                            title="Online"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">John Doe
                                        </div>
                                        <div class="text-xs text-neutral-500">ID: USR001</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">john.doe@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 123-4567</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 text-xs font-bold rounded-full border border-purple-300">
                                    Admin
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Administration</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-300">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Active
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">2 hours ago</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR002">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            JS
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                                            title="Online"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">Jane
                                            Smith</div>
                                        <div class="text-xs text-neutral-500">ID: USR002</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">jane.smith@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 234-5678</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-bold rounded-full border border-blue-300">
                                    Manager
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Clinical</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-300">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Active
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">5 hours ago</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR003">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            MB
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"
                                            title="Offline"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">Mike
                                            Brown</div>
                                        <div class="text-xs text-neutral-500">ID: USR003</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">mike.brown@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 345-6789</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 text-xs font-bold rounded-full border border-teal-300">
                                    Staff
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Operations</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-300">
                                    <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                    Inactive
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">5 days ago</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR004">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            SW
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"
                                            title="Away"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">Sarah
                                            Williams</div>
                                        <div class="text-xs text-neutral-500">ID: USR004</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">sarah.w@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 456-7890</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 text-xs font-bold rounded-full border border-teal-300">
                                    Staff
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Nursing</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full border border-amber-300">
                                    <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
                                    Pending
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Never logged in</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="mt-6 flex items-center justify-between">
                <div class="text-sm text-neutral-600">
                    Showing <span class="font-semibold">1-4</span> of <span
                        class="font-semibold">22</span> users
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled>
                        Previous
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold">
                        1
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        2
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        3
                    </button>
                    <span class="px-2 text-neutral-500">...</span>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        6
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        Next
                    </button>
                </div>
            </div>
        </div>

        <!-- Roles Tab -->
        <div id="umRoles" class="um-content hidden">
            <div class="mb-4 flex items-center justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-neutral-900">Roles & Responsibilities</h3>
                    <p class="text-sm text-neutral-500">Define roles and assign permissions</p>
                </div>
                <button id="addRoleBtn"
                    class="h-9 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path d="M12 4v16m8-8H4" />
                    </svg>
                    Add Role
                </button>
            </div>

            <!-- Roles Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Admin Role -->
                <div class="bg-white rounded-lg border-2 border-purple-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Admin</h4>
                    <p class="text-xs text-neutral-600 mb-4">Full system access and control</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            All Permissions
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            User Management
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">2 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>

                <!-- Manager Role -->
                <div class="bg-white rounded-lg border-2 border-blue-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Manager</h4>
                    <p class="text-xs text-neutral-600 mb-4">Manage patients and staff</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            Patient Management
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            Report Access
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">5 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>

                <!-- Staff Role -->
                <div class="bg-white rounded-lg border-2 border-teal-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Staff</h4>
                    <p class="text-xs text-neutral-600 mb-4">Basic patient care access</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            View Patients
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            Update Records
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">12 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>

                <!-- Viewer Role -->
                <div class="bg-white rounded-lg border-2 border-neutral-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Viewer</h4>
                    <p class="text-xs text-neutral-600 mb-4">Read-only access</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            View Only
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-red-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                            </svg>
                            No Edit Rights
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">3 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Permissions Tab -->
        <div id="umPermissions" class="um-content hidden">
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-neutral-900">Permission Matrix</h3>
                <p class="text-sm text-neutral-500">Granular permission control for each role</p>
            </div>

            <!-- Permission Matrix Table -->
            <div class="bg-white rounded-lg border border-neutral-200 overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50 border-b border-neutral-200">
                        <tr>
                            <th
                                class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 sticky left-0 bg-neutral-50">
                                Permission</th>
                            <th class="px-4 py-3 text-center text-xs font-semibold text-purple-600">
                                Admin</th>
                            <th class="px-4 py-3 text-center text-xs font-semibold text-blue-600">
                                Manager</th>
                            <th class="px-4 py-3 text-center text-xs font-semibold text-teal-600">
                                Staff</th>
                            <th
                                class="px-4 py-3 text-center text-xs font-semibold text-neutral-600">
                                Viewer</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-neutral-200">
                        <!-- Patient Management -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    View Patients
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Patients
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete Patients
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <!-- User Management -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Manage Users
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <!-- Reports -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    View Reports
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Export Data
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <!-- System Settings -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    System Settings
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Save Changes Button -->
            <div
                class="mt-6 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <div class="text-sm font-semibold text-blue-900">Changes will affect all
                            users</div>
                        <div class="text-xs text-blue-700">Make sure to review permissions before
                            saving</div>
                    </div>
                </div>
                <button id="savePermissionsBtn"
                    class="h-10 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-lg flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    Save Changes
                </button>
            </div>
        </div>

        <!-- Activity Log Tab -->
        <div id="umActivity" class="um-content hidden">
            <div class="mb-6">
                <h3 class="text-lg font-semibold text-neutral-900">User Activity Log</h3>
                <p class="text-sm text-neutral-500">Track all user activities and changes</p>
            </div>

            <!-- Activity Timeline -->
            <div class="space-y-4">
                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-green-600" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">User Login
                                    </h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">John Doe</span> logged in from <span
                                            class="text-blue-600">192.168.1.100</span></p>
                                </div>
                                <span class="text-xs text-neutral-500">2 hours ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Success</span>
                                <span class="text-xs text-neutral-500">IP: 192.168.1.100</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">User Updated
                                    </h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">Jane Smith</span> updated user <span
                                            class="font-medium">Mike Brown</span></p>
                                </div>
                                <span class="text-xs text-neutral-500">5 hours ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">Update</span>
                                <span class="text-xs text-neutral-500">Changed: Role, Status</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-purple-600" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">New User
                                        Created</h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">John Doe</span> created new user
                                        <span class="font-medium">Sarah Williams</span>
                                    </p>
                                </div>
                                <span class="text-xs text-neutral-500">1 day ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">Create</span>
                                <span class="text-xs text-neutral-500">Role: Staff</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-red-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">Failed Login
                                        Attempt</h4>
                                    <p class="text-sm text-neutral-600 mt-1">Failed login attempt
                                        for <span class="font-medium">admin@xyz.com</span></p>
                                </div>
                                <span class="text-xs text-neutral-500">2 days ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded">Failed</span>
                                <span class="text-xs text-neutral-500">IP: 203.0.113.45</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-amber-600" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">Permission
                                        Changed</h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">Jane Smith</span> updated
                                        permissions for <span class="font-medium">Manager</span>
                                        role</p>
                                </div>
                                <span class="text-xs text-neutral-500">3 days ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">Permission</span>
                                <span class="text-xs text-neutral-500">Added: Export Data</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Load More -->
            <div class="mt-6 text-center">
                <button
                    class="h-10 px-6 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2 mx-auto">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Load More Activity
                </button>
            </div>
        </div>
    </div>
</div>`}})}function Rh(){const e=Bi(),t=[{key:"id",label:"ID",width:80,visible:!0,sortable:!0},{key:"name",label:"Patient",width:200,visible:!0,sortable:!0},{key:"age",label:"Age",width:80,visible:!0,sortable:!0},{key:"risk",label:"Risk",width:110,visible:!0,sortable:!0},{key:"status",label:"Status",width:140,visible:!0,sortable:!0},{key:"careMgr",label:"Care Mgr",width:160,visible:!0,sortable:!0},{key:"updated",label:"Updated",width:160,visible:!0,sortable:!0}],n=[{id:101,name:"Alice Brown",age:72,risk:"High",status:"Active",careMgr:"J. Patel",updated:"2025-08-02",notes:"CHF | Needs RPM setup"},{id:102,name:"Brian Chen",age:64,risk:"Medium",status:"Pending",careMgr:"K. Lopez",updated:"2025-07-29",notes:"Post-op follow-up"},{id:103,name:"Chitra Iyer",age:78,risk:"High",status:"Active",careMgr:"J. Patel",updated:"2025-08-10",notes:"Frequent falls | HHA request"},{id:104,name:"David King",age:58,risk:"Low",status:"Discharged",careMgr:"M. Singh",updated:"2025-08-07",notes:"PT complete"},{id:105,name:"Ella Garcia",age:69,risk:"Medium",status:"Active",careMgr:"K. Lopez",updated:"2025-08-03",notes:"Medication review due"}],s=g.useRef(null),l=g.useRef(null),a=g.useRef(null),i=g.useRef(null),o=g.useRef(null),d=g.useRef(null),[u,p]=g.useState(()=>{try{const x=localStorage.getItem("mcp.cols");if(x){const w=JSON.parse(x);return t.map(_=>{const Y=w.find(W=>W.k===_.key);return Y?{..._,visible:Y.v}:_})}}catch{}return t}),[m,v]=g.useState(n),[b,N]=g.useState({key:"updated",dir:"desc"}),[k,S]=g.useState({}),[h,c]=g.useState(""),[f,y]=g.useState(new Set),[M,P]=g.useState("grid"),[L,R]=g.useState(""),[Q,V]=g.useState(()=>JSON.parse(localStorage.getItem("mcp.views")||"[]")),[j,T]=g.useState(()=>new Set),[D,U]=g.useState(!1),[F,ue]=g.useState(null),[Ye,E]=g.useState(()=>new Map),[A,I]=g.useState(!1),[K,ee]=g.useState(!1),[nt,Be]=g.useState(!1),[Oe,Se]=g.useState("activity"),[wt,ir]=g.useState(!1),[ol,O]=g.useState(!1),[dt,or]=g.useState(!1),[Pc,dr]=g.useState(!1),[Tc,ur]=g.useState(!1),[Bc,Ut]=g.useState(!1),[Rc,Ft]=g.useState(!1),[_c,cr]=g.useState(!1),Ri=g.useRef(null),_i=g.useRef(null),Fn=g.useRef(null),Wn=g.useMemo(()=>u.filter(x=>x.visible),[u]);g.useEffect(()=>{localStorage.setItem("mcp.cols",JSON.stringify(u.map(x=>({k:x.key,v:x.visible}))))},[u]),g.useEffect(()=>{localStorage.setItem("mcp.views",JSON.stringify(Q))},[Q]);function Ac(x){N(w=>w.key===x?{key:x,dir:w.dir==="asc"?"desc":"asc"}:{key:x,dir:"asc"})}function Dc(x,w){S(z=>({...z,[x]:w}))}function Vc(){S({}),c("")}function Ic(){const x=h.trim().toLowerCase(),w=m.filter(_=>{for(const[Y,W]of Object.entries(k)){if(!W)continue;if(!String(_[Y]??"").toLowerCase().includes(W.toLowerCase()))return!1}return!(x&&!Object.keys(_).some(W=>String(_[W]).toLowerCase().includes(x)))}),z=b.dir==="asc"?1:-1;return w.sort((_,Y)=>{const W=_[b.key],Me=Y[b.key];return W==null&&Me==null?0:W==null?-1*z:Me==null?1*z:typeof W=="number"&&typeof Me=="number"?(W-Me)*z:String(W).localeCompare(String(Me))*z}),w}const xr=g.useMemo(Ic,[m,k,h,b]);function Oc(x){y(x?new Set(xr.map(w=>w.id)):new Set)}function Hc(x,w){y(z=>{const _=new Set(z);return w?_.add(x):_.delete(x),_})}function Uc(x){T(w=>{const z=new Set(w);return z.has(x)?z.delete(x):z.add(x),z})}function Fc(x){return x==="Call"?r.jsx("svg",{viewBox:"0 0 24 24",className:"w-4 h-4",fill:"currentColor",children:r.jsx("path",{d:"M6.6 10.8c1.4 2.6 3.9 5.1 6.5 6.5l2.2-2.2a1 1 0 0 1 1-.25c1.1.36 2.3.55 3.5.55a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C11.3 21 3 12.7 3 3.2a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.2.19 2.4.55 3.5a1 1 0 0 1-.25 1L6.6 10.8z"})}):x==="Message"?r.jsx("svg",{viewBox:"0 0 24 24",className:"w-4 h-4",fill:"currentColor",children:r.jsx("path",{d:"M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm3 5h10v2H7V9zm0 4h7v2H7v-2z"})}):r.jsx("svg",{viewBox:"0 0 24 24",className:"w-4 h-4",fill:"currentColor",children:r.jsx("path",{d:"M6 2h12a2 2 0 0 1 2 2v16l-4-3H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"})})}function Wr(x,w){E(z=>{const _=new Map(z),Y=_.get(x)||[],W={ts:new Date().toISOString(),type:"Note",status:"info",text:"",progress:0,live:!1,...w};return Y.unshift(W),_.set(x,Y),_})}function Wc(x){E(w=>{const z=new Map(w),_=z.get(x)||[],Y=_.find(W=>W.type==="Call"&&W.live);return Y&&(Y.live=!1,Y.status="completed",Y.progress=100),z.set(x,_),z})}function dl(x,w="activity"){ue(x),U(!0),Se(w),w==="call"?Wr(x.id,{type:"Call",status:"dialing",text:"Opened dialer",progress:10,live:!0}):w==="message"&&Wr(x.id,{type:"Message",status:"composing",text:"Composing message",progress:25})}function Ai(){U(!1),ue(null)}function $c(){const x=window.prompt("Save view as:");if(!x)return;const w={name:x,sort:b,filters:k,cols:u.map(z=>({key:z.key,visible:z.visible}))};V(z=>[...z,w]),ee(!0)}function Di(x){const w=Q[x];w&&(N(w.sort||{key:"updated",dir:"desc"}),S(w.filters||{}),p(z=>z.map(_=>{const Y=w.cols.find(W=>W.key===_.key);return Y?{..._,visible:Y.visible}:_})))}function Qc(x){V(w=>w.filter((z,_)=>_!==x))}function Gc(){const x={sort:b,filters:k,cols:u.map(_=>({key:_.key,visible:_.visible}))},w=encodeURIComponent(btoa(JSON.stringify(x))),z=window.location.origin+window.location.pathname+"#v="+w;navigator.clipboard.writeText(z).then(()=>alert("Shareable view link copied to clipboard."))}function mr(x,w){const z=m.find(_=>_.id===w);z&&(x==="call"?dl(z,"call"):x==="msg"?dl(z,"message"):dl(z,"activity"))}function Kc(x){p(w=>w.map(z=>z.key===x?{...z,visible:!z.visible}:z))}g.useEffect(()=>{try{const x=localStorage.getItem("mcp.views");x&&V(JSON.parse(x))}catch{}},[]),g.useEffect(()=>{const x=a.current,w=i.current,z=o.current,_=d.current;if(z&&x){let Y=function(me){x.style.width=Math.min(cl,Math.max(ul,me))+"px"},W=function(me){var ye;Wt=!0,$r=me.clientX,Qr=x.getBoundingClientRect().width,(ye=z.setPointerCapture)==null||ye.call(z,me.pointerId),document.body.classList.add("select-none")},Me=function(me){if(!Wt)return;const ye=me.clientX-$r;Y(Qr+ye)},He=function(me){var ye;Wt=!1,document.body.classList.remove("select-none");try{(ye=z.releasePointerCapture)==null||ye.call(z,me.pointerId)}catch{}},Wt=!1,$r=0,Qr=0;const ul=220,cl=600;return z.addEventListener("pointerdown",W),window.addEventListener("pointermove",Me),window.addEventListener("pointerup",He),()=>{z.removeEventListener("pointerdown",W),window.removeEventListener("pointermove",Me),window.removeEventListener("pointerup",He)}}if(_&&w){let Y=function(me){w.style.width=Math.min(cl,Math.max(ul,me))+"px"},W=function(me){var ye;Wt=!0,$r=me.clientX,Qr=w.getBoundingClientRect().width,(ye=_.setPointerCapture)==null||ye.call(_,me.pointerId),document.body.classList.add("select-none")},Me=function(me){if(!Wt)return;const ye=$r-me.clientX;Y(Qr+ye)},He=function(me){var ye;Wt=!1,document.body.classList.remove("select-none");try{(ye=_.releasePointerCapture)==null||ye.call(_,me.pointerId)}catch{}},Wt=!1,$r=0,Qr=0;const ul=220,cl=560;return _.addEventListener("pointerdown",W),window.addEventListener("pointermove",Me),window.addEventListener("pointerup",He),()=>{_.removeEventListener("pointerdown",W),window.removeEventListener("pointermove",Me),window.removeEventListener("pointerup",He)}}},[]),g.useEffect(()=>{const x=setInterval(()=>{E(w=>{let z=!1;const _=new Map(w);for(const[Y,W]of _.entries()){const Me=W.map(He=>He.type==="Call"&&He.live&&He.progress<90?(z=!0,{...He,progress:He.progress+10}):He);z&&_.set(Y,Me)}return z?_:w})},1e3);return()=>clearInterval(x)},[]),g.useEffect(()=>{function x(w){A&&!w.target.closest("#colBtn")&&!w.target.closest("#colMenu")&&I(!1),K&&!w.target.closest("#saveFilterBtn")&&!w.target.closest("#viewsMenu")&&ee(!1);const z=document.getElementById("rowMenu");z&&!z.classList.contains("hidden")&&!w.target.closest("#rowMenuBtn")&&!w.target.closest("#rowMenu")&&z.classList.add("hidden"),nt&&!w.target.closest("#listViewOptionsBtn")&&!w.target.closest("#listViewOptionsMenu")&&Be(!1)}return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[A,K]),g.useEffect(()=>{ir(!0);const x=setTimeout(()=>ir(!1),4e3);return()=>clearTimeout(x)},[]),g.useEffect(()=>{const x=()=>{Ut(!0)},w=()=>{Ft(!0)},z=document.getElementById("openEmailTemplates"),_=document.getElementById("openScheduling");return z&&z.addEventListener("click",x),_&&_.addEventListener("click",w),()=>{z&&z.removeEventListener("click",x),_&&_.removeEventListener("click",w)}},[]);function Yc(x){const w=x==="High"?"bg-red-100 text-red-700":x==="Medium"?"bg-amber-100 text-amber-700":"bg-emerald-100 text-emerald-700";return r.jsx("span",{className:`px-2 py-0.5 rounded ${w} text-[11px]`,children:x})}function Jc(x){return r.jsx("span",{className:"px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[11px]",children:x})}return r.jsxs("div",{className:"h-screen w-screen bg-neutral-50 text-neutral-900",children:[r.jsx("style",{children:`
        /* ====== Layout bits ====== */
        .gutter { width: 8px; cursor: col-resize; user-select: none; position: relative; flex: 0 0 8px; touch-action: none }
        .gutter::after { content: ""; position: absolute; inset: 0; width: 2px; margin: 0 auto; background: rgba(0,0,0,.08); border-radius:1px }
        .gutter:hover::after, .gutter:focus-visible::after { background: rgba(0,0,0,.2) }
        .tooltip { position: absolute; left: 100%; top: 50%; transform: translateY(-50%); white-space: nowrap; font-size: 12px; background: rgba(17,24,39,.96); color:#fff; padding:.25rem .5rem; border-radius:.375rem; box-shadow:0 8px 24px rgba(0,0,0,.2); opacity:0; pointer-events:none; transition:opacity .12s ease; margin-left:.5rem }
        .nav-item:hover .tooltip { opacity:1 }
        #rightBar .tooltip { left:auto; right:100%; margin-left:0; margin-right:.5rem }
        .nav-item .tooltip::after { content:""; position:absolute; top:50%; left:-4px; transform:translateY(-50%); border:6px solid transparent; border-right-color: rgba(17,24,39,.96) }
        #rightBar .tooltip::after { left:auto; right:-4px; border-right-color:transparent; border-left-color: rgba(17,24,39,.96) }

        #dataTable.compact td, #dataTable.compact th { padding-top:.25rem; padding-bottom:.25rem }
        #dataTable.comfortable td, #dataTable.comfortable th { padding-top:1rem; padding-bottom:1rem }
        #dataTable.dense td, #dataTable.dense th { padding-top:.1rem; padding-bottom:.1rem; font-size:12px }
        #dataTable.striped tbody tr:nth-child(even) { background-color: #f9fafb }

        /* List View Modes */
        #listWrap.compact { gap: 0.5rem; }
        #listWrap.compact .rc-card-item { padding: 0.5rem; }
        #listWrap.dense { gap: 0.25rem; }
        #listWrap.dense .rc-card-item { padding: 0.35rem; font-size: 12px; }
        #listWrap.comfortable { gap: 1rem; }
        #listWrap.comfortable .rc-card-item { padding: 1.25rem; }
        #listWrap.striped .rc-card-item:nth-child(even) { background-color: #f9fafb; }

        .drawer { position: fixed; top: 56px; right: 0; height: calc(100vh - 56px); width: 380px; background:#fff; border-left:1px solid #e5e7eb; box-shadow:-10px 0 30px rgba(0,0,0,.08); transform: translateX(100%); transition: transform .2s ease; will-change: transform; z-index:50 }
        .drawer.open { transform: translateX(0) }
        .drawer-mask { position: fixed; inset: 56px 0 0 0; background: rgba(17,24,39,.35); backdrop-filter: saturate(120%) blur(1px); opacity:0; pointer-events:none; transition: opacity .2s ease; z-index:40 }
        .drawer-mask.show { opacity:1; pointer-events:auto }

        .activity-item { display:grid; grid-template-columns: 32px 1fr auto; gap:.5rem; align-items:start }
        .activity-icon { width:28px; height:28px; border-radius:.5rem; display:grid; place-items:center }
        .icon-phone { background:#eef2ff; color:#4338ca }
        .icon-msg { background:#ecfeff; color:#0369a1 }
        .icon-note { background:#fef3c7; color:#b45309 }
        .progress { height:8px; border-radius:9999px; background:#f3f4f6; overflow:hidden; border:1px solid #e5e7eb }
        .progress-bar { height:100%; width:0%; background:#111827; border-radius:9999px; transition: width .35s ease }
        .progress--success .progress-bar { background:#16a34a }
        .progress--warning .progress-bar { background:#f59e0b }
        .progress--danger .progress-bar { background:#dc2626 }
        .badge { font-size:10px; border:1px solid #e5e7eb; border-radius:.375rem; padding:.1rem .35rem; color:#525252 }
      `}),r.jsxs("div",{className:"flex flex-col h-full",children:[r.jsx(Nh,{globalSearch:h,setGlobalSearch:c}),r.jsxs("div",{className:"flex flex-1 min-h-0",children:[r.jsx(kh,{leftBarRef:s,onCollapse:()=>{const x=getComputedStyle(s.current).width==="16px"?"4rem":"16px";s.current.style.width=x},onShowDashboard:()=>{or(!1),dr(!1),ur(!1),Ut(!1),Ft(!1),cr(!1),O(!0)},onShowTenantSetup:()=>{O(!1),dr(!1),ur(!1),Ut(!1),Ft(!1),cr(!1),or(!0)},onShowDataReporting:()=>{O(!1),or(!1),ur(!1),Ut(!1),Ft(!1),cr(!1),dr(!0)},onShowMasterTables:()=>{O(!1),or(!1),dr(!1),Ut(!1),Ft(!1),cr(!1),ur(!0)},onShowUserManagement:()=>{or(!1),dr(!1),ur(!1),Ut(!1),Ft(!1),O(!1),cr(!0)}}),r.jsxs("div",{id:"appCol",className:"flex-1 min-w-0 flex",children:[r.jsxs("section",{id:"listPane",ref:a,className:"w-[300px] min-w-[220px] max-w-[440px] bg-white border-r border-neutral-200 flex flex-col",children:[r.jsxs("div",{className:"h-12 px-3 flex items-center justify-between border-b border-neutral-200",children:[r.jsx("div",{className:"text-sm font-semibold",children:"Patients"}),r.jsx("div",{className:"flex items-center gap-1",children:r.jsx("button",{className:"h-8 w-8 rounded-lg hover:bg-neutral-100",title:"Refresh",onClick:()=>{},children:r.jsx("svg",{className:"w-4 h-4 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M4 4v6h6M20 20v-6h-6M20 9a8 8 0 10-3.3 6.5"})})})})]}),r.jsx("div",{id:"listItems",className:"flex-1 overflow-y-auto divide-y divide-neutral-200 text-sm",children:xr.map(x=>r.jsxs("div",{className:"px-3 py-3 hover:bg-neutral-50 cursor-pointer",onClick:()=>{const w=document.querySelector(`#row-${x.id}`);w&&(w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("bg-amber-50"),setTimeout(()=>w.classList.remove("bg-amber-50"),900))},children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"text-sm font-medium",children:x.name}),r.jsx("span",{className:"text-[11px] text-neutral-500",children:x.updated})]}),r.jsxs("div",{className:"text-xs text-neutral-500 truncate",children:["Risk: ",x.risk," â€¢ ",x.status," â€¢ ",x.careMgr]})]},x.id))})]}),r.jsx("div",{id:"gutterAB",ref:o,className:"gutter",role:"separator","aria-orientation":"vertical",tabIndex:"0",title:"Drag to resize"}),r.jsxs("section",{id:"detailPane",className:"flex-1 min-w-[420px] bg-white flex flex-col",children:[dt?r.jsx(Eh,{onClose:()=>or(!1)}):Pc?r.jsx(zh,{onClose:()=>dr(!1)}):Tc?r.jsx(Lh,{onClose:()=>ur(!1)}):Bc?r.jsx(Ph,{onClose:()=>Ut(!1)}):Rc?r.jsx(Th,{onClose:()=>Ft(!1)}):_c?r.jsx(Bh,{onClose:()=>cr(!1)}):ol?r.jsx(Mh,{onClose:()=>O(!1)}):null,null,r.jsxs("div",{className:"h-12 px-3 lg:px-4 border-b border-neutral-200 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsxs("div",{className:"inline-flex rounded-lg border border-neutral-300 overflow-hidden",children:[r.jsx("button",{id:"gridViewBtn",className:`px-3 h-8 text-sm ${M==="grid"?"bg-neutral-900 text-white":""}`,onClick:()=>P("grid"),children:"Grid"}),r.jsx("button",{id:"listViewBtn",className:`px-3 h-8 text-sm ${M==="list"?"bg-neutral-900 text-white":""}`,onClick:()=>P("list"),children:"List"})]}),r.jsxs("div",{className:"relative",children:[r.jsx("button",{id:"colBtn",className:"h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2",onClick:x=>{x.stopPropagation(),I(w=>!w)},children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),A&&r.jsxs("div",{id:"colMenu",className:"absolute z-10 mt-1 w-56 bg-white border border-neutral-200 rounded-xl shadow",children:[r.jsx("div",{className:"p-2 text-xs font-semibold text-neutral-500",children:"Show/Hide Columns"}),r.jsx("div",{id:"colChecks",className:"max-h-64 overflow-y-auto p-2 space-y-1",children:u.map(x=>r.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[r.jsx("input",{type:"checkbox",className:"rounded border-neutral-300",checked:x.visible,onChange:()=>Kc(x.key)}),r.jsx("span",{children:x.label})]},x.key))})]})]}),r.jsxs("div",{className:"relative group",children:[r.jsxs("button",{id:"saveFilterBtn",className:"h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2",title:"Save current filters",onClick:()=>{$c()},children:[r.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M5 5h14v14H5z"}),r.jsx("path",{d:"M9 5v6l3-2 3 2V5"})]}),r.jsx("span",{className:"tooltip",children:"Save current filters as a view"})]}),K&&r.jsxs("div",{id:"viewsMenu",className:"absolute z-10 mt-1 w-56 bg-white border border-neutral-200 rounded-xl shadow left-full ml-2",children:[r.jsx("div",{className:"p-2 text-xs font-semibold text-neutral-500",children:"Saved Views"}),r.jsx("div",{id:"viewsList",className:"p-2 space-y-1",children:Q.length===0?r.jsx("div",{className:"text-xs text-neutral-500",children:"No saved views"}):Q.map((x,w)=>r.jsxs("div",{className:"flex items-center justify-between rounded-lg hover:bg-neutral-50 px-2 py-1",children:[r.jsx("button",{className:"text-sm",onClick:()=>Di(w),children:x.name}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{className:"text-[11px] px-2 py-0.5 rounded border border-neutral-300 hover:bg-neutral-100",onClick:()=>Di(w),children:"Apply"}),r.jsx("button",{className:"text-[11px] px-2 py-0.5 rounded border border-red-200 text-red-600 hover:bg-red-50",onClick:()=>Qc(w),children:"Delete"})]})]},w))})]})]}),r.jsxs("div",{className:"relative",children:[r.jsxs("button",{id:"listViewOptionsBtn",className:`h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2 ${nt?"bg-neutral-100":""}`,title:"List view options",onClick:x=>{x.stopPropagation(),Be(w=>!w)},children:[r.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M8 12h8M12 8v8"})]}),"Options"]}),nt&&r.jsxs("div",{id:"listViewOptionsMenu",className:"absolute z-10 mt-1 w-48 bg-white border border-neutral-200 rounded-xl shadow right-0",children:[r.jsx("div",{className:"p-2 text-xs font-semibold text-neutral-500",children:"Table Density"}),r.jsx("div",{className:"p-1 space-y-1",children:["","compact","comfortable","dense","striped"].map(x=>r.jsxs("button",{className:`w-full text-left px-2 py-1.5 rounded-lg text-sm flex items-center justify-between ${L===x?"bg-neutral-50 font-medium":"hover:bg-neutral-50"}`,onClick:()=>{R(x),Be(!1)},children:[r.jsx("span",{children:x===""?"Normal":x.charAt(0).toUpperCase()+x.slice(1)}),L===x&&r.jsx("svg",{className:"w-4 h-4 text-neutral-900",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M5 13l4 4L19 7"})})]},x))})]})]}),r.jsx("button",{id:"clearFilters",className:"h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50",title:"Clear all filters",onClick:()=>{Vc()},children:"Clear"}),r.jsx("button",{id:"shareLink",className:"h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2",title:"Copy shareable link",onClick:()=>Gc(),children:r.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M15 8a5 5 0 1 0-9.9 1.1"}),r.jsx("path",{d:"M15 8l-7.5 4.5"}),r.jsx("path",{d:"M19 13a5 5 0 1 1-9.9-1.1"})]})})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{id:"addRow",className:"h-8 px-3 rounded-lg bg-neutral-900 text-white text-sm hover:bg-neutral-800",onClick:()=>{const x=Math.max(...m.map(w=>w.id))+1;v(w=>[...w,{id:x,name:`New Patient ${x}`,age:50,risk:"Low",status:"Active",careMgr:"New",updated:new Date().toISOString().slice(0,10),notes:""}])},children:"Add"}),r.jsx("button",{id:"deleteSelected",className:"h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50",onClick:()=>{v(x=>x.filter(w=>!f.has(w.id))),y(new Set)},children:"Delete"}),r.jsx("button",{id:"cloneSelected",className:"h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50",onClick:()=>{const x=Array.from(f);x.length!==0&&(v(w=>{let _=Math.max(...w.map(W=>W.id))+1;const Y=w.filter(W=>x.includes(W.id)).map(W=>({...W,id:_++}));return[...w,...Y]}),y(new Set))},children:"Clone"})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsxs("div",{className:"relative",children:[r.jsx("button",{id:"rowMenuBtn",className:"h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center",title:"More options",onClick:x=>{const w=document.getElementById("rowMenu");w&&w.classList.toggle("hidden")},children:r.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[r.jsx("circle",{cx:"5",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"12",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"19",cy:"12",r:"1.5"})]})}),r.jsxs("div",{id:"rowMenu",className:"hidden absolute right-0 mt-2 w-40 bg-white border border-neutral-200 rounded-xl shadow z-20",children:[r.jsx("button",{className:"w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm",id:"menuClone",onClick:()=>alert("Clone action"),children:"Clone"}),r.jsx("button",{className:"w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm",id:"menuDelete",onClick:()=>alert("Delete action"),children:"Delete"}),r.jsx("button",{className:"w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm",id:"menuUpdate",onClick:()=>alert("Update action"),children:"Update"}),r.jsx("button",{className:"w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm",id:"menuRename",onClick:()=>alert("Rename action"),children:"Rename"})]})]}),r.jsx("button",{id:"filterMenuBtn",className:"h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center",title:"Show filters",onClick:()=>{const x=document.getElementById("filterRow");x&&x.classList.toggle("hidden")},children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M3 5h18M6 10h12M10 15h4"})})})]})]}),r.jsx("div",{id:"gridWrap",className:`flex-1 overflow-auto ${M==="list"?"hidden":""}`,children:r.jsxs("table",{id:"dataTable",className:`w-full text-sm ${L}`,children:[r.jsxs("thead",{className:"sticky top-0 bg-neutral-50 border-b border-neutral-200",children:[r.jsxs("tr",{children:[r.jsx("th",{className:"w-10 px-3 py-2",children:r.jsx("input",{id:"selectAll",type:"checkbox",className:"rounded border-neutral-300",onChange:x=>Oc(x.target.checked),checked:f.size>0&&f.size===xr.length&&xr.length>0})}),Wn.map(x=>r.jsx("th",{className:"px-3 py-2 text-left font-medium text-xs text-neutral-600 select-none",style:{width:`${x.width}px`},"data-key":x.key,onClick:()=>Ac(x.key),children:r.jsxs("div",{className:"inline-flex items-center gap-1 cursor-pointer hover:text-neutral-900",children:[r.jsx("span",{children:x.label}),r.jsx("span",{className:"text-neutral-400",children:b.key===x.key?b.dir==="asc"?"â–²":"â–¼":""})]})},x.key)),r.jsx("th",{className:"px-3 py-2 text-right font-medium text-xs text-neutral-600",style:{width:"140px"},children:"Actions"})]}),r.jsxs("tr",{id:"filterRow",className:"border-b border-neutral-200",children:[r.jsx("td",{}),Wn.map(x=>r.jsx("td",{className:"px-3 py-2",children:r.jsx("input",{"data-key":x.key,type:"text",placeholder:`Filter ${x.label}`,className:"w-full h-8 rounded-lg border border-neutral-300 px-2 text-xs focus:outline-none focus:ring focus:ring-neutral-200",value:k[x.key]||"",onChange:w=>Dc(x.key,w.target.value)})},x.key)),r.jsx("td",{})]})]}),r.jsx("tbody",{id:"tbody",className:"divide-y divide-neutral-100",children:xr.map(x=>r.jsxs(Oa.Fragment,{children:[r.jsxs("tr",{id:`row-${x.id}`,className:"hover:bg-neutral-50",onClick:w=>{w.target.closest('input[type="checkbox"]')||w.target.closest(".rc-call")||w.target.closest(".rc-msg")||w.target.closest(".rc-log")||Uc(x.id)},children:[r.jsx("td",{className:"px-3 py-2 align-top",children:r.jsx("input",{type:"checkbox",className:"rounded border-neutral-300 rowCheck","data-id":x.id,checked:f.has(x.id),onChange:w=>Hc(x.id,w.target.checked)})}),Wn.map(w=>r.jsx("td",{className:"px-3 py-2 align-top",children:w.key==="risk"?Yc(x[w.key]):w.key==="status"?Jc(x[w.key]):x[w.key]??""},w.key)),r.jsx("td",{className:"px-3 py-2 align-top",children:r.jsxs("div",{className:"flex justify-end gap-1",children:[r.jsx("button",{className:"rc-call px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs","data-id":x.id,onClick:w=>{w.stopPropagation(),mr("call",x.id)},children:"Call"}),r.jsx("button",{className:"rc-msg px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs","data-id":x.id,onClick:w=>{w.stopPropagation(),mr("msg",x.id)},children:"Msg"}),r.jsx("button",{className:"rc-log px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs","data-id":x.id,onClick:w=>{w.stopPropagation(),mr("log",x.id)},children:"Log"})]})})]}),j.has(x.id)?r.jsxs("tr",{className:"bg-neutral-50/50",children:[r.jsx("td",{}),r.jsx("td",{colSpan:Wn.length+1,children:r.jsxs("div",{className:"p-3 rounded-lg border border-neutral-200 text-xs text-neutral-700",children:[r.jsxs("div",{className:"font-medium mb-1",children:[x.name," â€” Notes"]}),r.jsx("div",{className:"mb-2",children:x.notes||"No notes"}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs",children:"Open Profile"}),r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs",children:"Create Encounter"}),r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs",children:"Share"})]})]})})]}):null]},x.id))})]})}),r.jsx("div",{id:"listWrap",className:` ${M==="list"?"":"hidden"} ${L} flex-1 overflow-auto p-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3`,children:xr.map(x=>r.jsxs("div",{className:"rc-card-item rounded-2xl border border-neutral-200 bg-white p-3 hover:shadow",children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:"font-medium",children:x.name}),r.jsx("span",{className:"text-[11px] text-neutral-500",children:x.updated})]}),r.jsxs("div",{className:"mt-1 text-xs text-neutral-600",children:["ID: ",x.id," â€¢ Age: ",x.age," â€¢ Care: ",x.careMgr]}),r.jsxs("div",{className:"mt-2",children:[r.jsx("span",{className:`px-2 py-0.5 rounded ${x.risk==="High"?"bg-red-100 text-red-700":x.risk==="Medium"?"bg-amber-100 text-amber-700":"bg-emerald-100 text-emerald-700"} text-[11px]`,children:x.risk}),r.jsx("span",{className:"px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[11px] ml-1",children:x.status})]}),r.jsx("div",{className:"mt-3 text-xs text-neutral-700 line-clamp-2",children:x.notes||""}),r.jsxs("div",{className:"mt-3 flex gap-2",children:[r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs",children:"Open"}),r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs",children:"Share"})]}),r.jsxs("div",{className:"mt-2 flex justify-end gap-1",children:[r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs rc-card","data-act":"call","data-id":x.id,onClick:()=>{mr("call",x.id)},children:"Call"}),r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs rc-card","data-act":"msg","data-id":x.id,onClick:()=>{mr("msg",x.id)},children:"Msg"}),r.jsx("button",{className:"px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs rc-card","data-act":"log","data-id":x.id,onClick:()=>{mr("log",x.id)},children:"Log"})]})]},`card-${x.id}`))})]})]}),r.jsx("div",{id:"gutterBC",ref:d,className:"gutter",role:"separator","aria-orientation":"vertical",tabIndex:"0",title:"Drag to resize"}),r.jsx(Sh,{rightListPaneRef:i,navigate:e}),r.jsx(Ch,{rightBarRef:l,onCollapse:()=>{const x=getComputedStyle(l.current).width==="16px"?"4rem":"16px";l.current.style.width=x}})]})]}),r.jsxs("div",{id:"toastNotify",className:`fixed bottom-6 right-6 z-50 w-80 bg-white border border-neutral-200 shadow-2xl rounded-xl p-4 flex items-start gap-3 transition-all duration-500 transform ${wt?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,onClick:()=>{},children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0",children:r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"text-sm font-semibold text-neutral-900",children:"Welcome back, Dr. Smith"}),r.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"You have 3 high-risk patient alerts and 5 new messages requiring attention."})]}),r.jsx("button",{className:"text-neutral-400 hover:text-neutral-600",onClick:x=>{x.stopPropagation(),ir(!1)},children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsx("div",{className:`drawer-mask ${D?"show":""}`,onClick:Ai,style:{display:D?void 0:"none"}}),r.jsxs("aside",{id:"patientDrawer",className:`drawer ${D?"open":""}`,style:{display:D?void 0:"none"},children:[r.jsxs("div",{className:"h-12 px-4 border-b border-neutral-200 flex items-center justify-between",children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("div",{id:"drawerTitle",className:"text-sm font-semibold truncate",children:(F==null?void 0:F.name)??"Patient"}),r.jsx("div",{id:"drawerSub",className:"text-[11px] text-neutral-500 truncate",children:F?`ID ${F.id} â€¢ Care Mgr ${F.careMgr} â€¢ ${F.status}`:""})]}),r.jsx("button",{id:"drawerClose",className:"h-8 w-8 rounded-lg hover:bg-neutral-100",title:"Close",onClick:Ai,children:r.jsx("svg",{className:"w-4 h-4 mx-auto",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 6l12 12M6 18L18 6"})})})]}),r.jsxs("div",{className:"px-4 py-2 border-b border-neutral-200 flex gap-2",children:[r.jsx("button",{className:`tabBtn px-3 h-8 rounded-lg border text-sm ${Oe==="call"?"bg-neutral-900 text-white border-neutral-900":"border-neutral-300 hover:bg-neutral-50"}`,onClick:()=>Se("call"),children:"Call"}),r.jsx("button",{className:`tabBtn px-3 h-8 rounded-lg border text-sm ${Oe==="message"?"bg-neutral-900 text-white border-neutral-900":"border-neutral-300 hover:bg-neutral-50"}`,onClick:()=>Se("message"),children:"Message"}),r.jsx("button",{className:`tabBtn px-3 h-8 rounded-lg border text-sm ${Oe==="activity"?"bg-neutral-900 text-white border-neutral-900":"border-neutral-300 hover:bg-neutral-50"}`,onClick:()=>Se("activity"),children:"Activity"})]}),r.jsxs("div",{className:`p-4 space-y-3 ${Oe==="call"?"":"hidden"}`,children:[r.jsx("div",{className:"text-xs text-neutral-500",children:"Simulated dialer"}),r.jsx("input",{ref:Ri,className:"w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm",placeholder:"Enter phone numberâ€¦"}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"px-3 h-9 rounded-lg bg-neutral-900 text-white text-sm",onClick:()=>{var w;if(!F)return;const x=((w=Ri.current)==null?void 0:w.value)||"(unknown)";Wr(F.id,{type:"Call",status:"dialing",text:`Dialing ${x}`,progress:10,live:!0})},children:"Start Call"}),r.jsx("button",{className:"px-3 h-9 rounded-lg border border-neutral-300 text-sm",onClick:()=>{F&&(Wc(F.id),Wr(F.id,{type:"Note",status:"completed",text:"Call finished",progress:100}))},children:"End Call"})]})]}),r.jsxs("div",{className:`p-4 space-y-3 ${Oe==="message"?"":"hidden"}`,children:[r.jsx("textarea",{ref:Fn,rows:"4",className:"w-full rounded-lg border border-neutral-300 p-3 text-sm",placeholder:"Type messageâ€¦"}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("input",{ref:_i,className:"h-9 rounded-lg border border-neutral-300 px-3 text-sm w-48",placeholder:"To (phone/email)"}),r.jsx("button",{className:"px-3 h-9 rounded-lg bg-neutral-900 text-white text-sm",onClick:()=>{var z,_;if(!F)return;const x=((z=_i.current)==null?void 0:z.value)||"(no recipient)",w=((_=Fn.current)==null?void 0:_.value)||"(empty)";Wr(F.id,{type:"Message",status:"sent",text:`To ${x}: ${w}`,progress:100}),Fn.current&&(Fn.current.value="")},children:"Send"})]})]}),r.jsx("div",{className:`p-4 ${Oe==="activity"?"":"hidden"}`,children:r.jsx("div",{id:"activityList",className:"space-y-3 text-sm",children:(F&&Ye.get(F.id)?Ye.get(F.id):[]).length?(Ye.get(F.id)||[]).map((x,w)=>{const z=x.status==="completed"||x.progress===100?"progress--success":x.status==="dialing"||x.status==="ringing"||x.live?"progress--warning":x.status==="failed"?"progress--danger":"";return r.jsxs("div",{className:"activity-item",children:[r.jsx("div",{className:`activity-icon ${x.type==="Call"?"icon-phone":x.type==="Message"?"icon-msg":"icon-note"}`,children:r.jsx("div",{className:"text-[0] leading-none","aria-hidden":"true",children:Fc(x.type)})}),r.jsxs("div",{className:"min-w-0",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"font-medium",children:x.type}),r.jsx("span",{className:"badge",children:x.status||"info"})]}),r.jsx("div",{className:"text-sm text-neutral-700 truncate",children:x.text||""}),r.jsx("div",{className:`mt-2 progress ${z}`,role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":x.progress|0,children:r.jsx("div",{className:"progress-bar",style:{width:`${Math.min(100,Math.max(0,x.progress))}%`}})})]}),r.jsx("div",{className:"text-[11px] text-neutral-500 whitespace-nowrap pl-2",children:new Date(x.ts).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]},w)}):r.jsx("div",{className:"text-sm text-neutral-500",children:"No activity yet."})})})]})]})}const pn="rbac_demo_v1",Ue=()=>new Date().toISOString().slice(0,19).replace("T"," "),Ra={users:[{id:1,name:"Alice Johnson",email:"alice@example.com"},{id:2,name:"Bob Smith",email:"bob@example.com"},{id:3,name:"Carlos Diaz",email:"carlos@example.com"},{id:4,name:"Divya Patel",email:"divya@example.com"},{id:5,name:"Ethan Park",email:"ethan@example.com"}],roles:[{id:"admin",name:"Administrator",desc:"Full system access",users:[1],updated_at:Ue()},{id:"supervisor",name:"Supervisor",desc:"Approve workflows, manage teams",users:[2,3],updated_at:Ue()},{id:"navigator",name:"Care Navigator",desc:"Manage patients, tasks, referrals",users:[4,5],updated_at:Ue()},{id:"viewer",name:"MCP Viewer",desc:"Read-only access",users:[],updated_at:Ue()}],modules:["Patients","Referrals","Authorizations","Assessments","CarePlans","Tasks","Docs","Settings"],perms:{},audit:[]};function _a(e){Object.keys(e.perms).length||e.roles.forEach(t=>{e.perms[t.id]={},e.modules.forEach(n=>{e.perms[t.id][n]={view:(t.id!=="viewer",!0),create:t.id==="admin",edit:t.id==="admin",delete:t.id==="admin"}})})}function _h(){try{const e=localStorage.getItem(pn);if(!e){const t=structuredClone(Ra);return _a(t),localStorage.setItem(pn,JSON.stringify(t)),t}return JSON.parse(e)}catch(e){console.error("Failed to load state",e);const t=structuredClone(Ra);return _a(t),t}}function Ah(){const[e,t]=g.useState(_h),[n,s]=g.useState(""),[l,a]=g.useState(""),[i,o]=g.useState(!1),[d,u]=g.useState(!1),[p,m]=g.useState(""),[v,b]=g.useState([]);g.useEffect(()=>{localStorage.setItem(pn,JSON.stringify(e))},[e]),g.useEffect(()=>{!l&&e.roles.length>0&&a(e.roles[0].id)},[e.roles,l]);const N=j=>{t(T=>{const D=[{msg:j,at:Ue()},...T.audit].slice(0,100);return{...T,audit:D}})},k=()=>{const j=prompt("New role ID (e.g., billing_manager)");if(!j)return;if(e.roles.some(U=>U.id===j)){alert("Role ID already exists");return}const T=prompt("Role display name","New Role")||"New Role",D=prompt("Description","Description goes here")||"Description goes here";t(U=>{const F={id:j,name:T,desc:D,users:[],updated_at:Ue()},ue={...U.perms};return ue[j]={},U.modules.forEach(Ye=>{ue[j][Ye]={view:!1,create:!1,edit:!1,delete:!1}}),{...U,roles:[...U.roles,F],perms:ue,audit:[{msg:`Created role "${j}"`,at:Ue()},...U.audit].slice(0,100)}})},S=j=>{const T=e.roles.find(F=>F.id===j);if(!T)return;const D=prompt("Role name",T.name);if(D===null)return;const U=prompt("Description",T.desc);U!==null&&t(F=>({...F,roles:F.roles.map(ue=>ue.id===j?{...ue,name:D.trim()||ue.name,desc:U.trim()||ue.desc,updated_at:Ue()}:ue),audit:[{msg:`Edited role "${j}" → name="${D}", desc updated`,at:Ue()},...F.audit].slice(0,100)}))},h=j=>{confirm("Delete this role?")&&(t(T=>{const D={...T.perms};return delete D[j],{...T,roles:T.roles.filter(U=>U.id!==j),perms:D,audit:[{msg:`Deleted role "${j}"`,at:Ue()},...T.audit].slice(0,100)}}),l===j&&a(e.roles.length>1?e.roles.find(T=>T.id!==j).id:""))},c=(j,T,D,U)=>{t(F=>({...F,perms:{...F.perms,[j]:{...F.perms[j],[T]:{...F.perms[j][T],[D]:U}}}}))},f=j=>{l&&t(T=>({...T,perms:{...T.perms,[l]:{...T.perms[l],[j]:{view:!0,create:!0,edit:!0,delete:!0}}}}))},y=j=>{l&&t(T=>({...T,perms:{...T.perms,[l]:{...T.perms[l],[j]:{view:!1,create:!1,edit:!1,delete:!1}}}}))},M=()=>{l&&t(j=>{const T={};return j.modules.forEach(D=>{T[D]={view:!0,create:!0,edit:!0,delete:!0}}),{...j,perms:{...j.perms,[l]:T}}})},P=()=>{l&&t(j=>{const T={};return j.modules.forEach(D=>{T[D]={view:!1,create:!1,edit:!1,delete:!1}}),{...j,perms:{...j.perms,[l]:T}}})},L=()=>{N(`Saved permissions for role "${l}"`),alert("Permissions saved")},R=()=>{p&&(t(j=>{var T;return{...j,roles:j.roles.map(D=>D.id===p?{...D,users:v,updated_at:Ue()}:D),audit:[{msg:`Updated user assignment for role "${(T=j.roles.find(D=>D.id===p))==null?void 0:T.name}"`,at:Ue()},...j.audit].slice(0,100)}}),u(!1))},Q=()=>{if(!confirm("Reset demo data?"))return;localStorage.removeItem(pn);const j=structuredClone(Ra);_a(j),t(j),localStorage.setItem(pn,JSON.stringify(j))},V=g.useMemo(()=>{const j=n.trim().toLowerCase();return e.roles.filter(T=>!j||T.name.toLowerCase().includes(j)||T.desc.toLowerCase().includes(j))},[e.roles,n]);return r.jsxs("div",{className:`h-full bg-slate-50 text-slate-900 antialiased ${i?"sidebar-collapsed":""}`,children:[r.jsx("style",{children:`
                .sidebar-collapsed .label { display: none }
                .sidebar-collapsed .submenu { display: none }
                .sidebar-collapsed .w-56 { width: 4rem }
                .th-sticky { position: sticky; top: 0; z-index: 10 }
            `}),r.jsxs("div",{className:"min-h-screen grid grid-cols-[auto_1fr]",children:[r.jsxs("aside",{id:"sidebar",className:"w-56 transition-all bg-white border-r border-slate-200 shadow-soft flex flex-col",children:[r.jsxs("div",{className:"h-14 flex items-center justify-between px-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"h-8 w-8 grid place-items-center rounded-xl bg-sky-500/10 text-sky-500",children:r.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5",fill:"currentColor",children:r.jsx("path",{d:"M12 2 2 7l10 5 9.5-4.75V22h-3v-8.5L12 17 2 12v10H0V7z"})})}),!i&&r.jsx("span",{className:"label font-semibold tracking-tight",children:"Control Tower"})]}),r.jsx("button",{onClick:()=>o(!i),className:"h-9 w-9 rounded-lg hover:bg-slate-100 grid place-items-center",title:"Collapse",children:r.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5",fill:"currentColor",children:r.jsx("path",{d:"M7 12l5-5v10zM13 12l5-5v10z"})})})]}),r.jsxs("nav",{className:"px-2 pb-4 text-sm flex-1",children:[r.jsxs("a",{className:"flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-100",href:"/dashboard",children:[r.jsx("svg",{className:"w-5 h-5 text-slate-500",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})}),!i&&r.jsx("span",{className:"label",children:"Dashboard"})]}),r.jsxs("div",{className:"mt-2",children:[r.jsxs("button",{className:"w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-100",children:[r.jsx("svg",{className:"w-5 h-5 text-slate-500",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14z"})}),!i&&r.jsx("span",{className:"label",children:"Users & Roles"})]}),!i&&r.jsxs("div",{className:"submenu ml-9 mt-1 space-y-1",children:[r.jsx("a",{href:"#roles",className:"block px-2 py-1.5 rounded hover:bg-slate-100",children:"Roles"}),r.jsx("a",{href:"#permissions",className:"block px-2 py-1.5 rounded hover:bg-slate-100",children:"Permissions"}),r.jsx("a",{href:"#audit",className:"block px-2 py-1.5 rounded hover:bg-slate-100",children:"Audit Log"})]})]}),r.jsxs("div",{className:"mt-2",children:[r.jsxs("button",{className:"w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-100",children:[r.jsx("svg",{className:"w-5 h-5 text-slate-500",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M12 7 2 12l10 5 10-5z"})}),!i&&r.jsx("span",{className:"label",children:"Patients"})]}),!i&&r.jsxs("div",{className:"submenu ml-9 mt-1 space-y-1",children:[r.jsx("a",{href:"#",className:"block px-2 py-1.5 rounded hover:bg-slate-100",children:"Status Board"}),r.jsx("a",{href:"#",className:"block px-2 py-1.5 rounded hover:bg-slate-100",children:"Referrals"})]})]})]})]}),r.jsxs("main",{className:"min-w-0 h-screen overflow-y-auto",children:[r.jsx("header",{className:"sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between",children:[r.jsx("h1",{className:"text-lg sm:text-xl font-semibold",children:"RBAC Manager"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("input",{value:n,onChange:j=>s(j.target.value),className:"rounded-lg border border-slate-300 px-3 py-2 text-sm w-64 max-w-[60vw]",placeholder:"Search roles or users..."}),r.jsx("button",{className:"px-2.5 py-2 rounded-lg border border-slate-300 text-sm",children:"🌙"}),r.jsx("button",{onClick:Q,className:"px-3 py-2 rounded-lg border border-slate-300 text-sm",children:"Reset Demo"})]})]})}),r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8",children:[r.jsxs("section",{id:"roles",className:"bg-white rounded-2xl border border-slate-200 shadow-soft",children:[r.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"text-base font-semibold",children:"Roles"}),r.jsx("p",{className:"text-xs text-slate-500",children:"Create roles and assign users"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:k,className:"px-3 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600",children:"Add Role"}),r.jsx("button",{onClick:()=>{var j,T;m(((j=e.roles[0])==null?void 0:j.id)||""),b(((T=e.roles[0])==null?void 0:T.users)||[]),u(!0)},className:"px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50",children:"Assign Users"})]})]}),r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full text-sm",children:[r.jsx("thead",{className:"bg-slate-100 th-sticky",children:r.jsxs("tr",{className:"text-left",children:[r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Role"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Description"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Users"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Last Updated"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Actions"})]})}),r.jsx("tbody",{children:V.map(j=>r.jsxs("tr",{className:"border-t border-slate-100 hover:bg-slate-50",children:[r.jsx("td",{className:"px-3 py-2",children:r.jsx("span",{className:"font-medium",children:j.name})}),r.jsx("td",{className:"px-3 py-2",children:j.desc}),r.jsx("td",{className:"px-3 py-2",children:j.users.map(T=>{var D;return(D=e.users.find(U=>U.id===T))==null?void 0:D.name}).filter(Boolean).join(", ")||r.jsx("span",{className:"text-slate-400",children:"None"})}),r.jsx("td",{className:"px-3 py-2 text-slate-500",children:j.updated_at}),r.jsx("td",{className:"px-3 py-2",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:()=>S(j.id),className:"px-2 py-1 rounded border border-slate-300 text-xs hover:bg-slate-100",children:"Edit"}),r.jsx("button",{onClick:()=>h(j.id),className:"px-2 py-1 rounded border border-rose-300 text-rose-600 text-xs hover:bg-rose-50",children:"Delete"})]})})]},j.id))})]})})]}),r.jsxs("section",{id:"permissions",className:"bg-white rounded-2xl border border-slate-200 shadow-soft",children:[r.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"text-base font-semibold",children:"Permission Matrix"}),r.jsx("p",{className:"text-xs text-slate-500",children:"Toggle CRUD permissions per role and module"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("select",{value:l,onChange:j=>a(j.target.value),className:"rounded-md border border-slate-300 px-2 py-1 text-sm",children:e.roles.map(j=>r.jsx("option",{value:j.id,children:j.name},j.id))}),r.jsx("button",{onClick:M,className:"px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50",children:"Grant All"}),r.jsx("button",{onClick:P,className:"px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50",children:"Revoke All"}),r.jsx("button",{onClick:L,className:"px-3 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600",children:"Save"})]})]}),r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full text-sm",children:[r.jsx("thead",{className:"bg-slate-100 th-sticky",children:r.jsxs("tr",{className:"text-left",children:[r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Module"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"View"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Create"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Edit"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Delete"}),r.jsx("th",{className:"px-3 py-2 font-semibold",children:"Module Actions"})]})}),r.jsx("tbody",{children:l&&e.modules.map(j=>{var D;const T=((D=e.perms[l])==null?void 0:D[j])||{view:!1,create:!1,edit:!1,delete:!1};return r.jsxs("tr",{className:"border-t border-slate-100 hover:bg-slate-50",children:[r.jsx("td",{className:"px-3 py-2 font-medium",children:j}),r.jsx("td",{className:"px-3 py-2",children:r.jsx("input",{type:"checkbox",checked:T.view,onChange:U=>c(l,j,"view",U.target.checked)})}),r.jsx("td",{className:"px-3 py-2",children:r.jsx("input",{type:"checkbox",checked:T.create,onChange:U=>c(l,j,"create",U.target.checked)})}),r.jsx("td",{className:"px-3 py-2",children:r.jsx("input",{type:"checkbox",checked:T.edit,onChange:U=>c(l,j,"edit",U.target.checked)})}),r.jsx("td",{className:"px-3 py-2",children:r.jsx("input",{type:"checkbox",checked:T.delete,onChange:U=>c(l,j,"delete",U.target.checked)})}),r.jsxs("td",{className:"px-3 py-2",children:[r.jsx("button",{onClick:()=>f(j),className:"px-2 py-1 rounded border border-slate-300 text-xs hover:bg-slate-50 mr-2",children:"Grant All"}),r.jsx("button",{onClick:()=>y(j),className:"px-2 py-1 rounded border border-slate-300 text-xs hover:bg-slate-50",children:"Revoke All"})]})]},j)})})]})})]}),r.jsxs("section",{id:"audit",className:"bg-white rounded-2xl border border-slate-200 shadow-soft",children:[r.jsxs("div",{className:"p-4 border-b border-slate-200",children:[r.jsx("h2",{className:"text-base font-semibold",children:"Audit Log"}),r.jsx("p",{className:"text-xs text-slate-500",children:"Recent permission changes"})]}),r.jsx("div",{className:"p-4 space-y-2 text-sm",children:e.audit.map((j,T)=>r.jsxs("div",{className:"rounded-lg border border-slate-200 px-3 py-2 bg-white",children:[r.jsx("div",{className:"text-slate-700",children:j.msg}),r.jsx("div",{className:"text-xs text-slate-500",children:j.at})]},T))})]})]})]})]}),d&&r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",onClick:j=>j.target===j.currentTarget&&u(!1),children:r.jsxs("div",{className:"w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-soft",children:[r.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-slate-200",children:[r.jsx("h3",{className:"font-semibold",children:"Assign Users to Roles"}),r.jsx("button",{onClick:()=>u(!1),className:"h-9 w-9 rounded-lg grid place-items-center hover:bg-slate-100",children:"✕"})]}),r.jsxs("div",{className:"p-4",children:[r.jsxs("div",{className:"grid sm:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-slate-500",children:"Pick Role"}),r.jsx("select",{value:p,onChange:j=>{var D;const T=j.target.value;m(T),b(((D=e.roles.find(U=>U.id===T))==null?void 0:D.users)||[])},className:"w-full rounded-md border border-slate-300 px-2 py-2 text-sm",children:e.roles.map(j=>r.jsx("option",{value:j.id,children:j.name},j.id))})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-slate-500",children:"Select Users"}),r.jsx("select",{multiple:!0,size:"8",value:v.map(String),onChange:j=>{const T=Array.from(j.target.selectedOptions).map(D=>Number(D.value));b(T)},className:"w-full rounded-md border border-slate-300 px-2 py-2 text-sm",children:e.users.map(j=>r.jsxs("option",{value:j.id,children:[j.name," — ",j.email]},j.id))}),r.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Hold Ctrl/Cmd or Shift to select multiple"})]})]}),r.jsx("div",{className:"mt-4 flex items-center justify-end gap-2",children:r.jsx("button",{onClick:R,className:"px-3 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600",children:"Save"})})]})]})})]})}const nd=({children:e})=>{const{user:t}=Lc(),n=il();return t?e:r.jsx(Ec,{to:"/login",state:{from:n},replace:!0})};function Dh(){return r.jsx(wh,{children:r.jsx(yh,{children:r.jsxs(vh,{children:[r.jsx(ln,{path:"/login",element:r.jsx(jh,{})}),r.jsx(ln,{path:"/dashboard",element:r.jsx(nd,{children:r.jsx(Rh,{})})}),r.jsx(ln,{path:"/rbc",element:r.jsx(nd,{children:r.jsx(Ah,{})})}),r.jsx(ln,{path:"/",element:r.jsx(Ec,{to:"/dashboard",replace:!0})})]})})})}Il.createRoot(document.getElementById("root")).render(r.jsx(Oa.StrictMode,{children:r.jsx(Dh,{})}));
