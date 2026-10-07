(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))f(b);new MutationObserver(b=>{for(const A of b)if(A.type==="childList")for(const O of A.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&f(O)}).observe(document,{childList:!0,subtree:!0});function _(b){const A={};return b.integrity&&(A.integrity=b.integrity),b.referrerPolicy&&(A.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?A.credentials="include":b.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function f(b){if(b.ep)return;b.ep=!0;const A=_(b);fetch(b.href,A)}})();var os={exports:{}},Ea={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function m0(){if(Ed)return Ea;Ed=1;var o=Symbol.for("react.transitional.element"),E=Symbol.for("react.fragment");function _(f,b,A){var O=null;if(A!==void 0&&(O=""+A),b.key!==void 0&&(O=""+b.key),"key"in b){A={};for(var q in b)q!=="key"&&(A[q]=b[q])}else A=b;return b=A.ref,{$$typeof:o,type:f,key:O,ref:b!==void 0?b:null,props:A}}return Ea.Fragment=E,Ea.jsx=_,Ea.jsxs=_,Ea}var xd;function h0(){return xd||(xd=1,os.exports=m0()),os.exports}var i=h0(),rs={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function v0(){if(Td)return k;Td=1;var o=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),O=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),Q=Symbol.iterator;function se(m){return m===null||typeof m!="object"?null:(m=Q&&m[Q]||m["@@iterator"],typeof m=="function"?m:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,J={};function xe(m,N,C){this.props=m,this.context=N,this.refs=J,this.updater=C||ne}xe.prototype.isReactComponent={},xe.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},xe.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Oe(){}Oe.prototype=xe.prototype;function Te(m,N,C){this.props=m,this.context=N,this.refs=J,this.updater=C||ne}var Ze=Te.prototype=new Oe;Ze.constructor=Te,G(Ze,xe.prototype),Ze.isPureReactComponent=!0;var pe=Array.isArray;function je(){}var F={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function nt(m,N,C){var B=C.ref;return{$$typeof:o,type:m,key:N,ref:B!==void 0?B:null,props:C}}function Pt(m,N){return nt(m.type,N,m.props)}function vt(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function Ke(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(C){return N[C]})}var Ct=/\/+/g;function Je(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Ke(""+m.key):N.toString(36)}function at(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(je,je):(m.status="pending",m.then(function(N){m.status==="pending"&&(m.status="fulfilled",m.value=N)},function(N){m.status==="pending"&&(m.status="rejected",m.reason=N)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function T(m,N,C,B,Z){var z=typeof m;(z==="undefined"||z==="boolean")&&(m=null);var K=!1;if(m===null)K=!0;else switch(z){case"bigint":case"string":case"number":K=!0;break;case"object":switch(m.$$typeof){case o:case E:K=!0;break;case Y:return K=m._init,T(K(m._payload),N,C,B,Z)}}if(K)return Z=Z(m),K=B===""?"."+Je(m,0):B,pe(Z)?(C="",K!=null&&(C=K.replace(Ct,"$&/")+"/"),T(Z,N,C,"",function(Dn){return Dn})):Z!=null&&(vt(Z)&&(Z=Pt(Z,C+(Z.key==null||m&&m.key===Z.key?"":(""+Z.key).replace(Ct,"$&/")+"/")+K)),N.push(Z)),1;K=0;var de=B===""?".":B+":";if(pe(m))for(var ye=0;ye<m.length;ye++)B=m[ye],z=de+Je(B,ye),K+=T(B,N,C,z,Z);else if(ye=se(m),typeof ye=="function")for(m=ye.call(m),ye=0;!(B=m.next()).done;)B=B.value,z=de+Je(B,ye++),K+=T(B,N,C,z,Z);else if(z==="object"){if(typeof m.then=="function")return T(at(m),N,C,B,Z);throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return K}function R(m,N,C){if(m==null)return m;var B=[],Z=0;return T(m,B,"","",function(z){return N.call(C,z,Z++)}),B}function w(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(C){(m._status===0||m._status===-1)&&(m._status=1,m._result=C)},function(C){(m._status===0||m._status===-1)&&(m._status=2,m._result=C)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var ae=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},fe={map:R,forEach:function(m,N,C){R(m,function(){N.apply(this,arguments)},C)},count:function(m){var N=0;return R(m,function(){N++}),N},toArray:function(m){return R(m,function(N){return N})||[]},only:function(m){if(!vt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return k.Activity=U,k.Children=fe,k.Component=xe,k.Fragment=_,k.Profiler=b,k.PureComponent=Te,k.StrictMode=f,k.Suspense=D,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,k.__COMPILER_RUNTIME={__proto__:null,c:function(m){return F.H.useMemoCache(m)}},k.cache=function(m){return function(){return m.apply(null,arguments)}},k.cacheSignal=function(){return null},k.cloneElement=function(m,N,C){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=G({},m.props),Z=m.key;if(N!=null)for(z in N.key!==void 0&&(Z=""+N.key),N)!Le.call(N,z)||z==="key"||z==="__self"||z==="__source"||z==="ref"&&N.ref===void 0||(B[z]=N[z]);var z=arguments.length-2;if(z===1)B.children=C;else if(1<z){for(var K=Array(z),de=0;de<z;de++)K[de]=arguments[de+2];B.children=K}return nt(m.type,Z,B)},k.createContext=function(m){return m={$$typeof:O,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:A,_context:m},m},k.createElement=function(m,N,C){var B,Z={},z=null;if(N!=null)for(B in N.key!==void 0&&(z=""+N.key),N)Le.call(N,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Z[B]=N[B]);var K=arguments.length-2;if(K===1)Z.children=C;else if(1<K){for(var de=Array(K),ye=0;ye<K;ye++)de[ye]=arguments[ye+2];Z.children=de}if(m&&m.defaultProps)for(B in K=m.defaultProps,K)Z[B]===void 0&&(Z[B]=K[B]);return nt(m,z,Z)},k.createRef=function(){return{current:null}},k.forwardRef=function(m){return{$$typeof:q,render:m}},k.isValidElement=vt,k.lazy=function(m){return{$$typeof:Y,_payload:{_status:-1,_result:m},_init:w}},k.memo=function(m,N){return{$$typeof:v,type:m,compare:N===void 0?null:N}},k.startTransition=function(m){var N=F.T,C={};F.T=C;try{var B=m(),Z=F.S;Z!==null&&Z(C,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(je,ae)}catch(z){ae(z)}finally{N!==null&&C.types!==null&&(N.types=C.types),F.T=N}},k.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},k.use=function(m){return F.H.use(m)},k.useActionState=function(m,N,C){return F.H.useActionState(m,N,C)},k.useCallback=function(m,N){return F.H.useCallback(m,N)},k.useContext=function(m){return F.H.useContext(m)},k.useDebugValue=function(){},k.useDeferredValue=function(m,N){return F.H.useDeferredValue(m,N)},k.useEffect=function(m,N){return F.H.useEffect(m,N)},k.useEffectEvent=function(m){return F.H.useEffectEvent(m)},k.useId=function(){return F.H.useId()},k.useImperativeHandle=function(m,N,C){return F.H.useImperativeHandle(m,N,C)},k.useInsertionEffect=function(m,N){return F.H.useInsertionEffect(m,N)},k.useLayoutEffect=function(m,N){return F.H.useLayoutEffect(m,N)},k.useMemo=function(m,N){return F.H.useMemo(m,N)},k.useOptimistic=function(m,N){return F.H.useOptimistic(m,N)},k.useReducer=function(m,N,C){return F.H.useReducer(m,N,C)},k.useRef=function(m){return F.H.useRef(m)},k.useState=function(m){return F.H.useState(m)},k.useSyncExternalStore=function(m,N,C){return F.H.useSyncExternalStore(m,N,C)},k.useTransition=function(){return F.H.useTransition()},k.version="19.2.6",k}var jd;function ys(){return jd||(jd=1,rs.exports=v0()),rs.exports}var Ee=ys(),ds={exports:{}},xa={},ms={exports:{}},hs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function p0(){return Md||(Md=1,(function(o){function E(T,R){var w=T.length;T.push(R);e:for(;0<w;){var ae=w-1>>>1,fe=T[ae];if(0<b(fe,R))T[ae]=R,T[w]=fe,w=ae;else break e}}function _(T){return T.length===0?null:T[0]}function f(T){if(T.length===0)return null;var R=T[0],w=T.pop();if(w!==R){T[0]=w;e:for(var ae=0,fe=T.length,m=fe>>>1;ae<m;){var N=2*(ae+1)-1,C=T[N],B=N+1,Z=T[B];if(0>b(C,w))B<fe&&0>b(Z,C)?(T[ae]=Z,T[B]=w,ae=B):(T[ae]=C,T[N]=w,ae=N);else if(B<fe&&0>b(Z,w))T[ae]=Z,T[B]=w,ae=B;else break e}}return R}function b(T,R){var w=T.sortIndex-R.sortIndex;return w!==0?w:T.id-R.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var O=Date,q=O.now();o.unstable_now=function(){return O.now()-q}}var D=[],v=[],Y=1,U=null,Q=3,se=!1,ne=!1,G=!1,J=!1,xe=typeof setTimeout=="function"?setTimeout:null,Oe=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;function Ze(T){for(var R=_(v);R!==null;){if(R.callback===null)f(v);else if(R.startTime<=T)f(v),R.sortIndex=R.expirationTime,E(D,R);else break;R=_(v)}}function pe(T){if(G=!1,Ze(T),!ne)if(_(D)!==null)ne=!0,je||(je=!0,Ke());else{var R=_(v);R!==null&&at(pe,R.startTime-T)}}var je=!1,F=-1,Le=5,nt=-1;function Pt(){return J?!0:!(o.unstable_now()-nt<Le)}function vt(){if(J=!1,je){var T=o.unstable_now();nt=T;var R=!0;try{e:{ne=!1,G&&(G=!1,Oe(F),F=-1),se=!0;var w=Q;try{t:{for(Ze(T),U=_(D);U!==null&&!(U.expirationTime>T&&Pt());){var ae=U.callback;if(typeof ae=="function"){U.callback=null,Q=U.priorityLevel;var fe=ae(U.expirationTime<=T);if(T=o.unstable_now(),typeof fe=="function"){U.callback=fe,Ze(T),R=!0;break t}U===_(D)&&f(D),Ze(T)}else f(D);U=_(D)}if(U!==null)R=!0;else{var m=_(v);m!==null&&at(pe,m.startTime-T),R=!1}}break e}finally{U=null,Q=w,se=!1}R=void 0}}finally{R?Ke():je=!1}}}var Ke;if(typeof Te=="function")Ke=function(){Te(vt)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,Je=Ct.port2;Ct.port1.onmessage=vt,Ke=function(){Je.postMessage(null)}}else Ke=function(){xe(vt,0)};function at(T,R){F=xe(function(){T(o.unstable_now())},R)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return Q},o.unstable_next=function(T){switch(Q){case 1:case 2:case 3:var R=3;break;default:R=Q}var w=Q;Q=R;try{return T()}finally{Q=w}},o.unstable_requestPaint=function(){J=!0},o.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var w=Q;Q=T;try{return R()}finally{Q=w}},o.unstable_scheduleCallback=function(T,R,w){var ae=o.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?ae+w:ae):w=ae,T){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=w+fe,T={id:Y++,callback:R,priorityLevel:T,startTime:w,expirationTime:fe,sortIndex:-1},w>ae?(T.sortIndex=w,E(v,T),_(D)===null&&T===_(v)&&(G?(Oe(F),F=-1):G=!0,at(pe,w-ae))):(T.sortIndex=fe,E(D,T),ne||se||(ne=!0,je||(je=!0,Ke()))),T},o.unstable_shouldYield=Pt,o.unstable_wrapCallback=function(T){var R=Q;return function(){var w=Q;Q=R;try{return T.apply(this,arguments)}finally{Q=w}}}})(hs)),hs}var Nd;function g0(){return Nd||(Nd=1,ms.exports=p0()),ms.exports}var vs={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function y0(){if(_d)return ke;_d=1;var o=ys();function E(D){var v="https://react.dev/errors/"+D;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)v+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+D+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var f={d:{f:_,r:function(){throw Error(E(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},b=Symbol.for("react.portal");function A(D,v,Y){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:U==null?null:""+U,children:D,containerInfo:v,implementation:Y}}var O=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(D,v){if(D==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,ke.createPortal=function(D,v){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(E(299));return A(D,v,null,Y)},ke.flushSync=function(D){var v=O.T,Y=f.p;try{if(O.T=null,f.p=2,D)return D()}finally{O.T=v,f.p=Y,f.d.f()}},ke.preconnect=function(D,v){typeof D=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,f.d.C(D,v))},ke.prefetchDNS=function(D){typeof D=="string"&&f.d.D(D)},ke.preinit=function(D,v){if(typeof D=="string"&&v&&typeof v.as=="string"){var Y=v.as,U=q(Y,v.crossOrigin),Q=typeof v.integrity=="string"?v.integrity:void 0,se=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;Y==="style"?f.d.S(D,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:U,integrity:Q,fetchPriority:se}):Y==="script"&&f.d.X(D,{crossOrigin:U,integrity:Q,fetchPriority:se,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ke.preinitModule=function(D,v){if(typeof D=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var Y=q(v.as,v.crossOrigin);f.d.M(D,{crossOrigin:Y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&f.d.M(D)},ke.preload=function(D,v){if(typeof D=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var Y=v.as,U=q(Y,v.crossOrigin);f.d.L(D,Y,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ke.preloadModule=function(D,v){if(typeof D=="string")if(v){var Y=q(v.as,v.crossOrigin);f.d.m(D,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:Y,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else f.d.m(D)},ke.requestFormReset=function(D){f.d.r(D)},ke.unstable_batchedUpdates=function(D,v){return D(v)},ke.useFormState=function(D,v,Y){return O.H.useFormState(D,v,Y)},ke.useFormStatus=function(){return O.H.useHostTransitionStatus()},ke.version="19.2.6",ke}var Dd;function b0(){if(Dd)return vs.exports;Dd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(E){console.error(E)}}return o(),vs.exports=y0(),vs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function S0(){if(Od)return xa;Od=1;var o=g0(),E=ys(),_=b0();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function O(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(A(e)!==e)throw Error(f(188))}function v(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(f(188));return t!==e?null:e}for(var l=e,n=t;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return D(a),e;if(u===n)return D(a),t;u=u.sibling}throw Error(f(188))}if(l.return!==n.return)l=a,n=u;else{for(var c=!1,s=a.child;s;){if(s===l){c=!0,l=a,n=u;break}if(s===n){c=!0,n=a,l=u;break}s=s.sibling}if(!c){for(s=u.child;s;){if(s===l){c=!0,l=u,n=a;break}if(s===n){c=!0,n=u,l=a;break}s=s.sibling}if(!c)throw Error(f(189))}}if(l.alternate!==n)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?e:t}function Y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Y(e),t!==null)return t;e=e.sibling}return null}var U=Object.assign,Q=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),ne=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Oe=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),Ze=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),Pt=Symbol.for("react.memo_cache_sentinel"),vt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=vt&&e[vt]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function Je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case xe:return"Profiler";case J:return"StrictMode";case pe:return"Suspense";case je:return"SuspenseList";case nt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ne:return"Portal";case Te:return e.displayName||"Context";case Oe:return(e._context.displayName||"Context")+".Consumer";case Ze:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Je(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return Je(e(t))}catch{}}return null}var at=Array.isArray,T=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},ae=[],fe=-1;function m(e){return{current:e}}function N(e){0>fe||(e.current=ae[fe],ae[fe]=null,fe--)}function C(e,t){fe++,ae[fe]=e.current,e.current=t}var B=m(null),Z=m(null),z=m(null),K=m(null);function de(e,t){switch(C(z,t),C(Z,e),C(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zr(t),e=Kr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(B),C(B,e)}function ye(){N(B),N(Z),N(z)}function Dn(e){e.memoizedState!==null&&C(K,e);var t=B.current,l=Kr(t,e.type);t!==l&&(C(Z,e),C(B,l))}function ja(e){Z.current===e&&(N(B),N(Z)),K.current===e&&(N(K),ya._currentValue=w)}var Ku,bs;function jl(e){if(Ku===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Ku=t&&t[1]||"",bs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ku+e+bs}var ku=!1;function Ju(e,t){if(!e||ku)return"";ku=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(S){var y=S}Reflect.construct(e,[],M)}else{try{M.call()}catch(S){y=S}e.call(M.prototype)}}else{try{throw Error()}catch(S){y=S}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),c=u[0],s=u[1];if(c&&s){var r=c.split(`
`),g=s.split(`
`);for(a=n=0;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(n===r.length||a===g.length)for(n=r.length-1,a=g.length-1;1<=n&&0<=a&&r[n]!==g[a];)a--;for(;1<=n&&0<=a;n--,a--)if(r[n]!==g[a]){if(n!==1||a!==1)do if(n--,a--,0>a||r[n]!==g[a]){var x=`
`+r[n].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=n&&0<=a);break}}}finally{ku=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?jl(l):""}function wd(e,t){switch(e.tag){case 26:case 27:case 5:return jl(e.type);case 16:return jl("Lazy");case 13:return e.child!==t&&t!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return Ju(e.type,!1);case 11:return Ju(e.type.render,!1);case 1:return Ju(e.type,!0);case 31:return jl("Activity");default:return""}}function Ss(e){try{var t="",l=null;do t+=wd(e,l),l=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Wu=Object.prototype.hasOwnProperty,$u=o.unstable_scheduleCallback,Fu=o.unstable_cancelCallback,Zd=o.unstable_shouldYield,Kd=o.unstable_requestPaint,ut=o.unstable_now,kd=o.unstable_getCurrentPriorityLevel,As=o.unstable_ImmediatePriority,Es=o.unstable_UserBlockingPriority,Ma=o.unstable_NormalPriority,Jd=o.unstable_LowPriority,xs=o.unstable_IdlePriority,Wd=o.log,$d=o.unstable_setDisableYieldValue,On=null,ct=null;function el(e){if(typeof Wd=="function"&&$d(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(On,e)}catch{}}var it=Math.clz32?Math.clz32:Pd,Fd=Math.log,Id=Math.LN2;function Pd(e){return e>>>=0,e===0?32:31-(Fd(e)/Id|0)|0}var Na=256,_a=262144,Da=4194304;function Ml(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oa(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var a=0,u=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=Ml(n):(c&=s,c!==0?a=Ml(c):l||(l=s&~e,l!==0&&(a=Ml(l))))):(s=n&~u,s!==0?a=Ml(s):c!==0?a=Ml(c):l||(l=n&~e,l!==0&&(a=Ml(l)))),a===0?0:t!==0&&t!==a&&(t&u)===0&&(u=a&-a,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:a}function zn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function em(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ts(){var e=Da;return Da<<=1,(Da&62914560)===0&&(Da=4194304),e}function Iu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tm(e,t,l,n,a,u){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,g=e.hiddenUpdates;for(l=c&~l;0<l;){var x=31-it(l),M=1<<x;s[x]=0,r[x]=-1;var y=g[x];if(y!==null)for(g[x]=null,x=0;x<y.length;x++){var S=y[x];S!==null&&(S.lane&=-536870913)}l&=~M}n!==0&&js(e,n,0),u!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=u&~(c&~t))}function js(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-it(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&261930}function Ms(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-it(l),a=1<<n;a&t|e[n]&t&&(e[n]|=t),l&=~a}}function Ns(e,t){var l=t&-t;return l=(l&42)!==0?1:Pu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ec(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _s(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:vd(e.type))}function Ds(e,t){var l=R.p;try{return R.p=e,t()}finally{R.p=l}}var tl=Math.random().toString(36).slice(2),qe="__reactFiber$"+tl,$e="__reactProps$"+tl,wl="__reactContainer$"+tl,tc="__reactEvents$"+tl,lm="__reactListeners$"+tl,nm="__reactHandles$"+tl,Os="__reactResources$"+tl,Cn="__reactMarker$"+tl;function lc(e){delete e[qe],delete e[$e],delete e[tc],delete e[lm],delete e[nm]}function Zl(e){var t=e[qe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[wl]||l[qe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Pr(e);e!==null;){if(l=e[qe])return l;e=Pr(e)}return t}e=l,l=e.parentNode}return null}function Kl(e){if(e=e[qe]||e[wl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function kl(e){var t=e[Os];return t||(t=e[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[Cn]=!0}var zs=new Set,Rs={};function Nl(e,t){Jl(e,t),Jl(e+"Capture",t)}function Jl(e,t){for(Rs[e]=t,e=0;e<t.length;e++)zs.add(t[e])}var am=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cs={},Us={};function um(e){return Wu.call(Us,e)?!0:Wu.call(Cs,e)?!1:am.test(e)?Us[e]=!0:(Cs[e]=!0,!1)}function za(e,t,l){if(um(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Ra(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Ut(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}function pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cm(e,t,l){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nc(e){if(!e._valueTracker){var t=Gs(e)?"checked":"value";e._valueTracker=cm(e,t,""+e[t])}}function Bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=Gs(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var im=/[\n"\\]/g;function gt(e){return e.replace(im,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ac(e,t,l,n,a,u,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pt(t)):e.value!==""+pt(t)&&(e.value=""+pt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?uc(e,c,pt(t)):l!=null?uc(e,c,pt(l)):n!=null&&e.removeAttribute("value"),a==null&&u!=null&&(e.defaultChecked=!!u),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+pt(s):e.removeAttribute("name")}function Hs(e,t,l,n,a,u,c,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){nc(e);return}l=l!=null?""+pt(l):"",t=t!=null?""+pt(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),nc(e)}function uc(e,t,l){t==="number"&&Ca(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Wl(e,t,l,n){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&n&&(e[l].defaultSelected=!0)}else{for(l=""+pt(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ls(e,t,l){if(t!=null&&(t=""+pt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+pt(l):""}function qs(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(f(92));if(at(n)){if(1<n.length)throw Error(f(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=pt(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n),nc(e)}function $l(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var sm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ys(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||sm.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Qs(e,t,l){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&l[a]!==n&&Ys(e,a,n)}else for(var u in t)t.hasOwnProperty(u)&&Ys(e,u,t[u])}function cc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),om=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ua(e){return om.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var ic=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,Il=null;function Vs(e){var t=Kl(e);if(t&&(e=t.stateNode)){var l=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(ac(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var a=n[$e]||null;if(!a)throw Error(f(90));ac(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&Bs(n)}break e;case"textarea":Ls(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Wl(e,!!l.multiple,t,!1)}}}var fc=!1;function Xs(e,t,l){if(fc)return e(t,l);fc=!0;try{var n=e(t);return n}finally{if(fc=!1,(Fl!==null||Il!==null)&&(Au(),Fl&&(t=Fl,e=Il,Il=Fl=null,Vs(t),e)))for(t=0;t<e.length;t++)Vs(e[t])}}function Gn(e,t){var l=e.stateNode;if(l===null)return null;var n=l[$e]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(f(231,t,typeof l));return l}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=!1;if(Bt)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{oc=!1}var ll=null,rc=null,Ga=null;function ws(){if(Ga)return Ga;var e,t=rc,l=t.length,n,a="value"in ll?ll.value:ll.textContent,u=a.length;for(e=0;e<l&&t[e]===a[e];e++);var c=l-e;for(n=1;n<=c&&t[l-n]===a[u-n];n++);return Ga=a.slice(e,1<n?1-n:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ha(){return!0}function Zs(){return!1}function Fe(e){function t(l,n,a,u,c){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ha:Zs,this.isPropagationStopped=Zs,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),t}var _l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=Fe(_l),Hn=U({},_l,{view:0,detail:0}),rm=Fe(Hn),dc,mc,Ln,qa=U({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(dc=e.screenX-Ln.screenX,mc=e.screenY-Ln.screenY):mc=dc=0,Ln=e),dc)},movementY:function(e){return"movementY"in e?e.movementY:mc}}),Ks=Fe(qa),dm=U({},qa,{dataTransfer:0}),mm=Fe(dm),hm=U({},Hn,{relatedTarget:0}),hc=Fe(hm),vm=U({},_l,{animationName:0,elapsedTime:0,pseudoElement:0}),pm=Fe(vm),gm=U({},_l,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=Fe(gm),bm=U({},_l,{data:0}),ks=Fe(bm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function vc(){return xm}var Tm=U({},Hn,{key:function(e){if(e.key){var t=Sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jm=Fe(Tm),Mm=U({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=Fe(Mm),Nm=U({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),_m=Fe(Nm),Dm=U({},_l,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Fe(Dm),zm=U({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=Fe(zm),Cm=U({},_l,{newState:0,oldState:0}),Um=Fe(Cm),Gm=[9,13,27,32],pc=Bt&&"CompositionEvent"in window,qn=null;Bt&&"documentMode"in document&&(qn=document.documentMode);var Bm=Bt&&"TextEvent"in window&&!qn,Ws=Bt&&(!pc||qn&&8<qn&&11>=qn),$s=" ",Fs=!1;function Is(e,t){switch(e){case"keyup":return Gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function Hm(e,t){switch(e){case"compositionend":return Ps(t);case"keypress":return t.which!==32?null:(Fs=!0,$s);case"textInput":return e=t.data,e===$s&&Fs?null:e;default:return null}}function Lm(e,t){if(Pl)return e==="compositionend"||!pc&&Is(e,t)?(e=ws(),Ga=rc=ll=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ws&&t.locale!=="ko"?null:t.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qm[e.type]:t==="textarea"}function tf(e,t,l,n){Fl?Il?Il.push(n):Il=[n]:Fl=n,t=_u(t,"onChange"),0<t.length&&(l=new La("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var Yn=null,Qn=null;function Ym(e){qr(e,0)}function Ya(e){var t=Un(e);if(Bs(t))return e}function lf(e,t){if(e==="change")return t}var nf=!1;if(Bt){var gc;if(Bt){var yc="oninput"in document;if(!yc){var af=document.createElement("div");af.setAttribute("oninput","return;"),yc=typeof af.oninput=="function"}gc=yc}else gc=!1;nf=gc&&(!document.documentMode||9<document.documentMode)}function uf(){Yn&&(Yn.detachEvent("onpropertychange",cf),Qn=Yn=null)}function cf(e){if(e.propertyName==="value"&&Ya(Qn)){var t=[];tf(t,Qn,e,sc(e)),Xs(Ym,t)}}function Qm(e,t,l){e==="focusin"?(uf(),Yn=t,Qn=l,Yn.attachEvent("onpropertychange",cf)):e==="focusout"&&uf()}function Vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(Qn)}function Xm(e,t){if(e==="click")return Ya(t)}function wm(e,t){if(e==="input"||e==="change")return Ya(t)}function Zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Zm;function Vn(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Wu.call(t,a)||!st(e[a],t[a]))return!1}return!0}function sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ff(e,t){var l=sf(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=sf(l)}}function of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ca(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Ca(e.document)}return t}function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Km=Bt&&"documentMode"in document&&11>=document.documentMode,en=null,Sc=null,Xn=null,Ac=!1;function df(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ac||en==null||en!==Ca(n)||(n=en,"selectionStart"in n&&bc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xn&&Vn(Xn,n)||(Xn=n,n=_u(Sc,"onSelect"),0<n.length&&(t=new La("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=en)))}function Dl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var tn={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},Ec={},mf={};Bt&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ol(e){if(Ec[e])return Ec[e];if(!tn[e])return e;var t=tn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in mf)return Ec[e]=t[l];return e}var hf=Ol("animationend"),vf=Ol("animationiteration"),pf=Ol("animationstart"),km=Ol("transitionrun"),Jm=Ol("transitionstart"),Wm=Ol("transitioncancel"),gf=Ol("transitionend"),yf=new Map,xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xc.push("scrollEnd");function Mt(e,t){yf.set(e,t),Nl(t,[e])}var Qa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ln=0,Tc=0;function Va(){for(var e=ln,t=Tc=ln=0;t<e;){var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var a=yt[t];yt[t++]=null;var u=yt[t];if(yt[t++]=null,n!==null&&a!==null){var c=n.pending;c===null?a.next=a:(a.next=c.next,c.next=a),n.pending=a}u!==0&&bf(l,a,u)}}function Xa(e,t,l,n){yt[ln++]=e,yt[ln++]=t,yt[ln++]=l,yt[ln++]=n,Tc|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function jc(e,t,l,n){return Xa(e,t,l,n),wa(e)}function zl(e,t){return Xa(e,null,null,t),wa(e)}function bf(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=e.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(a=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,a&&t!==null&&(a=31-it(l),e=u.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=l|536870912),u):null}function wa(e){if(50<ra)throw ra=0,Ui=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nn={};function $m(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,l,n){return new $m(e,t,l,n)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var l=e.alternate;return l===null?(l=ft(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Sf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Za(e,t,l,n,a,u){var c=0;if(n=e,typeof e=="function")Mc(e)&&(c=1);else if(typeof e=="string")c=t0(e,l,B.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case nt:return e=ft(31,l,t,a),e.elementType=nt,e.lanes=u,e;case G:return Rl(l.children,a,u,t);case J:c=8,a|=24;break;case xe:return e=ft(12,l,t,a|2),e.elementType=xe,e.lanes=u,e;case pe:return e=ft(13,l,t,a),e.elementType=pe,e.lanes=u,e;case je:return e=ft(19,l,t,a),e.elementType=je,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:c=10;break e;case Oe:c=9;break e;case Ze:c=11;break e;case F:c=14;break e;case Le:c=16,n=null;break e}c=29,l=Error(f(130,e===null?"null":typeof e,"")),n=null}return t=ft(c,l,t,a),t.elementType=e,t.type=n,t.lanes=u,t}function Rl(e,t,l,n){return e=ft(7,e,n,t),e.lanes=l,e}function Nc(e,t,l){return e=ft(6,e,null,t),e.lanes=l,e}function Af(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function _c(e,t,l){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ef=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var l=Ef.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ss(t)},Ef.set(e,t),t)}return{value:e,source:t,stack:Ss(t)}}var an=[],un=0,Ka=null,wn=0,St=[],At=0,nl=null,Dt=1,Ot="";function Lt(e,t){an[un++]=wn,an[un++]=Ka,Ka=e,wn=t}function xf(e,t,l){St[At++]=Dt,St[At++]=Ot,St[At++]=nl,nl=e;var n=Dt;e=Ot;var a=32-it(n)-1;n&=~(1<<a),l+=1;var u=32-it(t)+a;if(30<u){var c=a-a%5;u=(n&(1<<c)-1).toString(32),n>>=c,a-=c,Dt=1<<32-it(t)+a|l<<a|n,Ot=u+e}else Dt=1<<u|l<<a|n,Ot=e}function Dc(e){e.return!==null&&(Lt(e,1),xf(e,1,0))}function Oc(e){for(;e===Ka;)Ka=an[--un],an[un]=null,wn=an[--un],an[un]=null;for(;e===nl;)nl=St[--At],St[At]=null,Ot=St[--At],St[At]=null,Dt=St[--At],St[At]=null}function Tf(e,t){St[At++]=Dt,St[At++]=Ot,St[At++]=nl,Dt=t.id,Ot=t.overflow,nl=e}var Ye=null,be=null,le=!1,al=null,Et=!1,zc=Error(f(519));function ul(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zn(bt(t,e)),zc}function jf(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[qe]=e,t[$e]=n,l){case"dialog":P("cancel",t),P("close",t);break;case"iframe":case"object":case"embed":P("load",t);break;case"video":case"audio":for(l=0;l<ma.length;l++)P(ma[l],t);break;case"source":P("error",t);break;case"img":case"image":case"link":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"input":P("invalid",t),Hs(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":P("invalid",t);break;case"textarea":P("invalid",t),qs(t,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||Xr(t.textContent,l)?(n.popover!=null&&(P("beforetoggle",t),P("toggle",t)),n.onScroll!=null&&P("scroll",t),n.onScrollEnd!=null&&P("scrollend",t),n.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ul(e,!0)}function Mf(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ye=Ye.return}}function cn(e){if(e!==Ye)return!1;if(!le)return Mf(e),le=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Wi(e.type,e.memoizedProps)),l=!l),l&&be&&ul(e),Mf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));be=Ir(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));be=Ir(e)}else t===27?(t=be,bl(e.type)?(e=es,es=null,be=e):be=t):be=Ye?Tt(e.stateNode.nextSibling):null;return!0}function Cl(){be=Ye=null,le=!1}function Rc(){var e=al;return e!==null&&(tt===null?tt=e:tt.push.apply(tt,e),al=null),e}function Zn(e){al===null?al=[e]:al.push(e)}var Cc=m(null),Ul=null,qt=null;function cl(e,t,l){C(Cc,t._currentValue),t._currentValue=l}function Yt(e){e._currentValue=Cc.current,N(Cc)}function Uc(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Gc(e,t,l,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){var c=a.child;u=u.firstContext;e:for(;u!==null;){var s=u;u=a;for(var r=0;r<t.length;r++)if(s.context===t[r]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),Uc(u.return,l,e),n||(c=null);break e}u=s.next}}else if(a.tag===18){if(c=a.return,c===null)throw Error(f(341));c.lanes|=l,u=c.alternate,u!==null&&(u.lanes|=l),Uc(c,l,e),c=null}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===e){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}}function sn(e,t,l,n){e=null;for(var a=t,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var c=a.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var s=a.type;st(a.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(a===K.current){if(c=a.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ya):e=[ya])}a=a.return}e!==null&&Gc(t,e,l,n),t.flags|=262144}function ka(e){for(e=e.firstContext;e!==null;){if(!st(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gl(e){Ul=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Nf(Ul,e)}function Ja(e,t){return Ul===null&&Gl(e),Nf(e,t)}function Nf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},qt===null){if(e===null)throw Error(f(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return l}var Fm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Im=o.unstable_scheduleCallback,Pm=o.unstable_NormalPriority,ze={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new Fm,data:new Map,refCount:0}}function Kn(e){e.refCount--,e.refCount===0&&Im(Pm,function(){e.controller.abort()})}var kn=null,Hc=0,fn=0,on=null;function eh(e,t){if(kn===null){var l=kn=[];Hc=0,fn=Yi(),on={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Hc++,t.then(_f,_f),t}function _f(){if(--Hc===0&&kn!==null){on!==null&&(on.status="fulfilled");var e=kn;kn=null,fn=0,on=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function th(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var Df=T.S;T.S=function(e,t){mr=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&eh(e,t),Df!==null&&Df(e,t)};var Bl=m(null);function Lc(){var e=Bl.current;return e!==null?e:ge.pooledCache}function Wa(e,t){t===null?C(Bl,Bl.current):C(Bl,t.pool)}function Of(){var e=Lc();return e===null?null:{parent:ze._currentValue,pool:e}}var rn=Error(f(460)),qc=Error(f(474)),$a=Error(f(542)),Fa={then:function(){}};function zf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Gt,Gt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Uf(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Uf(e),e}throw Ll=t,rn}}function Hl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ll=l,rn):l}}var Ll=null;function Cf(){if(Ll===null)throw Error(f(459));var e=Ll;return Ll=null,e}function Uf(e){if(e===rn||e===$a)throw Error(f(483))}var dn=null,Jn=0;function Ia(e){var t=Jn;return Jn+=1,dn===null&&(dn=[]),Rf(dn,e,t)}function Wn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pa(e,t){throw t.$$typeof===Q?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gf(e){function t(h,d){if(e){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function l(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function n(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function a(h,d){return h=Ht(h,d),h.index=0,h.sibling=null,h}function u(h,d,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=67108866,d):p):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function c(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function s(h,d,p,j){return d===null||d.tag!==6?(d=Nc(p,h.mode,j),d.return=h,d):(d=a(d,p),d.return=h,d)}function r(h,d,p,j){var V=p.type;return V===G?x(h,d,p.props.children,j,p.key):d!==null&&(d.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Le&&Hl(V)===d.type)?(d=a(d,p.props),Wn(d,p),d.return=h,d):(d=Za(p.type,p.key,p.props,null,h.mode,j),Wn(d,p),d.return=h,d)}function g(h,d,p,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=_c(p,h.mode,j),d.return=h,d):(d=a(d,p.children||[]),d.return=h,d)}function x(h,d,p,j,V){return d===null||d.tag!==7?(d=Rl(p,h.mode,j,V),d.return=h,d):(d=a(d,p),d.return=h,d)}function M(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Nc(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case se:return p=Za(d.type,d.key,d.props,null,h.mode,p),Wn(p,d),p.return=h,p;case ne:return d=_c(d,h.mode,p),d.return=h,d;case Le:return d=Hl(d),M(h,d,p)}if(at(d)||Ke(d))return d=Rl(d,h.mode,p,null),d.return=h,d;if(typeof d.then=="function")return M(h,Ia(d),p);if(d.$$typeof===Te)return M(h,Ja(h,d),p);Pa(h,d)}return null}function y(h,d,p,j){var V=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return V!==null?null:s(h,d,""+p,j);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case se:return p.key===V?r(h,d,p,j):null;case ne:return p.key===V?g(h,d,p,j):null;case Le:return p=Hl(p),y(h,d,p,j)}if(at(p)||Ke(p))return V!==null?null:x(h,d,p,j,null);if(typeof p.then=="function")return y(h,d,Ia(p),j);if(p.$$typeof===Te)return y(h,d,Ja(h,p),j);Pa(h,p)}return null}function S(h,d,p,j,V){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return h=h.get(p)||null,s(d,h,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case se:return h=h.get(j.key===null?p:j.key)||null,r(d,h,j,V);case ne:return h=h.get(j.key===null?p:j.key)||null,g(d,h,j,V);case Le:return j=Hl(j),S(h,d,p,j,V)}if(at(j)||Ke(j))return h=h.get(p)||null,x(d,h,j,V,null);if(typeof j.then=="function")return S(h,d,p,Ia(j),V);if(j.$$typeof===Te)return S(h,d,p,Ja(d,j),V);Pa(d,j)}return null}function H(h,d,p,j){for(var V=null,ue=null,L=d,$=d=0,te=null;L!==null&&$<p.length;$++){L.index>$?(te=L,L=null):te=L.sibling;var ce=y(h,L,p[$],j);if(ce===null){L===null&&(L=te);break}e&&L&&ce.alternate===null&&t(h,L),d=u(ce,d,$),ue===null?V=ce:ue.sibling=ce,ue=ce,L=te}if($===p.length)return l(h,L),le&&Lt(h,$),V;if(L===null){for(;$<p.length;$++)L=M(h,p[$],j),L!==null&&(d=u(L,d,$),ue===null?V=L:ue.sibling=L,ue=L);return le&&Lt(h,$),V}for(L=n(L);$<p.length;$++)te=S(L,h,$,p[$],j),te!==null&&(e&&te.alternate!==null&&L.delete(te.key===null?$:te.key),d=u(te,d,$),ue===null?V=te:ue.sibling=te,ue=te);return e&&L.forEach(function(Tl){return t(h,Tl)}),le&&Lt(h,$),V}function X(h,d,p,j){if(p==null)throw Error(f(151));for(var V=null,ue=null,L=d,$=d=0,te=null,ce=p.next();L!==null&&!ce.done;$++,ce=p.next()){L.index>$?(te=L,L=null):te=L.sibling;var Tl=y(h,L,ce.value,j);if(Tl===null){L===null&&(L=te);break}e&&L&&Tl.alternate===null&&t(h,L),d=u(Tl,d,$),ue===null?V=Tl:ue.sibling=Tl,ue=Tl,L=te}if(ce.done)return l(h,L),le&&Lt(h,$),V;if(L===null){for(;!ce.done;$++,ce=p.next())ce=M(h,ce.value,j),ce!==null&&(d=u(ce,d,$),ue===null?V=ce:ue.sibling=ce,ue=ce);return le&&Lt(h,$),V}for(L=n(L);!ce.done;$++,ce=p.next())ce=S(L,h,$,ce.value,j),ce!==null&&(e&&ce.alternate!==null&&L.delete(ce.key===null?$:ce.key),d=u(ce,d,$),ue===null?V=ce:ue.sibling=ce,ue=ce);return e&&L.forEach(function(d0){return t(h,d0)}),le&&Lt(h,$),V}function ve(h,d,p,j){if(typeof p=="object"&&p!==null&&p.type===G&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case se:e:{for(var V=p.key;d!==null;){if(d.key===V){if(V=p.type,V===G){if(d.tag===7){l(h,d.sibling),j=a(d,p.props.children),j.return=h,h=j;break e}}else if(d.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Le&&Hl(V)===d.type){l(h,d.sibling),j=a(d,p.props),Wn(j,p),j.return=h,h=j;break e}l(h,d);break}else t(h,d);d=d.sibling}p.type===G?(j=Rl(p.props.children,h.mode,j,p.key),j.return=h,h=j):(j=Za(p.type,p.key,p.props,null,h.mode,j),Wn(j,p),j.return=h,h=j)}return c(h);case ne:e:{for(V=p.key;d!==null;){if(d.key===V)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){l(h,d.sibling),j=a(d,p.children||[]),j.return=h,h=j;break e}else{l(h,d);break}else t(h,d);d=d.sibling}j=_c(p,h.mode,j),j.return=h,h=j}return c(h);case Le:return p=Hl(p),ve(h,d,p,j)}if(at(p))return H(h,d,p,j);if(Ke(p)){if(V=Ke(p),typeof V!="function")throw Error(f(150));return p=V.call(p),X(h,d,p,j)}if(typeof p.then=="function")return ve(h,d,Ia(p),j);if(p.$$typeof===Te)return ve(h,d,Ja(h,p),j);Pa(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,d!==null&&d.tag===6?(l(h,d.sibling),j=a(d,p),j.return=h,h=j):(l(h,d),j=Nc(p,h.mode,j),j.return=h,h=j),c(h)):l(h,d)}return function(h,d,p,j){try{Jn=0;var V=ve(h,d,p,j);return dn=null,V}catch(L){if(L===rn||L===$a)throw L;var ue=ft(29,L,null,h.mode);return ue.lanes=j,ue.return=h,ue}finally{}}}var ql=Gf(!0),Bf=Gf(!1),il=!1;function Yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ie&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=wa(e),bf(e,null,l),t}return Xa(e,n,t,l),wa(e)}function $n(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Ms(e,l)}}function Vc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=c:u=u.next=c,l=l.next}while(l!==null);u===null?a=u=t:u=u.next=t}else a=u=t;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Xc=!1;function Fn(){if(Xc){var e=on;if(e!==null)throw e}}function In(e,t,l,n){Xc=!1;var a=e.updateQueue;il=!1;var u=a.firstBaseUpdate,c=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var r=s,g=r.next;r.next=null,c===null?u=g:c.next=g,c=r;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==c&&(s===null?x.firstBaseUpdate=g:s.next=g,x.lastBaseUpdate=r))}if(u!==null){var M=a.baseState;c=0,x=g=r=null,s=u;do{var y=s.lane&-536870913,S=y!==s.lane;if(S?(ee&y)===y:(n&y)===y){y!==0&&y===fn&&(Xc=!0),x!==null&&(x=x.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var H=e,X=s;y=t;var ve=l;switch(X.tag){case 1:if(H=X.payload,typeof H=="function"){M=H.call(ve,M,y);break e}M=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=X.payload,y=typeof H=="function"?H.call(ve,M,y):H,y==null)break e;M=U({},M,y);break e;case 2:il=!0}}y=s.callback,y!==null&&(e.flags|=64,S&&(e.flags|=8192),S=a.callbacks,S===null?a.callbacks=[y]:S.push(y))}else S={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(g=x=S,r=M):x=x.next=S,c|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;S=s,s=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);x===null&&(r=M),a.baseState=r,a.firstBaseUpdate=g,a.lastBaseUpdate=x,u===null&&(a.shared.lanes=0),hl|=c,e.lanes=c,e.memoizedState=M}}function Hf(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function Lf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Hf(l[e],t)}var mn=m(null),eu=m(0);function qf(e,t){e=Wt,C(eu,e),C(mn,t),Wt=e|t.baseLanes}function wc(){C(eu,Wt),C(mn,mn.current)}function Zc(){Wt=eu.current,N(mn),N(eu)}var ot=m(null),xt=null;function ol(e){var t=e.alternate;C(_e,_e.current&1),C(ot,e),xt===null&&(t===null||mn.current!==null||t.memoizedState!==null)&&(xt=e)}function Kc(e){C(_e,_e.current),C(ot,e),xt===null&&(xt=e)}function Yf(e){e.tag===22?(C(_e,_e.current),C(ot,e),xt===null&&(xt=e)):rl()}function rl(){C(_e,_e.current),C(ot,ot.current)}function rt(e){N(ot),xt===e&&(xt=null),N(_e)}var _e=m(0);function tu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Ii(l)||Pi(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,W=null,me=null,Re=null,lu=!1,hn=!1,Yl=!1,nu=0,Pn=0,vn=null,lh=0;function Me(){throw Error(f(321))}function kc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!st(e[l],t[l]))return!1;return!0}function Jc(e,t,l,n,a,u){return Qt=u,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?To:fi,Yl=!1,u=l(n,a),Yl=!1,hn&&(u=Vf(t,l,n,a)),Qf(e),u}function Qf(e){T.H=la;var t=me!==null&&me.next!==null;if(Qt=0,Re=me=W=null,lu=!1,Pn=0,vn=null,t)throw Error(f(300));e===null||Ce||(e=e.dependencies,e!==null&&ka(e)&&(Ce=!0))}function Vf(e,t,l,n){W=e;var a=0;do{if(hn&&(vn=null),Pn=0,hn=!1,25<=a)throw Error(f(301));if(a+=1,Re=me=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}T.H=jo,u=t(l,n)}while(hn);return u}function nh(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?ea(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(W.flags|=1024),t}function Wc(){var e=nu!==0;return nu=0,e}function $c(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Fc(e){if(lu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lu=!1}Qt=0,Re=me=W=null,hn=!1,Pn=nu=0,vn=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?W.memoizedState=Re=e:Re=Re.next=e,Re}function De(){if(me===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=Re===null?W.memoizedState:Re.next;if(t!==null)Re=t,me=e;else{if(e===null)throw W.alternate===null?Error(f(467)):Error(f(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Re===null?W.memoizedState=Re=e:Re=Re.next=e}return Re}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ea(e){var t=Pn;return Pn+=1,vn===null&&(vn=[]),e=Rf(vn,e,t),t=W,(Re===null?t.memoizedState:Re.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?To:fi),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ea(e);if(e.$$typeof===Te)return Qe(e)}throw Error(f(438,String(e)))}function Ic(e){var t=null,l=W.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=W.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=au(),W.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=Pt;return t.index++,l}function Vt(e,t){return typeof t=="function"?t(e):t}function cu(e){var t=De();return Pc(t,me,e)}function Pc(e,t,l){var n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=l;var a=e.baseQueue,u=n.pending;if(u!==null){if(a!==null){var c=a.next;a.next=u.next,u.next=c}t.baseQueue=a=u,n.pending=null}if(u=e.baseState,a===null)e.memoizedState=u;else{t=a.next;var s=c=null,r=null,g=t,x=!1;do{var M=g.lane&-536870913;if(M!==g.lane?(ee&M)===M:(Qt&M)===M){var y=g.revertLane;if(y===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),M===fn&&(x=!0);else if((Qt&y)===y){g=g.next,y===fn&&(x=!0);continue}else M={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=M,c=u):r=r.next=M,W.lanes|=y,hl|=y;M=g.action,Yl&&l(u,M),u=g.hasEagerState?g.eagerState:l(u,M)}else y={lane:M,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=y,c=u):r=r.next=y,W.lanes|=M,hl|=M;g=g.next}while(g!==null&&g!==t);if(r===null?c=u:r.next=s,!st(u,e.memoizedState)&&(Ce=!0,x&&(l=on,l!==null)))throw l;e.memoizedState=u,e.baseState=c,e.baseQueue=r,n.lastRenderedState=u}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ei(e){var t=De(),l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=e;var n=l.dispatch,a=l.pending,u=t.memoizedState;if(a!==null){l.pending=null;var c=a=a.next;do u=e(u,c.action),c=c.next;while(c!==a);st(u,t.memoizedState)||(Ce=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,n]}function Xf(e,t,l){var n=W,a=De(),u=le;if(u){if(l===void 0)throw Error(f(407));l=l()}else l=t();var c=!st((me||a).memoizedState,l);if(c&&(a.memoizedState=l,Ce=!0),a=a.queue,ni(Kf.bind(null,n,a,e),[e]),a.getSnapshot!==t||c||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,pn(9,{destroy:void 0},Zf.bind(null,n,a,l,t),null),ge===null)throw Error(f(349));u||(Qt&127)!==0||wf(n,t,l)}return l}function wf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=W.updateQueue,t===null?(t=au(),W.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Zf(e,t,l,n){t.value=l,t.getSnapshot=n,kf(t)&&Jf(e)}function Kf(e,t,l){return l(function(){kf(t)&&Jf(e)})}function kf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!st(e,l)}catch{return!0}}function Jf(e){var t=zl(e,2);t!==null&&lt(t,e,2)}function ti(e){var t=We();if(typeof e=="function"){var l=e;if(e=l(),Yl){el(!0);try{l()}finally{el(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},t}function Wf(e,t,l,n){return e.baseState=l,Pc(e,me,typeof n=="function"?n:Vt)}function ah(e,t,l,n,a){if(fu(e))throw Error(f(485));if(e=t.action,e!==null){var u={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};T.T!==null?l(!0):u.isTransition=!1,n(u),l=t.pending,l===null?(u.next=t.pending=u,$f(t,u)):(u.next=l.next,t.pending=l.next=u)}}function $f(e,t){var l=t.action,n=t.payload,a=e.state;if(t.isTransition){var u=T.T,c={};T.T=c;try{var s=l(a,n),r=T.S;r!==null&&r(c,s),Ff(e,t,s)}catch(g){li(e,t,g)}finally{u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}else try{u=l(a,n),Ff(e,t,u)}catch(g){li(e,t,g)}}function Ff(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){If(e,t,n)},function(n){return li(e,t,n)}):If(e,t,l)}function If(e,t,l){t.status="fulfilled",t.value=l,Pf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,$f(e,l)))}function li(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,Pf(t),t=t.next;while(t!==n)}e.action=null}function Pf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function eo(e,t){return t}function to(e,t){if(le){var l=ge.formState;if(l!==null){e:{var n=W;if(le){if(be){t:{for(var a=be,u=Et;a.nodeType!==8;){if(!u){a=null;break t}if(a=Tt(a.nextSibling),a===null){a=null;break t}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){be=Tt(a.nextSibling),n=a.data==="F!";break e}}ul(n)}n=!1}n&&(t=l[0])}}return l=We(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:t},l.queue=n,l=Ao.bind(null,W,n),n.dispatch=l,n=ti(!1),u=si.bind(null,W,!1,n.queue),n=We(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,l=ah.bind(null,W,a,u,l),a.dispatch=l,n.memoizedState=e,[t,l,!1]}function lo(e){var t=De();return no(t,me,e)}function no(e,t,l){if(t=Pc(e,t,eo)[0],e=cu(Vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ea(t)}catch(c){throw c===rn?$a:c}else n=t;t=De();var a=t.queue,u=a.dispatch;return l!==t.memoizedState&&(W.flags|=2048,pn(9,{destroy:void 0},uh.bind(null,a,l),null)),[n,u,e]}function uh(e,t){e.action=t}function ao(e){var t=De(),l=me;if(l!==null)return no(t,l,e);De(),t=t.memoizedState,l=De();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function pn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=W.updateQueue,t===null&&(t=au(),W.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function uo(){return De().memoizedState}function iu(e,t,l,n){var a=We();W.flags|=e,a.memoizedState=pn(1|t,{destroy:void 0},l,n===void 0?null:n)}function su(e,t,l,n){var a=De();n=n===void 0?null:n;var u=a.memoizedState.inst;me!==null&&n!==null&&kc(n,me.memoizedState.deps)?a.memoizedState=pn(t,u,l,n):(W.flags|=e,a.memoizedState=pn(1|t,u,l,n))}function co(e,t){iu(8390656,8,e,t)}function ni(e,t){su(2048,8,e,t)}function ch(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=au(),W.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function io(e){var t=De().memoizedState;return ch({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function so(e,t){return su(4,2,e,t)}function fo(e,t){return su(4,4,e,t)}function oo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ro(e,t,l){l=l!=null?l.concat([e]):null,su(4,4,oo.bind(null,t,e),l)}function ai(){}function mo(e,t){var l=De();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&kc(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function ho(e,t){var l=De();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&kc(t,n[1]))return n[0];if(n=e(),Yl){el(!0);try{e()}finally{el(!1)}}return l.memoizedState=[n,t],n}function ui(e,t,l){return l===void 0||(Qt&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=vr(),W.lanes|=e,hl|=e,l)}function vo(e,t,l,n){return st(l,t)?l:mn.current!==null?(e=ui(e,l,n),st(e,t)||(Ce=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(ee&261930)===0?(Ce=!0,e.memoizedState=l):(e=vr(),W.lanes|=e,hl|=e,t)}function po(e,t,l,n,a){var u=R.p;R.p=u!==0&&8>u?u:8;var c=T.T,s={};T.T=s,si(e,!1,t,l);try{var r=a(),g=T.S;if(g!==null&&g(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=th(r,n);ta(e,t,x,ht(e))}else ta(e,t,n,ht(e))}catch(M){ta(e,t,{then:function(){},status:"rejected",reason:M},ht())}finally{R.p=u,c!==null&&s.types!==null&&(c.types=s.types),T.T=c}}function ih(){}function ci(e,t,l,n){if(e.tag!==5)throw Error(f(476));var a=go(e).queue;po(e,a,t,w,l===null?ih:function(){return yo(e),l(n)})}function go(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:w},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yo(e){var t=go(e);t.next===null&&(t=e.alternate.memoizedState),ta(e,t.next.queue,{},ht())}function ii(){return Qe(ya)}function bo(){return De().memoizedState}function So(){return De().memoizedState}function sh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ht();e=sl(l);var n=fl(t,e,l);n!==null&&(lt(n,t,l),$n(n,t,l)),t={cache:Bc()},e.payload=t;return}t=t.return}}function fh(e,t,l){var n=ht();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(e)?Eo(t,l):(l=jc(e,t,l,n),l!==null&&(lt(l,e,n),xo(l,t,n)))}function Ao(e,t,l){var n=ht();ta(e,t,l,n)}function ta(e,t,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fu(e))Eo(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var c=t.lastRenderedState,s=u(c,l);if(a.hasEagerState=!0,a.eagerState=s,st(s,c))return Xa(e,t,a,0),ge===null&&Va(),!1}catch{}finally{}if(l=jc(e,t,a,n),l!==null)return lt(l,e,n),xo(l,t,n),!0}return!1}function si(e,t,l,n){if(n={lane:2,revertLane:Yi(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fu(e)){if(t)throw Error(f(479))}else t=jc(e,l,n,2),t!==null&&lt(t,e,2)}function fu(e){var t=e.alternate;return e===W||t!==null&&t===W}function Eo(e,t){hn=lu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function xo(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Ms(e,l)}}var la={readContext:Qe,use:uu,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};la.useEffectEvent=Me;var To={readContext:Qe,use:uu,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:co,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,iu(4194308,4,oo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return iu(4194308,4,e,t)},useInsertionEffect:function(e,t){iu(4,2,e,t)},useMemo:function(e,t){var l=We();t=t===void 0?null:t;var n=e();if(Yl){el(!0);try{e()}finally{el(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=We();if(l!==void 0){var a=l(t);if(Yl){el(!0);try{l(t)}finally{el(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=fh.bind(null,W,e),[n.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=ti(e);var t=e.queue,l=Ao.bind(null,W,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:ai,useDeferredValue:function(e,t){var l=We();return ui(l,e,t)},useTransition:function(){var e=ti(!1);return e=po.bind(null,W,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=W,a=We();if(le){if(l===void 0)throw Error(f(407));l=l()}else{if(l=t(),ge===null)throw Error(f(349));(ee&127)!==0||wf(n,t,l)}a.memoizedState=l;var u={value:l,getSnapshot:t};return a.queue=u,co(Kf.bind(null,n,u,e),[e]),n.flags|=2048,pn(9,{destroy:void 0},Zf.bind(null,n,u,l,t),null),l},useId:function(){var e=We(),t=ge.identifierPrefix;if(le){var l=Ot,n=Dt;l=(n&~(1<<32-it(n)-1)).toString(32)+l,t="_"+t+"R_"+l,l=nu++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=lh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ii,useFormState:to,useActionState:to,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=si.bind(null,W,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ic,useCacheRefresh:function(){return We().memoizedState=sh.bind(null,W)},useEffectEvent:function(e){var t=We(),l={impl:e};return t.memoizedState=l,function(){if((ie&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}},fi={readContext:Qe,use:uu,useCallback:mo,useContext:Qe,useEffect:ni,useImperativeHandle:ro,useInsertionEffect:so,useLayoutEffect:fo,useMemo:ho,useReducer:cu,useRef:uo,useState:function(){return cu(Vt)},useDebugValue:ai,useDeferredValue:function(e,t){var l=De();return vo(l,me.memoizedState,e,t)},useTransition:function(){var e=cu(Vt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:ea(e),t]},useSyncExternalStore:Xf,useId:bo,useHostTransitionStatus:ii,useFormState:lo,useActionState:lo,useOptimistic:function(e,t){var l=De();return Wf(l,me,e,t)},useMemoCache:Ic,useCacheRefresh:So};fi.useEffectEvent=io;var jo={readContext:Qe,use:uu,useCallback:mo,useContext:Qe,useEffect:ni,useImperativeHandle:ro,useInsertionEffect:so,useLayoutEffect:fo,useMemo:ho,useReducer:ei,useRef:uo,useState:function(){return ei(Vt)},useDebugValue:ai,useDeferredValue:function(e,t){var l=De();return me===null?ui(l,e,t):vo(l,me.memoizedState,e,t)},useTransition:function(){var e=ei(Vt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:ea(e),t]},useSyncExternalStore:Xf,useId:bo,useHostTransitionStatus:ii,useFormState:ao,useActionState:ao,useOptimistic:function(e,t){var l=De();return me!==null?Wf(l,me,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ic,useCacheRefresh:So};jo.useEffectEvent=io;function oi(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:U({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ri={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=ht(),a=sl(n);a.payload=t,l!=null&&(a.callback=l),t=fl(e,a,n),t!==null&&(lt(t,e,n),$n(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=ht(),a=sl(n);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=fl(e,a,n),t!==null&&(lt(t,e,n),$n(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ht(),n=sl(l);n.tag=2,t!=null&&(n.callback=t),t=fl(e,n,l),t!==null&&(lt(t,e,l),$n(t,e,l))}};function Mo(e,t,l,n,a,u,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,c):t.prototype&&t.prototype.isPureReactComponent?!Vn(l,n)||!Vn(a,u):!0}function No(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&ri.enqueueReplaceState(t,t.state,null)}function Ql(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=U({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}function _o(e){Qa(e)}function Do(e){console.error(e)}function Oo(e){Qa(e)}function ou(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function zo(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function di(e,t,l){return l=sl(l),l.tag=3,l.payload={element:null},l.callback=function(){ou(e,t)},l}function Ro(e){return e=sl(e),e.tag=3,e}function Co(e,t,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;e.payload=function(){return a(u)},e.callback=function(){zo(t,l,n)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){zo(t,l,n),typeof a!="function"&&(vl===null?vl=new Set([this]):vl.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function oh(e,t,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&sn(t,l,a,!0),l=ot.current,l!==null){switch(l.tag){case 31:case 13:return xt===null?Eu():l.alternate===null&&Ne===0&&(Ne=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===Fa?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),Hi(e,n,a)),!1;case 22:return l.flags|=65536,n===Fa?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),Hi(e,n,a)),!1}throw Error(f(435,l.tag))}return Hi(e,n,a),Eu(),!1}if(le)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==zc&&(e=Error(f(422),{cause:n}),Zn(bt(e,l)))):(n!==zc&&(t=Error(f(423),{cause:n}),Zn(bt(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=bt(n,l),a=di(e.stateNode,n,a),Vc(e,a),Ne!==4&&(Ne=2)),!1;var u=Error(f(520),{cause:n});if(u=bt(u,l),oa===null?oa=[u]:oa.push(u),Ne!==4&&(Ne=2),t===null)return!0;n=bt(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=di(l.stateNode,n,e),Vc(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(vl===null||!vl.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=Ro(a),Co(a,e,l,n),Vc(l,a),!1}l=l.return}while(l!==null);return!1}var mi=Error(f(461)),Ce=!1;function Ve(e,t,l,n){t.child=e===null?Bf(t,null,l,n):ql(t,e.child,l,n)}function Uo(e,t,l,n,a){l=l.render;var u=t.ref;if("ref"in n){var c={};for(var s in n)s!=="ref"&&(c[s]=n[s])}else c=n;return Gl(t),n=Jc(e,t,l,c,u,a),s=Wc(),e!==null&&!Ce?($c(e,t,a),Xt(e,t,a)):(le&&s&&Dc(t),t.flags|=1,Ve(e,t,n,a),t.child)}function Go(e,t,l,n,a){if(e===null){var u=l.type;return typeof u=="function"&&!Mc(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,Bo(e,t,u,n,a)):(e=Za(l.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Ai(e,a)){var c=u.memoizedProps;if(l=l.compare,l=l!==null?l:Vn,l(c,n)&&e.ref===t.ref)return Xt(e,t,a)}return t.flags|=1,e=Ht(u,n),e.ref=t.ref,e.return=t,t.child=e}function Bo(e,t,l,n,a){if(e!==null){var u=e.memoizedProps;if(Vn(u,n)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=n=u,Ai(e,a))(e.flags&131072)!==0&&(Ce=!0);else return t.lanes=e.lanes,Xt(e,t,a)}return hi(e,t,l,n,a)}function Ho(e,t,l,n){var a=n.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,t.child=null;return Lo(e,t,u,l,n)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wa(t,u!==null?u.cachePool:null),u!==null?qf(t,u):wc(),Yf(t);else return n=t.lanes=536870912,Lo(e,t,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Wa(t,u.cachePool),qf(t,u),rl(),t.memoizedState=null):(e!==null&&Wa(t,null),wc(),rl());return Ve(e,t,a,l),t.child}function na(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lo(e,t,l,n,a){var u=Lc();return u=u===null?null:{parent:ze._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Wa(t,null),wc(),Yf(t),e!==null&&sn(e,t,n,!0),t.childLanes=a,null}function ru(e,t){return t=mu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qo(e,t,l){return ql(t,e.child,null,l),e=ru(t,t.pendingProps),e.flags|=2,rt(t),t.memoizedState=null,e}function rh(e,t,l){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(le){if(n.mode==="hidden")return e=ru(t,n),t.lanes=536870912,na(null,e);if(Kc(t),(e=be)?(e=Fr(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:nl!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=Af(e),l.return=t,t.child=l,Ye=t,be=null)):e=null,e===null)throw ul(t);return t.lanes=536870912,null}return ru(t,n)}var u=e.memoizedState;if(u!==null){var c=u.dehydrated;if(Kc(t),a)if(t.flags&256)t.flags&=-257,t=qo(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Ce||sn(e,t,l,!1),a=(l&e.childLanes)!==0,Ce||a){if(n=ge,n!==null&&(c=Ns(n,l),c!==0&&c!==u.retryLane))throw u.retryLane=c,zl(e,c),lt(n,e,c),mi;Eu(),t=qo(e,t,l)}else e=u.treeContext,be=Tt(c.nextSibling),Ye=t,le=!0,al=null,Et=!1,e!==null&&Tf(t,e),t=ru(t,n),t.flags|=4096;return t}return e=Ht(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function du(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function hi(e,t,l,n,a){return Gl(t),l=Jc(e,t,l,n,void 0,a),n=Wc(),e!==null&&!Ce?($c(e,t,a),Xt(e,t,a)):(le&&n&&Dc(t),t.flags|=1,Ve(e,t,l,a),t.child)}function Yo(e,t,l,n,a,u){return Gl(t),t.updateQueue=null,l=Vf(t,n,l,a),Qf(e),n=Wc(),e!==null&&!Ce?($c(e,t,u),Xt(e,t,u)):(le&&n&&Dc(t),t.flags|=1,Ve(e,t,l,u),t.child)}function Qo(e,t,l,n,a){if(Gl(t),t.stateNode===null){var u=nn,c=l.contextType;typeof c=="object"&&c!==null&&(u=Qe(c)),u=new l(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ri,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},Yc(t),c=l.contextType,u.context=typeof c=="object"&&c!==null?Qe(c):nn,u.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(oi(t,l,c,n),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&ri.enqueueReplaceState(u,u.state,null),In(t,n,u,a),Fn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var s=t.memoizedProps,r=Ql(l,s);u.props=r;var g=u.context,x=l.contextType;c=nn,typeof x=="object"&&x!==null&&(c=Qe(x));var M=l.getDerivedStateFromProps;x=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,x||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||g!==c)&&No(t,u,n,c),il=!1;var y=t.memoizedState;u.state=y,In(t,n,u,a),Fn(),g=t.memoizedState,s||y!==g||il?(typeof M=="function"&&(oi(t,l,M,n),g=t.memoizedState),(r=il||Mo(t,l,r,n,y,g,c))?(x||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),u.props=n,u.state=g,u.context=c,n=r):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,Qc(e,t),c=t.memoizedProps,x=Ql(l,c),u.props=x,M=t.pendingProps,y=u.context,g=l.contextType,r=nn,typeof g=="object"&&g!==null&&(r=Qe(g)),s=l.getDerivedStateFromProps,(g=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==M||y!==r)&&No(t,u,n,r),il=!1,y=t.memoizedState,u.state=y,In(t,n,u,a),Fn();var S=t.memoizedState;c!==M||y!==S||il||e!==null&&e.dependencies!==null&&ka(e.dependencies)?(typeof s=="function"&&(oi(t,l,s,n),S=t.memoizedState),(x=il||Mo(t,l,x,n,y,S,r)||e!==null&&e.dependencies!==null&&ka(e.dependencies))?(g||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,S,r),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,S,r)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=S),u.props=n,u.state=S,u.context=r,n=x):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,du(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=ql(t,e.child,null,a),t.child=ql(t,null,l,a)):Ve(e,t,l,a),t.memoizedState=u.state,e=t.child):e=Xt(e,t,a),e}function Vo(e,t,l,n){return Cl(),t.flags|=256,Ve(e,t,l,n),t.child}var vi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pi(e){return{baseLanes:e,cachePool:Of()}}function gi(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=mt),e}function Xo(e,t,l){var n=t.pendingProps,a=!1,u=(t.flags&128)!==0,c;if((c=u)||(c=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),c&&(a=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(le){if(a?ol(t):rl(),(e=be)?(e=Fr(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:nl!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=Af(e),l.return=t,t.child=l,Ye=t,be=null)):e=null,e===null)throw ul(t);return Pi(e)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(rl(),a=t.mode,s=mu({mode:"hidden",children:s},a),n=Rl(n,a,l,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=pi(l),n.childLanes=gi(e,c,l),t.memoizedState=vi,na(null,n)):(ol(t),yi(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(u)t.flags&256?(ol(t),t.flags&=-257,t=bi(e,t,l)):t.memoizedState!==null?(rl(),t.child=e.child,t.flags|=128,t=null):(rl(),s=n.fallback,a=t.mode,n=mu({mode:"visible",children:n.children},a),s=Rl(s,a,l,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,ql(t,e.child,null,l),n=t.child,n.memoizedState=pi(l),n.childLanes=gi(e,c,l),t.memoizedState=vi,t=na(null,n));else if(ol(t),Pi(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var g=c.dgst;c=g,n=Error(f(419)),n.stack="",n.digest=c,Zn({value:n,source:null,stack:null}),t=bi(e,t,l)}else if(Ce||sn(e,t,l,!1),c=(l&e.childLanes)!==0,Ce||c){if(c=ge,c!==null&&(n=Ns(c,l),n!==0&&n!==r.retryLane))throw r.retryLane=n,zl(e,n),lt(c,e,n),mi;Ii(s)||Eu(),t=bi(e,t,l)}else Ii(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,be=Tt(s.nextSibling),Ye=t,le=!0,al=null,Et=!1,e!==null&&Tf(t,e),t=yi(t,n.children),t.flags|=4096);return t}return a?(rl(),s=n.fallback,a=t.mode,r=e.child,g=r.sibling,n=Ht(r,{mode:"hidden",children:n.children}),n.subtreeFlags=r.subtreeFlags&65011712,g!==null?s=Ht(g,s):(s=Rl(s,a,l,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,na(null,n),n=t.child,s=e.child.memoizedState,s===null?s=pi(l):(a=s.cachePool,a!==null?(r=ze._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=Of(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=gi(e,c,l),t.memoizedState=vi,na(e.child,n)):(ol(t),l=e.child,e=l.sibling,l=Ht(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function yi(e,t){return t=mu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mu(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function bi(e,t,l){return ql(t,e.child,null,l),e=yi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wo(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Uc(e.return,t,l)}function Si(e,t,l,n,a,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=l,c.tailMode=a,c.treeForkCount=u)}function Zo(e,t,l){var n=t.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var c=_e.current,s=(c&2)!==0;if(s?(c=c&1|2,t.flags|=128):c&=1,C(_e,c),Ve(e,t,n,l),n=le?wn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wo(e,l,t);else if(e.tag===19)wo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&tu(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),Si(t,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&tu(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}Si(t,!0,l,null,u,n);break;case"together":Si(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Xt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),hl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(sn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,l=Ht(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ht(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Ai(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ka(e)))}function dh(e,t,l){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),cl(t,ze,e.memoizedState.cache),Cl();break;case 27:case 5:Dn(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:cl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kc(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ol(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Xo(e,t,l):(ol(t),e=Xt(e,t,l),e!==null?e.sibling:null);ol(t);break;case 19:var a=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(sn(e,t,l,!1),n=(l&t.childLanes)!==0),a){if(n)return Zo(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),C(_e,_e.current),n)break;return null;case 22:return t.lanes=0,Ho(e,t,l,t.pendingProps);case 24:cl(t,ze,e.memoizedState.cache)}return Xt(e,t,l)}function Ko(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ce=!0;else{if(!Ai(e,l)&&(t.flags&128)===0)return Ce=!1,dh(e,t,l);Ce=(e.flags&131072)!==0}else Ce=!1,le&&(t.flags&1048576)!==0&&xf(t,wn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Hl(t.elementType),t.type=e,typeof e=="function")Mc(e)?(n=Ql(e,n),t.tag=1,t=Qo(null,t,e,n,l)):(t.tag=0,t=hi(null,t,e,n,l));else{if(e!=null){var a=e.$$typeof;if(a===Ze){t.tag=11,t=Uo(null,t,e,n,l);break e}else if(a===F){t.tag=14,t=Go(null,t,e,n,l);break e}}throw t=Je(e)||e,Error(f(306,t,""))}}return t;case 0:return hi(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,a=Ql(n,t.pendingProps),Qo(e,t,n,a,l);case 3:e:{if(de(t,t.stateNode.containerInfo),e===null)throw Error(f(387));n=t.pendingProps;var u=t.memoizedState;a=u.element,Qc(e,t),In(t,n,null,l);var c=t.memoizedState;if(n=c.cache,cl(t,ze,n),n!==u.cache&&Gc(t,[ze],l,!0),Fn(),n=c.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Vo(e,t,n,l);break e}else if(n!==a){a=bt(Error(f(424)),t),Zn(a),t=Vo(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(be=Tt(e.firstChild),Ye=t,le=!0,al=null,Et=!0,l=Bf(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Cl(),n===a){t=Xt(e,t,l);break e}Ve(e,t,n,l)}t=t.child}return t;case 26:return du(e,t),e===null?(l=nd(t.type,null,t.pendingProps,null))?t.memoizedState=l:le||(l=t.type,e=t.pendingProps,n=Du(z.current).createElement(l),n[qe]=t,n[$e]=e,Xe(n,l,e),Be(n),t.stateNode=n):t.memoizedState=nd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dn(t),e===null&&le&&(n=t.stateNode=ed(t.type,t.pendingProps,z.current),Ye=t,Et=!0,a=be,bl(t.type)?(es=a,be=Tt(n.firstChild)):be=a),Ve(e,t,t.pendingProps.children,l),du(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&le&&((a=n=be)&&(n=Vh(n,t.type,t.pendingProps,Et),n!==null?(t.stateNode=n,Ye=t,be=Tt(n.firstChild),Et=!1,a=!0):a=!1),a||ul(t)),Dn(t),a=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,n=u.children,Wi(a,u)?n=null:c!==null&&Wi(a,c)&&(t.flags|=32),t.memoizedState!==null&&(a=Jc(e,t,nh,null,null,l),ya._currentValue=a),du(e,t),Ve(e,t,n,l),t.child;case 6:return e===null&&le&&((e=l=be)&&(l=Xh(l,t.pendingProps,Et),l!==null?(t.stateNode=l,Ye=t,be=null,e=!0):e=!1),e||ul(t)),null;case 13:return Xo(e,t,l);case 4:return de(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ql(t,null,n,l):Ve(e,t,n,l),t.child;case 11:return Uo(e,t,t.type,t.pendingProps,l);case 7:return Ve(e,t,t.pendingProps,l),t.child;case 8:return Ve(e,t,t.pendingProps.children,l),t.child;case 12:return Ve(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,cl(t,t.type,n.value),Ve(e,t,n.children,l),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Gl(t),a=Qe(a),n=n(a),t.flags|=1,Ve(e,t,n,l),t.child;case 14:return Go(e,t,t.type,t.pendingProps,l);case 15:return Bo(e,t,t.type,t.pendingProps,l);case 19:return Zo(e,t,l);case 31:return rh(e,t,l);case 22:return Ho(e,t,l,t.pendingProps);case 24:return Gl(t),n=Qe(ze),e===null?(a=Lc(),a===null&&(a=ge,u=Bc(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),t.memoizedState={parent:n,cache:a},Yc(t),cl(t,ze,a)):((e.lanes&l)!==0&&(Qc(e,t),In(t,null,null,l),Fn()),a=e.memoizedState,u=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),cl(t,ze,n)):(n=u.cache,cl(t,ze,n),n!==a.cache&&Gc(t,[ze],l,!0))),Ve(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function wt(e){e.flags|=4}function Ei(e,t,l,n,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(br())e.flags|=8192;else throw Ll=Fa,qc}else e.flags&=-16777217}function ko(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sd(t))if(br())e.flags|=8192;else throw Ll=Fa,qc}function hu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ts():536870912,e.lanes|=t,Sn|=t)}function aa(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function mh(e,t,l){var n=t.pendingProps;switch(Oc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(ze),ye(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(cn(t)?wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rc())),Se(t),null;case 26:var a=t.type,u=t.memoizedState;return e===null?(wt(t),u!==null?(Se(t),ko(t,u)):(Se(t),Ei(t,a,null,n,l))):u?u!==e.memoizedState?(wt(t),Se(t),ko(t,u)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&wt(t),Se(t),Ei(t,a,e,n,l)),null;case 27:if(ja(t),l=z.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&wt(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return Se(t),null}e=B.current,cn(t)?jf(t):(e=ed(a,n,l),t.stateNode=e,wt(t))}return Se(t),null;case 5:if(ja(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&wt(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return Se(t),null}if(u=B.current,cn(t))jf(t);else{var c=Du(z.current);switch(u){case 1:u=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=c.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?c.createElement(a,{is:n.is}):c.createElement(a)}}u[qe]=t,u[$e]=n;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)u.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=u;e:switch(Xe(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&wt(t)}}return Se(t),Ei(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&wt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(f(166));if(e=z.current,cn(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,a=Ye,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[qe]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Xr(e.nodeValue,l)),e||ul(t,!0)}else e=Du(e).createTextNode(n),e[qe]=t,t.stateNode=e}return Se(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(n=cn(t),l!==null){if(e===null){if(!n)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[qe]=t}else Cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else l=Rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return Se(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=cn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(f(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[qe]=t}else Cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else a=Rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=n!==null,e=e!==null&&e.memoizedState!==null,l&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),hu(t,t.updateQueue),Se(t),null);case 4:return ye(),e===null&&wi(t.stateNode.containerInfo),Se(t),null;case 10:return Yt(t.type),Se(t),null;case 19:if(N(_e),n=t.memoizedState,n===null)return Se(t),null;if(a=(t.flags&128)!==0,u=n.rendering,u===null)if(a)aa(n,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=tu(e),u!==null){for(t.flags|=128,aa(n,!1),e=u.updateQueue,t.updateQueue=e,hu(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Sf(l,e),l=l.sibling;return C(_e,_e.current&1|2),le&&Lt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ut()>bu&&(t.flags|=128,a=!0,aa(n,!1),t.lanes=4194304)}else{if(!a)if(e=tu(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,hu(t,e),aa(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!le)return Se(t),null}else 2*ut()-n.renderingStartTime>bu&&l!==536870912&&(t.flags|=128,a=!0,aa(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ut(),e.sibling=null,l=_e.current,C(_e,a?l&1|2:l&1),le&&Lt(t,n.treeForkCount),e):(Se(t),null);case 22:case 23:return rt(t),Zc(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),l=t.updateQueue,l!==null&&hu(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&N(Bl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Yt(ze),Se(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function hh(e,t){switch(Oc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(ze),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ja(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(f(340));Cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(_e),null;case 4:return ye(),null;case 10:return Yt(t.type),null;case 22:case 23:return rt(t),Zc(),e!==null&&N(Bl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(ze),null;case 25:return null;default:return null}}function Jo(e,t){switch(Oc(t),t.tag){case 3:Yt(ze),ye();break;case 26:case 27:case 5:ja(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:N(_e);break;case 10:Yt(t.type);break;case 22:case 23:rt(t),Zc(),e!==null&&N(Bl);break;case 24:Yt(ze)}}function ua(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&e)===e){n=void 0;var u=l.create,c=l.inst;n=u(),c.destroy=n}l=l.next}while(l!==a)}}catch(s){re(t,t.return,s)}}function dl(e,t,l){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&e)===e){var c=n.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,a=t;var r=l,g=s;try{g()}catch(x){re(a,r,x)}}}n=n.next}while(n!==u)}}catch(x){re(t,t.return,x)}}function Wo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Lf(t,l)}catch(n){re(e,e.return,n)}}}function $o(e,t,l){l.props=Ql(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){re(e,t,n)}}function ca(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(a){re(e,t,a)}}function zt(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){re(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){re(e,t,a)}else l.current=null}function Fo(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){re(e,e.return,a)}}function xi(e,t,l){try{var n=e.stateNode;Bh(n,e.type,l,t),n[$e]=t}catch(a){re(e,e.return,a)}}function Io(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bl(e.type)||e.tag===4}function Ti(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Io(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ji(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Gt));else if(n!==4&&(n===27&&bl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(ji(e,t,l),e=e.sibling;e!==null;)ji(e,t,l),e=e.sibling}function vu(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&bl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(vu(e,t,l),e=e.sibling;e!==null;)vu(e,t,l),e=e.sibling}function Po(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Xe(t,n,l),t[qe]=e,t[$e]=l}catch(u){re(e,e.return,u)}}var Zt=!1,Ue=!1,Mi=!1,er=typeof WeakSet=="function"?WeakSet:Set,He=null;function vh(e,t){if(e=e.containerInfo,ki=Bu,e=rf(e),bc(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var c=0,s=-1,r=-1,g=0,x=0,M=e,y=null;t:for(;;){for(var S;M!==l||a!==0&&M.nodeType!==3||(s=c+a),M!==u||n!==0&&M.nodeType!==3||(r=c+n),M.nodeType===3&&(c+=M.nodeValue.length),(S=M.firstChild)!==null;)y=M,M=S;for(;;){if(M===e)break t;if(y===l&&++g===a&&(s=c),y===u&&++x===n&&(r=c),(S=M.nextSibling)!==null)break;M=y,y=M.parentNode}M=S}l=s===-1||r===-1?null:{start:s,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ji={focusedElem:e,selectionRange:l},Bu=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)a=e[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var H=Ql(l.type,a);e=n.getSnapshotBeforeUpdate(H,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(X){re(l,l.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Fi(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fi(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function tr(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:kt(e,l),n&4&&ua(5,l);break;case 1:if(kt(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){re(l,l.return,c)}else{var a=Ql(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){re(l,l.return,c)}}n&64&&Wo(l),n&512&&ca(l,l.return);break;case 3:if(kt(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Lf(e,t)}catch(c){re(l,l.return,c)}}break;case 27:t===null&&n&4&&Po(l);case 26:case 5:kt(e,l),t===null&&n&4&&Fo(l),n&512&&ca(l,l.return);break;case 12:kt(e,l);break;case 31:kt(e,l),n&4&&ar(e,l);break;case 13:kt(e,l),n&4&&ur(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Th.bind(null,l),wh(e,l))));break;case 22:if(n=l.memoizedState!==null||Zt,!n){t=t!==null&&t.memoizedState!==null||Ue,a=Zt;var u=Ue;Zt=n,(Ue=t)&&!u?Jt(e,l,(l.subtreeFlags&8772)!==0):kt(e,l),Zt=a,Ue=u}break;case 30:break;default:kt(e,l)}}function lr(e){var t=e.alternate;t!==null&&(e.alternate=null,lr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Ie=!1;function Kt(e,t,l){for(l=l.child;l!==null;)nr(e,t,l),l=l.sibling}function nr(e,t,l){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(On,l)}catch{}switch(l.tag){case 26:Ue||zt(l,t),Kt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ue||zt(l,t);var n=Ae,a=Ie;bl(l.type)&&(Ae=l.stateNode,Ie=!1),Kt(e,t,l),va(l.stateNode),Ae=n,Ie=a;break;case 5:Ue||zt(l,t);case 6:if(n=Ae,a=Ie,Ae=null,Kt(e,t,l),Ae=n,Ie=a,Ae!==null)if(Ie)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(l.stateNode)}catch(u){re(l,t,u)}else try{Ae.removeChild(l.stateNode)}catch(u){re(l,t,u)}break;case 18:Ae!==null&&(Ie?(e=Ae,Wr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),_n(e)):Wr(Ae,l.stateNode));break;case 4:n=Ae,a=Ie,Ae=l.stateNode.containerInfo,Ie=!0,Kt(e,t,l),Ae=n,Ie=a;break;case 0:case 11:case 14:case 15:dl(2,l,t),Ue||dl(4,l,t),Kt(e,t,l);break;case 1:Ue||(zt(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&$o(l,t,n)),Kt(e,t,l);break;case 21:Kt(e,t,l);break;case 22:Ue=(n=Ue)||l.memoizedState!==null,Kt(e,t,l),Ue=n;break;default:Kt(e,t,l)}}function ar(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_n(e)}catch(l){re(t,t.return,l)}}}function ur(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_n(e)}catch(l){re(t,t.return,l)}}function ph(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new er),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new er),t;default:throw Error(f(435,e.tag))}}function pu(e,t){var l=ph(e);t.forEach(function(n){if(!l.has(n)){l.add(n);var a=jh.bind(null,e,n);n.then(a,a)}})}function Pe(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(bl(s.type)){Ae=s.stateNode,Ie=!1;break e}break;case 5:Ae=s.stateNode,Ie=!1;break e;case 3:case 4:Ae=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(Ae===null)throw Error(f(160));nr(u,c,a),Ae=null,Ie=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cr(t,e),t=t.sibling}var Nt=null;function cr(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pe(t,e),et(e),n&4&&(dl(3,e,e.return),ua(3,e),dl(5,e,e.return));break;case 1:Pe(t,e),et(e),n&512&&(Ue||l===null||zt(l,l.return)),n&64&&Zt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Nt;if(Pe(t,e),et(e),n&512&&(Ue||l===null||zt(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Cn]||u[qe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),Xe(u,n,l),u[qe]=e,Be(u),n=u;break e;case"link":var c=cd("link","href",a).get(n+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(u=c[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break t}}u=a.createElement(n),Xe(u,n,l),a.head.appendChild(u);break;case"meta":if(c=cd("meta","content",a).get(n+(l.content||""))){for(s=0;s<c.length;s++)if(u=c[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break t}}u=a.createElement(n),Xe(u,n,l),a.head.appendChild(u);break;default:throw Error(f(468,n))}u[qe]=e,Be(u),n=u}e.stateNode=n}else id(a,e.type,e.stateNode);else e.stateNode=ud(a,n,e.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?id(a,e.type,e.stateNode):ud(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&xi(e,e.memoizedProps,l.memoizedProps)}break;case 27:Pe(t,e),et(e),n&512&&(Ue||l===null||zt(l,l.return)),l!==null&&n&4&&xi(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Pe(t,e),et(e),n&512&&(Ue||l===null||zt(l,l.return)),e.flags&32){a=e.stateNode;try{$l(a,"")}catch(H){re(e,e.return,H)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,xi(e,a,l!==null?l.memoizedProps:a)),n&1024&&(Mi=!0);break;case 6:if(Pe(t,e),et(e),n&4){if(e.stateNode===null)throw Error(f(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(H){re(e,e.return,H)}}break;case 3:if(Ru=null,a=Nt,Nt=Ou(t.containerInfo),Pe(t,e),Nt=a,et(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(H){re(e,e.return,H)}Mi&&(Mi=!1,ir(e));break;case 4:n=Nt,Nt=Ou(e.stateNode.containerInfo),Pe(t,e),et(e),Nt=n;break;case 12:Pe(t,e),et(e);break;case 31:Pe(t,e),et(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,pu(e,n)));break;case 13:Pe(t,e),et(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yu=ut()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,pu(e,n)));break;case 22:a=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,g=Zt,x=Ue;if(Zt=g||a,Ue=x||r,Pe(t,e),Ue=x,Zt=g,et(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||r||Zt||Ue||Vl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(u=r.stateNode,a)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=r.stateNode;var M=r.memoizedProps.style,y=M!=null&&M.hasOwnProperty("display")?M.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){re(r,r.return,H)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(H){re(r,r.return,H)}}}else if(t.tag===18){if(l===null){r=t;try{var S=r.stateNode;a?$r(S,!0):$r(r.stateNode,!1)}catch(H){re(r,r.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,pu(e,l))));break;case 19:Pe(t,e),et(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,pu(e,n)));break;case 30:break;case 21:break;default:Pe(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(Io(n)){l=n;break}n=n.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var a=l.stateNode,u=Ti(e);vu(e,u,a);break;case 5:var c=l.stateNode;l.flags&32&&($l(c,""),l.flags&=-33);var s=Ti(e);vu(e,s,c);break;case 3:case 4:var r=l.stateNode.containerInfo,g=Ti(e);ji(e,g,r);break;default:throw Error(f(161))}}catch(x){re(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ir(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ir(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tr(e,t.alternate,t),t=t.sibling}function Vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:dl(4,t,t.return),Vl(t);break;case 1:zt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&$o(t,t.return,l),Vl(t);break;case 27:va(t.stateNode);case 26:case 5:zt(t,t.return),Vl(t);break;case 22:t.memoizedState===null&&Vl(t);break;case 30:Vl(t);break;default:Vl(t)}e=e.sibling}}function Jt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,u=t,c=u.flags;switch(u.tag){case 0:case 11:case 15:Jt(a,u,l),ua(4,u);break;case 1:if(Jt(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){re(n,n.return,g)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)Hf(r[a],s)}catch(g){re(n,n.return,g)}}l&&c&64&&Wo(u),ca(u,u.return);break;case 27:Po(u);case 26:case 5:Jt(a,u,l),l&&n===null&&c&4&&Fo(u),ca(u,u.return);break;case 12:Jt(a,u,l);break;case 31:Jt(a,u,l),l&&c&4&&ar(a,u);break;case 13:Jt(a,u,l),l&&c&4&&ur(a,u);break;case 22:u.memoizedState===null&&Jt(a,u,l),ca(u,u.return);break;case 30:break;default:Jt(a,u,l)}t=t.sibling}}function Ni(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Kn(l))}function _i(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kn(e))}function _t(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sr(e,t,l,n),t=t.sibling}function sr(e,t,l,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,l,n),a&2048&&ua(9,t);break;case 1:_t(e,t,l,n);break;case 3:_t(e,t,l,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kn(e)));break;case 12:if(a&2048){_t(e,t,l,n),e=t.stateNode;try{var u=t.memoizedProps,c=u.id,s=u.onPostCommit;typeof s=="function"&&s(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){re(t,t.return,r)}}else _t(e,t,l,n);break;case 31:_t(e,t,l,n);break;case 13:_t(e,t,l,n);break;case 23:break;case 22:u=t.stateNode,c=t.alternate,t.memoizedState!==null?u._visibility&2?_t(e,t,l,n):ia(e,t):u._visibility&2?_t(e,t,l,n):(u._visibility|=2,gn(e,t,l,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Ni(c,t);break;case 24:_t(e,t,l,n),a&2048&&_i(t.alternate,t);break;default:_t(e,t,l,n)}}function gn(e,t,l,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,c=t,s=l,r=n,g=c.flags;switch(c.tag){case 0:case 11:case 15:gn(u,c,s,r,a),ua(8,c);break;case 23:break;case 22:var x=c.stateNode;c.memoizedState!==null?x._visibility&2?gn(u,c,s,r,a):ia(u,c):(x._visibility|=2,gn(u,c,s,r,a)),a&&g&2048&&Ni(c.alternate,c);break;case 24:gn(u,c,s,r,a),a&&g&2048&&_i(c.alternate,c);break;default:gn(u,c,s,r,a)}t=t.sibling}}function ia(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,a=n.flags;switch(n.tag){case 22:ia(l,n),a&2048&&Ni(n.alternate,n);break;case 24:ia(l,n),a&2048&&_i(n.alternate,n);break;default:ia(l,n)}t=t.sibling}}var sa=8192;function yn(e,t,l){if(e.subtreeFlags&sa)for(e=e.child;e!==null;)fr(e,t,l),e=e.sibling}function fr(e,t,l){switch(e.tag){case 26:yn(e,t,l),e.flags&sa&&e.memoizedState!==null&&l0(l,Nt,e.memoizedState,e.memoizedProps);break;case 5:yn(e,t,l);break;case 3:case 4:var n=Nt;Nt=Ou(e.stateNode.containerInfo),yn(e,t,l),Nt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=sa,sa=16777216,yn(e,t,l),sa=n):yn(e,t,l));break;default:yn(e,t,l)}}function or(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];He=n,dr(n,e)}or(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rr(e),e=e.sibling}function rr(e){switch(e.tag){case 0:case 11:case 15:fa(e),e.flags&2048&&dl(9,e,e.return);break;case 3:fa(e);break;case 12:fa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gu(e)):fa(e);break;default:fa(e)}}function gu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];He=n,dr(n,e)}or(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:dl(8,t,t.return),gu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,gu(t));break;default:gu(t)}e=e.sibling}}function dr(e,t){for(;He!==null;){var l=He;switch(l.tag){case 0:case 11:case 15:dl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Kn(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,He=n;else e:for(l=e;He!==null;){n=He;var a=n.sibling,u=n.return;if(lr(n),n===l){He=null;break e}if(a!==null){a.return=u,He=a;break e}He=u}}}var gh={getCacheForType:function(e){var t=Qe(ze),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Qe(ze).controller.signal}},yh=typeof WeakMap=="function"?WeakMap:Map,ie=0,ge=null,I=null,ee=0,oe=0,dt=null,ml=!1,bn=!1,Di=!1,Wt=0,Ne=0,hl=0,Xl=0,Oi=0,mt=0,Sn=0,oa=null,tt=null,zi=!1,yu=0,mr=0,bu=1/0,Su=null,vl=null,Ge=0,pl=null,An=null,$t=0,Ri=0,Ci=null,hr=null,ra=0,Ui=null;function ht(){return(ie&2)!==0&&ee!==0?ee&-ee:T.T!==null?Yi():_s()}function vr(){if(mt===0)if((ee&536870912)===0||le){var e=_a;_a<<=1,(_a&3932160)===0&&(_a=262144),mt=e}else mt=536870912;return e=ot.current,e!==null&&(e.flags|=32),mt}function lt(e,t,l){(e===ge&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(En(e,0),gl(e,ee,mt,!1)),Rn(e,l),((ie&2)===0||e!==ge)&&(e===ge&&((ie&2)===0&&(Xl|=l),Ne===4&&gl(e,ee,mt,!1)),Rt(e))}function pr(e,t,l){if((ie&6)!==0)throw Error(f(327));var n=!l&&(t&127)===0&&(t&e.expiredLanes)===0||zn(e,t),a=n?Ah(e,t):Bi(e,t,!0),u=n;do{if(a===0){bn&&!n&&gl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!bh(l)){a=Bi(e,t,!1),u=!1;continue}if(a===2){if(u=t,e.errorRecoveryDisabledLanes&u)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var s=e;a=oa;var r=s.current.memoizedState.isDehydrated;if(r&&(En(s,c).flags|=256),c=Bi(s,c,!1),c!==2){if(Di&&!r){s.errorRecoveryDisabledLanes|=u,Xl|=u,a=4;break e}u=tt,tt=a,u!==null&&(tt===null?tt=u:tt.push.apply(tt,u))}a=c}if(u=!1,a!==2)continue}}if(a===1){En(e,0),gl(e,t,0,!0);break}e:{switch(n=e,u=a,u){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:gl(n,t,mt,!ml);break e;case 2:tt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(a=yu+300-ut(),10<a)){if(gl(n,t,mt,!ml),Oa(n,0,!0)!==0)break e;$t=t,n.timeoutHandle=kr(gr.bind(null,n,l,tt,Su,zi,t,mt,Xl,Sn,ml,u,"Throttled",-0,0),a);break e}gr(n,l,tt,Su,zi,t,mt,Xl,Sn,ml,u,null,-0,0)}}break}while(!0);Rt(e)}function gr(e,t,l,n,a,u,c,s,r,g,x,M,y,S){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},fr(t,u,M);var H=(u&62914560)===u?yu-ut():(u&4194048)===u?mr-ut():0;if(H=n0(M,H),H!==null){$t=u,e.cancelPendingCommit=H(jr.bind(null,e,t,u,l,n,a,c,s,r,x,M,null,y,S)),gl(e,u,c,!g);return}}jr(e,t,u,l,n,a,c,s,r)}function bh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!st(u(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gl(e,t,l,n){t&=~Oi,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var u=31-it(a),c=1<<u;n[u]=-1,a&=~c}l!==0&&js(e,l,t)}function Au(){return(ie&6)===0?(da(0),!1):!0}function Gi(){if(I!==null){if(oe===0)var e=I.return;else e=I,qt=Ul=null,Fc(e),dn=null,Jn=0,e=I;for(;e!==null;)Jo(e.alternate,e),e=e.return;I=null}}function En(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,qh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),$t=0,Gi(),ge=e,I=l=Ht(e.current,null),ee=t,oe=0,dt=null,ml=!1,bn=zn(e,t),Di=!1,Sn=mt=Oi=Xl=hl=Ne=0,tt=oa=null,zi=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-it(n),u=1<<a;t|=e[a],n&=~u}return Wt=t,Va(),l}function yr(e,t){W=null,T.H=la,t===rn||t===$a?(t=Cf(),oe=3):t===qc?(t=Cf(),oe=4):oe=t===mi?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,I===null&&(Ne=1,ou(e,bt(t,e.current)))}function br(){var e=ot.current;return e===null?!0:(ee&4194048)===ee?xt===null:(ee&62914560)===ee||(ee&536870912)!==0?e===xt:!1}function Sr(){var e=T.H;return T.H=la,e===null?la:e}function Ar(){var e=T.A;return T.A=gh,e}function Eu(){Ne=4,ml||(ee&4194048)!==ee&&ot.current!==null||(bn=!0),(hl&134217727)===0&&(Xl&134217727)===0||ge===null||gl(ge,ee,mt,!1)}function Bi(e,t,l){var n=ie;ie|=2;var a=Sr(),u=Ar();(ge!==e||ee!==t)&&(Su=null,En(e,t)),t=!1;var c=Ne;e:do try{if(oe!==0&&I!==null){var s=I,r=dt;switch(oe){case 8:Gi(),c=6;break e;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var g=oe;if(oe=0,dt=null,xn(e,s,r,g),l&&bn){c=0;break e}break;default:g=oe,oe=0,dt=null,xn(e,s,r,g)}}Sh(),c=Ne;break}catch(x){yr(e,x)}while(!0);return t&&e.shellSuspendCounter++,qt=Ul=null,ie=n,T.H=a,T.A=u,I===null&&(ge=null,ee=0,Va()),c}function Sh(){for(;I!==null;)Er(I)}function Ah(e,t){var l=ie;ie|=2;var n=Sr(),a=Ar();ge!==e||ee!==t?(Su=null,bu=ut()+500,En(e,t)):bn=zn(e,t);e:do try{if(oe!==0&&I!==null){t=I;var u=dt;t:switch(oe){case 1:oe=0,dt=null,xn(e,t,u,1);break;case 2:case 9:if(zf(u)){oe=0,dt=null,xr(t);break}t=function(){oe!==2&&oe!==9||ge!==e||(oe=7),Rt(e)},u.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:zf(u)?(oe=0,dt=null,xr(t)):(oe=0,dt=null,xn(e,t,u,7));break;case 5:var c=null;switch(I.tag){case 26:c=I.memoizedState;case 5:case 27:var s=I;if(c?sd(c):s.stateNode.complete){oe=0,dt=null;var r=s.sibling;if(r!==null)I=r;else{var g=s.return;g!==null?(I=g,xu(g)):I=null}break t}}oe=0,dt=null,xn(e,t,u,5);break;case 6:oe=0,dt=null,xn(e,t,u,6);break;case 8:Gi(),Ne=6;break e;default:throw Error(f(462))}}Eh();break}catch(x){yr(e,x)}while(!0);return qt=Ul=null,T.H=n,T.A=a,ie=l,I!==null?0:(ge=null,ee=0,Va(),Ne)}function Eh(){for(;I!==null&&!Zd();)Er(I)}function Er(e){var t=Ko(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?xu(e):I=t}function xr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Yo(l,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=Yo(l,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:Fc(t);default:Jo(l,t),t=I=Sf(t,Wt),t=Ko(l,t,Wt)}e.memoizedProps=e.pendingProps,t===null?xu(e):I=t}function xn(e,t,l,n){qt=Ul=null,Fc(t),dn=null,Jn=0;var a=t.return;try{if(oh(e,a,t,l,ee)){Ne=1,ou(e,bt(l,e.current)),I=null;return}}catch(u){if(a!==null)throw I=a,u;Ne=1,ou(e,bt(l,e.current)),I=null;return}t.flags&32768?(le||n===1?e=!0:bn||(ee&536870912)!==0?e=!1:(ml=e=!0,(n===2||n===9||n===3||n===6)&&(n=ot.current,n!==null&&n.tag===13&&(n.flags|=16384))),Tr(t,e)):xu(t)}function xu(e){var t=e;do{if((t.flags&32768)!==0){Tr(t,ml);return}e=t.return;var l=mh(t.alternate,t,Wt);if(l!==null){I=l;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);Ne===0&&(Ne=5)}function Tr(e,t){do{var l=hh(e.alternate,e);if(l!==null){l.flags&=32767,I=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=l}while(e!==null);Ne=6,I=null}function jr(e,t,l,n,a,u,c,s,r){e.cancelPendingCommit=null;do Tu();while(Ge!==0);if((ie&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(u=t.lanes|t.childLanes,u|=Tc,tm(e,l,u,c,s,r),e===ge&&(I=ge=null,ee=0),An=t,pl=e,$t=l,Ri=u,Ci=a,hr=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mh(Ma,function(){return Or(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,a=R.p,R.p=2,c=ie,ie|=4;try{vh(e,t,l)}finally{ie=c,R.p=a,T.T=n}}Ge=1,Mr(),Nr(),_r()}}function Mr(){if(Ge===1){Ge=0;var e=pl,t=An,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var n=R.p;R.p=2;var a=ie;ie|=4;try{cr(t,e);var u=Ji,c=rf(e.containerInfo),s=u.focusedElem,r=u.selectionRange;if(c!==s&&s&&s.ownerDocument&&of(s.ownerDocument.documentElement,s)){if(r!==null&&bc(s)){var g=r.start,x=r.end;if(x===void 0&&(x=g),"selectionStart"in s)s.selectionStart=g,s.selectionEnd=Math.min(x,s.value.length);else{var M=s.ownerDocument||document,y=M&&M.defaultView||window;if(y.getSelection){var S=y.getSelection(),H=s.textContent.length,X=Math.min(r.start,H),ve=r.end===void 0?X:Math.min(r.end,H);!S.extend&&X>ve&&(c=ve,ve=X,X=c);var h=ff(s,X),d=ff(s,ve);if(h&&d&&(S.rangeCount!==1||S.anchorNode!==h.node||S.anchorOffset!==h.offset||S.focusNode!==d.node||S.focusOffset!==d.offset)){var p=M.createRange();p.setStart(h.node,h.offset),S.removeAllRanges(),X>ve?(S.addRange(p),S.extend(d.node,d.offset)):(p.setEnd(d.node,d.offset),S.addRange(p))}}}}for(M=[],S=s;S=S.parentNode;)S.nodeType===1&&M.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<M.length;s++){var j=M[s];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Bu=!!ki,Ji=ki=null}finally{ie=a,R.p=n,T.T=l}}e.current=t,Ge=2}}function Nr(){if(Ge===2){Ge=0;var e=pl,t=An,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var n=R.p;R.p=2;var a=ie;ie|=4;try{tr(e,t.alternate,t)}finally{ie=a,R.p=n,T.T=l}}Ge=3}}function _r(){if(Ge===4||Ge===3){Ge=0,Kd();var e=pl,t=An,l=$t,n=hr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,An=pl=null,Dr(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(vl=null),ec(l),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=T.T,a=R.p,R.p=2,T.T=null;try{for(var u=e.onRecoverableError,c=0;c<n.length;c++){var s=n[c];u(s.value,{componentStack:s.stack})}}finally{T.T=t,R.p=a}}($t&3)!==0&&Tu(),Rt(e),a=e.pendingLanes,(l&261930)!==0&&(a&42)!==0?e===Ui?ra++:(ra=0,Ui=e):ra=0,da(0)}}function Dr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kn(t)))}function Tu(){return Mr(),Nr(),_r(),Or()}function Or(){if(Ge!==5)return!1;var e=pl,t=Ri;Ri=0;var l=ec($t),n=T.T,a=R.p;try{R.p=32>l?32:l,T.T=null,l=Ci,Ci=null;var u=pl,c=$t;if(Ge=0,An=pl=null,$t=0,(ie&6)!==0)throw Error(f(331));var s=ie;if(ie|=4,rr(u.current),sr(u,u.current,c,l),ie=s,da(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(On,u)}catch{}return!0}finally{R.p=a,T.T=n,Dr(e,t)}}function zr(e,t,l){t=bt(l,t),t=di(e.stateNode,t,2),e=fl(e,t,2),e!==null&&(Rn(e,2),Rt(e))}function re(e,t,l){if(e.tag===3)zr(e,e,l);else for(;t!==null;){if(t.tag===3){zr(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vl===null||!vl.has(n))){e=bt(l,e),l=Ro(2),n=fl(t,l,2),n!==null&&(Co(l,n,t,e),Rn(n,2),Rt(n));break}}t=t.return}}function Hi(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new yh;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(l)||(Di=!0,a.add(l),e=xh.bind(null,e,t,l),t.then(e,e))}function xh(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ge===e&&(ee&l)===l&&(Ne===4||Ne===3&&(ee&62914560)===ee&&300>ut()-yu?(ie&2)===0&&En(e,0):Oi|=l,Sn===ee&&(Sn=0)),Rt(e)}function Rr(e,t){t===0&&(t=Ts()),e=zl(e,t),e!==null&&(Rn(e,t),Rt(e))}function Th(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Rr(e,l)}function jh(e,t){var l=0;switch(e.tag){case 31:case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(f(314))}n!==null&&n.delete(t),Rr(e,l)}function Mh(e,t){return $u(e,t)}var ju=null,Tn=null,Li=!1,Mu=!1,qi=!1,yl=0;function Rt(e){e!==Tn&&e.next===null&&(Tn===null?ju=Tn=e:Tn=Tn.next=e),Mu=!0,Li||(Li=!0,_h())}function da(e,t){if(!qi&&Mu){qi=!0;do for(var l=!1,n=ju;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var c=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-it(42|e)+1)-1,u&=a&~(c&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Br(n,u))}else u=ee,u=Oa(n,n===ge?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||zn(n,u)||(l=!0,Br(n,u));n=n.next}while(l);qi=!1}}function Nh(){Cr()}function Cr(){Mu=Li=!1;var e=0;yl!==0&&Lh()&&(e=yl);for(var t=ut(),l=null,n=ju;n!==null;){var a=n.next,u=Ur(n,t);u===0?(n.next=null,l===null?ju=a:l.next=a,a===null&&(Tn=l)):(l=n,(e!==0||(u&3)!==0)&&(Mu=!0)),n=a}Ge!==0&&Ge!==5||da(e),yl!==0&&(yl=0)}function Ur(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var c=31-it(u),s=1<<c,r=a[c];r===-1?((s&l)===0||(s&n)!==0)&&(a[c]=em(s,t)):r<=t&&(e.expiredLanes|=s),u&=~s}if(t=ge,l=ee,l=Oa(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||zn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Fu(n),ec(l)){case 2:case 8:l=Es;break;case 32:l=Ma;break;case 268435456:l=xs;break;default:l=Ma}return n=Gr.bind(null,e),l=$u(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Fu(n),e.callbackPriority=2,e.callbackNode=null,2}function Gr(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Tu()&&e.callbackNode!==l)return null;var n=ee;return n=Oa(e,e===ge?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(pr(e,n,t),Ur(e,ut()),e.callbackNode!=null&&e.callbackNode===l?Gr.bind(null,e):null)}function Br(e,t){if(Tu())return null;pr(e,t,!0)}function _h(){Yh(function(){(ie&6)!==0?$u(As,Nh):Cr()})}function Yi(){if(yl===0){var e=fn;e===0&&(e=Na,Na<<=1,(Na&261888)===0&&(Na=256)),yl=e}return yl}function Hr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ua(""+e)}function Lr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Dh(e,t,l,n,a){if(t==="submit"&&l&&l.stateNode===a){var u=Hr((a[$e]||null).action),c=n.submitter;c&&(t=(t=c[$e]||null)?Hr(t.formAction):c.getAttribute("formAction"),t!==null&&(u=t,c=null));var s=new La("action","action",null,n,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(yl!==0){var r=c?Lr(a,c):new FormData(a);ci(l,{pending:!0,data:r,method:a.method,action:u},null,r)}}else typeof u=="function"&&(s.preventDefault(),r=c?Lr(a,c):new FormData(a),ci(l,{pending:!0,data:r,method:a.method,action:u},u,r))},currentTarget:a}]})}}for(var Qi=0;Qi<xc.length;Qi++){var Vi=xc[Qi],Oh=Vi.toLowerCase(),zh=Vi[0].toUpperCase()+Vi.slice(1);Mt(Oh,"on"+zh)}Mt(hf,"onAnimationEnd"),Mt(vf,"onAnimationIteration"),Mt(pf,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(km,"onTransitionRun"),Mt(Jm,"onTransitionStart"),Mt(Wm,"onTransitionCancel"),Mt(gf,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),Nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ma));function qr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],a=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var c=n.length-1;0<=c;c--){var s=n[c],r=s.instance,g=s.currentTarget;if(s=s.listener,r!==u&&a.isPropagationStopped())break e;u=s,a.currentTarget=g;try{u(a)}catch(x){Qa(x)}a.currentTarget=null,u=r}else for(c=0;c<n.length;c++){if(s=n[c],r=s.instance,g=s.currentTarget,s=s.listener,r!==u&&a.isPropagationStopped())break e;u=s,a.currentTarget=g;try{u(a)}catch(x){Qa(x)}a.currentTarget=null,u=r}}}}function P(e,t){var l=t[tc];l===void 0&&(l=t[tc]=new Set);var n=e+"__bubble";l.has(n)||(Yr(t,e,2,!1),l.add(n))}function Xi(e,t,l){var n=0;t&&(n|=4),Yr(l,e,n,t)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[Nu]){e[Nu]=!0,zs.forEach(function(l){l!=="selectionchange"&&(Rh.has(l)||Xi(l,!1,e),Xi(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nu]||(t[Nu]=!0,Xi("selectionchange",!1,t))}}function Yr(e,t,l,n){switch(vd(t)){case 2:var a=c0;break;case 8:a=i0;break;default:a=us}l=a.bind(null,t,l,e),a=void 0,!oc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function Zi(e,t,l,n,a){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var s=n.stateNode.containerInfo;if(s===a)break;if(c===4)for(c=n.return;c!==null;){var r=c.tag;if((r===3||r===4)&&c.stateNode.containerInfo===a)return;c=c.return}for(;s!==null;){if(c=Zl(s),c===null)return;if(r=c.tag,r===5||r===6||r===26||r===27){n=u=c;continue e}s=s.parentNode}}n=n.return}Xs(function(){var g=u,x=sc(l),M=[];e:{var y=yf.get(e);if(y!==void 0){var S=La,H=e;switch(e){case"keypress":if(Ba(l)===0)break e;case"keydown":case"keyup":S=jm;break;case"focusin":H="focus",S=hc;break;case"focusout":H="blur",S=hc;break;case"beforeblur":case"afterblur":S=hc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=_m;break;case hf:case vf:case pf:S=pm;break;case gf:S=Om;break;case"scroll":case"scrollend":S=rm;break;case"wheel":S=Rm;break;case"copy":case"cut":case"paste":S=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Js;break;case"toggle":case"beforetoggle":S=Um}var X=(t&4)!==0,ve=!X&&(e==="scroll"||e==="scrollend"),h=X?y!==null?y+"Capture":null:y;X=[];for(var d=g,p;d!==null;){var j=d;if(p=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||p===null||h===null||(j=Gn(d,h),j!=null&&X.push(ha(d,j,p))),ve)break;d=d.return}0<X.length&&(y=new S(y,H,null,l,x),M.push({event:y,listeners:X}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&l!==ic&&(H=l.relatedTarget||l.fromElement)&&(Zl(H)||H[wl]))break e;if((S||y)&&(y=x.window===x?x:(y=x.ownerDocument)?y.defaultView||y.parentWindow:window,S?(H=l.relatedTarget||l.toElement,S=g,H=H?Zl(H):null,H!==null&&(ve=A(H),X=H.tag,H!==ve||X!==5&&X!==27&&X!==6)&&(H=null)):(S=null,H=g),S!==H)){if(X=Ks,j="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(X=Js,j="onPointerLeave",h="onPointerEnter",d="pointer"),ve=S==null?y:Un(S),p=H==null?y:Un(H),y=new X(j,d+"leave",S,l,x),y.target=ve,y.relatedTarget=p,j=null,Zl(x)===g&&(X=new X(h,d+"enter",H,l,x),X.target=p,X.relatedTarget=ve,j=X),ve=j,S&&H)t:{for(X=Ch,h=S,d=H,p=0,j=h;j;j=X(j))p++;j=0;for(var V=d;V;V=X(V))j++;for(;0<p-j;)h=X(h),p--;for(;0<j-p;)d=X(d),j--;for(;p--;){if(h===d||d!==null&&h===d.alternate){X=h;break t}h=X(h),d=X(d)}X=null}else X=null;S!==null&&Qr(M,y,S,X,!1),H!==null&&ve!==null&&Qr(M,ve,H,X,!0)}}e:{if(y=g?Un(g):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var ue=lf;else if(ef(y))if(nf)ue=wm;else{ue=Vm;var L=Qm}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&cc(g.elementType)&&(ue=lf):ue=Xm;if(ue&&(ue=ue(e,g))){tf(M,ue,l,x);break e}L&&L(e,y,g),e==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&uc(y,"number",y.value)}switch(L=g?Un(g):window,e){case"focusin":(ef(L)||L.contentEditable==="true")&&(en=L,Sc=g,Xn=null);break;case"focusout":Xn=Sc=en=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,df(M,l,x);break;case"selectionchange":if(Km)break;case"keydown":case"keyup":df(M,l,x)}var $;if(pc)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Pl?Is(e,l)&&(te="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(te="onCompositionStart");te&&(Ws&&l.locale!=="ko"&&(Pl||te!=="onCompositionStart"?te==="onCompositionEnd"&&Pl&&($=ws()):(ll=x,rc="value"in ll?ll.value:ll.textContent,Pl=!0)),L=_u(g,te),0<L.length&&(te=new ks(te,e,null,l,x),M.push({event:te,listeners:L}),$?te.data=$:($=Ps(l),$!==null&&(te.data=$)))),($=Bm?Hm(e,l):Lm(e,l))&&(te=_u(g,"onBeforeInput"),0<te.length&&(L=new ks("onBeforeInput","beforeinput",null,l,x),M.push({event:L,listeners:te}),L.data=$)),Dh(M,e,g,l,x)}qr(M,t)})}function ha(e,t,l){return{instance:e,listener:t,currentTarget:l}}function _u(e,t){for(var l=t+"Capture",n=[];e!==null;){var a=e,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Gn(e,l),a!=null&&n.unshift(ha(e,a,u)),a=Gn(e,t),a!=null&&n.push(ha(e,a,u))),e.tag===3)return n;e=e.return}return[]}function Ch(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qr(e,t,l,n,a){for(var u=t._reactName,c=[];l!==null&&l!==n;){var s=l,r=s.alternate,g=s.stateNode;if(s=s.tag,r!==null&&r===n)break;s!==5&&s!==26&&s!==27||g===null||(r=g,a?(g=Gn(l,u),g!=null&&c.unshift(ha(l,g,r))):a||(g=Gn(l,u),g!=null&&c.push(ha(l,g,r)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var Uh=/\r\n?/g,Gh=/\u0000|\uFFFD/g;function Vr(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Gh,"")}function Xr(e,t){return t=Vr(t),Vr(e)===t}function he(e,t,l,n,a,u){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||$l(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&$l(e,""+n);break;case"className":Ra(e,"class",n);break;case"tabIndex":Ra(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ra(e,l,n);break;case"style":Qs(e,n,u);break;case"data":if(t!=="object"){Ra(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ua(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&he(e,t,"name",a.name,a,null),he(e,t,"formEncType",a.formEncType,a,null),he(e,t,"formMethod",a.formMethod,a,null),he(e,t,"formTarget",a.formTarget,a,null)):(he(e,t,"encType",a.encType,a,null),he(e,t,"method",a.method,a,null),he(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ua(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Gt);break;case"onScroll":n!=null&&P("scroll",e);break;case"onScrollEnd":n!=null&&P("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Ua(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":P("beforetoggle",e),P("toggle",e),za(e,"popover",n);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":za(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=fm.get(l)||l,za(e,l,n))}}function Ki(e,t,l,n,a,u){switch(l){case"style":Qs(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));e.innerHTML=l}}break;case"children":typeof n=="string"?$l(e,n):(typeof n=="number"||typeof n=="bigint")&&$l(e,""+n);break;case"onScroll":n!=null&&P("scroll",e);break;case"onScrollEnd":n!=null&&P("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rs.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),u=e[$e]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,a);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):za(e,l,n)}}}function Xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",e),P("load",e);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var c=l[u];if(c!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:he(e,t,u,c,l,null)}}a&&he(e,t,"srcSet",l.srcSet,l,null),n&&he(e,t,"src",l.src,l,null);return;case"input":P("invalid",e);var s=u=c=a=null,r=null,g=null;for(n in l)if(l.hasOwnProperty(n)){var x=l[n];if(x!=null)switch(n){case"name":a=x;break;case"type":c=x;break;case"checked":r=x;break;case"defaultChecked":g=x;break;case"value":u=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(f(137,t));break;default:he(e,t,n,x,l,null)}}Hs(e,u,s,r,g,c,a,!1);return;case"select":P("invalid",e),n=c=u=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":c=s;break;case"multiple":n=s;default:he(e,t,a,s,l,null)}t=u,l=c,e.multiple=!!n,t!=null?Wl(e,!!n,t,!1):l!=null&&Wl(e,!!n,l,!0);return;case"textarea":P("invalid",e),u=a=n=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:he(e,t,c,s,l,null)}qs(e,n,a,u);return;case"option":for(r in l)if(l.hasOwnProperty(r)&&(n=l[r],n!=null))switch(r){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:he(e,t,r,n,l,null)}return;case"dialog":P("beforetoggle",e),P("toggle",e),P("cancel",e),P("close",e);break;case"iframe":case"object":P("load",e);break;case"video":case"audio":for(n=0;n<ma.length;n++)P(ma[n],e);break;case"image":P("error",e),P("load",e);break;case"details":P("toggle",e);break;case"embed":case"source":case"link":P("error",e),P("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(n=l[g],n!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:he(e,t,g,n,l,null)}return;default:if(cc(t)){for(x in l)l.hasOwnProperty(x)&&(n=l[x],n!==void 0&&Ki(e,t,x,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&he(e,t,s,n,l,null))}function Bh(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,c=null,s=null,r=null,g=null,x=null;for(S in l){var M=l[S];if(l.hasOwnProperty(S)&&M!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":r=M;default:n.hasOwnProperty(S)||he(e,t,S,null,n,M)}}for(var y in n){var S=n[y];if(M=l[y],n.hasOwnProperty(y)&&(S!=null||M!=null))switch(y){case"type":u=S;break;case"name":a=S;break;case"checked":g=S;break;case"defaultChecked":x=S;break;case"value":c=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(f(137,t));break;default:S!==M&&he(e,t,y,S,n,M)}}ac(e,c,s,r,g,x,u,a);return;case"select":S=c=s=y=null;for(u in l)if(r=l[u],l.hasOwnProperty(u)&&r!=null)switch(u){case"value":break;case"multiple":S=r;default:n.hasOwnProperty(u)||he(e,t,u,null,n,r)}for(a in n)if(u=n[a],r=l[a],n.hasOwnProperty(a)&&(u!=null||r!=null))switch(a){case"value":y=u;break;case"defaultValue":s=u;break;case"multiple":c=u;default:u!==r&&he(e,t,a,u,n,r)}t=s,l=c,n=S,y!=null?Wl(e,!!l,y,!1):!!n!=!!l&&(t!=null?Wl(e,!!l,t,!0):Wl(e,!!l,l?[]:"",!1));return;case"textarea":S=y=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:he(e,t,s,null,n,a)}for(c in n)if(a=n[c],u=l[c],n.hasOwnProperty(c)&&(a!=null||u!=null))switch(c){case"value":y=a;break;case"defaultValue":S=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==u&&he(e,t,c,a,n,u)}Ls(e,y,S);return;case"option":for(var H in l)if(y=l[H],l.hasOwnProperty(H)&&y!=null&&!n.hasOwnProperty(H))switch(H){case"selected":e.selected=!1;break;default:he(e,t,H,null,n,y)}for(r in n)if(y=n[r],S=l[r],n.hasOwnProperty(r)&&y!==S&&(y!=null||S!=null))switch(r){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:he(e,t,r,y,n,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in l)y=l[X],l.hasOwnProperty(X)&&y!=null&&!n.hasOwnProperty(X)&&he(e,t,X,null,n,y);for(g in n)if(y=n[g],S=l[g],n.hasOwnProperty(g)&&y!==S&&(y!=null||S!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:he(e,t,g,y,n,S)}return;default:if(cc(t)){for(var ve in l)y=l[ve],l.hasOwnProperty(ve)&&y!==void 0&&!n.hasOwnProperty(ve)&&Ki(e,t,ve,void 0,n,y);for(x in n)y=n[x],S=l[x],!n.hasOwnProperty(x)||y===S||y===void 0&&S===void 0||Ki(e,t,x,y,n,S);return}}for(var h in l)y=l[h],l.hasOwnProperty(h)&&y!=null&&!n.hasOwnProperty(h)&&he(e,t,h,null,n,y);for(M in n)y=n[M],S=l[M],!n.hasOwnProperty(M)||y===S||y==null&&S==null||he(e,t,M,y,n,S)}function wr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,c=a.initiatorType,s=a.duration;if(u&&s&&wr(c)){for(c=0,s=a.responseEnd,n+=1;n<l.length;n++){var r=l[n],g=r.startTime;if(g>s)break;var x=r.transferSize,M=r.initiatorType;x&&wr(M)&&(r=r.responseEnd,c+=x*(r<s?1:(s-g)/(r-g)))}if(--n,t+=8*(u+c)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ki=null,Ji=null;function Du(e){return e.nodeType===9?e:e.ownerDocument}function Zr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $i=null;function Lh(){var e=window.event;return e&&e.type==="popstate"?e===$i?!1:($i=e,!0):($i=null,!1)}var kr=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,Jr=typeof Promise=="function"?Promise:void 0,Yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Jr<"u"?function(e){return Jr.resolve(null).then(e).catch(Qh)}:kr;function Qh(e){setTimeout(function(){throw e})}function bl(e){return e==="head"}function Wr(e,t){var l=t,n=0;do{var a=l.nextSibling;if(e.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){e.removeChild(a),_n(t);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")va(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,va(l);for(var u=l.firstChild;u;){var c=u.nextSibling,s=u.nodeName;u[Cn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}else l==="body"&&va(e.ownerDocument.body);l=a}while(l);_n(t)}function $r(e,t){var l=e;e=0;do{var n=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=n}while(l)}function Fi(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Fi(l),lc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Vh(e,t,l,n){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Cn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Xh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Tt(e.nextSibling),e===null))return null;return e}function Fr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function Ii(e){return e.data==="$?"||e.data==="$~"}function Pi(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var es=null;function Ir(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Tt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Pr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function ed(e,t,l){switch(t=Du(l),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function va(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lc(e)}var jt=new Map,td=new Set;function Ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=R.d;R.d={f:Zh,r:Kh,D:kh,C:Jh,L:Wh,m:$h,X:Ih,S:Fh,M:Ph};function Zh(){var e=Ft.f(),t=Au();return e||t}function Kh(e){var t=Kl(e);t!==null&&t.tag===5&&t.type==="form"?yo(t):Ft.r(e)}var jn=typeof document>"u"?null:document;function ld(e,t,l){var n=jn;if(n&&typeof t=="string"&&t){var a=gt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),td.has(a)||(td.add(a),e={rel:e,crossOrigin:l,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),Xe(t,"link",e),Be(t),n.head.appendChild(t)))}}function kh(e){Ft.D(e),ld("dns-prefetch",e,null)}function Jh(e,t){Ft.C(e,t),ld("preconnect",e,t)}function Wh(e,t,l){Ft.L(e,t,l);var n=jn;if(n&&e&&t){var a='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+gt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+gt(l.imageSizes)+'"]')):a+='[href="'+gt(e)+'"]';var u=a;switch(t){case"style":u=Mn(e);break;case"script":u=Nn(e)}jt.has(u)||(e=U({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),jt.set(u,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(pa(u))||t==="script"&&n.querySelector(ga(u))||(t=n.createElement("link"),Xe(t,"link",e),Be(t),n.head.appendChild(t)))}}function $h(e,t){Ft.m(e,t);var l=jn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+gt(n)+'"][href="'+gt(e)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Nn(e)}if(!jt.has(u)&&(e=U({rel:"modulepreload",href:e},t),jt.set(u,e),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ga(u)))return}n=l.createElement("link"),Xe(n,"link",e),Be(n),l.head.appendChild(n)}}}function Fh(e,t,l){Ft.S(e,t,l);var n=jn;if(n&&e){var a=kl(n).hoistableStyles,u=Mn(e);t=t||"default";var c=a.get(u);if(!c){var s={loading:0,preload:null};if(c=n.querySelector(pa(u)))s.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":t},l),(l=jt.get(u))&&ts(e,l);var r=c=n.createElement("link");Be(r),Xe(r,"link",e),r._p=new Promise(function(g,x){r.onload=g,r.onerror=x}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,zu(c,t,n)}c={type:"stylesheet",instance:c,count:1,state:s},a.set(u,c)}}}function Ih(e,t){Ft.X(e,t);var l=jn;if(l&&e){var n=kl(l).hoistableScripts,a=Nn(e),u=n.get(a);u||(u=l.querySelector(ga(a)),u||(e=U({src:e,async:!0},t),(t=jt.get(a))&&ls(e,t),u=l.createElement("script"),Be(u),Xe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Ph(e,t){Ft.M(e,t);var l=jn;if(l&&e){var n=kl(l).hoistableScripts,a=Nn(e),u=n.get(a);u||(u=l.querySelector(ga(a)),u||(e=U({src:e,async:!0,type:"module"},t),(t=jt.get(a))&&ls(e,t),u=l.createElement("script"),Be(u),Xe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function nd(e,t,l,n){var a=(a=z.current)?Ou(a):null;if(!a)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Mn(l.href),l=kl(a).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Mn(l.href);var u=kl(a).hoistableStyles,c=u.get(e);if(c||(a=a.ownerDocument||a,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,c),(u=a.querySelector(pa(e)))&&!u._p&&(c.instance=u,c.state.loading=5),jt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},jt.set(e,l),u||e0(a,e,l,c.state))),t&&n===null)throw Error(f(528,""));return c}if(t&&n!==null)throw Error(f(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nn(l),l=kl(a).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Mn(e){return'href="'+gt(e)+'"'}function pa(e){return'link[rel="stylesheet"]['+e+"]"}function ad(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function e0(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Xe(t,"link",l),Be(t),e.head.appendChild(t))}function Nn(e){return'[src="'+gt(e)+'"]'}function ga(e){return"script[async]"+e}function ud(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+gt(l.href)+'"]');if(n)return t.instance=n,Be(n),n;var a=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Be(n),Xe(n,"style",a),zu(n,l.precedence,e),t.instance=n;case"stylesheet":a=Mn(l.href);var u=e.querySelector(pa(a));if(u)return t.state.loading|=4,t.instance=u,Be(u),u;n=ad(l),(a=jt.get(a))&&ts(n,a),u=(e.ownerDocument||e).createElement("link"),Be(u);var c=u;return c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Xe(u,"link",n),t.state.loading|=4,zu(u,l.precedence,e),t.instance=u;case"script":return u=Nn(l.src),(a=e.querySelector(ga(u)))?(t.instance=a,Be(a),a):(n=l,(a=jt.get(u))&&(n=U({},l),ls(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),Be(a),Xe(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,zu(n,l.precedence,e));return t.instance}function zu(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,c=0;c<n.length;c++){var s=n[c];if(s.dataset.precedence===t)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ls(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ru=null;function cd(e,t,l){if(Ru===null){var n=new Map,a=Ru=new Map;a.set(l,n)}else a=Ru,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var u=l[a];if(!(u[Cn]||u[qe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(t)||"";c=e+c;var s=n.get(c);s?s.push(u):n.set(c,[u])}}return n}function id(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function t0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function l0(e,t,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=Mn(n.href),u=t.querySelector(pa(a));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Cu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,Be(u);return}u=t.ownerDocument||t,n=ad(n),(a=jt.get(a))&&ts(n,a),u=u.createElement("link"),Be(u);var c=u;c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Xe(u,"link",n),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Cu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ns=0;function n0(e,t){return e.stylesheets&&e.count===0&&Gu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var n=setTimeout(function(){if(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&ns===0&&(ns=62500*Hh());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ns?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uu=null;function Gu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uu=new Map,t.forEach(a0,e),Uu=null,Cu.call(e))}function a0(e,t){if(!(t.state.loading&4)){var l=Uu.get(e);if(l)var n=l.get(null);else{l=new Map,Uu.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var c=a[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),n=c)}n&&l.set(null,n)}a=t.instance,c=a.getAttribute("data-precedence"),u=l.get(c)||n,u===n&&l.set(null,a),l.set(c,a),this.count++,n=Cu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ya={$$typeof:Te,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function u0(e,t,l,n,a,u,c,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Iu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.hiddenUpdates=Iu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function fd(e,t,l,n,a,u,c,s,r,g,x,M){return e=new u0(e,t,l,c,r,g,x,M,s),t=1,u===!0&&(t|=24),u=ft(3,null,null,t),e.current=u,u.stateNode=e,t=Bc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:t},Yc(u),e}function od(e){return e?(e=nn,e):nn}function rd(e,t,l,n,a,u){a=od(a),n.context===null?n.context=a:n.pendingContext=a,n=sl(t),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=fl(e,n,t),l!==null&&(lt(l,e,t),$n(l,e,t))}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function as(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function md(e){if(e.tag===13||e.tag===31){var t=zl(e,67108864);t!==null&&lt(t,e,67108864),as(e,67108864)}}function hd(e){if(e.tag===13||e.tag===31){var t=ht();t=Pu(t);var l=zl(e,t);l!==null&&lt(l,e,t),as(e,t)}}var Bu=!0;function c0(e,t,l,n){var a=T.T;T.T=null;var u=R.p;try{R.p=2,us(e,t,l,n)}finally{R.p=u,T.T=a}}function i0(e,t,l,n){var a=T.T;T.T=null;var u=R.p;try{R.p=8,us(e,t,l,n)}finally{R.p=u,T.T=a}}function us(e,t,l,n){if(Bu){var a=cs(n);if(a===null)Zi(e,t,n,Hu,l),pd(e,n);else if(f0(a,e,t,l,n))n.stopPropagation();else if(pd(e,n),t&4&&-1<s0.indexOf(e)){for(;a!==null;){var u=Kl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=Ml(u.pendingLanes);if(c!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var r=1<<31-it(c);s.entanglements[1]|=r,c&=~r}Rt(u),(ie&6)===0&&(bu=ut()+500,da(0))}}break;case 31:case 13:s=zl(u,2),s!==null&&lt(s,u,2),Au(),as(u,2)}if(u=cs(n),u===null&&Zi(e,t,n,Hu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else Zi(e,t,n,null,l)}}function cs(e){return e=sc(e),is(e)}var Hu=null;function is(e){if(Hu=null,e=Zl(e),e!==null){var t=A(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=O(t),e!==null)return e;e=null}else if(l===31){if(e=q(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hu=e,null}function vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kd()){case As:return 2;case Es:return 8;case Ma:case Jd:return 32;case xs:return 268435456;default:return 32}default:return 32}}var ss=!1,Sl=null,Al=null,El=null,ba=new Map,Sa=new Map,xl=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":Sl=null;break;case"dragenter":case"dragleave":Al=null;break;case"mouseover":case"mouseout":El=null;break;case"pointerover":case"pointerout":ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function Aa(e,t,l,n,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},t!==null&&(t=Kl(t),t!==null&&md(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function f0(e,t,l,n,a){switch(t){case"focusin":return Sl=Aa(Sl,e,t,l,n,a),!0;case"dragenter":return Al=Aa(Al,e,t,l,n,a),!0;case"mouseover":return El=Aa(El,e,t,l,n,a),!0;case"pointerover":var u=a.pointerId;return ba.set(u,Aa(ba.get(u)||null,e,t,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,Sa.set(u,Aa(Sa.get(u)||null,e,t,l,n,a)),!0}return!1}function gd(e){var t=Zl(e.target);if(t!==null){var l=A(t);if(l!==null){if(t=l.tag,t===13){if(t=O(l),t!==null){e.blockedOn=t,Ds(e.priority,function(){hd(l)});return}}else if(t===31){if(t=q(l),t!==null){e.blockedOn=t,Ds(e.priority,function(){hd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=cs(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);ic=n,l.target.dispatchEvent(n),ic=null}else return t=Kl(l),t!==null&&md(t),e.blockedOn=l,!1;t.shift()}return!0}function yd(e,t,l){Lu(e)&&l.delete(t)}function o0(){ss=!1,Sl!==null&&Lu(Sl)&&(Sl=null),Al!==null&&Lu(Al)&&(Al=null),El!==null&&Lu(El)&&(El=null),ba.forEach(yd),Sa.forEach(yd)}function qu(e,t){e.blockedOn===t&&(e.blockedOn=null,ss||(ss=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,o0)))}var Yu=null;function bd(e){Yu!==e&&(Yu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yu===e&&(Yu=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(is(n||l)===null)continue;break}var u=Kl(l);u!==null&&(e.splice(t,3),t-=3,ci(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function _n(e){function t(r){return qu(r,e)}Sl!==null&&qu(Sl,e),Al!==null&&qu(Al,e),El!==null&&qu(El,e),ba.forEach(t),Sa.forEach(t);for(var l=0;l<xl.length;l++){var n=xl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)gd(l),l.blockedOn===null&&xl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],c=a[$e]||null;if(typeof u=="function")c||bd(l);else if(c){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,c=u[$e]||null)s=c.formAction;else if(is(a)!==null)continue}else s=c.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),bd(l)}}}function Sd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(c){return a=c})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function fs(e){this._internalRoot=e}Qu.prototype.render=fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var l=t.current,n=ht();rd(l,n,e,t,null,null)},Qu.prototype.unmount=fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rd(e.current,2,null,e,null,null),Au(),t[wl]=null}};function Qu(e){this._internalRoot=e}Qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=_s();e={blockedOn:null,target:e,priority:t};for(var l=0;l<xl.length&&t!==0&&t<xl[l].priority;l++);xl.splice(l,0,e),l===0&&gd(e)}};var Ad=E.version;if(Ad!=="19.2.6")throw Error(f(527,Ad,"19.2.6"));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=v(t),e=e!==null?Y(e):null,e=e===null?null:e.stateNode,e};var r0={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{On=Vu.inject(r0),ct=Vu}catch{}}return xa.createRoot=function(e,t){if(!b(e))throw Error(f(299));var l=!1,n="",a=_o,u=Do,c=Oo;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=fd(e,1,!1,null,null,l,n,null,a,u,c,Sd),e[wl]=t.current,wi(e),new fs(t)},xa.hydrateRoot=function(e,t,l){if(!b(e))throw Error(f(299));var n=!1,a="",u=_o,c=Do,s=Oo,r=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=fd(e,1,!0,t,l??null,n,a,r,u,c,s,Sd),t.context=od(null),l=t.current,n=ht(),n=Pu(n),a=sl(n),a.callback=null,fl(l,a,n),l=n,t.current.lanes=l,Rn(t,l),Rt(t),e[wl]=t.current,wi(e),new Qu(t)},xa.version="19.2.6",xa}var zd;function A0(){if(zd)return ds.exports;zd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(E){console.error(E)}}return o(),ds.exports=S0(),ds.exports}var E0=A0();function x0({name:o,initial:E}){return i.jsx("nav",{className:"nav",children:i.jsxs("div",{className:"nav-inner",children:[i.jsxs("a",{href:"#top",className:"nav-brand",children:[i.jsx("span",{className:"nav-logo",children:E}),i.jsx("span",{className:"nav-name",children:o})]}),i.jsxs("div",{className:"nav-links",children:[i.jsx("a",{href:"#stack",className:"nav-link",children:"기술 스택"}),i.jsx("a",{href:"#activity",className:"nav-link",children:"활동"}),i.jsx("a",{href:"#achievements",className:"nav-link",children:"수상 · 경력"}),i.jsx("a",{href:"#projects",className:"nav-link",children:"프로젝트"}),i.jsx("a",{href:"#contact",className:"nav-cta",children:"연락하기"})]})]})})}function Ud({size:o=18,className:E}){return i.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"currentColor",className:E,children:i.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})}function Gd({size:o=18,className:E}){return i.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"currentColor",className:E,children:i.jsx("path",{d:"M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"})})}function Xu({size:o=15,className:E}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.2,className:E,children:[i.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),i.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})}function T0({size:o=15,className:E}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.2,className:E,children:[i.jsx("path",{d:"M15 3h6v6"}),i.jsx("path",{d:"M10 14 21 3"}),i.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]})}function j0({size:o=24,className:E}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:E,children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"m2 6 10 7L22 6"})]})}function Bd({size:o=16,className:E}){return i.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:i.jsx("path",{d:"m6 9 6 6 6-6"})})}function M0({size:o=22,className:E}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:[i.jsx("path",{d:"M12 19V5"}),i.jsx("path",{d:"m5 12 7-7 7 7"})]})}function N0({size:o=16,className:E}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),i.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]})}function _0({size:o=16,className:E}){return i.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:E,children:[i.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),i.jsx("circle",{cx:"3.6",cy:"6",r:"1.1",fill:"currentColor",stroke:"none"}),i.jsx("circle",{cx:"3.6",cy:"12",r:"1.1",fill:"currentColor",stroke:"none"}),i.jsx("circle",{cx:"3.6",cy:"18",r:"1.1",fill:"currentColor",stroke:"none"})]})}function D0({name:o,tagline:E,login:_,githubUrl:f,linkedinUrl:b,avatarUrl:A}){return i.jsxs("header",{id:"top",className:"hero",children:[i.jsx("div",{className:"hero-glow","aria-hidden":"true"}),i.jsxs("div",{className:"hero-inner",children:[i.jsxs("div",{className:"hero-copy",children:[i.jsxs("div",{className:"hero-badge",children:[i.jsx("span",{className:"hero-badge-dot"}),"OPEN TO WORK · 채용 제안 환영"]}),i.jsxs("h1",{className:"hero-title",children:["안녕하세요,",i.jsx("br",{}),i.jsx("span",{className:"hero-title-em",children:o})," 입니다."]}),i.jsxs("p",{className:"hero-lead",children:["전북대학교 ",i.jsx("strong",{children:"IT지능정보공학과"}),"에 재학 중입니다. 풀스택 웹 개발과 AI 활용 기술에 관심을 가지고 다양한 프로젝트를 진행하고 있습니다."]}),i.jsx("p",{className:"hero-lead hero-lead-sub",children:"LLM, RAG, MCP(Model Context Protocol) 기반 AI 서비스 개발 경험을 보유하고 있으며, 프론트엔드부터 백엔드, AI 시스템 연동까지 전반적인 개발 역량을 갖추고 있습니다."}),i.jsxs("div",{className:"hero-actions",children:[i.jsxs("a",{className:"btn btn-dark",href:f,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Ud,{size:18}),"GitHub 프로필"]}),b&&i.jsxs("a",{className:"btn btn-linkedin",href:b,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Gd,{size:18}),"LinkedIn 프로필"]}),i.jsx("a",{className:"btn btn-light",href:"#projects",children:"프로젝트 보기 →"})]})]}),i.jsxs("div",{className:"hero-card-wrap",children:[i.jsx("div",{className:"hero-card-glow","aria-hidden":"true"}),i.jsxs("div",{className:"hero-card",children:[i.jsxs("div",{className:"hero-card-bar",children:[i.jsx("span",{className:"dot dot-red"}),i.jsx("span",{className:"dot dot-yellow"}),i.jsx("span",{className:"dot dot-green"}),i.jsx("span",{className:"hero-card-file",children:"profile.tsx"})]}),i.jsx("div",{className:"hero-card-avatar",children:i.jsx("img",{src:A,alt:o})}),i.jsxs("div",{className:"hero-code",children:[i.jsxs("div",{children:[i.jsx("span",{className:"t-kw",children:"const"})," ",i.jsx("span",{className:"t-var",children:"dev"})," ",i.jsx("span",{className:"t-op",children:"="})," ","{"]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"name"}),": ",i.jsxs("span",{className:"t-str",children:['"',o,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"role"}),": ",i.jsxs("span",{className:"t-str",children:['"',E,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"github"}),": ",i.jsxs("span",{className:"t-str",children:['"@',_,'"']}),","]}),i.jsxs("div",{className:"t-indent",children:[i.jsx("span",{className:"t-key",children:"status"}),": ",i.jsx("span",{className:"t-str",children:'"available"'})]}),i.jsx("div",{children:"}"})]})]})]})]})]})}const we={githubUsername:"05solar",displayName:"leeosolha",tagline:"풀스택 개발자",email:"lotus05f@gmail.com",linkedinUrl:"https://www.linkedin.com/in/solha-lee-7a9127409/",projectCount:11,pinnedRepos:["checkmiteV1","jbig","edu-msa","GO","MSA-restaurant","By-Tomorrow","GLML","GMG","RAG-agent","MCP-shopbot","OV-clonecoding","Auto-PPT"],excludedRepos:["my-letter-site","PF","p2","portfolio","GMG","edu-msa"],descriptions:{checkmiteV1:"YOLO로 소형개체(천적응애)를 자동 분류·탐지하여 개체 수·밀도·활력도·증식률을 측정합니다.",jbig:"전북 외국인 근로자·유학생을 대상으로 공식문서를 기반으로 체류·행정과 노동 문제에 대한 챗봇 서비스와 함께, 서류를 넣으면 불법 요소 탐색과 서류 설명을 제공합니다.","edu-msa":"교육청 직원이 단기 교육에서 만든 프로그램을 내부 저장소에 올리면, 표준 규격만 지키면 자동으로 하나의 MSA 서비스로 띄워 바로 쓸 수 있게 하는 사내 포털입니다. React·Spring Boot 3·MariaDB·Kubernetes로 구성한 단독 프로젝트입니다.",GO:"브라우저에서 바로 두는 바둑·오목. 서버 없이 웹워커에서 MCTS·알파베타 AI가 3단계 난이도로 상대합니다.","MSA-restaurant":"식당 서비스를 마이크로서비스로 구현한 프로젝트. JWT 게이트웨이와 Auth·Menu·Order·Review 서비스를 Docker Compose 한 번으로 띄웁니다.","By-Tomorrow":"시험까지 남은 시간과 강의자료를 AI가 분석해 실현 가능한 벼락치기 커리큘럼을 짜 주는 서비스. 로그인 없이 8자리 코드로 접근합니다.",GLML:"조건(지역·동행·시간·메뉴)을 분석해 맛집을 추천하는 AI 에이전트. 판단→도구 호출→검토의 ReAct 흐름을 화면에 그대로 시각화합니다.",GMG:"'비선호'를 먼저 걸러 모두가 무난한 시간·장소·메뉴를 찾아 주는 모임 약속 서비스. 카카오맵으로 장소를 함께 고릅니다.","RAG-agent":"PDF를 올려 내용을 묻는 RAG 챗봇에 졸업요건·도서추천·시설안내 에이전트를 더한 프로젝트. 답변 LLM과 평가 LLM 결과를 나란히 보여줍니다.","MCP-shopbot":"상품 DB를 MCP로 연동한 한국어 쇼핑 도우미. Tool Calling으로 상품 검색·상세 조회·재고 확인을 처리합니다.","OV-clonecoding":"올리브영 메인을 React로 구현한 클론 코딩. 카테고리 드로어·자동 캐러셀·상품 라우팅·반응형까지 커머스 UI 흐름을 재현했습니다.","Auto-PPT":"문서를 넣으면 편집 가능한 PowerPoint(.pptx)를 자동 생성하는 로컬 웹앱. API 키 없이 로그인된 Claude Code·Codex CLI를 웹에서 구동합니다."},focus:{checkmiteV1:[["CV","YOLO Object Detection"]],jbig:[["RAG","공식문서 검색"],["LLM","다국어 챗봇"],["OCR","서류 분석"]],GO:[["Board Game","바둑 · 오목"],["AI","MCTS · Alpha-Beta"]],"MSA-restaurant":[["MSA","Spring Cloud Gateway"],["Auth","JWT"],["Infra","Docker Compose"]],"By-Tomorrow":[["LLM","Gemini"],["AI","문서 분석"]],GLML:[["AI Agent","ReAct"],["LLM","Tool Calling"]],GMG:[["추천","비선호 필터"],["Map","Kakao API"]],"RAG-agent":[["RAG","PDF QA"],["AI Agent","DB 상담"]],"MCP-shopbot":[["MCP","Tool Calling"],["LLM","쇼핑 도우미"]],"OV-clonecoding":[["Frontend","React"],["UI","반응형"]],"Auto-PPT":[["LLM","슬라이드 생성"],["CLI","Claude Code · Codex"]],"edu-msa":[["MSA","서비스 자동 배포"],["Infra","Kubernetes"],["Auth","JWT"]]}},ps=["#C0392B","#C2410C","#A16207","#15803D","#0F766E","#2563EB","#4F46E5","#8E44AD","#C2185B","#5C6F2B","#3B4953","#FF84BA","#FF6B35","#744577","#A98B76","#3291B6","#B77466"],O0=(()=>{const o={};let E=0;for(const _ of Object.values(we.focus))for(const[f]of _)f in o||(o[f]=ps[E%ps.length],E+=1);return o})();function wu(o){return O0[o]??ps[0]}function Hd(o){const E=o.replace("#",""),_=v=>v<=.03928?v/12.92:((v+.055)/1.055)**2.4,f=_(parseInt(E.slice(0,2),16)/255),b=_(parseInt(E.slice(2,4),16)/255),A=_(parseInt(E.slice(4,6),16)/255),O=.2126*f+.7152*b+.0722*A,q=1.05/(O+.05),D=(O+.05)/.05;return q>=D?"#fff":"#1f2937"}const z0=[{title:"프론트엔드",color:"#4f46e5",items:["React","TypeScript","Next.js","Tailwind CSS"]},{title:"백엔드",color:"#2563eb",items:["Node.js","NestJS","Python","Spring"]},{title:"데이터베이스",color:"#0ea5e9",items:["PostgreSQL","MongoDB","Redis"]},{title:"DevOps · 인프라",color:"#6366f1",items:["Docker","Kubernetes","AWS","GitHub Actions"]}];function R0({langStats:o,langReady:E,showSkeleton:_,showError:f}){return i.jsxs("section",{id:"stack",className:"section stack",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"TECH STACK"}),i.jsx("h2",{className:"section-title",children:"기술 스택"}),i.jsx("p",{className:"section-desc",children:"실무에서 사용하는 도구들과, GitHub 저장소에서 집계한 실제 언어 사용 비율입니다."})]}),i.jsxs("div",{className:"stack-grid",children:[i.jsx("div",{className:"stack-cards","data-reveal":!0,style:{transitionDelay:".05s"},children:z0.map(b=>i.jsxs("div",{className:"stack-card",children:[i.jsxs("div",{className:"stack-card-title",children:[i.jsx("span",{className:"stack-card-mark",style:{background:b.color}}),b.title]}),i.jsx("div",{className:"stack-chips",children:b.items.map(A=>i.jsx("span",{className:"stack-chip",children:A},A))})]},b.title))}),i.jsxs("div",{className:"lang-panel","data-reveal":!0,style:{transitionDelay:".1s"},children:[i.jsxs("div",{className:"lang-panel-head",children:[i.jsx("span",{className:"lang-panel-title",children:"언어 사용 비율"}),i.jsx("span",{className:"lang-panel-src",children:"from GitHub"})]}),E&&i.jsxs("div",{children:[i.jsx("div",{className:"lang-bar",children:o.map(b=>i.jsx("div",{className:"lang-bar-seg",style:{width:b.width,background:b.color}},b.name))}),i.jsx("div",{className:"lang-list",children:o.map(b=>i.jsxs("div",{className:"lang-row",children:[i.jsx("span",{className:"lang-dot",style:{background:b.color}}),i.jsx("span",{className:"lang-name",children:b.name}),i.jsx("span",{className:"lang-pct",children:b.pctText})]},b.name))})]}),_&&i.jsxs("div",{className:"lang-skeleton",children:[i.jsx("div",{className:"sk sk-dark"}),i.jsx("div",{className:"sk sk-dark",style:{width:"70%"}}),i.jsx("div",{className:"sk sk-dark",style:{width:"55%"}})]}),f&&i.jsx("p",{className:"lang-empty",children:"언어 데이터를 불러오지 못했습니다."})]})]})]})}const Rd="flip",C0=650,U0="cubic-bezier(0.4, 0, 0.2, 1)";function G0(){const o=Ee.useRef(null),E=Ee.useCallback(()=>{const _=o.current;if(!_)return;const f=Array.from(_.children),b=f.map(A=>A.getBoundingClientRect());requestAnimationFrame(()=>{f.forEach((A,O)=>{const q=b[O];if(!q)return;const D=A.getBoundingClientRect(),v=q.left-D.left,Y=q.top-D.top,U=Math.abs(q.width-D.width)>.5;if(!v&&!Y&&!U)return;A.getAnimations().filter(ne=>ne.id===Rd).forEach(ne=>ne.cancel());const Q={transform:`translate(${v}px, ${Y}px)`},se={transform:"none"};U&&(Q.width=`${q.width}px`,se.width=`${D.width}px`),A.animate([Q,se],{id:Rd,duration:C0,easing:U0})})})},[]);return{listRef:o,captureFlip:E}}function B0(o,E=220){const _=String(o||"").replace(/\r/g,"").split(`
`),f=[];let b=!1;for(const O of _){const q=O.trim();if(/^```/.test(q)){b=!b;continue}if(b)continue;if(!q){if(f.length)break;continue}if(/^#{1,6}\s/.test(q)||/^[-=*_]{3,}$/.test(q))continue;const D=q.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/<[^>]+>/g,"").trim();D&&f.push(D)}const A=f.join(" ").replace(/<!--[\s\S]*?-->/g," ").replace(/`([^`]+)`/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^\s*[-*+]\s+/g,"").replace(/[*_>#`]/g,"").replace(/\s+/g," ").trim();return A.length<=E?A:`${A.slice(0,E).replace(/\s+\S*$/,"").trimEnd()}…`}function gs(o,E){const _=String(o||"").trim();if(!_)return"";if(/^https?:\/\//i.test(_))return _;if(_.startsWith("//"))return`https:${_}`;if(!E)return _;try{return new URL(_,E).href}catch{return _}}function H0(o,E=""){const _=String(o||""),f=[];let b;const A=/!\[[^\]]*\]\(\s*([^)\s]+)[^)]*\)/g;for(;b=A.exec(_);)f.push({idx:b.index,src:b[1]});const O=/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;for(;b=O.exec(_);)f.push({idx:b.index,src:b[1]});if(!f.length)return null;f.sort((v,Y)=>v.idx-Y.idx);const q=v=>/shields\.io|img\.shields|\bbadge\b|flat-square|circleci|codecov|coveralls|travis|\/workflows\/|actions\/workflow|badgen|forthebadge/i.test(v),D=f.find(v=>!q(v.src));return D?gs(D.src,E):null}function Ta(o,E=""){const _=String(o),f=/(\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\))|(!\[[^\]]*\]\([^)]*\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))|(\*[^*]+\*)|(_[^_]+_)/g,b=[];let A=0,O=0,q;for(;q=f.exec(_);){q.index>A&&b.push(_.slice(A,q.index));const D=q[0];if(D.startsWith("[![")){const v=/\[!\[([^\]]*)\]\(([^)]*)\)\]\(([^)]*)\)/.exec(D);v&&b.push(i.jsx("a",{href:v[3],target:"_blank",rel:"noopener noreferrer",children:i.jsx("img",{className:"md-img",src:gs(v[2],E),alt:v[1],loading:"lazy"})},O++))}else if(D.startsWith("![")){const v=/!\[([^\]]*)\]\(([^)]*)\)/.exec(D);v&&b.push(i.jsx("img",{className:"md-img",src:gs(v[2],E),alt:v[1],loading:"lazy"},O++))}else if(D[0]==="`")b.push(i.jsx("code",{className:"md-code",children:D.slice(1,-1)},O++));else if(D.slice(0,2)==="**")b.push(i.jsx("strong",{children:D.slice(2,-2)},O++));else if(D[0]==="["){const v=/\[([^\]]+)\]\(([^)]+)\)/.exec(D);v&&b.push(i.jsx("a",{href:v[2],target:"_blank",rel:"noopener noreferrer",children:v[1]},O++))}else b.push(i.jsx("em",{children:D.slice(1,-1)},O++));A=f.lastIndex}return A<_.length&&b.push(_.slice(A)),b}function Ld(o,E=""){const f=String(o||"").replace(/<!--[\s\S]*?-->/g,"").replace(/<img\b[^>]*>/gi,v=>{const Y=(/\bsrc\s*=\s*["']([^"']+)["']/i.exec(v)||[])[1]||"",U=(/\balt\s*=\s*["']([^"']*)["']/i.exec(v)||[])[1]||"";return Y?`

![${U}](${Y})

`:""}).replace(/<picture\b[^>]*>|<\/picture>|<source\b[^>]*>/gi,"").replace(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(v,Y,U)=>{const Q=String(U).replace(/<[^>]+>/g,"").trim();return Q?`[${Q}](${Y})`:""}).replace(/<\/?[a-z][^>]*>/gi,"").split(/\r?\n/),b=[];let A=0,O=0;const q=v=>/\|/.test(v)&&/^[\s|:\-]+$/.test(v);for(;A<f.length;){const v=f[A];if(/^\s*```/.test(v)){const Q=[];for(A++;A<f.length&&!/^\s*```/.test(f[A]);)Q.push(f[A]),A++;A++,b.push(i.jsx("pre",{className:"md-pre",children:Q.join(`
`)},O++));continue}const Y=/^(#{1,6})\s+(.*)$/.exec(v);if(Y){const Q=Y[1].length,se=Q<=2?"h3":"h4";b.push(i.jsx(se,{className:`md-h md-h${Q}`,children:Ta(Y[2],E)},O++)),A++;continue}if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(v)){b.push(i.jsx("hr",{className:"md-hr"},O++)),A++;continue}if(/^\s*[-*+]\s+/.test(v)){const Q=[];for(;A<f.length&&/^\s*[-*+]\s+/.test(f[A]);)Q.push(f[A].replace(/^\s*[-*+]\s+/,"")),A++;b.push(i.jsx("ul",{className:"md-ul",children:Q.map((se,ne)=>i.jsx("li",{children:Ta(se,E)},ne))},O++));continue}if(/^\s*\d+\.\s+/.test(v)){const Q=[];for(;A<f.length&&/^\s*\d+\.\s+/.test(f[A]);)Q.push(f[A].replace(/^\s*\d+\.\s+/,"")),A++;b.push(i.jsx("ol",{className:"md-ol",children:Q.map((se,ne)=>i.jsx("li",{children:Ta(se,E)},ne))},O++));continue}if(/^\s*>/.test(v)){const Q=[];for(;A<f.length&&/^\s*>/.test(f[A]);)Q.push(f[A].replace(/^\s*>\s?/,"")),A++;b.push(i.jsx("blockquote",{className:"md-quote",children:Ta(Q.join(" "),E)},O++));continue}if(/^\s*$/.test(v)||q(v)){A++;continue}const U=[v];for(A++;A<f.length&&!/^\s*$/.test(f[A])&&!/^\s*#{1,6}\s/.test(f[A])&&!/^\s*```/.test(f[A])&&!/^\s*[-*+]\s+/.test(f[A])&&!/^\s*\d+\.\s+/.test(f[A])&&!/^\s*>/.test(f[A])&&!q(f[A]);)U.push(f[A]),A++;b.push(i.jsx("p",{className:"md-p",children:Ta(U.join(" "),E)},O++))}const D=b.slice(0,70);return b.length>70&&D.push(i.jsx("p",{className:"md-more",children:"… 전체 내용은 GitHub에서 확인하세요."},"more")),i.jsx("div",{className:"md",children:D})}const L0={CV:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),RAG:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m21 21-4.3-4.3"})]}),LLM:i.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),OCR:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),i.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),i.jsx("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),i.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),i.jsx("path",{d:"M7 9h8"}),i.jsx("path",{d:"M7 13h6"})]}),"Board Game":i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"1"}),i.jsx("path",{d:"M3 9h18"}),i.jsx("path",{d:"M3 15h18"}),i.jsx("path",{d:"M9 3v18"}),i.jsx("path",{d:"M15 3v18"})]}),AI:i.jsx("path",{d:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"}),"AI Agent":i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"4",y:"8",width:"16",height:"12",rx:"2"}),i.jsx("path",{d:"M12 8V5"}),i.jsx("circle",{cx:"12",cy:"4",r:"1"}),i.jsx("path",{d:"M9 13h.01"}),i.jsx("path",{d:"M15 13h.01"}),i.jsx("path",{d:"M9 17h6"})]}),MSA:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1"}),i.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1"}),i.jsx("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),i.jsx("path",{d:"M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"}),i.jsx("path",{d:"M12 13v2"})]}),Auth:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"4",y:"11",width:"16",height:"10",rx:"2"}),i.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),Infra:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"7",rx:"1"}),i.jsx("rect",{x:"3",y:"13",width:"18",height:"7",rx:"1"}),i.jsx("path",{d:"M7 7.5h.01"}),i.jsx("path",{d:"M7 16.5h.01"})]}),추천:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M7 10v11"}),i.jsx("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]}),Map:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),i.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),MCP:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M9 2v6"}),i.jsx("path",{d:"M15 2v6"}),i.jsx("path",{d:"M6 8h12v3a6 6 0 0 1-12 0z"}),i.jsx("path",{d:"M12 17v5"})]}),Frontend:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"M2 9h20"}),i.jsx("path",{d:"M6 6.5h.01"}),i.jsx("path",{d:"M9 6.5h.01"})]}),UI:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),i.jsx("path",{d:"M3 9h18"}),i.jsx("path",{d:"M9 21V9"})]}),CLI:i.jsxs(i.Fragment,{children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),i.jsx("path",{d:"m7 9 3 3-3 3"}),i.jsx("path",{d:"M13 15h4"})]})},q0=i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 9h16"}),i.jsx("path",{d:"M4 15h16"}),i.jsx("path",{d:"M10 3 8 21"}),i.jsx("path",{d:"M16 3l-2 18"})]});function qd({field:o,size:E=12}){return i.jsx("svg",{className:"repo-focus-ico",width:E,height:E,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:L0[o]??q0})}function Y0({repo:o,open:E,onToggle:_}){const f=Ee.useRef(null);Ee.useEffect(()=>{if(!E)return;const O=f.current;if(!O)return;const q=requestAnimationFrame(()=>{let D=0,v=O;for(;v;)D+=v.offsetTop,v=v.offsetParent;const Y=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||66;window.scrollTo({top:Math.max(0,D-Y-16),behavior:"smooth"})});return()=>cancelAnimationFrame(q)},[E]);const b=O=>O.stopPropagation(),A=O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),_())};return i.jsxs("article",{ref:f,className:`repo${E?" is-open":""}`,role:"button",tabIndex:0,"aria-expanded":E,onClick:_,onKeyDown:A,children:[i.jsx("div",{className:"repo-accent"}),i.jsxs("div",{className:"repo-body",children:[o.image&&i.jsx("div",{className:"repo-cover",children:i.jsx("img",{src:o.image,alt:`${o.name} 미리보기`,loading:"lazy"})}),i.jsxs("div",{className:"repo-top",children:[o.url?i.jsxs("a",{className:"repo-name",href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:b,children:[i.jsx(Xu,{size:19,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}):i.jsxs("span",{className:"repo-name",children:[i.jsx(Xu,{size:19,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}),i.jsxs("div",{className:"repo-stats",children:[i.jsxs("span",{className:"repo-stat",children:[i.jsx("span",{className:"repo-lang-dot",style:{background:o.langColor}}),o.language]}),i.jsxs("span",{className:"repo-stat",children:["★ ",o.stars]}),i.jsxs("span",{className:"repo-stat",children:["⑂ ",o.forks]})]})]}),i.jsx("div",{className:"repo-eyebrow",children:"프로젝트 소개"}),i.jsx("p",{className:"repo-desc",children:o.preview}),o.focus.length>0&&i.jsx("div",{className:"repo-focus",children:o.focus.map(([O,q])=>i.jsxs("span",{className:"repo-focus-badge",children:[i.jsxs("span",{className:"repo-focus-key",children:[i.jsx(qd,{field:O}),O]}),i.jsx("span",{className:"repo-focus-val",style:{background:wu(O),color:Hd(wu(O))},children:q})]},`${O}-${q}`))}),o.stack.length>0&&i.jsxs("div",{className:"repo-stack-section",children:[i.jsx("div",{className:"repo-eyebrow",children:"기술 스택"}),i.jsx("div",{className:"repo-stack",children:o.stack.map(O=>i.jsx("span",{className:"repo-stack-chip",children:O},O))})]}),i.jsxs("div",{className:"repo-actions",children:[i.jsxs("span",{className:"repo-toggle",children:[i.jsx(Bd,{size:16,className:"repo-chevron"}),E?"README 접기":"README 자세히 보기"]}),o.demoUrl&&i.jsxs("a",{className:"btn btn-outline",href:o.demoUrl,target:"_blank",rel:"noopener noreferrer",onClick:b,children:[i.jsx(T0,{size:15,className:"icon-green"}),"데모 사이트"]}),o.url&&i.jsx("a",{className:"btn btn-soft",href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:b,children:"깃허브 바로가기 →"}),i.jsx("span",{className:"repo-updated",children:o.updatedText})]}),i.jsx("div",{className:"repo-readme-wrap",onClick:b,children:i.jsx("div",{className:"repo-readme-inner",children:i.jsxs("div",{className:"repo-readme",children:[i.jsx("div",{className:"repo-eyebrow",children:"README · 코드 설명"}),o.readmeText.trim()?i.jsx("div",{className:"readme-box",children:Ld(o.readmeText,o.readmeBase)}):i.jsxs("p",{className:"readme-error",children:["README 내용을 표시할 수 없습니다."," ",i.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:b,children:"GitHub에서 보기 →"})]})]})})})]})]})}function Q0({repo:o,open:E,onToggle:_}){const f=b=>b.stopPropagation();return i.jsxs("div",{className:`repo-row${E?" is-open":""}`,children:[i.jsxs("div",{className:"repo-row-head",children:[o.url?i.jsxs("a",{className:"repo-row-name",href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:f,children:[i.jsx(Xu,{size:18,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}):i.jsxs("span",{className:"repo-row-name",children:[i.jsx(Xu,{size:18,className:"repo-name-icon"}),i.jsx("span",{children:o.name})]}),o.focus.length>0&&i.jsx("div",{className:"repo-row-focus",children:o.focus.map(([b,A])=>i.jsxs("span",{className:"repo-focus-badge",children:[i.jsxs("span",{className:"repo-focus-key",children:[i.jsx(qd,{field:b}),b]}),i.jsx("span",{className:"repo-focus-val",style:{background:wu(b),color:Hd(wu(b))},children:A})]},`${b}-${A}`))}),i.jsxs("button",{type:"button",className:"repo-row-toggle",onClick:_,"aria-expanded":E,children:[i.jsx(Bd,{size:16,className:"repo-chevron"}),E?"README 접기":"README 자세히 보기"]})]}),i.jsx("div",{className:"repo-readme-wrap",onClick:f,children:i.jsx("div",{className:"repo-readme-inner",children:i.jsxs("div",{className:"repo-readme",children:[i.jsx("div",{className:"repo-eyebrow",children:"README · 코드 설명"}),o.readmeText.trim()?i.jsx("div",{className:"readme-box",children:Ld(o.readmeText,o.readmeBase)}):i.jsxs("p",{className:"readme-error",children:["README 내용을 표시할 수 없습니다."," ",i.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:f,children:"GitHub에서 보기 →"})]})]})})})]})}function V0({topRepos:o,githubUrl:E,showSkeleton:_,showError:f,showEmpty:b,readmeErrored:A,onRetry:O}){const{listRef:q,captureFlip:D}=G0(),[v,Y]=Ee.useState("card"),[U,Q]=Ee.useState(null),se=G=>{D(),Q(J=>J===G?null:G)},ne=G=>{G!==v&&(Q(null),Y(G))};return i.jsx("section",{id:"projects",className:"section-full projects",children:i.jsxs("div",{className:"projects-inner",children:[i.jsxs("div",{className:"projects-head","data-reveal":!0,children:[i.jsxs("div",{children:[i.jsx("span",{className:"eyebrow",children:"PROJECTS"}),i.jsx("h2",{className:"section-title",children:"포트폴리오"}),i.jsx("p",{className:"section-desc",children:"README가 등록된 저장소만 모았습니다. 카드를 누르면 펼쳐지며 전체 README와 코드 설명을 볼 수 있어요."})]}),i.jsx("a",{className:"projects-all",href:E,target:"_blank",rel:"noopener noreferrer",children:"전체 저장소 →"})]}),o.length>0&&i.jsx("div",{className:"view-toggle-bar","data-reveal":!0,children:i.jsxs("div",{className:"view-toggle",role:"tablist","aria-label":"프로젝트 보기 방식",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":v==="card",className:`view-toggle-btn${v==="card"?" is-active":""}`,onClick:()=>ne("card"),children:[i.jsx(N0,{size:15}),"카드형"]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":v==="list",className:`view-toggle-btn${v==="list"?" is-active":""}`,onClick:()=>ne("list"),children:[i.jsx(_0,{size:15}),"리스트형"]})]})}),o.length>0&&(v==="card"?i.jsx("div",{className:"repo-list",ref:q,children:o.map(G=>i.jsx(Y0,{repo:G,open:U===G.id,onToggle:()=>se(G.id)},G.id))}):i.jsx("div",{className:"repo-rows",ref:q,children:o.map(G=>i.jsx(Q0,{repo:G,open:U===G.id,onToggle:()=>se(G.id)},G.id))})),_&&i.jsx("div",{className:"repo-skeleton-grid",children:Array.from({length:6}).map((G,J)=>i.jsx("div",{className:"sk sk-light repo-skeleton-card"},J))}),f&&i.jsxs("div",{className:"repo-error",children:[i.jsx("p",{children:"GitHub 저장소를 불러오지 못했습니다. (API 호출 한도일 수 있어요)"}),i.jsx("button",{className:"btn btn-primary",onClick:O,children:"다시 시도"})]}),b&&i.jsxs("div",{className:"repo-error",children:[i.jsx("p",{children:A?"README를 불러오지 못했습니다. (GitHub API 호출 한도일 수 있어요)":"표시할 README가 있는 저장소를 찾지 못했습니다."}),A&&i.jsx("button",{className:"btn btn-primary",onClick:O,children:"다시 시도"})]})]})})}const X0=["#eef1f7","#9db0ef","#5f79e6","#3247cf","#1c2a91"],w0=14;function Z0({weeks:o}){const E=[];let _=-1;return o.forEach((f,b)=>{const A=f.find(O=>O);if(A){const O=new Date(`${A.date}T00:00:00`).getMonth();O!==_&&(E.push({ci:b,mo:O}),_=O)}}),i.jsxs("div",{className:"heatmap",children:[i.jsx("div",{className:"heatmap-months",children:E.map((f,b)=>i.jsxs("span",{className:"heatmap-month",style:{left:f.ci*w0},children:[f.mo+1,"월"]},b))}),i.jsx("div",{className:"heatmap-grid",children:o.map((f,b)=>i.jsx("div",{className:"heatmap-week",children:f.map((A,O)=>i.jsx("div",{className:"heatmap-cell",title:A?`${A.date}: ${A.count}`:"",style:{background:A?X0[A.level]:"transparent"}},O))},b))})]})}function K0({statContrib:o,weeks:E,contribReady:_,showSkeleton:f,showError:b}){return i.jsxs("section",{id:"activity",className:"section activity",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"ACTIVITY"}),i.jsx("h2",{className:"section-title",children:"GitHub 활동"})]}),i.jsxs("div",{className:"activity-card","data-reveal":!0,style:{transitionDelay:".05s"},children:[i.jsxs("div",{className:"activity-stat",children:[i.jsx("span",{className:"activity-stat-num",children:o}),i.jsx("span",{className:"activity-stat-label",children:"최근 1년 기여"})]}),_&&i.jsx("div",{className:"activity-scroll",children:i.jsx(Z0,{weeks:E})}),f&&i.jsx("div",{className:"sk sk-light activity-skeleton"}),b&&i.jsx("p",{className:"activity-empty",children:"기여 그래프를 불러오지 못했습니다."}),i.jsxs("div",{className:"heatmap-legend",children:[i.jsx("span",{children:"Less"}),i.jsx("span",{className:"legend-swatch legend-0"}),i.jsx("span",{className:"legend-swatch legend-1"}),i.jsx("span",{className:"legend-swatch legend-2"}),i.jsx("span",{className:"legend-swatch legend-3"}),i.jsx("span",{className:"legend-swatch legend-4"}),i.jsx("span",{children:"More"})]})]})]})}const k0=[{title:"2026 오픈소스 SW 해커톤",medal:"🥇",prize:"대상",honor:"총장상",organizer:"전북대학교 SW중심사업단"},{title:"2026 SW 산학실전캡스톤",medal:"🥇",prize:"대상",honor:"SW사업단장상",organizer:"전북대학교 SW중심사업단"},{title:"2026 호남권 SW중심대학사업 LLM 해커톤",medal:"🥈",prize:"우수상",organizer:"조선대학교 SW중심사업단"},{title:"2025 동계 한동대 빅데이터 캠프",medal:"🥈",prize:"우수상",organizer:"한동대 빅데이터혁신융합대학",period:"2026.01.13 ~ 2026.01.16"},{title:"2025 전북대 AI 경진대회",medal:"🥉",prize:"동상",organizer:"전북대학교 SW중심사업단"},{title:"2024 하계 한동대 빅데이터 캠프",medal:"🥈",prize:"우수상",organizer:"한동대 빅데이터혁신융합대학",period:"2024.07.16 ~ 2024.07.19"}];function J0(){return i.jsxs("section",{id:"achievements",className:"section achievements",children:[i.jsxs("div",{className:"section-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow",children:"ACHIEVEMENTS & EXPERIENCE"}),i.jsx("h2",{className:"section-title",children:"수상 내역 · 경력 사항"})]}),i.jsxs("div",{className:"achievements-stack",children:[i.jsxs("div",{className:"achievements-panel","data-reveal":!0,children:[i.jsx("div",{className:"achievements-panel-head",children:i.jsx("h3",{className:"achievements-heading",children:"수상 내역"})}),i.jsx("ul",{className:"achievements-list",children:k0.map(o=>i.jsxs("li",{className:"achievement-item",children:[i.jsxs("div",{className:"achievement-content",children:[i.jsx("h4",{children:o.title}),i.jsx("p",{className:"achievement-meta",children:o.organizer})]}),i.jsxs("div",{className:"achievement-details",children:[i.jsxs("span",{className:"achievement-prize",children:[o.prize," ",i.jsx("span",{className:"achievement-medal","aria-hidden":"true",children:o.medal}),"honor"in o&&i.jsxs("span",{className:"achievement-honor",children:[" · ",o.honor]})]}),"period"in o&&i.jsx("span",{className:"achievement-period",children:o.period})]})]},o.title))})]}),i.jsxs("div",{className:"achievements-panel","data-reveal":!0,children:[i.jsx("div",{className:"achievements-panel-head",children:i.jsx("h3",{className:"achievements-heading",children:"경력 사항"})}),i.jsxs("div",{className:"experience-item",children:[i.jsxs("div",{className:"experience-content",children:[i.jsx("h4",{children:"(주)헤드아이티"}),i.jsx("p",{className:"achievement-description",children:"GPU 서버 기반 RAG 서비스 환경 구축"})]}),i.jsxs("div",{className:"achievement-details",children:[i.jsx("span",{className:"achievement-prize",children:"인턴"}),i.jsx("span",{className:"achievement-period",children:"2026.07 ~ 2026.08"})]})]})]})]})]})}function W0({login:o,email:E,githubUrl:_,linkedinUrl:f}){const b=f.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");return i.jsx("section",{id:"contact",className:"section-full contact",children:i.jsxs("div",{className:"contact-inner",children:[i.jsxs("div",{className:"contact-head","data-reveal":!0,children:[i.jsx("span",{className:"eyebrow eyebrow-light",children:"CONTACT"}),i.jsx("h2",{className:"contact-title",children:"함께 만들어요"}),i.jsx("p",{className:"contact-desc",children:"새로운 기회나 협업 제안은 언제든 환영합니다. 아래 채널로 편하게 연락 주세요."})]}),i.jsxs("div",{className:"contact-cards","data-reveal":!0,style:{transitionDelay:".05s"},children:[i.jsxs("a",{className:"contact-card",href:_,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Ud,{size:24}),i.jsx("span",{className:"contact-card-label",children:"GitHub"}),i.jsxs("span",{className:"contact-card-val",children:["@",o]})]}),i.jsxs("a",{className:"contact-card",href:`mailto:${E}`,children:[i.jsx(j0,{size:24}),i.jsx("span",{className:"contact-card-label",children:"Email"}),i.jsx("span",{className:"contact-card-val",children:E})]}),i.jsxs("a",{className:"contact-card",href:f,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Gd,{size:24}),i.jsx("span",{className:"contact-card-label",children:"LinkedIn"}),i.jsx("span",{className:"contact-card-val",children:b})]})]})]})})}function $0({name:o,login:E}){return i.jsxs("footer",{className:"footer",children:["© 2026 ",o," · Built with live GitHub data · @",E]})}function F0(){const[o,E]=Ee.useState(!1);Ee.useEffect(()=>{const f=()=>E(window.scrollY>400);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const _=()=>window.scrollTo({top:0,behavior:"smooth"});return i.jsx("button",{type:"button",className:`scroll-top${o?" is-visible":""}`,onClick:_,"aria-label":"맨 위로 이동",title:"맨 위로",children:i.jsx(M0,{size:22})})}function I0(o){const[E,_]=Ee.useState(null),[f,b]=Ee.useState([]),[A,O]=Ee.useState(!1),[q,D]=Ee.useState(null),[v,Y]=Ee.useState(!1),[U,Q]=Ee.useState(0),se=Ee.useCallback(()=>Q(ne=>ne+1),[]);return Ee.useEffect(()=>{const ne=o.trim();if(!ne)return;let G=!1;return O(!1),Y(!1),fetch(`https://api.github.com/users/${ne}`).then(J=>J.ok?J.json():Promise.reject(J.status)).then(J=>{G||_(J)}).catch(()=>{}),fetch(`https://api.github.com/users/${ne}/repos?per_page=100&sort=updated`).then(J=>J.ok?J.json():Promise.reject(J.status)).then(J=>{if(!G){const xe=new Set(we.pinnedRepos);b((Array.isArray(J)?J:[]).filter(Oe=>!Oe.fork||xe.has(Oe.name)))}}).catch(()=>{G||O(!0)}),fetch(`https://github-contributions-api.jogruber.de/v4/${ne}?y=last`).then(J=>J.ok?J.json():Promise.reject()).then(J=>{G||D(J)}).catch(()=>{G||Y(!0)}),()=>{G=!0}},[o,U]),{user:E,repos:f,reposError:A,contrib:q,contribError:v,reload:se}}const Yd={checkmiteV1:{baseUrl:"https://raw.githubusercontent.com/05solar/checkmiteV1/HEAD/",text:`# Checkmite

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
`}};function P0(o,E,_){const f=E.join("|");return Ee.useMemo(()=>{const b={};for(const A of E){const O=Yd[A];b[A]=O?{status:"done",text:O.text,baseUrl:O.baseUrl}:{status:"missing",text:"",baseUrl:""}}return b},[f])}function ev(o){Ee.useEffect(()=>{const E=new WeakSet,_=new IntersectionObserver(A=>{A.forEach(O=>{O.isIntersecting&&(O.target.classList.add("is-in"),_.unobserve(O.target))})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});(()=>{document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(A=>{E.has(A)||(E.add(A),_.observe(A))})})();const b=window.setTimeout(()=>{document.querySelectorAll("[data-reveal]").forEach(A=>A.classList.add("is-in"))},2500);return()=>{_.disconnect(),window.clearTimeout(b)}},[o])}const tv={JavaScript:"#f1e05a",TypeScript:"#3178c6",Python:"#3572A5",Java:"#b07219",HTML:"#e34c26",CSS:"#563d7c",SCSS:"#c6538c",Go:"#00ADD8",Rust:"#dea584","C++":"#f34b7d",C:"#555555","C#":"#178600",Shell:"#89e051",Vue:"#41b883",Dart:"#00B4AB",Kotlin:"#A97BFF",Swift:"#F05138",Ruby:"#701516",PHP:"#4F5D95",Jupyter:"#DA5B0B","Jupyter Notebook":"#DA5B0B",Dockerfile:"#384d54"},Zu=o=>o&&tv[o]||"#94a3b8",lv=o=>{if(!o)return"";const E=new Date(o);return`${E.getFullYear()}.${String(E.getMonth()+1).padStart(2,"0")} 업데이트`},Cd=o=>o.startsWith("http")?o:`https://${o}`,nv=o=>{const E=[];let _=new Array(7).fill(null);return o.forEach(f=>{const b=new Date(`${f.date}T00:00:00`).getDay();_[b]=f,b===6&&(E.push(_),_=new Array(7).fill(null))}),_.some(f=>f)&&E.push(_),E},av=[{name:"TypeScript",re:/\btypescript\b|\btsx\b/i},{name:"JavaScript",re:/\bjavascript\b|\bes6\b/i},{name:"Python",re:/\bpython\b/i},{name:"Java",re:/\bjava\b/i},{name:"Kotlin",re:/\bkotlin\b/i},{name:"Swift",re:/\bswift\b/i},{name:"Dart",re:/\bdart\b/i},{name:"Ruby",re:/\bruby\b/i},{name:"PHP",re:/\bphp\b/i},{name:"C#",re:/\bc#|\bc\s?sharp\b/i},{name:"C++",re:/\bc\+\+/i},{name:"HTML",re:/\bhtml5?\b/i},{name:"CSS",re:/\bcss3?\b/i},{name:"Sass",re:/\bs[ac]ss\b/i},{name:"React",re:/\breact\b/i},{name:"Next.js",re:/\bnext\.?js\b/i},{name:"Nuxt",re:/\bnuxt\b/i},{name:"Vue",re:/\bvue\b/i},{name:"Svelte",re:/\bsvelte\b/i},{name:"Angular",re:/\bangular\b/i},{name:"Vite",re:/\bvite\b/i},{name:"Tailwind CSS",re:/\btailwind\b/i},{name:"Redux",re:/\bredux\b/i},{name:"Zustand",re:/\bzustand\b/i},{name:"styled-components",re:/styled-components/i},{name:"Streamlit",re:/\bstreamlit\b/i},{name:"Node.js",re:/\bnode(\.?js)?\b/i},{name:"Express",re:/\bexpress\b/i},{name:"NestJS",re:/\bnest(\.?js)?\b/i},{name:"FastAPI",re:/\bfastapi\b/i},{name:"Flask",re:/\bflask\b/i},{name:"Django",re:/\bdjango\b/i},{name:"Spring Boot",re:/\bspring\s?boot\b/i},{name:"Spring",re:/\bspring\b(?!\s?boot)/i},{name:"GraphQL",re:/\bgraphql\b/i},{name:"PostgreSQL",re:/\bpostgres(ql)?\b/i},{name:"MySQL",re:/\bmysql\b/i},{name:"MongoDB",re:/\bmongo(db)?\b/i},{name:"Redis",re:/\bredis\b/i},{name:"SQLite",re:/\bsqlite\b/i},{name:"Supabase",re:/\bsupabase\b/i},{name:"Firebase",re:/\bfirebase\b/i},{name:"Prisma",re:/\bprisma\b/i},{name:"OpenAI API",re:/\bopenai\b/i},{name:"LangChain",re:/\blangchain\b/i},{name:"RAG",re:/\brag\b/i},{name:"MCP",re:/\bmcp\b/i},{name:"PyTorch",re:/\bpytorch\b/i},{name:"TensorFlow",re:/\btensorflow\b/i},{name:"Docker",re:/\bdocker\b/i},{name:"Kubernetes",re:/\bkubernetes\b|\bk8s\b/i},{name:"AWS",re:/\baws\b/i},{name:"Vercel",re:/\bvercel\b/i},{name:"Netlify",re:/\bnetlify\b/i},{name:"GitHub Actions",re:/\bgithub\s?actions\b/i},{name:"Nginx",re:/\bnginx\b/i},{name:"n8n",re:/\bn8n\b/i},{name:"Swagger",re:/\bswagger\b/i},{name:"Jupyter",re:/\bjupyter\b/i},{name:"Kakao Map",re:/\bkakao\s?map\b/i},{name:"Google Maps",re:/\bgoogle\s?maps\b/i}];function Qd(o){const E=[o.readme||"",o.description||"",(o.name||"").replace(/[-_]/g," "),(o.topics||[]).join(" ")].join(`
`),_=new Set,f=[],b=A=>{_.has(A)||(_.add(A),f.push(A))};o.language&&b(o.language);for(const A of av)A.re.test(E)&&b(A.name);return f.slice(0,8)}const uv="/PF/assets/gmg-cover-ya7No8Ee.png",cv="/PF/assets/edu-msa-cover-DFKxmEPu.png",Vd="/PF/assets/ov-clonecoding-cover-C8BMnGqb.png",Xd=we.githubUsername.trim()||"05solar",It=(o,E)=>`https://raw.githubusercontent.com/${Xd}/${o}/HEAD/${E}`,iv=[{name:"checkmiteV1",language:"TypeScript",image:It("checkmiteV1","docs/screenshot.png")},{name:"jbig",language:"Python",image:It("jbig","docs/images/home.png")},{name:"edu-msa",language:"TypeScript",image:cv,url:""},{name:"GO",language:"TypeScript",image:It("GO","docs/screenshot.png"),demoUrl:"https://05solar.github.io/GO/"},{name:"MSA-restaurant",language:"Java",image:It("MSA-restaurant","assets/customer.png")},{name:"By-Tomorrow",language:"Java",image:It("By-Tomorrow","docs/screenshots/overview.png")},{name:"GLML",language:"TypeScript",image:It("GLML","docs/preview-1.png")},{name:"GMG",language:"Java",image:uv,url:"https://github.com/project-GMG"},{name:"RAG-agent",language:"Python",image:It("RAG-agent","docs/assets/readme-preview.png")},{name:"MCP-shopbot",language:"Python",image:It("MCP-shopbot","assets/image.png")},{name:"OV-clonecoding",language:"JavaScript",image:Vd},{name:"Auto-PPT",language:"Python",image:It("Auto-PPT","docs/images/full-screenshot.png")}],sv=iv.map((o,E)=>{const _=we.descriptions[o.name]||"",f=Yd[o.name];return{id:-1-E,name:o.name,url:o.url??`https://github.com/${Xd}/${o.name}`,preview:_||"프로젝트 소개는 GitHub 저장소에서 확인하세요.",readmeText:(f==null?void 0:f.text)||"",readmeBase:(f==null?void 0:f.baseUrl)||"",image:o.image,language:o.language,langColor:Zu(o.language),stars:0,forks:0,updatedText:"",stack:Qd({readme:_,name:o.name,language:o.language}),focus:we.focus[o.name]||[],demoUrl:o.demoUrl??null}}),fv=[{name:"TypeScript",pct:30},{name:"JavaScript",pct:28},{name:"Python",pct:22},{name:"HTML",pct:9},{name:"CSS",pct:7},{name:"Java",pct:4}].map(({name:o,pct:E})=>({name:o,color:Zu(o),width:`${E}%`,pctText:`${E}%`}));function ov(){const o=we.githubUsername.trim()||"05solar",E=Math.max(3,Math.min(12,we.projectCount)),[_,f]=Ee.useState(0),{user:b,repos:A,reposError:O,contrib:q,contribError:D,reload:v}=I0(o),Y=Ee.useMemo(()=>{const J=new Set(we.excludedRepos),xe=A.filter(pe=>!J.has(pe.name)),Oe=we.pinnedRepos.map(pe=>xe.find(je=>je.name===pe)).filter(pe=>!!pe),Te=new Set(Oe.map(pe=>pe.name)),Ze=xe.filter(pe=>!Te.has(pe.name)).sort((pe,je)=>je.stargazers_count-pe.stargazers_count||new Date(je.updated_at).getTime()-new Date(pe.updated_at).getTime());return[...Oe,...Ze]},[A]),U=Ee.useMemo(()=>Y.slice(0,E+6).map(J=>J.name),[Y,E]),Q=P0(o,U),se=Ee.useMemo(()=>{const J=new Set(we.pinnedRepos);return Y.filter(xe=>{var Te;const Oe=(Te=Q[xe.name])==null?void 0:Te.status;return J.has(xe.name)?Oe==="done"||Oe==="missing":Oe==="done"}).slice(0,E)},[Y,Q,E]);ev(`${!!b}-${A.length}-${!!q}`);const ne=()=>{f(J=>J+1),v()},G=Ee.useMemo(()=>{const J=we.displayName.trim()||(b==null?void 0:b.name)||o,xe=we.tagline.trim()||"풀스택 개발자",Oe=(J||"D").trim().charAt(0).toUpperCase(),Te=se.map(z=>{const K=z.homepage&&String(z.homepage).trim(),de=Q[z.name],ye=(de==null?void 0:de.text)||"";return{id:z.id,name:z.name,url:z.html_url,readmeText:ye,readmeBase:(de==null?void 0:de.baseUrl)||"",image:H0(ye,(de==null?void 0:de.baseUrl)||"")||(z.name==="OV-clonecoding"?Vd:null),preview:we.descriptions[z.name]||B0(ye)||z.description||"README는 등록되어 있지만 미리볼 설명이 없습니다. 카드를 눌러 전체 내용을 확인하세요.",language:z.language||"기타",langColor:Zu(z.language),stars:z.stargazers_count,forks:z.forks_count,updatedText:lv(z.updated_at),stack:Qd({readme:ye,description:z.description,name:z.name,language:z.language,topics:z.topics}),focus:we.focus[z.name]||[],demoUrl:K?Cd(K):null}}),Ze=U.some(z=>{var K;return((K=Q[z])==null?void 0:K.status)==="error"}),pe={};A.forEach(z=>{z.language&&(pe[z.language]=(pe[z.language]||0)+1)});const je=Object.entries(pe).sort((z,K)=>K[1]-z[1]),F=je.reduce((z,K)=>z+K[1],0),Le=je.slice(0,6).map(([z,K])=>{const de=F?Math.round(K/F*100):0;return{name:z,color:Zu(z),width:`${de}%`,pctText:`${de}%`}}),nt=q?(q.contributions||[]).reduce((z,K)=>z+K.count,0):null,Pt=nt!=null?nt.toLocaleString():"—",vt=q?nv(q.contributions||[]):[],Ke=(b==null?void 0:b.bio)||"// 빠르게 배우고, 끝까지 책임지는 개발자",Ct=we.email.trim()||(b==null?void 0:b.email)||`${o}@gmail.com`,Je=(b==null?void 0:b.blog)&&String(b.blog).trim(),at=Je?Cd(Je):`https://github.com/${o}`,T=Je?Je.replace(/^https?:\/\//,""):(b==null?void 0:b.location)||"블로그 / 웹사이트",R=Je?"Website":b!=null&&b.location?"Location":"Website",w=A.length>0,ae=!!q,fe=new Map(Te.map(z=>[z.name,z])),m=new Map(sv.map(z=>[z.name,z])),N=we.pinnedRepos.map(z=>fe.get(z)||m.get(z)).filter(z=>!!z),C=!w&&!O,B=Le.length>0?Le:C?[]:fv,Z=B.length>0;return{name:J,tagline:xe,initial:Oe,githubUrl:`https://github.com/${o}`,linkedinUrl:we.linkedinUrl.trim(),avatarUrl:`https://github.com/${o}.png?size=240`,bio:Ke,email:Ct,blogUrl:at,blogText:T,blogLabel:R,topRepos:N,langStats:B,statContrib:Pt,weeks:vt,readmeErrored:Ze,showReposSkeleton:!1,showReposError:!1,showReposEmpty:!1,langReady:Z,showLangSkeleton:C&&B.length===0,showLangError:!1,contribReady:ae,showContribSkeleton:!ae&&!D,showContribError:!ae&&D}},[b,A,O,q,D,Q,se,U,o]);return i.jsxs("div",{className:"page",children:[i.jsx(x0,{name:G.name,initial:G.initial}),i.jsx(D0,{name:G.name,tagline:G.tagline,login:o,githubUrl:G.githubUrl,linkedinUrl:G.linkedinUrl,avatarUrl:G.avatarUrl}),i.jsx(R0,{langStats:G.langStats,langReady:G.langReady,showSkeleton:G.showLangSkeleton,showError:G.showLangError}),i.jsx(K0,{statContrib:G.statContrib,weeks:G.weeks,contribReady:G.contribReady,showSkeleton:G.showContribSkeleton,showError:G.showContribError}),i.jsx(J0,{}),i.jsx(V0,{topRepos:G.topRepos,githubUrl:G.githubUrl,showSkeleton:G.showReposSkeleton,showError:G.showReposError,showEmpty:G.showReposEmpty,readmeErrored:G.readmeErrored,onRetry:ne}),i.jsx(W0,{login:o,email:G.email,githubUrl:G.githubUrl,linkedinUrl:G.linkedinUrl}),i.jsx($0,{name:G.name,login:o}),i.jsx(F0,{})]})}E0.createRoot(document.getElementById("root")).render(i.jsx(Ee.StrictMode,{children:i.jsx(ov,{})}));
