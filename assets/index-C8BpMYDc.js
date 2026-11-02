(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))f(b);new MutationObserver(b=>{for(const A of b)if(A.type==="childList")for(const z of A.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&f(z)}).observe(document,{childList:!0,subtree:!0});function D(b){const A={};return b.integrity&&(A.integrity=b.integrity),b.referrerPolicy&&(A.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?A.credentials="include":b.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function f(b){if(b.ep)return;b.ep=!0;const A=D(b);fetch(b.href,A)}})();var fs={exports:{}},Aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function r0(){if(Ad)return Aa;Ad=1;var o=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function D(f,b,A){var z=null;if(A!==void 0&&(z=""+A),b.key!==void 0&&(z=""+b.key),"key"in b){A={};for(var V in b)V!=="key"&&(A[V]=b[V])}else A=b;return b=A.ref,{$$typeof:o,type:f,key:z,ref:b!==void 0?b:null,props:A}}return Aa.Fragment=x,Aa.jsx=D,Aa.jsxs=D,Aa}var Ed;function d0(){return Ed||(Ed=1,fs.exports=r0()),fs.exports}var i=d0(),os={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function m0(){if(xd)return k;xd=1;var o=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),q=Symbol.iterator;function st(m){return m===null||typeof m!="object"?null:(m=q&&m[q]||m["@@iterator"],typeof m=="function"?m:null)}var nt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,J={};function xt(m,N,C){this.props=m,this.context=N,this.refs=J,this.updater=C||nt}xt.prototype.isReactComponent={},xt.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},xt.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Ot(){}Ot.prototype=xt.prototype;function Tt(m,N,C){this.props=m,this.context=N,this.refs=J,this.updater=C||nt}var Zt=Tt.prototype=new Ot;Zt.constructor=Tt,G(Zt,xt.prototype),Zt.isPureReactComponent=!0;var pt=Array.isArray;function jt(){}var $={H:null,A:null,T:null,S:null},Lt=Object.prototype.hasOwnProperty;function ne(m,N,C){var B=C.ref;return{$$typeof:o,type:m,key:N,ref:B!==void 0?B:null,props:C}}function Ie(m,N){return ne(m.type,N,m.props)}function ve(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function Kt(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(C){return N[C]})}var Ce=/\/+/g;function Jt(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Kt(""+m.key):N.toString(36)}function ae(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(jt,jt):(m.status="pending",m.then(function(N){m.status==="pending"&&(m.status="fulfilled",m.value=N)},function(N){m.status==="pending"&&(m.status="rejected",m.reason=N)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function T(m,N,C,B,Z){var O=typeof m;(O==="undefined"||O==="boolean")&&(m=null);var K=!1;if(m===null)K=!0;else switch(O){case"bigint":case"string":case"number":K=!0;break;case"object":switch(m.$$typeof){case o:case x:K=!0;break;case Y:return K=m._init,T(K(m._payload),N,C,B,Z)}}if(K)return Z=Z(m),K=B===""?"."+Jt(m,0):B,pt(Z)?(C="",K!=null&&(C=K.replace(Ce,"$&/")+"/"),T(Z,N,C,"",function(_n){return _n})):Z!=null&&(ve(Z)&&(Z=Ie(Z,C+(Z.key==null||m&&m.key===Z.key?"":(""+Z.key).replace(Ce,"$&/")+"/")+K)),N.push(Z)),1;K=0;var dt=B===""?".":B+":";if(pt(m))for(var yt=0;yt<m.length;yt++)B=m[yt],O=dt+Jt(B,yt),K+=T(B,N,C,O,Z);else if(yt=st(m),typeof yt=="function")for(m=yt.call(m),yt=0;!(B=m.next()).done;)B=B.value,O=dt+Jt(B,yt++),K+=T(B,N,C,O,Z);else if(O==="object"){if(typeof m.then=="function")return T(ae(m),N,C,B,Z);throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return K}function R(m,N,C){if(m==null)return m;var B=[],Z=0;return T(m,B,"","",function(O){return N.call(C,O,Z++)}),B}function w(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(C){(m._status===0||m._status===-1)&&(m._status=1,m._result=C)},function(C){(m._status===0||m._status===-1)&&(m._status=2,m._result=C)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var at=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ft={map:R,forEach:function(m,N,C){R(m,function(){N.apply(this,arguments)},C)},count:function(m){var N=0;return R(m,function(){N++}),N},toArray:function(m){return R(m,function(N){return N})||[]},only:function(m){if(!ve(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return k.Activity=U,k.Children=ft,k.Component=xt,k.Fragment=D,k.Profiler=b,k.PureComponent=Tt,k.StrictMode=f,k.Suspense=_,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,k.__COMPILER_RUNTIME={__proto__:null,c:function(m){return $.H.useMemoCache(m)}},k.cache=function(m){return function(){return m.apply(null,arguments)}},k.cacheSignal=function(){return null},k.cloneElement=function(m,N,C){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=G({},m.props),Z=m.key;if(N!=null)for(O in N.key!==void 0&&(Z=""+N.key),N)!Lt.call(N,O)||O==="key"||O==="__self"||O==="__source"||O==="ref"&&N.ref===void 0||(B[O]=N[O]);var O=arguments.length-2;if(O===1)B.children=C;else if(1<O){for(var K=Array(O),dt=0;dt<O;dt++)K[dt]=arguments[dt+2];B.children=K}return ne(m.type,Z,B)},k.createContext=function(m){return m={$$typeof:z,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:A,_context:m},m},k.createElement=function(m,N,C){var B,Z={},O=null;if(N!=null)for(B in N.key!==void 0&&(O=""+N.key),N)Lt.call(N,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Z[B]=N[B]);var K=arguments.length-2;if(K===1)Z.children=C;else if(1<K){for(var dt=Array(K),yt=0;yt<K;yt++)dt[yt]=arguments[yt+2];Z.children=dt}if(m&&m.defaultProps)for(B in K=m.defaultProps,K)Z[B]===void 0&&(Z[B]=K[B]);return ne(m,O,Z)},k.createRef=function(){return{current:null}},k.forwardRef=function(m){return{$$typeof:V,render:m}},k.isValidElement=ve,k.lazy=function(m){return{$$typeof:Y,_payload:{_status:-1,_result:m},_init:w}},k.memo=function(m,N){return{$$typeof:v,type:m,compare:N===void 0?null:N}},k.startTransition=function(m){var N=$.T,C={};$.T=C;try{var B=m(),Z=$.S;Z!==null&&Z(C,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(jt,at)}catch(O){at(O)}finally{N!==null&&C.types!==null&&(N.types=C.types),$.T=N}},k.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},k.use=function(m){return $.H.use(m)},k.useActionState=function(m,N,C){return $.H.useActionState(m,N,C)},k.useCallback=function(m,N){return $.H.useCallback(m,N)},k.useContext=function(m){return $.H.useContext(m)},k.useDebugValue=function(){},k.useDeferredValue=function(m,N){return $.H.useDeferredValue(m,N)},k.useEffect=function(m,N){return $.H.useEffect(m,N)},k.useEffectEvent=function(m){return $.H.useEffectEvent(m)},k.useId=function(){return $.H.useId()},k.useImperativeHandle=function(m,N,C){return $.H.useImperativeHandle(m,N,C)},k.useInsertionEffect=function(m,N){return $.H.useInsertionEffect(m,N)},k.useLayoutEffect=function(m,N){return $.H.useLayoutEffect(m,N)},k.useMemo=function(m,N){return $.H.useMemo(m,N)},k.useOptimistic=function(m,N){return $.H.useOptimistic(m,N)},k.useReducer=function(m,N,C){return $.H.useReducer(m,N,C)},k.useRef=function(m){return $.H.useRef(m)},k.useState=function(m){return $.H.useState(m)},k.useSyncExternalStore=function(m,N,C){return $.H.useSyncExternalStore(m,N,C)},k.useTransition=function(){return $.H.useTransition()},k.version="19.2.6",k}var Td;function gs(){return Td||(Td=1,os.exports=m0()),os.exports}var bt=gs(),rs={exports:{}},Ea={},ds={exports:{}},ms={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function h0(){return jd||(jd=1,(function(o){function x(T,R){var w=T.length;T.push(R);t:for(;0<w;){var at=w-1>>>1,ft=T[at];if(0<b(ft,R))T[at]=R,T[w]=ft,w=at;else break t}}function D(T){return T.length===0?null:T[0]}function f(T){if(T.length===0)return null;var R=T[0],w=T.pop();if(w!==R){T[0]=w;t:for(var at=0,ft=T.length,m=ft>>>1;at<m;){var N=2*(at+1)-1,C=T[N],B=N+1,Z=T[B];if(0>b(C,w))B<ft&&0>b(Z,C)?(T[at]=Z,T[B]=w,at=B):(T[at]=C,T[N]=w,at=N);else if(B<ft&&0>b(Z,w))T[at]=Z,T[B]=w,at=B;else break t}}return R}function b(T,R){var w=T.sortIndex-R.sortIndex;return w!==0?w:T.id-R.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var z=Date,V=z.now();o.unstable_now=function(){return z.now()-V}}var _=[],v=[],Y=1,U=null,q=3,st=!1,nt=!1,G=!1,J=!1,xt=typeof setTimeout=="function"?setTimeout:null,Ot=typeof clearTimeout=="function"?clearTimeout:null,Tt=typeof setImmediate<"u"?setImmediate:null;function Zt(T){for(var R=D(v);R!==null;){if(R.callback===null)f(v);else if(R.startTime<=T)f(v),R.sortIndex=R.expirationTime,x(_,R);else break;R=D(v)}}function pt(T){if(G=!1,Zt(T),!nt)if(D(_)!==null)nt=!0,jt||(jt=!0,Kt());else{var R=D(v);R!==null&&ae(pt,R.startTime-T)}}var jt=!1,$=-1,Lt=5,ne=-1;function Ie(){return J?!0:!(o.unstable_now()-ne<Lt)}function ve(){if(J=!1,jt){var T=o.unstable_now();ne=T;var R=!0;try{t:{nt=!1,G&&(G=!1,Ot($),$=-1),st=!0;var w=q;try{e:{for(Zt(T),U=D(_);U!==null&&!(U.expirationTime>T&&Ie());){var at=U.callback;if(typeof at=="function"){U.callback=null,q=U.priorityLevel;var ft=at(U.expirationTime<=T);if(T=o.unstable_now(),typeof ft=="function"){U.callback=ft,Zt(T),R=!0;break e}U===D(_)&&f(_),Zt(T)}else f(_);U=D(_)}if(U!==null)R=!0;else{var m=D(v);m!==null&&ae(pt,m.startTime-T),R=!1}}break t}finally{U=null,q=w,st=!1}R=void 0}}finally{R?Kt():jt=!1}}}var Kt;if(typeof Tt=="function")Kt=function(){Tt(ve)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Jt=Ce.port2;Ce.port1.onmessage=ve,Kt=function(){Jt.postMessage(null)}}else Kt=function(){xt(ve,0)};function ae(T,R){$=xt(function(){T(o.unstable_now())},R)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lt=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return q},o.unstable_next=function(T){switch(q){case 1:case 2:case 3:var R=3;break;default:R=q}var w=q;q=R;try{return T()}finally{q=w}},o.unstable_requestPaint=function(){J=!0},o.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var w=q;q=T;try{return R()}finally{q=w}},o.unstable_scheduleCallback=function(T,R,w){var at=o.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?at+w:at):w=at,T){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=w+ft,T={id:Y++,callback:R,priorityLevel:T,startTime:w,expirationTime:ft,sortIndex:-1},w>at?(T.sortIndex=w,x(v,T),D(_)===null&&T===D(v)&&(G?(Ot($),$=-1):G=!0,ae(pt,w-at))):(T.sortIndex=ft,x(_,T),nt||st||(nt=!0,jt||(jt=!0,Kt()))),T},o.unstable_shouldYield=Ie,o.unstable_wrapCallback=function(T){var R=q;return function(){var w=q;q=R;try{return T.apply(this,arguments)}finally{q=w}}}})(ms)),ms}var Md;function v0(){return Md||(Md=1,ds.exports=h0()),ds.exports}var hs={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function p0(){if(Nd)return kt;Nd=1;var o=gs();function x(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)v+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(){}var f={d:{f:D,r:function(){throw Error(x(522))},D,C:D,L:D,m:D,X:D,S:D,M:D},p:0,findDOMNode:null},b=Symbol.for("react.portal");function A(_,v,Y){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:U==null?null:""+U,children:_,containerInfo:v,implementation:Y}}var z=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,kt.createPortal=function(_,v){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(x(299));return A(_,v,null,Y)},kt.flushSync=function(_){var v=z.T,Y=f.p;try{if(z.T=null,f.p=2,_)return _()}finally{z.T=v,f.p=Y,f.d.f()}},kt.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,f.d.C(_,v))},kt.prefetchDNS=function(_){typeof _=="string"&&f.d.D(_)},kt.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var Y=v.as,U=V(Y,v.crossOrigin),q=typeof v.integrity=="string"?v.integrity:void 0,st=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;Y==="style"?f.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:U,integrity:q,fetchPriority:st}):Y==="script"&&f.d.X(_,{crossOrigin:U,integrity:q,fetchPriority:st,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},kt.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var Y=V(v.as,v.crossOrigin);f.d.M(_,{crossOrigin:Y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&f.d.M(_)},kt.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var Y=v.as,U=V(Y,v.crossOrigin);f.d.L(_,Y,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},kt.preloadModule=function(_,v){if(typeof _=="string")if(v){var Y=V(v.as,v.crossOrigin);f.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:Y,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else f.d.m(_)},kt.requestFormReset=function(_){f.d.r(_)},kt.unstable_batchedUpdates=function(_,v){return _(v)},kt.useFormState=function(_,v,Y){return z.H.useFormState(_,v,Y)},kt.useFormStatus=function(){return z.H.useHostTransitionStatus()},kt.version="19.2.6",kt}var _d;function g0(){if(_d)return hs.exports;_d=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(x){console.error(x)}}return o(),hs.exports=p0(),hs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function y0(){if(Dd)return Ea;Dd=1;var o=v0(),x=gs(),D=g0();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function A(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function z(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function V(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(A(t)!==t)throw Error(f(188))}function v(t){var e=t.alternate;if(!e){if(e=A(t),e===null)throw Error(f(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return _(a),t;if(u===n)return _(a),e;u=u.sibling}throw Error(f(188))}if(l.return!==n.return)l=a,n=u;else{for(var c=!1,s=a.child;s;){if(s===l){c=!0,l=a,n=u;break}if(s===n){c=!0,n=a,l=u;break}s=s.sibling}if(!c){for(s=u.child;s;){if(s===l){c=!0,l=u,n=a;break}if(s===n){c=!0,n=u,l=a;break}s=s.sibling}if(!c)throw Error(f(189))}}if(l.alternate!==n)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?t:e}function Y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Y(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,q=Symbol.for("react.element"),st=Symbol.for("react.transitional.element"),nt=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),Ot=Symbol.for("react.consumer"),Tt=Symbol.for("react.context"),Zt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Kt(t){return t===null||typeof t!="object"?null:(t=ve&&t[ve]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Symbol.for("react.client.reference");function Jt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case xt:return"Profiler";case J:return"StrictMode";case pt:return"Suspense";case jt:return"SuspenseList";case ne:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case nt:return"Portal";case Tt:return t.displayName||"Context";case Ot:return(t._context.displayName||"Context")+".Consumer";case Zt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Jt(t.type)||"Memo";case Lt:e=t._payload,t=t._init;try{return Jt(t(e))}catch{}}return null}var ae=Array.isArray,T=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},at=[],ft=-1;function m(t){return{current:t}}function N(t){0>ft||(t.current=at[ft],at[ft]=null,ft--)}function C(t,e){ft++,at[ft]=t.current,t.current=e}var B=m(null),Z=m(null),O=m(null),K=m(null);function dt(t,e){switch(C(O,e),C(Z,t),C(B,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?wr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=wr(e),t=Zr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}N(B),C(B,t)}function yt(){N(B),N(Z),N(O)}function _n(t){t.memoizedState!==null&&C(K,t);var e=B.current,l=Zr(e,t.type);e!==l&&(C(Z,t),C(B,l))}function Ta(t){Z.current===t&&(N(B),N(Z)),K.current===t&&(N(K),ga._currentValue=w)}var Zu,ys;function Tl(t){if(Zu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||"",ys=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zu+t+ys}var Ku=!1;function ku(t,e){if(!t||Ku)return"";Ku=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(S){var y=S}Reflect.construct(t,[],M)}else{try{M.call()}catch(S){y=S}t.call(M.prototype)}}else{try{throw Error()}catch(S){y=S}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),c=u[0],s=u[1];if(c&&s){var r=c.split(`
`),g=s.split(`
`);for(a=n=0;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(n===r.length||a===g.length)for(n=r.length-1,a=g.length-1;1<=n&&0<=a&&r[n]!==g[a];)a--;for(;1<=n&&0<=a;n--,a--)if(r[n]!==g[a]){if(n!==1||a!==1)do if(n--,a--,0>a||r[n]!==g[a]){var E=`
`+r[n].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=n&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Tl(l):""}function Vd(t,e){switch(t.tag){case 26:case 27:case 5:return Tl(t.type);case 16:return Tl("Lazy");case 13:return t.child!==e&&e!==null?Tl("Suspense Fallback"):Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return ku(t.type,!1);case 11:return ku(t.type.render,!1);case 1:return ku(t.type,!0);case 31:return Tl("Activity");default:return""}}function bs(t){try{var e="",l=null;do e+=Vd(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ju=Object.prototype.hasOwnProperty,Wu=o.unstable_scheduleCallback,Fu=o.unstable_cancelCallback,Xd=o.unstable_shouldYield,wd=o.unstable_requestPaint,ue=o.unstable_now,Zd=o.unstable_getCurrentPriorityLevel,Ss=o.unstable_ImmediatePriority,As=o.unstable_UserBlockingPriority,ja=o.unstable_NormalPriority,Kd=o.unstable_LowPriority,Es=o.unstable_IdlePriority,kd=o.log,Jd=o.unstable_setDisableYieldValue,Dn=null,ce=null;function Pe(t){if(typeof kd=="function"&&Jd(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(Dn,t)}catch{}}var ie=Math.clz32?Math.clz32:$d,Wd=Math.log,Fd=Math.LN2;function $d(t){return t>>>=0,t===0?32:31-(Wd(t)/Fd|0)|0}var Ma=256,Na=262144,_a=4194304;function jl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Da(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,u=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=jl(n):(c&=s,c!==0?a=jl(c):l||(l=s&~t,l!==0&&(a=jl(l))))):(s=n&~u,s!==0?a=jl(s):c!==0?a=jl(c):l||(l=n&~t,l!==0&&(a=jl(l)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:a}function On(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Id(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xs(){var t=_a;return _a<<=1,(_a&62914560)===0&&(_a=4194304),t}function $u(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function zn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pd(t,e,l,n,a,u){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,r=t.expirationTimes,g=t.hiddenUpdates;for(l=c&~l;0<l;){var E=31-ie(l),M=1<<E;s[E]=0,r[E]=-1;var y=g[E];if(y!==null)for(g[E]=null,E=0;E<y.length;E++){var S=y[E];S!==null&&(S.lane&=-536870913)}l&=~M}n!==0&&Ts(t,n,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(c&~e))}function Ts(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-ie(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function js(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-ie(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function Ms(t,e){var l=e&-e;return l=(l&42)!==0?1:Iu(l),(l&(t.suspendedLanes|e))!==0?0:l}function Iu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ns(){var t=R.p;return t!==0?t:(t=window.event,t===void 0?32:hd(t.type))}function _s(t,e){var l=R.p;try{return R.p=t,e()}finally{R.p=l}}var tl=Math.random().toString(36).slice(2),qt="__reactFiber$"+tl,Ft="__reactProps$"+tl,Xl="__reactContainer$"+tl,tc="__reactEvents$"+tl,tm="__reactListeners$"+tl,em="__reactHandles$"+tl,Ds="__reactResources$"+tl,Rn="__reactMarker$"+tl;function ec(t){delete t[qt],delete t[Ft],delete t[tc],delete t[tm],delete t[em]}function wl(t){var e=t[qt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Xl]||l[qt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Ir(t);t!==null;){if(l=t[qt])return l;t=Ir(t)}return e}t=l,l=t.parentNode}return null}function Zl(t){if(t=t[qt]||t[Xl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Cn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Kl(t){var e=t[Ds];return e||(e=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Bt(t){t[Rn]=!0}var Os=new Set,zs={};function Ml(t,e){kl(t,e),kl(t+"Capture",e)}function kl(t,e){for(zs[t]=e,t=0;t<e.length;t++)Os.add(e[t])}var lm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},Cs={};function nm(t){return Ju.call(Cs,t)?!0:Ju.call(Rs,t)?!1:lm.test(t)?Cs[t]=!0:(Rs[t]=!0,!1)}function Oa(t,e,l){if(nm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function za(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ue(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+n)}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Us(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function am(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lc(t){if(!t._valueTracker){var e=Us(t)?"checked":"value";t._valueTracker=am(t,e,""+t[e])}}function Gs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=Us(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}function Ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var um=/[\n"\\]/g;function ge(t){return t.replace(um,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function nc(t,e,l,n,a,u,c,s){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?ac(t,c,pe(e)):l!=null?ac(t,c,pe(l)):n!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+pe(s):t.removeAttribute("name")}function Bs(t,e,l,n,a,u,c,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){lc(t);return}l=l!=null?""+pe(l):"",e=e!=null?""+pe(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),lc(t)}function ac(t,e,l){e==="number"&&Ra(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Jl(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+pe(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Hs(t,e,l){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+pe(l):""}function Ls(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(f(92));if(ae(n)){if(1<n.length)throw Error(f(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=pe(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),lc(t)}function Wl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var cm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qs(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||cm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Ys(t,e,l){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&qs(t,a,n)}else for(var u in e)e.hasOwnProperty(u)&&qs(t,u,e[u])}function uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ca(t){return sm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ge(){}var cc=null;function ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fl=null,$l=null;function Qs(t){var e=Zl(t);if(e&&(t=e.stateNode)){var l=t[Ft]||null;t:switch(t=e.stateNode,e.type){case"input":if(nc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ge(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[Ft]||null;if(!a)throw Error(f(90));nc(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&Gs(n)}break t;case"textarea":Hs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Jl(t,!!l.multiple,e,!1)}}}var sc=!1;function Vs(t,e,l){if(sc)return t(e,l);sc=!0;try{var n=t(e);return n}finally{if(sc=!1,(Fl!==null||$l!==null)&&(Su(),Fl&&(e=Fl,t=$l,$l=Fl=null,Qs(e),t)))for(e=0;e<t.length;e++)Qs(t[e])}}function Un(t,e){var l=t.stateNode;if(l===null)return null;var n=l[Ft]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(f(231,e,typeof l));return l}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=!1;if(Be)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){fc=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{fc=!1}var el=null,oc=null,Ua=null;function Xs(){if(Ua)return Ua;var t,e=oc,l=e.length,n,a="value"in el?el.value:el.textContent,u=a.length;for(t=0;t<l&&e[t]===a[t];t++);var c=l-t;for(n=1;n<=c&&e[l-n]===a[u-n];n++);return Ua=a.slice(t,1<n?1-n:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function ws(){return!1}function $t(t){function e(l,n,a,u,c){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ba:ws,this.isPropagationStopped=ws,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=$t(Nl),Bn=U({},Nl,{view:0,detail:0}),fm=$t(Bn),rc,dc,Hn,La=U({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hn&&(Hn&&t.type==="mousemove"?(rc=t.screenX-Hn.screenX,dc=t.screenY-Hn.screenY):dc=rc=0,Hn=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Zs=$t(La),om=U({},La,{dataTransfer:0}),rm=$t(om),dm=U({},Bn,{relatedTarget:0}),mc=$t(dm),mm=U({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=$t(mm),vm=U({},Nl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pm=$t(vm),gm=U({},Nl,{data:0}),Ks=$t(gm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Am(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sm[t])?!!e[t]:!1}function hc(){return Am}var Em=U({},Bn,{key:function(t){if(t.key){var e=ym[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xm=$t(Em),Tm=U({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ks=$t(Tm),jm=U({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),Mm=$t(jm),Nm=U({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),_m=$t(Nm),Dm=U({},La,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=$t(Dm),zm=U({},Nl,{newState:0,oldState:0}),Rm=$t(zm),Cm=[9,13,27,32],vc=Be&&"CompositionEvent"in window,Ln=null;Be&&"documentMode"in document&&(Ln=document.documentMode);var Um=Be&&"TextEvent"in window&&!Ln,Js=Be&&(!vc||Ln&&8<Ln&&11>=Ln),Ws=" ",Fs=!1;function $s(t,e){switch(t){case"keyup":return Cm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Is(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Il=!1;function Gm(t,e){switch(t){case"compositionend":return Is(e);case"keypress":return e.which!==32?null:(Fs=!0,Ws);case"textInput":return t=e.data,t===Ws&&Fs?null:t;default:return null}}function Bm(t,e){if(Il)return t==="compositionend"||!vc&&$s(t,e)?(t=Xs(),Ua=oc=el=null,Il=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Js&&e.locale!=="ko"?null:e.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hm[t.type]:e==="textarea"}function tf(t,e,l,n){Fl?$l?$l.push(n):$l=[n]:Fl=n,e=Nu(e,"onChange"),0<e.length&&(l=new Ha("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var qn=null,Yn=null;function Lm(t){Lr(t,0)}function qa(t){var e=Cn(t);if(Gs(e))return t}function ef(t,e){if(t==="change")return e}var lf=!1;if(Be){var pc;if(Be){var gc="oninput"in document;if(!gc){var nf=document.createElement("div");nf.setAttribute("oninput","return;"),gc=typeof nf.oninput=="function"}pc=gc}else pc=!1;lf=pc&&(!document.documentMode||9<document.documentMode)}function af(){qn&&(qn.detachEvent("onpropertychange",uf),Yn=qn=null)}function uf(t){if(t.propertyName==="value"&&qa(Yn)){var e=[];tf(e,Yn,t,ic(t)),Vs(Lm,e)}}function qm(t,e,l){t==="focusin"?(af(),qn=e,Yn=l,qn.attachEvent("onpropertychange",uf)):t==="focusout"&&af()}function Ym(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qa(Yn)}function Qm(t,e){if(t==="click")return qa(e)}function Vm(t,e){if(t==="input"||t==="change")return qa(e)}function Xm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var se=typeof Object.is=="function"?Object.is:Xm;function Qn(t,e){if(se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Ju.call(e,a)||!se(t[a],e[a]))return!1}return!0}function cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sf(t,e){var l=cf(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=cf(l)}}function ff(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ff(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function of(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ra(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Ra(t.document)}return e}function yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var wm=Be&&"documentMode"in document&&11>=document.documentMode,Pl=null,bc=null,Vn=null,Sc=!1;function rf(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Sc||Pl==null||Pl!==Ra(n)||(n=Pl,"selectionStart"in n&&yc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Qn(Vn,n)||(Vn=n,n=Nu(bc,"onSelect"),0<n.length&&(e=new Ha("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=Pl)))}function _l(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var tn={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},Ac={},df={};Be&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Dl(t){if(Ac[t])return Ac[t];if(!tn[t])return t;var e=tn[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in df)return Ac[t]=e[l];return t}var mf=Dl("animationend"),hf=Dl("animationiteration"),vf=Dl("animationstart"),Zm=Dl("transitionrun"),Km=Dl("transitionstart"),km=Dl("transitioncancel"),pf=Dl("transitionend"),gf=new Map,Ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ec.push("scrollEnd");function Me(t,e){gf.set(t,e),Ml(e,[t])}var Ya=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ye=[],en=0,xc=0;function Qa(){for(var t=en,e=xc=en=0;e<t;){var l=ye[e];ye[e++]=null;var n=ye[e];ye[e++]=null;var a=ye[e];ye[e++]=null;var u=ye[e];if(ye[e++]=null,n!==null&&a!==null){var c=n.pending;c===null?a.next=a:(a.next=c.next,c.next=a),n.pending=a}u!==0&&yf(l,a,u)}}function Va(t,e,l,n){ye[en++]=t,ye[en++]=e,ye[en++]=l,ye[en++]=n,xc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Tc(t,e,l,n){return Va(t,e,l,n),Xa(t)}function Ol(t,e){return Va(t,null,null,e),Xa(t)}function yf(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=t.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-ie(l),t=u.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),u):null}function Xa(t){if(50<oa)throw oa=0,Ci=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ln={};function Jm(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(t,e,l,n){return new Jm(t,e,l,n)}function jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function He(t,e){var l=t.alternate;return l===null?(l=fe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function bf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function wa(t,e,l,n,a,u){var c=0;if(n=t,typeof t=="function")jc(t)&&(c=1);else if(typeof t=="string")c=Ph(t,l,B.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ne:return t=fe(31,l,e,a),t.elementType=ne,t.lanes=u,t;case G:return zl(l.children,a,u,e);case J:c=8,a|=24;break;case xt:return t=fe(12,l,e,a|2),t.elementType=xt,t.lanes=u,t;case pt:return t=fe(13,l,e,a),t.elementType=pt,t.lanes=u,t;case jt:return t=fe(19,l,e,a),t.elementType=jt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tt:c=10;break t;case Ot:c=9;break t;case Zt:c=11;break t;case $:c=14;break t;case Lt:c=16,n=null;break t}c=29,l=Error(f(130,t===null?"null":typeof t,"")),n=null}return e=fe(c,l,e,a),e.elementType=t,e.type=n,e.lanes=u,e}function zl(t,e,l,n){return t=fe(7,t,n,e),t.lanes=l,t}function Mc(t,e,l){return t=fe(6,t,null,e),t.lanes=l,t}function Sf(t){var e=fe(18,null,null,0);return e.stateNode=t,e}function Nc(t,e,l){return e=fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Af=new WeakMap;function be(t,e){if(typeof t=="object"&&t!==null){var l=Af.get(t);return l!==void 0?l:(e={value:t,source:e,stack:bs(e)},Af.set(t,e),e)}return{value:t,source:e,stack:bs(e)}}var nn=[],an=0,Za=null,Xn=0,Se=[],Ae=0,ll=null,De=1,Oe="";function Le(t,e){nn[an++]=Xn,nn[an++]=Za,Za=t,Xn=e}function Ef(t,e,l){Se[Ae++]=De,Se[Ae++]=Oe,Se[Ae++]=ll,ll=t;var n=De;t=Oe;var a=32-ie(n)-1;n&=~(1<<a),l+=1;var u=32-ie(e)+a;if(30<u){var c=a-a%5;u=(n&(1<<c)-1).toString(32),n>>=c,a-=c,De=1<<32-ie(e)+a|l<<a|n,Oe=u+t}else De=1<<u|l<<a|n,Oe=t}function _c(t){t.return!==null&&(Le(t,1),Ef(t,1,0))}function Dc(t){for(;t===Za;)Za=nn[--an],nn[an]=null,Xn=nn[--an],nn[an]=null;for(;t===ll;)ll=Se[--Ae],Se[Ae]=null,Oe=Se[--Ae],Se[Ae]=null,De=Se[--Ae],Se[Ae]=null}function xf(t,e){Se[Ae++]=De,Se[Ae++]=Oe,Se[Ae++]=ll,De=e.id,Oe=e.overflow,ll=t}var Yt=null,St=null,lt=!1,nl=null,Ee=!1,Oc=Error(f(519));function al(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wn(be(e,t)),Oc}function Tf(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[qt]=t,e[Ft]=n,l){case"dialog":P("cancel",e),P("close",e);break;case"iframe":case"object":case"embed":P("load",e);break;case"video":case"audio":for(l=0;l<da.length;l++)P(da[l],e);break;case"source":P("error",e);break;case"img":case"image":case"link":P("error",e),P("load",e);break;case"details":P("toggle",e);break;case"input":P("invalid",e),Bs(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":P("invalid",e);break;case"textarea":P("invalid",e),Ls(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||Vr(e.textContent,l)?(n.popover!=null&&(P("beforetoggle",e),P("toggle",e)),n.onScroll!=null&&P("scroll",e),n.onScrollEnd!=null&&P("scrollend",e),n.onClick!=null&&(e.onclick=Ge),e=!0):e=!1,e||al(t,!0)}function jf(t){for(Yt=t.return;Yt;)switch(Yt.tag){case 5:case 31:case 13:Ee=!1;return;case 27:case 3:Ee=!0;return;default:Yt=Yt.return}}function un(t){if(t!==Yt)return!1;if(!lt)return jf(t),lt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Ji(t.type,t.memoizedProps)),l=!l),l&&St&&al(t),jf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));St=$r(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));St=$r(t)}else e===27?(e=St,yl(t.type)?(t=Pi,Pi=null,St=t):St=e):St=Yt?Te(t.stateNode.nextSibling):null;return!0}function Rl(){St=Yt=null,lt=!1}function zc(){var t=nl;return t!==null&&(ee===null?ee=t:ee.push.apply(ee,t),nl=null),t}function wn(t){nl===null?nl=[t]:nl.push(t)}var Rc=m(null),Cl=null,qe=null;function ul(t,e,l){C(Rc,e._currentValue),e._currentValue=l}function Ye(t){t._currentValue=Rc.current,N(Rc)}function Cc(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function Uc(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var c=a.child;u=u.firstContext;t:for(;u!==null;){var s=u;u=a;for(var r=0;r<e.length;r++)if(s.context===e[r]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),Cc(u.return,l,t),n||(c=null);break t}u=s.next}}else if(a.tag===18){if(c=a.return,c===null)throw Error(f(341));c.lanes|=l,u=c.alternate,u!==null&&(u.lanes|=l),Cc(c,l,t),c=null}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}}function cn(t,e,l,n){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var c=a.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var s=a.type;se(a.pendingProps.value,c.value)||(t!==null?t.push(s):t=[s])}}else if(a===K.current){if(c=a.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ga):t=[ga])}a=a.return}t!==null&&Uc(e,t,l,n),e.flags|=262144}function Ka(t){for(t=t.firstContext;t!==null;){if(!se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ul(t){Cl=t,qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return Mf(Cl,t)}function ka(t,e){return Cl===null&&Ul(t),Mf(t,e)}function Mf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},qe===null){if(t===null)throw Error(f(308));qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else qe=qe.next=e;return l}var Wm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Fm=o.unstable_scheduleCallback,$m=o.unstable_NormalPriority,zt={$$typeof:Tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gc(){return{controller:new Wm,data:new Map,refCount:0}}function Zn(t){t.refCount--,t.refCount===0&&Fm($m,function(){t.controller.abort()})}var Kn=null,Bc=0,sn=0,fn=null;function Im(t,e){if(Kn===null){var l=Kn=[];Bc=0,sn=qi(),fn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Bc++,e.then(Nf,Nf),e}function Nf(){if(--Bc===0&&Kn!==null){fn!==null&&(fn.status="fulfilled");var t=Kn;Kn=null,sn=0,fn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Pm(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var _f=T.S;T.S=function(t,e){dr=ue(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Im(t,e),_f!==null&&_f(t,e)};var Gl=m(null);function Hc(){var t=Gl.current;return t!==null?t:gt.pooledCache}function Ja(t,e){e===null?C(Gl,Gl.current):C(Gl,e.pool)}function Df(){var t=Hc();return t===null?null:{parent:zt._currentValue,pool:t}}var on=Error(f(460)),Lc=Error(f(474)),Wa=Error(f(542)),Fa={then:function(){}};function Of(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ge,Ge),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cf(t),t;default:if(typeof e.status=="string")e.then(Ge,Ge);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cf(t),t}throw Hl=e,on}}function Bl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Hl=l,on):l}}var Hl=null;function Rf(){if(Hl===null)throw Error(f(459));var t=Hl;return Hl=null,t}function Cf(t){if(t===on||t===Wa)throw Error(f(483))}var rn=null,kn=0;function $a(t){var e=kn;return kn+=1,rn===null&&(rn=[]),zf(rn,t,e)}function Jn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ia(t,e){throw e.$$typeof===q?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Uf(t){function e(h,d){if(t){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function l(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function n(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function a(h,d){return h=He(h,d),h.index=0,h.sibling=null,h}function u(h,d,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=67108866,d):p):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function c(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function s(h,d,p,j){return d===null||d.tag!==6?(d=Mc(p,h.mode,j),d.return=h,d):(d=a(d,p),d.return=h,d)}function r(h,d,p,j){var Q=p.type;return Q===G?E(h,d,p.props.children,j,p.key):d!==null&&(d.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Lt&&Bl(Q)===d.type)?(d=a(d,p.props),Jn(d,p),d.return=h,d):(d=wa(p.type,p.key,p.props,null,h.mode,j),Jn(d,p),d.return=h,d)}function g(h,d,p,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Nc(p,h.mode,j),d.return=h,d):(d=a(d,p.children||[]),d.return=h,d)}function E(h,d,p,j,Q){return d===null||d.tag!==7?(d=zl(p,h.mode,j,Q),d.return=h,d):(d=a(d,p),d.return=h,d)}function M(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Mc(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case st:return p=wa(d.type,d.key,d.props,null,h.mode,p),Jn(p,d),p.return=h,p;case nt:return d=Nc(d,h.mode,p),d.return=h,d;case Lt:return d=Bl(d),M(h,d,p)}if(ae(d)||Kt(d))return d=zl(d,h.mode,p,null),d.return=h,d;if(typeof d.then=="function")return M(h,$a(d),p);if(d.$$typeof===Tt)return M(h,ka(h,d),p);Ia(h,d)}return null}function y(h,d,p,j){var Q=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return Q!==null?null:s(h,d,""+p,j);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case st:return p.key===Q?r(h,d,p,j):null;case nt:return p.key===Q?g(h,d,p,j):null;case Lt:return p=Bl(p),y(h,d,p,j)}if(ae(p)||Kt(p))return Q!==null?null:E(h,d,p,j,null);if(typeof p.then=="function")return y(h,d,$a(p),j);if(p.$$typeof===Tt)return y(h,d,ka(h,p),j);Ia(h,p)}return null}function S(h,d,p,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return h=h.get(p)||null,s(d,h,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case st:return h=h.get(j.key===null?p:j.key)||null,r(d,h,j,Q);case nt:return h=h.get(j.key===null?p:j.key)||null,g(d,h,j,Q);case Lt:return j=Bl(j),S(h,d,p,j,Q)}if(ae(j)||Kt(j))return h=h.get(p)||null,E(d,h,j,Q,null);if(typeof j.then=="function")return S(h,d,p,$a(j),Q);if(j.$$typeof===Tt)return S(h,d,p,ka(d,j),Q);Ia(d,j)}return null}function H(h,d,p,j){for(var Q=null,ut=null,L=d,F=d=0,et=null;L!==null&&F<p.length;F++){L.index>F?(et=L,L=null):et=L.sibling;var ct=y(h,L,p[F],j);if(ct===null){L===null&&(L=et);break}t&&L&&ct.alternate===null&&e(h,L),d=u(ct,d,F),ut===null?Q=ct:ut.sibling=ct,ut=ct,L=et}if(F===p.length)return l(h,L),lt&&Le(h,F),Q;if(L===null){for(;F<p.length;F++)L=M(h,p[F],j),L!==null&&(d=u(L,d,F),ut===null?Q=L:ut.sibling=L,ut=L);return lt&&Le(h,F),Q}for(L=n(L);F<p.length;F++)et=S(L,h,F,p[F],j),et!==null&&(t&&et.alternate!==null&&L.delete(et.key===null?F:et.key),d=u(et,d,F),ut===null?Q=et:ut.sibling=et,ut=et);return t&&L.forEach(function(xl){return e(h,xl)}),lt&&Le(h,F),Q}function X(h,d,p,j){if(p==null)throw Error(f(151));for(var Q=null,ut=null,L=d,F=d=0,et=null,ct=p.next();L!==null&&!ct.done;F++,ct=p.next()){L.index>F?(et=L,L=null):et=L.sibling;var xl=y(h,L,ct.value,j);if(xl===null){L===null&&(L=et);break}t&&L&&xl.alternate===null&&e(h,L),d=u(xl,d,F),ut===null?Q=xl:ut.sibling=xl,ut=xl,L=et}if(ct.done)return l(h,L),lt&&Le(h,F),Q;if(L===null){for(;!ct.done;F++,ct=p.next())ct=M(h,ct.value,j),ct!==null&&(d=u(ct,d,F),ut===null?Q=ct:ut.sibling=ct,ut=ct);return lt&&Le(h,F),Q}for(L=n(L);!ct.done;F++,ct=p.next())ct=S(L,h,F,ct.value,j),ct!==null&&(t&&ct.alternate!==null&&L.delete(ct.key===null?F:ct.key),d=u(ct,d,F),ut===null?Q=ct:ut.sibling=ct,ut=ct);return t&&L.forEach(function(o0){return e(h,o0)}),lt&&Le(h,F),Q}function vt(h,d,p,j){if(typeof p=="object"&&p!==null&&p.type===G&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case st:t:{for(var Q=p.key;d!==null;){if(d.key===Q){if(Q=p.type,Q===G){if(d.tag===7){l(h,d.sibling),j=a(d,p.props.children),j.return=h,h=j;break t}}else if(d.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Lt&&Bl(Q)===d.type){l(h,d.sibling),j=a(d,p.props),Jn(j,p),j.return=h,h=j;break t}l(h,d);break}else e(h,d);d=d.sibling}p.type===G?(j=zl(p.props.children,h.mode,j,p.key),j.return=h,h=j):(j=wa(p.type,p.key,p.props,null,h.mode,j),Jn(j,p),j.return=h,h=j)}return c(h);case nt:t:{for(Q=p.key;d!==null;){if(d.key===Q)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){l(h,d.sibling),j=a(d,p.children||[]),j.return=h,h=j;break t}else{l(h,d);break}else e(h,d);d=d.sibling}j=Nc(p,h.mode,j),j.return=h,h=j}return c(h);case Lt:return p=Bl(p),vt(h,d,p,j)}if(ae(p))return H(h,d,p,j);if(Kt(p)){if(Q=Kt(p),typeof Q!="function")throw Error(f(150));return p=Q.call(p),X(h,d,p,j)}if(typeof p.then=="function")return vt(h,d,$a(p),j);if(p.$$typeof===Tt)return vt(h,d,ka(h,p),j);Ia(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,d!==null&&d.tag===6?(l(h,d.sibling),j=a(d,p),j.return=h,h=j):(l(h,d),j=Mc(p,h.mode,j),j.return=h,h=j),c(h)):l(h,d)}return function(h,d,p,j){try{kn=0;var Q=vt(h,d,p,j);return rn=null,Q}catch(L){if(L===on||L===Wa)throw L;var ut=fe(29,L,null,h.mode);return ut.lanes=j,ut.return=h,ut}finally{}}}var Ll=Uf(!0),Gf=Uf(!1),cl=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function il(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sl(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(it&2)!==0){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=Xa(t),yf(t,null,l),e}return Va(t,n,e,l),Xa(t)}function Wn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,js(t,l)}}function Qc(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=c:u=u.next=c,l=l.next}while(l!==null);u===null?a=u=e:u=u.next=e}else a=u=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Vc=!1;function Fn(){if(Vc){var t=fn;if(t!==null)throw t}}function $n(t,e,l,n){Vc=!1;var a=t.updateQueue;cl=!1;var u=a.firstBaseUpdate,c=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var r=s,g=r.next;r.next=null,c===null?u=g:c.next=g,c=r;var E=t.alternate;E!==null&&(E=E.updateQueue,s=E.lastBaseUpdate,s!==c&&(s===null?E.firstBaseUpdate=g:s.next=g,E.lastBaseUpdate=r))}if(u!==null){var M=a.baseState;c=0,E=g=r=null,s=u;do{var y=s.lane&-536870913,S=y!==s.lane;if(S?(tt&y)===y:(n&y)===y){y!==0&&y===sn&&(Vc=!0),E!==null&&(E=E.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var H=t,X=s;y=e;var vt=l;switch(X.tag){case 1:if(H=X.payload,typeof H=="function"){M=H.call(vt,M,y);break t}M=H;break t;case 3:H.flags=H.flags&-65537|128;case 0:if(H=X.payload,y=typeof H=="function"?H.call(vt,M,y):H,y==null)break t;M=U({},M,y);break t;case 2:cl=!0}}y=s.callback,y!==null&&(t.flags|=64,S&&(t.flags|=8192),S=a.callbacks,S===null?a.callbacks=[y]:S.push(y))}else S={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},E===null?(g=E=S,r=M):E=E.next=S,c|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;S=s,s=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);E===null&&(r=M),a.baseState=r,a.firstBaseUpdate=g,a.lastBaseUpdate=E,u===null&&(a.shared.lanes=0),ml|=c,t.lanes=c,t.memoizedState=M}}function Bf(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function Hf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Bf(l[t],e)}var dn=m(null),Pa=m(0);function Lf(t,e){t=We,C(Pa,t),C(dn,e),We=t|e.baseLanes}function Xc(){C(Pa,We),C(dn,dn.current)}function wc(){We=Pa.current,N(dn),N(Pa)}var oe=m(null),xe=null;function fl(t){var e=t.alternate;C(_t,_t.current&1),C(oe,t),xe===null&&(e===null||dn.current!==null||e.memoizedState!==null)&&(xe=t)}function Zc(t){C(_t,_t.current),C(oe,t),xe===null&&(xe=t)}function qf(t){t.tag===22?(C(_t,_t.current),C(oe,t),xe===null&&(xe=t)):ol()}function ol(){C(_t,_t.current),C(oe,oe.current)}function re(t){N(oe),xe===t&&(xe=null),N(_t)}var _t=m(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||$i(l)||Ii(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qe=0,W=null,mt=null,Rt=null,eu=!1,mn=!1,ql=!1,lu=0,In=0,hn=null,th=0;function Mt(){throw Error(f(321))}function Kc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!se(t[l],e[l]))return!1;return!0}function kc(t,e,l,n,a,u){return Qe=u,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?xo:si,ql=!1,u=l(n,a),ql=!1,mn&&(u=Qf(e,l,n,a)),Yf(t),u}function Yf(t){T.H=ea;var e=mt!==null&&mt.next!==null;if(Qe=0,Rt=mt=W=null,eu=!1,In=0,hn=null,e)throw Error(f(300));t===null||Ct||(t=t.dependencies,t!==null&&Ka(t)&&(Ct=!0))}function Qf(t,e,l,n){W=t;var a=0;do{if(mn&&(hn=null),In=0,mn=!1,25<=a)throw Error(f(301));if(a+=1,Rt=mt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}T.H=To,u=e(l,n)}while(mn);return u}function eh(){var t=T.H,e=t.useState()[0];return e=typeof e.then=="function"?Pn(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(W.flags|=1024),e}function Jc(){var t=lu!==0;return lu=0,t}function Wc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Fc(t){if(eu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}eu=!1}Qe=0,Rt=mt=W=null,mn=!1,In=lu=0,hn=null}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?W.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Dt(){if(mt===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Rt===null?W.memoizedState:Rt.next;if(e!==null)Rt=e,mt=t;else{if(t===null)throw W.alternate===null?Error(f(467)):Error(f(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Rt===null?W.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pn(t){var e=In;return In+=1,hn===null&&(hn=[]),t=zf(hn,t,e),e=W,(Rt===null?e.memoizedState:Rt.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?xo:si),t}function au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pn(t);if(t.$$typeof===Tt)return Qt(t)}throw Error(f(438,String(t)))}function $c(t){var e=null,l=W.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=W.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=nu(),W.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=Ie;return e.index++,l}function Ve(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=Dt();return Ic(e,mt,t)}function Ic(t,e,l){var n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=l;var a=t.baseQueue,u=n.pending;if(u!==null){if(a!==null){var c=a.next;a.next=u.next,u.next=c}e.baseQueue=a=u,n.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var s=c=null,r=null,g=e,E=!1;do{var M=g.lane&-536870913;if(M!==g.lane?(tt&M)===M:(Qe&M)===M){var y=g.revertLane;if(y===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),M===sn&&(E=!0);else if((Qe&y)===y){g=g.next,y===sn&&(E=!0);continue}else M={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=M,c=u):r=r.next=M,W.lanes|=y,ml|=y;M=g.action,ql&&l(u,M),u=g.hasEagerState?g.eagerState:l(u,M)}else y={lane:M,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=y,c=u):r=r.next=y,W.lanes|=M,ml|=M;g=g.next}while(g!==null&&g!==e);if(r===null?c=u:r.next=s,!se(u,t.memoizedState)&&(Ct=!0,E&&(l=fn,l!==null)))throw l;t.memoizedState=u,t.baseState=c,t.baseQueue=r,n.lastRenderedState=u}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Pc(t){var e=Dt(),l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,u=e.memoizedState;if(a!==null){l.pending=null;var c=a=a.next;do u=t(u,c.action),c=c.next;while(c!==a);se(u,e.memoizedState)||(Ct=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,n]}function Vf(t,e,l){var n=W,a=Dt(),u=lt;if(u){if(l===void 0)throw Error(f(407));l=l()}else l=e();var c=!se((mt||a).memoizedState,l);if(c&&(a.memoizedState=l,Ct=!0),a=a.queue,li(Zf.bind(null,n,a,t),[t]),a.getSnapshot!==e||c||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,vn(9,{destroy:void 0},wf.bind(null,n,a,l,e),null),gt===null)throw Error(f(349));u||(Qe&127)!==0||Xf(n,e,l)}return l}function Xf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=W.updateQueue,e===null?(e=nu(),W.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function wf(t,e,l,n){e.value=l,e.getSnapshot=n,Kf(e)&&kf(t)}function Zf(t,e,l){return l(function(){Kf(e)&&kf(t)})}function Kf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!se(t,l)}catch{return!0}}function kf(t){var e=Ol(t,2);e!==null&&le(e,t,2)}function ti(t){var e=Wt();if(typeof t=="function"){var l=t;if(t=l(),ql){Pe(!0);try{l()}finally{Pe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},e}function Jf(t,e,l,n){return t.baseState=l,Ic(t,mt,typeof n=="function"?n:Ve)}function lh(t,e,l,n,a){if(su(t))throw Error(f(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};T.T!==null?l(!0):u.isTransition=!1,n(u),l=e.pending,l===null?(u.next=e.pending=u,Wf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Wf(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var u=T.T,c={};T.T=c;try{var s=l(a,n),r=T.S;r!==null&&r(c,s),Ff(t,e,s)}catch(g){ei(t,e,g)}finally{u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}else try{u=l(a,n),Ff(t,e,u)}catch(g){ei(t,e,g)}}function Ff(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){$f(t,e,n)},function(n){return ei(t,e,n)}):$f(t,e,l)}function $f(t,e,l){e.status="fulfilled",e.value=l,If(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Wf(t,l)))}function ei(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,If(e),e=e.next;while(e!==n)}t.action=null}function If(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Pf(t,e){return e}function to(t,e){if(lt){var l=gt.formState;if(l!==null){t:{var n=W;if(lt){if(St){e:{for(var a=St,u=Ee;a.nodeType!==8;){if(!u){a=null;break e}if(a=Te(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){St=Te(a.nextSibling),n=a.data==="F!";break t}}al(n)}n=!1}n&&(e=l[0])}}return l=Wt(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pf,lastRenderedState:e},l.queue=n,l=So.bind(null,W,n),n.dispatch=l,n=ti(!1),u=ii.bind(null,W,!1,n.queue),n=Wt(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=lh.bind(null,W,a,u,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function eo(t){var e=Dt();return lo(e,mt,t)}function lo(t,e,l){if(e=Ic(t,e,Pf)[0],t=uu(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Pn(e)}catch(c){throw c===on?Wa:c}else n=e;e=Dt();var a=e.queue,u=a.dispatch;return l!==e.memoizedState&&(W.flags|=2048,vn(9,{destroy:void 0},nh.bind(null,a,l),null)),[n,u,t]}function nh(t,e){t.action=e}function no(t){var e=Dt(),l=mt;if(l!==null)return lo(e,l,t);Dt(),e=e.memoizedState,l=Dt();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function vn(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=W.updateQueue,e===null&&(e=nu(),W.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function ao(){return Dt().memoizedState}function cu(t,e,l,n){var a=Wt();W.flags|=t,a.memoizedState=vn(1|e,{destroy:void 0},l,n===void 0?null:n)}function iu(t,e,l,n){var a=Dt();n=n===void 0?null:n;var u=a.memoizedState.inst;mt!==null&&n!==null&&Kc(n,mt.memoizedState.deps)?a.memoizedState=vn(e,u,l,n):(W.flags|=t,a.memoizedState=vn(1|e,u,l,n))}function uo(t,e){cu(8390656,8,t,e)}function li(t,e){iu(2048,8,t,e)}function ah(t){W.flags|=4;var e=W.updateQueue;if(e===null)e=nu(),W.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function co(t){var e=Dt().memoizedState;return ah({ref:e,nextImpl:t}),function(){if((it&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function io(t,e){return iu(4,2,t,e)}function so(t,e){return iu(4,4,t,e)}function fo(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oo(t,e,l){l=l!=null?l.concat([t]):null,iu(4,4,fo.bind(null,e,t),l)}function ni(){}function ro(t,e){var l=Dt();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&Kc(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function mo(t,e){var l=Dt();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&Kc(e,n[1]))return n[0];if(n=t(),ql){Pe(!0);try{t()}finally{Pe(!1)}}return l.memoizedState=[n,e],n}function ai(t,e,l){return l===void 0||(Qe&1073741824)!==0&&(tt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=hr(),W.lanes|=t,ml|=t,l)}function ho(t,e,l,n){return se(l,e)?l:dn.current!==null?(t=ai(t,l,n),se(t,e)||(Ct=!0),t):(Qe&42)===0||(Qe&1073741824)!==0&&(tt&261930)===0?(Ct=!0,t.memoizedState=l):(t=hr(),W.lanes|=t,ml|=t,e)}function vo(t,e,l,n,a){var u=R.p;R.p=u!==0&&8>u?u:8;var c=T.T,s={};T.T=s,ii(t,!1,e,l);try{var r=a(),g=T.S;if(g!==null&&g(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var E=Pm(r,n);ta(t,e,E,he(t))}else ta(t,e,n,he(t))}catch(M){ta(t,e,{then:function(){},status:"rejected",reason:M},he())}finally{R.p=u,c!==null&&s.types!==null&&(c.types=s.types),T.T=c}}function uh(){}function ui(t,e,l,n){if(t.tag!==5)throw Error(f(476));var a=po(t).queue;vo(t,a,e,w,l===null?uh:function(){return go(t),l(n)})}function po(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:w},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function go(t){var e=po(t);e.next===null&&(e=t.alternate.memoizedState),ta(t,e.next.queue,{},he())}function ci(){return Qt(ga)}function yo(){return Dt().memoizedState}function bo(){return Dt().memoizedState}function ch(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=he();t=il(l);var n=sl(e,t,l);n!==null&&(le(n,e,l),Wn(n,e,l)),e={cache:Gc()},t.payload=e;return}e=e.return}}function ih(t,e,l){var n=he();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},su(t)?Ao(e,l):(l=Tc(t,e,l,n),l!==null&&(le(l,t,n),Eo(l,e,n)))}function So(t,e,l){var n=he();ta(t,e,l,n)}function ta(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(su(t))Ao(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var c=e.lastRenderedState,s=u(c,l);if(a.hasEagerState=!0,a.eagerState=s,se(s,c))return Va(t,e,a,0),gt===null&&Qa(),!1}catch{}finally{}if(l=Tc(t,e,a,n),l!==null)return le(l,t,n),Eo(l,e,n),!0}return!1}function ii(t,e,l,n){if(n={lane:2,revertLane:qi(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},su(t)){if(e)throw Error(f(479))}else e=Tc(t,l,n,2),e!==null&&le(e,t,2)}function su(t){var e=t.alternate;return t===W||e!==null&&e===W}function Ao(t,e){mn=eu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Eo(t,e,l){if((l&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,js(t,l)}}var ea={readContext:Qt,use:au,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};ea.useEffectEvent=Mt;var xo={readContext:Qt,use:au,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:uo,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,cu(4194308,4,fo.bind(null,e,t),l)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){cu(4,2,t,e)},useMemo:function(t,e){var l=Wt();e=e===void 0?null:e;var n=t();if(ql){Pe(!0);try{t()}finally{Pe(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=Wt();if(l!==void 0){var a=l(e);if(ql){Pe(!0);try{l(e)}finally{Pe(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=ih.bind(null,W,t),[n.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:function(t){t=ti(t);var e=t.queue,l=So.bind(null,W,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ni,useDeferredValue:function(t,e){var l=Wt();return ai(l,t,e)},useTransition:function(){var t=ti(!1);return t=vo.bind(null,W,t.queue,!0,!1),Wt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=W,a=Wt();if(lt){if(l===void 0)throw Error(f(407));l=l()}else{if(l=e(),gt===null)throw Error(f(349));(tt&127)!==0||Xf(n,e,l)}a.memoizedState=l;var u={value:l,getSnapshot:e};return a.queue=u,uo(Zf.bind(null,n,u,t),[t]),n.flags|=2048,vn(9,{destroy:void 0},wf.bind(null,n,u,l,e),null),l},useId:function(){var t=Wt(),e=gt.identifierPrefix;if(lt){var l=Oe,n=De;l=(n&~(1<<32-ie(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=lu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=th++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ci,useFormState:to,useActionState:to,useOptimistic:function(t){var e=Wt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ii.bind(null,W,!0,l),l.dispatch=e,[t,e]},useMemoCache:$c,useCacheRefresh:function(){return Wt().memoizedState=ch.bind(null,W)},useEffectEvent:function(t){var e=Wt(),l={impl:t};return e.memoizedState=l,function(){if((it&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}},si={readContext:Qt,use:au,useCallback:ro,useContext:Qt,useEffect:li,useImperativeHandle:oo,useInsertionEffect:io,useLayoutEffect:so,useMemo:mo,useReducer:uu,useRef:ao,useState:function(){return uu(Ve)},useDebugValue:ni,useDeferredValue:function(t,e){var l=Dt();return ho(l,mt.memoizedState,t,e)},useTransition:function(){var t=uu(Ve)[0],e=Dt().memoizedState;return[typeof t=="boolean"?t:Pn(t),e]},useSyncExternalStore:Vf,useId:yo,useHostTransitionStatus:ci,useFormState:eo,useActionState:eo,useOptimistic:function(t,e){var l=Dt();return Jf(l,mt,t,e)},useMemoCache:$c,useCacheRefresh:bo};si.useEffectEvent=co;var To={readContext:Qt,use:au,useCallback:ro,useContext:Qt,useEffect:li,useImperativeHandle:oo,useInsertionEffect:io,useLayoutEffect:so,useMemo:mo,useReducer:Pc,useRef:ao,useState:function(){return Pc(Ve)},useDebugValue:ni,useDeferredValue:function(t,e){var l=Dt();return mt===null?ai(l,t,e):ho(l,mt.memoizedState,t,e)},useTransition:function(){var t=Pc(Ve)[0],e=Dt().memoizedState;return[typeof t=="boolean"?t:Pn(t),e]},useSyncExternalStore:Vf,useId:yo,useHostTransitionStatus:ci,useFormState:no,useActionState:no,useOptimistic:function(t,e){var l=Dt();return mt!==null?Jf(l,mt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:$c,useCacheRefresh:bo};To.useEffectEvent=co;function fi(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:U({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var oi={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=he(),a=il(n);a.payload=e,l!=null&&(a.callback=l),e=sl(t,a,n),e!==null&&(le(e,t,n),Wn(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=he(),a=il(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=sl(t,a,n),e!==null&&(le(e,t,n),Wn(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=he(),n=il(l);n.tag=2,e!=null&&(n.callback=e),e=sl(t,n,l),e!==null&&(le(e,t,l),Wn(e,t,l))}};function jo(t,e,l,n,a,u,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,c):e.prototype&&e.prototype.isPureReactComponent?!Qn(l,n)||!Qn(a,u):!0}function Mo(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&oi.enqueueReplaceState(e,e.state,null)}function Yl(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=U({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function No(t){Ya(t)}function _o(t){console.error(t)}function Do(t){Ya(t)}function fu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Oo(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ri(t,e,l){return l=il(l),l.tag=3,l.payload={element:null},l.callback=function(){fu(t,e)},l}function zo(t){return t=il(t),t.tag=3,t}function Ro(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;t.payload=function(){return a(u)},t.callback=function(){Oo(e,l,n)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Oo(e,l,n),typeof a!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function sh(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&cn(e,l,a,!0),l=oe.current,l!==null){switch(l.tag){case 31:case 13:return xe===null?Au():l.alternate===null&&Nt===0&&(Nt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===Fa?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),Bi(t,n,a)),!1;case 22:return l.flags|=65536,n===Fa?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),Bi(t,n,a)),!1}throw Error(f(435,l.tag))}return Bi(t,n,a),Au(),!1}if(lt)return e=oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==Oc&&(t=Error(f(422),{cause:n}),wn(be(t,l)))):(n!==Oc&&(e=Error(f(423),{cause:n}),wn(be(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=be(n,l),a=ri(t.stateNode,n,a),Qc(t,a),Nt!==4&&(Nt=2)),!1;var u=Error(f(520),{cause:n});if(u=be(u,l),fa===null?fa=[u]:fa.push(u),Nt!==4&&(Nt=2),e===null)return!0;n=be(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=ri(l.stateNode,n,t),Qc(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(hl===null||!hl.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=zo(a),Ro(a,t,l,n),Qc(l,a),!1}l=l.return}while(l!==null);return!1}var di=Error(f(461)),Ct=!1;function Vt(t,e,l,n){e.child=t===null?Gf(e,null,l,n):Ll(e,t.child,l,n)}function Co(t,e,l,n,a){l=l.render;var u=e.ref;if("ref"in n){var c={};for(var s in n)s!=="ref"&&(c[s]=n[s])}else c=n;return Ul(e),n=kc(t,e,l,c,u,a),s=Jc(),t!==null&&!Ct?(Wc(t,e,a),Xe(t,e,a)):(lt&&s&&_c(e),e.flags|=1,Vt(t,e,n,a),e.child)}function Uo(t,e,l,n,a){if(t===null){var u=l.type;return typeof u=="function"&&!jc(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Go(t,e,u,n,a)):(t=wa(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Si(t,a)){var c=u.memoizedProps;if(l=l.compare,l=l!==null?l:Qn,l(c,n)&&t.ref===e.ref)return Xe(t,e,a)}return e.flags|=1,t=He(u,n),t.ref=e.ref,t.return=e,e.child=t}function Go(t,e,l,n,a){if(t!==null){var u=t.memoizedProps;if(Qn(u,n)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=n=u,Si(t,a))(t.flags&131072)!==0&&(Ct=!0);else return e.lanes=t.lanes,Xe(t,e,a)}return mi(t,e,l,n,a)}function Bo(t,e,l,n){var a=n.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,e.child=null;return Ho(t,e,u,l,n)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ja(e,u!==null?u.cachePool:null),u!==null?Lf(e,u):Xc(),qf(e);else return n=e.lanes=536870912,Ho(t,e,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Ja(e,u.cachePool),Lf(e,u),ol(),e.memoizedState=null):(t!==null&&Ja(e,null),Xc(),ol());return Vt(t,e,a,l),e.child}function la(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ho(t,e,l,n,a){var u=Hc();return u=u===null?null:{parent:zt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Ja(e,null),Xc(),qf(e),t!==null&&cn(t,e,n,!0),e.childLanes=a,null}function ou(t,e){return e=du({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Lo(t,e,l){return Ll(e,t.child,null,l),t=ou(e,e.pendingProps),t.flags|=2,re(e),e.memoizedState=null,t}function fh(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(lt){if(n.mode==="hidden")return t=ou(e,n),e.lanes=536870912,la(null,t);if(Zc(e),(t=St)?(t=Fr(t,Ee),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ll!==null?{id:De,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},l=Sf(t),l.return=e,e.child=l,Yt=e,St=null)):t=null,t===null)throw al(e);return e.lanes=536870912,null}return ou(e,n)}var u=t.memoizedState;if(u!==null){var c=u.dehydrated;if(Zc(e),a)if(e.flags&256)e.flags&=-257,e=Lo(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Ct||cn(t,e,l,!1),a=(l&t.childLanes)!==0,Ct||a){if(n=gt,n!==null&&(c=Ms(n,l),c!==0&&c!==u.retryLane))throw u.retryLane=c,Ol(t,c),le(n,t,c),di;Au(),e=Lo(t,e,l)}else t=u.treeContext,St=Te(c.nextSibling),Yt=e,lt=!0,nl=null,Ee=!1,t!==null&&xf(e,t),e=ou(e,n),e.flags|=4096;return e}return t=He(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ru(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function mi(t,e,l,n,a){return Ul(e),l=kc(t,e,l,n,void 0,a),n=Jc(),t!==null&&!Ct?(Wc(t,e,a),Xe(t,e,a)):(lt&&n&&_c(e),e.flags|=1,Vt(t,e,l,a),e.child)}function qo(t,e,l,n,a,u){return Ul(e),e.updateQueue=null,l=Qf(e,n,l,a),Yf(t),n=Jc(),t!==null&&!Ct?(Wc(t,e,u),Xe(t,e,u)):(lt&&n&&_c(e),e.flags|=1,Vt(t,e,l,u),e.child)}function Yo(t,e,l,n,a){if(Ul(e),e.stateNode===null){var u=ln,c=l.contextType;typeof c=="object"&&c!==null&&(u=Qt(c)),u=new l(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=oi,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},qc(e),c=l.contextType,u.context=typeof c=="object"&&c!==null?Qt(c):ln,u.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(fi(e,l,c,n),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&oi.enqueueReplaceState(u,u.state,null),$n(e,n,u,a),Fn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var s=e.memoizedProps,r=Yl(l,s);u.props=r;var g=u.context,E=l.contextType;c=ln,typeof E=="object"&&E!==null&&(c=Qt(E));var M=l.getDerivedStateFromProps;E=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||g!==c)&&Mo(e,u,n,c),cl=!1;var y=e.memoizedState;u.state=y,$n(e,n,u,a),Fn(),g=e.memoizedState,s||y!==g||cl?(typeof M=="function"&&(fi(e,l,M,n),g=e.memoizedState),(r=cl||jo(e,l,r,n,y,g,c))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=g),u.props=n,u.state=g,u.context=c,n=r):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Yc(t,e),c=e.memoizedProps,E=Yl(l,c),u.props=E,M=e.pendingProps,y=u.context,g=l.contextType,r=ln,typeof g=="object"&&g!==null&&(r=Qt(g)),s=l.getDerivedStateFromProps,(g=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==M||y!==r)&&Mo(e,u,n,r),cl=!1,y=e.memoizedState,u.state=y,$n(e,n,u,a),Fn();var S=e.memoizedState;c!==M||y!==S||cl||t!==null&&t.dependencies!==null&&Ka(t.dependencies)?(typeof s=="function"&&(fi(e,l,s,n),S=e.memoizedState),(E=cl||jo(e,l,E,n,y,S,r)||t!==null&&t.dependencies!==null&&Ka(t.dependencies))?(g||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,S,r),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,S,r)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),u.props=n,u.state=S,u.context=r,n=E):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,ru(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=Ll(e,t.child,null,a),e.child=Ll(e,null,l,a)):Vt(t,e,l,a),e.memoizedState=u.state,t=e.child):t=Xe(t,e,a),t}function Qo(t,e,l,n){return Rl(),e.flags|=256,Vt(t,e,l,n),e.child}var hi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vi(t){return{baseLanes:t,cachePool:Df()}}function pi(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=me),t}function Vo(t,e,l){var n=e.pendingProps,a=!1,u=(e.flags&128)!==0,c;if((c=u)||(c=t!==null&&t.memoizedState===null?!1:(_t.current&2)!==0),c&&(a=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(a?fl(e):ol(),(t=St)?(t=Fr(t,Ee),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ll!==null?{id:De,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},l=Sf(t),l.return=e,e.child=l,Yt=e,St=null)):t=null,t===null)throw al(e);return Ii(t)?e.lanes=32:e.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(ol(),a=e.mode,s=du({mode:"hidden",children:s},a),n=zl(n,a,l,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=vi(l),n.childLanes=pi(t,c,l),e.memoizedState=hi,la(null,n)):(fl(e),gi(e,s))}var r=t.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(u)e.flags&256?(fl(e),e.flags&=-257,e=yi(t,e,l)):e.memoizedState!==null?(ol(),e.child=t.child,e.flags|=128,e=null):(ol(),s=n.fallback,a=e.mode,n=du({mode:"visible",children:n.children},a),s=zl(s,a,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,Ll(e,t.child,null,l),n=e.child,n.memoizedState=vi(l),n.childLanes=pi(t,c,l),e.memoizedState=hi,e=la(null,n));else if(fl(e),Ii(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var g=c.dgst;c=g,n=Error(f(419)),n.stack="",n.digest=c,wn({value:n,source:null,stack:null}),e=yi(t,e,l)}else if(Ct||cn(t,e,l,!1),c=(l&t.childLanes)!==0,Ct||c){if(c=gt,c!==null&&(n=Ms(c,l),n!==0&&n!==r.retryLane))throw r.retryLane=n,Ol(t,n),le(c,t,n),di;$i(s)||Au(),e=yi(t,e,l)}else $i(s)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,St=Te(s.nextSibling),Yt=e,lt=!0,nl=null,Ee=!1,t!==null&&xf(e,t),e=gi(e,n.children),e.flags|=4096);return e}return a?(ol(),s=n.fallback,a=e.mode,r=t.child,g=r.sibling,n=He(r,{mode:"hidden",children:n.children}),n.subtreeFlags=r.subtreeFlags&65011712,g!==null?s=He(g,s):(s=zl(s,a,l,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,la(null,n),n=e.child,s=t.child.memoizedState,s===null?s=vi(l):(a=s.cachePool,a!==null?(r=zt._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=Df(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=pi(t,c,l),e.memoizedState=hi,la(t.child,n)):(fl(e),l=t.child,t=l.sibling,l=He(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function gi(t,e){return e=du({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function du(t,e){return t=fe(22,t,null,e),t.lanes=0,t}function yi(t,e,l){return Ll(e,t.child,null,l),t=gi(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xo(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Cc(t.return,e,l)}function bi(t,e,l,n,a,u){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=l,c.tailMode=a,c.treeForkCount=u)}function wo(t,e,l){var n=e.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var c=_t.current,s=(c&2)!==0;if(s?(c=c&1|2,e.flags|=128):c&=1,C(_t,c),Vt(t,e,n,l),n=lt?Xn:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xo(t,l,e);else if(t.tag===19)Xo(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(l=e.child,a=null;l!==null;)t=l.alternate,t!==null&&tu(t)===null&&(a=l),l=l.sibling;l=a,l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),bi(e,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&tu(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}bi(e,!0,l,null,u,n);break;case"together":bi(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Xe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ml|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(cn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,l=He(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=He(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Si(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ka(t)))}function oh(t,e,l){switch(e.tag){case 3:dt(e,e.stateNode.containerInfo),ul(e,zt,t.memoizedState.cache),Rl();break;case 27:case 5:_n(e);break;case 4:dt(e,e.stateNode.containerInfo);break;case 10:ul(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Zc(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(fl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Vo(t,e,l):(fl(e),t=Xe(t,e,l),t!==null?t.sibling:null);fl(e);break;case 19:var a=(t.flags&128)!==0;if(n=(l&e.childLanes)!==0,n||(cn(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return wo(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),C(_t,_t.current),n)break;return null;case 22:return e.lanes=0,Bo(t,e,l,e.pendingProps);case 24:ul(e,zt,t.memoizedState.cache)}return Xe(t,e,l)}function Zo(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ct=!0;else{if(!Si(t,l)&&(e.flags&128)===0)return Ct=!1,oh(t,e,l);Ct=(t.flags&131072)!==0}else Ct=!1,lt&&(e.flags&1048576)!==0&&Ef(e,Xn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=Bl(e.elementType),e.type=t,typeof t=="function")jc(t)?(n=Yl(t,n),e.tag=1,e=Yo(null,e,t,n,l)):(e.tag=0,e=mi(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===Zt){e.tag=11,e=Co(null,e,t,n,l);break t}else if(a===$){e.tag=14,e=Uo(null,e,t,n,l);break t}}throw e=Jt(t)||t,Error(f(306,e,""))}}return e;case 0:return mi(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=Yl(n,e.pendingProps),Yo(t,e,n,a,l);case 3:t:{if(dt(e,e.stateNode.containerInfo),t===null)throw Error(f(387));n=e.pendingProps;var u=e.memoizedState;a=u.element,Yc(t,e),$n(e,n,null,l);var c=e.memoizedState;if(n=c.cache,ul(e,zt,n),n!==u.cache&&Uc(e,[zt],l,!0),Fn(),n=c.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Qo(t,e,n,l);break t}else if(n!==a){a=be(Error(f(424)),e),wn(a),e=Qo(t,e,n,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(St=Te(t.firstChild),Yt=e,lt=!0,nl=null,Ee=!0,l=Gf(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Rl(),n===a){e=Xe(t,e,l);break t}Vt(t,e,n,l)}e=e.child}return e;case 26:return ru(t,e),t===null?(l=ld(e.type,null,e.pendingProps,null))?e.memoizedState=l:lt||(l=e.type,t=e.pendingProps,n=_u(O.current).createElement(l),n[qt]=e,n[Ft]=t,Xt(n,l,t),Bt(n),e.stateNode=n):e.memoizedState=ld(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return _n(e),t===null&&lt&&(n=e.stateNode=Pr(e.type,e.pendingProps,O.current),Yt=e,Ee=!0,a=St,yl(e.type)?(Pi=a,St=Te(n.firstChild)):St=a),Vt(t,e,e.pendingProps.children,l),ru(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((a=n=St)&&(n=Yh(n,e.type,e.pendingProps,Ee),n!==null?(e.stateNode=n,Yt=e,St=Te(n.firstChild),Ee=!1,a=!0):a=!1),a||al(e)),_n(e),a=e.type,u=e.pendingProps,c=t!==null?t.memoizedProps:null,n=u.children,Ji(a,u)?n=null:c!==null&&Ji(a,c)&&(e.flags|=32),e.memoizedState!==null&&(a=kc(t,e,eh,null,null,l),ga._currentValue=a),ru(t,e),Vt(t,e,n,l),e.child;case 6:return t===null&&lt&&((t=l=St)&&(l=Qh(l,e.pendingProps,Ee),l!==null?(e.stateNode=l,Yt=e,St=null,t=!0):t=!1),t||al(e)),null;case 13:return Vo(t,e,l);case 4:return dt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Ll(e,null,n,l):Vt(t,e,n,l),e.child;case 11:return Co(t,e,e.type,e.pendingProps,l);case 7:return Vt(t,e,e.pendingProps,l),e.child;case 8:return Vt(t,e,e.pendingProps.children,l),e.child;case 12:return Vt(t,e,e.pendingProps.children,l),e.child;case 10:return n=e.pendingProps,ul(e,e.type,n.value),Vt(t,e,n.children,l),e.child;case 9:return a=e.type._context,n=e.pendingProps.children,Ul(e),a=Qt(a),n=n(a),e.flags|=1,Vt(t,e,n,l),e.child;case 14:return Uo(t,e,e.type,e.pendingProps,l);case 15:return Go(t,e,e.type,e.pendingProps,l);case 19:return wo(t,e,l);case 31:return fh(t,e,l);case 22:return Bo(t,e,l,e.pendingProps);case 24:return Ul(e),n=Qt(zt),t===null?(a=Hc(),a===null&&(a=gt,u=Gc(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),e.memoizedState={parent:n,cache:a},qc(e),ul(e,zt,a)):((t.lanes&l)!==0&&(Yc(t,e),$n(e,null,null,l),Fn()),a=t.memoizedState,u=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ul(e,zt,n)):(n=u.cache,ul(e,zt,n),n!==a.cache&&Uc(e,[zt],l,!0))),Vt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function we(t){t.flags|=4}function Ai(t,e,l,n,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(yr())t.flags|=8192;else throw Hl=Fa,Lc}else t.flags&=-16777217}function Ko(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!id(e))if(yr())t.flags|=8192;else throw Hl=Fa,Lc}function mu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?xs():536870912,t.lanes|=e,bn|=e)}function na(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function rh(t,e,l){var n=e.pendingProps;switch(Dc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ye(zt),yt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(un(e)?we(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,zc())),At(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(we(e),u!==null?(At(e),Ko(e,u)):(At(e),Ai(e,a,null,n,l))):u?u!==t.memoizedState?(we(e),At(e),Ko(e,u)):(At(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&we(e),At(e),Ai(e,a,t,n,l)),null;case 27:if(Ta(e),l=O.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&we(e);else{if(!n){if(e.stateNode===null)throw Error(f(166));return At(e),null}t=B.current,un(e)?Tf(e):(t=Pr(a,n,l),e.stateNode=t,we(e))}return At(e),null;case 5:if(Ta(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&we(e);else{if(!n){if(e.stateNode===null)throw Error(f(166));return At(e),null}if(u=B.current,un(e))Tf(e);else{var c=_u(O.current);switch(u){case 1:u=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=c.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?c.createElement(a,{is:n.is}):c.createElement(a)}}u[qt]=e,u[Ft]=n;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)u.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=u;t:switch(Xt(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&we(e)}}return At(e),Ai(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&we(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(f(166));if(t=O.current,un(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=Yt,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[qt]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Vr(t.nodeValue,l)),t||al(e,!0)}else t=_u(t).createTextNode(n),t[qt]=e,e.stateNode=t}return At(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=un(e),l!==null){if(t===null){if(!n)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[qt]=e}else Rl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),t=!1}else l=zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(re(e),e):(re(e),null);if((e.flags&128)!==0)throw Error(f(558))}return At(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=un(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(f(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[qt]=e}else Rl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),a=!1}else a=zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(re(e),e):(re(e),null)}return re(e),(e.flags&128)!==0?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),mu(e,e.updateQueue),At(e),null);case 4:return yt(),t===null&&Xi(e.stateNode.containerInfo),At(e),null;case 10:return Ye(e.type),At(e),null;case 19:if(N(_t),n=e.memoizedState,n===null)return At(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)na(n,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=tu(t),u!==null){for(e.flags|=128,na(n,!1),t=u.updateQueue,e.updateQueue=t,mu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)bf(l,t),l=l.sibling;return C(_t,_t.current&1|2),lt&&Le(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&ue()>yu&&(e.flags|=128,a=!0,na(n,!1),e.lanes=4194304)}else{if(!a)if(t=tu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,mu(e,t),na(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!lt)return At(e),null}else 2*ue()-n.renderingStartTime>yu&&l!==536870912&&(e.flags|=128,a=!0,na(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=ue(),t.sibling=null,l=_t.current,C(_t,a?l&1|2:l&1),lt&&Le(e,n.treeForkCount),t):(At(e),null);case 22:case 23:return re(e),wc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(l&536870912)!==0&&(e.flags&128)===0&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),l=e.updateQueue,l!==null&&mu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&N(Gl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ye(zt),At(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function dh(t,e){switch(Dc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ye(zt),yt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ta(e),null;case 31:if(e.memoizedState!==null){if(re(e),e.alternate===null)throw Error(f(340));Rl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(re(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Rl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return N(_t),null;case 4:return yt(),null;case 10:return Ye(e.type),null;case 22:case 23:return re(e),wc(),t!==null&&N(Gl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ye(zt),null;case 25:return null;default:return null}}function ko(t,e){switch(Dc(e),e.tag){case 3:Ye(zt),yt();break;case 26:case 27:case 5:Ta(e);break;case 4:yt();break;case 31:e.memoizedState!==null&&re(e);break;case 13:re(e);break;case 19:N(_t);break;case 10:Ye(e.type);break;case 22:case 23:re(e),wc(),t!==null&&N(Gl);break;case 24:Ye(zt)}}function aa(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var u=l.create,c=l.inst;n=u(),c.destroy=n}l=l.next}while(l!==a)}}catch(s){rt(e,e.return,s)}}function rl(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&t)===t){var c=n.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,a=e;var r=l,g=s;try{g()}catch(E){rt(a,r,E)}}}n=n.next}while(n!==u)}}catch(E){rt(e,e.return,E)}}function Jo(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Hf(e,l)}catch(n){rt(t,t.return,n)}}}function Wo(t,e,l){l.props=Yl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){rt(t,e,n)}}function ua(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(a){rt(t,e,a)}}function ze(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){rt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){rt(t,e,a)}else l.current=null}function Fo(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){rt(t,t.return,a)}}function Ei(t,e,l){try{var n=t.stateNode;Uh(n,t.type,l,e),n[Ft]=e}catch(a){rt(t,t.return,a)}}function $o(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&yl(t.type)||t.tag===4}function xi(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$o(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&yl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ti(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ge));else if(n!==4&&(n===27&&yl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ti(t,e,l),t=t.sibling;t!==null;)Ti(t,e,l),t=t.sibling}function hu(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(n!==4&&(n===27&&yl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(hu(t,e,l),t=t.sibling;t!==null;)hu(t,e,l),t=t.sibling}function Io(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xt(e,n,l),e[qt]=t,e[Ft]=l}catch(u){rt(t,t.return,u)}}var Ze=!1,Ut=!1,ji=!1,Po=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function mh(t,e){if(t=t.containerInfo,Ki=Gu,t=of(t),yc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var c=0,s=-1,r=-1,g=0,E=0,M=t,y=null;e:for(;;){for(var S;M!==l||a!==0&&M.nodeType!==3||(s=c+a),M!==u||n!==0&&M.nodeType!==3||(r=c+n),M.nodeType===3&&(c+=M.nodeValue.length),(S=M.firstChild)!==null;)y=M,M=S;for(;;){if(M===t)break e;if(y===l&&++g===a&&(s=c),y===u&&++E===n&&(r=c),(S=M.nextSibling)!==null)break;M=y,y=M.parentNode}M=S}l=s===-1||r===-1?null:{start:s,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(ki={focusedElem:t,selectionRange:l},Gu=!1,Ht=e;Ht!==null;)if(e=Ht,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ht=t;else for(;Ht!==null;){switch(e=Ht,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)a=t[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var H=Yl(l.type,a);t=n.getSnapshotBeforeUpdate(H,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(X){rt(l,l.return,X)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Fi(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Fi(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Ht=t;break}Ht=e.return}}function tr(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:ke(t,l),n&4&&aa(5,l);break;case 1:if(ke(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){rt(l,l.return,c)}else{var a=Yl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){rt(l,l.return,c)}}n&64&&Jo(l),n&512&&ua(l,l.return);break;case 3:if(ke(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Hf(t,e)}catch(c){rt(l,l.return,c)}}break;case 27:e===null&&n&4&&Io(l);case 26:case 5:ke(t,l),e===null&&n&4&&Fo(l),n&512&&ua(l,l.return);break;case 12:ke(t,l);break;case 31:ke(t,l),n&4&&nr(t,l);break;case 13:ke(t,l),n&4&&ar(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Eh.bind(null,l),Vh(t,l))));break;case 22:if(n=l.memoizedState!==null||Ze,!n){e=e!==null&&e.memoizedState!==null||Ut,a=Ze;var u=Ut;Ze=n,(Ut=e)&&!u?Je(t,l,(l.subtreeFlags&8772)!==0):ke(t,l),Ze=a,Ut=u}break;case 30:break;default:ke(t,l)}}function er(t){var e=t.alternate;e!==null&&(t.alternate=null,er(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ec(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Et=null,It=!1;function Ke(t,e,l){for(l=l.child;l!==null;)lr(t,e,l),l=l.sibling}function lr(t,e,l){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Dn,l)}catch{}switch(l.tag){case 26:Ut||ze(l,e),Ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ut||ze(l,e);var n=Et,a=It;yl(l.type)&&(Et=l.stateNode,It=!1),Ke(t,e,l),ha(l.stateNode),Et=n,It=a;break;case 5:Ut||ze(l,e);case 6:if(n=Et,a=It,Et=null,Ke(t,e,l),Et=n,It=a,Et!==null)if(It)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(l.stateNode)}catch(u){rt(l,e,u)}else try{Et.removeChild(l.stateNode)}catch(u){rt(l,e,u)}break;case 18:Et!==null&&(It?(t=Et,Jr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Nn(t)):Jr(Et,l.stateNode));break;case 4:n=Et,a=It,Et=l.stateNode.containerInfo,It=!0,Ke(t,e,l),Et=n,It=a;break;case 0:case 11:case 14:case 15:rl(2,l,e),Ut||rl(4,l,e),Ke(t,e,l);break;case 1:Ut||(ze(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&Wo(l,e,n)),Ke(t,e,l);break;case 21:Ke(t,e,l);break;case 22:Ut=(n=Ut)||l.memoizedState!==null,Ke(t,e,l),Ut=n;break;default:Ke(t,e,l)}}function nr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Nn(t)}catch(l){rt(e,e.return,l)}}}function ar(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Nn(t)}catch(l){rt(e,e.return,l)}}function hh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Po),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Po),e;default:throw Error(f(435,t.tag))}}function vu(t,e){var l=hh(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=xh.bind(null,t,n);n.then(a,a)}})}function Pt(t,e){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=t,c=e,s=c;t:for(;s!==null;){switch(s.tag){case 27:if(yl(s.type)){Et=s.stateNode,It=!1;break t}break;case 5:Et=s.stateNode,It=!1;break t;case 3:case 4:Et=s.stateNode.containerInfo,It=!0;break t}s=s.return}if(Et===null)throw Error(f(160));lr(u,c,a),Et=null,It=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)ur(e,t),e=e.sibling}var Ne=null;function ur(t,e){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(e,t),te(t),n&4&&(rl(3,t,t.return),aa(3,t),rl(5,t,t.return));break;case 1:Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),n&64&&Ze&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Ne;if(Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=t.memoizedState,l===null)if(n===null)if(t.stateNode===null){t:{n=t.type,l=t.memoizedProps,a=a.ownerDocument||a;e:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Rn]||u[qt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),Xt(u,n,l),u[qt]=t,Bt(u),n=u;break t;case"link":var c=ud("link","href",a).get(n+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(u=c[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break e}}u=a.createElement(n),Xt(u,n,l),a.head.appendChild(u);break;case"meta":if(c=ud("meta","content",a).get(n+(l.content||""))){for(s=0;s<c.length;s++)if(u=c[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break e}}u=a.createElement(n),Xt(u,n,l),a.head.appendChild(u);break;default:throw Error(f(468,n))}u[qt]=t,Bt(u),n=u}t.stateNode=n}else cd(a,t.type,t.stateNode);else t.stateNode=ad(a,n,t.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?cd(a,t.type,t.stateNode):ad(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Ei(t,t.memoizedProps,l.memoizedProps)}break;case 27:Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),l!==null&&n&4&&Ei(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),t.flags&32){a=t.stateNode;try{Wl(a,"")}catch(H){rt(t,t.return,H)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,Ei(t,a,l!==null?l.memoizedProps:a)),n&1024&&(ji=!0);break;case 6:if(Pt(e,t),te(t),n&4){if(t.stateNode===null)throw Error(f(162));n=t.memoizedProps,l=t.stateNode;try{l.nodeValue=n}catch(H){rt(t,t.return,H)}}break;case 3:if(zu=null,a=Ne,Ne=Du(e.containerInfo),Pt(e,t),Ne=a,te(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Nn(e.containerInfo)}catch(H){rt(t,t.return,H)}ji&&(ji=!1,cr(t));break;case 4:n=Ne,Ne=Du(t.stateNode.containerInfo),Pt(e,t),te(t),Ne=n;break;case 12:Pt(e,t),te(t);break;case 31:Pt(e,t),te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 13:Pt(e,t),te(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gu=ue()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 22:a=t.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,g=Ze,E=Ut;if(Ze=g||a,Ut=E||r,Pt(e,t),Ut=E,Ze=g,te(t),n&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(l===null||r||Ze||Ut||Ql(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){r=l=e;try{if(u=r.stateNode,a)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=r.stateNode;var M=r.memoizedProps.style,y=M!=null&&M.hasOwnProperty("display")?M.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){rt(r,r.return,H)}}}else if(e.tag===6){if(l===null){r=e;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(H){rt(r,r.return,H)}}}else if(e.tag===18){if(l===null){r=e;try{var S=r.stateNode;a?Wr(S,!0):Wr(r.stateNode,!1)}catch(H){rt(r,r.return,H)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,vu(t,l))));break;case 19:Pt(e,t),te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 30:break;case 21:break;default:Pt(e,t),te(t)}}function te(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if($o(n)){l=n;break}n=n.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var a=l.stateNode,u=xi(t);hu(t,u,a);break;case 5:var c=l.stateNode;l.flags&32&&(Wl(c,""),l.flags&=-33);var s=xi(t);hu(t,s,c);break;case 3:case 4:var r=l.stateNode.containerInfo,g=xi(t);Ti(t,g,r);break;default:throw Error(f(161))}}catch(E){rt(t,t.return,E)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)tr(t,e.alternate,e),e=e.sibling}function Ql(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:rl(4,e,e.return),Ql(e);break;case 1:ze(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Wo(e,e.return,l),Ql(e);break;case 27:ha(e.stateNode);case 26:case 5:ze(e,e.return),Ql(e);break;case 22:e.memoizedState===null&&Ql(e);break;case 30:Ql(e);break;default:Ql(e)}t=t.sibling}}function Je(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,a=t,u=e,c=u.flags;switch(u.tag){case 0:case 11:case 15:Je(a,u,l),aa(4,u);break;case 1:if(Je(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){rt(n,n.return,g)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)Bf(r[a],s)}catch(g){rt(n,n.return,g)}}l&&c&64&&Jo(u),ua(u,u.return);break;case 27:Io(u);case 26:case 5:Je(a,u,l),l&&n===null&&c&4&&Fo(u),ua(u,u.return);break;case 12:Je(a,u,l);break;case 31:Je(a,u,l),l&&c&4&&nr(a,u);break;case 13:Je(a,u,l),l&&c&4&&ar(a,u);break;case 22:u.memoizedState===null&&Je(a,u,l),ua(u,u.return);break;case 30:break;default:Je(a,u,l)}e=e.sibling}}function Mi(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Zn(l))}function Ni(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zn(t))}function _e(t,e,l,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ir(t,e,l,n),e=e.sibling}function ir(t,e,l,n){var a=e.flags;switch(e.tag){case 0:case 11:case 15:_e(t,e,l,n),a&2048&&aa(9,e);break;case 1:_e(t,e,l,n);break;case 3:_e(t,e,l,n),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zn(t)));break;case 12:if(a&2048){_e(t,e,l,n),t=e.stateNode;try{var u=e.memoizedProps,c=u.id,s=u.onPostCommit;typeof s=="function"&&s(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){rt(e,e.return,r)}}else _e(t,e,l,n);break;case 31:_e(t,e,l,n);break;case 13:_e(t,e,l,n);break;case 23:break;case 22:u=e.stateNode,c=e.alternate,e.memoizedState!==null?u._visibility&2?_e(t,e,l,n):ca(t,e):u._visibility&2?_e(t,e,l,n):(u._visibility|=2,pn(t,e,l,n,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Mi(c,e);break;case 24:_e(t,e,l,n),a&2048&&Ni(e.alternate,e);break;default:_e(t,e,l,n)}}function pn(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,c=e,s=l,r=n,g=c.flags;switch(c.tag){case 0:case 11:case 15:pn(u,c,s,r,a),aa(8,c);break;case 23:break;case 22:var E=c.stateNode;c.memoizedState!==null?E._visibility&2?pn(u,c,s,r,a):ca(u,c):(E._visibility|=2,pn(u,c,s,r,a)),a&&g&2048&&Mi(c.alternate,c);break;case 24:pn(u,c,s,r,a),a&&g&2048&&Ni(c.alternate,c);break;default:pn(u,c,s,r,a)}e=e.sibling}}function ca(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:ca(l,n),a&2048&&Mi(n.alternate,n);break;case 24:ca(l,n),a&2048&&Ni(n.alternate,n);break;default:ca(l,n)}e=e.sibling}}var ia=8192;function gn(t,e,l){if(t.subtreeFlags&ia)for(t=t.child;t!==null;)sr(t,e,l),t=t.sibling}function sr(t,e,l){switch(t.tag){case 26:gn(t,e,l),t.flags&ia&&t.memoizedState!==null&&t0(l,Ne,t.memoizedState,t.memoizedProps);break;case 5:gn(t,e,l);break;case 3:case 4:var n=Ne;Ne=Du(t.stateNode.containerInfo),gn(t,e,l),Ne=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ia,ia=16777216,gn(t,e,l),ia=n):gn(t,e,l));break;default:gn(t,e,l)}}function fr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function sa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Ht=n,rr(n,t)}fr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)or(t),t=t.sibling}function or(t){switch(t.tag){case 0:case 11:case 15:sa(t),t.flags&2048&&rl(9,t,t.return);break;case 3:sa(t);break;case 12:sa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,pu(t)):sa(t);break;default:sa(t)}}function pu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Ht=n,rr(n,t)}fr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:rl(8,e,e.return),pu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,pu(e));break;default:pu(e)}t=t.sibling}}function rr(t,e){for(;Ht!==null;){var l=Ht;switch(l.tag){case 0:case 11:case 15:rl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Zn(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Ht=n;else t:for(l=t;Ht!==null;){n=Ht;var a=n.sibling,u=n.return;if(er(n),n===l){Ht=null;break t}if(a!==null){a.return=u,Ht=a;break t}Ht=u}}}var vh={getCacheForType:function(t){var e=Qt(zt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Qt(zt).controller.signal}},ph=typeof WeakMap=="function"?WeakMap:Map,it=0,gt=null,I=null,tt=0,ot=0,de=null,dl=!1,yn=!1,_i=!1,We=0,Nt=0,ml=0,Vl=0,Di=0,me=0,bn=0,fa=null,ee=null,Oi=!1,gu=0,dr=0,yu=1/0,bu=null,hl=null,Gt=0,vl=null,Sn=null,Fe=0,zi=0,Ri=null,mr=null,oa=0,Ci=null;function he(){return(it&2)!==0&&tt!==0?tt&-tt:T.T!==null?qi():Ns()}function hr(){if(me===0)if((tt&536870912)===0||lt){var t=Na;Na<<=1,(Na&3932160)===0&&(Na=262144),me=t}else me=536870912;return t=oe.current,t!==null&&(t.flags|=32),me}function le(t,e,l){(t===gt&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(An(t,0),pl(t,tt,me,!1)),zn(t,l),((it&2)===0||t!==gt)&&(t===gt&&((it&2)===0&&(Vl|=l),Nt===4&&pl(t,tt,me,!1)),Re(t))}function vr(t,e,l){if((it&6)!==0)throw Error(f(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||On(t,e),a=n?bh(t,e):Gi(t,e,!0),u=n;do{if(a===0){yn&&!n&&pl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!gh(l)){a=Gi(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var s=t;a=fa;var r=s.current.memoizedState.isDehydrated;if(r&&(An(s,c).flags|=256),c=Gi(s,c,!1),c!==2){if(_i&&!r){s.errorRecoveryDisabledLanes|=u,Vl|=u,a=4;break t}u=ee,ee=a,u!==null&&(ee===null?ee=u:ee.push.apply(ee,u))}a=c}if(u=!1,a!==2)continue}}if(a===1){An(t,0),pl(t,e,0,!0);break}t:{switch(n=t,u=a,u){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:pl(n,e,me,!dl);break t;case 2:ee=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(a=gu+300-ue(),10<a)){if(pl(n,e,me,!dl),Da(n,0,!0)!==0)break t;Fe=e,n.timeoutHandle=Kr(pr.bind(null,n,l,ee,bu,Oi,e,me,Vl,bn,dl,u,"Throttled",-0,0),a);break t}pr(n,l,ee,bu,Oi,e,me,Vl,bn,dl,u,null,-0,0)}}break}while(!0);Re(t)}function pr(t,e,l,n,a,u,c,s,r,g,E,M,y,S){if(t.timeoutHandle=-1,M=e.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ge},sr(e,u,M);var H=(u&62914560)===u?gu-ue():(u&4194048)===u?dr-ue():0;if(H=e0(M,H),H!==null){Fe=u,t.cancelPendingCommit=H(Tr.bind(null,t,e,u,l,n,a,c,s,r,E,M,null,y,S)),pl(t,u,c,!g);return}}Tr(t,e,u,l,n,a,c,s,r)}function gh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!se(u(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pl(t,e,l,n){e&=~Di,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var u=31-ie(a),c=1<<u;n[u]=-1,a&=~c}l!==0&&Ts(t,l,e)}function Su(){return(it&6)===0?(ra(0),!1):!0}function Ui(){if(I!==null){if(ot===0)var t=I.return;else t=I,qe=Cl=null,Fc(t),rn=null,kn=0,t=I;for(;t!==null;)ko(t.alternate,t),t=t.return;I=null}}function An(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Hh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Fe=0,Ui(),gt=t,I=l=He(t.current,null),tt=e,ot=0,de=null,dl=!1,yn=On(t,e),_i=!1,bn=me=Di=Vl=ml=Nt=0,ee=fa=null,Oi=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-ie(n),u=1<<a;e|=t[a],n&=~u}return We=e,Qa(),l}function gr(t,e){W=null,T.H=ea,e===on||e===Wa?(e=Rf(),ot=3):e===Lc?(e=Rf(),ot=4):ot=e===di?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,de=e,I===null&&(Nt=1,fu(t,be(e,t.current)))}function yr(){var t=oe.current;return t===null?!0:(tt&4194048)===tt?xe===null:(tt&62914560)===tt||(tt&536870912)!==0?t===xe:!1}function br(){var t=T.H;return T.H=ea,t===null?ea:t}function Sr(){var t=T.A;return T.A=vh,t}function Au(){Nt=4,dl||(tt&4194048)!==tt&&oe.current!==null||(yn=!0),(ml&134217727)===0&&(Vl&134217727)===0||gt===null||pl(gt,tt,me,!1)}function Gi(t,e,l){var n=it;it|=2;var a=br(),u=Sr();(gt!==t||tt!==e)&&(bu=null,An(t,e)),e=!1;var c=Nt;t:do try{if(ot!==0&&I!==null){var s=I,r=de;switch(ot){case 8:Ui(),c=6;break t;case 3:case 2:case 9:case 6:oe.current===null&&(e=!0);var g=ot;if(ot=0,de=null,En(t,s,r,g),l&&yn){c=0;break t}break;default:g=ot,ot=0,de=null,En(t,s,r,g)}}yh(),c=Nt;break}catch(E){gr(t,E)}while(!0);return e&&t.shellSuspendCounter++,qe=Cl=null,it=n,T.H=a,T.A=u,I===null&&(gt=null,tt=0,Qa()),c}function yh(){for(;I!==null;)Ar(I)}function bh(t,e){var l=it;it|=2;var n=br(),a=Sr();gt!==t||tt!==e?(bu=null,yu=ue()+500,An(t,e)):yn=On(t,e);t:do try{if(ot!==0&&I!==null){e=I;var u=de;e:switch(ot){case 1:ot=0,de=null,En(t,e,u,1);break;case 2:case 9:if(Of(u)){ot=0,de=null,Er(e);break}e=function(){ot!==2&&ot!==9||gt!==t||(ot=7),Re(t)},u.then(e,e);break t;case 3:ot=7;break t;case 4:ot=5;break t;case 7:Of(u)?(ot=0,de=null,Er(e)):(ot=0,de=null,En(t,e,u,7));break;case 5:var c=null;switch(I.tag){case 26:c=I.memoizedState;case 5:case 27:var s=I;if(c?id(c):s.stateNode.complete){ot=0,de=null;var r=s.sibling;if(r!==null)I=r;else{var g=s.return;g!==null?(I=g,Eu(g)):I=null}break e}}ot=0,de=null,En(t,e,u,5);break;case 6:ot=0,de=null,En(t,e,u,6);break;case 8:Ui(),Nt=6;break t;default:throw Error(f(462))}}Sh();break}catch(E){gr(t,E)}while(!0);return qe=Cl=null,T.H=n,T.A=a,it=l,I!==null?0:(gt=null,tt=0,Qa(),Nt)}function Sh(){for(;I!==null&&!Xd();)Ar(I)}function Ar(t){var e=Zo(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?Eu(t):I=e}function Er(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=qo(l,e,e.pendingProps,e.type,void 0,tt);break;case 11:e=qo(l,e,e.pendingProps,e.type.render,e.ref,tt);break;case 5:Fc(e);default:ko(l,e),e=I=bf(e,We),e=Zo(l,e,We)}t.memoizedProps=t.pendingProps,e===null?Eu(t):I=e}function En(t,e,l,n){qe=Cl=null,Fc(e),rn=null,kn=0;var a=e.return;try{if(sh(t,a,e,l,tt)){Nt=1,fu(t,be(l,t.current)),I=null;return}}catch(u){if(a!==null)throw I=a,u;Nt=1,fu(t,be(l,t.current)),I=null;return}e.flags&32768?(lt||n===1?t=!0:yn||(tt&536870912)!==0?t=!1:(dl=t=!0,(n===2||n===9||n===3||n===6)&&(n=oe.current,n!==null&&n.tag===13&&(n.flags|=16384))),xr(e,t)):Eu(e)}function Eu(t){var e=t;do{if((e.flags&32768)!==0){xr(e,dl);return}t=e.return;var l=rh(e.alternate,e,We);if(l!==null){I=l;return}if(e=e.sibling,e!==null){I=e;return}I=e=t}while(e!==null);Nt===0&&(Nt=5)}function xr(t,e){do{var l=dh(t.alternate,t);if(l!==null){l.flags&=32767,I=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){I=t;return}I=t=l}while(t!==null);Nt=6,I=null}function Tr(t,e,l,n,a,u,c,s,r){t.cancelPendingCommit=null;do xu();while(Gt!==0);if((it&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(u=e.lanes|e.childLanes,u|=xc,Pd(t,l,u,c,s,r),t===gt&&(I=gt=null,tt=0),Sn=e,vl=t,Fe=l,zi=u,Ri=a,mr=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Th(ja,function(){return Dr(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,a=R.p,R.p=2,c=it,it|=4;try{mh(t,e,l)}finally{it=c,R.p=a,T.T=n}}Gt=1,jr(),Mr(),Nr()}}function jr(){if(Gt===1){Gt=0;var t=vl,e=Sn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var n=R.p;R.p=2;var a=it;it|=4;try{ur(e,t);var u=ki,c=of(t.containerInfo),s=u.focusedElem,r=u.selectionRange;if(c!==s&&s&&s.ownerDocument&&ff(s.ownerDocument.documentElement,s)){if(r!==null&&yc(s)){var g=r.start,E=r.end;if(E===void 0&&(E=g),"selectionStart"in s)s.selectionStart=g,s.selectionEnd=Math.min(E,s.value.length);else{var M=s.ownerDocument||document,y=M&&M.defaultView||window;if(y.getSelection){var S=y.getSelection(),H=s.textContent.length,X=Math.min(r.start,H),vt=r.end===void 0?X:Math.min(r.end,H);!S.extend&&X>vt&&(c=vt,vt=X,X=c);var h=sf(s,X),d=sf(s,vt);if(h&&d&&(S.rangeCount!==1||S.anchorNode!==h.node||S.anchorOffset!==h.offset||S.focusNode!==d.node||S.focusOffset!==d.offset)){var p=M.createRange();p.setStart(h.node,h.offset),S.removeAllRanges(),X>vt?(S.addRange(p),S.extend(d.node,d.offset)):(p.setEnd(d.node,d.offset),S.addRange(p))}}}}for(M=[],S=s;S=S.parentNode;)S.nodeType===1&&M.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<M.length;s++){var j=M[s];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Gu=!!Ki,ki=Ki=null}finally{it=a,R.p=n,T.T=l}}t.current=e,Gt=2}}function Mr(){if(Gt===2){Gt=0;var t=vl,e=Sn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var n=R.p;R.p=2;var a=it;it|=4;try{tr(t,e.alternate,e)}finally{it=a,R.p=n,T.T=l}}Gt=3}}function Nr(){if(Gt===4||Gt===3){Gt=0,wd();var t=vl,e=Sn,l=Fe,n=mr;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Gt=5:(Gt=0,Sn=vl=null,_r(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(hl=null),Pu(l),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Dn,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=T.T,a=R.p,R.p=2,T.T=null;try{for(var u=t.onRecoverableError,c=0;c<n.length;c++){var s=n[c];u(s.value,{componentStack:s.stack})}}finally{T.T=e,R.p=a}}(Fe&3)!==0&&xu(),Re(t),a=t.pendingLanes,(l&261930)!==0&&(a&42)!==0?t===Ci?oa++:(oa=0,Ci=t):oa=0,ra(0)}}function _r(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zn(e)))}function xu(){return jr(),Mr(),Nr(),Dr()}function Dr(){if(Gt!==5)return!1;var t=vl,e=zi;zi=0;var l=Pu(Fe),n=T.T,a=R.p;try{R.p=32>l?32:l,T.T=null,l=Ri,Ri=null;var u=vl,c=Fe;if(Gt=0,Sn=vl=null,Fe=0,(it&6)!==0)throw Error(f(331));var s=it;if(it|=4,or(u.current),ir(u,u.current,c,l),it=s,ra(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Dn,u)}catch{}return!0}finally{R.p=a,T.T=n,_r(t,e)}}function Or(t,e,l){e=be(l,e),e=ri(t.stateNode,e,2),t=sl(t,e,2),t!==null&&(zn(t,2),Re(t))}function rt(t,e,l){if(t.tag===3)Or(t,t,l);else for(;e!==null;){if(e.tag===3){Or(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(hl===null||!hl.has(n))){t=be(l,t),l=zo(2),n=sl(e,l,2),n!==null&&(Ro(l,n,e,t),zn(n,2),Re(n));break}}e=e.return}}function Bi(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new ph;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(_i=!0,a.add(l),t=Ah.bind(null,t,e,l),e.then(t,t))}function Ah(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,gt===t&&(tt&l)===l&&(Nt===4||Nt===3&&(tt&62914560)===tt&&300>ue()-gu?(it&2)===0&&An(t,0):Di|=l,bn===tt&&(bn=0)),Re(t)}function zr(t,e){e===0&&(e=xs()),t=Ol(t,e),t!==null&&(zn(t,e),Re(t))}function Eh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),zr(t,l)}function xh(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(f(314))}n!==null&&n.delete(e),zr(t,l)}function Th(t,e){return Wu(t,e)}var Tu=null,xn=null,Hi=!1,ju=!1,Li=!1,gl=0;function Re(t){t!==xn&&t.next===null&&(xn===null?Tu=xn=t:xn=xn.next=t),ju=!0,Hi||(Hi=!0,Mh())}function ra(t,e){if(!Li&&ju){Li=!0;do for(var l=!1,n=Tu;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var c=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-ie(42|t)+1)-1,u&=a&~(c&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Gr(n,u))}else u=tt,u=Da(n,n===gt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||On(n,u)||(l=!0,Gr(n,u));n=n.next}while(l);Li=!1}}function jh(){Rr()}function Rr(){ju=Hi=!1;var t=0;gl!==0&&Bh()&&(t=gl);for(var e=ue(),l=null,n=Tu;n!==null;){var a=n.next,u=Cr(n,e);u===0?(n.next=null,l===null?Tu=a:l.next=a,a===null&&(xn=l)):(l=n,(t!==0||(u&3)!==0)&&(ju=!0)),n=a}Gt!==0&&Gt!==5||ra(t),gl!==0&&(gl=0)}function Cr(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var c=31-ie(u),s=1<<c,r=a[c];r===-1?((s&l)===0||(s&n)!==0)&&(a[c]=Id(s,e)):r<=e&&(t.expiredLanes|=s),u&=~s}if(e=gt,l=tt,l=Da(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Fu(n),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||On(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&Fu(n),Pu(l)){case 2:case 8:l=As;break;case 32:l=ja;break;case 268435456:l=Es;break;default:l=ja}return n=Ur.bind(null,t),l=Wu(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&Fu(n),t.callbackPriority=2,t.callbackNode=null,2}function Ur(t,e){if(Gt!==0&&Gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(xu()&&t.callbackNode!==l)return null;var n=tt;return n=Da(t,t===gt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(vr(t,n,e),Cr(t,ue()),t.callbackNode!=null&&t.callbackNode===l?Ur.bind(null,t):null)}function Gr(t,e){if(xu())return null;vr(t,e,!0)}function Mh(){Lh(function(){(it&6)!==0?Wu(Ss,jh):Rr()})}function qi(){if(gl===0){var t=sn;t===0&&(t=Ma,Ma<<=1,(Ma&261888)===0&&(Ma=256)),gl=t}return gl}function Br(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ca(""+t)}function Hr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Nh(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var u=Br((a[Ft]||null).action),c=n.submitter;c&&(e=(e=c[Ft]||null)?Br(e.formAction):c.getAttribute("formAction"),e!==null&&(u=e,c=null));var s=new Ha("action","action",null,n,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(gl!==0){var r=c?Hr(a,c):new FormData(a);ui(l,{pending:!0,data:r,method:a.method,action:u},null,r)}}else typeof u=="function"&&(s.preventDefault(),r=c?Hr(a,c):new FormData(a),ui(l,{pending:!0,data:r,method:a.method,action:u},u,r))},currentTarget:a}]})}}for(var Yi=0;Yi<Ec.length;Yi++){var Qi=Ec[Yi],_h=Qi.toLowerCase(),Dh=Qi[0].toUpperCase()+Qi.slice(1);Me(_h,"on"+Dh)}Me(mf,"onAnimationEnd"),Me(hf,"onAnimationIteration"),Me(vf,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(Zm,"onTransitionRun"),Me(Km,"onTransitionStart"),Me(km,"onTransitionCancel"),Me(pf,"onTransitionEnd"),kl("onMouseEnter",["mouseout","mouseover"]),kl("onMouseLeave",["mouseout","mouseover"]),kl("onPointerEnter",["pointerout","pointerover"]),kl("onPointerLeave",["pointerout","pointerover"]),Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(da));function Lr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var c=n.length-1;0<=c;c--){var s=n[c],r=s.instance,g=s.currentTarget;if(s=s.listener,r!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=g;try{u(a)}catch(E){Ya(E)}a.currentTarget=null,u=r}else for(c=0;c<n.length;c++){if(s=n[c],r=s.instance,g=s.currentTarget,s=s.listener,r!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=g;try{u(a)}catch(E){Ya(E)}a.currentTarget=null,u=r}}}}function P(t,e){var l=e[tc];l===void 0&&(l=e[tc]=new Set);var n=t+"__bubble";l.has(n)||(qr(e,t,2,!1),l.add(n))}function Vi(t,e,l){var n=0;e&&(n|=4),qr(l,t,n,e)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[Mu]){t[Mu]=!0,Os.forEach(function(l){l!=="selectionchange"&&(Oh.has(l)||Vi(l,!1,t),Vi(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mu]||(e[Mu]=!0,Vi("selectionchange",!1,e))}}function qr(t,e,l,n){switch(hd(e)){case 2:var a=a0;break;case 8:a=u0;break;default:a=as}l=a.bind(null,e,l,t),a=void 0,!fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function wi(t,e,l,n,a){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var s=n.stateNode.containerInfo;if(s===a)break;if(c===4)for(c=n.return;c!==null;){var r=c.tag;if((r===3||r===4)&&c.stateNode.containerInfo===a)return;c=c.return}for(;s!==null;){if(c=wl(s),c===null)return;if(r=c.tag,r===5||r===6||r===26||r===27){n=u=c;continue t}s=s.parentNode}}n=n.return}Vs(function(){var g=u,E=ic(l),M=[];t:{var y=gf.get(t);if(y!==void 0){var S=Ha,H=t;switch(t){case"keypress":if(Ga(l)===0)break t;case"keydown":case"keyup":S=xm;break;case"focusin":H="focus",S=mc;break;case"focusout":H="blur",S=mc;break;case"beforeblur":case"afterblur":S=mc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Mm;break;case mf:case hf:case vf:S=hm;break;case pf:S=_m;break;case"scroll":case"scrollend":S=fm;break;case"wheel":S=Om;break;case"copy":case"cut":case"paste":S=pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ks;break;case"toggle":case"beforetoggle":S=Rm}var X=(e&4)!==0,vt=!X&&(t==="scroll"||t==="scrollend"),h=X?y!==null?y+"Capture":null:y;X=[];for(var d=g,p;d!==null;){var j=d;if(p=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||p===null||h===null||(j=Un(d,h),j!=null&&X.push(ma(d,j,p))),vt)break;d=d.return}0<X.length&&(y=new S(y,H,null,l,E),M.push({event:y,listeners:X}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&l!==cc&&(H=l.relatedTarget||l.fromElement)&&(wl(H)||H[Xl]))break t;if((S||y)&&(y=E.window===E?E:(y=E.ownerDocument)?y.defaultView||y.parentWindow:window,S?(H=l.relatedTarget||l.toElement,S=g,H=H?wl(H):null,H!==null&&(vt=A(H),X=H.tag,H!==vt||X!==5&&X!==27&&X!==6)&&(H=null)):(S=null,H=g),S!==H)){if(X=Zs,j="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(X=ks,j="onPointerLeave",h="onPointerEnter",d="pointer"),vt=S==null?y:Cn(S),p=H==null?y:Cn(H),y=new X(j,d+"leave",S,l,E),y.target=vt,y.relatedTarget=p,j=null,wl(E)===g&&(X=new X(h,d+"enter",H,l,E),X.target=p,X.relatedTarget=vt,j=X),vt=j,S&&H)e:{for(X=zh,h=S,d=H,p=0,j=h;j;j=X(j))p++;j=0;for(var Q=d;Q;Q=X(Q))j++;for(;0<p-j;)h=X(h),p--;for(;0<j-p;)d=X(d),j--;for(;p--;){if(h===d||d!==null&&h===d.alternate){X=h;break e}h=X(h),d=X(d)}X=null}else X=null;S!==null&&Yr(M,y,S,X,!1),H!==null&&vt!==null&&Yr(M,vt,H,X,!0)}}t:{if(y=g?Cn(g):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var ut=ef;else if(Ps(y))if(lf)ut=Vm;else{ut=Ym;var L=qm}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&uc(g.elementType)&&(ut=ef):ut=Qm;if(ut&&(ut=ut(t,g))){tf(M,ut,l,E);break t}L&&L(t,y,g),t==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&ac(y,"number",y.value)}switch(L=g?Cn(g):window,t){case"focusin":(Ps(L)||L.contentEditable==="true")&&(Pl=L,bc=g,Vn=null);break;case"focusout":Vn=bc=Pl=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,rf(M,l,E);break;case"selectionchange":if(wm)break;case"keydown":case"keyup":rf(M,l,E)}var F;if(vc)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else Il?$s(t,l)&&(et="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(et="onCompositionStart");et&&(Js&&l.locale!=="ko"&&(Il||et!=="onCompositionStart"?et==="onCompositionEnd"&&Il&&(F=Xs()):(el=E,oc="value"in el?el.value:el.textContent,Il=!0)),L=Nu(g,et),0<L.length&&(et=new Ks(et,t,null,l,E),M.push({event:et,listeners:L}),F?et.data=F:(F=Is(l),F!==null&&(et.data=F)))),(F=Um?Gm(t,l):Bm(t,l))&&(et=Nu(g,"onBeforeInput"),0<et.length&&(L=new Ks("onBeforeInput","beforeinput",null,l,E),M.push({event:L,listeners:et}),L.data=F)),Nh(M,t,g,l,E)}Lr(M,e)})}function ma(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Nu(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Un(t,l),a!=null&&n.unshift(ma(t,a,u)),a=Un(t,e),a!=null&&n.push(ma(t,a,u))),t.tag===3)return n;t=t.return}return[]}function zh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yr(t,e,l,n,a){for(var u=e._reactName,c=[];l!==null&&l!==n;){var s=l,r=s.alternate,g=s.stateNode;if(s=s.tag,r!==null&&r===n)break;s!==5&&s!==26&&s!==27||g===null||(r=g,a?(g=Un(l,u),g!=null&&c.unshift(ma(l,g,r))):a||(g=Un(l,u),g!=null&&c.push(ma(l,g,r)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var Rh=/\r\n?/g,Ch=/\u0000|\uFFFD/g;function Qr(t){return(typeof t=="string"?t:""+t).replace(Rh,`
`).replace(Ch,"")}function Vr(t,e){return e=Qr(e),Qr(t)===e}function ht(t,e,l,n,a,u){switch(l){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Wl(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Wl(t,""+n);break;case"className":za(t,"class",n);break;case"tabIndex":za(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":za(t,l,n);break;case"style":Ys(t,n,u);break;case"data":if(e!=="object"){za(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Ca(""+n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&ht(t,e,"name",a.name,a,null),ht(t,e,"formEncType",a.formEncType,a,null),ht(t,e,"formMethod",a.formMethod,a,null),ht(t,e,"formTarget",a.formTarget,a,null)):(ht(t,e,"encType",a.encType,a,null),ht(t,e,"method",a.method,a,null),ht(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Ca(""+n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=Ge);break;case"onScroll":n!=null&&P("scroll",t);break;case"onScrollEnd":n!=null&&P("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=Ca(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""+n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":P("beforetoggle",t),P("toggle",t),Oa(t,"popover",n);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Oa(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=im.get(l)||l,Oa(t,l,n))}}function Zi(t,e,l,n,a,u){switch(l){case"style":Ys(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"children":typeof n=="string"?Wl(t,n):(typeof n=="number"||typeof n=="bigint")&&Wl(t,""+n);break;case"onScroll":n!=null&&P("scroll",t);break;case"onScrollEnd":n!=null&&P("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),e=l.slice(2,a?l.length-7:void 0),u=t[Ft]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,n,a);break t}l in t?t[l]=n:n===!0?t.setAttribute(l,""):Oa(t,l,n)}}}function Xt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",t),P("load",t);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var c=l[u];if(c!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ht(t,e,u,c,l,null)}}a&&ht(t,e,"srcSet",l.srcSet,l,null),n&&ht(t,e,"src",l.src,l,null);return;case"input":P("invalid",t);var s=u=c=a=null,r=null,g=null;for(n in l)if(l.hasOwnProperty(n)){var E=l[n];if(E!=null)switch(n){case"name":a=E;break;case"type":c=E;break;case"checked":r=E;break;case"defaultChecked":g=E;break;case"value":u=E;break;case"defaultValue":s=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(f(137,e));break;default:ht(t,e,n,E,l,null)}}Bs(t,u,s,r,g,c,a,!1);return;case"select":P("invalid",t),n=c=u=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":c=s;break;case"multiple":n=s;default:ht(t,e,a,s,l,null)}e=u,l=c,t.multiple=!!n,e!=null?Jl(t,!!n,e,!1):l!=null&&Jl(t,!!n,l,!0);return;case"textarea":P("invalid",t),u=a=n=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:ht(t,e,c,s,l,null)}Ls(t,n,a,u);return;case"option":for(r in l)if(l.hasOwnProperty(r)&&(n=l[r],n!=null))switch(r){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ht(t,e,r,n,l,null)}return;case"dialog":P("beforetoggle",t),P("toggle",t),P("cancel",t),P("close",t);break;case"iframe":case"object":P("load",t);break;case"video":case"audio":for(n=0;n<da.length;n++)P(da[n],t);break;case"image":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"embed":case"source":case"link":P("error",t),P("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(n=l[g],n!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ht(t,e,g,n,l,null)}return;default:if(uc(e)){for(E in l)l.hasOwnProperty(E)&&(n=l[E],n!==void 0&&Zi(t,e,E,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&ht(t,e,s,n,l,null))}function Uh(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,c=null,s=null,r=null,g=null,E=null;for(S in l){var M=l[S];if(l.hasOwnProperty(S)&&M!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":r=M;default:n.hasOwnProperty(S)||ht(t,e,S,null,n,M)}}for(var y in n){var S=n[y];if(M=l[y],n.hasOwnProperty(y)&&(S!=null||M!=null))switch(y){case"type":u=S;break;case"name":a=S;break;case"checked":g=S;break;case"defaultChecked":E=S;break;case"value":c=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(f(137,e));break;default:S!==M&&ht(t,e,y,S,n,M)}}nc(t,c,s,r,g,E,u,a);return;case"select":S=c=s=y=null;for(u in l)if(r=l[u],l.hasOwnProperty(u)&&r!=null)switch(u){case"value":break;case"multiple":S=r;default:n.hasOwnProperty(u)||ht(t,e,u,null,n,r)}for(a in n)if(u=n[a],r=l[a],n.hasOwnProperty(a)&&(u!=null||r!=null))switch(a){case"value":y=u;break;case"defaultValue":s=u;break;case"multiple":c=u;default:u!==r&&ht(t,e,a,u,n,r)}e=s,l=c,n=S,y!=null?Jl(t,!!l,y,!1):!!n!=!!l&&(e!=null?Jl(t,!!l,e,!0):Jl(t,!!l,l?[]:"",!1));return;case"textarea":S=y=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ht(t,e,s,null,n,a)}for(c in n)if(a=n[c],u=l[c],n.hasOwnProperty(c)&&(a!=null||u!=null))switch(c){case"value":y=a;break;case"defaultValue":S=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==u&&ht(t,e,c,a,n,u)}Hs(t,y,S);return;case"option":for(var H in l)if(y=l[H],l.hasOwnProperty(H)&&y!=null&&!n.hasOwnProperty(H))switch(H){case"selected":t.selected=!1;break;default:ht(t,e,H,null,n,y)}for(r in n)if(y=n[r],S=l[r],n.hasOwnProperty(r)&&y!==S&&(y!=null||S!=null))switch(r){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ht(t,e,r,y,n,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in l)y=l[X],l.hasOwnProperty(X)&&y!=null&&!n.hasOwnProperty(X)&&ht(t,e,X,null,n,y);for(g in n)if(y=n[g],S=l[g],n.hasOwnProperty(g)&&y!==S&&(y!=null||S!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,e));break;default:ht(t,e,g,y,n,S)}return;default:if(uc(e)){for(var vt in l)y=l[vt],l.hasOwnProperty(vt)&&y!==void 0&&!n.hasOwnProperty(vt)&&Zi(t,e,vt,void 0,n,y);for(E in n)y=n[E],S=l[E],!n.hasOwnProperty(E)||y===S||y===void 0&&S===void 0||Zi(t,e,E,y,n,S);return}}for(var h in l)y=l[h],l.hasOwnProperty(h)&&y!=null&&!n.hasOwnProperty(h)&&ht(t,e,h,null,n,y);for(M in n)y=n[M],S=l[M],!n.hasOwnProperty(M)||y===S||y==null&&S==null||ht(t,e,M,y,n,S)}function Xr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,c=a.initiatorType,s=a.duration;if(u&&s&&Xr(c)){for(c=0,s=a.responseEnd,n+=1;n<l.length;n++){var r=l[n],g=r.startTime;if(g>s)break;var E=r.transferSize,M=r.initiatorType;E&&Xr(M)&&(r=r.responseEnd,c+=E*(r<s?1:(s-g)/(r-g)))}if(--n,e+=8*(u+c)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ki=null,ki=null;function _u(t){return t.nodeType===9?t:t.ownerDocument}function wr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ji(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wi=null;function Bh(){var t=window.event;return t&&t.type==="popstate"?t===Wi?!1:(Wi=t,!0):(Wi=null,!1)}var Kr=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,kr=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof kr<"u"?function(t){return kr.resolve(null).then(t).catch(qh)}:Kr;function qh(t){setTimeout(function(){throw t})}function yl(t){return t==="head"}function Jr(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),Nn(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")ha(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,ha(l);for(var u=l.firstChild;u;){var c=u.nextSibling,s=u.nodeName;u[Rn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}else l==="body"&&ha(t.ownerDocument.body);l=a}while(l);Nn(e)}function Wr(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function Fi(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Fi(l),ec(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Yh(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Rn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Te(t.nextSibling),t===null)break}return null}function Qh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Te(t.nextSibling),t===null))return null;return t}function Fr(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Te(t.nextSibling),t===null))return null;return t}function $i(t){return t.data==="$?"||t.data==="$~"}function Ii(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Vh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Te(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Pi=null;function $r(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Te(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Ir(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Pr(t,e,l){switch(e=_u(l),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function ha(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ec(t)}var je=new Map,td=new Set;function Du(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $e=R.d;R.d={f:Xh,r:wh,D:Zh,C:Kh,L:kh,m:Jh,X:Fh,S:Wh,M:$h};function Xh(){var t=$e.f(),e=Su();return t||e}function wh(t){var e=Zl(t);e!==null&&e.tag===5&&e.type==="form"?go(e):$e.r(t)}var Tn=typeof document>"u"?null:document;function ed(t,e,l){var n=Tn;if(n&&typeof e=="string"&&e){var a=ge(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),td.has(a)||(td.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),Xt(e,"link",t),Bt(e),n.head.appendChild(e)))}}function Zh(t){$e.D(t),ed("dns-prefetch",t,null)}function Kh(t,e){$e.C(t,e),ed("preconnect",t,e)}function kh(t,e,l){$e.L(t,e,l);var n=Tn;if(n&&t&&e){var a='link[rel="preload"][as="'+ge(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+ge(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+ge(l.imageSizes)+'"]')):a+='[href="'+ge(t)+'"]';var u=a;switch(e){case"style":u=jn(t);break;case"script":u=Mn(t)}je.has(u)||(t=U({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),je.set(u,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(va(u))||e==="script"&&n.querySelector(pa(u))||(e=n.createElement("link"),Xt(e,"link",t),Bt(e),n.head.appendChild(e)))}}function Jh(t,e){$e.m(t,e);var l=Tn;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+ge(n)+'"][href="'+ge(t)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Mn(t)}if(!je.has(u)&&(t=U({rel:"modulepreload",href:t},e),je.set(u,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(pa(u)))return}n=l.createElement("link"),Xt(n,"link",t),Bt(n),l.head.appendChild(n)}}}function Wh(t,e,l){$e.S(t,e,l);var n=Tn;if(n&&t){var a=Kl(n).hoistableStyles,u=jn(t);e=e||"default";var c=a.get(u);if(!c){var s={loading:0,preload:null};if(c=n.querySelector(va(u)))s.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},l),(l=je.get(u))&&ts(t,l);var r=c=n.createElement("link");Bt(r),Xt(r,"link",t),r._p=new Promise(function(g,E){r.onload=g,r.onerror=E}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ou(c,e,n)}c={type:"stylesheet",instance:c,count:1,state:s},a.set(u,c)}}}function Fh(t,e){$e.X(t,e);var l=Tn;if(l&&t){var n=Kl(l).hoistableScripts,a=Mn(t),u=n.get(a);u||(u=l.querySelector(pa(a)),u||(t=U({src:t,async:!0},e),(e=je.get(a))&&es(t,e),u=l.createElement("script"),Bt(u),Xt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function $h(t,e){$e.M(t,e);var l=Tn;if(l&&t){var n=Kl(l).hoistableScripts,a=Mn(t),u=n.get(a);u||(u=l.querySelector(pa(a)),u||(t=U({src:t,async:!0,type:"module"},e),(e=je.get(a))&&es(t,e),u=l.createElement("script"),Bt(u),Xt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function ld(t,e,l,n){var a=(a=O.current)?Du(a):null;if(!a)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=jn(l.href),l=Kl(a).hoistableStyles,n=l.get(e),n||(n={type:"style",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=jn(l.href);var u=Kl(a).hoistableStyles,c=u.get(t);if(c||(a=a.ownerDocument||a,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,c),(u=a.querySelector(va(t)))&&!u._p&&(c.instance=u,c.state.loading=5),je.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},je.set(t,l),u||Ih(a,t,l,c.state))),e&&n===null)throw Error(f(528,""));return c}if(e&&n!==null)throw Error(f(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Mn(l),l=Kl(a).hoistableScripts,n=l.get(e),n||(n={type:"script",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function jn(t){return'href="'+ge(t)+'"'}function va(t){return'link[rel="stylesheet"]['+t+"]"}function nd(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Ih(t,e,l,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Xt(e,"link",l),Bt(e),t.head.appendChild(e))}function Mn(t){return'[src="'+ge(t)+'"]'}function pa(t){return"script[async]"+t}function ad(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+ge(l.href)+'"]');if(n)return e.instance=n,Bt(n),n;var a=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Bt(n),Xt(n,"style",a),Ou(n,l.precedence,t),e.instance=n;case"stylesheet":a=jn(l.href);var u=t.querySelector(va(a));if(u)return e.state.loading|=4,e.instance=u,Bt(u),u;n=nd(l),(a=je.get(a))&&ts(n,a),u=(t.ownerDocument||t).createElement("link"),Bt(u);var c=u;return c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Xt(u,"link",n),e.state.loading|=4,Ou(u,l.precedence,t),e.instance=u;case"script":return u=Mn(l.src),(a=t.querySelector(pa(u)))?(e.instance=a,Bt(a),a):(n=l,(a=je.get(u))&&(n=U({},l),es(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),Bt(a),Xt(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Ou(n,l.precedence,t));return e.instance}function Ou(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,c=0;c<n.length;c++){var s=n[c];if(s.dataset.precedence===e)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ts(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function es(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var zu=null;function ud(t,e,l){if(zu===null){var n=new Map,a=zu=new Map;a.set(l,n)}else a=zu,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var u=l[a];if(!(u[Rn]||u[qt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(e)||"";c=t+c;var s=n.get(c);s?s.push(u):n.set(c,[u])}}return n}function cd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Ph(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function id(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function t0(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=jn(n.href),u=e.querySelector(va(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ru.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Bt(u);return}u=e.ownerDocument||e,n=nd(n),(a=je.get(a))&&ts(n,a),u=u.createElement("link"),Bt(u);var c=u;c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Xt(u,"link",n),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Ru.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ls=0;function e0(t,e){return t.stylesheets&&t.count===0&&Uu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&Uu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&ls===0&&(ls=62500*Gh());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Uu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>ls?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cu=null;function Uu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cu=new Map,e.forEach(l0,t),Cu=null,Ru.call(t))}function l0(t,e){if(!(e.state.loading&4)){var l=Cu.get(t);if(l)var n=l.get(null);else{l=new Map,Cu.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var c=a[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),n=c)}n&&l.set(null,n)}a=e.instance,c=a.getAttribute("data-precedence"),u=l.get(c)||n,u===n&&l.set(null,a),l.set(c,a),this.count++,n=Ru.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ga={$$typeof:Tt,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function n0(t,e,l,n,a,u,c,s,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.hiddenUpdates=$u(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function sd(t,e,l,n,a,u,c,s,r,g,E,M){return t=new n0(t,e,l,c,r,g,E,M,s),e=1,u===!0&&(e|=24),u=fe(3,null,null,e),t.current=u,u.stateNode=t,e=Gc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:e},qc(u),t}function fd(t){return t?(t=ln,t):ln}function od(t,e,l,n,a,u){a=fd(a),n.context===null?n.context=a:n.pendingContext=a,n=il(e),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=sl(t,n,e),l!==null&&(le(l,t,e),Wn(l,t,e))}function rd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ns(t,e){rd(t,e),(t=t.alternate)&&rd(t,e)}function dd(t){if(t.tag===13||t.tag===31){var e=Ol(t,67108864);e!==null&&le(e,t,67108864),ns(t,67108864)}}function md(t){if(t.tag===13||t.tag===31){var e=he();e=Iu(e);var l=Ol(t,e);l!==null&&le(l,t,e),ns(t,e)}}var Gu=!0;function a0(t,e,l,n){var a=T.T;T.T=null;var u=R.p;try{R.p=2,as(t,e,l,n)}finally{R.p=u,T.T=a}}function u0(t,e,l,n){var a=T.T;T.T=null;var u=R.p;try{R.p=8,as(t,e,l,n)}finally{R.p=u,T.T=a}}function as(t,e,l,n){if(Gu){var a=us(n);if(a===null)wi(t,e,n,Bu,l),vd(t,n);else if(i0(a,t,e,l,n))n.stopPropagation();else if(vd(t,n),e&4&&-1<c0.indexOf(t)){for(;a!==null;){var u=Zl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=jl(u.pendingLanes);if(c!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var r=1<<31-ie(c);s.entanglements[1]|=r,c&=~r}Re(u),(it&6)===0&&(yu=ue()+500,ra(0))}}break;case 31:case 13:s=Ol(u,2),s!==null&&le(s,u,2),Su(),ns(u,2)}if(u=us(n),u===null&&wi(t,e,n,Bu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else wi(t,e,n,null,l)}}function us(t){return t=ic(t),cs(t)}var Bu=null;function cs(t){if(Bu=null,t=wl(t),t!==null){var e=A(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=z(e),t!==null)return t;t=null}else if(l===31){if(t=V(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bu=t,null}function hd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zd()){case Ss:return 2;case As:return 8;case ja:case Kd:return 32;case Es:return 268435456;default:return 32}default:return 32}}var is=!1,bl=null,Sl=null,Al=null,ya=new Map,ba=new Map,El=[],c0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vd(t,e){switch(t){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":Al=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Sa(t,e,l,n,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},e!==null&&(e=Zl(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function i0(t,e,l,n,a){switch(e){case"focusin":return bl=Sa(bl,t,e,l,n,a),!0;case"dragenter":return Sl=Sa(Sl,t,e,l,n,a),!0;case"mouseover":return Al=Sa(Al,t,e,l,n,a),!0;case"pointerover":var u=a.pointerId;return ya.set(u,Sa(ya.get(u)||null,t,e,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,ba.set(u,Sa(ba.get(u)||null,t,e,l,n,a)),!0}return!1}function pd(t){var e=wl(t.target);if(e!==null){var l=A(e);if(l!==null){if(e=l.tag,e===13){if(e=z(l),e!==null){t.blockedOn=e,_s(t.priority,function(){md(l)});return}}else if(e===31){if(e=V(l),e!==null){t.blockedOn=e,_s(t.priority,function(){md(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=us(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);cc=n,l.target.dispatchEvent(n),cc=null}else return e=Zl(l),e!==null&&dd(e),t.blockedOn=l,!1;e.shift()}return!0}function gd(t,e,l){Hu(t)&&l.delete(e)}function s0(){is=!1,bl!==null&&Hu(bl)&&(bl=null),Sl!==null&&Hu(Sl)&&(Sl=null),Al!==null&&Hu(Al)&&(Al=null),ya.forEach(gd),ba.forEach(gd)}function Lu(t,e){t.blockedOn===e&&(t.blockedOn=null,is||(is=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,s0)))}var qu=null;function yd(t){qu!==t&&(qu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(cs(n||l)===null)continue;break}var u=Zl(l);u!==null&&(t.splice(e,3),e-=3,ui(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Nn(t){function e(r){return Lu(r,t)}bl!==null&&Lu(bl,t),Sl!==null&&Lu(Sl,t),Al!==null&&Lu(Al,t),ya.forEach(e),ba.forEach(e);for(var l=0;l<El.length;l++){var n=El[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<El.length&&(l=El[0],l.blockedOn===null);)pd(l),l.blockedOn===null&&El.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],c=a[Ft]||null;if(typeof u=="function")c||yd(l);else if(c){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,c=u[Ft]||null)s=c.formAction;else if(cs(a)!==null)continue}else s=c.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),yd(l)}}}function bd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(c){return a=c})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function ss(t){this._internalRoot=t}Yu.prototype.render=ss.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var l=e.current,n=he();od(l,n,t,e,null,null)},Yu.prototype.unmount=ss.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;od(t.current,2,null,t,null,null),Su(),e[Xl]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ns();t={blockedOn:null,target:t,priority:e};for(var l=0;l<El.length&&e!==0&&e<El[l].priority;l++);El.splice(l,0,t),l===0&&pd(t)}};var Sd=x.version;if(Sd!=="19.2.6")throw Error(f(527,Sd,"19.2.6"));R.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=v(e),t=t!==null?Y(t):null,t=t===null?null:t.stateNode,t};var f0={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Dn=Qu.inject(f0),ce=Qu}catch{}}return Ea.createRoot=function(t,e){if(!b(t))throw Error(f(299));var l=!1,n="",a=No,u=_o,c=Do;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=sd(t,1,!1,null,null,l,n,null,a,u,c,bd),t[Xl]=e.current,Xi(t),new ss(e)},Ea.hydrateRoot=function(t,e,l){if(!b(t))throw Error(f(299));var n=!1,a="",u=No,c=_o,s=Do,r=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),e=sd(t,1,!0,e,l??null,n,a,r,u,c,s,bd),e.context=fd(null),l=e.current,n=he(),n=Iu(n),a=il(n),a.callback=null,sl(l,a,n),l=n,e.current.lanes=l,zn(e,l),Re(e),t[Xl]=e.current,Xi(t),new Yu(e)},Ea.version="19.2.6",Ea}var Od;function b0(){if(Od)return rs.exports;Od=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(x){console.error(x)}}return o(),rs.exports=y0(),rs.exports}var S0=b0();function A0({name:o,initial:x}){return i.jsx("nav",{className:"nav",children:i.jsxs("div",{className:"nav-inner",children:[i.jsxs("a",{href:"#top",className:"nav-brand",children:[i.jsx("span",{className:"nav-logo",children:x}),i.jsx("span",{className:"nav-name",children:o})]}),i.jsxs("div",{className:"nav-links",children:[i.jsx("a",{href:"#stack",className:"nav-link",children:"기술 스택"}),i.jsx("a",{href:"#activity",className:"nav-link",children:"활동"}),i.jsx("a",{href:"#achievements",className:"nav-link",children:"수상 · 경력"}),i.jsx("a",{href:"#projects",className:"nav-link",children:"프로젝트"}),i.jsx("a",{href:"#contact",className:"nav-cta",children:"연락하기"})]})]})})}function Cd({size:o=18,className:x}){return i.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"currentColor",className:x,children:i.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})}function Ud({size:o=18,className:x}){return i.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"currentColor",className:x,children:i.jsx("path",{d:"M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"})})}function Vu({size:o=15,className:x}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.2,className:x,children:[i.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),i.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})}function E0({size:o=15,className:x}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.2,className:x,children:[i.jsx("path",{d:"M15 3h6v6"}),i.jsx("path",{d:"M10 14 21 3"}),i.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]})}function x0({size:o=24,className:x}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:x,children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"m2 6 10 7L22 6"})]})}function Gd({size:o=16,className:x}){return i.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round",className:x,children:i.jsx("path",{d:"m6 9 6 6 6-6"})})}function T0({size:o=22,className:x}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round",className:x,children:[i.jsx("path",{d:"M12 19V5"}),i.jsx("path",{d:"m5 12 7-7 7 7"})]})}function j0({size:o=16,className:x}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:x,children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]})}function M0({size:o=16,className:x}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:x,children:[i.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),i.jsx("circle",{cx:"3.6",cy:"6",r:"1.1",fill:"currentColor",stroke:"none"}),i.jsx("circle",{cx:"3.6",cy:"12",r:"1.1",fill:"currentColor",stroke:"none"}),i.jsx("circle",{cx:"3.6",cy:"18",r:"1.1",fill:"currentColor",stroke:"none"})]})}function N0({name:o,tagline:x,login:D,githubUrl:f,linkedinUrl:b,avatarUrl:A}){return i.jsxs("header",{id:"top",className:"hero",children:[i.jsx("div",{className:"hero-glow","aria-hidden":"true"}),i.jsxs("div",{className:"hero-inner",children:[i.jsxs("div",{className:"hero-copy",children:[i.jsxs("div",{className:"hero-badge",children:[i.jsx("span",{className:"hero-badge-dot"}),"OPEN TO WORK · 채용 제안 환영"]}),i.jsxs("h1",{className:"hero-title",children:["안녕하세요,",i.jsx("br",{}),i.jsx("span",{className:"hero-title-em",children:o})," 입니다."]}),i.jsxs("p",{className:"hero-lead",children:["전북대학교 ",i.jsx("strong",{children:"IT지능정보공학과"}),"에 재학 중입니다. 풀스택 웹 개발과 AI 활용 기술에 관심을 가지고 다양한 프로젝트를 진행하고 있습니다."]}),i.jsx("p",{className:"hero-lead hero-lead-sub",children:"LLM, RAG, MCP(Model Context Protocol) 기반 AI 서비스 개발 경험을 보유하고 있으며, 프론트엔드부터 백엔드, AI 시스템 연동까지 전반적인 개발 역량을 갖추고 있습니다."}),i.jsxs("div",{className:"hero-actions",children:[i.jsxs("a",{className:"btn btn-dark",href:f,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Cd,{size:18}),"GitHub 프로필"]}),b&&i.jsxs("a",{className:"btn btn-linkedin",href:b,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Ud,{size:18}),"LinkedIn 프로필"]}),i.jsx("a",{className:"btn btn-light",href:"#projects",children:"프로젝트 보기 →"})]})]}),i.jsxs("div",{className:"hero-card-wrap",children:[i.jsx("div",{className:"hero-card-glow","aria-hidden":"true"}),i.jsxs("div",{className:"hero-card",children:[i.jsxs("div",{className:"hero-card-bar",children:[i.jsx("span",{className:"dot dot-red"}),i.jsx("span",{className:"dot dot-yellow"}),i.jsx("span",{className:"dot dot-green"}),i.jsx("span",{className:"hero-card-file",children:"profile.tsx"})]}),i.jsx("div",{className:"hero-card-avatar",children:i.jsx("img",{src:A,alt:o})}),i.jsxs("div",{className:"hero-code",children:[i.jsxs("div",{children:[i.jsx("span",{className:"t-kw",children:"const"})," ",i.jsx("span",{className:"t-var",children:"dev"})," ",i.jsx("span",{className:"t-op",children:"="})," ","{"]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"name"}),": ",i.jsxs("span",{className:"t-str",children:['"',o,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"role"}),": ",i.jsxs("span",{className:"t-str",children:['"',x,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"github"}),": ",i.jsxs("span",{className:"t-str",children:['"@',D,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"status"}),": ",i.jsx("span",{className:"t-str",children:'"available"'})]}),i.jsx("div",{children:"}"})]})]})]})]})]})}const wt={githubUsername:"05solar",displayName:"leeosolha",tagline:"풀스택 개발자",email:"lotus05f@gmail.com",linkedinUrl:"https://www.linkedin.com/in/solha-lee-7a9127409/",projectCount:11,pinnedRepos:["checkmiteV1","jbig","edu-msa","GO","MSA-restaurant","By-Tomorrow","GLML","GMG","RAG-agent","MCP-shopbot","OV-clonecoding","Auto-PPT"],excludedRepos:["my-letter-site","PF","p2","portfolio","GMG","edu-msa"],descriptions:{checkmiteV1:"YOLO로 소형개체(천적응애)를 자동 분류·탐지하여 개체 수·밀도·활력도·증식률을 측정합니다.",jbig:"전북 외국인 근로자·유학생을 대상으로 공식문서를 기반으로 체류·행정과 노동 문제에 대한 챗봇 서비스와 함께, 서류를 넣으면 불법 요소 탐색과 서류 설명을 제공합니다.","edu-msa":"교육청 직원이 단기 교육에서 만든 프로그램을 내부 저장소에 올리면, 표준 규격만 지키면 자동으로 하나의 MSA 서비스로 띄워 바로 쓸 수 있게 하는 사내 포털입니다. React·Spring Boot 3·MariaDB·Kubernetes로 구성한 단독 프로젝트입니다.",GO:"브라우저에서 바로 두는 바둑·오목. 서버 없이 웹워커에서 MCTS·알파베타 AI가 3단계 난이도로 상대합니다.","MSA-restaurant":"식당 서비스를 마이크로서비스로 구현한 프로젝트. JWT 게이트웨이와 Auth·Menu·Order·Review 서비스를 Docker Compose 한 번으로 띄웁니다.","By-Tomorrow":"시험까지 남은 시간과 강의자료를 AI가 분석해 실현 가능한 벼락치기 커리큘럼을 짜 주는 서비스. 로그인 없이 8자리 코드로 접근합니다.",GLML:"조건(지역·동행·시간·메뉴)을 분석해 맛집을 추천하는 AI 에이전트. 판단→도구 호출→검토의 ReAct 흐름을 화면에 그대로 시각화합니다.",GMG:"'비선호'를 먼저 걸러 모두가 무난한 시간·장소·메뉴를 찾아 주는 모임 약속 서비스. 카카오맵으로 장소를 함께 고릅니다.","RAG-agent":"PDF를 올려 내용을 묻는 RAG 챗봇에 졸업요건·도서추천·시설안내 에이전트를 더한 프로젝트. 답변 LLM과 평가 LLM 결과를 나란히 보여줍니다.","MCP-shopbot":"상품 DB를 MCP로 연동한 한국어 쇼핑 도우미. Tool Calling으로 상품 검색·상세 조회·재고 확인을 처리합니다.","OV-clonecoding":"올리브영 메인을 React로 구현한 클론 코딩. 카테고리 드로어·자동 캐러셀·상품 라우팅·반응형까지 커머스 UI 흐름을 재현했습니다.","Auto-PPT":"문서를 넣으면 편집 가능한 PowerPoint(.pptx)를 자동 생성하는 로컬 웹앱. API 키 없이 로그인된 Claude Code·Codex CLI를 웹에서 구동합니다."},focus:{checkmiteV1:[["CV","YOLO Object Detection"]],jbig:[["RAG","공식문서 검색"],["LLM","다국어 챗봇"],["OCR","서류 분석"]],GO:[["Board Game","바둑 · 오목"],["AI","MCTS · Alpha-Beta"]],"MSA-restaurant":[["MSA","Spring Cloud Gateway"],["Auth","JWT"],["Infra","Docker Compose"]],"By-Tomorrow":[["LLM","Gemini"],["AI","문서 분석"]],GLML:[["AI Agent","ReAct"],["LLM","Tool Calling"]],GMG:[["추천","비선호 필터"],["Map","Kakao API"]],"RAG-agent":[["RAG","PDF QA"],["AI Agent","DB 상담"]],"MCP-shopbot":[["MCP","Tool Calling"],["LLM","쇼핑 도우미"]],"OV-clonecoding":[["Frontend","React"],["UI","반응형"]],"Auto-PPT":[["LLM","슬라이드 생성"],["CLI","Claude Code · Codex"]],"edu-msa":[["MSA","서비스 자동 배포"],["Infra","Kubernetes"],["Auth","JWT"]]}},vs=["#C0392B","#C2410C","#A16207","#15803D","#0F766E","#2563EB","#4F46E5","#8E44AD","#C2185B","#5C6F2B","#3B4953","#FF84BA","#FF6B35","#744577","#A98B76","#3291B6","#B77466"],_0=(()=>{const o={};let x=0;for(const D of Object.values(wt.focus))for(const[f]of D)f in o||(o[f]=vs[x%vs.length],x+=1);return o})();function Xu(o){return _0[o]??vs[0]}function Bd(o){const x=o.replace("#",""),D=v=>v<=.03928?v/12.92:((v+.055)/1.055)**2.4,f=D(parseInt(x.slice(0,2),16)/255),b=D(parseInt(x.slice(2,4),16)/255),A=D(parseInt(x.slice(4,6),16)/255),z=.2126*f+.7152*b+.0722*A,V=1.05/(z+.05),_=(z+.05)/.05;return V>=_?"#fff":"#1f2937"}const D0=[{title:"프론트엔드",color:"#4f46e5",items:["React","TypeScript","Next.js","Tailwind CSS"]},{title:"백엔드",color:"#2563eb",items:["Node.js","NestJS","Python","Spring"]},{title:"데이터베이스",color:"#0ea5e9",items:["PostgreSQL","MongoDB","Redis"]},{title:"DevOps · 인프라",color:"#6366f1",items:["Docker","Kubernetes","AWS","GitHub Actions"]}];function O0({langStats:o,langReady:x,showSkeleton:D,showError:f}){return i.jsxs("section",{id:"stack",className:"section stack",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"TECH STACK"}),i.jsx("h2",{className:"section-title",children:"기술 스택"}),i.jsx("p",{className:"section-desc",children:"실무에서 사용하는 도구들과, GitHub 저장소에서 집계한 실제 언어 사용 비율입니다."})]}),i.jsxs("div",{className:"stack-grid",children:[i.jsx("div",{className:"stack-cards","data-reveal":!0,style:{transitionDelay:".05s"},children:D0.map(b=>i.jsxs("div",{className:"stack-card",children:[i.jsxs("div",{className:"stack-card-title",children:[i.jsx("span",{className:"stack-card-mark",style:{background:b.color}}),b.title]}),i.jsx("div",{className:"stack-chips",children:b.items.map(A=>i.jsx("span",{className:"stack-chip",children:A},A))})]},b.title))}),i.jsxs("div",{className:"lang-panel","data-reveal":!0,style:{transitionDelay:".1s"},children:[i.jsxs("div",{className:"lang-panel-head",children:[i.jsx("span",{className:"lang-panel-title",children:"언어 사용 비율"}),i.jsx("span",{className:"lang-panel-src",children:"from GitHub"})]}),x&&i.jsxs("div",{children:[i.jsx("div",{className:"lang-bar",children:o.map(b=>i.jsx("div",{className:"lang-bar-seg",style:{width:b.width,background:b.color}},b.name))}),i.jsx("div",{className:"lang-list",children:o.map(b=>i.jsxs("div",{className:"lang-row",children:[i.jsx("span",{className:"lang-dot",style:{background:b.color}}),i.jsx("span",{className:"lang-name",children:b.name}),i.jsx("span",{className:"lang-pct",children:b.pctText})]},b.name))})]}),D&&i.jsxs("div",{className:"lang-skeleton",children:[i.jsx("div",{className:"sk sk-dark"}),i.jsx("div",{className:"sk sk-dark",style:{width:"70%"}}),i.jsx("div",{className:"sk sk-dark",style:{width:"55%"}})]}),f&&i.jsx("p",{className:"lang-empty",children:"언어 데이터를 불러오지 못했습니다."})]})]})]})}const zd="flip",z0=650,R0="cubic-bezier(0.4, 0, 0.2, 1)";function C0(){const o=bt.useRef(null),x=bt.useCallback(()=>{const D=o.current;if(!D)return;const f=Array.from(D.children),b=f.map(A=>A.getBoundingClientRect());requestAnimationFrame(()=>{f.forEach((A,z)=>{const V=b[z];if(!V)return;const _=A.getBoundingClientRect(),v=V.left-_.left,Y=V.top-_.top,U=Math.abs(V.width-_.width)>.5;if(!v&&!Y&&!U)return;A.getAnimations().filter(nt=>nt.id===zd).forEach(nt=>nt.cancel());const q={transform:`translate(${v}px, ${Y}px)`},st={transform:"none"};U&&(q.width=`${V.width}px`,st.width=`${_.width}px`),A.animate([q,st],{id:zd,duration:z0,easing:R0})})})},[]);return{listRef:o,captureFlip:x}}function U0(o,x=220){const D=String(o||"").replace(/\r/g,"").split(`
`),f=[];let b=!1;for(const z of D){const V=z.trim();if(/^```/.test(V)){b=!b;continue}if(b)continue;if(!V){if(f.length)break;continue}if(/^#{1,6}\s/.test(V)||/^[-=*_]{3,}$/.test(V))continue;const _=V.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/<[^>]+>/g,"").trim();_&&f.push(_)}const A=f.join(" ").replace(/<!--[\s\S]*?-->/g," ").replace(/`([^`]+)`/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^\s*[-*+]\s+/g,"").replace(/[*_>#`]/g,"").replace(/\s+/g," ").trim();return A.length<=x?A:`${A.slice(0,x).replace(/\s+\S*$/,"").trimEnd()}…`}function ps(o,x){const D=String(o||"").trim();if(!D)return"";if(/^https?:\/\//i.test(D))return D;if(D.startsWith("//"))return`https:${D}`;if(!x)return D;try{return new URL(D,x).href}catch{return D}}function G0(o,x=""){const D=String(o||""),f=[];let b;const A=/!\[[^\]]*\]\(\s*([^)\s]+)[^)]*\)/g;for(;b=A.exec(D);)f.push({idx:b.index,src:b[1]});const z=/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;for(;b=z.exec(D);)f.push({idx:b.index,src:b[1]});if(!f.length)return null;f.sort((v,Y)=>v.idx-Y.idx);const V=v=>/shields\.io|img\.shields|\bbadge\b|flat-square|circleci|codecov|coveralls|travis|\/workflows\/|actions\/workflow|badgen|forthebadge/i.test(v),_=f.find(v=>!V(v.src));return _?ps(_.src,x):null}function xa(o,x=""){const D=String(o),f=/(\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\))|(!\[[^\]]*\]\([^)]*\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))|(\*[^*]+\*)|(_[^_]+_)/g,b=[];let A=0,z=0,V;for(;V=f.exec(D);){V.index>A&&b.push(D.slice(A,V.index));const _=V[0];if(_.startsWith("[![")){const v=/\[!\[([^\]]*)\]\(([^)]*)\)\]\(([^)]*)\)/.exec(_);v&&b.push(i.jsx("a",{href:v[3],target:"_blank",rel:"noopener noreferrer",children:i.jsx("img",{className:"md-img",src:ps(v[2],x),alt:v[1],loading:"lazy"})},z++))}else if(_.startsWith("![")){const v=/!\[([^\]]*)\]\(([^)]*)\)/.exec(_);v&&b.push(i.jsx("img",{className:"md-img",src:ps(v[2],x),alt:v[1],loading:"lazy"},z++))}else if(_[0]==="`")b.push(i.jsx("code",{className:"md-code",children:_.slice(1,-1)},z++));else if(_.slice(0,2)==="**")b.push(i.jsx("strong",{children:_.slice(2,-2)},z++));else if(_[0]==="["){const v=/\[([^\]]+)\]\(([^)]+)\)/.exec(_);v&&b.push(i.jsx("a",{href:v[2],target:"_blank",rel:"noopener noreferrer",children:v[1]},z++))}else b.push(i.jsx("em",{children:_.slice(1,-1)},z++));A=f.lastIndex}return A<D.length&&b.push(D.slice(A)),b}function Hd(o,x=""){const f=String(o||"").replace(/<!--[\s\S]*?-->/g,"").replace(/<img\b[^>]*>/gi,v=>{const Y=(/\bsrc\s*=\s*["']([^"']+)["']/i.exec(v)||[])[1]||"",U=(/\balt\s*=\s*["']([^"']*)["']/i.exec(v)||[])[1]||"";return Y?`

![${U}](${Y})

`:""}).replace(/<picture\b[^>]*>|<\/picture>|<source\b[^>]*>/gi,"").replace(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(v,Y,U)=>{const q=String(U).replace(/<[^>]+>/g,"").trim();return q?`[${q}](${Y})`:""}).replace(/<\/?[a-z][^>]*>/gi,"").split(/\r?\n/),b=[];let A=0,z=0;const V=v=>/\|/.test(v)&&/^[\s|:\-]+$/.test(v);for(;A<f.length;){const v=f[A];if(/^\s*```/.test(v)){const q=[];for(A++;A<f.length&&!/^\s*```/.test(f[A]);)q.push(f[A]),A++;A++,b.push(i.jsx("pre",{className:"md-pre",children:q.join(`
`)},z++));continue}const Y=/^(#{1,6})\s+(.*)$/.exec(v);if(Y){const q=Y[1].length,st=q<=2?"h3":"h4";b.push(i.jsx(st,{className:`md-h md-h${q}`,children:xa(Y[2],x)},z++)),A++;continue}if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(v)){b.push(i.jsx("hr",{className:"md-hr"},z++)),A++;continue}if(/^\s*[-*+]\s+/.test(v)){const q=[];for(;A<f.length&&/^\s*[-*+]\s+/.test(f[A]);)q.push(f[A].replace(/^\s*[-*+]\s+/,"")),A++;b.push(i.jsx("ul",{className:"md-ul",children:q.map((st,nt)=>i.jsx("li",{children:xa(st,x)},nt))},z++));continue}if(/^\s*\d+\.\s+/.test(v)){const q=[];for(;A<f.length&&/^\s*\d+\.\s+/.test(f[A]);)q.push(f[A].replace(/^\s*\d+\.\s+/,"")),A++;b.push(i.jsx("ol",{className:"md-ol",children:q.map((st,nt)=>i.jsx("li",{children:xa(st,x)},nt))},z++));continue}if(/^\s*>/.test(v)){const q=[];for(;A<f.length&&/^\s*>/.test(f[A]);)q.push(f[A].replace(/^\s*>\s?/,"")),A++;b.push(i.jsx("blockquote",{className:"md-quote",children:xa(q.join(" "),x)},z++));continue}if(/^\s*$/.test(v)||V(v)){A++;continue}const U=[v];for(A++;A<f.length&&!/^\s*$/.test(f[A])&&!/^\s*#{1,6}\s/.test(f[A])&&!/^\s*```/.test(f[A])&&!/^\s*[-*+]\s+/.test(f[A])&&!/^\s*\d+\.\s+/.test(f[A])&&!/^\s*>/.test(f[A])&&!V(f[A]);)U.push(f[A]),A++;b.push(i.jsx("p",{className:"md-p",children:xa(U.join(" "),x)},z++))}const _=b.slice(0,70);return b.length>70&&_.push(i.jsx("p",{className:"md-more",children:"… 전체 내용은 GitHub에서 확인하세요."},"more")),i.jsx("div",{className:"md",children:_})}const B0={CV:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),RAG:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m21 21-4.3-4.3"})]}),LLM:i.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),OCR:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),i.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),i.jsx("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),i.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),i.jsx("path",{d:"M7 9h8"}),i.jsx("path",{d:"M7 13h6"})]}),"Board Game":i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"1"}),i.jsx("path",{d:"M3 9h18"}),i.jsx("path",{d:"M3 15h18"}),i.jsx("path",{d:"M9 3v18"}),i.jsx("path",{d:"M15 3v18"})]}),AI:i.jsx("path",{d:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"}),"AI Agent":i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"4",y:"8",width:"16",height:"12",rx:"2"}),i.jsx("path",{d:"M12 8V5"}),i.jsx("circle",{cx:"12",cy:"4",r:"1"}),i.jsx("path",{d:"M9 13h.01"}),i.jsx("path",{d:"M15 13h.01"}),i.jsx("path",{d:"M9 17h6"})]}),MSA:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),i.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),i.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),i.jsx("path",{d:"M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"}),i.jsx("path",{d:"M12 13v2"})]}),Auth:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"4",y:"11",width:"16",height:"10",rx:"2"}),i.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),Infra:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"7",rx:"1"}),i.jsx("rect",{x:"3",y:"13",width:"18",height:"7",rx:"1"}),i.jsx("path",{d:"M7 7.5h.01"}),i.jsx("path",{d:"M7 16.5h.01"})]}),추천:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M7 10v11"}),i.jsx("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]}),Map:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),i.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),MCP:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M9 2v6"}),i.jsx("path",{d:"M15 2v6"}),i.jsx("path",{d:"M6 8h12v3a6 6 0 0 1-12 0z"}),i.jsx("path",{d:"M12 17v5"})]}),Frontend:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"M2 9h20"}),i.jsx("path",{d:"M6 6.5h.01"}),i.jsx("path",{d:"M9 6.5h.01"})]}),UI:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),i.jsx("path",{d:"M3 9h18"}),i.jsx("path",{d:"M9 21V9"})]}),CLI:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),i.jsx("path",{d:"m7 9 3 3-3 3"}),i.jsx("path",{d:"M13 15h4"})]})},H0=i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 9h16"}),i.jsx("path",{d:"M4 15h16"}),i.jsx("path",{d:"M10 3 8 21"}),i.jsx("path",{d:"M16 3l-2 18"})]});function Ld({field:o,size:x=12}){return i.jsx("svg",{className:"repo-focus-ico",width:x,height:x,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:B0[o]??H0})}function L0({repo:o,open:x,onToggle:D}){const f=bt.useRef(null),[b,A]=bt.useState(!1);bt.useEffect(()=>A(!1),[o.image]),bt.useEffect(()=>{if(!x)return;const _=f.current;if(!_)return;const v=requestAnimationFrame(()=>{let Y=0,U=_;for(;U;)Y+=U.offsetTop,U=U.offsetParent;const q=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||66;window.scrollTo({top:Math.max(0,Y-q-16),behavior:"smooth"})});return()=>cancelAnimationFrame(v)},[x]);const z=_=>_.stopPropagation(),V=_=>{(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),D())};return i.jsxs("article",{ref:f,className:`repo${x?" is-open":""}`,role:"button",tabIndex:0,"aria-expanded":x,onClick:D,onKeyDown:V,children:[i.jsx("div",{className:"repo-accent"}),i.jsxs("div",{className:"repo-body",children:[o.image&&!b&&i.jsx("div",{className:"repo-cover",children:i.jsx("img",{src:o.image,alt:`${o.name} 미리보기`,loading:"lazy",onError:()=>A(!0)})}),i.jsxs("div",{className:"repo-top",children:[o.url?i.jsxs("a",{className:"repo-name",href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:z,children:[i.jsx(Vu,{size:19,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}):i.jsxs("span",{className:"repo-name",children:[i.jsx(Vu,{size:19,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}),i.jsxs("div",{className:"repo-stats",children:[i.jsxs("span",{className:"repo-stat",children:[i.jsx("span",{className:"repo-lang-dot",style:{background:o.langColor}}),o.language]}),i.jsxs("span",{className:"repo-stat",children:["★ ",o.stars]}),i.jsxs("span",{className:"repo-stat",children:["⑂ ",o.forks]})]})]}),i.jsx("div",{className:"repo-eyebrow",children:"프로젝트 소개"}),i.jsx("p",{className:"repo-desc",children:o.preview}),o.focus.length>0&&i.jsx("div",{className:"repo-focus",children:o.focus.map(([_,v])=>i.jsxs("span",{className:"repo-focus-badge",children:[i.jsxs("span",{className:"repo-focus-key",children:[i.jsx(Ld,{field:_}),_]}),i.jsx("span",{className:"repo-focus-val",style:{background:Xu(_),color:Bd(Xu(_))},children:v})]},`${_}-${v}`))}),o.stack.length>0&&i.jsxs("div",{className:"repo-stack-section",children:[i.jsx("div",{className:"repo-eyebrow",children:"기술 스택"}),i.jsx("div",{className:"repo-stack",children:o.stack.map(_=>i.jsx("span",{className:"repo-stack-chip",children:_},_))})]}),i.jsxs("div",{className:"repo-actions",children:[i.jsxs("span",{className:"repo-toggle",children:[i.jsx(Gd,{size:16,className:"repo-chevron"}),x?"README 접기":"README 자세히 보기"]}),o.demoUrl&&i.jsxs("a",{className:"btn btn-outline",href:o.demoUrl,target:"_blank",rel:"noopener noreferrer",onClick:z,children:[i.jsx(E0,{size:15,className:"icon-green"}),"데모 사이트"]}),o.url&&i.jsx("a",{className:"btn btn-soft",href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:z,children:"깃허브 바로가기 →"}),i.jsx("span",{className:"repo-updated",children:o.updatedText})]}),i.jsx("div",{className:"repo-readme-wrap",onClick:z,children:i.jsx("div",{className:"repo-readme-inner",children:i.jsxs("div",{className:"repo-readme",children:[i.jsx("div",{className:"repo-eyebrow",children:"README · 코드 설명"}),o.readmeText.trim()?i.jsx("div",{className:"readme-box",children:Hd(o.readmeText,o.readmeBase)}):i.jsxs("p",{className:"readme-error",children:["README 내용을 표시할 수 없습니다."," ",i.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:z,children:"GitHub에서 보기 →"})]})]})})})]})]})}function q0({repo:o,open:x,onToggle:D}){const f=b=>b.stopPropagation();return i.jsxs("div",{className:`repo-row${x?" is-open":""}`,children:[i.jsxs("div",{className:"repo-row-head",children:[o.url?i.jsxs("a",{className:"repo-row-name",href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:f,children:[i.jsx(Vu,{size:18,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}):i.jsxs("span",{className:"repo-row-name",children:[i.jsx(Vu,{size:18,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}),o.focus.length>0&&i.jsx("div",{className:"repo-row-focus",children:o.focus.map(([b,A])=>i.jsxs("span",{className:"repo-focus-badge",children:[i.jsxs("span",{className:"repo-focus-key",children:[i.jsx(Ld,{field:b}),b]}),i.jsx("span",{className:"repo-focus-val",style:{background:Xu(b),color:Bd(Xu(b))},children:A})]},`${b}-${A}`))}),i.jsxs("button",{type:"button",className:"repo-row-toggle",onClick:D,"aria-expanded":x,children:[i.jsx(Gd,{size:16,className:"repo-chevron"}),x?"README 접기":"README 자세히 보기"]})]}),i.jsx("div",{className:"repo-readme-wrap",onClick:f,children:i.jsx("div",{className:"repo-readme-inner",children:i.jsxs("div",{className:"repo-readme",children:[i.jsx("div",{className:"repo-eyebrow",children:"README · 코드 설명"}),o.readmeText.trim()?i.jsx("div",{className:"readme-box",children:Hd(o.readmeText,o.readmeBase)}):i.jsxs("p",{className:"readme-error",children:["README 내용을 표시할 수 없습니다."," ",i.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:f,children:"GitHub에서 보기 →"})]})]})})})]})}function Y0({topRepos:o,githubUrl:x,showSkeleton:D,showError:f,showEmpty:b,readmeErrored:A,onRetry:z}){const{listRef:V,captureFlip:_}=C0(),[v,Y]=bt.useState("card"),[U,q]=bt.useState(null),st=G=>{_(),q(J=>J===G?null:G)},nt=G=>{G!==v&&(q(null),Y(G))};return i.jsx("section",{id:"projects",className:"section-full projects",children:i.jsxs("div",{className:"projects-inner",children:[i.jsxs("div",{className:"projects-head","data-reveal":!0,children:[i.jsxs("div",{children:[i.jsx("span",{className:"eyebrow",children:"PROJECTS"}),i.jsx("h2",{className:"section-title",children:"포트폴리오"}),i.jsx("p",{className:"section-desc",children:"README가 등록된 저장소만 모았습니다. 카드를 누르면 펼쳐지며 전체 README와 코드 설명을 볼 수 있어요."})]}),i.jsx("a",{className:"projects-all",href:x,target:"_blank",rel:"noopener noreferrer",children:"전체 저장소 →"})]}),o.length>0&&i.jsx("div",{className:"view-toggle-bar","data-reveal":!0,children:i.jsxs("div",{className:"view-toggle",role:"tablist","aria-label":"프로젝트 보기 방식",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":v==="card",className:`view-toggle-btn${v==="card"?" is-active":""}`,onClick:()=>nt("card"),children:[i.jsx(j0,{size:15}),"카드형"]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":v==="list",className:`view-toggle-btn${v==="list"?" is-active":""}`,onClick:()=>nt("list"),children:[i.jsx(M0,{size:15}),"리스트형"]})]})}),o.length>0&&(v==="card"?i.jsx("div",{className:"repo-list",ref:V,children:o.map(G=>i.jsx(L0,{repo:G,open:U===G.id,onToggle:()=>st(G.id)},G.id))}):i.jsx("div",{className:"repo-rows",ref:V,children:o.map(G=>i.jsx(q0,{repo:G,open:U===G.id,onToggle:()=>st(G.id)},G.id))})),D&&i.jsx("div",{className:"repo-skeleton-grid",children:Array.from({length:6}).map((G,J)=>i.jsx("div",{className:"sk sk-light repo-skeleton-card"},J))}),f&&i.jsxs("div",{className:"repo-error",children:[i.jsx("p",{children:"GitHub 저장소를 불러오지 못했습니다. (API 호출 한도일 수 있어요)"}),i.jsx("button",{className:"btn btn-primary",onClick:z,children:"다시 시도"})]}),b&&i.jsxs("div",{className:"repo-error",children:[i.jsx("p",{children:A?"README를 불러오지 못했습니다. (GitHub API 호출 한도일 수 있어요)":"표시할 README가 있는 저장소를 찾지 못했습니다."}),A&&i.jsx("button",{className:"btn btn-primary",onClick:z,children:"다시 시도"})]})]})})}const Q0=["#eef1f7","#9db0ef","#5f79e6","#3247cf","#1c2a91"],V0=14;function X0({weeks:o}){const x=[];let D=-1;return o.forEach((f,b)=>{const A=f.find(z=>z);if(A){const z=new Date(`${A.date}T00:00:00`).getMonth();z!==D&&(x.push({ci:b,mo:z}),D=z)}}),i.jsxs("div",{className:"heatmap",children:[i.jsx("div",{className:"heatmap-months",children:x.map((f,b)=>i.jsxs("span",{className:"heatmap-month",style:{left:f.ci*V0},children:[f.mo+1,"월"]},b))}),i.jsx("div",{className:"heatmap-grid",children:o.map((f,b)=>i.jsx("div",{className:"heatmap-week",children:f.map((A,z)=>i.jsx("div",{className:"heatmap-cell",title:A?`${A.date}: ${A.count}`:"",style:{background:A?Q0[A.level]:"transparent"}},z))},b))})]})}function w0({statContrib:o,weeks:x,contribReady:D,showSkeleton:f,showError:b}){return i.jsxs("section",{id:"activity",className:"section activity",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"ACTIVITY"}),i.jsx("h2",{className:"section-title",children:"GitHub 활동"})]}),i.jsxs("div",{className:"activity-card","data-reveal":!0,style:{transitionDelay:".05s"},children:[i.jsxs("div",{className:"activity-stat",children:[i.jsx("span",{className:"activity-stat-num",children:o}),i.jsx("span",{className:"activity-stat-label",children:"최근 1년 기여"})]}),D&&i.jsx("div",{className:"activity-scroll",children:i.jsx(X0,{weeks:x})}),f&&i.jsx("div",{className:"sk sk-light activity-skeleton"}),b&&i.jsx("p",{className:"activity-empty",children:"기여 그래프를 불러오지 못했습니다."}),i.jsxs("div",{className:"heatmap-legend",children:[i.jsx("span",{children:"Less"}),i.jsx("span",{className:"legend-swatch legend-0"}),i.jsx("span",{className:"legend-swatch legend-1"}),i.jsx("span",{className:"legend-swatch legend-2"}),i.jsx("span",{className:"legend-swatch legend-3"}),i.jsx("span",{className:"legend-swatch legend-4"}),i.jsx("span",{children:"More"})]})]})]})}const Z0=[{title:"2026 오픈소스 SW 해커톤",medal:"🥇",prize:"대상",honor:"총장상",organizer:"전북대학교 SW중심사업단"},{title:"2026 SW 산학실전캡스톤",medal:"🥇",prize:"대상",honor:"SW사업단장상",organizer:"전북대학교 SW중심사업단"},{title:"2026 호남권 SW중심대학사업 LLM 해커톤",medal:"🥈",prize:"우수상",organizer:"조선대학교 SW중심사업단"},{title:"2025 동계 한동대 빅데이터 캠프",medal:"🥈",prize:"우수상",organizer:"한동대 빅데이터혁신융합대학",period:"2026.01.13 ~ 2026.01.16"},{title:"2025 전북대 AI 경진대회",medal:"🥉",prize:"동상",organizer:"전북대학교 SW중심사업단"},{title:"2024 하계 한동대 빅데이터 캠프",medal:"🥈",prize:"우수상",organizer:"한동대 빅데이터혁신융합대학",period:"2024.07.16 ~ 2024.07.19"}];function K0(){return i.jsxs("section",{id:"achievements",className:"section achievements",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"ACHIEVEMENTS & EXPERIENCE"}),i.jsx("h2",{className:"section-title",children:"수상 내역 · 경력 사항"})]}),i.jsxs("div",{className:"achievements-stack",children:[i.jsxs("div",{className:"achievements-panel","data-reveal":!0,children:[i.jsx("div",{className:"achievements-panel-head",children:i.jsx("h3",{className:"achievements-heading",children:"수상 내역"})}),i.jsx("ul",{className:"achievements-list",children:Z0.map(o=>i.jsxs("li",{className:"achievement-item",children:[i.jsxs("div",{className:"achievement-content",children:[i.jsx("h4",{children:o.title}),i.jsx("p",{className:"achievement-meta",children:o.organizer})]}),i.jsxs("div",{className:"achievement-details",children:[i.jsxs("span",{className:"achievement-prize",children:[o.prize," ",i.jsx("span",{className:"achievement-medal","aria-hidden":"true",children:o.medal}),"honor"in o&&i.jsxs("span",{className:"achievement-honor",children:[" · ",o.honor]})]}),"period"in o&&i.jsx("span",{className:"achievement-period",children:o.period})]})]},o.title))})]}),i.jsxs("div",{className:"achievements-panel","data-reveal":!0,children:[i.jsx("div",{className:"achievements-panel-head",children:i.jsx("h3",{className:"achievements-heading",children:"경력 사항"})}),i.jsxs("div",{className:"experience-item",children:[i.jsxs("div",{className:"experience-content",children:[i.jsx("h4",{children:"(주)헤드아이티"}),i.jsx("p",{className:"achievement-description",children:"GPU 서버 기반 RAG 서비스 환경 구축"})]}),i.jsxs("div",{className:"achievement-details",children:[i.jsx("span",{className:"achievement-prize",children:"인턴"}),i.jsx("span",{className:"achievement-period",children:"2026.07 ~ 2026.08"})]})]})]})]})]})}function k0({login:o,email:x,githubUrl:D,linkedinUrl:f}){const b=f.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");return i.jsx("section",{id:"contact",className:"section-full contact",children:i.jsxs("div",{className:"contact-inner",children:[i.jsxs("div",{className:"contact-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow eyebrow-light",children:"CONTACT"}),i.jsx("h2",{className:"contact-title",children:"함께 만들어요"}),i.jsx("p",{className:"contact-desc",children:"새로운 기회나 협업 제안은 언제든 환영합니다. 아래 채널로 편하게 연락 주세요."})]}),i.jsxs("div",{className:"contact-cards","data-reveal":!0,style:{transitionDelay:".05s"},children:[i.jsxs("a",{className:"contact-card",href:D,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Cd,{size:24}),i.jsx("span",{className:"contact-card-label",children:"GitHub"}),i.jsxs("span",{className:"contact-card-val",children:["@",o]})]}),i.jsxs("a",{className:"contact-card",href:`mailto:${x}`,children:[i.jsx(x0,{size:24}),i.jsx("span",{className:"contact-card-label",children:"Email"}),i.jsx("span",{className:"contact-card-val",children:x})]}),i.jsxs("a",{className:"contact-card",href:f,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Ud,{size:24}),i.jsx("span",{className:"contact-card-label",children:"LinkedIn"}),i.jsx("span",{className:"contact-card-val",children:b})]})]})]})})}function J0({name:o,login:x}){return i.jsxs("footer",{className:"footer",children:["© 2026 ",o," · Built with live GitHub data · @",x]})}function W0(){const[o,x]=bt.useState(!1);bt.useEffect(()=>{const f=()=>x(window.scrollY>400);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const D=()=>window.scrollTo({top:0,behavior:"smooth"});return i.jsx("button",{type:"button",className:`scroll-top${o?" is-visible":""}`,onClick:D,"aria-label":"맨 위로 이동",title:"맨 위로",children:i.jsx(T0,{size:22})})}function F0(o){const[x,D]=bt.useState(null),[f,b]=bt.useState([]),[A,z]=bt.useState(!1),[V,_]=bt.useState(null),[v,Y]=bt.useState(!1),[U,q]=bt.useState(0),st=bt.useCallback(()=>q(nt=>nt+1),[]);return bt.useEffect(()=>{const nt=o.trim();if(!nt)return;let G=!1;return z(!1),Y(!1),fetch(`https://api.github.com/users/${nt}`).then(J=>J.ok?J.json():Promise.reject(J.status)).then(J=>{G||D(J)}).catch(()=>{}),fetch(`https://api.github.com/users/${nt}/repos?per_page=100&sort=updated`).then(J=>J.ok?J.json():Promise.reject(J.status)).then(J=>{if(!G){const xt=new Set(wt.pinnedRepos);b((Array.isArray(J)?J:[]).filter(Ot=>!Ot.fork||xt.has(Ot.name)))}}).catch(()=>{G||z(!0)}),fetch(`https://github-contributions-api.jogruber.de/v4/${nt}?y=last`).then(J=>J.ok?J.json():Promise.reject()).then(J=>{G||_(J)}).catch(()=>{G||Y(!0)}),()=>{G=!0}},[o,U]),{user:x,repos:f,reposError:A,contrib:V,contribError:v,reload:st}}const qd={checkmiteV1:{baseUrl:"https://raw.githubusercontent.com/05solar/checkmiteV1/HEAD/",text:`# Checkmite

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Model_API-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

![Checkmite 대시보드](docs/screenshot.png)

> AI 이미지/영상 분석 기반 천적응애 사육 품질 관리 웹 애플리케이션

Checkmite는 사육박스별 이미지와 영상을 분석해 천적응애/먹이응애 탐지, 밀도 측정, 활력도 분석, 증식률 추적을 수행하는 로컬 실행형 연구 대시보드입니다. 연구자가 사육 상태를 정량화하고 시간 흐름에 따른 변화를 관리할 수 있도록 돕습니다.

## 프로젝트 목표

- **수작업 계수 부담 감소**: 현미경 기반 수동 계수 과정을 이미지/영상 분석으로 보조합니다.
- **사육 품질 데이터화**: 개체 수, 밀도, 활력도, 증식률을 사육박스별 이력으로 저장합니다.
- **로컬 우선 실행**: 현장 PC 또는 내부망 환경에서 프론트엔드, 백엔드, 모델 API를 실행할 수 있도록 구성합니다.
- **운영 중심 대시보드**: 모델 데모가 아니라 사육박스 등록, 분석, 저장, 비교까지 이어지는 업무 흐름을 제공합니다.

## 대상 사용자

- 천적응애 대량 사육 품질을 관리하는 농업 연구 인력
- 이미지/영상 기반 샘플 분석 결과를 사육박스별로 기록해야 하는 실험실 또는 배양실 운영자
- 인터넷 연결이 제한적인 환경에서 로컬 분석 도구가 필요한 현장 사용자

## 주요 기능

- 사육박스 등록, 수정, 휴지통 이동 및 복구
- 이미지 기반 천적응애/먹이응애 객체 탐지
- 영상 기반 밀도 분석
- 영상 기반 활력도 분석과 tracking overlay 영상 생성
- 사육박스별 측정 이력 저장
- 직전 측정 및 첫 측정 대비 증식률 분석

## 시스템 구성

\`\`\`text
Frontend       React + Vite + TypeScript
Backend        Express + Node.js
Database       PostgreSQL
Model API      FastAPI + Ultralytics YOLO + OpenCV/ONNX Runtime
\`\`\`

기본 로컬 실행 포트:

\`\`\`text
Frontend       http://localhost:80
Local dev      http://localhost:5173
Backend API    http://localhost:3000/api
Model API      http://localhost:8000
PostgreSQL     localhost:5432
\`\`\`

## 빠른 시작

상세 설치와 서버 설정은 Wiki를 기준으로 확인합니다.

\`\`\`bash
npm install
npm run api:install
cp .env.example .env
npm run backend:migrate
\`\`\`

서비스 실행 후 상태 확인:

\`\`\`bash
sudo npm run dev          # 또는 npm run dev:local
npm run backend:dev
npm run api
curl http://127.0.0.1:80/
curl http://127.0.0.1:3000/api/health
curl http://127.0.0.1:8000/health
\`\`\`

## 데스크톱 앱(exe) 실행 방식

브라우저 없이 실행되는 Windows 데스크톱 앱(\`CheckMite.exe\`)을 제공합니다. 별도의 네이티브 앱을 새로 만든 것이 아니라, **기존 React 프론트엔드를 Electron으로 감싼 것**입니다.

### 동작 원리

\`CheckMite.exe\`는 **Electron 런타임**입니다. Electron은 내부에 **Chromium(크롬 엔진) + Node.js** 를 포함하므로, exe 하나로 화면 렌더링과 창 관리를 모두 처리합니다. 사용자 PC에 크롬·Node를 따로 설치할 필요가 없습니다.

\`\`\`text
CheckMite.exe (Electron)
├─ 메인 프로세스 (Node.js)        electron/main.cjs
│    └─ BrowserWindow 생성 → dist/index.html 로드 (file://)
└─ 렌더러 프로세스 (Chromium)
     └─ 빌드된 React 앱 렌더링 → 사용자가 보는 화면
\`\`\`

### 실행 흐름

\`\`\`text
1. exe 실행           → Electron 시작, electron/main.cjs 실행
2. 창 생성            → BrowserWindow 로 데스크톱 창 오픈
3. 화면 로드          → 창 안에 dist/index.html(빌드된 React) 을 file:// 로 표시
4. 서버 주소 확인      → 저장된 백엔드 주소 로드 (없으면 "서버 연결 설정" 화면)
5. API 호출          → 화면의 fetch 가 백엔드(3000)로 네트워크 요청
6. 응답 렌더링        → 백엔드 응답을 React 화면에 표시
\`\`\`

웹 버전과 달리 exe에는 Vite 개발 서버의 프록시가 없으므로, 백엔드 주소를 직접 지정합니다. 주소는 다음 우선순위로 결정됩니다.

1. 앱 내 **서버 연결 설정** 화면에서 저장한 주소 (\`localStorage\`) — 재빌드 없이 변경 가능
2. 빌드 시 \`.env.production\` 의 \`VITE_API_BASE\` 기본값
3. 상대경로 \`/api\` (개발 모드에서 \`vite.config.ts\` 프록시 사용)

최초 실행 또는 연결 실패 시 서버 주소 입력 화면이 뜨며, \`/api/health\` 로 연결을 확인합니다. 실행 중에는 우측 상단 톱니(⚙️) 버튼으로 언제든 주소를 바꿀 수 있습니다.

### 빌드 방법

\`\`\`bash
# (선택) 기본 서버 주소를 미리 지정하려면 .env.production 에 설정
#   VITE_API_BASE=http://<서버-IP>:3000

npm run electron:pack
# 결과물: release/CheckMite-win32-x64/CheckMite.exe
\`\`\`

\`release/CheckMite-win32-x64/\` 폴더 전체가 한 세트이므로, 다른 PC에는 폴더째 복사해 실행합니다. 서버 구축과 exe 배포 전체 절차는 [DEPLOYMENT.md](DEPLOYMENT.md)를 참고하세요.

관련 스크립트:

\`\`\`text
npm run electron:dev     개발 모드 (Vite dev 서버 + Electron 창 동시 실행)
npm run electron:pack    exe 패키징 (@electron/packager)
npm run electron:build   설치형(NSIS) 빌드 (electron-builder, 코드서명 도구 필요)
\`\`\`

## Repo 구성

이 repo에는 애플리케이션 실행에 필요한 소스 코드와 최소 설정 파일만 포함합니다.

| 경로 | 설명 |
| --- | --- |
| \`src/\` | 프론트엔드 소스 |
| \`electron/\` | Electron 메인 프로세스(데스크톱 창) |
| \`backend/\` | Express 백엔드 소스 |
| \`api/\` | Python 모델 API 소스 |
| \`backend/db/schema.sql\` | PostgreSQL schema |
| \`.env.example\` | 환경변수 예시 |
| \`DEPLOYMENT.md\` | 서버 구축 + exe 배포 가이드 |

상세 설치 방법, 서버 설정, 기능 설명, API/DB 문서, 분석 문서는 GitHub Wiki에서 관리합니다.

## 문서

| 문서 | 내용 |
| --- | --- |
| [GitHub Wiki](https://github.com/checkmite/checkmiteV1/wiki) | 전체 문서 목차 |
| [설치 방법](https://github.com/checkmite/checkmiteV1/wiki/설치-방법) | Node.js, Python, PostgreSQL 설치 |
| [실행 방법](https://github.com/checkmite/checkmiteV1/wiki/실행-방법) | 프론트엔드, 백엔드, 모델 API 실행 |
| [환경변수 설정](https://github.com/checkmite/checkmiteV1/wiki/환경변수-설정) | \`.env\`와 \`CHECKMITE_*\` 설정 |
| [모델 파일 준비](https://github.com/checkmite/checkmiteV1/wiki/모델-파일-준비) | 모델 가중치 배치 방법 |
| [주요 기능](https://github.com/checkmite/checkmiteV1/wiki/주요-기능) | 화면별 기능 설명 |
| [API 문서](https://github.com/checkmite/checkmiteV1/wiki/API-문서) | 백엔드 및 모델 API 요약 |
| [DB 구조](https://github.com/checkmite/checkmiteV1/wiki/DB-구조) | 주요 테이블과 migration |

## 로컬 실행 전 준비사항

이 repo는 소스 코드와 예시 설정만 포함합니다. 실제 실행 환경에서는 아래 파일과 설정을 로컬에 준비해야 합니다.

- \`.env\`
  - \`.env.example\`을 복사해 생성합니다.
  - \`DATABASE_URL\`, \`UPLOAD_DIR\`, \`MODEL_RUNTIME_URL\`, \`CHECKMITE_*\` 값을 실행 환경에 맞게 수정합니다.
- 모델 가중치 파일
  - \`model/best.pt\`
  - \`model/vitality/best.onnx\`
  - 실제 모델 파일은 지도교수/팀 담당자 또는 지정된 내부 저장소에서 전달받아 위 경로에 배치합니다.
  - 모델 API의 \`/health\` 응답에서 \`model_exists\`, \`vitality_model_exists\`가 모두 \`true\`인지 확인합니다.
- PostgreSQL 데이터베이스
  - \`.env\`의 \`DATABASE_URL\`에 맞는 DB와 계정을 준비한 뒤 \`npm run backend:migrate\`를 실행합니다.

자세한 절차는 [환경변수 설정](https://github.com/checkmite/checkmiteV1/wiki/환경변수-설정)과 [모델 파일 준비](https://github.com/checkmite/checkmiteV1/wiki/모델-파일-준비)를 참고하세요.
`},jbig:{baseUrl:"https://raw.githubusercontent.com/05solar/jbig/HEAD/",text:`# JBIG — Jeonbuk International Gateway

전북에 거주하는 외국인 근로자와 유학생을 위한 **생성형 AI 정착지원 플랫폼**입니다.
체류·행정과 노동 문제를 모국어(한국어·영어·베트남어)로 질문하면, 검토된 공식 문서에 근거한 답변과 출처, 그리고 도움받을 수 있는 지원기관을 안내합니다.

![JBIG 홈 화면](./docs/images/home.png)

## 왜 만들었나

낯선 언어와 제도 때문에 외국인 주민은 임금체불·계약 문제·체류 연장 같은 상황에서 정확한 정보를 찾기 어렵습니다. JBIG는 세 가지 원칙으로 이 문제를 풉니다.

- **공식정보 기반** — 상담마다 웹을 검색하지 않습니다. 관리자가 검토·승인한 공식 문서(법령·고용노동부·출입국 안내 등)만 RAG로 검색해 답변합니다. 근거가 부족하면 추측하지 않고 공식기관 확인을 안내합니다.
- **답변 출처 제공** — 모든 RAG 답변에 사용된 공식 자료의 문서명·발행기관·관련도·권위 점수·확인일을 함께 표시합니다. 출처 URL은 모델이 생성하지 않고 서버가 검색 메타데이터에서 구성합니다.
- **개인정보 보호** — 문서 OCR은 PaddleOCR로 전부 로컬에서 수행되어 원본 이미지가 외부로 나가지 않고, LLM 호출 전에 여권번호·전화번호 등 민감정보를 마스킹합니다.

## 주요 기능

### 1. 다국어 AI 상담

질문의 언어를 감지하고, 하이브리드 검색(키워드 + pgvector 벡터)으로 찾은 공식 문서 근거로 답변합니다. LLM 호출이 실패해도 규칙 기반 답변으로 폴백해 서비스가 끊기지 않습니다.

![AI 상담 챗봇 — 임금체불 질문에 대한 공식 문서 기반 답변](./docs/images/chat.png)

답변 하단에는 사용된 공식 자료가 신뢰도·관련도·권위 점수와 함께 표시됩니다.

![답변에 사용한 공식 자료 출처 카드](./docs/images/chat-sources.png)

### 2. 고용·행정 문서 검토

근로계약서, 임금명세서 등을 업로드하면 로컬 OCR로 텍스트를 추출하고, 위약금·최저임금 미달·가산수당 누락 같은 위험 조항을 규칙 기반으로 스크리닝한 뒤 공식 기준 문서와 비교해 설명합니다.

![고용·행정 문서 검토 업로드 화면](./docs/images/documents.png)

### 3. 상황별 가이드

외국인등록, 체류기간 연장, 임금체불 대응 등 13종의 절차 가이드를 3개 언어로 제공합니다. 필요한 서류와 단계, 흔한 실수까지 정리되어 있습니다.

![상황별 가이드 목록](./docs/images/guides.png)

### 4. 맞춤형 기관 연결

상황(체류·노동·산업재해·통역)과 현재 위치에 맞는 지원기관을 안내합니다. 좌표→지역 해석은 외부 API 없이 서버에서 결정적으로 처리합니다.

![내게 맞는 지원기관 찾기](./docs/images/agencies.png)

## 기술 구성

| 구분 | 내용 |
|------|------|
| 프론트엔드 | Next.js (App Router) + TypeScript — 다국어 UI(ko/en/vi) |
| 백엔드 | FastAPI — 상담 파이프라인(레이트리밋→캐시→규칙→RAG→LLM), 문서 분석, 기관/가이드 API |
| 검색(RAG) | 저장형 RAG: 검토·승인 문서만 색인. lexical(GIN) + 벡터(pgvector) 하이브리드 검색, 권위/최신성 랭킹 |
| 임베딩 | 로컬 sentence-transformers(384차원) 기본, OpenAI 임베딩 선택 가능 — 키 없이도 전 기능 동작 |
| OCR | PaddleOCR 로컬 엔진(이미지·스캔 PDF), 저신뢰 시 재촬영 안내 |
| 저장소 | PostgreSQL + pgvector — 미기동 시 인메모리 폴백으로 개발 가능 |
| 수집 | 공식 사이트 선별 크롤러 — 수집물은 \`review_pending\`으로만 등록, 사람이 승인해야 검색에 반영 |

\`\`\`text
jbig/
├── frontend/   # Next.js 사용자 웹 (chat / documents / guides / agencies)
├── backend/    # FastAPI API — app/ 아래 기능별 패키지(core·chat·documents·retrieval·infra·crawler·scripts)
├── docs/       # 아키텍처·RAG 파이프라인·크롤러 문서
└── docker-compose.yml
\`\`\`

> 📚 **더 읽기**: 아키텍처와 파이프라인 상세는 [docs/](./docs/README.md), 각 코드 폴더의 파일별 설명은 폴더 안의 README.md를 참고하세요.

---

## 실행 방법

### 요구사항

- Python 3.12+, Node.js 20+
- (선택) Docker — PostgreSQL/pgvector 실행용
- (선택) OpenAI API 키 — 없어도 로컬 임베딩·규칙 폴백으로 전 기능이 동작합니다

### 1. 백엔드

\`\`\`bash
cd backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env             # 필요 시 키·설정 수정
uvicorn app.main:app --reload --port 8000
\`\`\`

API 문서: http://localhost:8000/docs

### 2. 프론트엔드

새 터미널에서 실행합니다.

\`\`\`bash
cd frontend
npm install
cp .env.example .env.local       # NEXT_PUBLIC_API_URL을 백엔드 포트에 맞춤
npm run dev
\`\`\`

웹: http://localhost:3000

### 3. PostgreSQL (선택)

\`\`\`bash
docker compose up -d db
\`\`\`

PostgreSQL이 없어도 가이드·샘플 RAG 문서의 인메모리 폴백으로 개발할 수 있습니다. 운영에서는 pgvector에 검토 문서와 임베딩을 저장하세요. 새 환경에서는 \`python -m app.scripts.db_init\`(또는 서버 시작 시 lifespan)이 idempotent 마이그레이션으로 스키마를 생성합니다.

### 4. RAG 색인·운영 (선택)

\`\`\`bash
cd backend
python -m app.scripts.index_rag                    # 개발용 샘플 공식 문서 색인
python -m app.scripts.embed_guides                 # 가이드 임베딩
python -m app.scripts.crawl_official_docs --review # 공식 사이트에서 후보 수집(review_pending 등록)
python -m app.scripts.cli check-source-updates     # 등록 문서 원문 변경 감지(cron용)
python -m app.scripts.cli list-pending-updates     # 검토 대기 버전 조회
python -m app.scripts.cli approve-document-version <version-id> --reviewed-by admin --note "검토 완료"
\`\`\`

수집·변경 감지된 문서는 승인 전까지 상담 검색에 들어가지 않습니다. 전체 워크플로는 [docs/rag-pipeline.md](./docs/rag-pipeline.md)와 [docs/crawler.md](./docs/crawler.md), 관리자 등록 API(\`RAG_ADMIN_TOKEN\`)와 환경변수 목록은 [backend/.env.example](./backend/.env.example)을 참고하세요.

### 5. 테스트

\`\`\`bash
cd backend
python -m unittest discover -s tests   # 외부 API 0회, DB 없이 전부 통과
cd ../frontend
npx tsc --noEmit && npm run build
\`\`\`
`},GO:{baseUrl:"https://raw.githubusercontent.com/05solar/GO/HEAD/",text:`<h1 align="center">기보 — 바둑 &amp; 오목</h1>

<p align="center">
  브라우저에서 바로 즐기는 <b>바둑(9×9 · 13×13)</b>과 <b>오목(15×15)</b>.<br>
  서버 없이 돌아가는 순수 클라이언트 앱 · 모던 흑백 UI · 웹워커 기반 AI
</p>

<p align="center">
  <a href="https://05solar.github.io/GO/"><b>▶ 라이브 데모</b></a>
</p>

<p align="center">
  <img src="docs/screenshot.png" width="46%" alt="바둑 9×9 화면">
  &nbsp;
  <img src="docs/omok.png" width="46%" alt="오목 화면">
</p>

---

## 특징

- **바둑** — 9×9 / 13×13 선택. 착수·따냄·자살수 금지·패(ko) 완전 구현, 두 번 패스 시 죽은 돌 자동 판정 후 **한국식 계가(집 + 사석)**.
- **기보 · 복기** — 대국 전 수순을 목록으로 기록. 처음/이전/다음/마지막 이동으로 한 수씩 되짚어보고, 목록에서 특정 수로 바로 점프. **착수 순번 오버레이**(돌 위 번호 표시)와 **SGF 저장·복사**(표준 포맷, 다른 뷰어와 호환)를 지원. 과거 수로 돌아가 다른 곳에 두면 그 지점부터 새 변화로 이어집니다.
- **오목** — 15×15. 5목 완성 승리, 즉시 승리/방어 감지.
- **난이도 3단계** (쉬움 · 중간 · 어려움) — 두 게임 모두.
- **반응형** — 화면 폭에 맞춰 판이 실시간으로 커지고 작아짐(모바일 ~ 데스크톱).
- **모던 흑백 UI** — 흰 배경 · 검정 포인트, 바둑판만 기존 나무색 유지.
- **오프라인/정적** — 백엔드가 전혀 없어 GitHub Pages 같은 정적 호스팅에서 그대로 작동.
- 착수 팝·따냄 페이드 애니메이션, 착수음(웹오디오), 무르기 지원(바둑).

## AI 설계

두 게임의 성격이 달라 서로 다른 방식을 씁니다. 무거운 탐색은 모두 **웹워커**에서 돌려 UI가 멈추지 않습니다.

| | 방식 |
|---|---|
| **바둑** | MCTS(몬테카를로 트리 탐색) + RAVE, 전술 롤아웃, **축(ladder) 읽기**, 어려움 난이도 폰더링(상대 생각 중 배경 탐색) |
| **오목** | 알파-베타 미니맥스 + **반복심화(iterative deepening)** + 강제수 탐색(4목 위협은 반드시 대응) |

> 바둑은 지식이 적은 넓은 탐색 공간이라 MCTS에 축 전술을 더했고, 오목은 좁고 전술적이라 알파-베타를 씁니다.

## 기술 스택

React · TypeScript · Vite · HTML5 Canvas · Web Workers

## 로컬 실행

\`\`\`bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
\`\`\`

## 배포

\`main\` 브랜치에 push하면 **GitHub Actions**(\`.github/workflows/deploy.yml\`)가 자동으로 빌드해 GitHub Pages에 올립니다.

최초 1회 설정: 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정하세요.

> GitHub Pages는 \`/GO/\` 하위 경로로 서빙하므로 \`vite.config.ts\`의 \`base\`가 \`/GO/\`로 맞춰져 있습니다. 저장소 이름을 바꾸면 이 값도 함께 바꿔야 합니다.

## 프로젝트 구조

\`\`\`
src/
  App.tsx / main.tsx      탭 전환, 앱 껍데기
  theme.css               모노크롬 디자인 토큰
  useSquareSize.ts        반응형 판 크기 측정 훅
  go/                     바둑: 엔진(go.ts) · 워커 · UI
  omok/                   오목: 엔진(omok.ts) · 워커 · UI
\`\`\`
`},"MSA-restaurant":{baseUrl:"https://raw.githubusercontent.com/05solar/MSA-restaurant/HEAD/",text:`

# CAT TABLE — 식당 MSA 프로젝트

![customer](assets/customer.png)
![admin](assets/admin.png)

고객용·관리자용 식당 서비스를 마이크로서비스 아키텍처(MSA)로 구현한 프로젝트입니다.  
**Docker Compose 명령어 하나**로 전체 서비스를 로컬에서 실행할 수 있습니다.

---

## 서비스 구조

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  고객 웹 (Vue3)        관리자 웹 (Vue3)                          │
│  localhost:5173        localhost:5174                            │
└──────────────┬───────────────────┬──────────────────────────────┘
               │                   │
               ▼                   ▼
      ┌─────────────────────────────────┐
      │   Gateway Service (Spring Boot) │  :8080
      │   · JWT 인증/권한 검사          │
      │   · 요청 라우팅                 │
      │   · Swagger UI (/swagger)       │
      └──┬──────┬──────┬──────┬────────┘
         │      │      │      │
    ┌────┘  ┌───┘  ┌───┘  ┌──┘
    ▼       ▼      ▼      ▼
  Auth   Menu   Order  Review   AI Services (FastAPI)
  :8081  :8082  :8083  :8084   :8001 / :8002 / :8003
  Redis  SQLite SQLite SQLite
\`\`\`

---

## 실행 전 필요 사항

| 항목 | 버전 |
|------|------|
| Docker Desktop | 최신 버전 |
| Docker Compose | v2 이상 (\`docker compose\` 명령 지원) |

> **Node.js, Java, Python 별도 설치 불필요** — 모든 빌드가 Docker 내에서 진행됩니다.

---

## 빠른 시작

### 1. 저장소 클론

\`\`\`bash
git clone https://github.com/05solar/OSS_project3.git
cd OSS_project3
\`\`\`

### 2. 환경 변수 파일 생성

\`\`\`bash
cp .env.example .env
\`\`\`

\`.env\` 파일을 열어 값을 설정합니다.

\`\`\`env
# JWT 서명 키 (임의의 긴 문자열로 변경 권장)
JWT_SECRET=my-secret-key-change-me

# OpenAI API 키 (AI 기능 사용 시 입력, 없어도 서비스 실행 가능)
OPENAI_API_KEY=

# 사용할 OpenAI 모델
OPENAI_MODEL=gpt-4o-mini
\`\`\`

> \`OPENAI_API_KEY\`가 없거나 잘못되어도 AI 기능만 고정 응답으로 대체되며, 나머지 서비스는 정상 동작합니다.

### 3. 전체 서비스 빌드 및 실행

\`\`\`bash
docker compose up --build
\`\`\`

처음 실행 시 이미지 빌드에 수 분이 소요될 수 있습니다.  
\`All services started\` 메시지 이후 아래 주소로 접속하세요.

### 4. 백그라운드 실행

\`\`\`bash
docker compose up -d --build
\`\`\`

### 5. 종료

\`\`\`bash
docker compose down
\`\`\`

---

## 접속 주소

| 서비스 | 주소 |
|--------|------|
| 고객 웹 | http://localhost:5173 |
| 관리자 웹 | http://localhost:5174 |
| API 게이트웨이 | http://localhost:8080/api |
| Swagger API 문서 | http://localhost:8080/swagger |

---

## 기본 계정

| 구분 | 아이디 | 비밀번호 |
|------|--------|----------|
| 관리자 | \`admin\` | \`admin1234\` |
| 고객 | 고객 웹에서 직접 회원가입 | — |

---

## Swagger API 문서 사용법

1. http://localhost:8080/swagger 접속
2. 우측 상단 드롭다운에서 **"Gateway API"** 선택
3. **Authorize** 버튼 클릭 → 로그인으로 발급받은 \`accessToken\` 입력
4. 각 엔드포인트에서 **Try it out** → **Execute** 로 직접 테스트

---

## 프로젝트 구조

\`\`\`
OSS_project3/
├── customer-web/          # 고객용 웹 (Vue 3 + Vite)
├── admin-web/             # 관리자용 웹 (Vue 3 + Vite)
├── services/
│   ├── gateway-service/   # API 게이트웨이 (Spring Boot)
│   ├── auth-service/      # 인증 서비스 (Spring Boot + Redis)
│   ├── menu-service/      # 메뉴 서비스 (Spring Boot + SQLite)
│   ├── order-service/     # 주문 서비스 (Spring Boot + SQLite)
│   └── review-service/    # 리뷰 서비스 (Spring Boot + SQLite)
├── ai-services/
│   ├── recommendation-service/  # 메뉴 추천 AI (FastAPI)
│   ├── review-writer-service/   # 리뷰 초안 작성 AI (FastAPI)
│   └── operations-ai-service/   # 운영 분석 AI (FastAPI)
├── docker-compose.yml     # 전체 서비스 오케스트레이션
├── .env.example           # 환경 변수 템플릿
└── README.md
\`\`\`

---

## 주요 기능

### 고객 웹
- 카테고리·키워드 기반 메뉴 탐색
- 장바구니 → 주문
- 주문 내역 조회
- 리뷰 작성 (AI 초안 자동 생성 지원)
- AI 메뉴 추천
- 현재 혼잡도 AI 분석

### 관리자 웹
- 대시보드 (매출·주문·평점·메뉴 현황)
- 주문 목록 조회 및 상태 변경 (접수 → 조리 → 준비 → 완료)
- 리뷰 목록 조회 및 삭제
- 메뉴 등록·수정
- AI 신메뉴 제안
- AI 서비스 품질 평가

---

## 트러블슈팅

### 포트 충돌
다른 프로그램이 \`5173\`, \`5174\`, \`8080~8084\`, \`6379\` 포트를 사용 중이면 \`docker-compose.yml\`의 포트 매핑을 변경하세요.

### 빌드 캐시 초기화
\`\`\`bash
docker compose down
docker compose build --no-cache
docker compose up
\`\`\`

### 로그 확인
\`\`\`bash
# 전체 로그
docker compose logs -f

# 특정 서비스 로그
docker compose logs -f gateway-service
\`\`\`
`},"By-Tomorrow":{baseUrl:"https://raw.githubusercontent.com/05solar/By-Tomorrow/HEAD/",text:`![내일까지 해야 하는데 — 랜딩, 시험 정보 입력, AI 자료 분석, 학습 STEP, 벼락치기 맵 화면](docs/screenshots/overview.png)

# 내일까지 해야 하는데

시험까지 남은 시간과 업로드한 강의자료를 AI가 분석해, 지금 남은 시간 안에서 실제로 수행 가능한
학습 커리큘럼을 만들어 주는 벼락치기 학습 서비스.

## 이 서비스의 핵심 전제

회원가입과 로그인이 없다. 학습을 시작하면 서버가 **8자리 세션 코드**를 발급하고,
사용자는 그 코드만으로 자신의 학습 공간에 접근한다.

\`\`\`
7K2M9QXF
\`\`\`

따라서 이 프로젝트의 최상위 도메인은 \`User\`가 아니라 \`StudySession\`이다.

\`\`\`
8자리 Session Code
        ↓
   StudySession
        ↓
    Documents → AI Topics → StudySteps → Quiz → QuizResults
\`\`\`

세션 코드는 곧 접근 키(Access Key)다. 코드를 아는 사람은 그 학습 공간에 접근할 수 있다.

## 저장소 구조

\`\`\`
kiro-project
├── backend/          Spring Boot 백엔드
├── frontend/         Next.js 프론트엔드
├── docs/             기획·API·DB 문서
├── scripts/          띄운 스택에 대고 돌리는 검증 스크립트
├── README.md         이 파일
├── PROCESS.md        전체 개발 진행 절차와 단계별 상태
└── AGENT.md          AI 에이전트 작업 규칙
\`\`\`

프론트엔드는 Next.js(App Router) + React + TypeScript 다. 백엔드와는 같은 오리진의
\`/api\` 프록시로 통신한다 — 자세한 내용은 [frontend/README.md](frontend/README.md).

## 현재 진행 상태

| 단계 | 내용 | 상태 |
| --- | --- | --- |
| STEP 1 | 프로젝트 기본 구조 | 완료 |
| STEP 2 | 8자리 세션 생성 / 조회 / 복구 | 완료 |
| STEP 3 | 시험 정보 입력 | 완료 |
| STEP 4 | 강의자료 업로드 및 파일 저장 | 완료 |
| STEP 4-2 | PDF/DOCX/TXT 텍스트 추출 | 완료 |
| STEP 5 | 학습 맥락(StudyContext) 입력 | 완료 |
| STEP 6 | AI 문서 분석 및 Topic 생성 | 완료 |
| STEP 7 | 최초 학습 계획(Curriculum) 생성 | 완료 |
| STEP 8 | 학습 단계 진행 및 실제 학습시간 기록 | 완료 |
| STEP 9 | 동적 커리큘럼 재조정 | 완료 |
| STEP 10 | 퀴즈 생성·채점·오답 요약 | 완료 |
| STEP 11 | 프론트엔드 연동 및 Docker 배포 | 완료 |
| 추가 1 | 같은 범위 신규 퀴즈 생성(회차) | 완료 |
| 추가 2 | 자료 미업로드 시 일반 지식 기반 생성 | 완료 |
| 추가 3 | 학습자료 기반 학습 챗봇 | 완료 |
| 추가 4 | 스키마 마이그레이션 자동화 (Flyway) | 완료 |

자세한 절차는 [PROCESS.md](PROCESS.md)를 참고한다.

## 빠르게 실행하기

전체를 한 번에 (도커 필요):

\`\`\`bash
cp .env.example .env    # GEMINI_API_KEY 채우기
docker compose up -d --build
\`\`\`

브라우저에서 http://localhost 를 연다. 자세한 내용은 [DEPLOY.md](DEPLOY.md).

백엔드만 따로:

\`\`\`bash
cd backend
./gradlew test          # 테스트 (외부 DB 불필요, H2 사용)
./gradlew build         # 빌드
./gradlew bootRun       # 실행 (PostgreSQL 필요)
\`\`\`

DB 접속 정보는 환경변수로 주입한다. 자세한 내용은 [backend/README.md](backend/README.md).

## 문서

- [docs/api/session-api.md](docs/api/session-api.md) — 세션 생성 / 조회 / 시험 정보
- [docs/api/document-api.md](docs/api/document-api.md) — 강의자료 업로드 / 목록 / 삭제
- [docs/api/document-parsing-api.md](docs/api/document-parsing-api.md) — 문서 텍스트 추출
- [docs/api/study-context-api.md](docs/api/study-context-api.md) — 학습 맥락 저장 / 조회
- [docs/api/analysis-api.md](docs/api/analysis-api.md) — AI 분석 / Topic 조회
- [docs/api/curriculum-api.md](docs/api/curriculum-api.md) — 학습 계획 생성 / 조회
- [docs/api/study-step-api.md](docs/api/study-step-api.md) — 학습 단계 시작 / 완료
- [docs/api/error-codes.md](docs/api/error-codes.md) — 공통 에러 코드
- [docs/database.md](docs/database.md) — DB 구조
- [docs/backend-anatomy.html](docs/backend-anatomy.html) — 백엔드 동작 원리 (도면·흐름도, 브라우저로 연다)
- [docs/system-architecture.html](docs/system-architecture.html) — 전체 시스템 도면과 계층별 기술 스택 (브라우저로 연다)
- [docs/deployment.html](docs/deployment.html) — AWS 배포 점검표

## 알려진 환경 이슈

이 저장소는 \`C:\\바탕 화면\\kiro-project\` 처럼 **경로에 한글과 공백**이 들어 있다.
그대로 두면 Gradle 테스트가 전부 \`ClassNotFoundException\`으로 실패한다.
\`backend/gradle.properties\`에 해결책과 이유를 적어 두었으니 지우지 말 것.
`},GLML:{baseUrl:"https://raw.githubusercontent.com/05solar/GLML/HEAD/",text:`# GLML — 맛집 찾기 AI Agent

> **좋아하는 것만 먹고싶으니까, GLML 갈래말래 **
> Agentic Design Pattern 기반 맛집 추천 AI Agent

![GLML 화면 — 시작 · 위치 선택 · 동행 · 시간대](docs/preview-1.png)

![GLML 화면 — 음식 · 가격 · 우선순위 · AI 추천 결과](docs/preview-2.png)

사용자의 조건(지역·동행·시간대·음식·가격·우선순위)을 분석한 뒤,
**맛집 검색 도구를 직접 호출**하고 그 결과를 **검토(Reflection)** 하여
조건에 맞는 맛집을 추천하는 **Agentic AI** 시스템입니다.

단순히 LLM에게 "맛집 추천해줘"라고 묻는 것이 아니라,
Agent가 **판단(Thought) → 도구 호출(Action) → 결과 확인(Observation) → 검토 → 최종 추천(Final Answer)**
의 흐름으로 동작합니다. 백엔드 ReAct Agent가 이 과정을 **실제로 실행**하고, 프론트엔드가 그 과정을 화면에 시각화합니다.

관련 문서는 docs 폴더에 상세히 정리되어있습니다. 

---

## 🚀 빠른 시작 (Quick Start)

> GitHub에서 클론한 뒤 아래 순서대로 실행하면 됩니다. **Python 3.10+** 와 **Node.js 18+** 가 필요합니다.

### 1. 저장소 클론

\`\`\`bash
git clone <이-저장소-주소>
cd GLML
\`\`\`

### 2. 백엔드 준비 (Python / ReAct Agent)

\`\`\`bash
cd backend
python -m venv .venv

# 가상환경 활성화
#   Windows (PowerShell):  .\\.venv\\Scripts\\Activate.ps1
#   macOS / Linux:         source .venv/bin/activate

pip install -r requirements.txt

# 환경변수 파일 생성 후 OPENAI_API_KEY 입력
#   Windows:  copy .env.example .env
#   macOS/Linux:  cp .env.example .env
cd ..
\`\`\`

\`backend/.env\`를 열어 키를 채웁니다.

\`\`\`env
OPENAI_API_KEY=sk-본인_키          # 필수 (없으면 오프라인 모드로 동작)
OPENAI_MODEL=gpt-4o-mini           # 선택 (기본값)
GOOGLE_PLACES_API_KEY=             # 선택 (있으면 실시간 평점·리뷰 데이터)
KAKAO_REST_KEY=                    # 선택 (지역 검증용)
\`\`\`

### 3. 프론트엔드 준비 (React / UI)

\`\`\`bash
npm install

# (선택) 지도를 실제로 띄우려면 루트 .env 에 Google Maps 키 입력
#   Windows:  copy .env.example .env   /   macOS·Linux:  cp .env.example .env
\`\`\`

### 4. 실행 — 두 서버 한 번에

\`\`\`bash
npm run dev
\`\`\`

- 프론트엔드(**Vite, :5173**)와 백엔드(**Flask, :8000**)가 **동시에** 실행됩니다. (\`concurrently\`)
- 브라우저에서 **http://localhost:5173** 접속 → 조건을 고르면 실제 ReAct Agent가 추천을 생성합니다.
- 종료: 터미널에서 **\`Ctrl+C\`** (둘 다 종료). 안 꺼지면 **\`npm run stop\`**.
- Windows는 \`start.bat\`(실행) / \`stop.bat\`(종료) 더블클릭으로도 됩니다.

> **참고**: 통합 실행 명령 \`npm run dev\`의 백엔드 경로(\`backend\\.venv\\Scripts\\python\`)는 Windows 기준입니다.
> macOS/Linux에서는 백엔드(\`python server.py\`)와 프론트(\`npm run dev:web\`)를 터미널 두 개로 따로 실행하세요.

---

## ✨ 주요 기능

- **대화형 조건 수집** — 위치 · 동행 · 시간대 · 음식 종류 · 가격대 · 우선순위를 단계별로 선택
- **AI Agent 추천** — 선택한 조건을 분석해 맛집을 검색·필터·정렬하고, 추천 이유와 함께 제시
- **실시간 맛집 데이터** — Google Places 기반 평점·리뷰·가격·거리 (키가 없으면 샘플 데이터로 동작)
- **추천 과정 시각화** — Agent가 판단하고 도구를 호출하는 과정을 화면에서 단계별로 확인
- **지도 위치 선택** — Google 지도에서 위치를 직접 지정

## 🧠 동작 방식

\`\`\`
사용자 조건 → 요청 분석(조건 추출) → [검색 → 필터 → 정렬] 도구 호출 → 결과 검토·보완 → 추천 결과
\`\`\`

- 백엔드 Agent(\`backend/agent.py\`)가 OpenAI function calling으로 맛집 도구를 직접 호출하며 추천을 생성합니다.
- 맛집 검색·필터·정렬 도구는 \`backend/tools.py\`에 구현되어 있습니다.
- 프론트엔드(\`src/\`)는 조건 수집 UI와 추천 과정·결과 화면을 담당합니다.

## 🛠 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| 프론트엔드 | React 18 · TypeScript · Vite 5 |
| 백엔드 | Python · Flask · OpenAI (gpt-4o-mini) |
| 외부 연동 | Google Places API · Google Maps JavaScript API · Kakao Local |

## 📁 프로젝트 구조

\`\`\`
GLML/
├── backend/                  # AI Agent (Python)
│   ├── main.py               # CLI 실행 진입점
│   ├── server.py             # API 서버 (POST /api/recommend)
│   ├── agent.py              # Agent 실행 로직 (검색 → 필터 → 정렬 → 검토)
│   ├── tools.py              # 맛집 검색/필터/정렬 도구
│   └── data/restaurants.json # 샘플 맛집 데이터
├── src/                      # 프론트엔드 (React)
│   ├── App.tsx               # 단계별 조건 수집 흐름
│   ├── pages/                # 시작 · 위치 선택 · 추천 과정 · 결과 화면
│   ├── components/           # 공용 UI 컴포넌트
│   └── data/                 # 옵션 · 맛집 · 트레이스 데이터
├── docs/                     # 상세 문서
├── package.json              # 프론트 스크립트 / 의존성
└── vite.config.ts            # 개발 서버 + /api 프록시
\`\`\`

## 📜 사용 가능한 명령어

| 명령 | 설명 |
| --- | --- |
| \`npm run dev\` | 프론트 + 백엔드 동시 실행 |
| \`npm run dev:web\` | 프론트(Vite)만 실행 |
| \`npm run stop\` | 5173 / 8000 포트 서버 종료 |
| \`npm run build\` | 프로덕션 빌드 |
| \`npm run preview\` | 빌드 결과 미리보기 |



`},"RAG-agent":{baseUrl:"https://raw.githubusercontent.com/05solar/RAG-agent/HEAD/",text:`![프로젝트 화면](./docs/assets/readme-preview.png)

# PDF RAG 멀티 에이전트 챗봇

PDF 문서 기반 RAG 챗봇에 에이전트 탭을 추가한 실습 프로젝트입니다.  
사용자는 PDF를 업로드해 문서 내용을 질문할 수 있고, 별도 DB 기반 에이전트로 졸업 요건 상담, 도서 추천, 교내 시설 안내도 사용할 수 있습니다.

## 주요 기능

- PDF 업로드 및 문서 인덱싱
- PDF 기반 질의응답
- Top K, Threshold 검색 설정 조정
- 답변 LLM + 평가 LLM 결과 표시
- LLM 효율 그래프 표시
- 충돌 답변 후보 비교 UI
- 에이전트 탭 전환
- SQLite 기반 도서/졸업/시설 DB 조회

## 에이전트 탭

- \`PDF RAG\`: 업로드한 PDF 문서 기반 질의응답
- \`졸업 요건 상담\`: 학생 정보, 수강 이력, 졸업 요건 DB 기반 상담
- \`도서 추천 에이전트\`: 도서 목록, 리뷰, 대출 가능 여부 기반 추천
- \`교내 시설 안내\`: 시설 위치, 운영시간, 혼잡도, FAQ 기반 안내

## 실행 방법

### 1. 패키지 설치

\`\`\`powershell
& "$env:LOCALAPPDATA\\Python\\pythoncore-3.12-64\\python.exe" -m pip install -r requirements.txt
npm install
\`\`\`

### 2. OpenAI API Key 설정

프로젝트 루트의 \`.env\` 파일에 API 키를 넣습니다.

\`\`\`env
OPENAI_API_KEY=sk-your-real-api-key
\`\`\`

### 3. 백엔드 실행

\`\`\`powershell
& "$env:LOCALAPPDATA\\Python\\pythoncore-3.12-64\\python.exe" -m uvicorn backend_server:app --reload --host 127.0.0.1 --port 8000
\`\`\`

### 4. 프론트엔드 실행

다른 터미널에서 실행합니다.

\`\`\`powershell
npm run dev
\`\`\`

브라우저에서 접속합니다.

\`\`\`text
http://127.0.0.1:5173
\`\`\`

## DB 관련 명령어

기본 에이전트 DB 생성:

\`\`\`powershell
& "$env:LOCALAPPDATA\\Python\\pythoncore-3.12-64\\python.exe" .\\create_agents_db.py
\`\`\`

실제 도서 데이터 추가:

\`\`\`powershell
& "$env:LOCALAPPDATA\\Python\\pythoncore-3.12-64\\python.exe" .\\seed_real_books_db.py
\`\`\`

도서 DB를 200건, 리뷰를 50개로 확장:

\`\`\`powershell
& "$env:LOCALAPPDATA\\Python\\pythoncore-3.12-64\\python.exe" .\\expand_books_to_200.py
\`\`\`

## 주요 파일

- \`src/App.jsx\`: React 프론트엔드 화면
- \`src/App.css\`: 프론트엔드 스타일
- \`backend_server.py\`: FastAPI 백엔드
- \`pdf_rag_chatbot.py\`: PDF 추출, 청킹, 임베딩, RAG 답변 로직
- \`agents.db\`: 졸업/도서/시설 에이전트용 SQLite DB
- \`create_agents_db.py\`: 기본 에이전트 DB 생성 스크립트
- \`seed_real_books_db.py\`: 실제 도서 데이터 추가 스크립트
- \`expand_books_to_200.py\`: 도서 200건/리뷰 50개 확장 스크립트

## 빌드 확인

\`\`\`powershell
node .\\node_modules\\vite\\bin\\vite.js build --minify=false --emptyOutDir=false
\`\`\`
`},"MCP-shopbot":{baseUrl:"https://raw.githubusercontent.com/05solar/MCP-shopbot/HEAD/",text:`# MCP ShopBot

![MCP ShopBot](assets/image.png)

상품 데이터베이스를 MCP(Model Context Protocol)로 연동한 한국어 AI 쇼핑 도우미입니다.  
FastAPI 백엔드 + React/Vite 프론트엔드 구성이며, OpenAI Tool Calling으로 상품 검색·상세조회·재고확인을 처리합니다.

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 백엔드 | Python, FastAPI, MCP (stdio), OpenAI API |
| 프론트엔드 | React 18, Vite 8, JSX |
| 데이터베이스 | SQLite (\`products.db\`) |
| 스타일 | Y2K Chrome/Aqua CSS |

## 사용 가능한 MCP 도구

- \`search_products\` — 키워드·가격 범위로 상품 검색
- \`get_product_detail\` — 상품 ID로 상세 정보 조회
- \`check_stock\` — 상품 ID로 재고 확인

---

## 실행 방법

### 1. 의존성 설치

\`\`\`bash
pip install fastapi uvicorn openai mcp python-dotenv
cd frontend && npm install
\`\`\`

### 2. 환경변수 설정

프로젝트 루트에 \`.env\` 파일 생성:

\`\`\`
OPENAI_API_KEY=sk-...
\`\`\`

### 3. DB 초기화

\`\`\`bash
set PYTHONUTF8=1
py setup_db.py
\`\`\`

### 4. 프론트엔드 빌드

\`\`\`bash
cd frontend
npm run build
\`\`\`

### 5. 서버 실행

\`\`\`bash
set PYTHONUTF8=1
py -m uvicorn server:app --reload --port 8000
\`\`\`

브라우저에서 \`http://localhost:8000\` 접속

---

## 프로젝트 구조

\`\`\`
lab3-MCP/
├── server.py                # FastAPI 백엔드 (SSE 스트리밍)
├── mcp_server_products.py   # FastMCP stdio 서버
├── setup_db.py              # SQLite DB 초기화
├── frontend/                # React + Vite 프론트엔드
│   └── src/
│       ├── App.jsx
│       ├── hooks/useChat.js
│       └── components/
├── static/                  # 빌드 결과물 서빙 경로
└── .env                     # API 키 (gitignore)
\`\`\`
`},"OV-clonecoding":{baseUrl:"https://raw.githubusercontent.com/05solar/OV-clonecoding/HEAD/",text:`# 올리브영(OLIVE YOUNG) 메인 페이지 클론 코딩 🛍️

올리브영 메인 페이지를 **React + Vite** 로 클론 코딩한 과제용 프로젝트입니다.
모든 이미지는 외부 의존성 없이 **CSS / SVG / 이모지 플레이스홀더**로 구현되어 인터넷 연결 없이도 동작합니다.

> ⚠️ 학습용 클론입니다. 실제 올리브영과 무관하며, 모든 상품·가격은 더미 데이터입니다.

## 🚀 실행 방법

\`\`\`bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (자동으로 브라우저가 열립니다)
npm run dev

# 3. 프로덕션 빌드
npm run build

# 4. 빌드 결과 미리보기
npm run preview
\`\`\`

개발 서버 주소: http://localhost:5173

## 🧩 구현한 기능

| 영역 | 기능 |
| --- | --- |
| 헤더 | 상단 유틸바, 로고, **검색창**(인기 검색어 클릭 입력), 찜/마이/장바구니 아이콘(수량 배지) |
| GNB | 메인 메뉴, **카테고리 드로어**(좌측 슬라이드 + 대/소분류 hover 연동) |
| 히어로 | **자동 슬라이드 캐러셀**(좌우 버튼, 인디케이터, hover 시 일시정지) |
| 빠른메뉴 | 원형 아이콘 바로가기 |
| 상품 | **상품 카드**(실제 이미지, 할인율/판매가 자동계산, 오늘드림·세일 배지, 별점·리뷰, **찜 토글**) → 클릭 시 상세 이동 |
| **상세 페이지** | **\`/product/:id\` 라우팅** — 이미지 갤러리(썸네일 전환), 수량 선택, 금액/적립 계산, 장바구니/바로구매, **탭(상품정보·리뷰·Q&A·배송)**, 함께 본 상품 |
| 랭킹 | **카테고리 탭 필터** + 랭킹 배지 |
| 기획전 | 그라데이션 프로모션 배너 |
| 푸터 | 고객센터, 정책 링크, 회사 정보 |
| 기타 | 스크롤 시 나타나는 **TOP 버튼**, sticky 헤더, **페이지 이동 시 스크롤 상단 이동** |

## 📱 반응형 (Responsive)

\`src/responsive.css\` 한 파일에서 브레이크포인트로 관리합니다.

| 화면 폭 | 상품 그리드 | 주요 변화 |
| --- | --- | --- |
| ~1024px (태블릿) | 5열 → **4열** | 컨테이너 여백·히어로 축소 |
| ~768px (모바일) | → **3열** | 검색창 줄바꿈, GNB·빠른메뉴·랭킹탭 가로 스크롤, 프로모션 1열, 푸터 세로 정렬, 상세 1단 |
| ~480px (소형) | → **2열** | 폰트·아이콘 추가 축소, 상단 유틸 일부 숨김 |

## 🖼 이미지 처리

- 상품/상세 이미지는 **loremflickr**(카테고리 키워드 기반)에서 실제 사진을 불러옵니다. \`lock\` 값으로 상품마다 고정된 이미지를 표시합니다. (\`src/data/products.js\`의 \`productImage()\`)
- **오프라인 등 로드 실패 시** \`onError\`로 **그라데이션 + 이모지 썸네일**로 자동 대체되어 화면이 깨지지 않습니다.
- 히어로/기획전 배너, 로고는 의도된 디자인으로 **CSS 그라데이션 / 텍스트 로고**를 사용합니다.

> ⚠️ **저작권 안내:** 올리브영의 실제 로고·배너·상품 사진 등 저작권 이미지는 이 저장소에 포함하지 않았습니다.
> 본 프로젝트는 **비상업적 학습(클론 코딩) 목적**이며, 디자인 구조와 컬러 토큰만 참고했습니다. 화면의 모든 이미지는 위와 같이 저작권 부담이 없는 플레이스홀더로 렌더링됩니다.

## 🔤 폰트

- **Pretendard** 웹폰트를 \`src/fonts.css\`의 \`@font-face\`(9종 weight)로 로드합니다.
- \`font-display: swap\` + 시스템 폰트 fallback(\`맑은 고딕\`)으로 오프라인에서도 정상 표시됩니다.

## 📁 폴더 구조

\`\`\`
src/
├── main.jsx              # 진입점 (BrowserRouter)
├── App.jsx              # 공통 레이아웃 + 라우팅(Routes)
├── fonts.css           # Pretendard @font-face
├── index.css           # 전역 스타일 + 디자인 토큰(CSS 변수)
├── responsive.css      # 반응형 미디어쿼리 (마지막 로드)
├── data/
│   └── products.js     # 더미 데이터 + 이미지 URL 생성기(productImage)
├── pages/
│   ├── Home.jsx        # 메인 페이지
│   └── ProductDetail.jsx  # 상품 상세 페이지 (/product/:id)
└── components/
    ├── Icons.jsx        # 인라인 SVG 아이콘 모음
    ├── TopBar.jsx       # 최상단 유틸 바
    ├── Header.jsx       # 로고 + 검색 + 아이콘
    ├── Gnb.jsx          # 메뉴 + 카테고리 드로어
    ├── HeroBanner.jsx   # 메인 캐러셀
    ├── QuickMenu.jsx    # 원형 빠른 메뉴
    ├── ProductCard.jsx  # 상품 카드 (클릭 → 상세 이동)
    ├── ProductSection.jsx
    ├── RankingSection.jsx
    ├── PromoBanners.jsx
    ├── Footer.jsx
    ├── ScrollTopButton.jsx     # 플로팅 TOP 버튼
    └── ScrollToTopOnNav.jsx    # 라우트 이동 시 스크롤 상단 이동
\`\`\`

## 🛠 사용 기술

- **React 18** (함수형 컴포넌트 + Hooks: \`useState\`, \`useEffect\`, \`useRef\`)
- **React Router v7** (\`BrowserRouter\`, \`Routes\`, \`useParams\`, \`useNavigate\` — 상세 페이지 라우팅)
- **Vite 6** (개발 서버 / 번들러)
- **순수 CSS** (CSS 변수, Grid/Flex, 미디어쿼리, 애니메이션) + **Pretendard** 웹폰트

## 🎨 디자인 포인트

- \`index.css\` 의 CSS 변수로 브랜드 컬러(올리브영 그린 \`#9ac61c\`, 세일 레드 \`#f0402a\`) 통일 관리
- 콘텐츠 폭 \`1020px\` 로 실제 사이트 레이아웃 재현
- 폰트는 온라인 시 \`Noto Sans KR\`, 오프라인 시 시스템 폰트(\`맑은 고딕\`)로 자동 대체
`},"Auto-PPT":{baseUrl:"https://raw.githubusercontent.com/05solar/Auto-PPT/HEAD/",text:`# Auto-PPT

문서·텍스트를 넣으면 **편집 가능한 네이티브 PowerPoint(.pptx)** 를 자동 생성하는 로컬 웹앱.
API 키 없이, 이미 로그인된 **Claude Code** 또는 **Codex** CLI(구독)를 웹에서 구동합니다.

![Auto-PPT 전체 화면](docs/images/full-screenshot.png)

---

## 실행 방법

### 1. 준비물
- **Python 3.10+** (Windows는 Microsoft Store 스텁이 아닌 실제 설치본)
- **Claude Code** 또는 **Codex** CLI 중 하나 — 설치 후 로그인
  - Claude Code: 터미널에서 \`claude\` 실행 → 로그인
  - Codex: 터미널에서 \`codex login\`

> **ppt-master 엔진**(\`ppt_master/\`, SVG→PPTX 변환 도구)은 이 저장소에 **함께 포함**돼 있어 별도 설치가 필요 없습니다. 이 앱은 [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)(MIT) 위에서 동작하며, 유래·수정 내역은 [docs/DERIVATION.md](docs/DERIVATION.md) 참고.

### 2. 설치
\`\`\`powershell
& "$env:LOCALAPPDATA\\Programs\\Python\\Python312\\python.exe" -m pip install -r app\\requirements.txt
\`\`\`

### 3. 실행
\`\`\`powershell
cd app
.\\run.ps1        # 또는 .\\run.bat
\`\`\`
→ 브라우저에서 **http://localhost:8000** 접속

1. **STEP 1** — 엔진(Claude Code / Codex) 선택 · 모델 선택(선택)
2. **STEP 2** — 스타일 · 페이지 수 · 텍스트/파일 입력 → **발표자료 생성**
3. **STEP 3** — 실시간 진행률 · 토큰 · ETA 확인 → 완료되면 \`.pptx\` 다운로드

> 동작 원리·파이프라인 상세는 [docs/HOW_IT_WORKS.md](docs/HOW_IT_WORKS.md).

---

## 폴더 구조
\`\`\`
Auto-PPT/
├─ app/            내가 만든 프로젝트 (웹앱 코드·실행 스크립트·폰트)
│  ├─ app.py engine.py config.py jobs.py playbook.py
│  ├─ pptx_font.py pptx_rules.py pptx_title.py   # 디자인 규약 강제 후처리
│  ├─ index.html  run.ps1  run.bat  requirements.txt  LICENSE
│  └─ assets/fonts/    Pretendard(임베드용) + OFL 라이선스
├─ ppt_master/     상류 엔진 (SVG→PPTX, MIT © Hugo He)
├─ docs/           문서 + 스크린샷
└─ README.md
\`\`\`

---

## 디자인 예시

생성되는 슬라이드는 스타일별 디자인 규약을 강제 적용받습니다(폰트는 Pretendard로 통일·임베드, 제목 크기 상한, 글로우 제거, 원형 숫자 중앙정렬, 하단 캡션/강조바 제거 등). 자세한 규칙은 [docs/HOW_IT_WORKS.md](docs/HOW_IT_WORKS.md#디자인-규칙-강제)에 정리돼 있습니다.

### Blueprint — 도면·시스템 구조도 (흰 배경)
![Blueprint 스타일](docs/images/blueprint.png)

### Dark Tech — 어두운 단색 배경·네온 액센트
![Dark Tech 스타일](docs/images/dark-tech.png)

### Light Academic — 밝은 배경·학회 발표풍
![Light Academic 스타일](docs/images/light-academic.png)

### Editorial — 타이포 중심·매거진 레이아웃
![Editorial 스타일](docs/images/editorial.png)

---

## 라이선스
- 앱 코드(\`app/\`): MIT (\`app/LICENSE\`)
- 엔진 \`ppt_master/\`: [ppt-master](https://github.com/hugohe3/ppt-master) — MIT © Hugo He (저장소에 포함, \`ppt_master/LICENSE\` 유지)
- 번들 폰트: [Pretendard](https://github.com/orioncactus/pretendard) — SIL Open Font License 1.1 (\`app/assets/fonts/LICENSE-Pretendard.txt\`)
`},GMG:{baseUrl:"https://raw.githubusercontent.com/project-GMG/frontend/HEAD/",text:`# GMG — 비선호 기반 모임 약속 서비스

참여자들이 **싫은 조건(비선호)** 을 먼저 걸러, 모두가 무난하게 받아들일 수 있는 **시간·장소·메뉴**를 찾아 주는 모임 약속 서비스입니다.

## 핵심 기능
- **비선호 우선 필터링** — 되는 시간 대신 "안 되는 시간/싫은 메뉴"를 모아 교집합을 좁혀 나갑니다.
- **시간대 조율** — 참여자별 가능/불가 시간을 그리드로 모아 공통 시간대를 자동으로 제안합니다.
- **장소·카테고리 추천** — 지역과 카테고리(한식·카페 등)를 골라 지도에서 후보를 함께 고릅니다.
- **지도 연동** — 카카오맵으로 위치를 확인하고 모임 장소를 확정합니다.

## 기술 구성
- **프론트엔드** — React (Vite) · 카카오맵 API · GA4
- **백엔드** — Spring Boot (모임 생성·참여·조율 API)
- **협업** — 팀 프로젝트 (프론트엔드 / 백엔드 분리 저장소)

> 데모·세부 구현은 상단 **깃허브 바로가기**(조직: project-GMG)에서 확인하세요.
`},"edu-msa":{baseUrl:"",text:`# 교육청 코드 공유 · 내부 프로그램 공유 플랫폼 (edu-msa)

교육청 구성원이 단기 교육에서 바이브 코딩으로 만든 프로그램을 내부 Gitea 레포지토리로
올리면, 본 플랫폼이 해당 코드를 가져와 **하나의 MSA 서비스로 띄워** 다른 직원들이
바로 사용할 수 있게 하는 사내 포털이다. (내부망 전제 — 소스는 외부로 나가지 않는다.)

- 프론트엔드: **React + Vite + TypeScript(TSX)**
- 백엔드: **Spring Boot 3 (Gradle Kotlin DSL)**
- 데이터베이스: **MariaDB**
- 오케스트레이션: **Kubernetes (MSA)**

바이브 코더가 어떤 언어로 만들든(파이썬, Node, Go 등), 표준 규격
([docs/MSA_SERVICE_SPEC.md](docs/architecture/MSA_SERVICE_SPEC.md))만 지키면 새로운 서비스로
등록·배포된다.

---

## 이 저장소의 구조

\`\`\`
edu-msa/
├── README.md · AGENT.md       # 전체 개요 · 에이전트 규칙 (루트 문서는 이 둘만)
├── docs/
│   ├── architecture/          # ARCHITECTURE(설계) · MSA_SERVICE_SPEC(표준 규격)
│   ├── guides/                # VIBE_CODING_GUIDE (바이브 코더용 안내)
│   ├── operations/            # DEPLOY(배포) · SECURITY(보안 하드닝)
│   └── planning/              # ROADMAP · VERSIONS · PROCESS(이력) · GITEA_PLAN · BASE_SERVICES_PLAN
├── html/                      # 시각 문서(로컬 전용 — 원격 미추적)
├── frontend/                  # React + Vite + TSX
│   ├── README·PROCESS·AGENT·DESIGN·TEST.md
│   ├── public/guides/         # 다운로드용 AI 빌드 지시서(AI_BUILD_SPEC + 스택 템플릿)
│   └── src/…
├── backend/                   # Spring Boot 3 (Java 21, Gradle Kotlin DSL)
│   ├── README·PROCESS·AGENT·DESIGN·TEST.md
│   └── src/main/java/com/edu/msa/…
├── auth-service/              # 인증 마이크로서비스 (Spring Boot 3, 자체 DB)
│   ├── README.md
│   └── src/main/java/com/edu/auth/…
├── examples/                  # 기본 업무 서비스 7개(카테고리별 1개, 각 폴더 = 배포 가능한 레포)
└── deploy/
    ├── docker-compose.yml     # mariadb + auth-db + auth-service + traefik(서브도메인) + backend
    ├── .env.example           # 시크릿 주입 예시 (EDU_JWT_SECRET 등)
    └── k8s/                   # namespace · 플랫폼 · 인증 · 서비스 템플릿 · RBAC
\`\`\`

## 인증 구조

계정 정보의 단일 소스는 \`auth-service\` 이며 전용 DB(\`auth-db\`)를 사용한다.
로그인 시 발급된 JWT 를 **각 서비스가 동일한 \`EDU_JWT_SECRET\` 으로 직접 검증**하므로,
인증이 필요한 요청마다 \`auth-service\` 를 호출하지 않는다.

\`\`\`
        사용자 → Frontend
                   │
        ┌──────────┴──────────┐
   /api/auth/**            /api/**
        ▼                     ▼
   auth-service            backend
        │                     │
        ▼                     ▼
     auth-db             platform-db
\`\`\`

역할은 \`USER\`(외부 사용자) · \`CODER\`(내부 직원) · \`ADMIN\`(운영 관리자) 세 가지다.
**회원가입은 항상 \`USER\`(최소 권한)로 생성**되고, 상향 권한(\`CODER\`/\`ADMIN\`)은 가입 시
\`requestRole\` 또는 로그인 후 마이페이지에서 **신청**만 접수된다. 실제 부여는 운영 관리자가
신청(\`role-request\`)을 승인해야 이뤄지므로, **자가 가입/신청만으로는 권한이 오르지 않는다.**
자세한 내용은 [auth-service/README.md](auth-service/README.md) 참고.

### 현재 구현된 인증 경로

\`auth-service\` 는 **인증 방식과 무관하게 JWT 를 발급하는 관문**으로 설계했다.

\`\`\`
  [LOCAL]  회원가입 → ID/PW 로그인 ─┐
                                    ├─→ auth-service ─→ JWT 발급 ─→ 각 서비스가 자체 검증
  [DEMO]   데모 로그인 (비밀번호 없음) ┘
\`\`\`

데모 로그인은 시연용 흐름이라 비밀번호를 입력하지 않지만, 발급되는 토큰은 일반 로그인과
같다. 따라서 데모로 진입해도 프로그램 등록·승인·배포 등 실제 API 를 그대로 사용할 수 있다.
좌측 하단의 권한 전환도 해당 역할의 데모 계정으로 토큰을 다시 받는 방식이라
서버가 판단하는 권한과 화면이 어긋나지 않는다.

데모 계정과 매핑, 비활성화 방법은 [auth-service/README.md](auth-service/README.md) 참고.

### 교육청 SSO 연동 (이번 범위 아님 · 추후 검토)

목표 아키텍처에는 교육청 홈페이지 사용자 정보를 SSO 로 연동하는 구성이 들어 있으나,
**이번 데모 범위에는 포함되지 않는다.** 현재 목표는 프로그램을 올리고 버전을 관리해
사용할 수 있는 플랫폼 데모를 완성하는 것이고, 인증은 그 데모가 돌아가는 데 필요한
수준(자체 ID/PW + 데모 로그인)까지만 만든다.

아래는 나중에 SSO 를 붙일 때를 위한 메모이며, 지금 구현된 것이 아니다.
자체 인증은 SSO 를 대체하는 것이 아니라 함께 쓰이는 경로로 본다.
외부 사용자는 교육청 계정이 없으므로 자체 회원가입이 계속 필요하기 때문이다.

\`\`\`
  [SSO]    교육청 SSO → 직원 정보 확인 ─┐
  [LOCAL]  회원가입 → ID/PW 로그인 ─────┼─→ auth-service ─→ JWT 발급
  [DEMO]   데모 로그인 (프론트 전용) ────┘   (거치지 않음)
\`\`\`

인증 경로와 역할의 대응은 다음을 기준으로 한다.

| 사용자 | 인증 경로 | 역할 |
| --- | --- | --- |
| 외부 사용자 | 자체 회원가입 + ID/PW | \`USER\` |
| 교육청 내부 직원 | 교육청 SSO | \`CODER\` |
| 운영 관리자 | 교육청 SSO + 권한 부여 | \`ADMIN\` |
| 시연 | 데모 로그인 | 전환하며 확인 |

**JWT 와 그 이후 구간은 그대로 재사용된다.** 인증 경로가 늘어나도 발급되는 토큰의
형태는 같으므로, 플랫폼 \`backend\` 를 포함한 자원 서버는 수정할 필요가 없다.

SSO 를 붙일 때 \`auth-service\` 에서 필요한 변경은 다음과 같다.

- \`accounts\` 에 인증 출처(\`auth_provider\`: \`LOCAL\` / \`SSO\`)와
  외부 식별값(\`external_subject\`) 컬럼 추가
- \`password_hash\` 를 nullable 로 변경 (SSO 계정은 비밀번호를 보관하지 않는다)
- SSO 콜백 처리와 외부 사용자 ↔ 계정 매핑, 최초 로그인 시 계정 자동 생성
- 직원 정보 기준으로 \`CODER\` 를 부여하는 규칙

인증을 기존 \`backend\` 에 넣지 않고 별도 서비스로 분리한 이유가 여기에 있다.
SSO 가 추가되어도 변경 범위가 \`auth-service\` 안에 갇힌다.

> 확인 필요: 자체 ID/PW 인증을 **외부 사용자용으로 계속 병행**할지, 아니면 SSO 도입 시
> **전면 교체**할지에 따라 위 설계가 달라진다. 현재는 역할 정의(\`USER\` = 외부 사용자)에
> 근거해 병행하는 것으로 보고 구현했다. SSO 착수 시점에 확정하면 된다.

## 개발 단계 (Milestones)

| 단계 | 내용 | 상태 |
| --- | --- | --- |
| 1 | 저장소 스캐폴드 + 프론트엔드 데모 (7개 화면, 데모 로그인/권한 전환) | 완료 |
| 2 | Spring 백엔드 CRUD + DB(현행 MariaDB) 연동 | 완료 |
| 3 | MSA 동적 배포 파이프라인 (내부 Gitea 레포 → 새 서비스) + K8s 매니페스트 | 완료 |

### MSA 배포 파이프라인 (Phase 3)

내부 Gitea 레포 등록 → \`service.yaml\`/\`Dockerfile\` 규격 검증 → 이미지 빌드 →
K8s 매니페스트(Deployment/Service/Ingress) 렌더링·적용 → 헬스 통과 → 공개.

- 표준 규격: [docs/MSA_SERVICE_SPEC.md](docs/architecture/MSA_SERVICE_SPEC.md)
- K8s 매니페스트: [deploy/k8s/](deploy/k8s/) (namespace·플랫폼·서비스 템플릿·RBAC)
- **기본 서비스 7개**: [examples/](examples/) — 교육청 업무 분야(category)별 **개인용 단발 도구** 1개씩.
  개인이 접속해 한 번의 작업(검사·변환·생성·계산·추출)을 처리하고 끝내는 도구이며(멀티유저 협업·상태
  관리 시스템 아님), 언어는 도구 특성에 맞게 선택했다.

  | 서비스 | 업무 분야 | 언어 | 접속(웹에서 바로 사용) |
  |---|---|---|---|
  | doc-proofreader | 공문서 오타·맞춤법 검사 | Go | \`http://doc-proofreader.localhost\` |
  | seat-maker | 학생 자리배치(엑셀 입출력) | Python | \`http://seat-maker.localhost\` |
  | timetable-checker | 시간표 충돌 검사·이미지 | TypeScript | \`http://timetable-checker.localhost\` |
  | travel-allowance | 국내출장 여비 계산 | C# | \`http://travel-allowance.localhost\` |
  | asset-label | 비품 QR 라벨 시트(PDF) | Java | \`http://asset-label.localhost\` |
  | data-summarizer | 표 데이터 통계·차트 | Python | \`http://data-summarizer.localhost\` |
  | doc-ocr | 문서 이미지 OCR 추출 | Python | \`http://doc-ocr.localhost\` |

  모두 비루트·\`/healthz\`·통일 오류포맷·개인 단발형(상태 저장·공유 없음). seed(\`programs.json\`)에 내부
  계정 소유로 등록 → 배포 시 \`edu-services\`. "웹에서 바로 사용"은 포트가 아니라 **서브도메인**
  (\`http://<slug>.localhost\`)으로 열린다(로컬은 Traefik 리버스 프록시가 Host 헤더로 라우팅).
  각 서비스·플랫폼에는 링크 미리보기(OG) 이미지와 파비콘이 포함된다.
- 백엔드 배포 API: \`POST /api/deploy/validate\`, \`POST /api/programs/{id}/deploy\`
- 배포 모드(\`EDU_DEPLOY_MODE\`): \`simulate\`(매니페스트 렌더만·기본) · \`docker\`(호스트 Docker로 **실제 컨테이너 기동**) · \`real\`(K8s \`kubectl apply\`)
- 레포 주소 형식: \`https://gitea.<도메인>/…\`(내부 Gitea — 운영은 \`EDU_DEPLOY_GITEA_ONLY=true\` 로 이 호스트만 허용) · \`local://examples/<slug>\`(플랫폼 동봉 기본 서비스)
- 자세한 배포/모드는 [backend/README.md](backend/README.md)
- **K8s로 띄우는 법**: [deploy/k8s/README.md](deploy/k8s/README.md) — 로컬 \`kind\` 리허설로
  내부 Gitea 레포의 서비스가 실제 **Pod + Service**로 떠서 응답하는 것까지 검증됨.

## 전체 스택 한 번에 실행

\`\`\`bash
# 0) 시크릿 준비 — auth-service 발급/백엔드 검증 공용 서명 키(≥32B)
cp deploy/.env.example deploy/.env        # EDU_JWT_SECRET 등 값 채우기

# 1) 백엔드 스택 (Docker): mariadb · auth-db · auth-service(:8089) · traefik(:80) · backend(:8088)
docker compose -f deploy/docker-compose.yml up --build -d

# 2) 프론트엔드 (백엔드 연동 모드)
cd frontend
npm install
npm run dev                               # http://localhost:5173
# VITE_USE_API 기본값은 true(백엔드 API 모드). false 로 두면 목업만으로 도는 오프라인 데모.
\`\`\`

- 접속: **플랫폼** http://localhost:5173 (로그인 또는 데모 로그인 후 이용) ·
  **배포된 기본 서비스** \`http://<slug>.localhost\` (예: \`http://doc-proofreader.localhost\`).
- 프론트 개발 서버 프록시: \`/api/auth\` → auth-service(\`localhost:8089\`), \`/api\` → backend(\`localhost:8088\`).
- \`EDU_JWT_SECRET\` 미설정 시 compose 가 기동을 거부한다(의도된 안전장치). 배포 서비스는 Traefik(:80)이
  \`<slug>.localhost\` Host 로 각 컨테이너에 라우팅한다.

### Kubernetes 로 한 번에 (kind 로컬 / 실서버 겸용)

\`\`\`bash
./deploy/bootstrap.sh up            # 또는:  make up   (kind 자동 생성 → 이미지 빌드/푸시 → 코어+운영스택)
# 접속: http://edu.localhost
\`\`\`
실서버(GPU 박스 포함)·GPU 테넌트 설정은 **[DEPLOY.md](docs/operations/DEPLOY.md)** 참고.

## 문서 안내 (문서 지도)

| 문서 | 내용 |
| --- | --- |
| [DEPLOY.md](docs/operations/DEPLOY.md) | **원커맨드 배포 & GPU 서버 안내** (K8s 한 번에·실서버·GPU) |
| [VERSIONS.md](docs/planning/VERSIONS.md) | **버전 관리 & 고도화 이력** — 단계별 이력·태깅 규칙·Gitea 계획·백로그·진행 프로세스 |
| [docs/GITEA_PLAN.md](docs/planning/GITEA_PLAN.md) | 내부 Gitea 구축 상세 계획 — 6단계 작업·기간·검증 시나리오 |
| [deploy/PRODUCTION.md](deploy/PRODUCTION.md) | 실서버(k3s·Calico·레지스트리·도메인/TLS·MariaDB·시크릿·GPU) 상세 가이드 |
| [PRODUCTION_READINESS.md](docs/operations/PRODUCTION_READINESS.md) | Production 배포 전 점검 결과(1~3차) — 판정·실측 기준선 |
| [PRODUCTION_INFRA_REQUIREMENTS.md](docs/operations/PRODUCTION_INFRA_REQUIREMENTS.md) | **인프라 담당자 전달용** — 운영 환경 요구사항·준비 체크리스트·재개 게이트 |
| [docs/VIBE_CODING_GUIDE.md](docs/guides/VIBE_CODING_GUIDE.md) | 바이브 코더가 먼저 읽는 사람용 안내 |
| [docs/MSA_SERVICE_SPEC.md](docs/architecture/MSA_SERVICE_SPEC.md) | 표준 서비스 규격(기술 계약) |
| [docs/ARCHITECTURE.md](docs/architecture/ARCHITECTURE.md) | 전체 아키텍처 설계 |
| \`frontend/public/guides/AI_BUILD_SPEC.md\` | **다운로드용 AI 지시서** — AI에 첨부해 규격대로 프로젝트 생성 (+ 파이썬/Node/정적 템플릿) |
| [examples/README.md](examples/README.md) | 업무 분야별 실동작 예제 목록·실행법 |
| [deploy/k8s/README.md](deploy/k8s/README.md) | K8s 매니페스트 구성·적용 순서 |
| [SECURITY.md](docs/operations/SECURITY.md) | 멀티테넌트 보안 하드닝(신뢰 등급·격리·검증) |
| [deploy/PROCESS.md](deploy/PROCESS.md) · [deploy/AGENT.md](deploy/AGENT.md) | 인프라 진행 이력 · 작업 규칙 |
| [frontend/README.md](frontend/README.md) · [backend/README.md](backend/README.md) | 각 앱 실행·구조·API |
| 각 폴더 \`AGENT.md\` · \`DESIGN.md\` · \`TEST.md\` · \`PROCESS.md\` | 작업 규칙 · 설계 원칙 · 테스트 · 진행 이력 |

> 메타 문서(README/PROCESS/AGENT/DESIGN/TEST)는 작업 시마다 갱신한다. ([AGENT.md](AGENT.md))

## 핵심 규칙 (전 팀 공통)

1. **이모지/이모티콘 사용 금지.** 모든 아이콘은 인라인 SVG 아이콘 세트를 사용한다.
   ([frontend/DESIGN.md](frontend/DESIGN.md) 참조)
2. **화면·기능 단위로 폴더/파일을 분리한다.** 프론트는 페이지 폴더마다
   \`*.tsx\`와 \`*.css\`를 같은 폴더에 둔다. 백엔드는 기능별로 패키지를 나눈다.
3. **메타 문서(README/PROCESS/AGENT/DESIGN/TEST md)는 하나의 작업을 수행할 때마다
   갱신한다.** ([AGENT.md](AGENT.md) 참조)

## 데모 로그인

로그인 화면의 **데모로 시작하기** 버튼으로 계정 입력 없이 진입한다.
좌측 하단 "시연용 권한 전환"으로 외부 사용자 / 내부 직원 / 운영 관리자 역할을 바꿔
볼 수 있다. (실행 방법은 위 "전체 스택 한 번에 실행" 참고)

데모 진입도 \`auth-service\` 에서 실제 토큰을 발급받으므로, 등록·승인·배포 등
플랫폼 API 를 그대로 사용할 수 있다. 권한 전환 역시 해당 역할의 데모 계정으로
토큰을 다시 받는다.

아이디와 비밀번호로 로그인하려면 데모 계정을 쓰면 된다. 계정 목록과 공통 임시
비밀번호는 [auth-service/README.md](auth-service/README.md) 참고.

아이디 찾기·비밀번호 찾기는 화면과 입력값 검증까지 동작하며, 실제 조회와 메일 발송은
SMTP 연동 이후 완성된다.
`}};function $0(o,x,D){const f=x.join("|");return bt.useMemo(()=>{const b={};for(const A of x){const z=qd[A];b[A]=z?{status:"done",text:z.text,baseUrl:z.baseUrl}:{status:"missing",text:"",baseUrl:""}}return b},[f])}function I0(o){bt.useEffect(()=>{const x=new WeakSet,D=new IntersectionObserver(A=>{A.forEach(z=>{z.isIntersecting&&(z.target.classList.add("is-in"),D.unobserve(z.target))})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});(()=>{document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(A=>{x.has(A)||(x.add(A),D.observe(A))})})();const b=window.setTimeout(()=>{document.querySelectorAll("[data-reveal]").forEach(A=>A.classList.add("is-in"))},2500);return()=>{D.disconnect(),window.clearTimeout(b)}},[o])}const P0={JavaScript:"#f1e05a",TypeScript:"#3178c6",Python:"#3572A5",Java:"#b07219",HTML:"#e34c26",CSS:"#563d7c",SCSS:"#c6538c",Go:"#00ADD8",Rust:"#dea584","C++":"#f34b7d",C:"#555555","C#":"#178600",Shell:"#89e051",Vue:"#41b883",Dart:"#00B4AB",Kotlin:"#A97BFF",Swift:"#F05138",Ruby:"#701516",PHP:"#4F5D95",Jupyter:"#DA5B0B","Jupyter Notebook":"#DA5B0B",Dockerfile:"#384d54"},wu=o=>o&&P0[o]||"#94a3b8",tv=o=>{if(!o)return"";const x=new Date(o);return`${x.getFullYear()}.${String(x.getMonth()+1).padStart(2,"0")} 업데이트`},Rd=o=>o.startsWith("http")?o:`https://${o}`,ev=o=>{const x=[];let D=new Array(7).fill(null);return o.forEach(f=>{const b=new Date(`${f.date}T00:00:00`).getDay();D[b]=f,b===6&&(x.push(D),D=new Array(7).fill(null))}),D.some(f=>f)&&x.push(D),x},lv=[{name:"TypeScript",re:/\btypescript\b|\btsx\b/i},{name:"JavaScript",re:/\bjavascript\b|\bes6\b/i},{name:"Python",re:/\bpython\b/i},{name:"Java",re:/\bjava\b/i},{name:"Kotlin",re:/\bkotlin\b/i},{name:"Swift",re:/\bswift\b/i},{name:"Dart",re:/\bdart\b/i},{name:"Ruby",re:/\bruby\b/i},{name:"PHP",re:/\bphp\b/i},{name:"C#",re:/\bc#|\bc\s?sharp\b/i},{name:"C++",re:/\bc\+\+/i},{name:"HTML",re:/\bhtml5?\b/i},{name:"CSS",re:/\bcss3?\b/i},{name:"Sass",re:/\bs[ac]ss\b/i},{name:"React",re:/\breact\b/i},{name:"Next.js",re:/\bnext\.?js\b/i},{name:"Nuxt",re:/\bnuxt\b/i},{name:"Vue",re:/\bvue\b/i},{name:"Svelte",re:/\bsvelte\b/i},{name:"Angular",re:/\bangular\b/i},{name:"Vite",re:/\bvite\b/i},{name:"Tailwind CSS",re:/\btailwind\b/i},{name:"Redux",re:/\bredux\b/i},{name:"Zustand",re:/\bzustand\b/i},{name:"styled-components",re:/styled-components/i},{name:"Streamlit",re:/\bstreamlit\b/i},{name:"Node.js",re:/\bnode(\.?js)?\b/i},{name:"Express",re:/\bexpress\b/i},{name:"NestJS",re:/\bnest(\.?js)?\b/i},{name:"FastAPI",re:/\bfastapi\b/i},{name:"Flask",re:/\bflask\b/i},{name:"Django",re:/\bdjango\b/i},{name:"Spring Boot",re:/\bspring\s?boot\b/i},{name:"Spring",re:/\bspring\b(?!\s?boot)/i},{name:"GraphQL",re:/\bgraphql\b/i},{name:"PostgreSQL",re:/\bpostgres(ql)?\b/i},{name:"MySQL",re:/\bmysql\b/i},{name:"MongoDB",re:/\bmongo(db)?\b/i},{name:"Redis",re:/\bredis\b/i},{name:"SQLite",re:/\bsqlite\b/i},{name:"Supabase",re:/\bsupabase\b/i},{name:"Firebase",re:/\bfirebase\b/i},{name:"Prisma",re:/\bprisma\b/i},{name:"OpenAI API",re:/\bopenai\b/i},{name:"LangChain",re:/\blangchain\b/i},{name:"RAG",re:/\brag\b/i},{name:"MCP",re:/\bmcp\b/i},{name:"PyTorch",re:/\bpytorch\b/i},{name:"TensorFlow",re:/\btensorflow\b/i},{name:"Docker",re:/\bdocker\b/i},{name:"Kubernetes",re:/\bkubernetes\b|\bk8s\b/i},{name:"AWS",re:/\baws\b/i},{name:"Vercel",re:/\bvercel\b/i},{name:"Netlify",re:/\bnetlify\b/i},{name:"GitHub Actions",re:/\bgithub\s?actions\b/i},{name:"Nginx",re:/\bnginx\b/i},{name:"n8n",re:/\bn8n\b/i},{name:"Swagger",re:/\bswagger\b/i},{name:"Jupyter",re:/\bjupyter\b/i},{name:"Kakao Map",re:/\bkakao\s?map\b/i},{name:"Google Maps",re:/\bgoogle\s?maps\b/i}];function Yd(o){const x=[o.readme||"",o.description||"",(o.name||"").replace(/[-_]/g," "),(o.topics||[]).join(" ")].join(`
`),D=new Set,f=[],b=A=>{D.has(A)||(D.add(A),f.push(A))};o.language&&b(o.language);for(const A of lv)A.re.test(x)&&b(A.name);return f.slice(0,8)}const nv="/PF/assets/checkmitev1-cover-BnecImp4.png",av="/PF/assets/jbig-cover-BS7GAND6.png",uv="/PF/assets/edu-msa-cover-DFKxmEPu.png",cv="/PF/assets/go-cover-BtvPwb4Q.png",iv="/PF/assets/msa-restaurant-cover-D1aTtphB.png",sv="/PF/assets/by-tomorrow-cover-FdAdqNxz.png",fv="/PF/assets/glml-cover-8f1UrO_X.png",ov="/PF/assets/gmg-cover-ya7No8Ee.png",rv="/PF/assets/rag-agent-cover-BKyD9TUn.png",dv="/PF/assets/mcp-shopbot-cover-D-ntZOOc.png",mv="/PF/assets/ov-clonecoding-cover-C8BMnGqb.png",hv="/PF/assets/auto-ppt-cover-Cq02JyqB.png",Qd={checkmiteV1:nv,jbig:av,"edu-msa":uv,GO:cv,"MSA-restaurant":iv,"By-Tomorrow":sv,GLML:fv,GMG:ov,"RAG-agent":rv,"MCP-shopbot":dv,"OV-clonecoding":mv,"Auto-PPT":hv},vv=wt.githubUsername.trim()||"05solar",pv=[{name:"checkmiteV1",language:"TypeScript"},{name:"jbig",language:"Python"},{name:"edu-msa",language:"TypeScript",url:""},{name:"GO",language:"TypeScript",demoUrl:"https://05solar.github.io/GO/"},{name:"MSA-restaurant",language:"Java"},{name:"By-Tomorrow",language:"Java"},{name:"GLML",language:"TypeScript"},{name:"GMG",language:"Java",url:"https://github.com/project-GMG"},{name:"RAG-agent",language:"Python"},{name:"MCP-shopbot",language:"Python"},{name:"OV-clonecoding",language:"JavaScript"},{name:"Auto-PPT",language:"Python"}],gv=pv.map((o,x)=>{const D=wt.descriptions[o.name]||"",f=qd[o.name];return{id:-1-x,name:o.name,url:o.url??`https://github.com/${vv}/${o.name}`,preview:D||"프로젝트 소개는 GitHub 저장소에서 확인하세요.",readmeText:(f==null?void 0:f.text)||"",readmeBase:(f==null?void 0:f.baseUrl)||"",image:Qd[o.name]??null,language:o.language,langColor:wu(o.language),stars:0,forks:0,updatedText:"",stack:Yd({readme:D,name:o.name,language:o.language}),focus:wt.focus[o.name]||[],demoUrl:o.demoUrl??null}}),yv=[{name:"TypeScript",pct:30},{name:"JavaScript",pct:28},{name:"Python",pct:22},{name:"HTML",pct:9},{name:"CSS",pct:7},{name:"Java",pct:4}].map(({name:o,pct:x})=>({name:o,color:wu(o),width:`${x}%`,pctText:`${x}%`}));function bv(){const o=wt.githubUsername.trim()||"05solar",x=Math.max(3,Math.min(12,wt.projectCount)),[D,f]=bt.useState(0),{user:b,repos:A,reposError:z,contrib:V,contribError:_,reload:v}=F0(o),Y=bt.useMemo(()=>{const J=new Set(wt.excludedRepos),xt=A.filter(pt=>!J.has(pt.name)),Ot=wt.pinnedRepos.map(pt=>xt.find(jt=>jt.name===pt)).filter(pt=>!!pt),Tt=new Set(Ot.map(pt=>pt.name)),Zt=xt.filter(pt=>!Tt.has(pt.name)).sort((pt,jt)=>jt.stargazers_count-pt.stargazers_count||new Date(jt.updated_at).getTime()-new Date(pt.updated_at).getTime());return[...Ot,...Zt]},[A]),U=bt.useMemo(()=>Y.slice(0,x+6).map(J=>J.name),[Y,x]),q=$0(o,U),st=bt.useMemo(()=>{const J=new Set(wt.pinnedRepos);return Y.filter(xt=>{var Tt;const Ot=(Tt=q[xt.name])==null?void 0:Tt.status;return J.has(xt.name)?Ot==="done"||Ot==="missing":Ot==="done"}).slice(0,x)},[Y,q,x]);I0(`${!!b}-${A.length}-${!!V}`);const nt=()=>{f(J=>J+1),v()},G=bt.useMemo(()=>{const J=wt.displayName.trim()||(b==null?void 0:b.name)||o,xt=wt.tagline.trim()||"풀스택 개발자",Ot=(J||"D").trim().charAt(0).toUpperCase(),Tt=st.map(O=>{const K=O.homepage&&String(O.homepage).trim(),dt=q[O.name],yt=(dt==null?void 0:dt.text)||"";return{id:O.id,name:O.name,url:O.html_url,readmeText:yt,readmeBase:(dt==null?void 0:dt.baseUrl)||"",image:Qd[O.name]||G0(yt,(dt==null?void 0:dt.baseUrl)||""),preview:wt.descriptions[O.name]||U0(yt)||O.description||"README는 등록되어 있지만 미리볼 설명이 없습니다. 카드를 눌러 전체 내용을 확인하세요.",language:O.language||"기타",langColor:wu(O.language),stars:O.stargazers_count,forks:O.forks_count,updatedText:tv(O.updated_at),stack:Yd({readme:yt,description:O.description,name:O.name,language:O.language,topics:O.topics}),focus:wt.focus[O.name]||[],demoUrl:K?Rd(K):null}}),Zt=U.some(O=>{var K;return((K=q[O])==null?void 0:K.status)==="error"}),pt={};A.forEach(O=>{O.language&&(pt[O.language]=(pt[O.language]||0)+1)});const jt=Object.entries(pt).sort((O,K)=>K[1]-O[1]),$=jt.reduce((O,K)=>O+K[1],0),Lt=jt.slice(0,6).map(([O,K])=>{const dt=$?Math.round(K/$*100):0;return{name:O,color:wu(O),width:`${dt}%`,pctText:`${dt}%`}}),ne=V?(V.contributions||[]).reduce((O,K)=>O+K.count,0):null,Ie=ne!=null?ne.toLocaleString():"—",ve=V?ev(V.contributions||[]):[],Kt=(b==null?void 0:b.bio)||"// 빠르게 배우고, 끝까지 책임지는 개발자",Ce=wt.email.trim()||(b==null?void 0:b.email)||`${o}@gmail.com`,Jt=(b==null?void 0:b.blog)&&String(b.blog).trim(),ae=Jt?Rd(Jt):`https://github.com/${o}`,T=Jt?Jt.replace(/^https?:\/\//,""):(b==null?void 0:b.location)||"블로그 / 웹사이트",R=Jt?"Website":b!=null&&b.location?"Location":"Website",w=A.length>0,at=!!V,ft=new Map(Tt.map(O=>[O.name,O])),m=new Map(gv.map(O=>[O.name,O])),N=wt.pinnedRepos.map(O=>ft.get(O)||m.get(O)).filter(O=>!!O),C=!w&&!z,B=Lt.length>0?Lt:C?[]:yv,Z=B.length>0;return{name:J,tagline:xt,initial:Ot,githubUrl:`https://github.com/${o}`,linkedinUrl:wt.linkedinUrl.trim(),avatarUrl:`https://github.com/${o}.png?size=240`,bio:Kt,email:Ce,blogUrl:ae,blogText:T,blogLabel:R,topRepos:N,langStats:B,statContrib:Ie,weeks:ve,readmeErrored:Zt,showReposSkeleton:!1,showReposError:!1,showReposEmpty:!1,langReady:Z,showLangSkeleton:C&&B.length===0,showLangError:!1,contribReady:at,showContribSkeleton:!at&&!_,showContribError:!at&&_}},[b,A,z,V,_,q,st,U,o]);return i.jsxs("div",{className:"page",children:[i.jsx(A0,{name:G.name,initial:G.initial}),i.jsx(N0,{name:G.name,tagline:G.tagline,login:o,githubUrl:G.githubUrl,linkedinUrl:G.linkedinUrl,avatarUrl:G.avatarUrl}),i.jsx(O0,{langStats:G.langStats,langReady:G.langReady,showSkeleton:G.showLangSkeleton,showError:G.showLangError}),i.jsx(w0,{statContrib:G.statContrib,weeks:G.weeks,contribReady:G.contribReady,showSkeleton:G.showContribSkeleton,showError:G.showContribError}),i.jsx(K0,{}),i.jsx(Y0,{topRepos:G.topRepos,githubUrl:G.githubUrl,showSkeleton:G.showReposSkeleton,showError:G.showReposError,showEmpty:G.showReposEmpty,readmeErrored:G.readmeErrored,onRetry:nt}),i.jsx(k0,{login:o,email:G.email,githubUrl:G.githubUrl,linkedinUrl:G.linkedinUrl}),i.jsx(J0,{name:G.name,login:o}),i.jsx(W0,{})]})}S0.createRoot(document.getElementById("root")).render(i.jsx(bt.StrictMode,{children:i.jsx(bv,{})}));
