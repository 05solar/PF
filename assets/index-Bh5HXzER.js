(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))f(b);new MutationObserver(b=>{for(const A of b)if(A.type==="childList")for(const O of A.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&f(O)}).observe(document,{childList:!0,subtree:!0});function _(b){const A={};return b.integrity&&(A.integrity=b.integrity),b.referrerPolicy&&(A.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?A.credentials="include":b.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function f(b){if(b.ep)return;b.ep=!0;const A=_(b);fetch(b.href,A)}})();var os={exports:{}},Ea={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function d0(){if(Ed)return Ea;Ed=1;var r=Symbol.for("react.transitional.element"),E=Symbol.for("react.fragment");function _(f,b,A){var O=null;if(A!==void 0&&(O=""+A),b.key!==void 0&&(O=""+b.key),"key"in b){A={};for(var Y in b)Y!=="key"&&(A[Y]=b[Y])}else A=b;return b=A.ref,{$$typeof:r,type:f,key:O,ref:b!==void 0?b:null,props:A}}return Ea.Fragment=E,Ea.jsx=_,Ea.jsxs=_,Ea}var xd;function m0(){return xd||(xd=1,os.exports=d0()),os.exports}var i=m0(),rs={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function h0(){if(Td)return k;Td=1;var r=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),O=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),Q=Symbol.iterator;function st(m){return m===null||typeof m!="object"?null:(m=Q&&m[Q]||m["@@iterator"],typeof m=="function"?m:null)}var nt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,J={};function xt(m,N,C){this.props=m,this.context=N,this.refs=J,this.updater=C||nt}xt.prototype.isReactComponent={},xt.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},xt.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Ot(){}Ot.prototype=xt.prototype;function Tt(m,N,C){this.props=m,this.context=N,this.refs=J,this.updater=C||nt}var Zt=Tt.prototype=new Ot;Zt.constructor=Tt,G(Zt,xt.prototype),Zt.isPureReactComponent=!0;var vt=Array.isArray;function jt(){}var F={H:null,A:null,T:null,S:null},Lt=Object.prototype.hasOwnProperty;function ne(m,N,C){var B=C.ref;return{$$typeof:r,type:m,key:N,ref:B!==void 0?B:null,props:C}}function Pe(m,N){return ne(m.type,N,m.props)}function pe(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function Kt(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(C){return N[C]})}var Ce=/\/+/g;function Jt(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Kt(""+m.key):N.toString(36)}function ae(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(jt,jt):(m.status="pending",m.then(function(N){m.status==="pending"&&(m.status="fulfilled",m.value=N)},function(N){m.status==="pending"&&(m.status="rejected",m.reason=N)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function T(m,N,C,B,Z){var z=typeof m;(z==="undefined"||z==="boolean")&&(m=null);var K=!1;if(m===null)K=!0;else switch(z){case"bigint":case"string":case"number":K=!0;break;case"object":switch(m.$$typeof){case r:case E:K=!0;break;case q:return K=m._init,T(K(m._payload),N,C,B,Z)}}if(K)return Z=Z(m),K=B===""?"."+Jt(m,0):B,vt(Z)?(C="",K!=null&&(C=K.replace(Ce,"$&/")+"/"),T(Z,N,C,"",function(Dn){return Dn})):Z!=null&&(pe(Z)&&(Z=Pe(Z,C+(Z.key==null||m&&m.key===Z.key?"":(""+Z.key).replace(Ce,"$&/")+"/")+K)),N.push(Z)),1;K=0;var dt=B===""?".":B+":";if(vt(m))for(var yt=0;yt<m.length;yt++)B=m[yt],z=dt+Jt(B,yt),K+=T(B,N,C,z,Z);else if(yt=st(m),typeof yt=="function")for(m=yt.call(m),yt=0;!(B=m.next()).done;)B=B.value,z=dt+Jt(B,yt++),K+=T(B,N,C,z,Z);else if(z==="object"){if(typeof m.then=="function")return T(ae(m),N,C,B,Z);throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return K}function R(m,N,C){if(m==null)return m;var B=[],Z=0;return T(m,B,"","",function(z){return N.call(C,z,Z++)}),B}function w(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(C){(m._status===0||m._status===-1)&&(m._status=1,m._result=C)},function(C){(m._status===0||m._status===-1)&&(m._status=2,m._result=C)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var at=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ft={map:R,forEach:function(m,N,C){R(m,function(){N.apply(this,arguments)},C)},count:function(m){var N=0;return R(m,function(){N++}),N},toArray:function(m){return R(m,function(N){return N})||[]},only:function(m){if(!pe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return k.Activity=U,k.Children=ft,k.Component=xt,k.Fragment=_,k.Profiler=b,k.PureComponent=Tt,k.StrictMode=f,k.Suspense=D,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,k.__COMPILER_RUNTIME={__proto__:null,c:function(m){return F.H.useMemoCache(m)}},k.cache=function(m){return function(){return m.apply(null,arguments)}},k.cacheSignal=function(){return null},k.cloneElement=function(m,N,C){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=G({},m.props),Z=m.key;if(N!=null)for(z in N.key!==void 0&&(Z=""+N.key),N)!Lt.call(N,z)||z==="key"||z==="__self"||z==="__source"||z==="ref"&&N.ref===void 0||(B[z]=N[z]);var z=arguments.length-2;if(z===1)B.children=C;else if(1<z){for(var K=Array(z),dt=0;dt<z;dt++)K[dt]=arguments[dt+2];B.children=K}return ne(m.type,Z,B)},k.createContext=function(m){return m={$$typeof:O,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:A,_context:m},m},k.createElement=function(m,N,C){var B,Z={},z=null;if(N!=null)for(B in N.key!==void 0&&(z=""+N.key),N)Lt.call(N,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Z[B]=N[B]);var K=arguments.length-2;if(K===1)Z.children=C;else if(1<K){for(var dt=Array(K),yt=0;yt<K;yt++)dt[yt]=arguments[yt+2];Z.children=dt}if(m&&m.defaultProps)for(B in K=m.defaultProps,K)Z[B]===void 0&&(Z[B]=K[B]);return ne(m,z,Z)},k.createRef=function(){return{current:null}},k.forwardRef=function(m){return{$$typeof:Y,render:m}},k.isValidElement=pe,k.lazy=function(m){return{$$typeof:q,_payload:{_status:-1,_result:m},_init:w}},k.memo=function(m,N){return{$$typeof:p,type:m,compare:N===void 0?null:N}},k.startTransition=function(m){var N=F.T,C={};F.T=C;try{var B=m(),Z=F.S;Z!==null&&Z(C,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(jt,at)}catch(z){at(z)}finally{N!==null&&C.types!==null&&(N.types=C.types),F.T=N}},k.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},k.use=function(m){return F.H.use(m)},k.useActionState=function(m,N,C){return F.H.useActionState(m,N,C)},k.useCallback=function(m,N){return F.H.useCallback(m,N)},k.useContext=function(m){return F.H.useContext(m)},k.useDebugValue=function(){},k.useDeferredValue=function(m,N){return F.H.useDeferredValue(m,N)},k.useEffect=function(m,N){return F.H.useEffect(m,N)},k.useEffectEvent=function(m){return F.H.useEffectEvent(m)},k.useId=function(){return F.H.useId()},k.useImperativeHandle=function(m,N,C){return F.H.useImperativeHandle(m,N,C)},k.useInsertionEffect=function(m,N){return F.H.useInsertionEffect(m,N)},k.useLayoutEffect=function(m,N){return F.H.useLayoutEffect(m,N)},k.useMemo=function(m,N){return F.H.useMemo(m,N)},k.useOptimistic=function(m,N){return F.H.useOptimistic(m,N)},k.useReducer=function(m,N,C){return F.H.useReducer(m,N,C)},k.useRef=function(m){return F.H.useRef(m)},k.useState=function(m){return F.H.useState(m)},k.useSyncExternalStore=function(m,N,C){return F.H.useSyncExternalStore(m,N,C)},k.useTransition=function(){return F.H.useTransition()},k.version="19.2.6",k}var jd;function ys(){return jd||(jd=1,rs.exports=h0()),rs.exports}var Et=ys(),ds={exports:{}},xa={},ms={exports:{}},hs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function p0(){return Md||(Md=1,(function(r){function E(T,R){var w=T.length;T.push(R);t:for(;0<w;){var at=w-1>>>1,ft=T[at];if(0<b(ft,R))T[at]=R,T[w]=ft,w=at;else break t}}function _(T){return T.length===0?null:T[0]}function f(T){if(T.length===0)return null;var R=T[0],w=T.pop();if(w!==R){T[0]=w;t:for(var at=0,ft=T.length,m=ft>>>1;at<m;){var N=2*(at+1)-1,C=T[N],B=N+1,Z=T[B];if(0>b(C,w))B<ft&&0>b(Z,C)?(T[at]=Z,T[B]=w,at=B):(T[at]=C,T[N]=w,at=N);else if(B<ft&&0>b(Z,w))T[at]=Z,T[B]=w,at=B;else break t}}return R}function b(T,R){var w=T.sortIndex-R.sortIndex;return w!==0?w:T.id-R.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;r.unstable_now=function(){return A.now()}}else{var O=Date,Y=O.now();r.unstable_now=function(){return O.now()-Y}}var D=[],p=[],q=1,U=null,Q=3,st=!1,nt=!1,G=!1,J=!1,xt=typeof setTimeout=="function"?setTimeout:null,Ot=typeof clearTimeout=="function"?clearTimeout:null,Tt=typeof setImmediate<"u"?setImmediate:null;function Zt(T){for(var R=_(p);R!==null;){if(R.callback===null)f(p);else if(R.startTime<=T)f(p),R.sortIndex=R.expirationTime,E(D,R);else break;R=_(p)}}function vt(T){if(G=!1,Zt(T),!nt)if(_(D)!==null)nt=!0,jt||(jt=!0,Kt());else{var R=_(p);R!==null&&ae(vt,R.startTime-T)}}var jt=!1,F=-1,Lt=5,ne=-1;function Pe(){return J?!0:!(r.unstable_now()-ne<Lt)}function pe(){if(J=!1,jt){var T=r.unstable_now();ne=T;var R=!0;try{t:{nt=!1,G&&(G=!1,Ot(F),F=-1),st=!0;var w=Q;try{e:{for(Zt(T),U=_(D);U!==null&&!(U.expirationTime>T&&Pe());){var at=U.callback;if(typeof at=="function"){U.callback=null,Q=U.priorityLevel;var ft=at(U.expirationTime<=T);if(T=r.unstable_now(),typeof ft=="function"){U.callback=ft,Zt(T),R=!0;break e}U===_(D)&&f(D),Zt(T)}else f(D);U=_(D)}if(U!==null)R=!0;else{var m=_(p);m!==null&&ae(vt,m.startTime-T),R=!1}}break t}finally{U=null,Q=w,st=!1}R=void 0}}finally{R?Kt():jt=!1}}}var Kt;if(typeof Tt=="function")Kt=function(){Tt(pe)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Jt=Ce.port2;Ce.port1.onmessage=pe,Kt=function(){Jt.postMessage(null)}}else Kt=function(){xt(pe,0)};function ae(T,R){F=xt(function(){T(r.unstable_now())},R)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lt=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return Q},r.unstable_next=function(T){switch(Q){case 1:case 2:case 3:var R=3;break;default:R=Q}var w=Q;Q=R;try{return T()}finally{Q=w}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var w=Q;Q=T;try{return R()}finally{Q=w}},r.unstable_scheduleCallback=function(T,R,w){var at=r.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?at+w:at):w=at,T){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=w+ft,T={id:q++,callback:R,priorityLevel:T,startTime:w,expirationTime:ft,sortIndex:-1},w>at?(T.sortIndex=w,E(p,T),_(D)===null&&T===_(p)&&(G?(Ot(F),F=-1):G=!0,ae(vt,w-at))):(T.sortIndex=ft,E(D,T),nt||st||(nt=!0,jt||(jt=!0,Kt()))),T},r.unstable_shouldYield=Pe,r.unstable_wrapCallback=function(T){var R=Q;return function(){var w=Q;Q=R;try{return T.apply(this,arguments)}finally{Q=w}}}})(hs)),hs}var Nd;function v0(){return Nd||(Nd=1,ms.exports=p0()),ms.exports}var ps={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function g0(){if(_d)return kt;_d=1;var r=ys();function E(D){var p="https://react.dev/errors/"+D;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)p+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+D+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var f={d:{f:_,r:function(){throw Error(E(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},b=Symbol.for("react.portal");function A(D,p,q){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:U==null?null:""+U,children:D,containerInfo:p,implementation:q}}var O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Y(D,p){if(D==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,kt.createPortal=function(D,p){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(E(299));return A(D,p,null,q)},kt.flushSync=function(D){var p=O.T,q=f.p;try{if(O.T=null,f.p=2,D)return D()}finally{O.T=p,f.p=q,f.d.f()}},kt.preconnect=function(D,p){typeof D=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,f.d.C(D,p))},kt.prefetchDNS=function(D){typeof D=="string"&&f.d.D(D)},kt.preinit=function(D,p){if(typeof D=="string"&&p&&typeof p.as=="string"){var q=p.as,U=Y(q,p.crossOrigin),Q=typeof p.integrity=="string"?p.integrity:void 0,st=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;q==="style"?f.d.S(D,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:U,integrity:Q,fetchPriority:st}):q==="script"&&f.d.X(D,{crossOrigin:U,integrity:Q,fetchPriority:st,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kt.preinitModule=function(D,p){if(typeof D=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var q=Y(p.as,p.crossOrigin);f.d.M(D,{crossOrigin:q,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&f.d.M(D)},kt.preload=function(D,p){if(typeof D=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var q=p.as,U=Y(q,p.crossOrigin);f.d.L(D,q,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kt.preloadModule=function(D,p){if(typeof D=="string")if(p){var q=Y(p.as,p.crossOrigin);f.d.m(D,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:q,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else f.d.m(D)},kt.requestFormReset=function(D){f.d.r(D)},kt.unstable_batchedUpdates=function(D,p){return D(p)},kt.useFormState=function(D,p,q){return O.H.useFormState(D,p,q)},kt.useFormStatus=function(){return O.H.useHostTransitionStatus()},kt.version="19.2.6",kt}var Dd;function y0(){if(Dd)return ps.exports;Dd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),ps.exports=g0(),ps.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function b0(){if(Od)return xa;Od=1;var r=v0(),E=ys(),_=y0();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function A(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function O(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Y(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(A(t)!==t)throw Error(f(188))}function p(t){var e=t.alternate;if(!e){if(e=A(t),e===null)throw Error(f(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return D(a),t;if(u===n)return D(a),e;u=u.sibling}throw Error(f(188))}if(l.return!==n.return)l=a,n=u;else{for(var c=!1,s=a.child;s;){if(s===l){c=!0,l=a,n=u;break}if(s===n){c=!0,n=a,l=u;break}s=s.sibling}if(!c){for(s=u.child;s;){if(s===l){c=!0,l=u,n=a;break}if(s===n){c=!0,n=u,l=a;break}s=s.sibling}if(!c)throw Error(f(189))}}if(l.alternate!==n)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?t:e}function q(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=q(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,Q=Symbol.for("react.element"),st=Symbol.for("react.transitional.element"),nt=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),Ot=Symbol.for("react.consumer"),Tt=Symbol.for("react.context"),Zt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Kt(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Symbol.for("react.client.reference");function Jt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case xt:return"Profiler";case J:return"StrictMode";case vt:return"Suspense";case jt:return"SuspenseList";case ne:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case nt:return"Portal";case Tt:return t.displayName||"Context";case Ot:return(t._context.displayName||"Context")+".Consumer";case Zt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return e=t.displayName||null,e!==null?e:Jt(t.type)||"Memo";case Lt:e=t._payload,t=t._init;try{return Jt(t(e))}catch{}}return null}var ae=Array.isArray,T=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},at=[],ft=-1;function m(t){return{current:t}}function N(t){0>ft||(t.current=at[ft],at[ft]=null,ft--)}function C(t,e){ft++,at[ft]=t.current,t.current=e}var B=m(null),Z=m(null),z=m(null),K=m(null);function dt(t,e){switch(C(z,e),C(Z,t),C(B,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Zr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Zr(e),t=Kr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}N(B),C(B,t)}function yt(){N(B),N(Z),N(z)}function Dn(t){t.memoizedState!==null&&C(K,t);var e=B.current,l=Kr(e,t.type);e!==l&&(C(Z,t),C(B,l))}function ja(t){Z.current===t&&(N(B),N(Z)),K.current===t&&(N(K),ya._currentValue=w)}var Ku,bs;function jl(t){if(Ku===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||"",bs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ku+t+bs}var ku=!1;function Ju(t,e){if(!t||ku)return"";ku=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(S){var y=S}Reflect.construct(t,[],M)}else{try{M.call()}catch(S){y=S}t.call(M.prototype)}}else{try{throw Error()}catch(S){y=S}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),c=u[0],s=u[1];if(c&&s){var o=c.split(`
`),g=s.split(`
`);for(a=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(n===o.length||a===g.length)for(n=o.length-1,a=g.length-1;1<=n&&0<=a&&o[n]!==g[a];)a--;for(;1<=n&&0<=a;n--,a--)if(o[n]!==g[a]){if(n!==1||a!==1)do if(n--,a--,0>a||o[n]!==g[a]){var x=`
`+o[n].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=n&&0<=a);break}}}finally{ku=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?jl(l):""}function Xd(t,e){switch(t.tag){case 26:case 27:case 5:return jl(t.type);case 16:return jl("Lazy");case 13:return t.child!==e&&e!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return Ju(t.type,!1);case 11:return Ju(t.type.render,!1);case 1:return Ju(t.type,!0);case 31:return jl("Activity");default:return""}}function Ss(t){try{var e="",l=null;do e+=Xd(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Wu=Object.prototype.hasOwnProperty,$u=r.unstable_scheduleCallback,Fu=r.unstable_cancelCallback,wd=r.unstable_shouldYield,Zd=r.unstable_requestPaint,ue=r.unstable_now,Kd=r.unstable_getCurrentPriorityLevel,As=r.unstable_ImmediatePriority,Es=r.unstable_UserBlockingPriority,Ma=r.unstable_NormalPriority,kd=r.unstable_LowPriority,xs=r.unstable_IdlePriority,Jd=r.log,Wd=r.unstable_setDisableYieldValue,On=null,ce=null;function tl(t){if(typeof Jd=="function"&&Wd(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(On,t)}catch{}}var ie=Math.clz32?Math.clz32:Id,$d=Math.log,Fd=Math.LN2;function Id(t){return t>>>=0,t===0?32:31-($d(t)/Fd|0)|0}var Na=256,_a=262144,Da=4194304;function Ml(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Oa(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,u=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=Ml(n):(c&=s,c!==0?a=Ml(c):l||(l=s&~t,l!==0&&(a=Ml(l))))):(s=n&~u,s!==0?a=Ml(s):c!==0?a=Ml(c):l||(l=n&~t,l!==0&&(a=Ml(l)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:a}function zn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Pd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ts(){var t=Da;return Da<<=1,(Da&62914560)===0&&(Da=4194304),t}function Iu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Rn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tm(t,e,l,n,a,u){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,o=t.expirationTimes,g=t.hiddenUpdates;for(l=c&~l;0<l;){var x=31-ie(l),M=1<<x;s[x]=0,o[x]=-1;var y=g[x];if(y!==null)for(g[x]=null,x=0;x<y.length;x++){var S=y[x];S!==null&&(S.lane&=-536870913)}l&=~M}n!==0&&js(t,n,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(c&~e))}function js(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-ie(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function Ms(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-ie(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function Ns(t,e){var l=e&-e;return l=(l&42)!==0?1:Pu(l),(l&(t.suspendedLanes|e))!==0?0:l}function Pu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _s(){var t=R.p;return t!==0?t:(t=window.event,t===void 0?32:pd(t.type))}function Ds(t,e){var l=R.p;try{return R.p=t,e()}finally{R.p=l}}var el=Math.random().toString(36).slice(2),Yt="__reactFiber$"+el,$t="__reactProps$"+el,wl="__reactContainer$"+el,ec="__reactEvents$"+el,em="__reactListeners$"+el,lm="__reactHandles$"+el,Os="__reactResources$"+el,Cn="__reactMarker$"+el;function lc(t){delete t[Yt],delete t[$t],delete t[ec],delete t[em],delete t[lm]}function Zl(t){var e=t[Yt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[wl]||l[Yt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Pr(t);t!==null;){if(l=t[Yt])return l;t=Pr(t)}return e}t=l,l=t.parentNode}return null}function Kl(t){if(t=t[Yt]||t[wl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Un(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function kl(t){var e=t[Os];return e||(e=t[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Bt(t){t[Cn]=!0}var zs=new Set,Rs={};function Nl(t,e){Jl(t,e),Jl(t+"Capture",e)}function Jl(t,e){for(Rs[t]=e,t=0;t<e.length;t++)zs.add(e[t])}var nm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cs={},Us={};function am(t){return Wu.call(Us,t)?!0:Wu.call(Cs,t)?!1:nm.test(t)?Us[t]=!0:(Cs[t]=!0,!1)}function za(t,e,l){if(am(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Ra(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ue(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+n)}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function um(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nc(t){if(!t._valueTracker){var e=Gs(t)?"checked":"value";t._valueTracker=um(t,e,""+t[e])}}function Bs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=Gs(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var cm=/[\n"\\]/g;function ge(t){return t.replace(cm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ac(t,e,l,n,a,u,c,s){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ve(e)):t.value!==""+ve(e)&&(t.value=""+ve(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?uc(t,c,ve(e)):l!=null?uc(t,c,ve(l)):n!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+ve(s):t.removeAttribute("name")}function Hs(t,e,l,n,a,u,c,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){nc(t);return}l=l!=null?""+ve(l):"",e=e!=null?""+ve(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),nc(t)}function uc(t,e,l){e==="number"&&Ca(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Wl(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+ve(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Ls(t,e,l){if(e!=null&&(e=""+ve(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ve(l):""}function Ys(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(f(92));if(ae(n)){if(1<n.length)throw Error(f(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=ve(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),nc(t)}function $l(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var im=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qs(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||im.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Qs(t,e,l){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&qs(t,a,n)}else for(var u in e)e.hasOwnProperty(u)&&qs(t,u,e[u])}function cc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ua(t){return fm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ge(){}var ic=null;function sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fl=null,Il=null;function Vs(t){var e=Kl(t);if(e&&(t=e.stateNode)){var l=t[$t]||null;t:switch(t=e.stateNode,e.type){case"input":if(ac(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ge(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[$t]||null;if(!a)throw Error(f(90));ac(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&Bs(n)}break t;case"textarea":Ls(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Wl(t,!!l.multiple,e,!1)}}}var fc=!1;function Xs(t,e,l){if(fc)return t(e,l);fc=!0;try{var n=t(e);return n}finally{if(fc=!1,(Fl!==null||Il!==null)&&(Au(),Fl&&(e=Fl,t=Il,Il=Fl=null,Vs(e),t)))for(e=0;e<t.length;e++)Vs(t[e])}}function Gn(t,e){var l=t.stateNode;if(l===null)return null;var n=l[$t]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(f(231,e,typeof l));return l}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=!1;if(Be)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{oc=!1}var ll=null,rc=null,Ga=null;function ws(){if(Ga)return Ga;var t,e=rc,l=e.length,n,a="value"in ll?ll.value:ll.textContent,u=a.length;for(t=0;t<l&&e[t]===a[t];t++);var c=l-t;for(n=1;n<=c&&e[l-n]===a[u-n];n++);return Ga=a.slice(t,1<n?1-n:void 0)}function Ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function Zs(){return!1}function Ft(t){function e(l,n,a,u,c){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ha:Zs,this.isPropagationStopped=Zs,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var _l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=Ft(_l),Hn=U({},_l,{view:0,detail:0}),om=Ft(Hn),dc,mc,Ln,Ya=U({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ln&&(Ln&&t.type==="mousemove"?(dc=t.screenX-Ln.screenX,mc=t.screenY-Ln.screenY):mc=dc=0,Ln=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),Ks=Ft(Ya),rm=U({},Ya,{dataTransfer:0}),dm=Ft(rm),mm=U({},Hn,{relatedTarget:0}),hc=Ft(mm),hm=U({},_l,{animationName:0,elapsedTime:0,pseudoElement:0}),pm=Ft(hm),vm=U({},_l,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gm=Ft(vm),ym=U({},_l,{data:0}),ks=Ft(ym),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Am[t])?!!e[t]:!1}function pc(){return Em}var xm=U({},Hn,{key:function(t){if(t.key){var e=bm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tm=Ft(xm),jm=U({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=Ft(jm),Mm=U({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Nm=Ft(Mm),_m=U({},_l,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dm=Ft(_m),Om=U({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=Ft(Om),Rm=U({},_l,{newState:0,oldState:0}),Cm=Ft(Rm),Um=[9,13,27,32],vc=Be&&"CompositionEvent"in window,Yn=null;Be&&"documentMode"in document&&(Yn=document.documentMode);var Gm=Be&&"TextEvent"in window&&!Yn,Ws=Be&&(!vc||Yn&&8<Yn&&11>=Yn),$s=" ",Fs=!1;function Is(t,e){switch(t){case"keyup":return Um.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ps(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pl=!1;function Bm(t,e){switch(t){case"compositionend":return Ps(e);case"keypress":return e.which!==32?null:(Fs=!0,$s);case"textInput":return t=e.data,t===$s&&Fs?null:t;default:return null}}function Hm(t,e){if(Pl)return t==="compositionend"||!vc&&Is(t,e)?(t=ws(),Ga=rc=ll=null,Pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ws&&e.locale!=="ko"?null:e.data;default:return null}}var Lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Lm[t.type]:e==="textarea"}function ef(t,e,l,n){Fl?Il?Il.push(n):Il=[n]:Fl=n,e=_u(e,"onChange"),0<e.length&&(l=new La("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var qn=null,Qn=null;function Ym(t){Yr(t,0)}function qa(t){var e=Un(t);if(Bs(e))return t}function lf(t,e){if(t==="change")return e}var nf=!1;if(Be){var gc;if(Be){var yc="oninput"in document;if(!yc){var af=document.createElement("div");af.setAttribute("oninput","return;"),yc=typeof af.oninput=="function"}gc=yc}else gc=!1;nf=gc&&(!document.documentMode||9<document.documentMode)}function uf(){qn&&(qn.detachEvent("onpropertychange",cf),Qn=qn=null)}function cf(t){if(t.propertyName==="value"&&qa(Qn)){var e=[];ef(e,Qn,t,sc(t)),Xs(Ym,e)}}function qm(t,e,l){t==="focusin"?(uf(),qn=e,Qn=l,qn.attachEvent("onpropertychange",cf)):t==="focusout"&&uf()}function Qm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qa(Qn)}function Vm(t,e){if(t==="click")return qa(e)}function Xm(t,e){if(t==="input"||t==="change")return qa(e)}function wm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var se=typeof Object.is=="function"?Object.is:wm;function Vn(t,e){if(se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Wu.call(e,a)||!se(t[a],e[a]))return!1}return!0}function sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ff(t,e){var l=sf(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=sf(l)}}function of(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?of(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ca(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Ca(t.document)}return e}function bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Zm=Be&&"documentMode"in document&&11>=document.documentMode,tn=null,Sc=null,Xn=null,Ac=!1;function df(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ac||tn==null||tn!==Ca(n)||(n=tn,"selectionStart"in n&&bc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xn&&Vn(Xn,n)||(Xn=n,n=_u(Sc,"onSelect"),0<n.length&&(e=new La("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=tn)))}function Dl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var en={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},Ec={},mf={};Be&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Ol(t){if(Ec[t])return Ec[t];if(!en[t])return t;var e=en[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in mf)return Ec[t]=e[l];return t}var hf=Ol("animationend"),pf=Ol("animationiteration"),vf=Ol("animationstart"),Km=Ol("transitionrun"),km=Ol("transitionstart"),Jm=Ol("transitioncancel"),gf=Ol("transitionend"),yf=new Map,xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xc.push("scrollEnd");function Me(t,e){yf.set(t,e),Nl(e,[t])}var Qa=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ye=[],ln=0,Tc=0;function Va(){for(var t=ln,e=Tc=ln=0;e<t;){var l=ye[e];ye[e++]=null;var n=ye[e];ye[e++]=null;var a=ye[e];ye[e++]=null;var u=ye[e];if(ye[e++]=null,n!==null&&a!==null){var c=n.pending;c===null?a.next=a:(a.next=c.next,c.next=a),n.pending=a}u!==0&&bf(l,a,u)}}function Xa(t,e,l,n){ye[ln++]=t,ye[ln++]=e,ye[ln++]=l,ye[ln++]=n,Tc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function jc(t,e,l,n){return Xa(t,e,l,n),wa(t)}function zl(t,e){return Xa(t,null,null,e),wa(t)}function bf(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=t.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-ie(l),t=u.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),u):null}function wa(t){if(50<ra)throw ra=0,Ui=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var nn={};function Wm(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(t,e,l,n){return new Wm(t,e,l,n)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function He(t,e){var l=t.alternate;return l===null?(l=fe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Sf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Za(t,e,l,n,a,u){var c=0;if(n=t,typeof t=="function")Mc(t)&&(c=1);else if(typeof t=="string")c=t0(t,l,B.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ne:return t=fe(31,l,e,a),t.elementType=ne,t.lanes=u,t;case G:return Rl(l.children,a,u,e);case J:c=8,a|=24;break;case xt:return t=fe(12,l,e,a|2),t.elementType=xt,t.lanes=u,t;case vt:return t=fe(13,l,e,a),t.elementType=vt,t.lanes=u,t;case jt:return t=fe(19,l,e,a),t.elementType=jt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tt:c=10;break t;case Ot:c=9;break t;case Zt:c=11;break t;case F:c=14;break t;case Lt:c=16,n=null;break t}c=29,l=Error(f(130,t===null?"null":typeof t,"")),n=null}return e=fe(c,l,e,a),e.elementType=t,e.type=n,e.lanes=u,e}function Rl(t,e,l,n){return t=fe(7,t,n,e),t.lanes=l,t}function Nc(t,e,l){return t=fe(6,t,null,e),t.lanes=l,t}function Af(t){var e=fe(18,null,null,0);return e.stateNode=t,e}function _c(t,e,l){return e=fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ef=new WeakMap;function be(t,e){if(typeof t=="object"&&t!==null){var l=Ef.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ss(e)},Ef.set(t,e),e)}return{value:t,source:e,stack:Ss(e)}}var an=[],un=0,Ka=null,wn=0,Se=[],Ae=0,nl=null,De=1,Oe="";function Le(t,e){an[un++]=wn,an[un++]=Ka,Ka=t,wn=e}function xf(t,e,l){Se[Ae++]=De,Se[Ae++]=Oe,Se[Ae++]=nl,nl=t;var n=De;t=Oe;var a=32-ie(n)-1;n&=~(1<<a),l+=1;var u=32-ie(e)+a;if(30<u){var c=a-a%5;u=(n&(1<<c)-1).toString(32),n>>=c,a-=c,De=1<<32-ie(e)+a|l<<a|n,Oe=u+t}else De=1<<u|l<<a|n,Oe=t}function Dc(t){t.return!==null&&(Le(t,1),xf(t,1,0))}function Oc(t){for(;t===Ka;)Ka=an[--un],an[un]=null,wn=an[--un],an[un]=null;for(;t===nl;)nl=Se[--Ae],Se[Ae]=null,Oe=Se[--Ae],Se[Ae]=null,De=Se[--Ae],Se[Ae]=null}function Tf(t,e){Se[Ae++]=De,Se[Ae++]=Oe,Se[Ae++]=nl,De=e.id,Oe=e.overflow,nl=t}var qt=null,bt=null,lt=!1,al=null,Ee=!1,zc=Error(f(519));function ul(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zn(be(e,t)),zc}function jf(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[Yt]=t,e[$t]=n,l){case"dialog":P("cancel",e),P("close",e);break;case"iframe":case"object":case"embed":P("load",e);break;case"video":case"audio":for(l=0;l<ma.length;l++)P(ma[l],e);break;case"source":P("error",e);break;case"img":case"image":case"link":P("error",e),P("load",e);break;case"details":P("toggle",e);break;case"input":P("invalid",e),Hs(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":P("invalid",e);break;case"textarea":P("invalid",e),Ys(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||Xr(e.textContent,l)?(n.popover!=null&&(P("beforetoggle",e),P("toggle",e)),n.onScroll!=null&&P("scroll",e),n.onScrollEnd!=null&&P("scrollend",e),n.onClick!=null&&(e.onclick=Ge),e=!0):e=!1,e||ul(t,!0)}function Mf(t){for(qt=t.return;qt;)switch(qt.tag){case 5:case 31:case 13:Ee=!1;return;case 27:case 3:Ee=!0;return;default:qt=qt.return}}function cn(t){if(t!==qt)return!1;if(!lt)return Mf(t),lt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Wi(t.type,t.memoizedProps)),l=!l),l&&bt&&ul(t),Mf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));bt=Ir(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));bt=Ir(t)}else e===27?(e=bt,bl(t.type)?(t=ts,ts=null,bt=t):bt=e):bt=qt?Te(t.stateNode.nextSibling):null;return!0}function Cl(){bt=qt=null,lt=!1}function Rc(){var t=al;return t!==null&&(ee===null?ee=t:ee.push.apply(ee,t),al=null),t}function Zn(t){al===null?al=[t]:al.push(t)}var Cc=m(null),Ul=null,Ye=null;function cl(t,e,l){C(Cc,e._currentValue),e._currentValue=l}function qe(t){t._currentValue=Cc.current,N(Cc)}function Uc(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function Gc(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var c=a.child;u=u.firstContext;t:for(;u!==null;){var s=u;u=a;for(var o=0;o<e.length;o++)if(s.context===e[o]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),Uc(u.return,l,t),n||(c=null);break t}u=s.next}}else if(a.tag===18){if(c=a.return,c===null)throw Error(f(341));c.lanes|=l,u=c.alternate,u!==null&&(u.lanes|=l),Uc(c,l,t),c=null}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}}function sn(t,e,l,n){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var c=a.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var s=a.type;se(a.pendingProps.value,c.value)||(t!==null?t.push(s):t=[s])}}else if(a===K.current){if(c=a.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ya):t=[ya])}a=a.return}t!==null&&Gc(e,t,l,n),e.flags|=262144}function ka(t){for(t=t.firstContext;t!==null;){if(!se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gl(t){Ul=t,Ye=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return Nf(Ul,t)}function Ja(t,e){return Ul===null&&Gl(t),Nf(t,e)}function Nf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Ye===null){if(t===null)throw Error(f(308));Ye=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ye=Ye.next=e;return l}var $m=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Fm=r.unstable_scheduleCallback,Im=r.unstable_NormalPriority,zt={$$typeof:Tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new $m,data:new Map,refCount:0}}function Kn(t){t.refCount--,t.refCount===0&&Fm(Im,function(){t.controller.abort()})}var kn=null,Hc=0,fn=0,on=null;function Pm(t,e){if(kn===null){var l=kn=[];Hc=0,fn=qi(),on={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Hc++,e.then(_f,_f),e}function _f(){if(--Hc===0&&kn!==null){on!==null&&(on.status="fulfilled");var t=kn;kn=null,fn=0,on=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function th(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var Df=T.S;T.S=function(t,e){mr=ue(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Pm(t,e),Df!==null&&Df(t,e)};var Bl=m(null);function Lc(){var t=Bl.current;return t!==null?t:gt.pooledCache}function Wa(t,e){e===null?C(Bl,Bl.current):C(Bl,e.pool)}function Of(){var t=Lc();return t===null?null:{parent:zt._currentValue,pool:t}}var rn=Error(f(460)),Yc=Error(f(474)),$a=Error(f(542)),Fa={then:function(){}};function zf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ge,Ge),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Uf(t),t;default:if(typeof e.status=="string")e.then(Ge,Ge);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Uf(t),t}throw Ll=e,rn}}function Hl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ll=l,rn):l}}var Ll=null;function Cf(){if(Ll===null)throw Error(f(459));var t=Ll;return Ll=null,t}function Uf(t){if(t===rn||t===$a)throw Error(f(483))}var dn=null,Jn=0;function Ia(t){var e=Jn;return Jn+=1,dn===null&&(dn=[]),Rf(dn,t,e)}function Wn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pa(t,e){throw e.$$typeof===Q?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Gf(t){function e(h,d){if(t){var v=h.deletions;v===null?(h.deletions=[d],h.flags|=16):v.push(d)}}function l(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function n(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function a(h,d){return h=He(h,d),h.index=0,h.sibling=null,h}function u(h,d,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<d?(h.flags|=67108866,d):v):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function c(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function s(h,d,v,j){return d===null||d.tag!==6?(d=Nc(v,h.mode,j),d.return=h,d):(d=a(d,v),d.return=h,d)}function o(h,d,v,j){var V=v.type;return V===G?x(h,d,v.props.children,j,v.key):d!==null&&(d.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Lt&&Hl(V)===d.type)?(d=a(d,v.props),Wn(d,v),d.return=h,d):(d=Za(v.type,v.key,v.props,null,h.mode,j),Wn(d,v),d.return=h,d)}function g(h,d,v,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=_c(v,h.mode,j),d.return=h,d):(d=a(d,v.children||[]),d.return=h,d)}function x(h,d,v,j,V){return d===null||d.tag!==7?(d=Rl(v,h.mode,j,V),d.return=h,d):(d=a(d,v),d.return=h,d)}function M(h,d,v){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Nc(""+d,h.mode,v),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case st:return v=Za(d.type,d.key,d.props,null,h.mode,v),Wn(v,d),v.return=h,v;case nt:return d=_c(d,h.mode,v),d.return=h,d;case Lt:return d=Hl(d),M(h,d,v)}if(ae(d)||Kt(d))return d=Rl(d,h.mode,v,null),d.return=h,d;if(typeof d.then=="function")return M(h,Ia(d),v);if(d.$$typeof===Tt)return M(h,Ja(h,d),v);Pa(h,d)}return null}function y(h,d,v,j){var V=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return V!==null?null:s(h,d,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case st:return v.key===V?o(h,d,v,j):null;case nt:return v.key===V?g(h,d,v,j):null;case Lt:return v=Hl(v),y(h,d,v,j)}if(ae(v)||Kt(v))return V!==null?null:x(h,d,v,j,null);if(typeof v.then=="function")return y(h,d,Ia(v),j);if(v.$$typeof===Tt)return y(h,d,Ja(h,v),j);Pa(h,v)}return null}function S(h,d,v,j,V){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return h=h.get(v)||null,s(d,h,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case st:return h=h.get(j.key===null?v:j.key)||null,o(d,h,j,V);case nt:return h=h.get(j.key===null?v:j.key)||null,g(d,h,j,V);case Lt:return j=Hl(j),S(h,d,v,j,V)}if(ae(j)||Kt(j))return h=h.get(v)||null,x(d,h,j,V,null);if(typeof j.then=="function")return S(h,d,v,Ia(j),V);if(j.$$typeof===Tt)return S(h,d,v,Ja(d,j),V);Pa(d,j)}return null}function H(h,d,v,j){for(var V=null,ut=null,L=d,$=d=0,et=null;L!==null&&$<v.length;$++){L.index>$?(et=L,L=null):et=L.sibling;var ct=y(h,L,v[$],j);if(ct===null){L===null&&(L=et);break}t&&L&&ct.alternate===null&&e(h,L),d=u(ct,d,$),ut===null?V=ct:ut.sibling=ct,ut=ct,L=et}if($===v.length)return l(h,L),lt&&Le(h,$),V;if(L===null){for(;$<v.length;$++)L=M(h,v[$],j),L!==null&&(d=u(L,d,$),ut===null?V=L:ut.sibling=L,ut=L);return lt&&Le(h,$),V}for(L=n(L);$<v.length;$++)et=S(L,h,$,v[$],j),et!==null&&(t&&et.alternate!==null&&L.delete(et.key===null?$:et.key),d=u(et,d,$),ut===null?V=et:ut.sibling=et,ut=et);return t&&L.forEach(function(Tl){return e(h,Tl)}),lt&&Le(h,$),V}function X(h,d,v,j){if(v==null)throw Error(f(151));for(var V=null,ut=null,L=d,$=d=0,et=null,ct=v.next();L!==null&&!ct.done;$++,ct=v.next()){L.index>$?(et=L,L=null):et=L.sibling;var Tl=y(h,L,ct.value,j);if(Tl===null){L===null&&(L=et);break}t&&L&&Tl.alternate===null&&e(h,L),d=u(Tl,d,$),ut===null?V=Tl:ut.sibling=Tl,ut=Tl,L=et}if(ct.done)return l(h,L),lt&&Le(h,$),V;if(L===null){for(;!ct.done;$++,ct=v.next())ct=M(h,ct.value,j),ct!==null&&(d=u(ct,d,$),ut===null?V=ct:ut.sibling=ct,ut=ct);return lt&&Le(h,$),V}for(L=n(L);!ct.done;$++,ct=v.next())ct=S(L,h,$,ct.value,j),ct!==null&&(t&&ct.alternate!==null&&L.delete(ct.key===null?$:ct.key),d=u(ct,d,$),ut===null?V=ct:ut.sibling=ct,ut=ct);return t&&L.forEach(function(r0){return e(h,r0)}),lt&&Le(h,$),V}function pt(h,d,v,j){if(typeof v=="object"&&v!==null&&v.type===G&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case st:t:{for(var V=v.key;d!==null;){if(d.key===V){if(V=v.type,V===G){if(d.tag===7){l(h,d.sibling),j=a(d,v.props.children),j.return=h,h=j;break t}}else if(d.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Lt&&Hl(V)===d.type){l(h,d.sibling),j=a(d,v.props),Wn(j,v),j.return=h,h=j;break t}l(h,d);break}else e(h,d);d=d.sibling}v.type===G?(j=Rl(v.props.children,h.mode,j,v.key),j.return=h,h=j):(j=Za(v.type,v.key,v.props,null,h.mode,j),Wn(j,v),j.return=h,h=j)}return c(h);case nt:t:{for(V=v.key;d!==null;){if(d.key===V)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){l(h,d.sibling),j=a(d,v.children||[]),j.return=h,h=j;break t}else{l(h,d);break}else e(h,d);d=d.sibling}j=_c(v,h.mode,j),j.return=h,h=j}return c(h);case Lt:return v=Hl(v),pt(h,d,v,j)}if(ae(v))return H(h,d,v,j);if(Kt(v)){if(V=Kt(v),typeof V!="function")throw Error(f(150));return v=V.call(v),X(h,d,v,j)}if(typeof v.then=="function")return pt(h,d,Ia(v),j);if(v.$$typeof===Tt)return pt(h,d,Ja(h,v),j);Pa(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,d!==null&&d.tag===6?(l(h,d.sibling),j=a(d,v),j.return=h,h=j):(l(h,d),j=Nc(v,h.mode,j),j.return=h,h=j),c(h)):l(h,d)}return function(h,d,v,j){try{Jn=0;var V=pt(h,d,v,j);return dn=null,V}catch(L){if(L===rn||L===$a)throw L;var ut=fe(29,L,null,h.mode);return ut.lanes=j,ut.return=h,ut}finally{}}}var Yl=Gf(!0),Bf=Gf(!1),il=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fl(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(it&2)!==0){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=wa(t),bf(t,null,l),e}return Xa(t,n,e,l),wa(t)}function $n(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,Ms(t,l)}}function Vc(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=c:u=u.next=c,l=l.next}while(l!==null);u===null?a=u=e:u=u.next=e}else a=u=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Xc=!1;function Fn(){if(Xc){var t=on;if(t!==null)throw t}}function In(t,e,l,n){Xc=!1;var a=t.updateQueue;il=!1;var u=a.firstBaseUpdate,c=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,g=o.next;o.next=null,c===null?u=g:c.next=g,c=o;var x=t.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==c&&(s===null?x.firstBaseUpdate=g:s.next=g,x.lastBaseUpdate=o))}if(u!==null){var M=a.baseState;c=0,x=g=o=null,s=u;do{var y=s.lane&-536870913,S=y!==s.lane;if(S?(tt&y)===y:(n&y)===y){y!==0&&y===fn&&(Xc=!0),x!==null&&(x=x.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var H=t,X=s;y=e;var pt=l;switch(X.tag){case 1:if(H=X.payload,typeof H=="function"){M=H.call(pt,M,y);break t}M=H;break t;case 3:H.flags=H.flags&-65537|128;case 0:if(H=X.payload,y=typeof H=="function"?H.call(pt,M,y):H,y==null)break t;M=U({},M,y);break t;case 2:il=!0}}y=s.callback,y!==null&&(t.flags|=64,S&&(t.flags|=8192),S=a.callbacks,S===null?a.callbacks=[y]:S.push(y))}else S={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(g=x=S,o=M):x=x.next=S,c|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;S=s,s=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);x===null&&(o=M),a.baseState=o,a.firstBaseUpdate=g,a.lastBaseUpdate=x,u===null&&(a.shared.lanes=0),hl|=c,t.lanes=c,t.memoizedState=M}}function Hf(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function Lf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Hf(l[t],e)}var mn=m(null),tu=m(0);function Yf(t,e){t=We,C(tu,t),C(mn,e),We=t|e.baseLanes}function wc(){C(tu,We),C(mn,mn.current)}function Zc(){We=tu.current,N(mn),N(tu)}var oe=m(null),xe=null;function ol(t){var e=t.alternate;C(_t,_t.current&1),C(oe,t),xe===null&&(e===null||mn.current!==null||e.memoizedState!==null)&&(xe=t)}function Kc(t){C(_t,_t.current),C(oe,t),xe===null&&(xe=t)}function qf(t){t.tag===22?(C(_t,_t.current),C(oe,t),xe===null&&(xe=t)):rl()}function rl(){C(_t,_t.current),C(oe,oe.current)}function re(t){N(oe),xe===t&&(xe=null),N(_t)}var _t=m(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Ii(l)||Pi(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qe=0,W=null,mt=null,Rt=null,lu=!1,hn=!1,ql=!1,nu=0,Pn=0,pn=null,eh=0;function Mt(){throw Error(f(321))}function kc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!se(t[l],e[l]))return!1;return!0}function Jc(t,e,l,n,a,u){return Qe=u,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?To:fi,ql=!1,u=l(n,a),ql=!1,hn&&(u=Vf(e,l,n,a)),Qf(t),u}function Qf(t){T.H=la;var e=mt!==null&&mt.next!==null;if(Qe=0,Rt=mt=W=null,lu=!1,Pn=0,pn=null,e)throw Error(f(300));t===null||Ct||(t=t.dependencies,t!==null&&ka(t)&&(Ct=!0))}function Vf(t,e,l,n){W=t;var a=0;do{if(hn&&(pn=null),Pn=0,hn=!1,25<=a)throw Error(f(301));if(a+=1,Rt=mt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}T.H=jo,u=e(l,n)}while(hn);return u}function lh(){var t=T.H,e=t.useState()[0];return e=typeof e.then=="function"?ta(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(W.flags|=1024),e}function Wc(){var t=nu!==0;return nu=0,t}function $c(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Fc(t){if(lu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}lu=!1}Qe=0,Rt=mt=W=null,hn=!1,Pn=nu=0,pn=null}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?W.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Dt(){if(mt===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Rt===null?W.memoizedState:Rt.next;if(e!==null)Rt=e,mt=t;else{if(t===null)throw W.alternate===null?Error(f(467)):Error(f(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Rt===null?W.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ta(t){var e=Pn;return Pn+=1,pn===null&&(pn=[]),t=Rf(pn,t,e),e=W,(Rt===null?e.memoizedState:Rt.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?To:fi),t}function uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ta(t);if(t.$$typeof===Tt)return Qt(t)}throw Error(f(438,String(t)))}function Ic(t){var e=null,l=W.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=W.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=au(),W.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=Pe;return e.index++,l}function Ve(t,e){return typeof e=="function"?e(t):e}function cu(t){var e=Dt();return Pc(e,mt,t)}function Pc(t,e,l){var n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=l;var a=t.baseQueue,u=n.pending;if(u!==null){if(a!==null){var c=a.next;a.next=u.next,u.next=c}e.baseQueue=a=u,n.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var s=c=null,o=null,g=e,x=!1;do{var M=g.lane&-536870913;if(M!==g.lane?(tt&M)===M:(Qe&M)===M){var y=g.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),M===fn&&(x=!0);else if((Qe&y)===y){g=g.next,y===fn&&(x=!0);continue}else M={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(s=o=M,c=u):o=o.next=M,W.lanes|=y,hl|=y;M=g.action,ql&&l(u,M),u=g.hasEagerState?g.eagerState:l(u,M)}else y={lane:M,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(s=o=y,c=u):o=o.next=y,W.lanes|=M,hl|=M;g=g.next}while(g!==null&&g!==e);if(o===null?c=u:o.next=s,!se(u,t.memoizedState)&&(Ct=!0,x&&(l=on,l!==null)))throw l;t.memoizedState=u,t.baseState=c,t.baseQueue=o,n.lastRenderedState=u}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function ti(t){var e=Dt(),l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,u=e.memoizedState;if(a!==null){l.pending=null;var c=a=a.next;do u=t(u,c.action),c=c.next;while(c!==a);se(u,e.memoizedState)||(Ct=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,n]}function Xf(t,e,l){var n=W,a=Dt(),u=lt;if(u){if(l===void 0)throw Error(f(407));l=l()}else l=e();var c=!se((mt||a).memoizedState,l);if(c&&(a.memoizedState=l,Ct=!0),a=a.queue,ni(Kf.bind(null,n,a,t),[t]),a.getSnapshot!==e||c||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,vn(9,{destroy:void 0},Zf.bind(null,n,a,l,e),null),gt===null)throw Error(f(349));u||(Qe&127)!==0||wf(n,e,l)}return l}function wf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=W.updateQueue,e===null?(e=au(),W.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Zf(t,e,l,n){e.value=l,e.getSnapshot=n,kf(e)&&Jf(t)}function Kf(t,e,l){return l(function(){kf(e)&&Jf(t)})}function kf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!se(t,l)}catch{return!0}}function Jf(t){var e=zl(t,2);e!==null&&le(e,t,2)}function ei(t){var e=Wt();if(typeof t=="function"){var l=t;if(t=l(),ql){tl(!0);try{l()}finally{tl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},e}function Wf(t,e,l,n){return t.baseState=l,Pc(t,mt,typeof n=="function"?n:Ve)}function nh(t,e,l,n,a){if(fu(t))throw Error(f(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};T.T!==null?l(!0):u.isTransition=!1,n(u),l=e.pending,l===null?(u.next=e.pending=u,$f(e,u)):(u.next=l.next,e.pending=l.next=u)}}function $f(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var u=T.T,c={};T.T=c;try{var s=l(a,n),o=T.S;o!==null&&o(c,s),Ff(t,e,s)}catch(g){li(t,e,g)}finally{u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}else try{u=l(a,n),Ff(t,e,u)}catch(g){li(t,e,g)}}function Ff(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){If(t,e,n)},function(n){return li(t,e,n)}):If(t,e,l)}function If(t,e,l){e.status="fulfilled",e.value=l,Pf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,$f(t,l)))}function li(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,Pf(e),e=e.next;while(e!==n)}t.action=null}function Pf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function to(t,e){return e}function eo(t,e){if(lt){var l=gt.formState;if(l!==null){t:{var n=W;if(lt){if(bt){e:{for(var a=bt,u=Ee;a.nodeType!==8;){if(!u){a=null;break e}if(a=Te(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){bt=Te(a.nextSibling),n=a.data==="F!";break t}}ul(n)}n=!1}n&&(e=l[0])}}return l=Wt(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},l.queue=n,l=Ao.bind(null,W,n),n.dispatch=l,n=ei(!1),u=si.bind(null,W,!1,n.queue),n=Wt(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=nh.bind(null,W,a,u,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function lo(t){var e=Dt();return no(e,mt,t)}function no(t,e,l){if(e=Pc(t,e,to)[0],t=cu(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=ta(e)}catch(c){throw c===rn?$a:c}else n=e;e=Dt();var a=e.queue,u=a.dispatch;return l!==e.memoizedState&&(W.flags|=2048,vn(9,{destroy:void 0},ah.bind(null,a,l),null)),[n,u,t]}function ah(t,e){t.action=e}function ao(t){var e=Dt(),l=mt;if(l!==null)return no(e,l,t);Dt(),e=e.memoizedState,l=Dt();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function vn(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=W.updateQueue,e===null&&(e=au(),W.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function uo(){return Dt().memoizedState}function iu(t,e,l,n){var a=Wt();W.flags|=t,a.memoizedState=vn(1|e,{destroy:void 0},l,n===void 0?null:n)}function su(t,e,l,n){var a=Dt();n=n===void 0?null:n;var u=a.memoizedState.inst;mt!==null&&n!==null&&kc(n,mt.memoizedState.deps)?a.memoizedState=vn(e,u,l,n):(W.flags|=t,a.memoizedState=vn(1|e,u,l,n))}function co(t,e){iu(8390656,8,t,e)}function ni(t,e){su(2048,8,t,e)}function uh(t){W.flags|=4;var e=W.updateQueue;if(e===null)e=au(),W.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function io(t){var e=Dt().memoizedState;return uh({ref:e,nextImpl:t}),function(){if((it&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function so(t,e){return su(4,2,t,e)}function fo(t,e){return su(4,4,t,e)}function oo(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ro(t,e,l){l=l!=null?l.concat([t]):null,su(4,4,oo.bind(null,e,t),l)}function ai(){}function mo(t,e){var l=Dt();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&kc(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function ho(t,e){var l=Dt();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&kc(e,n[1]))return n[0];if(n=t(),ql){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[n,e],n}function ui(t,e,l){return l===void 0||(Qe&1073741824)!==0&&(tt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=pr(),W.lanes|=t,hl|=t,l)}function po(t,e,l,n){return se(l,e)?l:mn.current!==null?(t=ui(t,l,n),se(t,e)||(Ct=!0),t):(Qe&42)===0||(Qe&1073741824)!==0&&(tt&261930)===0?(Ct=!0,t.memoizedState=l):(t=pr(),W.lanes|=t,hl|=t,e)}function vo(t,e,l,n,a){var u=R.p;R.p=u!==0&&8>u?u:8;var c=T.T,s={};T.T=s,si(t,!1,e,l);try{var o=a(),g=T.S;if(g!==null&&g(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var x=th(o,n);ea(t,e,x,he(t))}else ea(t,e,n,he(t))}catch(M){ea(t,e,{then:function(){},status:"rejected",reason:M},he())}finally{R.p=u,c!==null&&s.types!==null&&(c.types=s.types),T.T=c}}function ch(){}function ci(t,e,l,n){if(t.tag!==5)throw Error(f(476));var a=go(t).queue;vo(t,a,e,w,l===null?ch:function(){return yo(t),l(n)})}function go(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:w},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function yo(t){var e=go(t);e.next===null&&(e=t.alternate.memoizedState),ea(t,e.next.queue,{},he())}function ii(){return Qt(ya)}function bo(){return Dt().memoizedState}function So(){return Dt().memoizedState}function ih(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=he();t=sl(l);var n=fl(e,t,l);n!==null&&(le(n,e,l),$n(n,e,l)),e={cache:Bc()},t.payload=e;return}e=e.return}}function sh(t,e,l){var n=he();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(t)?Eo(e,l):(l=jc(t,e,l,n),l!==null&&(le(l,t,n),xo(l,e,n)))}function Ao(t,e,l){var n=he();ea(t,e,l,n)}function ea(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fu(t))Eo(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var c=e.lastRenderedState,s=u(c,l);if(a.hasEagerState=!0,a.eagerState=s,se(s,c))return Xa(t,e,a,0),gt===null&&Va(),!1}catch{}finally{}if(l=jc(t,e,a,n),l!==null)return le(l,t,n),xo(l,e,n),!0}return!1}function si(t,e,l,n){if(n={lane:2,revertLane:qi(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(e)throw Error(f(479))}else e=jc(t,l,n,2),e!==null&&le(e,t,2)}function fu(t){var e=t.alternate;return t===W||e!==null&&e===W}function Eo(t,e){hn=lu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function xo(t,e,l){if((l&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,Ms(t,l)}}var la={readContext:Qt,use:uu,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};la.useEffectEvent=Mt;var To={readContext:Qt,use:uu,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:co,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,iu(4194308,4,oo.bind(null,e,t),l)},useLayoutEffect:function(t,e){return iu(4194308,4,t,e)},useInsertionEffect:function(t,e){iu(4,2,t,e)},useMemo:function(t,e){var l=Wt();e=e===void 0?null:e;var n=t();if(ql){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=Wt();if(l!==void 0){var a=l(e);if(ql){tl(!0);try{l(e)}finally{tl(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=sh.bind(null,W,t),[n.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:function(t){t=ei(t);var e=t.queue,l=Ao.bind(null,W,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ai,useDeferredValue:function(t,e){var l=Wt();return ui(l,t,e)},useTransition:function(){var t=ei(!1);return t=vo.bind(null,W,t.queue,!0,!1),Wt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=W,a=Wt();if(lt){if(l===void 0)throw Error(f(407));l=l()}else{if(l=e(),gt===null)throw Error(f(349));(tt&127)!==0||wf(n,e,l)}a.memoizedState=l;var u={value:l,getSnapshot:e};return a.queue=u,co(Kf.bind(null,n,u,t),[t]),n.flags|=2048,vn(9,{destroy:void 0},Zf.bind(null,n,u,l,e),null),l},useId:function(){var t=Wt(),e=gt.identifierPrefix;if(lt){var l=Oe,n=De;l=(n&~(1<<32-ie(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=nu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=eh++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ii,useFormState:eo,useActionState:eo,useOptimistic:function(t){var e=Wt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=si.bind(null,W,!0,l),l.dispatch=e,[t,e]},useMemoCache:Ic,useCacheRefresh:function(){return Wt().memoizedState=ih.bind(null,W)},useEffectEvent:function(t){var e=Wt(),l={impl:t};return e.memoizedState=l,function(){if((it&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}},fi={readContext:Qt,use:uu,useCallback:mo,useContext:Qt,useEffect:ni,useImperativeHandle:ro,useInsertionEffect:so,useLayoutEffect:fo,useMemo:ho,useReducer:cu,useRef:uo,useState:function(){return cu(Ve)},useDebugValue:ai,useDeferredValue:function(t,e){var l=Dt();return po(l,mt.memoizedState,t,e)},useTransition:function(){var t=cu(Ve)[0],e=Dt().memoizedState;return[typeof t=="boolean"?t:ta(t),e]},useSyncExternalStore:Xf,useId:bo,useHostTransitionStatus:ii,useFormState:lo,useActionState:lo,useOptimistic:function(t,e){var l=Dt();return Wf(l,mt,t,e)},useMemoCache:Ic,useCacheRefresh:So};fi.useEffectEvent=io;var jo={readContext:Qt,use:uu,useCallback:mo,useContext:Qt,useEffect:ni,useImperativeHandle:ro,useInsertionEffect:so,useLayoutEffect:fo,useMemo:ho,useReducer:ti,useRef:uo,useState:function(){return ti(Ve)},useDebugValue:ai,useDeferredValue:function(t,e){var l=Dt();return mt===null?ui(l,t,e):po(l,mt.memoizedState,t,e)},useTransition:function(){var t=ti(Ve)[0],e=Dt().memoizedState;return[typeof t=="boolean"?t:ta(t),e]},useSyncExternalStore:Xf,useId:bo,useHostTransitionStatus:ii,useFormState:ao,useActionState:ao,useOptimistic:function(t,e){var l=Dt();return mt!==null?Wf(l,mt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ic,useCacheRefresh:So};jo.useEffectEvent=io;function oi(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:U({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ri={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=he(),a=sl(n);a.payload=e,l!=null&&(a.callback=l),e=fl(t,a,n),e!==null&&(le(e,t,n),$n(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=he(),a=sl(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=fl(t,a,n),e!==null&&(le(e,t,n),$n(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=he(),n=sl(l);n.tag=2,e!=null&&(n.callback=e),e=fl(t,n,l),e!==null&&(le(e,t,l),$n(e,t,l))}};function Mo(t,e,l,n,a,u,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,c):e.prototype&&e.prototype.isPureReactComponent?!Vn(l,n)||!Vn(a,u):!0}function No(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&ri.enqueueReplaceState(e,e.state,null)}function Ql(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=U({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function _o(t){Qa(t)}function Do(t){console.error(t)}function Oo(t){Qa(t)}function ou(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function zo(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function di(t,e,l){return l=sl(l),l.tag=3,l.payload={element:null},l.callback=function(){ou(t,e)},l}function Ro(t){return t=sl(t),t.tag=3,t}function Co(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;t.payload=function(){return a(u)},t.callback=function(){zo(e,l,n)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){zo(e,l,n),typeof a!="function"&&(pl===null?pl=new Set([this]):pl.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function fh(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&sn(e,l,a,!0),l=oe.current,l!==null){switch(l.tag){case 31:case 13:return xe===null?Eu():l.alternate===null&&Nt===0&&(Nt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===Fa?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),Hi(t,n,a)),!1;case 22:return l.flags|=65536,n===Fa?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),Hi(t,n,a)),!1}throw Error(f(435,l.tag))}return Hi(t,n,a),Eu(),!1}if(lt)return e=oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==zc&&(t=Error(f(422),{cause:n}),Zn(be(t,l)))):(n!==zc&&(e=Error(f(423),{cause:n}),Zn(be(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=be(n,l),a=di(t.stateNode,n,a),Vc(t,a),Nt!==4&&(Nt=2)),!1;var u=Error(f(520),{cause:n});if(u=be(u,l),oa===null?oa=[u]:oa.push(u),Nt!==4&&(Nt=2),e===null)return!0;n=be(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=di(l.stateNode,n,t),Vc(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(pl===null||!pl.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=Ro(a),Co(a,t,l,n),Vc(l,a),!1}l=l.return}while(l!==null);return!1}var mi=Error(f(461)),Ct=!1;function Vt(t,e,l,n){e.child=t===null?Bf(e,null,l,n):Yl(e,t.child,l,n)}function Uo(t,e,l,n,a){l=l.render;var u=e.ref;if("ref"in n){var c={};for(var s in n)s!=="ref"&&(c[s]=n[s])}else c=n;return Gl(e),n=Jc(t,e,l,c,u,a),s=Wc(),t!==null&&!Ct?($c(t,e,a),Xe(t,e,a)):(lt&&s&&Dc(e),e.flags|=1,Vt(t,e,n,a),e.child)}function Go(t,e,l,n,a){if(t===null){var u=l.type;return typeof u=="function"&&!Mc(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Bo(t,e,u,n,a)):(t=Za(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Ai(t,a)){var c=u.memoizedProps;if(l=l.compare,l=l!==null?l:Vn,l(c,n)&&t.ref===e.ref)return Xe(t,e,a)}return e.flags|=1,t=He(u,n),t.ref=e.ref,t.return=e,e.child=t}function Bo(t,e,l,n,a){if(t!==null){var u=t.memoizedProps;if(Vn(u,n)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=n=u,Ai(t,a))(t.flags&131072)!==0&&(Ct=!0);else return e.lanes=t.lanes,Xe(t,e,a)}return hi(t,e,l,n,a)}function Ho(t,e,l,n){var a=n.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,e.child=null;return Lo(t,e,u,l,n)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wa(e,u!==null?u.cachePool:null),u!==null?Yf(e,u):wc(),qf(e);else return n=e.lanes=536870912,Lo(t,e,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Wa(e,u.cachePool),Yf(e,u),rl(),e.memoizedState=null):(t!==null&&Wa(e,null),wc(),rl());return Vt(t,e,a,l),e.child}function na(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Lo(t,e,l,n,a){var u=Lc();return u=u===null?null:{parent:zt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Wa(e,null),wc(),qf(e),t!==null&&sn(t,e,n,!0),e.childLanes=a,null}function ru(t,e){return e=mu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Yo(t,e,l){return Yl(e,t.child,null,l),t=ru(e,e.pendingProps),t.flags|=2,re(e),e.memoizedState=null,t}function oh(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(lt){if(n.mode==="hidden")return t=ru(e,n),e.lanes=536870912,na(null,t);if(Kc(e),(t=bt)?(t=Fr(t,Ee),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:nl!==null?{id:De,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},l=Af(t),l.return=e,e.child=l,qt=e,bt=null)):t=null,t===null)throw ul(e);return e.lanes=536870912,null}return ru(e,n)}var u=t.memoizedState;if(u!==null){var c=u.dehydrated;if(Kc(e),a)if(e.flags&256)e.flags&=-257,e=Yo(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Ct||sn(t,e,l,!1),a=(l&t.childLanes)!==0,Ct||a){if(n=gt,n!==null&&(c=Ns(n,l),c!==0&&c!==u.retryLane))throw u.retryLane=c,zl(t,c),le(n,t,c),mi;Eu(),e=Yo(t,e,l)}else t=u.treeContext,bt=Te(c.nextSibling),qt=e,lt=!0,al=null,Ee=!1,t!==null&&Tf(e,t),e=ru(e,n),e.flags|=4096;return e}return t=He(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function du(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function hi(t,e,l,n,a){return Gl(e),l=Jc(t,e,l,n,void 0,a),n=Wc(),t!==null&&!Ct?($c(t,e,a),Xe(t,e,a)):(lt&&n&&Dc(e),e.flags|=1,Vt(t,e,l,a),e.child)}function qo(t,e,l,n,a,u){return Gl(e),e.updateQueue=null,l=Vf(e,n,l,a),Qf(t),n=Wc(),t!==null&&!Ct?($c(t,e,u),Xe(t,e,u)):(lt&&n&&Dc(e),e.flags|=1,Vt(t,e,l,u),e.child)}function Qo(t,e,l,n,a){if(Gl(e),e.stateNode===null){var u=nn,c=l.contextType;typeof c=="object"&&c!==null&&(u=Qt(c)),u=new l(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ri,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},qc(e),c=l.contextType,u.context=typeof c=="object"&&c!==null?Qt(c):nn,u.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(oi(e,l,c,n),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&ri.enqueueReplaceState(u,u.state,null),In(e,n,u,a),Fn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var s=e.memoizedProps,o=Ql(l,s);u.props=o;var g=u.context,x=l.contextType;c=nn,typeof x=="object"&&x!==null&&(c=Qt(x));var M=l.getDerivedStateFromProps;x=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,x||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||g!==c)&&No(e,u,n,c),il=!1;var y=e.memoizedState;u.state=y,In(e,n,u,a),Fn(),g=e.memoizedState,s||y!==g||il?(typeof M=="function"&&(oi(e,l,M,n),g=e.memoizedState),(o=il||Mo(e,l,o,n,y,g,c))?(x||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=g),u.props=n,u.state=g,u.context=c,n=o):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Qc(t,e),c=e.memoizedProps,x=Ql(l,c),u.props=x,M=e.pendingProps,y=u.context,g=l.contextType,o=nn,typeof g=="object"&&g!==null&&(o=Qt(g)),s=l.getDerivedStateFromProps,(g=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==M||y!==o)&&No(e,u,n,o),il=!1,y=e.memoizedState,u.state=y,In(e,n,u,a),Fn();var S=e.memoizedState;c!==M||y!==S||il||t!==null&&t.dependencies!==null&&ka(t.dependencies)?(typeof s=="function"&&(oi(e,l,s,n),S=e.memoizedState),(x=il||Mo(e,l,x,n,y,S,o)||t!==null&&t.dependencies!==null&&ka(t.dependencies))?(g||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,S,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,S,o)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),u.props=n,u.state=S,u.context=o,n=x):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,du(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=Yl(e,t.child,null,a),e.child=Yl(e,null,l,a)):Vt(t,e,l,a),e.memoizedState=u.state,t=e.child):t=Xe(t,e,a),t}function Vo(t,e,l,n){return Cl(),e.flags|=256,Vt(t,e,l,n),e.child}var pi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vi(t){return{baseLanes:t,cachePool:Of()}}function gi(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=me),t}function Xo(t,e,l){var n=e.pendingProps,a=!1,u=(e.flags&128)!==0,c;if((c=u)||(c=t!==null&&t.memoizedState===null?!1:(_t.current&2)!==0),c&&(a=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(a?ol(e):rl(),(t=bt)?(t=Fr(t,Ee),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:nl!==null?{id:De,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},l=Af(t),l.return=e,e.child=l,qt=e,bt=null)):t=null,t===null)throw ul(e);return Pi(t)?e.lanes=32:e.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(rl(),a=e.mode,s=mu({mode:"hidden",children:s},a),n=Rl(n,a,l,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=vi(l),n.childLanes=gi(t,c,l),e.memoizedState=pi,na(null,n)):(ol(e),yi(e,s))}var o=t.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(u)e.flags&256?(ol(e),e.flags&=-257,e=bi(t,e,l)):e.memoizedState!==null?(rl(),e.child=t.child,e.flags|=128,e=null):(rl(),s=n.fallback,a=e.mode,n=mu({mode:"visible",children:n.children},a),s=Rl(s,a,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,Yl(e,t.child,null,l),n=e.child,n.memoizedState=vi(l),n.childLanes=gi(t,c,l),e.memoizedState=pi,e=na(null,n));else if(ol(e),Pi(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var g=c.dgst;c=g,n=Error(f(419)),n.stack="",n.digest=c,Zn({value:n,source:null,stack:null}),e=bi(t,e,l)}else if(Ct||sn(t,e,l,!1),c=(l&t.childLanes)!==0,Ct||c){if(c=gt,c!==null&&(n=Ns(c,l),n!==0&&n!==o.retryLane))throw o.retryLane=n,zl(t,n),le(c,t,n),mi;Ii(s)||Eu(),e=bi(t,e,l)}else Ii(s)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,bt=Te(s.nextSibling),qt=e,lt=!0,al=null,Ee=!1,t!==null&&Tf(e,t),e=yi(e,n.children),e.flags|=4096);return e}return a?(rl(),s=n.fallback,a=e.mode,o=t.child,g=o.sibling,n=He(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,g!==null?s=He(g,s):(s=Rl(s,a,l,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,na(null,n),n=e.child,s=t.child.memoizedState,s===null?s=vi(l):(a=s.cachePool,a!==null?(o=zt._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Of(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=gi(t,c,l),e.memoizedState=pi,na(t.child,n)):(ol(e),l=t.child,t=l.sibling,l=He(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function yi(t,e){return e=mu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function mu(t,e){return t=fe(22,t,null,e),t.lanes=0,t}function bi(t,e,l){return Yl(e,t.child,null,l),t=yi(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wo(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Uc(t.return,e,l)}function Si(t,e,l,n,a,u){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=l,c.tailMode=a,c.treeForkCount=u)}function Zo(t,e,l){var n=e.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var c=_t.current,s=(c&2)!==0;if(s?(c=c&1|2,e.flags|=128):c&=1,C(_t,c),Vt(t,e,n,l),n=lt?wn:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wo(t,l,e);else if(t.tag===19)wo(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(l=e.child,a=null;l!==null;)t=l.alternate,t!==null&&eu(t)===null&&(a=l),l=l.sibling;l=a,l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),Si(e,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&eu(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}Si(e,!0,l,null,u,n);break;case"together":Si(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Xe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),hl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(sn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,l=He(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=He(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Ai(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ka(t)))}function rh(t,e,l){switch(e.tag){case 3:dt(e,e.stateNode.containerInfo),cl(e,zt,t.memoizedState.cache),Cl();break;case 27:case 5:Dn(e);break;case 4:dt(e,e.stateNode.containerInfo);break;case 10:cl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Kc(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(ol(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Xo(t,e,l):(ol(e),t=Xe(t,e,l),t!==null?t.sibling:null);ol(e);break;case 19:var a=(t.flags&128)!==0;if(n=(l&e.childLanes)!==0,n||(sn(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return Zo(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),C(_t,_t.current),n)break;return null;case 22:return e.lanes=0,Ho(t,e,l,e.pendingProps);case 24:cl(e,zt,t.memoizedState.cache)}return Xe(t,e,l)}function Ko(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ct=!0;else{if(!Ai(t,l)&&(e.flags&128)===0)return Ct=!1,rh(t,e,l);Ct=(t.flags&131072)!==0}else Ct=!1,lt&&(e.flags&1048576)!==0&&xf(e,wn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=Hl(e.elementType),e.type=t,typeof t=="function")Mc(t)?(n=Ql(t,n),e.tag=1,e=Qo(null,e,t,n,l)):(e.tag=0,e=hi(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===Zt){e.tag=11,e=Uo(null,e,t,n,l);break t}else if(a===F){e.tag=14,e=Go(null,e,t,n,l);break t}}throw e=Jt(t)||t,Error(f(306,e,""))}}return e;case 0:return hi(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=Ql(n,e.pendingProps),Qo(t,e,n,a,l);case 3:t:{if(dt(e,e.stateNode.containerInfo),t===null)throw Error(f(387));n=e.pendingProps;var u=e.memoizedState;a=u.element,Qc(t,e),In(e,n,null,l);var c=e.memoizedState;if(n=c.cache,cl(e,zt,n),n!==u.cache&&Gc(e,[zt],l,!0),Fn(),n=c.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Vo(t,e,n,l);break t}else if(n!==a){a=be(Error(f(424)),e),Zn(a),e=Vo(t,e,n,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(bt=Te(t.firstChild),qt=e,lt=!0,al=null,Ee=!0,l=Bf(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Cl(),n===a){e=Xe(t,e,l);break t}Vt(t,e,n,l)}e=e.child}return e;case 26:return du(t,e),t===null?(l=nd(e.type,null,e.pendingProps,null))?e.memoizedState=l:lt||(l=e.type,t=e.pendingProps,n=Du(z.current).createElement(l),n[Yt]=e,n[$t]=t,Xt(n,l,t),Bt(n),e.stateNode=n):e.memoizedState=nd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Dn(e),t===null&&lt&&(n=e.stateNode=td(e.type,e.pendingProps,z.current),qt=e,Ee=!0,a=bt,bl(e.type)?(ts=a,bt=Te(n.firstChild)):bt=a),Vt(t,e,e.pendingProps.children,l),du(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((a=n=bt)&&(n=Qh(n,e.type,e.pendingProps,Ee),n!==null?(e.stateNode=n,qt=e,bt=Te(n.firstChild),Ee=!1,a=!0):a=!1),a||ul(e)),Dn(e),a=e.type,u=e.pendingProps,c=t!==null?t.memoizedProps:null,n=u.children,Wi(a,u)?n=null:c!==null&&Wi(a,c)&&(e.flags|=32),e.memoizedState!==null&&(a=Jc(t,e,lh,null,null,l),ya._currentValue=a),du(t,e),Vt(t,e,n,l),e.child;case 6:return t===null&&lt&&((t=l=bt)&&(l=Vh(l,e.pendingProps,Ee),l!==null?(e.stateNode=l,qt=e,bt=null,t=!0):t=!1),t||ul(e)),null;case 13:return Xo(t,e,l);case 4:return dt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Yl(e,null,n,l):Vt(t,e,n,l),e.child;case 11:return Uo(t,e,e.type,e.pendingProps,l);case 7:return Vt(t,e,e.pendingProps,l),e.child;case 8:return Vt(t,e,e.pendingProps.children,l),e.child;case 12:return Vt(t,e,e.pendingProps.children,l),e.child;case 10:return n=e.pendingProps,cl(e,e.type,n.value),Vt(t,e,n.children,l),e.child;case 9:return a=e.type._context,n=e.pendingProps.children,Gl(e),a=Qt(a),n=n(a),e.flags|=1,Vt(t,e,n,l),e.child;case 14:return Go(t,e,e.type,e.pendingProps,l);case 15:return Bo(t,e,e.type,e.pendingProps,l);case 19:return Zo(t,e,l);case 31:return oh(t,e,l);case 22:return Ho(t,e,l,e.pendingProps);case 24:return Gl(e),n=Qt(zt),t===null?(a=Lc(),a===null&&(a=gt,u=Bc(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),e.memoizedState={parent:n,cache:a},qc(e),cl(e,zt,a)):((t.lanes&l)!==0&&(Qc(t,e),In(e,null,null,l),Fn()),a=t.memoizedState,u=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),cl(e,zt,n)):(n=u.cache,cl(e,zt,n),n!==a.cache&&Gc(e,[zt],l,!0))),Vt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function we(t){t.flags|=4}function Ei(t,e,l,n,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(br())t.flags|=8192;else throw Ll=Fa,Yc}else t.flags&=-16777217}function ko(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sd(e))if(br())t.flags|=8192;else throw Ll=Fa,Yc}function hu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ts():536870912,t.lanes|=e,Sn|=e)}function aa(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function dh(t,e,l){var n=e.pendingProps;switch(Oc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return St(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),qe(zt),yt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(cn(e)?we(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Rc())),St(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(we(e),u!==null?(St(e),ko(e,u)):(St(e),Ei(e,a,null,n,l))):u?u!==t.memoizedState?(we(e),St(e),ko(e,u)):(St(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&we(e),St(e),Ei(e,a,t,n,l)),null;case 27:if(ja(e),l=z.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&we(e);else{if(!n){if(e.stateNode===null)throw Error(f(166));return St(e),null}t=B.current,cn(e)?jf(e):(t=td(a,n,l),e.stateNode=t,we(e))}return St(e),null;case 5:if(ja(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&we(e);else{if(!n){if(e.stateNode===null)throw Error(f(166));return St(e),null}if(u=B.current,cn(e))jf(e);else{var c=Du(z.current);switch(u){case 1:u=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=c.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?c.createElement(a,{is:n.is}):c.createElement(a)}}u[Yt]=e,u[$t]=n;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)u.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=u;t:switch(Xt(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&we(e)}}return St(e),Ei(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&we(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(f(166));if(t=z.current,cn(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=qt,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[Yt]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Xr(t.nodeValue,l)),t||ul(e,!0)}else t=Du(t).createTextNode(n),t[Yt]=e,e.stateNode=t}return St(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=cn(e),l!==null){if(t===null){if(!n)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[Yt]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;St(e),t=!1}else l=Rc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(re(e),e):(re(e),null);if((e.flags&128)!==0)throw Error(f(558))}return St(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=cn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(f(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[Yt]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;St(e),a=!1}else a=Rc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(re(e),e):(re(e),null)}return re(e),(e.flags&128)!==0?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),hu(e,e.updateQueue),St(e),null);case 4:return yt(),t===null&&wi(e.stateNode.containerInfo),St(e),null;case 10:return qe(e.type),St(e),null;case 19:if(N(_t),n=e.memoizedState,n===null)return St(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)aa(n,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=eu(t),u!==null){for(e.flags|=128,aa(n,!1),t=u.updateQueue,e.updateQueue=t,hu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Sf(l,t),l=l.sibling;return C(_t,_t.current&1|2),lt&&Le(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&ue()>bu&&(e.flags|=128,a=!0,aa(n,!1),e.lanes=4194304)}else{if(!a)if(t=eu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,hu(e,t),aa(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!lt)return St(e),null}else 2*ue()-n.renderingStartTime>bu&&l!==536870912&&(e.flags|=128,a=!0,aa(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=ue(),t.sibling=null,l=_t.current,C(_t,a?l&1|2:l&1),lt&&Le(e,n.treeForkCount),t):(St(e),null);case 22:case 23:return re(e),Zc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(l&536870912)!==0&&(e.flags&128)===0&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),l=e.updateQueue,l!==null&&hu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&N(Bl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),qe(zt),St(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function mh(t,e){switch(Oc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qe(zt),yt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ja(e),null;case 31:if(e.memoizedState!==null){if(re(e),e.alternate===null)throw Error(f(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(re(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return N(_t),null;case 4:return yt(),null;case 10:return qe(e.type),null;case 22:case 23:return re(e),Zc(),t!==null&&N(Bl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return qe(zt),null;case 25:return null;default:return null}}function Jo(t,e){switch(Oc(e),e.tag){case 3:qe(zt),yt();break;case 26:case 27:case 5:ja(e);break;case 4:yt();break;case 31:e.memoizedState!==null&&re(e);break;case 13:re(e);break;case 19:N(_t);break;case 10:qe(e.type);break;case 22:case 23:re(e),Zc(),t!==null&&N(Bl);break;case 24:qe(zt)}}function ua(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var u=l.create,c=l.inst;n=u(),c.destroy=n}l=l.next}while(l!==a)}}catch(s){rt(e,e.return,s)}}function dl(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&t)===t){var c=n.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,a=e;var o=l,g=s;try{g()}catch(x){rt(a,o,x)}}}n=n.next}while(n!==u)}}catch(x){rt(e,e.return,x)}}function Wo(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Lf(e,l)}catch(n){rt(t,t.return,n)}}}function $o(t,e,l){l.props=Ql(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){rt(t,e,n)}}function ca(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(a){rt(t,e,a)}}function ze(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){rt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){rt(t,e,a)}else l.current=null}function Fo(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){rt(t,t.return,a)}}function xi(t,e,l){try{var n=t.stateNode;Gh(n,t.type,l,e),n[$t]=e}catch(a){rt(t,t.return,a)}}function Io(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bl(t.type)||t.tag===4}function Ti(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Io(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ji(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ge));else if(n!==4&&(n===27&&bl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(ji(t,e,l),t=t.sibling;t!==null;)ji(t,e,l),t=t.sibling}function pu(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(n!==4&&(n===27&&bl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(pu(t,e,l),t=t.sibling;t!==null;)pu(t,e,l),t=t.sibling}function Po(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xt(e,n,l),e[Yt]=t,e[$t]=l}catch(u){rt(t,t.return,u)}}var Ze=!1,Ut=!1,Mi=!1,tr=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function hh(t,e){if(t=t.containerInfo,ki=Bu,t=rf(t),bc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var c=0,s=-1,o=-1,g=0,x=0,M=t,y=null;e:for(;;){for(var S;M!==l||a!==0&&M.nodeType!==3||(s=c+a),M!==u||n!==0&&M.nodeType!==3||(o=c+n),M.nodeType===3&&(c+=M.nodeValue.length),(S=M.firstChild)!==null;)y=M,M=S;for(;;){if(M===t)break e;if(y===l&&++g===a&&(s=c),y===u&&++x===n&&(o=c),(S=M.nextSibling)!==null)break;M=y,y=M.parentNode}M=S}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ji={focusedElem:t,selectionRange:l},Bu=!1,Ht=e;Ht!==null;)if(e=Ht,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ht=t;else for(;Ht!==null;){switch(e=Ht,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)a=t[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var H=Ql(l.type,a);t=n.getSnapshotBeforeUpdate(H,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(X){rt(l,l.return,X)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Fi(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Fi(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Ht=t;break}Ht=e.return}}function er(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:ke(t,l),n&4&&ua(5,l);break;case 1:if(ke(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){rt(l,l.return,c)}else{var a=Ql(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){rt(l,l.return,c)}}n&64&&Wo(l),n&512&&ca(l,l.return);break;case 3:if(ke(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Lf(t,e)}catch(c){rt(l,l.return,c)}}break;case 27:e===null&&n&4&&Po(l);case 26:case 5:ke(t,l),e===null&&n&4&&Fo(l),n&512&&ca(l,l.return);break;case 12:ke(t,l);break;case 31:ke(t,l),n&4&&ar(t,l);break;case 13:ke(t,l),n&4&&ur(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=xh.bind(null,l),Xh(t,l))));break;case 22:if(n=l.memoizedState!==null||Ze,!n){e=e!==null&&e.memoizedState!==null||Ut,a=Ze;var u=Ut;Ze=n,(Ut=e)&&!u?Je(t,l,(l.subtreeFlags&8772)!==0):ke(t,l),Ze=a,Ut=u}break;case 30:break;default:ke(t,l)}}function lr(t){var e=t.alternate;e!==null&&(t.alternate=null,lr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&lc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var At=null,It=!1;function Ke(t,e,l){for(l=l.child;l!==null;)nr(t,e,l),l=l.sibling}function nr(t,e,l){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(On,l)}catch{}switch(l.tag){case 26:Ut||ze(l,e),Ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ut||ze(l,e);var n=At,a=It;bl(l.type)&&(At=l.stateNode,It=!1),Ke(t,e,l),pa(l.stateNode),At=n,It=a;break;case 5:Ut||ze(l,e);case 6:if(n=At,a=It,At=null,Ke(t,e,l),At=n,It=a,At!==null)if(It)try{(At.nodeType===9?At.body:At.nodeName==="HTML"?At.ownerDocument.body:At).removeChild(l.stateNode)}catch(u){rt(l,e,u)}else try{At.removeChild(l.stateNode)}catch(u){rt(l,e,u)}break;case 18:At!==null&&(It?(t=At,Wr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),_n(t)):Wr(At,l.stateNode));break;case 4:n=At,a=It,At=l.stateNode.containerInfo,It=!0,Ke(t,e,l),At=n,It=a;break;case 0:case 11:case 14:case 15:dl(2,l,e),Ut||dl(4,l,e),Ke(t,e,l);break;case 1:Ut||(ze(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&$o(l,e,n)),Ke(t,e,l);break;case 21:Ke(t,e,l);break;case 22:Ut=(n=Ut)||l.memoizedState!==null,Ke(t,e,l),Ut=n;break;default:Ke(t,e,l)}}function ar(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_n(t)}catch(l){rt(e,e.return,l)}}}function ur(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_n(t)}catch(l){rt(e,e.return,l)}}function ph(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new tr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new tr),e;default:throw Error(f(435,t.tag))}}function vu(t,e){var l=ph(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=Th.bind(null,t,n);n.then(a,a)}})}function Pt(t,e){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=t,c=e,s=c;t:for(;s!==null;){switch(s.tag){case 27:if(bl(s.type)){At=s.stateNode,It=!1;break t}break;case 5:At=s.stateNode,It=!1;break t;case 3:case 4:At=s.stateNode.containerInfo,It=!0;break t}s=s.return}if(At===null)throw Error(f(160));nr(u,c,a),At=null,It=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)cr(e,t),e=e.sibling}var Ne=null;function cr(t,e){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(e,t),te(t),n&4&&(dl(3,t,t.return),ua(3,t),dl(5,t,t.return));break;case 1:Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),n&64&&Ze&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Ne;if(Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=t.memoizedState,l===null)if(n===null)if(t.stateNode===null){t:{n=t.type,l=t.memoizedProps,a=a.ownerDocument||a;e:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Cn]||u[Yt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),Xt(u,n,l),u[Yt]=t,Bt(u),n=u;break t;case"link":var c=cd("link","href",a).get(n+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(u=c[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break e}}u=a.createElement(n),Xt(u,n,l),a.head.appendChild(u);break;case"meta":if(c=cd("meta","content",a).get(n+(l.content||""))){for(s=0;s<c.length;s++)if(u=c[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break e}}u=a.createElement(n),Xt(u,n,l),a.head.appendChild(u);break;default:throw Error(f(468,n))}u[Yt]=t,Bt(u),n=u}t.stateNode=n}else id(a,t.type,t.stateNode);else t.stateNode=ud(a,n,t.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?id(a,t.type,t.stateNode):ud(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&xi(t,t.memoizedProps,l.memoizedProps)}break;case 27:Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),l!==null&&n&4&&xi(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Pt(e,t),te(t),n&512&&(Ut||l===null||ze(l,l.return)),t.flags&32){a=t.stateNode;try{$l(a,"")}catch(H){rt(t,t.return,H)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,xi(t,a,l!==null?l.memoizedProps:a)),n&1024&&(Mi=!0);break;case 6:if(Pt(e,t),te(t),n&4){if(t.stateNode===null)throw Error(f(162));n=t.memoizedProps,l=t.stateNode;try{l.nodeValue=n}catch(H){rt(t,t.return,H)}}break;case 3:if(Ru=null,a=Ne,Ne=Ou(e.containerInfo),Pt(e,t),Ne=a,te(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{_n(e.containerInfo)}catch(H){rt(t,t.return,H)}Mi&&(Mi=!1,ir(t));break;case 4:n=Ne,Ne=Ou(t.stateNode.containerInfo),Pt(e,t),te(t),Ne=n;break;case 12:Pt(e,t),te(t);break;case 31:Pt(e,t),te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 13:Pt(e,t),te(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yu=ue()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 22:a=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,g=Ze,x=Ut;if(Ze=g||a,Ut=x||o,Pt(e,t),Ut=x,Ze=g,te(t),n&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(l===null||o||Ze||Ut||Vl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){o=l=e;try{if(u=o.stateNode,a)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=o.stateNode;var M=o.memoizedProps.style,y=M!=null&&M.hasOwnProperty("display")?M.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){rt(o,o.return,H)}}}else if(e.tag===6){if(l===null){o=e;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(H){rt(o,o.return,H)}}}else if(e.tag===18){if(l===null){o=e;try{var S=o.stateNode;a?$r(S,!0):$r(o.stateNode,!1)}catch(H){rt(o,o.return,H)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,vu(t,l))));break;case 19:Pt(e,t),te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 30:break;case 21:break;default:Pt(e,t),te(t)}}function te(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if(Io(n)){l=n;break}n=n.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var a=l.stateNode,u=Ti(t);pu(t,u,a);break;case 5:var c=l.stateNode;l.flags&32&&($l(c,""),l.flags&=-33);var s=Ti(t);pu(t,s,c);break;case 3:case 4:var o=l.stateNode.containerInfo,g=Ti(t);ji(t,g,o);break;default:throw Error(f(161))}}catch(x){rt(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ir(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ir(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)er(t,e.alternate,e),e=e.sibling}function Vl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:dl(4,e,e.return),Vl(e);break;case 1:ze(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&$o(e,e.return,l),Vl(e);break;case 27:pa(e.stateNode);case 26:case 5:ze(e,e.return),Vl(e);break;case 22:e.memoizedState===null&&Vl(e);break;case 30:Vl(e);break;default:Vl(e)}t=t.sibling}}function Je(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,a=t,u=e,c=u.flags;switch(u.tag){case 0:case 11:case 15:Je(a,u,l),ua(4,u);break;case 1:if(Je(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){rt(n,n.return,g)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)Hf(o[a],s)}catch(g){rt(n,n.return,g)}}l&&c&64&&Wo(u),ca(u,u.return);break;case 27:Po(u);case 26:case 5:Je(a,u,l),l&&n===null&&c&4&&Fo(u),ca(u,u.return);break;case 12:Je(a,u,l);break;case 31:Je(a,u,l),l&&c&4&&ar(a,u);break;case 13:Je(a,u,l),l&&c&4&&ur(a,u);break;case 22:u.memoizedState===null&&Je(a,u,l),ca(u,u.return);break;case 30:break;default:Je(a,u,l)}e=e.sibling}}function Ni(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Kn(l))}function _i(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t))}function _e(t,e,l,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sr(t,e,l,n),e=e.sibling}function sr(t,e,l,n){var a=e.flags;switch(e.tag){case 0:case 11:case 15:_e(t,e,l,n),a&2048&&ua(9,e);break;case 1:_e(t,e,l,n);break;case 3:_e(t,e,l,n),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t)));break;case 12:if(a&2048){_e(t,e,l,n),t=e.stateNode;try{var u=e.memoizedProps,c=u.id,s=u.onPostCommit;typeof s=="function"&&s(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){rt(e,e.return,o)}}else _e(t,e,l,n);break;case 31:_e(t,e,l,n);break;case 13:_e(t,e,l,n);break;case 23:break;case 22:u=e.stateNode,c=e.alternate,e.memoizedState!==null?u._visibility&2?_e(t,e,l,n):ia(t,e):u._visibility&2?_e(t,e,l,n):(u._visibility|=2,gn(t,e,l,n,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Ni(c,e);break;case 24:_e(t,e,l,n),a&2048&&_i(e.alternate,e);break;default:_e(t,e,l,n)}}function gn(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,c=e,s=l,o=n,g=c.flags;switch(c.tag){case 0:case 11:case 15:gn(u,c,s,o,a),ua(8,c);break;case 23:break;case 22:var x=c.stateNode;c.memoizedState!==null?x._visibility&2?gn(u,c,s,o,a):ia(u,c):(x._visibility|=2,gn(u,c,s,o,a)),a&&g&2048&&Ni(c.alternate,c);break;case 24:gn(u,c,s,o,a),a&&g&2048&&_i(c.alternate,c);break;default:gn(u,c,s,o,a)}e=e.sibling}}function ia(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:ia(l,n),a&2048&&Ni(n.alternate,n);break;case 24:ia(l,n),a&2048&&_i(n.alternate,n);break;default:ia(l,n)}e=e.sibling}}var sa=8192;function yn(t,e,l){if(t.subtreeFlags&sa)for(t=t.child;t!==null;)fr(t,e,l),t=t.sibling}function fr(t,e,l){switch(t.tag){case 26:yn(t,e,l),t.flags&sa&&t.memoizedState!==null&&e0(l,Ne,t.memoizedState,t.memoizedProps);break;case 5:yn(t,e,l);break;case 3:case 4:var n=Ne;Ne=Ou(t.stateNode.containerInfo),yn(t,e,l),Ne=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=sa,sa=16777216,yn(t,e,l),sa=n):yn(t,e,l));break;default:yn(t,e,l)}}function or(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function fa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Ht=n,dr(n,t)}or(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rr(t),t=t.sibling}function rr(t){switch(t.tag){case 0:case 11:case 15:fa(t),t.flags&2048&&dl(9,t,t.return);break;case 3:fa(t);break;case 12:fa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gu(t)):fa(t);break;default:fa(t)}}function gu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Ht=n,dr(n,t)}or(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:dl(8,e,e.return),gu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,gu(e));break;default:gu(e)}t=t.sibling}}function dr(t,e){for(;Ht!==null;){var l=Ht;switch(l.tag){case 0:case 11:case 15:dl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Kn(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Ht=n;else t:for(l=t;Ht!==null;){n=Ht;var a=n.sibling,u=n.return;if(lr(n),n===l){Ht=null;break t}if(a!==null){a.return=u,Ht=a;break t}Ht=u}}}var vh={getCacheForType:function(t){var e=Qt(zt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Qt(zt).controller.signal}},gh=typeof WeakMap=="function"?WeakMap:Map,it=0,gt=null,I=null,tt=0,ot=0,de=null,ml=!1,bn=!1,Di=!1,We=0,Nt=0,hl=0,Xl=0,Oi=0,me=0,Sn=0,oa=null,ee=null,zi=!1,yu=0,mr=0,bu=1/0,Su=null,pl=null,Gt=0,vl=null,An=null,$e=0,Ri=0,Ci=null,hr=null,ra=0,Ui=null;function he(){return(it&2)!==0&&tt!==0?tt&-tt:T.T!==null?qi():_s()}function pr(){if(me===0)if((tt&536870912)===0||lt){var t=_a;_a<<=1,(_a&3932160)===0&&(_a=262144),me=t}else me=536870912;return t=oe.current,t!==null&&(t.flags|=32),me}function le(t,e,l){(t===gt&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(En(t,0),gl(t,tt,me,!1)),Rn(t,l),((it&2)===0||t!==gt)&&(t===gt&&((it&2)===0&&(Xl|=l),Nt===4&&gl(t,tt,me,!1)),Re(t))}function vr(t,e,l){if((it&6)!==0)throw Error(f(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||zn(t,e),a=n?Sh(t,e):Bi(t,e,!0),u=n;do{if(a===0){bn&&!n&&gl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!yh(l)){a=Bi(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var s=t;a=oa;var o=s.current.memoizedState.isDehydrated;if(o&&(En(s,c).flags|=256),c=Bi(s,c,!1),c!==2){if(Di&&!o){s.errorRecoveryDisabledLanes|=u,Xl|=u,a=4;break t}u=ee,ee=a,u!==null&&(ee===null?ee=u:ee.push.apply(ee,u))}a=c}if(u=!1,a!==2)continue}}if(a===1){En(t,0),gl(t,e,0,!0);break}t:{switch(n=t,u=a,u){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:gl(n,e,me,!ml);break t;case 2:ee=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(a=yu+300-ue(),10<a)){if(gl(n,e,me,!ml),Oa(n,0,!0)!==0)break t;$e=e,n.timeoutHandle=kr(gr.bind(null,n,l,ee,Su,zi,e,me,Xl,Sn,ml,u,"Throttled",-0,0),a);break t}gr(n,l,ee,Su,zi,e,me,Xl,Sn,ml,u,null,-0,0)}}break}while(!0);Re(t)}function gr(t,e,l,n,a,u,c,s,o,g,x,M,y,S){if(t.timeoutHandle=-1,M=e.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ge},fr(e,u,M);var H=(u&62914560)===u?yu-ue():(u&4194048)===u?mr-ue():0;if(H=l0(M,H),H!==null){$e=u,t.cancelPendingCommit=H(jr.bind(null,t,e,u,l,n,a,c,s,o,x,M,null,y,S)),gl(t,u,c,!g);return}}jr(t,e,u,l,n,a,c,s,o)}function yh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!se(u(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gl(t,e,l,n){e&=~Oi,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var u=31-ie(a),c=1<<u;n[u]=-1,a&=~c}l!==0&&js(t,l,e)}function Au(){return(it&6)===0?(da(0),!1):!0}function Gi(){if(I!==null){if(ot===0)var t=I.return;else t=I,Ye=Ul=null,Fc(t),dn=null,Jn=0,t=I;for(;t!==null;)Jo(t.alternate,t),t=t.return;I=null}}function En(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Lh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),$e=0,Gi(),gt=t,I=l=He(t.current,null),tt=e,ot=0,de=null,ml=!1,bn=zn(t,e),Di=!1,Sn=me=Oi=Xl=hl=Nt=0,ee=oa=null,zi=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-ie(n),u=1<<a;e|=t[a],n&=~u}return We=e,Va(),l}function yr(t,e){W=null,T.H=la,e===rn||e===$a?(e=Cf(),ot=3):e===Yc?(e=Cf(),ot=4):ot=e===mi?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,de=e,I===null&&(Nt=1,ou(t,be(e,t.current)))}function br(){var t=oe.current;return t===null?!0:(tt&4194048)===tt?xe===null:(tt&62914560)===tt||(tt&536870912)!==0?t===xe:!1}function Sr(){var t=T.H;return T.H=la,t===null?la:t}function Ar(){var t=T.A;return T.A=vh,t}function Eu(){Nt=4,ml||(tt&4194048)!==tt&&oe.current!==null||(bn=!0),(hl&134217727)===0&&(Xl&134217727)===0||gt===null||gl(gt,tt,me,!1)}function Bi(t,e,l){var n=it;it|=2;var a=Sr(),u=Ar();(gt!==t||tt!==e)&&(Su=null,En(t,e)),e=!1;var c=Nt;t:do try{if(ot!==0&&I!==null){var s=I,o=de;switch(ot){case 8:Gi(),c=6;break t;case 3:case 2:case 9:case 6:oe.current===null&&(e=!0);var g=ot;if(ot=0,de=null,xn(t,s,o,g),l&&bn){c=0;break t}break;default:g=ot,ot=0,de=null,xn(t,s,o,g)}}bh(),c=Nt;break}catch(x){yr(t,x)}while(!0);return e&&t.shellSuspendCounter++,Ye=Ul=null,it=n,T.H=a,T.A=u,I===null&&(gt=null,tt=0,Va()),c}function bh(){for(;I!==null;)Er(I)}function Sh(t,e){var l=it;it|=2;var n=Sr(),a=Ar();gt!==t||tt!==e?(Su=null,bu=ue()+500,En(t,e)):bn=zn(t,e);t:do try{if(ot!==0&&I!==null){e=I;var u=de;e:switch(ot){case 1:ot=0,de=null,xn(t,e,u,1);break;case 2:case 9:if(zf(u)){ot=0,de=null,xr(e);break}e=function(){ot!==2&&ot!==9||gt!==t||(ot=7),Re(t)},u.then(e,e);break t;case 3:ot=7;break t;case 4:ot=5;break t;case 7:zf(u)?(ot=0,de=null,xr(e)):(ot=0,de=null,xn(t,e,u,7));break;case 5:var c=null;switch(I.tag){case 26:c=I.memoizedState;case 5:case 27:var s=I;if(c?sd(c):s.stateNode.complete){ot=0,de=null;var o=s.sibling;if(o!==null)I=o;else{var g=s.return;g!==null?(I=g,xu(g)):I=null}break e}}ot=0,de=null,xn(t,e,u,5);break;case 6:ot=0,de=null,xn(t,e,u,6);break;case 8:Gi(),Nt=6;break t;default:throw Error(f(462))}}Ah();break}catch(x){yr(t,x)}while(!0);return Ye=Ul=null,T.H=n,T.A=a,it=l,I!==null?0:(gt=null,tt=0,Va(),Nt)}function Ah(){for(;I!==null&&!wd();)Er(I)}function Er(t){var e=Ko(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?xu(t):I=e}function xr(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=qo(l,e,e.pendingProps,e.type,void 0,tt);break;case 11:e=qo(l,e,e.pendingProps,e.type.render,e.ref,tt);break;case 5:Fc(e);default:Jo(l,e),e=I=Sf(e,We),e=Ko(l,e,We)}t.memoizedProps=t.pendingProps,e===null?xu(t):I=e}function xn(t,e,l,n){Ye=Ul=null,Fc(e),dn=null,Jn=0;var a=e.return;try{if(fh(t,a,e,l,tt)){Nt=1,ou(t,be(l,t.current)),I=null;return}}catch(u){if(a!==null)throw I=a,u;Nt=1,ou(t,be(l,t.current)),I=null;return}e.flags&32768?(lt||n===1?t=!0:bn||(tt&536870912)!==0?t=!1:(ml=t=!0,(n===2||n===9||n===3||n===6)&&(n=oe.current,n!==null&&n.tag===13&&(n.flags|=16384))),Tr(e,t)):xu(e)}function xu(t){var e=t;do{if((e.flags&32768)!==0){Tr(e,ml);return}t=e.return;var l=dh(e.alternate,e,We);if(l!==null){I=l;return}if(e=e.sibling,e!==null){I=e;return}I=e=t}while(e!==null);Nt===0&&(Nt=5)}function Tr(t,e){do{var l=mh(t.alternate,t);if(l!==null){l.flags&=32767,I=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){I=t;return}I=t=l}while(t!==null);Nt=6,I=null}function jr(t,e,l,n,a,u,c,s,o){t.cancelPendingCommit=null;do Tu();while(Gt!==0);if((it&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(u=e.lanes|e.childLanes,u|=Tc,tm(t,l,u,c,s,o),t===gt&&(I=gt=null,tt=0),An=e,vl=t,$e=l,Ri=u,Ci=a,hr=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jh(Ma,function(){return Or(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,a=R.p,R.p=2,c=it,it|=4;try{hh(t,e,l)}finally{it=c,R.p=a,T.T=n}}Gt=1,Mr(),Nr(),_r()}}function Mr(){if(Gt===1){Gt=0;var t=vl,e=An,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var n=R.p;R.p=2;var a=it;it|=4;try{cr(e,t);var u=Ji,c=rf(t.containerInfo),s=u.focusedElem,o=u.selectionRange;if(c!==s&&s&&s.ownerDocument&&of(s.ownerDocument.documentElement,s)){if(o!==null&&bc(s)){var g=o.start,x=o.end;if(x===void 0&&(x=g),"selectionStart"in s)s.selectionStart=g,s.selectionEnd=Math.min(x,s.value.length);else{var M=s.ownerDocument||document,y=M&&M.defaultView||window;if(y.getSelection){var S=y.getSelection(),H=s.textContent.length,X=Math.min(o.start,H),pt=o.end===void 0?X:Math.min(o.end,H);!S.extend&&X>pt&&(c=pt,pt=X,X=c);var h=ff(s,X),d=ff(s,pt);if(h&&d&&(S.rangeCount!==1||S.anchorNode!==h.node||S.anchorOffset!==h.offset||S.focusNode!==d.node||S.focusOffset!==d.offset)){var v=M.createRange();v.setStart(h.node,h.offset),S.removeAllRanges(),X>pt?(S.addRange(v),S.extend(d.node,d.offset)):(v.setEnd(d.node,d.offset),S.addRange(v))}}}}for(M=[],S=s;S=S.parentNode;)S.nodeType===1&&M.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<M.length;s++){var j=M[s];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Bu=!!ki,Ji=ki=null}finally{it=a,R.p=n,T.T=l}}t.current=e,Gt=2}}function Nr(){if(Gt===2){Gt=0;var t=vl,e=An,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var n=R.p;R.p=2;var a=it;it|=4;try{er(t,e.alternate,e)}finally{it=a,R.p=n,T.T=l}}Gt=3}}function _r(){if(Gt===4||Gt===3){Gt=0,Zd();var t=vl,e=An,l=$e,n=hr;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Gt=5:(Gt=0,An=vl=null,Dr(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(pl=null),tc(l),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(On,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=T.T,a=R.p,R.p=2,T.T=null;try{for(var u=t.onRecoverableError,c=0;c<n.length;c++){var s=n[c];u(s.value,{componentStack:s.stack})}}finally{T.T=e,R.p=a}}($e&3)!==0&&Tu(),Re(t),a=t.pendingLanes,(l&261930)!==0&&(a&42)!==0?t===Ui?ra++:(ra=0,Ui=t):ra=0,da(0)}}function Dr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Kn(e)))}function Tu(){return Mr(),Nr(),_r(),Or()}function Or(){if(Gt!==5)return!1;var t=vl,e=Ri;Ri=0;var l=tc($e),n=T.T,a=R.p;try{R.p=32>l?32:l,T.T=null,l=Ci,Ci=null;var u=vl,c=$e;if(Gt=0,An=vl=null,$e=0,(it&6)!==0)throw Error(f(331));var s=it;if(it|=4,rr(u.current),sr(u,u.current,c,l),it=s,da(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(On,u)}catch{}return!0}finally{R.p=a,T.T=n,Dr(t,e)}}function zr(t,e,l){e=be(l,e),e=di(t.stateNode,e,2),t=fl(t,e,2),t!==null&&(Rn(t,2),Re(t))}function rt(t,e,l){if(t.tag===3)zr(t,t,l);else for(;e!==null;){if(e.tag===3){zr(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pl===null||!pl.has(n))){t=be(l,t),l=Ro(2),n=fl(e,l,2),n!==null&&(Co(l,n,e,t),Rn(n,2),Re(n));break}}e=e.return}}function Hi(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new gh;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(Di=!0,a.add(l),t=Eh.bind(null,t,e,l),e.then(t,t))}function Eh(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,gt===t&&(tt&l)===l&&(Nt===4||Nt===3&&(tt&62914560)===tt&&300>ue()-yu?(it&2)===0&&En(t,0):Oi|=l,Sn===tt&&(Sn=0)),Re(t)}function Rr(t,e){e===0&&(e=Ts()),t=zl(t,e),t!==null&&(Rn(t,e),Re(t))}function xh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Rr(t,l)}function Th(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(f(314))}n!==null&&n.delete(e),Rr(t,l)}function jh(t,e){return $u(t,e)}var ju=null,Tn=null,Li=!1,Mu=!1,Yi=!1,yl=0;function Re(t){t!==Tn&&t.next===null&&(Tn===null?ju=Tn=t:Tn=Tn.next=t),Mu=!0,Li||(Li=!0,Nh())}function da(t,e){if(!Yi&&Mu){Yi=!0;do for(var l=!1,n=ju;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var c=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-ie(42|t)+1)-1,u&=a&~(c&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Br(n,u))}else u=tt,u=Oa(n,n===gt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||zn(n,u)||(l=!0,Br(n,u));n=n.next}while(l);Yi=!1}}function Mh(){Cr()}function Cr(){Mu=Li=!1;var t=0;yl!==0&&Hh()&&(t=yl);for(var e=ue(),l=null,n=ju;n!==null;){var a=n.next,u=Ur(n,e);u===0?(n.next=null,l===null?ju=a:l.next=a,a===null&&(Tn=l)):(l=n,(t!==0||(u&3)!==0)&&(Mu=!0)),n=a}Gt!==0&&Gt!==5||da(t),yl!==0&&(yl=0)}function Ur(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var c=31-ie(u),s=1<<c,o=a[c];o===-1?((s&l)===0||(s&n)!==0)&&(a[c]=Pd(s,e)):o<=e&&(t.expiredLanes|=s),u&=~s}if(e=gt,l=tt,l=Oa(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Fu(n),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||zn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&Fu(n),tc(l)){case 2:case 8:l=Es;break;case 32:l=Ma;break;case 268435456:l=xs;break;default:l=Ma}return n=Gr.bind(null,t),l=$u(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&Fu(n),t.callbackPriority=2,t.callbackNode=null,2}function Gr(t,e){if(Gt!==0&&Gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Tu()&&t.callbackNode!==l)return null;var n=tt;return n=Oa(t,t===gt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(vr(t,n,e),Ur(t,ue()),t.callbackNode!=null&&t.callbackNode===l?Gr.bind(null,t):null)}function Br(t,e){if(Tu())return null;vr(t,e,!0)}function Nh(){Yh(function(){(it&6)!==0?$u(As,Mh):Cr()})}function qi(){if(yl===0){var t=fn;t===0&&(t=Na,Na<<=1,(Na&261888)===0&&(Na=256)),yl=t}return yl}function Hr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ua(""+t)}function Lr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function _h(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var u=Hr((a[$t]||null).action),c=n.submitter;c&&(e=(e=c[$t]||null)?Hr(e.formAction):c.getAttribute("formAction"),e!==null&&(u=e,c=null));var s=new La("action","action",null,n,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(yl!==0){var o=c?Lr(a,c):new FormData(a);ci(l,{pending:!0,data:o,method:a.method,action:u},null,o)}}else typeof u=="function"&&(s.preventDefault(),o=c?Lr(a,c):new FormData(a),ci(l,{pending:!0,data:o,method:a.method,action:u},u,o))},currentTarget:a}]})}}for(var Qi=0;Qi<xc.length;Qi++){var Vi=xc[Qi],Dh=Vi.toLowerCase(),Oh=Vi[0].toUpperCase()+Vi.slice(1);Me(Dh,"on"+Oh)}Me(hf,"onAnimationEnd"),Me(pf,"onAnimationIteration"),Me(vf,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(Km,"onTransitionRun"),Me(km,"onTransitionStart"),Me(Jm,"onTransitionCancel"),Me(gf,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),Nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ma));function Yr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var c=n.length-1;0<=c;c--){var s=n[c],o=s.instance,g=s.currentTarget;if(s=s.listener,o!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=g;try{u(a)}catch(x){Qa(x)}a.currentTarget=null,u=o}else for(c=0;c<n.length;c++){if(s=n[c],o=s.instance,g=s.currentTarget,s=s.listener,o!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=g;try{u(a)}catch(x){Qa(x)}a.currentTarget=null,u=o}}}}function P(t,e){var l=e[ec];l===void 0&&(l=e[ec]=new Set);var n=t+"__bubble";l.has(n)||(qr(e,t,2,!1),l.add(n))}function Xi(t,e,l){var n=0;e&&(n|=4),qr(l,t,n,e)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function wi(t){if(!t[Nu]){t[Nu]=!0,zs.forEach(function(l){l!=="selectionchange"&&(zh.has(l)||Xi(l,!1,t),Xi(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nu]||(e[Nu]=!0,Xi("selectionchange",!1,e))}}function qr(t,e,l,n){switch(pd(e)){case 2:var a=u0;break;case 8:a=c0;break;default:a=us}l=a.bind(null,e,l,t),a=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function Zi(t,e,l,n,a){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var s=n.stateNode.containerInfo;if(s===a)break;if(c===4)for(c=n.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===a)return;c=c.return}for(;s!==null;){if(c=Zl(s),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){n=u=c;continue t}s=s.parentNode}}n=n.return}Xs(function(){var g=u,x=sc(l),M=[];t:{var y=yf.get(t);if(y!==void 0){var S=La,H=t;switch(t){case"keypress":if(Ba(l)===0)break t;case"keydown":case"keyup":S=Tm;break;case"focusin":H="focus",S=hc;break;case"focusout":H="blur",S=hc;break;case"beforeblur":case"afterblur":S=hc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Nm;break;case hf:case pf:case vf:S=pm;break;case gf:S=Dm;break;case"scroll":case"scrollend":S=om;break;case"wheel":S=zm;break;case"copy":case"cut":case"paste":S=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Js;break;case"toggle":case"beforetoggle":S=Cm}var X=(e&4)!==0,pt=!X&&(t==="scroll"||t==="scrollend"),h=X?y!==null?y+"Capture":null:y;X=[];for(var d=g,v;d!==null;){var j=d;if(v=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||v===null||h===null||(j=Gn(d,h),j!=null&&X.push(ha(d,j,v))),pt)break;d=d.return}0<X.length&&(y=new S(y,H,null,l,x),M.push({event:y,listeners:X}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&l!==ic&&(H=l.relatedTarget||l.fromElement)&&(Zl(H)||H[wl]))break t;if((S||y)&&(y=x.window===x?x:(y=x.ownerDocument)?y.defaultView||y.parentWindow:window,S?(H=l.relatedTarget||l.toElement,S=g,H=H?Zl(H):null,H!==null&&(pt=A(H),X=H.tag,H!==pt||X!==5&&X!==27&&X!==6)&&(H=null)):(S=null,H=g),S!==H)){if(X=Ks,j="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(X=Js,j="onPointerLeave",h="onPointerEnter",d="pointer"),pt=S==null?y:Un(S),v=H==null?y:Un(H),y=new X(j,d+"leave",S,l,x),y.target=pt,y.relatedTarget=v,j=null,Zl(x)===g&&(X=new X(h,d+"enter",H,l,x),X.target=v,X.relatedTarget=pt,j=X),pt=j,S&&H)e:{for(X=Rh,h=S,d=H,v=0,j=h;j;j=X(j))v++;j=0;for(var V=d;V;V=X(V))j++;for(;0<v-j;)h=X(h),v--;for(;0<j-v;)d=X(d),j--;for(;v--;){if(h===d||d!==null&&h===d.alternate){X=h;break e}h=X(h),d=X(d)}X=null}else X=null;S!==null&&Qr(M,y,S,X,!1),H!==null&&pt!==null&&Qr(M,pt,H,X,!0)}}t:{if(y=g?Un(g):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var ut=lf;else if(tf(y))if(nf)ut=Xm;else{ut=Qm;var L=qm}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&cc(g.elementType)&&(ut=lf):ut=Vm;if(ut&&(ut=ut(t,g))){ef(M,ut,l,x);break t}L&&L(t,y,g),t==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&uc(y,"number",y.value)}switch(L=g?Un(g):window,t){case"focusin":(tf(L)||L.contentEditable==="true")&&(tn=L,Sc=g,Xn=null);break;case"focusout":Xn=Sc=tn=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,df(M,l,x);break;case"selectionchange":if(Zm)break;case"keydown":case"keyup":df(M,l,x)}var $;if(vc)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else Pl?Is(t,l)&&(et="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(et="onCompositionStart");et&&(Ws&&l.locale!=="ko"&&(Pl||et!=="onCompositionStart"?et==="onCompositionEnd"&&Pl&&($=ws()):(ll=x,rc="value"in ll?ll.value:ll.textContent,Pl=!0)),L=_u(g,et),0<L.length&&(et=new ks(et,t,null,l,x),M.push({event:et,listeners:L}),$?et.data=$:($=Ps(l),$!==null&&(et.data=$)))),($=Gm?Bm(t,l):Hm(t,l))&&(et=_u(g,"onBeforeInput"),0<et.length&&(L=new ks("onBeforeInput","beforeinput",null,l,x),M.push({event:L,listeners:et}),L.data=$)),_h(M,t,g,l,x)}Yr(M,e)})}function ha(t,e,l){return{instance:t,listener:e,currentTarget:l}}function _u(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Gn(t,l),a!=null&&n.unshift(ha(t,a,u)),a=Gn(t,e),a!=null&&n.push(ha(t,a,u))),t.tag===3)return n;t=t.return}return[]}function Rh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qr(t,e,l,n,a){for(var u=e._reactName,c=[];l!==null&&l!==n;){var s=l,o=s.alternate,g=s.stateNode;if(s=s.tag,o!==null&&o===n)break;s!==5&&s!==26&&s!==27||g===null||(o=g,a?(g=Gn(l,u),g!=null&&c.unshift(ha(l,g,o))):a||(g=Gn(l,u),g!=null&&c.push(ha(l,g,o)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var Ch=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Vr(t){return(typeof t=="string"?t:""+t).replace(Ch,`
`).replace(Uh,"")}function Xr(t,e){return e=Vr(e),Vr(t)===e}function ht(t,e,l,n,a,u){switch(l){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||$l(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&$l(t,""+n);break;case"className":Ra(t,"class",n);break;case"tabIndex":Ra(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ra(t,l,n);break;case"style":Qs(t,n,u);break;case"data":if(e!=="object"){Ra(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Ua(""+n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&ht(t,e,"name",a.name,a,null),ht(t,e,"formEncType",a.formEncType,a,null),ht(t,e,"formMethod",a.formMethod,a,null),ht(t,e,"formTarget",a.formTarget,a,null)):(ht(t,e,"encType",a.encType,a,null),ht(t,e,"method",a.method,a,null),ht(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Ua(""+n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=Ge);break;case"onScroll":n!=null&&P("scroll",t);break;case"onScrollEnd":n!=null&&P("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=Ua(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""+n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":P("beforetoggle",t),P("toggle",t),za(t,"popover",n);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":za(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=sm.get(l)||l,za(t,l,n))}}function Ki(t,e,l,n,a,u){switch(l){case"style":Qs(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"children":typeof n=="string"?$l(t,n):(typeof n=="number"||typeof n=="bigint")&&$l(t,""+n);break;case"onScroll":n!=null&&P("scroll",t);break;case"onScrollEnd":n!=null&&P("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),e=l.slice(2,a?l.length-7:void 0),u=t[$t]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,n,a);break t}l in t?t[l]=n:n===!0?t.setAttribute(l,""):za(t,l,n)}}}function Xt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",t),P("load",t);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var c=l[u];if(c!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ht(t,e,u,c,l,null)}}a&&ht(t,e,"srcSet",l.srcSet,l,null),n&&ht(t,e,"src",l.src,l,null);return;case"input":P("invalid",t);var s=u=c=a=null,o=null,g=null;for(n in l)if(l.hasOwnProperty(n)){var x=l[n];if(x!=null)switch(n){case"name":a=x;break;case"type":c=x;break;case"checked":o=x;break;case"defaultChecked":g=x;break;case"value":u=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(f(137,e));break;default:ht(t,e,n,x,l,null)}}Hs(t,u,s,o,g,c,a,!1);return;case"select":P("invalid",t),n=c=u=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":c=s;break;case"multiple":n=s;default:ht(t,e,a,s,l,null)}e=u,l=c,t.multiple=!!n,e!=null?Wl(t,!!n,e,!1):l!=null&&Wl(t,!!n,l,!0);return;case"textarea":P("invalid",t),u=a=n=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:ht(t,e,c,s,l,null)}Ys(t,n,a,u);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(n=l[o],n!=null))switch(o){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ht(t,e,o,n,l,null)}return;case"dialog":P("beforetoggle",t),P("toggle",t),P("cancel",t),P("close",t);break;case"iframe":case"object":P("load",t);break;case"video":case"audio":for(n=0;n<ma.length;n++)P(ma[n],t);break;case"image":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"embed":case"source":case"link":P("error",t),P("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(n=l[g],n!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ht(t,e,g,n,l,null)}return;default:if(cc(e)){for(x in l)l.hasOwnProperty(x)&&(n=l[x],n!==void 0&&Ki(t,e,x,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&ht(t,e,s,n,l,null))}function Gh(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,c=null,s=null,o=null,g=null,x=null;for(S in l){var M=l[S];if(l.hasOwnProperty(S)&&M!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":o=M;default:n.hasOwnProperty(S)||ht(t,e,S,null,n,M)}}for(var y in n){var S=n[y];if(M=l[y],n.hasOwnProperty(y)&&(S!=null||M!=null))switch(y){case"type":u=S;break;case"name":a=S;break;case"checked":g=S;break;case"defaultChecked":x=S;break;case"value":c=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(f(137,e));break;default:S!==M&&ht(t,e,y,S,n,M)}}ac(t,c,s,o,g,x,u,a);return;case"select":S=c=s=y=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":S=o;default:n.hasOwnProperty(u)||ht(t,e,u,null,n,o)}for(a in n)if(u=n[a],o=l[a],n.hasOwnProperty(a)&&(u!=null||o!=null))switch(a){case"value":y=u;break;case"defaultValue":s=u;break;case"multiple":c=u;default:u!==o&&ht(t,e,a,u,n,o)}e=s,l=c,n=S,y!=null?Wl(t,!!l,y,!1):!!n!=!!l&&(e!=null?Wl(t,!!l,e,!0):Wl(t,!!l,l?[]:"",!1));return;case"textarea":S=y=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ht(t,e,s,null,n,a)}for(c in n)if(a=n[c],u=l[c],n.hasOwnProperty(c)&&(a!=null||u!=null))switch(c){case"value":y=a;break;case"defaultValue":S=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==u&&ht(t,e,c,a,n,u)}Ls(t,y,S);return;case"option":for(var H in l)if(y=l[H],l.hasOwnProperty(H)&&y!=null&&!n.hasOwnProperty(H))switch(H){case"selected":t.selected=!1;break;default:ht(t,e,H,null,n,y)}for(o in n)if(y=n[o],S=l[o],n.hasOwnProperty(o)&&y!==S&&(y!=null||S!=null))switch(o){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ht(t,e,o,y,n,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in l)y=l[X],l.hasOwnProperty(X)&&y!=null&&!n.hasOwnProperty(X)&&ht(t,e,X,null,n,y);for(g in n)if(y=n[g],S=l[g],n.hasOwnProperty(g)&&y!==S&&(y!=null||S!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,e));break;default:ht(t,e,g,y,n,S)}return;default:if(cc(e)){for(var pt in l)y=l[pt],l.hasOwnProperty(pt)&&y!==void 0&&!n.hasOwnProperty(pt)&&Ki(t,e,pt,void 0,n,y);for(x in n)y=n[x],S=l[x],!n.hasOwnProperty(x)||y===S||y===void 0&&S===void 0||Ki(t,e,x,y,n,S);return}}for(var h in l)y=l[h],l.hasOwnProperty(h)&&y!=null&&!n.hasOwnProperty(h)&&ht(t,e,h,null,n,y);for(M in n)y=n[M],S=l[M],!n.hasOwnProperty(M)||y===S||y==null&&S==null||ht(t,e,M,y,n,S)}function wr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,c=a.initiatorType,s=a.duration;if(u&&s&&wr(c)){for(c=0,s=a.responseEnd,n+=1;n<l.length;n++){var o=l[n],g=o.startTime;if(g>s)break;var x=o.transferSize,M=o.initiatorType;x&&wr(M)&&(o=o.responseEnd,c+=x*(o<s?1:(s-g)/(o-g)))}if(--n,e+=8*(u+c)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ki=null,Ji=null;function Du(t){return t.nodeType===9?t:t.ownerDocument}function Zr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Wi(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $i=null;function Hh(){var t=window.event;return t&&t.type==="popstate"?t===$i?!1:($i=t,!0):($i=null,!1)}var kr=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,Jr=typeof Promise=="function"?Promise:void 0,Yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Jr<"u"?function(t){return Jr.resolve(null).then(t).catch(qh)}:kr;function qh(t){setTimeout(function(){throw t})}function bl(t){return t==="head"}function Wr(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),_n(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")pa(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,pa(l);for(var u=l.firstChild;u;){var c=u.nextSibling,s=u.nodeName;u[Cn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}else l==="body"&&pa(t.ownerDocument.body);l=a}while(l);_n(e)}function $r(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function Fi(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Fi(l),lc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Qh(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Cn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Te(t.nextSibling),t===null)break}return null}function Vh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Te(t.nextSibling),t===null))return null;return t}function Fr(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Te(t.nextSibling),t===null))return null;return t}function Ii(t){return t.data==="$?"||t.data==="$~"}function Pi(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Te(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ts=null;function Ir(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Te(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Pr(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function td(t,e,l){switch(e=Du(l),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function pa(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);lc(t)}var je=new Map,ed=new Set;function Ou(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fe=R.d;R.d={f:wh,r:Zh,D:Kh,C:kh,L:Jh,m:Wh,X:Fh,S:$h,M:Ih};function wh(){var t=Fe.f(),e=Au();return t||e}function Zh(t){var e=Kl(t);e!==null&&e.tag===5&&e.type==="form"?yo(e):Fe.r(t)}var jn=typeof document>"u"?null:document;function ld(t,e,l){var n=jn;if(n&&typeof e=="string"&&e){var a=ge(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),ed.has(a)||(ed.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),Xt(e,"link",t),Bt(e),n.head.appendChild(e)))}}function Kh(t){Fe.D(t),ld("dns-prefetch",t,null)}function kh(t,e){Fe.C(t,e),ld("preconnect",t,e)}function Jh(t,e,l){Fe.L(t,e,l);var n=jn;if(n&&t&&e){var a='link[rel="preload"][as="'+ge(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+ge(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+ge(l.imageSizes)+'"]')):a+='[href="'+ge(t)+'"]';var u=a;switch(e){case"style":u=Mn(t);break;case"script":u=Nn(t)}je.has(u)||(t=U({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),je.set(u,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(va(u))||e==="script"&&n.querySelector(ga(u))||(e=n.createElement("link"),Xt(e,"link",t),Bt(e),n.head.appendChild(e)))}}function Wh(t,e){Fe.m(t,e);var l=jn;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+ge(n)+'"][href="'+ge(t)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Nn(t)}if(!je.has(u)&&(t=U({rel:"modulepreload",href:t},e),je.set(u,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ga(u)))return}n=l.createElement("link"),Xt(n,"link",t),Bt(n),l.head.appendChild(n)}}}function $h(t,e,l){Fe.S(t,e,l);var n=jn;if(n&&t){var a=kl(n).hoistableStyles,u=Mn(t);e=e||"default";var c=a.get(u);if(!c){var s={loading:0,preload:null};if(c=n.querySelector(va(u)))s.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},l),(l=je.get(u))&&es(t,l);var o=c=n.createElement("link");Bt(o),Xt(o,"link",t),o._p=new Promise(function(g,x){o.onload=g,o.onerror=x}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,zu(c,e,n)}c={type:"stylesheet",instance:c,count:1,state:s},a.set(u,c)}}}function Fh(t,e){Fe.X(t,e);var l=jn;if(l&&t){var n=kl(l).hoistableScripts,a=Nn(t),u=n.get(a);u||(u=l.querySelector(ga(a)),u||(t=U({src:t,async:!0},e),(e=je.get(a))&&ls(t,e),u=l.createElement("script"),Bt(u),Xt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Ih(t,e){Fe.M(t,e);var l=jn;if(l&&t){var n=kl(l).hoistableScripts,a=Nn(t),u=n.get(a);u||(u=l.querySelector(ga(a)),u||(t=U({src:t,async:!0,type:"module"},e),(e=je.get(a))&&ls(t,e),u=l.createElement("script"),Bt(u),Xt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function nd(t,e,l,n){var a=(a=z.current)?Ou(a):null;if(!a)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Mn(l.href),l=kl(a).hoistableStyles,n=l.get(e),n||(n={type:"style",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Mn(l.href);var u=kl(a).hoistableStyles,c=u.get(t);if(c||(a=a.ownerDocument||a,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,c),(u=a.querySelector(va(t)))&&!u._p&&(c.instance=u,c.state.loading=5),je.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},je.set(t,l),u||Ph(a,t,l,c.state))),e&&n===null)throw Error(f(528,""));return c}if(e&&n!==null)throw Error(f(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Nn(l),l=kl(a).hoistableScripts,n=l.get(e),n||(n={type:"script",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function Mn(t){return'href="'+ge(t)+'"'}function va(t){return'link[rel="stylesheet"]['+t+"]"}function ad(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Ph(t,e,l,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Xt(e,"link",l),Bt(e),t.head.appendChild(e))}function Nn(t){return'[src="'+ge(t)+'"]'}function ga(t){return"script[async]"+t}function ud(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+ge(l.href)+'"]');if(n)return e.instance=n,Bt(n),n;var a=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Bt(n),Xt(n,"style",a),zu(n,l.precedence,t),e.instance=n;case"stylesheet":a=Mn(l.href);var u=t.querySelector(va(a));if(u)return e.state.loading|=4,e.instance=u,Bt(u),u;n=ad(l),(a=je.get(a))&&es(n,a),u=(t.ownerDocument||t).createElement("link"),Bt(u);var c=u;return c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),Xt(u,"link",n),e.state.loading|=4,zu(u,l.precedence,t),e.instance=u;case"script":return u=Nn(l.src),(a=t.querySelector(ga(u)))?(e.instance=a,Bt(a),a):(n=l,(a=je.get(u))&&(n=U({},l),ls(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),Bt(a),Xt(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,zu(n,l.precedence,t));return e.instance}function zu(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,c=0;c<n.length;c++){var s=n[c];if(s.dataset.precedence===e)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function es(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ls(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ru=null;function cd(t,e,l){if(Ru===null){var n=new Map,a=Ru=new Map;a.set(l,n)}else a=Ru,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var u=l[a];if(!(u[Cn]||u[Yt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(e)||"";c=t+c;var s=n.get(c);s?s.push(u):n.set(c,[u])}}return n}function id(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function t0(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function sd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function e0(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=Mn(n.href),u=e.querySelector(va(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Cu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Bt(u);return}u=e.ownerDocument||e,n=ad(n),(a=je.get(a))&&es(n,a),u=u.createElement("link"),Bt(u);var c=u;c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),Xt(u,"link",n),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Cu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ns=0;function l0(t,e){return t.stylesheets&&t.count===0&&Gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&ns===0&&(ns=62500*Bh());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>ns?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uu=null;function Gu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,e.forEach(n0,t),Uu=null,Cu.call(t))}function n0(t,e){if(!(e.state.loading&4)){var l=Uu.get(t);if(l)var n=l.get(null);else{l=new Map,Uu.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var c=a[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),n=c)}n&&l.set(null,n)}a=e.instance,c=a.getAttribute("data-precedence"),u=l.get(c)||n,u===n&&l.set(null,a),l.set(c,a),this.count++,n=Cu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ya={$$typeof:Tt,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function a0(t,e,l,n,a,u,c,s,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Iu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.hiddenUpdates=Iu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function fd(t,e,l,n,a,u,c,s,o,g,x,M){return t=new a0(t,e,l,c,o,g,x,M,s),e=1,u===!0&&(e|=24),u=fe(3,null,null,e),t.current=u,u.stateNode=t,e=Bc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:e},qc(u),t}function od(t){return t?(t=nn,t):nn}function rd(t,e,l,n,a,u){a=od(a),n.context===null?n.context=a:n.pendingContext=a,n=sl(e),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=fl(t,n,e),l!==null&&(le(l,t,e),$n(l,t,e))}function dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function as(t,e){dd(t,e),(t=t.alternate)&&dd(t,e)}function md(t){if(t.tag===13||t.tag===31){var e=zl(t,67108864);e!==null&&le(e,t,67108864),as(t,67108864)}}function hd(t){if(t.tag===13||t.tag===31){var e=he();e=Pu(e);var l=zl(t,e);l!==null&&le(l,t,e),as(t,e)}}var Bu=!0;function u0(t,e,l,n){var a=T.T;T.T=null;var u=R.p;try{R.p=2,us(t,e,l,n)}finally{R.p=u,T.T=a}}function c0(t,e,l,n){var a=T.T;T.T=null;var u=R.p;try{R.p=8,us(t,e,l,n)}finally{R.p=u,T.T=a}}function us(t,e,l,n){if(Bu){var a=cs(n);if(a===null)Zi(t,e,n,Hu,l),vd(t,n);else if(s0(a,t,e,l,n))n.stopPropagation();else if(vd(t,n),e&4&&-1<i0.indexOf(t)){for(;a!==null;){var u=Kl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=Ml(u.pendingLanes);if(c!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var o=1<<31-ie(c);s.entanglements[1]|=o,c&=~o}Re(u),(it&6)===0&&(bu=ue()+500,da(0))}}break;case 31:case 13:s=zl(u,2),s!==null&&le(s,u,2),Au(),as(u,2)}if(u=cs(n),u===null&&Zi(t,e,n,Hu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else Zi(t,e,n,null,l)}}function cs(t){return t=sc(t),is(t)}var Hu=null;function is(t){if(Hu=null,t=Zl(t),t!==null){var e=A(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=O(e),t!==null)return t;t=null}else if(l===31){if(t=Y(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Hu=t,null}function pd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kd()){case As:return 2;case Es:return 8;case Ma:case kd:return 32;case xs:return 268435456;default:return 32}default:return 32}}var ss=!1,Sl=null,Al=null,El=null,ba=new Map,Sa=new Map,xl=[],i0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vd(t,e){switch(t){case"focusin":case"focusout":Sl=null;break;case"dragenter":case"dragleave":Al=null;break;case"mouseover":case"mouseout":El=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Aa(t,e,l,n,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},e!==null&&(e=Kl(e),e!==null&&md(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function s0(t,e,l,n,a){switch(e){case"focusin":return Sl=Aa(Sl,t,e,l,n,a),!0;case"dragenter":return Al=Aa(Al,t,e,l,n,a),!0;case"mouseover":return El=Aa(El,t,e,l,n,a),!0;case"pointerover":var u=a.pointerId;return ba.set(u,Aa(ba.get(u)||null,t,e,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,Sa.set(u,Aa(Sa.get(u)||null,t,e,l,n,a)),!0}return!1}function gd(t){var e=Zl(t.target);if(e!==null){var l=A(e);if(l!==null){if(e=l.tag,e===13){if(e=O(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){hd(l)});return}}else if(e===31){if(e=Y(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){hd(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=cs(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);ic=n,l.target.dispatchEvent(n),ic=null}else return e=Kl(l),e!==null&&md(e),t.blockedOn=l,!1;e.shift()}return!0}function yd(t,e,l){Lu(t)&&l.delete(e)}function f0(){ss=!1,Sl!==null&&Lu(Sl)&&(Sl=null),Al!==null&&Lu(Al)&&(Al=null),El!==null&&Lu(El)&&(El=null),ba.forEach(yd),Sa.forEach(yd)}function Yu(t,e){t.blockedOn===e&&(t.blockedOn=null,ss||(ss=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,f0)))}var qu=null;function bd(t){qu!==t&&(qu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(is(n||l)===null)continue;break}var u=Kl(l);u!==null&&(t.splice(e,3),e-=3,ci(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function _n(t){function e(o){return Yu(o,t)}Sl!==null&&Yu(Sl,t),Al!==null&&Yu(Al,t),El!==null&&Yu(El,t),ba.forEach(e),Sa.forEach(e);for(var l=0;l<xl.length;l++){var n=xl[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)gd(l),l.blockedOn===null&&xl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],c=a[$t]||null;if(typeof u=="function")c||bd(l);else if(c){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,c=u[$t]||null)s=c.formAction;else if(is(a)!==null)continue}else s=c.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),bd(l)}}}function Sd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(c){return a=c})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function fs(t){this._internalRoot=t}Qu.prototype.render=fs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var l=e.current,n=he();rd(l,n,t,e,null,null)},Qu.prototype.unmount=fs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rd(t.current,2,null,t,null,null),Au(),e[wl]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_s();t={blockedOn:null,target:t,priority:e};for(var l=0;l<xl.length&&e!==0&&e<xl[l].priority;l++);xl.splice(l,0,t),l===0&&gd(t)}};var Ad=E.version;if(Ad!=="19.2.6")throw Error(f(527,Ad,"19.2.6"));R.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=p(e),t=t!==null?q(t):null,t=t===null?null:t.stateNode,t};var o0={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{On=Vu.inject(o0),ce=Vu}catch{}}return xa.createRoot=function(t,e){if(!b(t))throw Error(f(299));var l=!1,n="",a=_o,u=Do,c=Oo;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=fd(t,1,!1,null,null,l,n,null,a,u,c,Sd),t[wl]=e.current,wi(t),new fs(e)},xa.hydrateRoot=function(t,e,l){if(!b(t))throw Error(f(299));var n=!1,a="",u=_o,c=Do,s=Oo,o=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),e=fd(t,1,!0,e,l??null,n,a,o,u,c,s,Sd),e.context=od(null),l=e.current,n=he(),n=Pu(n),a=sl(n),a.callback=null,fl(l,a,n),l=n,e.current.lanes=l,Rn(e,l),Re(e),t[wl]=e.current,wi(t),new Qu(e)},xa.version="19.2.6",xa}var zd;function S0(){if(zd)return ds.exports;zd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),ds.exports=b0(),ds.exports}var A0=S0();function E0({name:r,initial:E}){return i.jsx("nav",{className:"nav",children:i.jsxs("div",{className:"nav-inner",children:[i.jsxs("a",{href:"#top",className:"nav-brand",children:[i.jsx("span",{className:"nav-logo",children:E}),i.jsx("span",{className:"nav-name",children:r})]}),i.jsxs("div",{className:"nav-links",children:[i.jsx("a",{href:"#stack",className:"nav-link",children:"기술 스택"}),i.jsx("a",{href:"#activity",className:"nav-link",children:"활동"}),i.jsx("a",{href:"#projects",className:"nav-link",children:"프로젝트"}),i.jsx("a",{href:"#contact",className:"nav-cta",children:"연락하기"})]})]})})}function Ud({size:r=18,className:E}){return i.jsx("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"currentColor",className:E,children:i.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})}function Gd({size:r=18,className:E}){return i.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:E,children:i.jsx("path",{d:"M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"})})}function Xu({size:r=15,className:E}){return i.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.2,className:E,children:[i.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),i.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})}function x0({size:r=15,className:E}){return i.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.2,className:E,children:[i.jsx("path",{d:"M15 3h6v6"}),i.jsx("path",{d:"M10 14 21 3"}),i.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]})}function T0({size:r=24,className:E}){return i.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:E,children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"m2 6 10 7L22 6"})]})}function Bd({size:r=16,className:E}){return i.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:i.jsx("path",{d:"m6 9 6 6 6-6"})})}function j0({size:r=22,className:E}){return i.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:[i.jsx("path",{d:"M12 19V5"}),i.jsx("path",{d:"m5 12 7-7 7 7"})]})}function M0({size:r=16,className:E}){return i.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]})}function N0({size:r=16,className:E}){return i.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:[i.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),i.jsx("circle",{cx:"3.6",cy:"6",r:"1.1",fill:"currentColor",stroke:"none"}),i.jsx("circle",{cx:"3.6",cy:"12",r:"1.1",fill:"currentColor",stroke:"none"}),i.jsx("circle",{cx:"3.6",cy:"18",r:"1.1",fill:"currentColor",stroke:"none"})]})}function _0({name:r,tagline:E,login:_,githubUrl:f,linkedinUrl:b,avatarUrl:A}){return i.jsxs("header",{id:"top",className:"hero",children:[i.jsx("div",{className:"hero-glow","aria-hidden":"true"}),i.jsxs("div",{className:"hero-inner",children:[i.jsxs("div",{className:"hero-copy",children:[i.jsxs("div",{className:"hero-badge",children:[i.jsx("span",{className:"hero-badge-dot"}),"OPEN TO WORK · 채용 제안 환영"]}),i.jsxs("h1",{className:"hero-title",children:["안녕하세요,",i.jsx("br",{}),i.jsx("span",{className:"hero-title-em",children:r})," 입니다."]}),i.jsxs("p",{className:"hero-lead",children:["전북대학교 ",i.jsx("strong",{children:"IT지능정보공학과"}),"에 재학 중입니다. 풀스택 웹 개발과 AI 활용 기술에 관심을 가지고 다양한 프로젝트를 진행하고 있습니다."]}),i.jsx("p",{className:"hero-lead hero-lead-sub",children:"LLM, RAG, MCP(Model Context Protocol) 기반 AI 서비스 개발 경험을 보유하고 있으며, 프론트엔드부터 백엔드, AI 시스템 연동까지 전반적인 개발 역량을 갖추고 있습니다."}),i.jsxs("div",{className:"hero-actions",children:[i.jsxs("a",{className:"btn btn-dark",href:f,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Ud,{size:18}),"GitHub 프로필"]}),b&&i.jsxs("a",{className:"btn btn-linkedin",href:b,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Gd,{size:18}),"LinkedIn 프로필"]}),i.jsx("a",{className:"btn btn-light",href:"#projects",children:"프로젝트 보기 →"})]})]}),i.jsxs("div",{className:"hero-card-wrap",children:[i.jsx("div",{className:"hero-card-glow","aria-hidden":"true"}),i.jsxs("div",{className:"hero-card",children:[i.jsxs("div",{className:"hero-card-bar",children:[i.jsx("span",{className:"dot dot-red"}),i.jsx("span",{className:"dot dot-yellow"}),i.jsx("span",{className:"dot dot-green"}),i.jsx("span",{className:"hero-card-file",children:"profile.tsx"})]}),i.jsx("div",{className:"hero-card-avatar",children:i.jsx("img",{src:A,alt:r})}),i.jsxs("div",{className:"hero-code",children:[i.jsxs("div",{children:[i.jsx("span",{className:"t-kw",children:"const"})," ",i.jsx("span",{className:"t-var",children:"dev"})," ",i.jsx("span",{className:"t-op",children:"="})," ","{"]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"name"}),": ",i.jsxs("span",{className:"t-str",children:['"',r,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"role"}),": ",i.jsxs("span",{className:"t-str",children:['"',E,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"github"}),": ",i.jsxs("span",{className:"t-str",children:['"@',_,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"status"}),": ",i.jsx("span",{className:"t-str",children:'"available"'})]}),i.jsx("div",{children:"}"})]})]})]})]})]})}const wt={githubUsername:"05solar",displayName:"leeosolha",tagline:"풀스택 개발자",email:"lotus05f@gmail.com",linkedinUrl:"https://www.linkedin.com/in/solha-lee-7a9127409/",projectCount:11,pinnedRepos:["checkmiteV1","jbig","edu-msa","GO","MSA-restaurant","By-Tomorrow","GLML","GMG","RAG-agent","MCP-shopbot","OV-clonecoding","Auto-PPT"],excludedRepos:["my-letter-site","PF","p2","portfolio","GMG","edu-msa"],descriptions:{checkmiteV1:"YOLO로 소형개체(천적응애)를 자동 분류·탐지하여 개체 수·밀도·활력도·증식률을 측정합니다.",jbig:"전북 외국인 근로자·유학생을 대상으로 공식문서를 기반으로 체류·행정과 노동 문제에 대한 챗봇 서비스와 함께, 서류를 넣으면 불법 요소 탐색과 서류 설명을 제공합니다.","edu-msa":"교육청 직원이 단기 교육에서 만든 프로그램을 내부 저장소에 올리면, 표준 규격만 지키면 자동으로 하나의 MSA 서비스로 띄워 바로 쓸 수 있게 하는 사내 포털입니다. React·Spring Boot 3·MariaDB·Kubernetes로 구성한 단독 프로젝트입니다.",GO:"브라우저에서 바로 두는 바둑·오목. 서버 없이 웹워커에서 MCTS·알파베타 AI가 3단계 난이도로 상대합니다.","MSA-restaurant":"식당 서비스를 마이크로서비스로 구현한 프로젝트. JWT 게이트웨이와 Auth·Menu·Order·Review 서비스를 Docker Compose 한 번으로 띄웁니다.","By-Tomorrow":"시험까지 남은 시간과 강의자료를 AI가 분석해 실현 가능한 벼락치기 커리큘럼을 짜 주는 서비스. 로그인 없이 8자리 코드로 접근합니다.",GLML:"조건(지역·동행·시간·메뉴)을 분석해 맛집을 추천하는 AI 에이전트. 판단→도구 호출→검토의 ReAct 흐름을 화면에 그대로 시각화합니다.",GMG:"'비선호'를 먼저 걸러 모두가 무난한 시간·장소·메뉴를 찾아 주는 모임 약속 서비스. 카카오맵으로 장소를 함께 고릅니다.","RAG-agent":"PDF를 올려 내용을 묻는 RAG 챗봇에 졸업요건·도서추천·시설안내 에이전트를 더한 프로젝트. 답변 LLM과 평가 LLM 결과를 나란히 보여줍니다.","MCP-shopbot":"상품 DB를 MCP로 연동한 한국어 쇼핑 도우미. Tool Calling으로 상품 검색·상세 조회·재고 확인을 처리합니다.","OV-clonecoding":"올리브영 메인을 React로 구현한 클론 코딩. 카테고리 드로어·자동 캐러셀·상품 라우팅·반응형까지 커머스 UI 흐름을 재현했습니다.","Auto-PPT":"문서를 넣으면 편집 가능한 PowerPoint(.pptx)를 자동 생성하는 로컬 웹앱. API 키 없이 로그인된 Claude Code·Codex CLI를 웹에서 구동합니다."},focus:{checkmiteV1:[["CV","YOLO Object Detection"]],jbig:[["RAG","공식문서 검색"],["LLM","다국어 챗봇"],["OCR","서류 분석"]],GO:[["Board Game","바둑 · 오목"],["AI","MCTS · Alpha-Beta"]],"MSA-restaurant":[["MSA","Spring Cloud Gateway"],["Auth","JWT"],["Infra","Docker Compose"]],"By-Tomorrow":[["LLM","Gemini"],["AI","문서 분석"]],GLML:[["AI Agent","ReAct"],["LLM","Tool Calling"]],GMG:[["추천","비선호 필터"],["Map","Kakao API"]],"RAG-agent":[["RAG","PDF QA"],["AI Agent","DB 상담"]],"MCP-shopbot":[["MCP","Tool Calling"],["LLM","쇼핑 도우미"]],"OV-clonecoding":[["Frontend","React"],["UI","반응형"]],"Auto-PPT":[["LLM","슬라이드 생성"],["CLI","Claude Code · Codex"]],"edu-msa":[["MSA","서비스 자동 배포"],["Infra","Kubernetes"],["Auth","JWT"]]}},vs=["#C0392B","#C2410C","#A16207","#15803D","#0F766E","#2563EB","#4F46E5","#8E44AD","#C2185B","#5C6F2B","#3B4953","#FF84BA","#FF6B35","#744577","#A98B76","#3291B6","#B77466"],D0=(()=>{const r={};let E=0;for(const _ of Object.values(wt.focus))for(const[f]of _)f in r||(r[f]=vs[E%vs.length],E+=1);return r})();function wu(r){return D0[r]??vs[0]}function Hd(r){const E=r.replace("#",""),_=p=>p<=.03928?p/12.92:((p+.055)/1.055)**2.4,f=_(parseInt(E.slice(0,2),16)/255),b=_(parseInt(E.slice(2,4),16)/255),A=_(parseInt(E.slice(4,6),16)/255),O=.2126*f+.7152*b+.0722*A,Y=1.05/(O+.05),D=(O+.05)/.05;return Y>=D?"#fff":"#1f2937"}const O0=[{title:"프론트엔드",color:"#4f46e5",items:["React","TypeScript","Next.js","Tailwind CSS"]},{title:"백엔드",color:"#2563eb",items:["Node.js","NestJS","Python","Spring"]},{title:"데이터베이스",color:"#0ea5e9",items:["PostgreSQL","MongoDB","Redis"]},{title:"DevOps · 인프라",color:"#6366f1",items:["Docker","Kubernetes","AWS","GitHub Actions"]}];function z0({langStats:r,langReady:E,showSkeleton:_,showError:f}){return i.jsxs("section",{id:"stack",className:"section stack",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"TECH STACK"}),i.jsx("h2",{className:"section-title",children:"기술 스택"}),i.jsx("p",{className:"section-desc",children:"실무에서 사용하는 도구들과, GitHub 저장소에서 집계한 실제 언어 사용 비율입니다."})]}),i.jsxs("div",{className:"stack-grid",children:[i.jsx("div",{className:"stack-cards","data-reveal":!0,style:{transitionDelay:".05s"},children:O0.map(b=>i.jsxs("div",{className:"stack-card",children:[i.jsxs("div",{className:"stack-card-title",children:[i.jsx("span",{className:"stack-card-mark",style:{background:b.color}}),b.title]}),i.jsx("div",{className:"stack-chips",children:b.items.map(A=>i.jsx("span",{className:"stack-chip",children:A},A))})]},b.title))}),i.jsxs("div",{className:"lang-panel","data-reveal":!0,style:{transitionDelay:".1s"},children:[i.jsxs("div",{className:"lang-panel-head",children:[i.jsx("span",{className:"lang-panel-title",children:"언어 사용 비율"}),i.jsx("span",{className:"lang-panel-src",children:"from GitHub"})]}),E&&i.jsxs("div",{children:[i.jsx("div",{className:"lang-bar",children:r.map(b=>i.jsx("div",{className:"lang-bar-seg",style:{width:b.width,background:b.color}},b.name))}),i.jsx("div",{className:"lang-list",children:r.map(b=>i.jsxs("div",{className:"lang-row",children:[i.jsx("span",{className:"lang-dot",style:{background:b.color}}),i.jsx("span",{className:"lang-name",children:b.name}),i.jsx("span",{className:"lang-pct",children:b.pctText})]},b.name))})]}),_&&i.jsxs("div",{className:"lang-skeleton",children:[i.jsx("div",{className:"sk sk-dark"}),i.jsx("div",{className:"sk sk-dark",style:{width:"70%"}}),i.jsx("div",{className:"sk sk-dark",style:{width:"55%"}})]}),f&&i.jsx("p",{className:"lang-empty",children:"언어 데이터를 불러오지 못했습니다."})]})]})]})}const Rd="flip",R0=650,C0="cubic-bezier(0.4, 0, 0.2, 1)";function U0(){const r=Et.useRef(null),E=Et.useCallback(()=>{const _=r.current;if(!_)return;const f=Array.from(_.children),b=f.map(A=>A.getBoundingClientRect());requestAnimationFrame(()=>{f.forEach((A,O)=>{const Y=b[O];if(!Y)return;const D=A.getBoundingClientRect(),p=Y.left-D.left,q=Y.top-D.top,U=Math.abs(Y.width-D.width)>.5;if(!p&&!q&&!U)return;A.getAnimations().filter(nt=>nt.id===Rd).forEach(nt=>nt.cancel());const Q={transform:`translate(${p}px, ${q}px)`},st={transform:"none"};U&&(Q.width=`${Y.width}px`,st.width=`${D.width}px`),A.animate([Q,st],{id:Rd,duration:R0,easing:C0})})})},[]);return{listRef:r,captureFlip:E}}function G0(r,E=220){const _=String(r||"").replace(/\r/g,"").split(`
`),f=[];let b=!1;for(const O of _){const Y=O.trim();if(/^```/.test(Y)){b=!b;continue}if(b)continue;if(!Y){if(f.length)break;continue}if(/^#{1,6}\s/.test(Y)||/^[-=*_]{3,}$/.test(Y))continue;const D=Y.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/<[^>]+>/g,"").trim();D&&f.push(D)}const A=f.join(" ").replace(/<!--[\s\S]*?-->/g," ").replace(/`([^`]+)`/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^\s*[-*+]\s+/g,"").replace(/[*_>#`]/g,"").replace(/\s+/g," ").trim();return A.length<=E?A:`${A.slice(0,E).replace(/\s+\S*$/,"").trimEnd()}…`}function gs(r,E){const _=String(r||"").trim();if(!_)return"";if(/^https?:\/\//i.test(_))return _;if(_.startsWith("//"))return`https:${_}`;if(!E)return _;try{return new URL(_,E).href}catch{return _}}function B0(r,E=""){const _=String(r||""),f=[];let b;const A=/!\[[^\]]*\]\(\s*([^)\s]+)[^)]*\)/g;for(;b=A.exec(_);)f.push({idx:b.index,src:b[1]});const O=/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;for(;b=O.exec(_);)f.push({idx:b.index,src:b[1]});if(!f.length)return null;f.sort((p,q)=>p.idx-q.idx);const Y=p=>/shields\.io|img\.shields|\bbadge\b|flat-square|circleci|codecov|coveralls|travis|\/workflows\/|actions\/workflow|badgen|forthebadge/i.test(p),D=f.find(p=>!Y(p.src));return D?gs(D.src,E):null}function Ta(r,E=""){const _=String(r),f=/(\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\))|(!\[[^\]]*\]\([^)]*\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))|(\*[^*]+\*)|(_[^_]+_)/g,b=[];let A=0,O=0,Y;for(;Y=f.exec(_);){Y.index>A&&b.push(_.slice(A,Y.index));const D=Y[0];if(D.startsWith("[![")){const p=/\[!\[([^\]]*)\]\(([^)]*)\)\]\(([^)]*)\)/.exec(D);p&&b.push(i.jsx("a",{href:p[3],target:"_blank",rel:"noopener noreferrer",children:i.jsx("img",{className:"md-img",src:gs(p[2],E),alt:p[1],loading:"lazy"})},O++))}else if(D.startsWith("![")){const p=/!\[([^\]]*)\]\(([^)]*)\)/.exec(D);p&&b.push(i.jsx("img",{className:"md-img",src:gs(p[2],E),alt:p[1],loading:"lazy"},O++))}else if(D[0]==="`")b.push(i.jsx("code",{className:"md-code",children:D.slice(1,-1)},O++));else if(D.slice(0,2)==="**")b.push(i.jsx("strong",{children:D.slice(2,-2)},O++));else if(D[0]==="["){const p=/\[([^\]]+)\]\(([^)]+)\)/.exec(D);p&&b.push(i.jsx("a",{href:p[2],target:"_blank",rel:"noopener noreferrer",children:p[1]},O++))}else b.push(i.jsx("em",{children:D.slice(1,-1)},O++));A=f.lastIndex}return A<_.length&&b.push(_.slice(A)),b}function Ld(r,E=""){const f=String(r||"").replace(/<!--[\s\S]*?-->/g,"").replace(/<img\b[^>]*>/gi,p=>{const q=(/\bsrc\s*=\s*["']([^"']+)["']/i.exec(p)||[])[1]||"",U=(/\balt\s*=\s*["']([^"']*)["']/i.exec(p)||[])[1]||"";return q?`

![${U}](${q})

`:""}).replace(/<picture\b[^>]*>|<\/picture>|<source\b[^>]*>/gi,"").replace(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(p,q,U)=>{const Q=String(U).replace(/<[^>]+>/g,"").trim();return Q?`[${Q}](${q})`:""}).replace(/<\/?[a-z][^>]*>/gi,"").split(/\r?\n/),b=[];let A=0,O=0;const Y=p=>/\|/.test(p)&&/^[\s|:\-]+$/.test(p);for(;A<f.length;){const p=f[A];if(/^\s*```/.test(p)){const Q=[];for(A++;A<f.length&&!/^\s*```/.test(f[A]);)Q.push(f[A]),A++;A++,b.push(i.jsx("pre",{className:"md-pre",children:Q.join(`
`)},O++));continue}const q=/^(#{1,6})\s+(.*)$/.exec(p);if(q){const Q=q[1].length,st=Q<=2?"h3":"h4";b.push(i.jsx(st,{className:`md-h md-h${Q}`,children:Ta(q[2],E)},O++)),A++;continue}if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(p)){b.push(i.jsx("hr",{className:"md-hr"},O++)),A++;continue}if(/^\s*[-*+]\s+/.test(p)){const Q=[];for(;A<f.length&&/^\s*[-*+]\s+/.test(f[A]);)Q.push(f[A].replace(/^\s*[-*+]\s+/,"")),A++;b.push(i.jsx("ul",{className:"md-ul",children:Q.map((st,nt)=>i.jsx("li",{children:Ta(st,E)},nt))},O++));continue}if(/^\s*\d+\.\s+/.test(p)){const Q=[];for(;A<f.length&&/^\s*\d+\.\s+/.test(f[A]);)Q.push(f[A].replace(/^\s*\d+\.\s+/,"")),A++;b.push(i.jsx("ol",{className:"md-ol",children:Q.map((st,nt)=>i.jsx("li",{children:Ta(st,E)},nt))},O++));continue}if(/^\s*>/.test(p)){const Q=[];for(;A<f.length&&/^\s*>/.test(f[A]);)Q.push(f[A].replace(/^\s*>\s?/,"")),A++;b.push(i.jsx("blockquote",{className:"md-quote",children:Ta(Q.join(" "),E)},O++));continue}if(/^\s*$/.test(p)||Y(p)){A++;continue}const U=[p];for(A++;A<f.length&&!/^\s*$/.test(f[A])&&!/^\s*#{1,6}\s/.test(f[A])&&!/^\s*```/.test(f[A])&&!/^\s*[-*+]\s+/.test(f[A])&&!/^\s*\d+\.\s+/.test(f[A])&&!/^\s*>/.test(f[A])&&!Y(f[A]);)U.push(f[A]),A++;b.push(i.jsx("p",{className:"md-p",children:Ta(U.join(" "),E)},O++))}const D=b.slice(0,70);return b.length>70&&D.push(i.jsx("p",{className:"md-more",children:"… 전체 내용은 GitHub에서 확인하세요."},"more")),i.jsx("div",{className:"md",children:D})}const H0={CV:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),RAG:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m21 21-4.3-4.3"})]}),LLM:i.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),OCR:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),i.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),i.jsx("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),i.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),i.jsx("path",{d:"M7 9h8"}),i.jsx("path",{d:"M7 13h6"})]}),"Board Game":i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"1"}),i.jsx("path",{d:"M3 9h18"}),i.jsx("path",{d:"M3 15h18"}),i.jsx("path",{d:"M9 3v18"}),i.jsx("path",{d:"M15 3v18"})]}),AI:i.jsx("path",{d:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"}),"AI Agent":i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"4",y:"8",width:"16",height:"12",rx:"2"}),i.jsx("path",{d:"M12 8V5"}),i.jsx("circle",{cx:"12",cy:"4",r:"1"}),i.jsx("path",{d:"M9 13h.01"}),i.jsx("path",{d:"M15 13h.01"}),i.jsx("path",{d:"M9 17h6"})]}),MSA:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),i.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),i.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),i.jsx("path",{d:"M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"}),i.jsx("path",{d:"M12 13v2"})]}),Auth:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"4",y:"11",width:"16",height:"10",rx:"2"}),i.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),Infra:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"7",rx:"1"}),i.jsx("rect",{x:"3",y:"13",width:"18",height:"7",rx:"1"}),i.jsx("path",{d:"M7 7.5h.01"}),i.jsx("path",{d:"M7 16.5h.01"})]}),추천:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M7 10v11"}),i.jsx("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]}),Map:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),i.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),MCP:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M9 2v6"}),i.jsx("path",{d:"M15 2v6"}),i.jsx("path",{d:"M6 8h12v3a6 6 0 0 1-12 0z"}),i.jsx("path",{d:"M12 17v5"})]}),Frontend:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"M2 9h20"}),i.jsx("path",{d:"M6 6.5h.01"}),i.jsx("path",{d:"M9 6.5h.01"})]}),UI:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),i.jsx("path",{d:"M3 9h18"}),i.jsx("path",{d:"M9 21V9"})]}),CLI:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),i.jsx("path",{d:"m7 9 3 3-3 3"}),i.jsx("path",{d:"M13 15h4"})]})},L0=i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 9h16"}),i.jsx("path",{d:"M4 15h16"}),i.jsx("path",{d:"M10 3 8 21"}),i.jsx("path",{d:"M16 3l-2 18"})]});function Yd({field:r,size:E=12}){return i.jsx("svg",{className:"repo-focus-ico",width:E,height:E,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:H0[r]??L0})}function Y0({repo:r,open:E,onToggle:_}){const f=Et.useRef(null);Et.useEffect(()=>{if(!E)return;const O=f.current;if(!O)return;const Y=requestAnimationFrame(()=>{let D=0,p=O;for(;p;)D+=p.offsetTop,p=p.offsetParent;const q=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||66;window.scrollTo({top:Math.max(0,D-q-16),behavior:"smooth"})});return()=>cancelAnimationFrame(Y)},[E]);const b=O=>O.stopPropagation(),A=O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),_())};return i.jsxs("article",{ref:f,className:`repo${E?" is-open":""}`,role:"button",tabIndex:0,"aria-expanded":E,onClick:_,onKeyDown:A,children:[i.jsx("div",{className:"repo-accent"}),i.jsxs("div",{className:"repo-body",children:[r.image&&i.jsx("div",{className:"repo-cover",children:i.jsx("img",{src:r.image,alt:`${r.name} 미리보기`,loading:"lazy"})}),i.jsxs("div",{className:"repo-top",children:[r.url?i.jsxs("a",{className:"repo-name",href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:b,children:[i.jsx(Xu,{size:19,className:"repo-name-icon"}),i.jsx("span",{children:r.name})]}):i.jsxs("span",{className:"repo-name",children:[i.jsx(Xu,{size:19,className:"repo-name-icon"}),i.jsx("span",{children:r.name})]}),i.jsxs("div",{className:"repo-stats",children:[i.jsxs("span",{className:"repo-stat",children:[i.jsx("span",{className:"repo-lang-dot",style:{background:r.langColor}}),r.language]}),i.jsxs("span",{className:"repo-stat",children:["★ ",r.stars]}),i.jsxs("span",{className:"repo-stat",children:["⑂ ",r.forks]})]})]}),i.jsx("div",{className:"repo-eyebrow",children:"프로젝트 소개"}),i.jsx("p",{className:"repo-desc",children:r.preview}),r.focus.length>0&&i.jsx("div",{className:"repo-focus",children:r.focus.map(([O,Y])=>i.jsxs("span",{className:"repo-focus-badge",children:[i.jsxs("span",{className:"repo-focus-key",children:[i.jsx(Yd,{field:O}),O]}),i.jsx("span",{className:"repo-focus-val",style:{background:wu(O),color:Hd(wu(O))},children:Y})]},`${O}-${Y}`))}),r.stack.length>0&&i.jsxs("div",{className:"repo-stack-section",children:[i.jsx("div",{className:"repo-eyebrow",children:"기술 스택"}),i.jsx("div",{className:"repo-stack",children:r.stack.map(O=>i.jsx("span",{className:"repo-stack-chip",children:O},O))})]}),i.jsxs("div",{className:"repo-actions",children:[i.jsxs("span",{className:"repo-toggle",children:[i.jsx(Bd,{size:16,className:"repo-chevron"}),E?"README 접기":"README 자세히 보기"]}),r.demoUrl&&i.jsxs("a",{className:"btn btn-outline",href:r.demoUrl,target:"_blank",rel:"noopener noreferrer",onClick:b,children:[i.jsx(x0,{size:15,className:"icon-green"}),"데모 사이트"]}),r.url&&i.jsx("a",{className:"btn btn-soft",href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:b,children:"깃허브 바로가기 →"}),i.jsx("span",{className:"repo-updated",children:r.updatedText})]}),i.jsx("div",{className:"repo-readme-wrap",onClick:b,children:i.jsx("div",{className:"repo-readme-inner",children:i.jsxs("div",{className:"repo-readme",children:[i.jsx("div",{className:"repo-eyebrow",children:"README · 코드 설명"}),r.readmeText.trim()?i.jsx("div",{className:"readme-box",children:Ld(r.readmeText,r.readmeBase)}):i.jsxs("p",{className:"readme-error",children:["README 내용을 표시할 수 없습니다."," ",i.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:b,children:"GitHub에서 보기 →"})]})]})})})]})]})}function q0({repo:r,open:E,onToggle:_}){const f=b=>b.stopPropagation();return i.jsxs("div",{className:`repo-row${E?" is-open":""}`,children:[i.jsxs("div",{className:"repo-row-head",children:[r.url?i.jsxs("a",{className:"repo-row-name",href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:f,children:[i.jsx(Xu,{size:18,className:"repo-name-icon"}),i.jsx("span",{children:r.name})]}):i.jsxs("span",{className:"repo-row-name",children:[i.jsx(Xu,{size:18,className:"repo-name-icon"}),i.jsx("span",{children:r.name})]}),r.focus.length>0&&i.jsx("div",{className:"repo-row-focus",children:r.focus.map(([b,A])=>i.jsxs("span",{className:"repo-focus-badge",children:[i.jsxs("span",{className:"repo-focus-key",children:[i.jsx(Yd,{field:b}),b]}),i.jsx("span",{className:"repo-focus-val",style:{background:wu(b),color:Hd(wu(b))},children:A})]},`${b}-${A}`))}),i.jsxs("button",{type:"button",className:"repo-row-toggle",onClick:_,"aria-expanded":E,children:[i.jsx(Bd,{size:16,className:"repo-chevron"}),E?"README 접기":"README 자세히 보기"]})]}),i.jsx("div",{className:"repo-readme-wrap",onClick:f,children:i.jsx("div",{className:"repo-readme-inner",children:i.jsxs("div",{className:"repo-readme",children:[i.jsx("div",{className:"repo-eyebrow",children:"README · 코드 설명"}),r.readmeText.trim()?i.jsx("div",{className:"readme-box",children:Ld(r.readmeText,r.readmeBase)}):i.jsxs("p",{className:"readme-error",children:["README 내용을 표시할 수 없습니다."," ",i.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:f,children:"GitHub에서 보기 →"})]})]})})})]})}function Q0({topRepos:r,githubUrl:E,showSkeleton:_,showError:f,showEmpty:b,readmeErrored:A,onRetry:O}){const{listRef:Y,captureFlip:D}=U0(),[p,q]=Et.useState("card"),[U,Q]=Et.useState(null),st=G=>{D(),Q(J=>J===G?null:G)},nt=G=>{G!==p&&(Q(null),q(G))};return i.jsx("section",{id:"projects",className:"section-full projects",children:i.jsxs("div",{className:"projects-inner",children:[i.jsxs("div",{className:"projects-head","data-reveal":!0,children:[i.jsxs("div",{children:[i.jsx("span",{className:"eyebrow",children:"PROJECTS"}),i.jsx("h2",{className:"section-title",children:"포트폴리오"}),i.jsx("p",{className:"section-desc",children:"README가 등록된 저장소만 모았습니다. 카드를 누르면 펼쳐지며 전체 README와 코드 설명을 볼 수 있어요."})]}),i.jsx("a",{className:"projects-all",href:E,target:"_blank",rel:"noopener noreferrer",children:"전체 저장소 →"})]}),r.length>0&&i.jsx("div",{className:"view-toggle-bar","data-reveal":!0,children:i.jsxs("div",{className:"view-toggle",role:"tablist","aria-label":"프로젝트 보기 방식",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":p==="card",className:`view-toggle-btn${p==="card"?" is-active":""}`,onClick:()=>nt("card"),children:[i.jsx(M0,{size:15}),"카드형"]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":p==="list",className:`view-toggle-btn${p==="list"?" is-active":""}`,onClick:()=>nt("list"),children:[i.jsx(N0,{size:15}),"리스트형"]})]})}),r.length>0&&(p==="card"?i.jsx("div",{className:"repo-list",ref:Y,children:r.map(G=>i.jsx(Y0,{repo:G,open:U===G.id,onToggle:()=>st(G.id)},G.id))}):i.jsx("div",{className:"repo-rows",ref:Y,children:r.map(G=>i.jsx(q0,{repo:G,open:U===G.id,onToggle:()=>st(G.id)},G.id))})),_&&i.jsx("div",{className:"repo-skeleton-grid",children:Array.from({length:6}).map((G,J)=>i.jsx("div",{className:"sk sk-light repo-skeleton-card"},J))}),f&&i.jsxs("div",{className:"repo-error",children:[i.jsx("p",{children:"GitHub 저장소를 불러오지 못했습니다. (API 호출 한도일 수 있어요)"}),i.jsx("button",{className:"btn btn-primary",onClick:O,children:"다시 시도"})]}),b&&i.jsxs("div",{className:"repo-error",children:[i.jsx("p",{children:A?"README를 불러오지 못했습니다. (GitHub API 호출 한도일 수 있어요)":"표시할 README가 있는 저장소를 찾지 못했습니다."}),A&&i.jsx("button",{className:"btn btn-primary",onClick:O,children:"다시 시도"})]})]})})}const V0=["#eef1f7","#9db0ef","#5f79e6","#3247cf","#1c2a91"],X0=14;function w0({weeks:r}){const E=[];let _=-1;return r.forEach((f,b)=>{const A=f.find(O=>O);if(A){const O=new Date(`${A.date}T00:00:00`).getMonth();O!==_&&(E.push({ci:b,mo:O}),_=O)}}),i.jsxs("div",{className:"heatmap",children:[i.jsx("div",{className:"heatmap-months",children:E.map((f,b)=>i.jsxs("span",{className:"heatmap-month",style:{left:f.ci*X0},children:[f.mo+1,"월"]},b))}),i.jsx("div",{className:"heatmap-grid",children:r.map((f,b)=>i.jsx("div",{className:"heatmap-week",children:f.map((A,O)=>i.jsx("div",{className:"heatmap-cell",title:A?`${A.date}: ${A.count}`:"",style:{background:A?V0[A.level]:"transparent"}},O))},b))})]})}function Z0({statContrib:r,weeks:E,contribReady:_,showSkeleton:f,showError:b}){return i.jsxs("section",{id:"activity",className:"section activity",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"ACTIVITY"}),i.jsx("h2",{className:"section-title",children:"GitHub 활동"})]}),i.jsxs("div",{className:"activity-card","data-reveal":!0,style:{transitionDelay:".05s"},children:[i.jsxs("div",{className:"activity-stat",children:[i.jsx("span",{className:"activity-stat-num",children:r}),i.jsx("span",{className:"activity-stat-label",children:"최근 1년 기여"})]}),_&&i.jsx("div",{className:"activity-scroll",children:i.jsx(w0,{weeks:E})}),f&&i.jsx("div",{className:"sk sk-light activity-skeleton"}),b&&i.jsx("p",{className:"activity-empty",children:"기여 그래프를 불러오지 못했습니다."}),i.jsxs("div",{className:"heatmap-legend",children:[i.jsx("span",{children:"Less"}),i.jsx("span",{className:"legend-swatch legend-0"}),i.jsx("span",{className:"legend-swatch legend-1"}),i.jsx("span",{className:"legend-swatch legend-2"}),i.jsx("span",{className:"legend-swatch legend-3"}),i.jsx("span",{className:"legend-swatch legend-4"}),i.jsx("span",{children:"More"})]})]})]})}function K0({login:r,email:E,githubUrl:_,linkedinUrl:f}){const b=f.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");return i.jsx("section",{id:"contact",className:"section-full contact",children:i.jsxs("div",{className:"contact-inner",children:[i.jsxs("div",{className:"contact-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow eyebrow-light",children:"CONTACT"}),i.jsx("h2",{className:"contact-title",children:"함께 만들어요"}),i.jsx("p",{className:"contact-desc",children:"새로운 기회나 협업 제안은 언제든 환영합니다. 아래 채널로 편하게 연락 주세요."})]}),i.jsxs("div",{className:"contact-cards","data-reveal":!0,style:{transitionDelay:".05s"},children:[i.jsxs("a",{className:"contact-card",href:_,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Ud,{size:24}),i.jsx("span",{className:"contact-card-label",children:"GitHub"}),i.jsxs("span",{className:"contact-card-val",children:["@",r]})]}),i.jsxs("a",{className:"contact-card",href:`mailto:${E}`,children:[i.jsx(T0,{size:24}),i.jsx("span",{className:"contact-card-label",children:"Email"}),i.jsx("span",{className:"contact-card-val",children:E})]}),i.jsxs("a",{className:"contact-card",href:f,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Gd,{size:24}),i.jsx("span",{className:"contact-card-label",children:"LinkedIn"}),i.jsx("span",{className:"contact-card-val",children:b})]})]})]})})}function k0({name:r,login:E}){return i.jsxs("footer",{className:"footer",children:["© 2026 ",r," · Built with live GitHub data · @",E]})}function J0(){const[r,E]=Et.useState(!1);Et.useEffect(()=>{const f=()=>E(window.scrollY>400);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const _=()=>window.scrollTo({top:0,behavior:"smooth"});return i.jsx("button",{type:"button",className:`scroll-top${r?" is-visible":""}`,onClick:_,"aria-label":"맨 위로 이동",title:"맨 위로",children:i.jsx(j0,{size:22})})}function W0(r){const[E,_]=Et.useState(null),[f,b]=Et.useState([]),[A,O]=Et.useState(!1),[Y,D]=Et.useState(null),[p,q]=Et.useState(!1),[U,Q]=Et.useState(0),st=Et.useCallback(()=>Q(nt=>nt+1),[]);return Et.useEffect(()=>{const nt=r.trim();if(!nt)return;let G=!1;return O(!1),q(!1),fetch(`https://api.github.com/users/${nt}`).then(J=>J.ok?J.json():Promise.reject(J.status)).then(J=>{G||_(J)}).catch(()=>{}),fetch(`https://api.github.com/users/${nt}/repos?per_page=100&sort=updated`).then(J=>J.ok?J.json():Promise.reject(J.status)).then(J=>{if(!G){const xt=new Set(wt.pinnedRepos);b((Array.isArray(J)?J:[]).filter(Ot=>!Ot.fork||xt.has(Ot.name)))}}).catch(()=>{G||O(!0)}),fetch(`https://github-contributions-api.jogruber.de/v4/${nt}?y=last`).then(J=>J.ok?J.json():Promise.reject()).then(J=>{G||D(J)}).catch(()=>{G||q(!0)}),()=>{G=!0}},[r,U]),{user:E,repos:f,reposError:A,contrib:Y,contribError:p,reload:st}}const qd={checkmiteV1:{baseUrl:"https://raw.githubusercontent.com/05solar/checkmiteV1/HEAD/",text:`# Checkmite

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
`}};function $0(r,E,_){const f=E.join("|");return Et.useMemo(()=>{const b={};for(const A of E){const O=qd[A];b[A]=O?{status:"done",text:O.text,baseUrl:O.baseUrl}:{status:"missing",text:"",baseUrl:""}}return b},[f])}function F0(r){Et.useEffect(()=>{const E=new WeakSet,_=new IntersectionObserver(A=>{A.forEach(O=>{O.isIntersecting&&(O.target.classList.add("is-in"),_.unobserve(O.target))})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});(()=>{document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(A=>{E.has(A)||(E.add(A),_.observe(A))})})();const b=window.setTimeout(()=>{document.querySelectorAll("[data-reveal]").forEach(A=>A.classList.add("is-in"))},2500);return()=>{_.disconnect(),window.clearTimeout(b)}},[r])}const I0={JavaScript:"#f1e05a",TypeScript:"#3178c6",Python:"#3572A5",Java:"#b07219",HTML:"#e34c26",CSS:"#563d7c",SCSS:"#c6538c",Go:"#00ADD8",Rust:"#dea584","C++":"#f34b7d",C:"#555555","C#":"#178600",Shell:"#89e051",Vue:"#41b883",Dart:"#00B4AB",Kotlin:"#A97BFF",Swift:"#F05138",Ruby:"#701516",PHP:"#4F5D95",Jupyter:"#DA5B0B","Jupyter Notebook":"#DA5B0B",Dockerfile:"#384d54"},Zu=r=>r&&I0[r]||"#94a3b8",P0=r=>{if(!r)return"";const E=new Date(r);return`${E.getFullYear()}.${String(E.getMonth()+1).padStart(2,"0")} 업데이트`},Cd=r=>r.startsWith("http")?r:`https://${r}`,tp=r=>{const E=[];let _=new Array(7).fill(null);return r.forEach(f=>{const b=new Date(`${f.date}T00:00:00`).getDay();_[b]=f,b===6&&(E.push(_),_=new Array(7).fill(null))}),_.some(f=>f)&&E.push(_),E},ep=[{name:"TypeScript",re:/\btypescript\b|\btsx\b/i},{name:"JavaScript",re:/\bjavascript\b|\bes6\b/i},{name:"Python",re:/\bpython\b/i},{name:"Java",re:/\bjava\b/i},{name:"Kotlin",re:/\bkotlin\b/i},{name:"Swift",re:/\bswift\b/i},{name:"Dart",re:/\bdart\b/i},{name:"Ruby",re:/\bruby\b/i},{name:"PHP",re:/\bphp\b/i},{name:"C#",re:/\bc#|\bc\s?sharp\b/i},{name:"C++",re:/\bc\+\+/i},{name:"HTML",re:/\bhtml5?\b/i},{name:"CSS",re:/\bcss3?\b/i},{name:"Sass",re:/\bs[ac]ss\b/i},{name:"React",re:/\breact\b/i},{name:"Next.js",re:/\bnext\.?js\b/i},{name:"Nuxt",re:/\bnuxt\b/i},{name:"Vue",re:/\bvue\b/i},{name:"Svelte",re:/\bsvelte\b/i},{name:"Angular",re:/\bangular\b/i},{name:"Vite",re:/\bvite\b/i},{name:"Tailwind CSS",re:/\btailwind\b/i},{name:"Redux",re:/\bredux\b/i},{name:"Zustand",re:/\bzustand\b/i},{name:"styled-components",re:/styled-components/i},{name:"Streamlit",re:/\bstreamlit\b/i},{name:"Node.js",re:/\bnode(\.?js)?\b/i},{name:"Express",re:/\bexpress\b/i},{name:"NestJS",re:/\bnest(\.?js)?\b/i},{name:"FastAPI",re:/\bfastapi\b/i},{name:"Flask",re:/\bflask\b/i},{name:"Django",re:/\bdjango\b/i},{name:"Spring Boot",re:/\bspring\s?boot\b/i},{name:"Spring",re:/\bspring\b(?!\s?boot)/i},{name:"GraphQL",re:/\bgraphql\b/i},{name:"PostgreSQL",re:/\bpostgres(ql)?\b/i},{name:"MySQL",re:/\bmysql\b/i},{name:"MongoDB",re:/\bmongo(db)?\b/i},{name:"Redis",re:/\bredis\b/i},{name:"SQLite",re:/\bsqlite\b/i},{name:"Supabase",re:/\bsupabase\b/i},{name:"Firebase",re:/\bfirebase\b/i},{name:"Prisma",re:/\bprisma\b/i},{name:"OpenAI API",re:/\bopenai\b/i},{name:"LangChain",re:/\blangchain\b/i},{name:"RAG",re:/\brag\b/i},{name:"MCP",re:/\bmcp\b/i},{name:"PyTorch",re:/\bpytorch\b/i},{name:"TensorFlow",re:/\btensorflow\b/i},{name:"Docker",re:/\bdocker\b/i},{name:"Kubernetes",re:/\bkubernetes\b|\bk8s\b/i},{name:"AWS",re:/\baws\b/i},{name:"Vercel",re:/\bvercel\b/i},{name:"Netlify",re:/\bnetlify\b/i},{name:"GitHub Actions",re:/\bgithub\s?actions\b/i},{name:"Nginx",re:/\bnginx\b/i},{name:"n8n",re:/\bn8n\b/i},{name:"Swagger",re:/\bswagger\b/i},{name:"Jupyter",re:/\bjupyter\b/i},{name:"Kakao Map",re:/\bkakao\s?map\b/i},{name:"Google Maps",re:/\bgoogle\s?maps\b/i}];function Qd(r){const E=[r.readme||"",r.description||"",(r.name||"").replace(/[-_]/g," "),(r.topics||[]).join(" ")].join(`
`),_=new Set,f=[],b=A=>{_.has(A)||(_.add(A),f.push(A))};r.language&&b(r.language);for(const A of ep)A.re.test(E)&&b(A.name);return f.slice(0,8)}const lp="/PF/assets/gmg-cover-ya7No8Ee.png",np="/PF/assets/edu-msa-cover-DFKxmEPu.png",Vd=wt.githubUsername.trim()||"05solar",Ie=(r,E)=>`https://raw.githubusercontent.com/${Vd}/${r}/HEAD/${E}`,ap=[{name:"checkmiteV1",language:"TypeScript",image:Ie("checkmiteV1","docs/screenshot.png")},{name:"jbig",language:"Python",image:Ie("jbig","docs/images/home.png")},{name:"edu-msa",language:"TypeScript",image:np,url:""},{name:"GO",language:"TypeScript",image:Ie("GO","docs/screenshot.png"),demoUrl:"https://05solar.github.io/GO/"},{name:"MSA-restaurant",language:"Java",image:Ie("MSA-restaurant","assets/customer.png")},{name:"By-Tomorrow",language:"Java",image:Ie("By-Tomorrow","docs/screenshots/overview.png")},{name:"GLML",language:"TypeScript",image:Ie("GLML","docs/preview-1.png")},{name:"GMG",language:"Java",image:lp,url:"https://github.com/project-GMG"},{name:"RAG-agent",language:"Python",image:Ie("RAG-agent","docs/assets/readme-preview.png")},{name:"MCP-shopbot",language:"Python",image:Ie("MCP-shopbot","assets/image.png")},{name:"OV-clonecoding",language:"JavaScript",image:null},{name:"Auto-PPT",language:"Python",image:Ie("Auto-PPT","docs/images/full-screenshot.png")}],up=ap.map((r,E)=>{const _=wt.descriptions[r.name]||"",f=qd[r.name];return{id:-1-E,name:r.name,url:r.url??`https://github.com/${Vd}/${r.name}`,preview:_||"프로젝트 소개는 GitHub 저장소에서 확인하세요.",readmeText:(f==null?void 0:f.text)||"",readmeBase:(f==null?void 0:f.baseUrl)||"",image:r.image,language:r.language,langColor:Zu(r.language),stars:0,forks:0,updatedText:"",stack:Qd({readme:_,name:r.name,language:r.language}),focus:wt.focus[r.name]||[],demoUrl:r.demoUrl??null}}),cp=[{name:"TypeScript",pct:30},{name:"JavaScript",pct:28},{name:"Python",pct:22},{name:"HTML",pct:9},{name:"CSS",pct:7},{name:"Java",pct:4}].map(({name:r,pct:E})=>({name:r,color:Zu(r),width:`${E}%`,pctText:`${E}%`}));function ip(){const r=wt.githubUsername.trim()||"05solar",E=Math.max(3,Math.min(12,wt.projectCount)),[_,f]=Et.useState(0),{user:b,repos:A,reposError:O,contrib:Y,contribError:D,reload:p}=W0(r),q=Et.useMemo(()=>{const J=new Set(wt.excludedRepos),xt=A.filter(vt=>!J.has(vt.name)),Ot=wt.pinnedRepos.map(vt=>xt.find(jt=>jt.name===vt)).filter(vt=>!!vt),Tt=new Set(Ot.map(vt=>vt.name)),Zt=xt.filter(vt=>!Tt.has(vt.name)).sort((vt,jt)=>jt.stargazers_count-vt.stargazers_count||new Date(jt.updated_at).getTime()-new Date(vt.updated_at).getTime());return[...Ot,...Zt]},[A]),U=Et.useMemo(()=>q.slice(0,E+6).map(J=>J.name),[q,E]),Q=$0(r,U),st=Et.useMemo(()=>{const J=new Set(wt.pinnedRepos);return q.filter(xt=>{var Tt;const Ot=(Tt=Q[xt.name])==null?void 0:Tt.status;return J.has(xt.name)?Ot==="done"||Ot==="missing":Ot==="done"}).slice(0,E)},[q,Q,E]);F0(`${!!b}-${A.length}-${!!Y}`);const nt=()=>{f(J=>J+1),p()},G=Et.useMemo(()=>{const J=wt.displayName.trim()||(b==null?void 0:b.name)||r,xt=wt.tagline.trim()||"풀스택 개발자",Ot=(J||"D").trim().charAt(0).toUpperCase(),Tt=st.map(z=>{const K=z.homepage&&String(z.homepage).trim(),dt=Q[z.name],yt=(dt==null?void 0:dt.text)||"";return{id:z.id,name:z.name,url:z.html_url,readmeText:yt,readmeBase:(dt==null?void 0:dt.baseUrl)||"",image:B0(yt,(dt==null?void 0:dt.baseUrl)||""),preview:wt.descriptions[z.name]||G0(yt)||z.description||"README는 등록되어 있지만 미리볼 설명이 없습니다. 카드를 눌러 전체 내용을 확인하세요.",language:z.language||"기타",langColor:Zu(z.language),stars:z.stargazers_count,forks:z.forks_count,updatedText:P0(z.updated_at),stack:Qd({readme:yt,description:z.description,name:z.name,language:z.language,topics:z.topics}),focus:wt.focus[z.name]||[],demoUrl:K?Cd(K):null}}),Zt=U.some(z=>{var K;return((K=Q[z])==null?void 0:K.status)==="error"}),vt={};A.forEach(z=>{z.language&&(vt[z.language]=(vt[z.language]||0)+1)});const jt=Object.entries(vt).sort((z,K)=>K[1]-z[1]),F=jt.reduce((z,K)=>z+K[1],0),Lt=jt.slice(0,6).map(([z,K])=>{const dt=F?Math.round(K/F*100):0;return{name:z,color:Zu(z),width:`${dt}%`,pctText:`${dt}%`}}),ne=Y?(Y.contributions||[]).reduce((z,K)=>z+K.count,0):null,Pe=ne!=null?ne.toLocaleString():"—",pe=Y?tp(Y.contributions||[]):[],Kt=(b==null?void 0:b.bio)||"// 빠르게 배우고, 끝까지 책임지는 개발자",Ce=wt.email.trim()||(b==null?void 0:b.email)||`${r}@gmail.com`,Jt=(b==null?void 0:b.blog)&&String(b.blog).trim(),ae=Jt?Cd(Jt):`https://github.com/${r}`,T=Jt?Jt.replace(/^https?:\/\//,""):(b==null?void 0:b.location)||"블로그 / 웹사이트",R=Jt?"Website":b!=null&&b.location?"Location":"Website",w=A.length>0,at=!!Y,ft=new Map(Tt.map(z=>[z.name,z])),m=new Map(up.map(z=>[z.name,z])),N=wt.pinnedRepos.map(z=>ft.get(z)||m.get(z)).filter(z=>!!z),C=!w&&!O,B=Lt.length>0?Lt:C?[]:cp,Z=B.length>0;return{name:J,tagline:xt,initial:Ot,githubUrl:`https://github.com/${r}`,linkedinUrl:wt.linkedinUrl.trim(),avatarUrl:`https://github.com/${r}.png?size=240`,bio:Kt,email:Ce,blogUrl:ae,blogText:T,blogLabel:R,topRepos:N,langStats:B,statContrib:Pe,weeks:pe,readmeErrored:Zt,showReposSkeleton:!1,showReposError:!1,showReposEmpty:!1,langReady:Z,showLangSkeleton:C&&B.length===0,showLangError:!1,contribReady:at,showContribSkeleton:!at&&!D,showContribError:!at&&D}},[b,A,O,Y,D,Q,st,U,r]);return i.jsxs("div",{className:"page",children:[i.jsx(E0,{name:G.name,initial:G.initial}),i.jsx(_0,{name:G.name,tagline:G.tagline,login:r,githubUrl:G.githubUrl,linkedinUrl:G.linkedinUrl,avatarUrl:G.avatarUrl}),i.jsx(z0,{langStats:G.langStats,langReady:G.langReady,showSkeleton:G.showLangSkeleton,showError:G.showLangError}),i.jsx(Z0,{statContrib:G.statContrib,weeks:G.weeks,contribReady:G.contribReady,showSkeleton:G.showContribSkeleton,showError:G.showContribError}),i.jsx(Q0,{topRepos:G.topRepos,githubUrl:G.githubUrl,showSkeleton:G.showReposSkeleton,showError:G.showReposError,showEmpty:G.showReposEmpty,readmeErrored:G.readmeErrored,onRetry:nt}),i.jsx(K0,{login:r,email:G.email,githubUrl:G.githubUrl,linkedinUrl:G.linkedinUrl}),i.jsx(k0,{name:G.name,login:r}),i.jsx(J0,{})]})}A0.createRoot(document.getElementById("root")).render(i.jsx(Et.StrictMode,{children:i.jsx(ip,{})}));
