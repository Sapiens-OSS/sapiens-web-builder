(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ha=ca(this);function v(a,b){if(b)a:{var c=ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ha[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;na=ra.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function ta(){this.H=!1;this.j=null;this.h=void 0;this.g=1;this.u=this.o=0;this.S=this.i=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.M=function(a){this.h=a};
function va(a,b){a.i={nc:b,yc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function z(a,b,c){a.g=c;return{value:b}}
ta.prototype.B=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a){a.o=0;var b=a.i.nc;a.i=null;return b}
function ya(a){var b=a.S.splice(0)[0];(b=a.i=a.i||b)?b.yc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function za(a){this.g=new ta;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.j;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.j=null,va(a.g,g),Ca(a)}a.g.j=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.yc)throw b.nc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j.next,b,a.g.M):(a.g.M(b),b=Ca(a));return b};
this.throw=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j["throw"],b,a.g.M):(va(a.g,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new za(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ha.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.fb),reject:g(this.o)}};
b.prototype.fb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.hb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.vb(h,g):this.u(g)};
b.prototype.o=function(g){this.M(2,g)};
b.prototype.u=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.gb();this.S()};
b.prototype.gb=function(){var g=this;e(function(){if(g.oa()){var h=ha.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.H)return!1;var g=ha.CustomEvent,h=ha.Event,k=ha.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ha.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.S=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.hb=function(g){var h=this.j();g.yb(h.resolve,h.reject)};
b.prototype.vb=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(t){try{l(q(t))}catch(u){m(u)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.yb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.yb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).yb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(t){return function(u){q[t]=u;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).yb(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ja(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||sa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa:Sa;return Ta.apply(null,arguments)}
function Ua(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ne=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function db(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){C.console&&C.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(){}
function tb(a){return new sb(ub,a)}
var ub={};tb("");function vb(a){this.g=a}
vb.prototype.toString=function(){return this.g+""};
var wb={};var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a){this.g=a}
Fb.prototype.toString=function(){return this.g.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);var Ib,Jb=D("CLOSURE_FLAGS"),Kb=Jb&&Jb[610401301];Ib=null!=Kb?Kb:!1;function Lb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Mb,Nb=C.navigator;Mb=Nb?Nb.userAgentData||null:null;function Tb(a){return Ib?Mb?Mb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Lb().indexOf(a)}
;function Ub(){return Ib?!!Mb&&0<Mb.brands.length:!1}
function Vb(){return Ub()?!1:F("Trident")||F("MSIE")}
function Wb(){return Ub()?Tb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Ub()?0:F("Edge"))||F("Silk")}
;function Xb(a){this.g=a}
Xb.prototype.toString=function(){return this.g.toString()};function Yb(a){Eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;")));return a}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a){return $b(a.match(Zb)[3]||null)}
function bc(a){var b=a.match(Zb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
var ec=/#|$/;function fc(a,b){var c=a.search(ec);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function gc(a){C.setTimeout(function(){throw a;},0)}
;function hc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function ic(a){ic[" "](a);return a}
ic[" "]=function(){};var jc=Ub()?!1:F("Opera"),kc=Vb(),lc=F("Edge"),mc=F("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),nc=-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge");function oc(){var a=C.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=function(){var a=Lb();if(mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(lc)return/Edge\/([\d\.]+)/.exec(a);if(kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nc)return/WebKit\/(\S+)/.exec(a);if(jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rc&&(qc=rc?rc[1]:"");if(kc){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var xc=pc,yc;if(C.document&&kc){var zc=oc();yc=zc?zc:parseInt(xc,10)||void 0}else yc=void 0;var Ac=yc;var Bc=hc()||F("iPod"),Cc=F("iPad");!F("Android")||Wb();Wb();var Dc=F("Safari")&&!(Wb()||(Ub()?0:F("Coast"))||(Ub()?0:F("Opera"))||(Ub()?0:F("Edge"))||(Ub()?Tb("Microsoft Edge"):F("Edg/"))||(Ub()?Tb("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(hc()||F("iPad")||F("iPod"));var Ec={},Fc=null;
function Gc(a,b){La(a);void 0===b&&(b=0);if(!Fc){Fc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fc[h]&&(Fc[h]=g)}}}b=Ec[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Hc="undefined"!==typeof Uint8Array,Ic=!kc&&"function"===typeof btoa;function Jc(a){return Array.prototype.slice.call(a)}
;var Kc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({ae:1,Yd:2,Xd:4,de:8,ce:16,be:32,Qd:64,ee:128,Vd:256,Ud:512,Zd:1024})));var Lc=Kc?function(a,b){a[Kc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Mc(a){var b=H(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Jc(a)),Nc(a,b|1))}
var Oc=Kc?function(a,b){a[Kc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)},H=Kc?function(a){return a[Kc]|0}:function(a){return a.ga|0},Pc=Kc?function(a){return a[Kc]}:function(a){return a.ga},Nc=Kc?function(a,b){a[Kc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Qc(){var a=[];Lc(a,1);return a}
function Rc(a,b){Nc(b,(a|0)&-255)}
function Sc(a,b){Nc(b,(a|34)&-221)}
function Tc(a){a=a>>11&1023;return 0===a?536870912:a}
;var Uc={};function Vc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Wc,Xc,Yc=[];Nc(Yc,55);Xc=Object.freeze(Yc);function Zc(a){if(a&2)throw Error();}
;function $c(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function ad(){var a=Error();$c(a,"incident");gc(a)}
function bd(){var a=Error();$c(a,"warning");return a}
;function cd(a){return a.displayName||a.name||"unknown type name"}
function dd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return!!a}
var ed=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function fd(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function gd(a){if(!fd(a))throw bd();var b=typeof a;("number"===b?Number.isFinite(a):"string"!==b?0:ed.test(a))||ad();"string"===typeof a?fd(a):fd(a);return a}
function hd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function id(a){return null==a||"string"===typeof a?a:void 0}
function jd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+cd(b)+" but got "+(a&&cd(a.constructor)));return a}
function kd(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Xb===Uc)return a;if(d){var e=d=H(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Nc(a,e);return new b(a)}}
;var od;function I(a,b,c){null==a&&(a=od);od=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Vc(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(pd(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(pd(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}Nc(a,d);return a}
function pd(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function qd(a,b){return rd(b)}
function rd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Hc&&null!=a&&a instanceof Uint8Array){if(Ic){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Gc(a);return a}}return a}
;function sd(a,b,c){a=Jc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function td(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&H(a)&1?void 0:f&&H(a)&2?a:ud(a,b,c,void 0!==d,e,f);else if(Vc(a)){var g={},h;for(h in a)g[h]=td(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function ud(a,b,c,d,e,f){var g=d||c?H(a):0;d=d?!!(g&32):void 0;a=Jc(a);for(var h=0;h<a.length;h++)a[h]=td(a[h],b,c,d,e,f);c&&c(g,a);return a}
function vd(a){return a.Xb===Uc?a.toJSON():rd(a)}
;function wd(a,b,c){c=void 0===c?Sc:c;if(null!=a){if(Hc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Nc(a,d|34),d&4&&Object.freeze(a),a):ud(a,wd,d&4?Sc:c,!0,!1,!0)}a.Xb===Uc&&(c=a.s,d=Pc(c),a=d&2?a:xd(a,c,d,!0));return a}}
function xd(a,b,c,d){a=a.constructor;b=yd(b,c,d);H(b);od=b;b=new a(b);od=void 0;return b}
function yd(a,b,c){var d=c||b&2?Sc:Rc,e=!!(b&32);a=sd(a,b,function(f){return wd(f,e,d)});
Lc(a,32|(c?2:0));return a}
;function zd(a,b){a=a.s;return Ad(a,Pc(a),b)}
function Ad(a,b,c,d){if(-1===c)return null;if(c>=Tc(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Bd(a,b,c){var d=a.s,e=Pc(d);Zc(e);Cd(d,e,b,c);return a}
function Cd(a,b,c,d,e){Vc(d);var f=Tc(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Nc(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Dd(a,b,c,d){var e=b&2,f=Ad(a,b,c);Array.isArray(f)||(f=Xc);var g=!(d&2),h=!(d&1);d=!!(b&32);var k=H(f);0!==k||!d||e||g?k&1||(k|=1,Nc(f,k)):(k|=33,Nc(f,k));e?(k&2||Lc(f,34),h&&Object.freeze(f)):(e=k&2,h&&e?(f=Jc(f),e=1,d&&!g&&(e|=32),Nc(f,e),Cd(a,b,c,f)):g&&k&32&&!e&&Oc(f,32));return f}
function Ed(a,b,c,d){a=a.s;var e=Pc(a);Zc(e);(c=Fd(a,e,c))&&c!==b&&null!=d&&Cd(a,e,c);Cd(a,e,b,d)}
function Gd(a,b,c){a=a.s;return Fd(a,Pc(a),b)===c?c:-1}
function Fd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Ad(a,b,f)&&(0!==d&&Cd(a,b,d),d=f)}return d}
function Hd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Pc(e),g=Ad(e,f,c,d);b=kd(g,b,f);b!==g&&null!=b&&Cd(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Pc(a);if(!(f&2)){g=e;b=g.s;var h=Pc(b);g=h&2?xd(g,b,h,!1):g;g!==e&&(e=g,Cd(a,f,c,e,d))}return e}
function Id(a,b,c,d){d=void 0===d?!1:d;var e=H(a),f=e|5;b=b?f|8:f&-9;b=c?b|16:b&-17;e!=b&&(Object.isFrozen(a)&&(a=Jc(a)),Nc(a,b),!d&&b&2&&Object.freeze(a));return a}
function J(a,b,c,d){null!=d?jd(d,b):d=void 0;return Bd(a,c,d)}
function Jd(a,b,c,d,e){null!=e?jd(e,b):e=void 0;Ed(a,c,d,e)}
function Kd(a,b,c,d){a=a.s;var e=Pc(a);Zc(e);var f=!!(e&2),g=Dd(a,e,b,1);if(g!==Xc&&H(g)&4){if(f)f=H(g),g=Jc(g),Nc(g,f),Cd(a,e,b,g);else{f=Object.isFrozen(g);var h=H(g);var k=h&-33;f||h&2?(g=Jc(g),Nc(g,k&-3),Cd(a,e,b,g)):h!==k&&Nc(g,k)}b=g}else{h=!!(e&2);k=!!(H(g)&2);f=g;!h&&k&&(g=Jc(g));k=k||void 0;h=e|(k?2:0);for(var l=!1,m=0,n=0;m<g.length;m++){var q=kd(g[m],c,h);if(null!=q){var p=!!(H(q.s)&2);k=k||p;l=l||!p;g[n++]=q}}n<m&&(g.length=n);g=Id(g,!k,!l,!0);f!==g&&Cd(a,e,b,g);b=g}c=null!=d?jd(d,c):
new c;b.push(c);H(c.s)&2?Oc(b,8):Oc(b,16)}
function Ld(a,b){var c=void 0===c?"":c;a=id(zd(a,b));return null!=a?a:c}
function Md(a,b){b=Gd(a,Nd,b);return id(zd(a,b))}
function Od(a,b,c){if(null!=c){if("number"!==typeof c)throw bd();Number.isFinite(c)||ad()}Bd(a,b,c)}
function Pd(a,b,c){Bd(a,b,null==c?c:gd(c))}
function K(a,b,c){return Bd(a,b,hd(c))}
function Qd(a,b,c){null!=c&&(Number.isFinite(c)||ad());return Bd(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(Wc)var a=Rd(this,this.s,!1);else a=ud(this.s,vd,void 0,void 0,!1,!1),a=Rd(this,a,!0);return a};
function Sd(a){Wc=!0;try{return JSON.stringify(a.toJSON(),qd)}finally{Wc=!1}}
L.prototype.clone=function(){var a=this.s;return xd(this,a,Pc(a),!1)};
L.prototype.Xb=Uc;L.prototype.toString=function(){return Rd(this,this.s,!1).toString()};
function Rd(a,b,c){var d=a.constructor.ma,e=Pc(c?a.s:b),f=Tc(e);e=!1;if(d){if(!c){b=Jc(b);var g;if(b.length&&Vc(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Pc(a.s);a=Tc(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var m=g[k];null==m?g[k]=c?Xc:Qc():c&&m!==Xc&&Mc(m)}else h||(m=void 0,g.length&&Vc(m=g[g.length-1])?h=m:g.push(h={})),m=h[k],null==h[k]?h[k]=c?Xc:Qc():c&&m!==Xc&&Mc(m)}d=b.length;if(!d)return b;var n;
if(Vc(h=b[d-1])){a:{var q=h;g={};c=!1;for(var p in q)a=q[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var t in g){q=g;break a}q=null}}q!=h&&(n=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var u=!0}if(!n&&!u)return b;var A;e?A=b:A=Array.prototype.slice.call(b,0,d);b=A;e&&(b.length=d);q&&b.push(q);return b}
;var Td=window;tb("csi.gstatic.com");tb("googleads.g.doubleclick.net");tb("partner.googleadservices.com");tb("pubads.g.doubleclick.net");tb("securepubads.g.doubleclick.net");tb("tpc.googlesyndication.com");function Ud(a,b){this.width=a;this.height=b}
r=Ud.prototype;r.clone=function(){return new Ud(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Rb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Wd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Xd(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Yd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Zd[c])c=Zd[c];else{c=String(c);if(!Zd[c]){var f=/function\s+([^\(]+)/m.exec(c);Zd[c]=f?f[1]:"[Anonymous]"}c=Zd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Yd(a,b){b||(b={});b[$d(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[$d(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Yd(a,b));return c}
function $d(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Zd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var ae="function"===typeof URL;function be(){throw Error("unknown trace type");}
;var ce={Td:0,Wd:1,Rd:2,Sd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function de(a,b){b=Error.call(this,a+" cannot be used with intent "+ce[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(de,Error);
function ee(a,b){a.removeAttribute("srcdoc");if(b instanceof vb)throw new de("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Fb)b instanceof Fb&&b.constructor===Fb?b=b.g:(Ka(b),b="type_error:SafeUrl");else{b:if(ae){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function fe(a){this.od=a}
function ge(a){return new fe(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var he=[ge("data"),ge("http"),ge("https"),ge("mailto"),ge("ftp"),new fe(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function ie(a,b){b=void 0===b?he:b;if(a instanceof Fb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof fe&&d.od(a))return new Fb(a,Gb)}}
function je(a){var b=void 0===b?he:b;return ie(a,b)||Hb}
;function ke(a){var b=le;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function me(){var a=[];ke(function(b){a.push(b)});
return a}
var le={Fd:"allow-forms",Gd:"allow-modals",Hd:"allow-orientation-lock",Id:"allow-pointer-lock",Jd:"allow-popups",Kd:"allow-popups-to-escape-sandbox",Ld:"allow-presentation",Md:"allow-same-origin",Nd:"allow-scripts",Od:"allow-top-navigation",Pd:"allow-top-navigation-by-user-activation"},ne=$a(function(){return me()});
function oe(){var a=pe(),b={};cb(ne(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function pe(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var qe=(new Date).getTime();function re(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function se(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],A=e[3],G=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var R=A^t&(u^A);var S=1518500249}else R=t^u^A,S=1859775393;else 60>p?(R=t&u|A&(t|u),S=2400959708):(R=t^u^A,S=3395469782);R=((n<<5|n>>>27)&4294967295)+R+G+S+q[p]&4294967295;G=A;A=u;u=(t<<30|t>>>2)&4294967295;t=n;n=R}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Xc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function te(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,ue(re(d),a,c||null)].join(" "):null}
function ue(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],cb(d,function(h){e.push(h)}),ve(e.join(" "));
var f=[],g=[];cb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];cb(d,function(h){e.push(h)});
a=ve(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ve(a){var b=se();b.update(a);return b.Xc().toLowerCase()}
;var we={};function xe(a){this.g=a||{cookie:""}}
r=xe.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Rb())return!0;this.set("TESTCOOKIESENABLED","1",{Ub:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ue;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ub}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ub:0,path:b,domain:c});return d};
r.Rb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ye=new xe("undefined"==typeof document?null:document);function ze(a){return!!we.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ae(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new xe(document)).get(b));return a?te(a,c,d):null}
function Be(a){var b=void 0===b?!1:b;var c=re(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;ze(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new xe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");ze(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new xe(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?te(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ze(b)&&((b=Ae("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ae("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var Ce="undefined"!==typeof TextEncoder?new TextEncoder:null,De=Ce?function(a){return Ce.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Ee(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Fe(){this.Ia=this.Ia;this.oa=this.oa}
Fe.prototype.Ia=!1;Fe.prototype.dispose=function(){this.Ia||(this.Ia=!0,this.sa())};
Fe.prototype.sa=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function Ge(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Ge.prototype.stopPropagation=function(){this.i=!0};
Ge.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ke=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Le(a,b){Ge.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Va(Le,Ge);var Me={2:"touch",3:"pen",4:"mouse"};
Le.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(mc){a:{try{ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Me[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Le.na.preventDefault.call(this)};
Le.prototype.stopPropagation=function(){Le.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Le.prototype.preventDefault=function(){Le.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ne="closure_listenable_"+(1E6*Math.random()|0);var Oe=0;function Pe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Cb=e;this.key=++Oe;this.sb=this.xb=!1}
function Qe(a){a.sb=!0;a.listener=null;a.proxy=null;a.src=null;a.Cb=null}
;function Re(a){this.src=a;this.listeners={};this.g=0}
Re.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Se(a,b,d,e);-1<g?(b=a[g],c||(b.xb=!1)):(b=new Pe(b,this.src,f,!!d,e),b.xb=c,a.push(b));return b};
Re.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Se(e,b,c,d);return-1<b?(Qe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Te(a,b){var c=b.type;c in a.listeners&&db(a.listeners[c],b)&&(Qe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Se(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.sb&&f.listener==b&&f.capture==!!c&&f.Cb==d)return e}return-1}
;var Ue="closure_lm_"+(1E6*Math.random()|0),Ve={},We=0;function Xe(a,b,c,d,e){if(d&&d.once)Ye(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Xe(a,b[f],c,d,e);else c=Ze(c),a&&a[Ne]?a.Ma(b,c,Ma(d)?!!d.capture:!!d,e):$e(a,b,c,!1,d,e)}
function $e(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=af(a);h||(a[Ue]=h=new Re(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=bf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(cf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");We++}}
function bf(){function a(c){return b.call(a.src,a.listener,c)}
var b=df;return a}
function Ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else c=Ze(c),a&&a[Ne]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):$e(a,b,c,!0,d,e)}
function ef(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ef(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Ze(c),a&&a[Ne])?a.g.remove(String(b),c,d,e):a&&(a=af(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Se(b,c,d,e)),(c=-1<a?b[a]:null)&&ff(c))}
function ff(a){if("number"!==typeof a&&a&&!a.sb){var b=a.src;if(b&&b[Ne])Te(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(cf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);We--;(c=af(b))?(Te(c,a),0==c.g&&(c.src=null,b[Ue]=null)):Qe(a)}}}
function cf(a){return a in Ve?Ve[a]:Ve[a]="on"+a}
function df(a,b){if(a.sb)a=!0;else{b=new Le(b,this);var c=a.listener,d=a.Cb||a.src;a.xb&&ff(a);a=c.call(d,b)}return a}
function af(a){a=a[Ue];return a instanceof Re?a:null}
var gf="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ze(a){if("function"===typeof a)return a;a[gf]||(a[gf]=function(b){return a.handleEvent(b)});
return a[gf]}
;function hf(){Fe.call(this);this.g=new Re(this);this.M=this;this.u=null}
Va(hf,Fe);hf.prototype[Ne]=!0;hf.prototype.addEventListener=function(a,b,c,d){Xe(this,a,b,c,d)};
hf.prototype.removeEventListener=function(a,b,c,d){ef(this,a,b,c,d)};
function jf(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new Ge(b,a):b instanceof Ge?b.target=b.target||a:(e=b,b=new Ge(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=kf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=kf(g,c,!0,b)&&e,b.i||(e=kf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=kf(g,c,!1,b)&&e}
hf.prototype.sa=function(){hf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Qe(d[e]);delete a.listeners[c];a.g--}}this.u=null};
hf.prototype.Ma=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function kf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.sb&&g.capture==c){var h=g.listener,k=g.Cb||g.src;g.xb&&Te(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function lf(a){hf.call(this);var b=this;this.H=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.j=function(){return B(function(e){return z(e,mf(b),0)})};
window.addEventListener("offline",this.j);window.addEventListener("online",this.j);this.H||nf(this)}
y(lf,hf);function of(){var a=pf;lf.g||(lf.g=new lf(a));return lf.g}
lf.prototype.dispose=function(){window.removeEventListener("offline",this.j);window.removeEventListener("online",this.j);this.ha.ba(this.H);delete lf.g};
lf.prototype.ca=function(){return this.h};
function nf(a){a.H=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):z(c,mf(a),3):z(c,mf(a),3);nf(a);c.g=0})},3E4)}
function mf(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),z(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.S=[h.i];h.o=0;h.u=0;a.o=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?jf(a,"networkstatus-online"):jf(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.B(3)}})})}
;function qf(){this.data=[];this.g=-1}
qf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
qf.prototype.get=function(a){return!!this.data[a]};
function rf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function sf(a){this.s=I(a)}
y(sf,L);function tf(a){this.s=I(a)}
y(tf,L);function uf(a,b){return K(a,2,b)}
function vf(a,b){return K(a,3,b)}
function wf(a,b){return K(a,4,b)}
function xf(a,b){return K(a,5,b)}
function yf(a,b){return K(a,9,b)}
function zf(a,b){var c=a.s,d=Pc(c);Zc(d);if(null!=b){var e=!1,f=!0;if(!(H(b)&2)){e=!0;for(var g=0;g<b.length;g++){var h=b[g];jd(h,sf);h=!!(H(h.s)&2);e=e&&!h;f=f&&h}}b=Id(b,e,f)}null==b&&(b=void 0);Cd(c,d,10,b);return a}
function Af(a,b){return Bd(a,11,null==b?b:dd(b))}
function Bf(a,b){return K(a,1,b)}
function Cf(a,b){return Bd(a,7,null==b?b:dd(b))}
tf.ma=[10,6];var Df="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ef(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Ff(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Gf(){var a=window;if(!Ff(a))return null;var b=Ef(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Df).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Hf(a){var b;return Af(zf(xf(uf(Bf(wf(Cf(yf(vf(new tf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new sf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function If(){var a,b;return null!=(b=null==(a=Gf())?void 0:a.then(function(c){return Hf(c)}))?b:null}
;function Jf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Jf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Kf(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Lf;function Mf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Vd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.kc;c.kc=null;e()}};
return function(e){d.next={kc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Nf(){this.h=this.g=null}
Nf.prototype.add=function(a,b){var c=Of.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Nf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Of=new Jf(function(){return new Pf},function(a){return a.reset()});
function Pf(){this.next=this.scope=this.g=null}
Pf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Pf.prototype.reset=function(){this.next=this.scope=this.g=null};var Qf,Rf=!1,Sf=new Nf;function Tf(a,b){Qf||Uf();Rf||(Qf(),Rf=!0);Sf.add(a,b)}
function Uf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Qf=function(){a.then(Vf)}}else Qf=function(){var b=Vf;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Ub()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Lf||(Lf=Mf()),Lf(b)):C.setImmediate(b)}}
function Vf(){for(var a;a=Sf.remove();){try{a.g.call(a.scope)}catch(b){gc(b)}Kf(Of,a)}Rf=!1}
;function Wf(a,b){this.g=a[C.Symbol.iterator]();this.h=b}
Wf.prototype[Symbol.iterator]=function(){return this};
Wf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Xf(a,b){return new Wf(a,b)}
;function Yf(){this.blockSize=-1}
;function Zf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
Va(Zf,Yf);Zf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function $f(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Zf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)$f(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){$f(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){$f(this,e);f=0;break}}this.h=f;this.j+=b}};
Zf.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;$f(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function ag(){}
ag.prototype.next=function(){return bg};
var bg={done:!0,value:void 0};function cg(a){return{value:a,done:!1}}
ag.prototype.ia=function(){return this};function dg(a){if(a instanceof eg||a instanceof fg||a instanceof gg)return a;if("function"==typeof a.next)return new eg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new eg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new eg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function eg(a){this.h=a}
eg.prototype.ia=function(){return new fg(this.h())};
eg.prototype[Symbol.iterator]=function(){return new gg(this.h())};
eg.prototype.g=function(){return new gg(this.h())};
function fg(a){this.h=a}
y(fg,ag);fg.prototype.next=function(){return this.h.next()};
fg.prototype[Symbol.iterator]=function(){return new gg(this.h)};
fg.prototype.g=function(){return new gg(this.h)};
function gg(a){eg.call(this,function(){return a});
this.i=a}
y(gg,eg);gg.prototype.next=function(){return this.i.next()};function hg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hg)for(c=ig(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ig(a){jg(a);return a.g.concat()}
r=hg.prototype;r.has=function(a){return kg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||lg;jg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function lg(a,b){return a===b}
r.Rb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return kg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&jg(this),!0):!1};
function jg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];kg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],kg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return kg(this.h,a)?this.h[a]:b};
r.set=function(a,b){kg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=ig(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new hg(this)};
r.keys=function(){return dg(this.ia(!0)).g()};
r.values=function(){return dg(this.ia(!1)).g()};
r.entries=function(){var a=this;return Xf(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){jg(this);var b=0,c=this.i,d=this,e=new ag;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return bg;var f=d.g[b++];return cg(a?f:d.h[f])};
return e};
function kg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var mg=C.JSON.stringify;function ng(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function og(a){this.g=0;this.H=void 0;this.j=this.h=this.i=null;this.o=this.u=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){pg(b,2,c)},function(c){pg(b,3,c)})}catch(c){pg(this,3,c)}}
function qg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
qg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var rg=new Jf(function(){return new qg},function(a){a.reset()});
function sg(a,b,c){var d=rg.get();d.i=a;d.h=b;d.context=c;return d}
og.prototype.then=function(a,b,c){return tg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
og.prototype.$goog_Thenable=!0;og.prototype.cancel=function(a){if(0==this.g){var b=new ug(a);Tf(function(){vg(this,b)},this)}};
function vg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?vg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):wg(c),xg(c,e,3,b)))}a.i=null}else pg(a,3,b)}
function yg(a,b){a.h||2!=a.g&&3!=a.g||zg(a);a.j?a.j.next=b:a.h=b;a.j=b}
function tg(a,b,c,d){var e=sg(null,null,null);e.g=new og(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ug?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;yg(a,e);return e.g}
og.prototype.S=function(a){this.g=0;pg(this,2,a)};
og.prototype.oa=function(a){this.g=0;pg(this,3,a)};
function pg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.S,f=a.oa;if(d instanceof og){yg(d,sg(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){Ag(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,zg(a),3!=b||c instanceof ug||Bg(a,c))}}
function Ag(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function zg(a){a.u||(a.u=!0,Tf(a.M,a))}
function wg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
og.prototype.M=function(){for(var a;a=wg(this);)xg(this,a,this.g,this.H);this.u=!1};
function xg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Cg(b,c,d);else try{b.j?b.i.call(b.context):Cg(b,c,d)}catch(e){Dg.call(null,e)}Kf(rg,b)}
function Cg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Bg(a,b){a.o=!0;Tf(function(){a.o&&Dg.call(null,b)})}
var Dg=gc;function ug(a){Xa.call(this,a)}
Va(ug,Xa);ug.prototype.name="cancel";function M(a){Fe.call(this);this.o=1;this.i=[];this.j=0;this.g=[];this.h={};this.u=!!a}
Va(M,Fe);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.o=e+3;d.push(e);return e};
function Eg(a,b,c){var d=Fg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ub(a)}}
r.ub=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.g[a+1]=function(){}):(c&&db(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.cb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Gg(this.g[g+1],this.g[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f&&!this.Ia;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.ub(c)}}return 0!=e}return!1};
function Gg(a,b,c){Tf(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.ub,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Hg(a){this.g=a}
Hg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,mg(b))};
Hg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hg.prototype.remove=function(a){this.g.remove(a)};function Ig(a){this.g=a}
Va(Ig,Hg);function Jg(a){this.data=a}
function Kg(a){return void 0===a||a instanceof Jg?a:new Jg(a)}
Ig.prototype.set=function(a,b){Ig.na.set.call(this,a,Kg(b))};
Ig.prototype.h=function(a){a=Ig.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ig.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Lg(a){this.g=a}
Va(Lg,Ig);Lg.prototype.set=function(a,b,c){if(b=Kg(b)){if(c){if(c<Ua()){Lg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ua()}Lg.na.set.call(this,a,b)};
Lg.prototype.h=function(a){var b=Lg.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ua()||c&&c>Ua())Lg.prototype.remove.call(this,a);else return b}};function Mg(){}
;function Ng(){}
Va(Ng,Mg);Ng.prototype[Symbol.iterator]=function(){return dg(this.ia(!0)).g()};
Ng.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Og(a){this.g=a}
Va(Og,Ng);r=Og.prototype;r.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeItem(a)};
r.ia=function(a){var b=0,c=this.g,d=new ag;d.next=function(){if(b>=c.length)return bg;var e=c.key(b++);if(a)return cg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return cg(e)};
return d};
r.clear=function(){this.g.clear()};
r.key=function(a){return this.g.key(a)};function Pg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Va(Pg,Og);function Qg(a,b){this.h=a;this.g=null;var c;if(c=kc)c=!(9<=Number(Ac));if(c){Rg||(Rg=new hg);this.g=Rg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Rg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Va(Qg,Ng);var Sg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rg=null;function Tg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Sg[b]})}
r=Qg.prototype;r.set=function(a,b){this.g.setAttribute(Tg(a),b);Ug(this)};
r.get=function(a){a=this.g.getAttribute(Tg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(Tg(a));Ug(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new ag;d.next=function(){if(b>=c.length)return bg;var e=c[b++];if(a)return cg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return cg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ug(this)};
function Ug(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Vg(a,b){this.h=a;this.g=b+"::"}
Va(Vg,Ng);Vg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Vg.prototype.get=function(a){return this.h.get(this.g+a)};
Vg.prototype.remove=function(a){this.h.remove(this.g+a)};
Vg.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new ag;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return cg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Wg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.cc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Xg={Sa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
oc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Yg={Sa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
oc:function(a){return[].concat.apply([],a)}};
O.yd=function(){Wg?(O.Ra=Uint8Array,O.pa=Uint16Array,O.Mc=Int32Array,O.assign(O,Xg)):(O.Ra=Array,O.pa=Array,O.Mc=Array,O.assign(O,Yg))};
O.yd();var Zg=!0;try{new Uint8Array(1)}catch(a){Zg=!1}
function $g(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.Ra(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ah={};ah=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var bh={},ch,dh=[],eh=0;256>eh;eh++){ch=eh;for(var fh=0;8>fh;fh++)ch=ch&1?3988292384^ch>>>1:ch>>>1;dh[eh]=ch}bh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^dh[(a^b[d])&255];return a^-1};var gh={};gh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function hh(a){for(var b=a.length;0<=--b;)a[b]=0}
var ih=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],jh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],kh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],lh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],mh=Array(576);hh(mh);var nh=Array(60);hh(nh);var oh=Array(512);hh(oh);var ph=Array(256);hh(ph);var qh=Array(29);hh(qh);var rh=Array(30);hh(rh);function sh(a,b,c,d,e){this.Ic=a;this.bd=b;this.ad=c;this.Yc=d;this.sd=e;this.sc=a&&a.length}
var th,uh,vh;function wh(a,b){this.mc=a;this.Za=0;this.Da=b}
function xh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function yh(a,b,c){a.O>16-c?(a.V|=b<<a.O&65535,xh(a,a.V),a.V=b>>16-a.O,a.O+=c-16):(a.V|=b<<a.O&65535,a.O+=c)}
function zh(a,b,c){yh(a,c[2*b],c[2*b+1])}
function Ah(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Bh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Ah(d[e]++,e))}
function Ch(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ja[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.xa=a.eb=0;a.da=a.matches=0}
function Yh(a){8<a.O?xh(a,a.V):0<a.O&&(a.K[a.pending++]=a.V);a.V=0;a.O=0}
function Zh(a,b,c){Yh(a);xh(a,c);xh(a,~c);O.Sa(a.K,a.window,b,c,a.pending);a.pending+=c}
function $h(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ai(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.wa;){e<a.wa&&$h(b,a.L[e+1],a.L[e],a.depth)&&e++;if($h(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function bi(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.mb+2*d]<<8|a.K[a.mb+2*d+1];var f=a.K[a.Tb+d];d++;if(0===e)zh(a,f,b);else{var g=ph[f];zh(a,g+256+1,b);var h=ih[g];0!==h&&(f-=qh[g],yh(a,f,h));e--;g=256>e?oh[e]:oh[256+(e>>>7)];zh(a,g,c);h=jh[g];0!==h&&(e-=rh[g],yh(a,e,h))}}while(d<a.da)}zh(a,256,b)}
function ci(a,b){var c=b.mc,d=b.Da.Ic,e=b.Da.sc,f=b.Da.Yc,g,h=-1;a.wa=0;a.Va=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.L[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.eb-=d[2*k+1])}b.Za=h;for(g=a.wa>>1;1<=g;g--)ai(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.wa--],ai(a,c,1),d=a.L[1],a.L[--a.Va]=g,a.L[--a.Va]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,ai(a,c,1);while(2<=a.wa);a.L[--a.Va]=
a.L[1];g=b.mc;k=b.Za;d=b.Da.Ic;e=b.Da.sc;f=b.Da.bd;var l=b.Da.ad,m=b.Da.sd,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.L[a.Va]+1]=0;for(b=a.Va+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.eb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Bh(c,h,a.ra)}
function di(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ei(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do zh(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(zh(a,l,a.R),g--),zh(a,16,a.R),yh(a,g-3,2)):10>=g?(zh(a,17,a.R),yh(a,g-3,3)):(zh(a,18,a.R),yh(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function fi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var gi=!1;function hi(a,b,c){a.K[a.mb+2*a.da]=b>>>8&255;a.K[a.mb+2*a.da+1]=b&255;a.K[a.Tb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(ph[c]+256+1)]++,a.Ja[2*(256>b?oh[b]:oh[256+(b>>>7)])]++);return a.da===a.pb-1}
;function ii(a,b){a.msg=gh[b];return b}
function ji(a){for(var b=a.length;0<=--b;)a[b]=0}
function ki(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(O.Sa(a.output,b.K,b.rb,c,a.ab),a.ab+=c,b.rb+=c,a.dc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.rb=0))}
function P(a,b){var c=0<=a.Z?a.Z:-1,d=a.l-a.Z,e=0;if(0<a.level){2===a.C.Ob&&(a.C.Ob=fi(a));ci(a,a.Eb);ci(a,a.Ab);di(a,a.X,a.Eb.Za);di(a,a.Ja,a.Ab.Za);ci(a,a.ic);for(e=18;3<=e&&0===a.R[2*lh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.eb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)yh(a,b?1:0,3),Zh(a,c,d);else if(4===a.strategy||g===f)yh(a,2+(b?1:0),3),bi(a,mh,nh);else{yh(a,4+(b?1:0),3);c=a.Eb.Za+1;d=a.Ab.Za+1;e+=1;yh(a,c-257,5);yh(a,d-1,5);yh(a,e-4,4);for(f=0;f<e;f++)yh(a,a.R[2*lh[f]+
1],3);ei(a,a.X,c-1);ei(a,a.Ja,d-1);bi(a,a.X,a.Ja)}Ch(a);b&&Yh(a);a.Z=a.l;ki(a.C)}
function Q(a,b){a.K[a.pending++]=b}
function li(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function mi(a,b){var c=a.zc,d=a.l,e=a.aa,f=a.Ac,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Fa,l=a.la,m=a.l+258,n=h[d+e-1],q=h[d+e];a.aa>=a.qc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Ya=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function ni(a){var b=a.T,c;do{var d=a.Kc-a.m-a.l;if(a.l>=b+(b-262)){O.Sa(a.window,a.window,b,b,0);a.Ya-=b;a.l-=b;a.Z-=b;var e=c=a.Db;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.l+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,O.Sa(c,e.input,e.Pa,g,f),1===e.state.wrap?e.A=ah(e.A,c,g,f):2===e.state.wrap&&(e.A=bh(e.A,c,g,f)),e.Pa+=g,e.Qa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.l-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Fa]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function oi(a,b){for(var c;;){if(262>a.m){ni(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Fa]=a.head[a.D],a.head[a.D]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=mi(a,c));if(3<=a.G)if(c=hi(a,a.l-a.Ya,a.G-3),a.m-=a.G,a.G<=a.Vb&&3<=a.m){a.G--;do a.l++,a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Fa]=a.head[a.D],a.head[a.D]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.D=a.window[a.l],a.D=(a.D<<a.va^a.window[a.l+1])&a.ta;else c=hi(a,0,a.window[a.l]),
a.m--,a.l++;if(c&&(P(a,!1),0===a.C.F))return 1}a.Y=2>a.l?a.l:2;return 4===b?(P(a,!0),0===a.C.F?3:4):a.da&&(P(a,!1),0===a.C.F)?1:2}
function pi(a,b){for(var c,d;;){if(262>a.m){ni(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Fa]=a.head[a.D],a.head[a.D]=a.l);a.aa=a.G;a.Dc=a.Ya;a.G=2;0!==c&&a.aa<a.Vb&&a.l-c<=a.T-262&&(a.G=mi(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Ya)&&(a.G=2));if(3<=a.aa&&a.G<=a.aa){d=a.l+a.m-3;c=hi(a,a.l-1-a.Dc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.l<=d&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Fa]=a.head[a.D],a.head[a.D]=a.l);while(0!==
--a.aa);a.Na=0;a.G=2;a.l++;if(c&&(P(a,!1),0===a.C.F))return 1}else if(a.Na){if((c=hi(a,0,a.window[a.l-1]))&&P(a,!1),a.l++,a.m--,0===a.C.F)return 1}else a.Na=1,a.l++,a.m--}a.Na&&(hi(a,0,a.window[a.l-1]),a.Na=0);a.Y=2>a.l?a.l:2;return 4===b?(P(a,!0),0===a.C.F?3:4):a.da&&(P(a,!1),0===a.C.F)?1:2}
function qi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){ni(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=hi(a,1,a.G-3),a.m-=a.G,a.l+=a.G,a.G=0):(c=hi(a,0,a.window[a.l]),a.m--,a.l++);if(c&&(P(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(P(a,!0),0===a.C.F?3:4):a.da&&
(P(a,!1),0===a.C.F)?1:2}
function ri(a,b){for(var c;;){if(0===a.m&&(ni(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=hi(a,0,a.window[a.l]);a.m--;a.l++;if(c&&(P(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(P(a,!0),0===a.C.F?3:4):a.da&&(P(a,!1),0===a.C.F)?1:2}
function si(a,b,c,d,e){this.ed=a;this.rd=b;this.ud=c;this.qd=d;this.cd=e}
var ti;ti=[new si(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){ni(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.l+=a.m;a.m=0;var d=a.Z+c;if(0===a.l||a.l>=d)if(a.m=a.l-d,a.l=d,P(a,!1),0===a.C.F)return 1;if(a.l-a.Z>=a.T-262&&(P(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return P(a,!0),0===a.C.F?3:4;a.l>a.Z&&P(a,!1);return 1}),
new si(4,4,8,4,oi),new si(4,5,16,8,oi),new si(4,6,32,32,oi),new si(4,4,16,16,pi),new si(8,16,32,32,pi),new si(8,16,128,128,pi),new si(8,32,128,256,pi),new si(32,128,258,1024,pi),new si(32,258,258,4096,pi)];
function ui(){this.C=null;this.status=0;this.K=null;this.wrap=this.pending=this.rb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Wa=-1;this.Fa=this.ec=this.T=0;this.window=null;this.Kc=0;this.head=this.la=null;this.Ac=this.qc=this.strategy=this.level=this.Vb=this.zc=this.aa=this.m=this.Ya=this.l=this.Na=this.Dc=this.G=this.Z=this.va=this.ta=this.Pb=this.Db=this.D=0;this.X=new O.pa(1146);this.Ja=new O.pa(122);this.R=new O.pa(78);ji(this.X);ji(this.Ja);ji(this.R);this.ic=this.Ab=this.Eb=null;this.ra=
new O.pa(16);this.L=new O.pa(573);ji(this.L);this.Va=this.wa=0;this.depth=new O.pa(573);ji(this.depth);this.O=this.V=this.Y=this.matches=this.eb=this.xa=this.mb=this.da=this.pb=this.Tb=0}
function vi(a,b){if(!a||!a.state||5<b||0>b)return a?ii(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return ii(a,0===a.F?-5:-2);c.C=a;var d=c.Wa;c.Wa=b;if(42===c.status)if(2===c.wrap)a.A=0,Q(c,31),Q(c,139),Q(c,8),c.v?(Q(c,(c.v.text?1:0)+(c.v.Ba?2:0)+(c.v.Aa?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),Q(c,c.v.time&255),Q(c,c.v.time>>8&255),Q(c,c.v.time>>16&255),Q(c,c.v.time>>24&255),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,c.v.te&255),c.v.Aa&&c.v.Aa.length&&(Q(c,
c.v.Aa.length&255),Q(c,c.v.Aa.length>>8&255)),c.v.Ba&&(a.A=bh(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,3),c.status=113);else{var e=8+(c.ec-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;li(c,e+(31-e%31));0!==c.l&&(li(c,a.A>>>16),li(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.Aa){for(e=c.pending;c.fa<(c.v.Aa.length&65535)&&(c.pending!==c.ea||(c.v.Ba&&c.pending>
e&&(a.A=bh(a.A,c.K,c.pending-e,e)),ki(a),e=c.pending,c.pending!==c.ea));)Q(c,c.v.Aa[c.fa]&255),c.fa++;c.v.Ba&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e));c.fa===c.v.Aa.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e)),ki(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-
e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e)),ki(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>e&&(a.A=bh(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ba?(c.pending+2>c.ea&&ki(a),c.pending+2<=c.ea&&(Q(c,a.A&255),Q(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(ki(a),0===a.F)return c.Wa=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ii(a,-5);if(666===c.status&&0!==a.U)return ii(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?ri(c,b):3===c.strategy?qi(c,b):ti[c.level].cd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Wa=-1),0;if(2===d&&(1===b?(yh(c,2,3),zh(c,256,mh),16===c.O?(xh(c,c.V),c.V=0,c.O=0):8<=c.O&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.O-=
8)):5!==b&&(yh(c,0,3),Zh(c,0,0),3===b&&(ji(c.head),0===c.m&&(c.l=0,c.Z=0,c.Y=0))),ki(a),0===a.F))return c.Wa=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Q(c,a.A&255),Q(c,a.A>>8&255),Q(c,a.A>>16&255),Q(c,a.A>>24&255),Q(c,a.Qa&255),Q(c,a.Qa>>8&255),Q(c,a.Qa>>16&255),Q(c,a.Qa>>24&255)):(li(c,a.A>>>16),li(c,a.A&65535));ki(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var wi={};wi=function(){this.input=null;this.Qa=this.U=this.Pa=0;this.output=null;this.dc=this.F=this.ab=0;this.msg="";this.state=null;this.Ob=2;this.A=0};var xi=Object.prototype.toString;
function yi(a){if(!(this instanceof yi))return new yi(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,Ga:15,td:8,strategy:0,Ea:""},a||{});a.raw&&0<a.Ga?a.Ga=-a.Ga:a.fd&&0<a.Ga&&16>a.Ga&&(a.Ga+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new wi;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ga,f=a.td,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ii(b,-2);else{8===e&&(e=9);var k=new ui;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.ec=e;k.T=1<<k.ec;k.Fa=k.T-1;k.Pb=f+7;k.Db=1<<k.Pb;k.ta=k.Db-1;k.va=~~((k.Pb+3-1)/3);k.window=new O.Ra(2*k.T);k.head=new O.pa(k.Db);k.la=new O.pa(k.T);k.pb=1<<f+6;k.ea=4*k.pb;k.K=new O.Ra(k.ea);k.mb=1*k.pb;k.Tb=3*k.pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Qa=b.dc=0;b.Ob=2;c=b.state;c.pending=0;c.rb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Wa=0;if(!gi){d=Array(16);for(f=g=0;28>f;f++)for(qh[f]=g,e=0;e<1<<ih[f];e++)ph[g++]=
f;ph[g-1]=f;for(f=g=0;16>f;f++)for(rh[f]=g,e=0;e<1<<jh[f];e++)oh[g++]=f;for(g>>=7;30>f;f++)for(rh[f]=g<<7,e=0;e<1<<jh[f]-7;e++)oh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)mh[2*e+1]=8,e++,d[8]++;for(;255>=e;)mh[2*e+1]=9,e++,d[9]++;for(;279>=e;)mh[2*e+1]=7,e++,d[7]++;for(;287>=e;)mh[2*e+1]=8,e++,d[8]++;Bh(mh,287,d);for(e=0;30>e;e++)nh[2*e+1]=5,nh[2*e]=Ah(e,5);th=new sh(mh,ih,257,286,15);uh=new sh(nh,jh,0,30,15);vh=new sh([],kh,0,19,7);gi=!0}c.Eb=new wh(c.X,th);c.Ab=new wh(c.Ja,uh);c.ic=new wh(c.R,
vh);c.V=0;c.O=0;Ch(c);c=0}else c=ii(b,-2);0===c&&(b=b.state,b.Kc=2*b.T,ji(b.head),b.Vb=ti[b.level].rd,b.qc=ti[b.level].ed,b.Ac=ti[b.level].ud,b.zc=ti[b.level].qd,b.l=0,b.Z=0,b.m=0,b.Y=0,b.G=b.aa=2,b.Na=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(gh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.nb){var l;"string"===typeof a.nb?l=$g(a.nb):"[object ArrayBuffer]"===xi.call(a.nb)?l=new Uint8Array(a.nb):l=a.nb;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=ah(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(ji(l.head),l.l=0,l.Z=0,l.Y=0),c=new O.Ra(l.T),O.Sa(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Pa;e=a.input;a.U=g;a.Pa=0;a.input=f;for(ni(l);3<=l.m;){f=l.l;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Fa]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.l=f;l.m=2;ni(l)}l.l+=l.m;l.Z=l.l;l.Y=l.m;l.m=0;l.G=l.aa=2;l.Na=0;a.Pa=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(gh[b]);this.ke=!0}}
yi.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=$g(a):"[object ArrayBuffer]"===xi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Pa=0;c.U=c.input.length;do{0===c.F&&(c.output=new O.Ra(d),c.ab=0,c.F=d);a=vi(c,e);if(1!==a&&0!==a)return zi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Ea){var f=O.cc(c.output,c.ab);b=f;f=f.length;if(65537>f&&(b.subarray&&Zg||!b.subarray))b=
String.fromCharCode.apply(null,O.cc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.cc(c.output,c.ab),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ii(c,-2):(c.state=null,a=113===d?ii(c,-3):0)):a=-2,zi(this,a),this.ended=!0,0===a;2===e&&(zi(this,0),c.F=0);return!0};
function zi(a,b){0===b&&(a.result="string"===a.options.Ea?a.chunks.join(""):O.oc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Ai(a){this.name=a}
;var Bi=new Ai("rawColdConfigGroup");var Ci=new Ai("rawHotConfigGroup");function Di(a){this.s=I(a)}
y(Di,L);Di.prototype.g=function(a){K(this,5,a)};function Ei(a){this.s=I(a)}
y(Ei,L);function Fi(a){this.s=I(a)}
y(Fi,L);Fi.ma=[2];function Gi(a){this.s=I(a)}
y(Gi,L);Gi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=zd(this,36);return null!=b?b:a};
Gi.prototype.setHomeGroupInfo=function(a){return J(this,Fi,81,a)};
Gi.ma=[9,66,32,86,100,101];function Hi(a){this.s=I(a)}
y(Hi,L);Hi.prototype.getKey=function(){return Ld(this,1)};
Hi.prototype.ja=function(){return Ld(this,Gd(this,Ii,2))};
var Ii=[2,3,4,5,6];function Ji(a){this.s=I(a)}
y(Ji,L);Ji.ma=[15,26,28];function Ki(a){this.s=I(a)}
y(Ki,L);Ki.ma=[5];function Li(a){this.s=I(a)}
y(Li,L);function Mi(a){this.s=I(a)}
y(Mi,L);Mi.prototype.setSafetyMode=function(a){return Qd(this,5,a)};
Mi.ma=[12];function Ni(a){this.s=I(a)}
y(Ni,L);Ni.ma=[12];var Oi={je:"WEB_DISPLAY_MODE_UNKNOWN",fe:"WEB_DISPLAY_MODE_BROWSER",he:"WEB_DISPLAY_MODE_MINIMAL_UI",ie:"WEB_DISPLAY_MODE_STANDALONE",ge:"WEB_DISPLAY_MODE_FULLSCREEN"};function Pi(a){this.s=I(a)}
y(Pi,L);Pi.prototype.getKey=function(){return Ld(this,1)};
Pi.prototype.ja=function(){return Ld(this,2)};function Qi(a){this.s=I(a)}
y(Qi,L);Qi.ma=[4,5];function Ri(a){this.s=I(a)}
y(Ri,L);function Si(a){this.s=I(a)}
y(Si,L);var Ti=[2,3,4,5];function Ui(a){this.s=I(a)}
y(Ui,L);function Vi(a){this.s=I(a)}
y(Vi,L);function Wi(a){this.s=I(a)}
y(Wi,L);function Xi(a){this.s=I(a)}
y(Xi,L);Xi.ma=[10,17];function Yi(a){this.s=I(a)}
y(Yi,L);function Zi(a){this.s=I(a)}
y(Zi,L);function $i(a){this.s=I(a)}
y($i,L);function aj(a){this.s=I(a,487)}
y(aj,L);
var bj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486];function cj(a){this.s=I(a)}
y(cj,L);function dj(a){this.s=I(a)}
y(dj,L);dj.prototype.getPlaylistId=function(){return Md(this,2)};
var Nd=[1,2];function ej(a){this.s=I(a)}
y(ej,L);ej.ma=[3];var fj=C.window,gj,hj,ij=(null==fj?void 0:null==(gj=fj.yt)?void 0:gj.config_)||(null==fj?void 0:null==(hj=fj.ytcfg)?void 0:hj.data_)||{};E("yt.config_",ij);function jj(){var a=arguments;1<a.length?ij[a[0]]=a[1]:1===a.length&&Object.assign(ij,a[0])}
function T(a,b){return a in ij?ij[a]:b}
function kj(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function lj(){var a=ij.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var mj=[];function nj(a){mj.forEach(function(b){return b(a)})}
function oj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pj(b)}}:a}
function pj(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),jj("ERRORS",b));nj(a)}
function qj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),jj("ERRORS",f))}
;function U(a){a=rj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function V(a,b){a=rj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function rj(a){return T("EXPERIMENT_FLAGS",{})[a]}
function sj(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var tj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++tj});var uj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function vj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in uj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
vj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
vj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
vj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",lb);var wj=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",wj);
function xj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function yj(a){a&&("string"==typeof a&&(a=[a]),cb(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?zj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var zj=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Aj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=xj(a,b,c,d);if(!e){e=++wj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new vj(h);if(!Wd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new vj(h);
h.currentTarget=a;return c.call(a,h)};
g=oj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),zj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Bj(a,b){"function"===typeof a&&(a=oj(a));return window.setTimeout(a,b)}
function Cj(a){"function"===typeof a&&(a=oj(a));return window.setInterval(a,250)}
;var Dj=/^[\w.]*$/,Ej={q:!0,search_query:!0};function Fj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Gj(f[0]||""),h=Gj(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(Fj);k.args=[{key:l,value:f[1],query:a,method:Hj==m?"unchanged":m}];Ej.hasOwnProperty(l)||qj(k)}}return c}
var Hj=String(Fj);function Ij(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];cb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Jj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Fj(a,"&")}
function Kj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Jj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=dc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Lj(a){if(!b)var b=window.location.href;var c=a.match(Zb)[1]||null,d=ac(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)==d&&(Number(b.match(Zb)[4]||null)||null)==(Number(a.match(Zb)[4]||null)||null):!0;return a}
function Gj(a){return a&&a.match(Dj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Mj(a){var b=Nj;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=qe;e.flash="0";a:{try{var f=b.g.top.location.href}catch(da){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Td:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;var k;e.u_h=null==(k=Td.screen)?void 0:k.height;var l;e.u_w=null==(l=Td.screen)?void 0:l.width;var m;e.u_ah=null==(m=Td.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Td.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=Td.screen)?void 0:q.colorDepth}catch(da){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(da){}try{var u=h.outerWidth;var A=h.outerHeight}catch(da){}try{var G=h.innerWidth;var R=h.innerHeight}catch(da){}try{var S=h.screenLeft;var ea=h.screenTop}catch(da){}try{G=h.innerWidth,R=h.innerHeight}catch(da){}try{var ab=h.screen.availWidth;var Ra=h.screen.availTop}catch(da){}p=[S,ea,p,t,ab,Ra,u,A,G,R];t=b.g.top;try{var Ga=(t||window).document,fa=
"CSS1Compat"==Ga.compatMode?Ga.documentElement:Ga.body;var oa=(new Ud(fa.clientWidth,fa.clientHeight)).round()}catch(da){oa=new Ud(-12245933,-12245933)}Ga=oa;oa={};var pa=void 0===pa?C:pa;fa=new qf;"SVGElement"in pa&&"createElementNS"in pa.document&&fa.set(0);t=oe();t["allow-top-navigation-by-user-activation"]&&fa.set(1);t["allow-popups-to-escape-sandbox"]&&fa.set(2);pa.crypto&&pa.crypto.subtle&&fa.set(3);"TextDecoder"in pa&&"TextEncoder"in pa&&fa.set(4);pa=rf(fa);oa.bc=pa;oa.bih=Ga.height;oa.biw=
Ga.width;oa.brdim=p.join();b=b.h;b=(oa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,oa.wgl=!!Td.WebGLRenderingContext,oa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Nj=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Ij(Mj(a))});Ua();var Oj="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Pj(){if(!Oj)return null;var a=Oj();return"open"in a?a:null}
;var Qj="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Qj);var Rj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Sj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Qj)),Tj=!1;
function Uj(a,b){b=void 0===b?{}:b;var c=Lj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Rj){var f=T(Rj[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&T("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=Ij(Mj()));return b}
function Vj(a){var b=window.location.search,c=ac(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Lj(a)&&(c=document.location.hostname);var d=$b(a.match(Zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Jj(b),f={};cb(Sj,function(g){e[g]&&(f[g]=e[g])});
return Kj(a,f||{},!1)}
function Wj(a,b){var c=b.format||"JSON";a=Xj(a,b);var d=Yj(a,b),e=!1,f=Zj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=ak(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Bj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Xj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Kj(a,b||{},!0);return a}
function Yj(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Jj(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):dc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Tj&&a&&"POST"!=b.method&&(Tj=!0,pj(Error("AJAX request with postData should use POST")));return e}
function ak(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,qj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?bk(a):null)e={},cb(a.getElementsByTagName("*"),function(g){e[g.tagName]=ck(g)})}d&&dk(e);
return e}
function dk(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=rb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else dk(a[b])}}
function bk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ck(a){var b="";cb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ek(a,b){b.method="POST";b.postParams||(b.postParams={});return Wj(a,b)}
function Zj(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&oj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Pj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=Vj(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Uj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var fk=[{Wb:function(a){return"Cannot read property '"+a.key+"'"},
Ib:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Wb:function(a){return"Cannot call '"+a.key+"'"},
Ib:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Wb:function(a){return a.key+" is not defined"},
Ib:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var hk={Ca:[],za:[{lb:gk,weight:500}]};function gk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ik(){this.za=[];this.Ca=[]}
var jk;function kk(){if(!jk){var a=jk=new ik;a.Ca.length=0;a.za.length=0;hk.Ca&&a.Ca.push.apply(a.Ca,hk.Ca);hk.za&&a.za.push.apply(a.za,hk.za)}return jk}
;var lk=new M;function mk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=nk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=nk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=nk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function nk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function ok(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=pk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=mk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?pk(f+".ve",g,h,k):0;d+=f;d+=pk(e,a[e],b,c);if(500<d)break}}else c[b]=qk(a),d+=c[b].length;else c[b]=qk(a),d+=c[b].length;return d}
function pk(a,b,c,d){c+="."+a;a=qk(b);d[c]=a;return c.length+a.length}
function qk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function rk(){}
;function sk(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function tk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var uk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},vk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},wk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},xk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function yk(){var a=C.navigator;return a?a.connection:void 0}
;function zk(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(zk,Error);function Ak(){try{return Bk(),!0}catch(a){return!1}}
function Bk(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new zk("Datasync ID not set","unknown");}
;function Ck(){}
function Dk(a,b){return pf.Ha(a,0,b)}
Ck.prototype.qa=function(a,b){return this.Ha(a,1,b)};
Ck.prototype.ib=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Ek=V("web_emulated_idle_callback_delay",300),Fk=1E3/60-3,Gk=[8,5,4,3,2,1,0];
function Hk(a){a=void 0===a?{}:a;Fe.call(this);this.h=[];this.i={};this.gb=this.g=0;this.fb=this.o=!1;this.M=[];this.S=this.hb=!1;for(var b=w(Gk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.j=0;this.Rc=a.timeout||1;this.H=Fk;this.u=0;this.vb=this.vd.bind(this);this.Qc=this.Ad.bind(this);this.Nc=this.Sc.bind(this);this.Oc=this.gd.bind(this);this.Pc=this.wd.bind(this);this.fc=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.vb)}
y(Hk,Fe);r=Hk.prototype;r.ib=function(a){var b=Ua();Ik(a);a=Ua()-b;this.o||(this.H-=a)};
r.Ha=function(a,b,c){++this.gb;if(10===b)return this.ib(a),this.gb;var d=this.gb;this.i[d]=a;this.o&&!c?this.M.push({id:d,priority:b}):(this.h[b].push(d),this.fb||this.o||(0!==this.g&&Jk(this)!==this.u&&Kk(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function Lk(a){a.M.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Kk(a)}
function Jk(a){if(a.h[8].length){if(a.S)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.j;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function Mk(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Ik(a){try{a()}catch(b){Mk(b)}}
function Nk(a){for(var b=w(Gk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.gd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.hb=!0;Ok(this,b);this.hb=!1};
r.Ad=function(){Ok(this)};
r.Sc=function(){Pk(this)};
r.wd=function(a){this.S=!0;var b=Jk(this);4===b&&b!==this.u&&(Kk(this),this.start());Ok(this,void 0,a);this.S=!1};
r.vd=function(){document.hidden||Pk(this);this.g&&(Kk(this),this.start())};
function Pk(a){Kk(a);a.o=!0;for(var b=Ua(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Ik(e)}Qk(a);a.o=!1;Nk(a)&&a.start();b=Ua()-b;a.H-=b}
function Qk(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.h[d.priority].push(d.id)}a.M.length=0}
function Ok(a,b,c){a.S&&4===a.u&&a.g||Kk(a);a.o=!0;b=Ua()+(b||a.H);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){Mk(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Ik(e);d=a.hb?0:1;d=a.j>d?a.j:d;if(!(Ua()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Ik(c)}while(c&&Ua()<b)}a.o=!1;Qk(a);a.H=Fk;Nk(a)&&a.start()}
r.start=function(){this.fb=!1;if(0===this.g)switch(this.u=Jk(this),this.u){case 1:var a=this.Oc;this.g=this.fc?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Ek);break;case 2:this.g=window.setTimeout(this.Qc,this.Rc);break;case 3:this.g=window.requestAnimationFrame(this.Pc);break;case 4:this.g=window.setTimeout(this.Nc,0)}};
function Kk(a){if(a.g){switch(a.u){case 1:var b=a.g;a.fc?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){Lk(this);Kk(this);this.ya&&document.removeEventListener("visibilitychange",this.vb);Fe.prototype.sa.call(this)};var Rk=D("yt.scheduler.instance.timerIdMap_")||{},Sk=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),Tk=0,Uk=0;function Vk(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Ia)a=new Hk(T("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Wk(){Xk();var a=D("ytglobal.schedulerInstanceInstance_");a&&(Ee(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Xk(){Lk(Vk());for(var a in Rk)Rk.hasOwnProperty(a)&&delete Rk[Number(a)]}
function Yk(a,b,c){if(!c)return c=void 0===c,-Vk().Ha(a,b,c);var d=window.setTimeout(function(){var e=Vk().Ha(a,b);Rk[d]=e},c);
return d}
function Zk(a){Vk().ib(a)}
function $k(a){var b=Vk();if(0>a)b.ba(-a);else{var c=Rk[a];c?(b.ba(c),delete Rk[a]):window.clearTimeout(a)}}
function al(){bl()}
function bl(){window.clearTimeout(Tk);Vk().start()}
function cl(){var a=Vk();Kk(a);a.fb=!0;window.clearTimeout(Tk);Tk=window.setTimeout(al,Sk)}
function dl(){window.clearTimeout(Uk);Uk=window.setTimeout(function(){el(0)},Sk)}
function el(a){dl();var b=Vk();b.j=a;b.start()}
function fl(a){dl();var b=Vk();b.j>a&&(b.j=a,b.start())}
function gl(){window.clearTimeout(Uk);var a=Vk();a.j=0;a.start()}
;function hl(){Ck.apply(this,arguments)}
y(hl,Ck);function il(){hl.g||(hl.g=new hl);return hl.g}
hl.prototype.Ha=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Bj(a,c||0)};
hl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
hl.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var pf=il();
U("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Wk),E("yt.scheduler.instance.addJob",Yk),E("yt.scheduler.instance.addImmediateJob",Zk),E("yt.scheduler.instance.cancelJob",$k),E("yt.scheduler.instance.cancelAllJobs",Xk),E("yt.scheduler.instance.start",bl),E("yt.scheduler.instance.pause",cl),E("yt.scheduler.instance.setPriorityThreshold",el),E("yt.scheduler.instance.enablePriorityThreshold",fl),E("yt.scheduler.instance.clearPriorityThreshold",gl),E("yt.scheduler.initialized",
!0));function jl(a){var b=new Pg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Vg(b,a):b:null)||(a=new Qg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Lg(a):null;this.h=document.domain||window.location.hostname}
jl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(mg(b))}catch(f){return}else e=escape(b);b=this.h;ye.set(""+a,e,{Ub:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
jl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=ye.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
jl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;ye.remove(""+a,"/",void 0===b?"youtube.com":b)};var kl=function(){var a;return function(){a||(a=new jl("ytidb"));return a}}();
function ll(){var a;return null==(a=kl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ml=[],nl=!1;function ol(a){nl||(ml.push({type:"ERROR",payload:a}),10<ml.length&&ml.shift())}
function pl(a,b){nl||(ml.push({type:"EVENT",eventType:a,payload:b}),10<ml.length&&ml.shift())}
;function ql(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function rl(a){return a.substr(0,a.indexOf(":"))||a}
;var sl=Bc||Cc;var tl={},ul=(tl.AUTH_INVALID="No user identifier specified.",tl.EXPLICIT_ABORT="Transaction was explicitly aborted.",tl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",tl.MISSING_INDEX="Index not created.",tl.MISSING_OBJECT_STORES="Object stores not created.",tl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",tl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",tl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
tl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",tl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",tl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",tl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",tl),vl={},wl=(vl.AUTH_INVALID="ERROR",vl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",vl.EXPLICIT_ABORT="IGNORED",vl.IDB_NOT_SUPPORTED="ERROR",vl.MISSING_INDEX=
"WARNING",vl.MISSING_OBJECT_STORES="ERROR",vl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",vl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",vl.QUOTA_EXCEEDED="WARNING",vl.QUOTA_MAYBE_EXCEEDED="WARNING",vl.UNKNOWN_ABORT="WARNING",vl.INCOMPATIBLE_DB_VERSION="WARNING",vl),xl={},yl=(xl.AUTH_INVALID=!1,xl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,xl.EXPLICIT_ABORT=!1,xl.IDB_NOT_SUPPORTED=!1,xl.MISSING_INDEX=!1,xl.MISSING_OBJECT_STORES=!1,xl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,xl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,xl.QUOTA_EXCEEDED=!1,xl.QUOTA_MAYBE_EXCEEDED=!0,xl.UNKNOWN_ABORT=!0,xl.INCOMPATIBLE_DB_VERSION=!1,xl);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ul[a]:c;d=void 0===d?wl[a]:d;e=void 0===e?yl[a]:e;zk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,zk);function zl(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ul.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,zl.prototype)}
y(zl,X);function Al(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Al.prototype)}
y(Al,Error);var Bl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Cl(a,b,c,d){b=rl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Dc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Al)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Bl.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",se:e.name})];e.level="WARNING";return e}
function Dl(a,b,c){var d=ll();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function El(a){if(!a)throw Error();throw a;}
function Fl(a){return a}
function Gl(a){this.g=a}
function Hl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Hl.resolve=function(a){return new Hl(new Gl(function(b,c){a instanceof Hl?a.then(b,c):b(a)}))};
Hl.reject=function(a){return new Hl(new Gl(function(b,c){c(a)}))};
Hl.prototype.then=function(a,b){var c=this,d=null!=a?a:Fl,e=null!=b?b:El;return new Hl(new Gl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Il(c,c,d,f,g)}),c.h.push(function(){Jl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Il(c,c,d,f,g):"REJECTED"===c.state.status&&Jl(c,c,e,f,g)}))};
function Kl(a,b){a.then(void 0,b)}
function Il(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Hl?Ll(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Hl?Ll(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ll(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Hl?Ll(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ml(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Nl(a){return new Promise(function(b,c){Ml(a,b,c)})}
function Ol(a){return new Hl(new Gl(function(b,c){Ml(a,b,c)}))}
;function Pl(a,b){return new Hl(new Gl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Ql=window,Y=Ql.ytcsi&&Ql.ytcsi.now?Ql.ytcsi.now:Ql.performance&&Ql.performance.timing&&Ql.performance.now&&Ql.performance.timing.navigationStart?function(){return Ql.performance.timing.navigationStart+Ql.performance.now()}:function(){return(new Date).getTime()};function Rl(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
r=Rl.prototype;r.add=function(a,b,c){return Sl(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Sl(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Tl(a,b,c){a=a.g.createObjectStore(b,c);return new Ul(a)}
r.delete=function(a,b){return Sl(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Sl(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Vl(a,b,c){return Sl(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Ol(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Sl(a,b,c,d){var e,f,g,h,k,l,m,n,q,p,t,u;return B(function(A){switch(A.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){A.B(4);break}g++;k=Math.round(Y());wa(A,5);l=a.g.transaction(b,e.mode);G=new Wl(l);G=Xl(G,d);return z(A,G,7);case 7:return m=A.h,n=Math.round(Y()),Yl(a,k,n,g,void 0,b.join(),e),A.return(m);case 5:q=xa(A);p=Math.round(Y());t=Cl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof X&&!t.g)||g>=f)Yl(a,k,p,g,t,b.join(),e),h=t;A.B(2);break;case 4:return A.return(Promise.reject(h))}})}
function Yl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&pl("QUOTA_EXCEEDED",{dbName:rl(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),pl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Zl(a,!1,d,f,b,g.tag),ol(e)):Zl(a,!0,d,f,b,g.tag)}
function Zl(a,b,c,d,e,f){pl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function Ul(a){this.g=a}
r=Ul.prototype;r.add=function(a,b){return Ol(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return Ol(this.g.clear()).then(function(){})};
function $l(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function am(a,b){return bm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?am(this,a):Ol(this.g.delete(a))};
r.get=function(a){return Ol(this.g.get(a))};
r.index=function(a){try{return new cm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Al(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function bm(a,b,c){a=a.g.openCursor(b.query,b.direction);return dm(a).then(function(d){return Pl(d,c)})}
function Wl(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Xl(a,b){var c=new Promise(function(d,e){try{Kl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Wl.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
Wl.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Ul(a),this.i.set(a,b));return b};
function cm(a){this.g=a}
r=cm.prototype;r.delete=function(a){return em(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return Ol(this.g.get(a))};
r.getKey=function(a){return Ol(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function em(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return dm(a).then(function(d){return Pl(d,c)})}
function fm(a,b){this.request=a;this.cursor=b}
function dm(a){return Ol(a).then(function(b){return b?new fm(a,b):null})}
r=fm.prototype;r.advance=function(a){this.cursor.advance(a);return dm(this.request)};
r.continue=function(a){this.cursor.continue(a);return dm(this.request)};
r.delete=function(){return Ol(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return Ol(this.cursor.update(a))};function gm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new Rl(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Uc,k=c.Vc,l=c.zd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&pl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:rl(a)});var t=f(),u=new Wl(g.transaction);m&&
m(t,function(A){return p.oldVersion<A&&p.newVersion>=A},u);
u.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){pl("IDB_UNEXPECTEDLY_CLOSED",{dbName:rl(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function hm(a,b,c){c=void 0===c?{}:c;return gm(a,b,c)}
function im(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Uc)&&c.addEventListener("blocked",function(){e()}),z(g,Nl(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=xa(g),Cl(f,a,"",-1);})}
;function jm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.j=0}
jm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return hm(a,b,c)};
jm.prototype.delete=function(a){a=void 0===a?{}:a;return im(this.name,a)};
function km(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function lm(a,b){if(!b)throw Dl("openWithToken",rl(a.name));return mm(a)}
function mm(a){function b(){var f,g,h,k,l,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(u,2),z(u,a.h(a.name,a.options.version,d),4);case 4:h=u.h;for(var A=a.options,G=[],R=w(Object.keys(A.bb)),S=R.next();!S.done;S=R.next()){S=S.value;var ea=A.bb[S],ab=void 0===ea.xd?Number.MAX_VALUE:ea.xd;!(h.g.version>=ea.jb)||h.g.version>=ab||h.g.objectStoreNames.contains(S)||G.push(S)}k=G;if(0===k.length){u.B(5);break}l=Object.keys(a.options.bb);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),ol(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.j<V("ytidb_remake_db_retries",1))){u.B(6);break}a.j++;return z(u,a.delete(),7);case 7:return ol(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new zl(m,l);case 5:return u.return(h);case 2:n=xa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return z(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,km(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Cl(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw km(a);if(a.g)return a.g;var d={Vc:function(f){f.close()},
closed:c,zd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var nm=new jm("YtIdbMeta",{bb:{databases:{jb:1}},upgrade:function(a,b){b(1)&&Tl(a,"databases",{keyPath:"actualName"})}});
function om(a,b){var c;return B(function(d){if(1==d.g)return z(d,lm(nm,b),2);c=d.h;return d.return(Sl(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ol(f.g.put(a,void 0)).then(function(){})})}))})}
function pm(a,b){var c;return B(function(d){if(1==d.g)return a?z(d,lm(nm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function qm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],z(e,lm(nm,b),2)):3!=e.g?(d=e.h,z(e,Sl(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return bm(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function rm(a){return qm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var sm,tm=new function(){}(new function(){});
function um(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=ll();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=sl)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return z(e,om(d,tm),4);case 4:return z(e,pm("yt-idb-test-do-not-use",tm),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function vm(){if(void 0!==sm)return sm;nl=!0;return sm=um().then(function(a){nl=!1;var b;if(null!=(b=kl())&&b.g){var c;b={hasSucceededOnce:(null==(c=ll())?void 0:c.hasSucceededOnce)||a};var d;null==(d=kl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function wm(){return D("ytglobal.idbToken_")||void 0}
function xm(){var a=wm();return a?Promise.resolve(a):vm().then(function(b){(b=b?tm:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new ng;function ym(a){if(!Ak())throw a=new X("AUTH_INVALID",{dbName:a}),ol(a),a;var b=Bk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function zm(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",z(m,xm(),2);case 2:g=m.h;if(!g)throw h=Dl("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ol(h),h;ql(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ym(a);wa(m,3);return z(m,om(k,g),5);case 5:return z(m,hm(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=xa(m),wa(m,7),z(m,pm(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:xa(m);case 8:throw l;}})}
function kn(a,b,c){c=void 0===c?{}:c;return zm(a,b,!1,c)}
function ln(a,b,c){c=void 0===c?{}:c;return zm(a,b,!0,c)}
function mn(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return z(e,xm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();ql(a);d=ym(a);return z(e,im(d.actualName,b),3)}return z(e,pm(d.actualName,c),0)})}
function nn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?z(e,im(d.actualName,b),2):z(e,pm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function on(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return z(d,xm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();ql("LogsDatabaseV2");return z(d,rm(b),3)}c=d.h;return z(d,nn(c,a,b),0)})}
function pn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return z(d,xm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();ql(a);return z(d,im(a,b),3)}return z(d,pm(a,c),0)})}
;function qn(a,b){jm.call(this,a,b);this.options=b;ql(a)}
y(qn,jm);function rn(a,b){var c;return function(){c||(c=new qn(a,b));return c}}
qn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Nb?ln:kn)(a,b,Object.assign({},c))};
qn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Nb?pn:mn)(this.name,a)};
function sn(a,b){return rn(a,b)}
;var tn={},un=sn("ytGcfConfig",{bb:(tn.coldConfigStore={jb:1},tn.hotConfigStore={jb:1},tn),Nb:!1,upgrade:function(a,b){b(1)&&($l(Tl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),$l(Tl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function vn(a){return lm(un(),a)}
function wn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},z(g,vn(c),2);case 2:return e=g.h,z(g,e.clear("hotConfigStore"),3);case 3:return z(g,Vl(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function xn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},z(h,vn(d),2);case 2:return f=h.h,z(h,f.clear("coldConfigStore"),3);case 3:return z(h,Vl(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function yn(a){var b,c;return B(function(d){return 1==d.g?z(d,vn(a),2):3!=d.g?(b=d.h,c=void 0,z(d,Sl(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return em(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function zn(a){var b,c;return B(function(d){return 1==d.g?z(d,vn(a),2):3!=d.g?(b=d.h,c=void 0,z(d,Sl(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return em(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function An(){Fe.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(An,Fe);An.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Fe.prototype.sa.call(this)};function Bn(){this.h=0;this.i=new An}
function Cn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.g(b);d=wm();if(!d){g.B(3);break}if(c){g.B(4);break}return z(g,zn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return z(g,wn(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Dn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=wm())?c?h.B(4):z(h,yn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return z(h,xn(c,b,g,d),0)})}
Bn.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function En(){return"INNERTUBE_API_KEY"in ij&&"INNERTUBE_API_VERSION"in ij}
function Fn(){return{hd:T("INNERTUBE_API_KEY"),jd:T("INNERTUBE_API_VERSION"),Qb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),uc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),kd:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),vc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),xc:T("INNERTUBE_CONTEXT_HL"),wc:T("INNERTUBE_CONTEXT_GL"),ld:T("INNERTUBE_HOST_OVERRIDE")||"",nd:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),md:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Gn(a){var b={client:{hl:a.xc,gl:a.wc,clientName:a.uc,clientVersion:a.vc,configInfo:a.Qb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=sj();0<c.length&&(b.request={internalExperimentFlags:c});Hn(a,void 0,b);In(void 0,b);Jn(void 0,b);Kn(a,void 0,b);Ln(void 0,b);U("start_client_gcf")&&Mn(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Jj(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Hn(a,b,c){a=a.uc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Hd(b,Ei,96)||new Ei;var d=sk();d=Object.keys(Oi).indexOf(d);d=-1===d?null:d;null!==d&&Qd(c,3,d);J(b,Ei,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=sk())}
function In(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Hd(a,Ki,7)||new Ki,K(b,4,c),J(a,Ki,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Jn(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?Pd(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Kn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Hd(b,Di,62))?d:new Di;K(c,6,a.appInstallData);J(b,Di,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ln(a,b){a:{var c=yk();if(c){var d=uk[c.type||"unknown"]||"CONN_UNKNOWN";c=uk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Qd(a,61,vk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=yk(),d=null!=d&&d.effectiveType?xk.hasOwnProperty(d.effectiveType)?xk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Qd(a,94,wk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Nn(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.me||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().le;else{rk.g||(rk.g=new rk);a={};if(c=Be([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in ij||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in ij&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Mn(a,b){if(!Bn.g){var c=new Bn;Bn.g=c}c=Bn.g;var d=Y()-c.h;if(0!==c.h&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Hd(a,Di,62))?g:new Di;K(b,1,c);K(b,3,d);b.g(e);J(a,Di,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var On=D("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ub;M.prototype.publish=M.prototype.cb;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",On);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Pn(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={ze:a,ye:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Qn=void 0,Rn=void 0;function Sn(){if(!Rn){var a=T("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=rb();a=b?b.createScriptURL(a):a;a=new vb(a,wb)}else a=null;Rn=a}else Rn=null}return Rn||void 0}
function Tn(){var a=Sn();if(!Qn&&void 0!==a){var b=Worker;a instanceof vb&&a.constructor===vb?a=a.g:(Ka(a),a="type_error:TrustedResourceUrl");Qn=new b(a,void 0)}return Qn}
;var Un=V("max_body_size_to_compress",5E5),Vn=V("min_body_size_to_compress",500),Wn=!0,Xn=0,Yn=0,Zn=V("compression_performance_threshold_lr",250),$n=V("slow_compressions_before_abandon_count",4),ao=!1,bo=new Map,co=1;function eo(){if("function"===typeof Worker&&Sn()){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=bo.get(c.key);d&&(fo(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),bo.delete(c.key))}},b=Tn();
b&&(b.addEventListener("message",a),b.onerror=function(){bo.clear()},ao=!0)}}
function go(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Wn)try{try{var g=(new Blob(b.split(""))).size}catch(n){qj(n),g=null}if(null!=g&&(g>Un||g<Vn))d(a,c);else{if(U("gzip_gel_with_worker")){ao||eo();var h=Tn();if(h&&!e){bo.set(co,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:co});co++;return}}var k=De(b);var l=l||{};l.fd=!0;var m=new yi(l);m.push(k,!0);if(m.err)throw m.msg||gh[m.err];fo(m.result,f,a,c,d)}}catch(n){qj(n),
d(a,c)}else d(a,c)}
function fo(a,b,c,d,e){var f=Y();b.ticks.gelc=f;Yn++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Zn&&(Xn++,U("abandon_compression_after_N_slow_zips")?Yn===V("compression_disable_point")&&Xn>$n&&(Wn=!1):Wn=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Pn("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function ho(a){a=Object.assign({},a);delete a.Authorization;var b=Be();if(b){var c=new Zf;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Gc(c.digest(),3)}return a}
;var io;function jo(){io||(io=new jl("yt.innertube"));return io}
function ko(a,b,c,d){if(d)return null;d=jo().get("nextId",!0)||1;var e=jo().get("requests",!0)||{};e[d]={method:a,request:b,authState:ho(c),requestTime:Math.round(Y())};jo().set("nextId",d+1,86400,!0);jo().set("requests",e,86400,!0);return d}
function lo(a){var b=jo().get("requests",!0)||{};delete b[a];jo().set("requests",b,86400,!0)}
function mo(a){var b=jo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=ho(Nn(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),no(a,d.method,e,{}));delete b[c]}}jo().set("requests",b,86400,!0)}}
;function oo(a){this.wb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ua=function(){};
this.now=Date.now;this.ob=!1;var b;this.Jc=null!=(b=a.Jc)?b:100;var c;this.Hc=null!=(c=a.Hc)?c:1;var d;this.Fc=null!=(d=a.Fc)?d:2592E6;var e;this.Ec=null!=(e=a.Ec)?e:12E4;var f;this.Gc=null!=(f=a.Gc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Bb=!!a.Bb;var h;this.zb=null!=(h=a.zb)?h:.1;var k;this.Jb=null!=(k=a.Jb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ua&&(this.Ua=a.Ua);a.ob&&(this.ob=a.ob);a.wb&&(this.wb=a.wb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.P=a.P;this.sendFn=a.sendFn;
this.Zb=a.Zb;this.Yb=a.Yb;po(this)&&(!this.J||this.J("networkless_logging"))&&qo(this)}
function qo(a){po(a)&&!a.ob&&(a.g=!0,a.Bb&&Math.random()<=a.zb&&a.N.Wc(a.I),ro(a),a.P.ca()&&a.tb(),a.P.Ma(a.Zb,a.tb.bind(a)),a.P.Ma(a.Yb,a.jc.bind(a)))}
r=oo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(po(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.P.ca()&&so(c,d)}).catch(function(e){so(c,d);
to(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(po(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return z(k,d.N.set(e,d.I).catch(function(l){to(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
to(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(po(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ta(d.id,c.I):e=!0;c.P.Oa&&c.J&&c.J("vss_network_hint")&&c.P.Oa(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ta(d.id,c.I)}).catch(function(g){to(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.tb=function(){var a=this;if(!po(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return z(c,a.N.pc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?z(c,so(a,b),3):(a.jc(),c.return());a.h&&(a.h=0,a.tb());c.g=0})},this.Jc))};
r.jc=function(){this.ha.ba(this.h);this.h=0};
function so(a,b){var c;return B(function(d){switch(d.g){case 1:if(!po(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return z(d,a.N.pd(b.id,a.I),3);case 3:(c=d.h)||a.Ua(Error("The request cannot be found in the database."));case 2:if(uo(a,b,a.Fc)){d.B(4);break}a.Ua(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return z(d,a.N.Ta(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=vo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return z(d,a.N.Ta(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function vo(a,b){if(!po(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=wo(f);(h=xo(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Jb)){m.B(2);break}if(!a.P.Mb){m.B(3);break}return z(m,a.P.Mb(),3);case 3:if(a.P.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return z(m,a.N.ac(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Jb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Hc?z(m,a.N.ac(b.id,a.I,!0,h?!1:void 0),12):z(m,a.N.Ta(b.id,a.I),8);case 12:a.ha.qa(function(){a.P.ca()&&a.tb()},a.Gc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):z(h,a.N.Ta(b.id,a.I),2);a.P.Oa&&a.J&&a.J("vss_network_hint")&&a.P.Oa(!0);d(e,f);h.g=0})};
return b}
function uo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ro(a){if(!po(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.pc("QUEUED",a.I).then(function(b){b&&!uo(a,b,a.Ec)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):z(c,a.N.ac(b.id,a.I),2);ro(a);c.g=0})}):a.P.ca()&&a.tb()})}
function to(a,b){a.Lc&&!a.P.ca()?a.Lc(b):a.handleError(b)}
function po(a){return!!a.I||a.wb}
function wo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function xo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var yo;
function zo(){if(yo)return yo();var a={};yo=sn("LogsDatabaseV2",{bb:(a.LogsRequestsStore={jb:2},a),Nb:!1,upgrade:function(b,c,d){c(2)&&Tl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),$l(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return yo()}
;function Ao(a){return lm(zo(),a)}
function Bo(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},z(g,Ao(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),z(g,Vl(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();Co(c);return g.return(f)})}
function Do(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},z(l,Ao(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,z(l,Sl(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return em(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(k=n.ja(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();Co(c);return l.return(k)})}
function Eo(a,b){var c;return B(function(d){if(1==d.g)return z(d,Ao(b),2);c=d.h;return d.return(Sl(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ol(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Fo(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return z(f,Ao(b),2);e=f.h;return f.return(Sl(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Ol(h.g.put(k,void 0)).then(function(){return k})):Hl.resolve(void 0)})}))})}
function Go(a,b){var c;return B(function(d){if(1==d.g)return z(d,Ao(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Ho(a){var b,c;return B(function(d){if(1==d.g)return z(d,Ao(a),2);b=d.h;c=Y()-2592E6;return z(d,Sl(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return bm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Io(){B(function(a){return z(a,on(),0)})}
function Co(a){U("nwl_csi_killswitch")||Pn("networkless_performance",a,{sampleRate:1})}
;var Jo={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487};var Ko={},Lo=sn("ServiceWorkerLogsDatabase",{bb:(Ko.SWHealthLog={jb:1},Ko),Nb:!0,upgrade:function(a,b){b(1)&&$l(Tl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Mo(a){return lm(Lo(),a)}
function No(a){var b,c;B(function(d){if(1==d.g)return z(d,Mo(a),2);b=d.h;c=Y()-2592E6;return z(d,Sl(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return bm(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Oo(a){var b;return B(function(c){if(1==c.g)return z(c,Mo(a),2);b=c.h;return z(c,b.clear("SWHealthLog"),0)})}
;var Po={},Qo=0;function Ro(a){var b=new Image,c=""+Qo++;Po[c]=b;b.onload=b.onerror=function(){delete Po[c]};
b.src=a}
;function So(){this.g=new Map;this.h=!1}
function To(){if(!So.g){var a=D("yt.networkRequestMonitor.instance")||new So;E("yt.networkRequestMonitor.instance",a);So.g=a}return So.g}
So.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
So.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
So.prototype.removeParams=function(a){return a.split("?")[0]};
So.prototype.removeParams=So.prototype.removeParams;So.prototype.isEndpointCFR=So.prototype.isEndpointCFR;So.prototype.requestComplete=So.prototype.requestComplete;So.getInstance=To;var Uo;function Vo(){Uo||(Uo=new jl("yt.offline"));return Uo}
function Wo(a){if(U("offline_error_handling")){var b=Vo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Vo().set("errors",b,2592E3,!0)}}
;function Z(){hf.call(this);var a=this;this.i=!1;this.h=of();this.h.Ma("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=Vo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new zk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;pj(d)}Vo().set("errors",{},2592E3,!0)}}})}
y(Z,hf);function Xo(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Oa=function(a){this.h.h=a};
r.dd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Zc=function(){this.i=!0};
r.Ma=function(a,b){return this.h.Ma(a,b)};
r.Mb=function(a){a=mf(this.h,a);a.then(function(b){U("use_cfr_monitor")&&To().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Mb;Z.prototype.listen=Z.prototype.Ma;Z.prototype.enableErrorFlushing=Z.prototype.Zc;Z.prototype.getWindowStatus=Z.prototype.dd;Z.prototype.networkStatusHint=Z.prototype.Oa;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=Xo;function Yo(a){a=void 0===a?{}:a;hf.call(this);var b=this;this.h=this.o=0;this.i=Xo();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Lb?(this.Lb=a.Lb,c("networkstatus-online",function(){Zo(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Zo(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){jf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){jf(b,"publicytnetworkstatus-offline")})))}
y(Yo,hf);Yo.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Yo.prototype.Oa=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Yo.prototype.Mb=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&To().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Oa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function Zo(a,b){a.Lb?a.h?(pf.ba(a.o),a.o=pf.qa(function(){a.j!==b&&(jf(a,b),a.j=b,a.h=Y())},a.Lb-(Y()-a.h))):(jf(a,b),a.j=b,a.h=Y()):jf(a,b)}
;var $o;function ap(){var a=oo.call;$o||($o=new Yo({qe:!0,pe:!0}));a.call(oo,this,{N:{Wc:Ho,Ta:Go,pc:Do,pd:Eo,ac:Fo,set:Bo},P:$o,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;qj(new zk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else pj(b)},
Ua:qj,sendFn:bp,now:Y,Lc:Wo,ha:il(),Zb:"publicytnetworkstatus-online",Yb:"publicytnetworkstatus-offline",Bb:!0,zb:.1,Jb:V("potential_esf_error_limit",10),J:U,ob:!(Ak()&&"www.youtube-nocookie.com"!==ac(document.location.toString()))});this.i=new ng;U("networkless_immediately_drop_all_requests")&&Io();pn("LogsDatabaseV2")}
y(ap,oo);function cp(){var a=D("yt.networklessRequestController.instance");a||(a=new ap,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&xm().then(function(b){a.I=b;qo(a);a.i.resolve();a.Bb&&Math.random()<=a.zb&&a.I&&No(a.I);U("networkless_immediately_drop_sw_health_store")&&dp(a)}));
return a}
ap.prototype.writeThenSend=function(a,b){b||(b={});Ak()||(this.g=!1);oo.prototype.writeThenSend.call(this,a,b)};
ap.prototype.sendThenWrite=function(a,b,c){b||(b={});Ak()||(this.g=!1);oo.prototype.sendThenWrite.call(this,a,b,c)};
ap.prototype.sendAndWrite=function(a,b){b||(b={});Ak()||(this.g=!1);oo.prototype.sendAndWrite.call(this,a,b)};
ap.prototype.awaitInitialization=function(){return this.i.promise};
function dp(a){var b;B(function(c){if(!a.I)throw b=Dl("clearSWHealthLogsDb"),b;return c.return(Oo(a.I).catch(function(d){a.handleError(d)}))})}
function bp(a,b,c,d){d=void 0===d?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&ep(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Zj(a,void 0,"POST",f);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Zj(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Ya({url:a});if(k.i&&k.h||k.j){var l=$b(a.match(Zb)[5]||null);var m=!(!l||!l.endsWith("/aclk")||"1"!==fc(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||Ro(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),go(a,b.postBody,b,Wj,d)):go(a,JSON.stringify(b.postParams),
b,ek,d):Wj(a,b)}
function ep(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){To().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){To().requestComplete(a,!0);d(e,f)}}
;var fp=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",fp);function gp(a){var b=this;this.config_=null;a?this.config_=a:En()&&(this.config_=Fn());Dk(function(){mo(b)},5E3)}
gp.prototype.isReady=function(){!this.config_&&En()&&(this.config_=Fn());return!!this.config_};
function no(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=ko(b,c,l,k)),u)){var A=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(ea,ab){lo(u);A(ea,ab)};
c.onFetchSuccess=function(ea,ab){lo(u);G(ea,ab)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?cp().writeThenSend(p,g):cp().sendAndWrite(p,g);
else if(d.compress){var R=!d.networklessOptions.writeThenSend;if(g.postBody){var S=g.postBody;"string"!==typeof S&&(S=JSON.stringify(g.postBody));go(p,S,g,Wj,R)}else go(p,JSON.stringify(g.postParams),g,ek,R)}else U("web_all_payloads_via_jspb")?Wj(p,g):ek(p,g)}catch(ea){if("InvalidAccessError"==ea.name)u&&(lo(u),u=0),qj(Error("An extension is blocking network request."));else throw ea;}u&&Dk(function(){mo(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&qj(new zk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new zk("innertube xhrclient not ready",b,c,d);pj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ld)&&(h=f);var k=a.config_.nd||!1,l=Nn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.jd+"/"+b,n={alt:"json"},q=a.config_.md&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.hd);var p=Kj(""+h+m,n||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
fp.isNwlInitialized?vm().then(function(t){e(t)}):e(!1)}
;function hp(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ip=C.ytPubsubPubsubInstance||new M,jp=C.ytPubsubPubsubSubscribedKeys||{},kp=C.ytPubsubPubsubTopicToKeys||{},lp=C.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ub;M.prototype.publish=M.prototype.cb;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",ip);E("ytPubsubPubsubTopicToKeys",kp);E("ytPubsubPubsubIsSynchronous",lp);E("ytPubsubPubsubSubscribedKeys",jp);var mp=Symbol("injectionDeps");function np(){this.key=Bn}
function op(){this.h=new Map;this.g=new Map}
op.prototype.resolve=function(a){return a instanceof np?pp(this,a.key,[],!0):pp(this,a,[])};
function pp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Dd)var e=d.Dd;else if(d.Cd)e=d[mp]?qp(a,d[mp],c):[],e=d.Cd.apply(d,x(e));else if(d.Bd){e=d.Bd;var f=e[mp]?qp(a,e[mp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.xe||a.g.set(b,e);return e}
function qp(a,b,c){return b?b.map(function(d){return d instanceof np?pp(a,d.key,c,!0):pp(a,d,c)}):[]}
;var rp;function sp(){rp||(rp=new op);return rp}
;var tp=window;function up(){var a,b;return"h5vcc"in tp&&(null==(a=tp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=tp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in tp&&tp.performance.mark&&tp.performance.measure?2:0}
function vp(a){switch(up()){case 1:tp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:tp.performance.mark(a+"-start");break;case 0:break;default:be()}}
function wp(a){switch(up()){case 1:tp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";tp.performance.mark(c);tp.performance.measure(a,b,c);break;case 0:break;default:be()}}
;var xp=U("web_enable_lifecycle_monitoring")&&0!==up(),yp=U("web_enable_lifecycle_monitoring");function zp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?il():d;this.j=c;this.h=d;this.i=new ng;this.g=a;for(a={Ka:0};a.Ka<this.g.length;a={qb:a.qb,Ka:a.Ka},a.Ka++)a.qb=this.g[a.Ka],c=function(e){return function(){e.qb.Sb();b.g[e.Ka].Kb=!0;b.g.every(function(f){return!0===f.Kb})&&b.i.resolve()}}(a),d=this.h.Ha(c,Ap(this,a.qb)),this.g[a.Ka]=Object.assign({},a.qb,{Sb:c,
jobId:d})}
function Bp(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Ap(a,a.g[e])-Ap(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Kb||(a.h.ba(c.jobId),a.h.Ha(c.Sb,10))}
zp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Kb||this.h.ba(b.jobId),b.Kb=!0;this.i.resolve()};
function Ap(a,b){var c;return null!=(c=b.priority)?c:a.j}
;function Cp(a){this.state=a;this.i=[];this.o=void 0;this.H={};xp&&vp(this.state)}
Cp.prototype.install=function(a){this.i.push(a);return this};
function Dp(a){xp&&wp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Ea}):d.from===a.state&&"none"===d.Ea});
if(b){a.h&&(Bp(a.h),a.h=void 0);yp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";xp&&vp(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Ep(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Ep(a,b){var c=b.filter(function(e){return 10===Fp(a,e)}),d=b.filter(function(e){return 10!==Fp(a,e)});
return a.H.we?function(){var e=Fa.apply(0,arguments);return B(function(f){if(1==f.g)return z(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
Cp.prototype.ya=function(a){for(var b=Fa.apply(1,arguments),c=il(),d=w(a),e=d.next(),f={};!e.done;f={Xa:f.Xa},e=d.next())f.Xa=e.value,c.ib(function(g){return function(){Gp(g.Xa.name);g.Xa.lb.apply(g.Xa,x(b));Hp(g.Xa.name)}}(f))};
Cp.prototype.oa=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=il(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.La=e.value;f.kb=void 0;g=function(k){return function(){Gp(k.La.name);var l=k.La.lb.apply(k.La,x(b));"function"===typeof(null==l?void 0:l.then)?k.kb=l.then(function(){Hp(k.La.name)}):Hp(k.La.name)}}(f);
c.ib(g);return f.kb?z(h,f.kb,3):h.B(3)}f={La:f.La,kb:f.kb};e=d.next();return h.B(2)})};
Cp.prototype.u=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Sb:function(){Gp(e.name);e.lb.apply(e,x(b));Hp(e.name)},
priority:Fp(c,e)}});
d.length&&(this.h=new zp(d))};
function Fp(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Gp(a){xp&&a&&vp(a)}
function Hp(a){xp&&a&&wp(a)}
ha.Object.defineProperties(Cp.prototype,{j:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Ip(a){Cp.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ea:"application_navigating",action:this.M},{from:"application_navigating",Ea:"none",action:this.S},{from:"application_navigating",Ea:"application_navigating",action:function(){}},
{from:"none",Ea:"none",action:function(){}}]}
var Jp;y(Ip,Cp);Ip.prototype.M=function(a,b){var c=this;this.g=Dk(function(){"application_navigating"===c.j&&Dp(c)},5E3);
a(null==b?void 0:b.event)};
Ip.prototype.S=function(a,b){this.g&&(pf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function Kp(){Jp||(Jp=new Ip);return Jp}
;var Lp=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return Lp});function Mp(){this.store={};this.g={}}
Mp.prototype.storePayload=function(a,b){a=Np(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Mp.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Op(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Mp.prototype.extractMatchingEntries=function(a){a=Op(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Mp.prototype.getSequenceCount=function(a){a=Op(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Op(a,b){var c=Np(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Np(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Pp(b.auth,g[0])){var h=b.isJspb;Pp(void 0===h?"undefined":h?"true":"false",g[1])&&Pp(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Pp(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Pp(a,b){return void 0===a||"undefined"===a?!0:a===b}
Mp.prototype.getSequenceCount=Mp.prototype.getSequenceCount;Mp.prototype.extractMatchingEntries=Mp.prototype.extractMatchingEntries;Mp.prototype.smartExtractMatchingEntries=Mp.prototype.smartExtractMatchingEntries;Mp.prototype.storePayload=Mp.prototype.storePayload;function Np(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Qp=V("initial_gel_batch_timeout",2E3),Rp=V("gel_queue_timeout_max_ms",6E4),Sp=Math.pow(2,16)-1,Tp=V("gel_min_batch_size",5),Up=void 0;function Vp(){this.j=this.g=this.h=0;this.i=!1}
var Wp=new Vp,Xp=new Vp,Yp=new Vp,Zp=new Vp,$p,aq=!0,bq=1,cq=new Map,dq=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",dq);var eq=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",eq);var fq={};function gq(){var a=D("yt.logging.ims");a||(a=new Mp,E("yt.logging.ims",a));return a}
function hq(a,b){if("log_event"===a.endpoint){iq(a);var c=jq(a),d=kq(a.payload)||"",e=lq(d),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=mq(e.tier);if(400===f){nq(a,b);return}}fq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};gq().storePayload(e,a.payload);oq(b,c,!1,e,pq(d))}}
function qq(a,b,c){if("log_event"===b.endpoint){iq(void 0,b);var d=jq(b,!0),e=lq(a),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=mq(e.tier);if(400===f){rq(a,b,c);return}}fq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};gq().storePayload(e,b.payload.toJSON());oq(c,d,!0,e,pq(a))}}
function oq(a,b,c,d,e){function f(){sq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Up=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("web_logging_max_batch")||100;var g=Y(),h=tq(c,d.tier),k=h.j;e&&(h.i=!0);e=0;d&&(e=gq().getSequenceCount(d));1E3<=e?f():e>=a?$p||($p=uq(function(){f();$p=void 0},0)):10<=g-k&&(vq(c,d.tier),h.j=g)}
function nq(a,b){if("log_event"===a.endpoint){iq(a);var c=jq(a),d=new Map;d.set(c,[a.payload]);var e=kq(a.payload)||"";b&&(Up=new b);return new og(function(f,g){Up&&Up.isReady()?wq(d,Up,f,g,{bypassNetworkless:!0},!0,pq(e)):f()})}}
function rq(a,b,c){if("log_event"===b.endpoint){iq(void 0,b);var d=jq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Up=new c);return new og(function(f){Up&&Up.isReady()?xq(e,Up,f,{bypassNetworkless:!0},!0,pq(a)):f()})}}
function jq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new dj;c.videoId?Ed(d,1,Nd,hd(c.videoId)):c.playlistId&&Ed(d,2,Nd,hd(c.playlistId));eq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),dq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function sq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new og(function(e,f){var g=tq(c,d),h=g.i;g.i=!1;yq(g.h);yq(g.g);g.g=0;Up&&Up.isReady()?void 0===d&&U("enable_web_tiered_gel")?zq(e,f,a,b,c,300,h):zq(e,f,a,b,c,d,h):(vq(c,d),e())})}
function zq(a,b,c,d,e,f,g){var h=Up;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?gq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):gq().extractMatchingEntries(n),k.set(d,b),xq(k,h,a,c,!1,g)):(k=U("enable_web_tiered_gel")?gq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):gq().extractMatchingEntries(n),l.set(d,k),wq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(fq));for(d=b.next();!d.done;d=b.next())l=d.value,f=U("enable_web_tiered_gel")?gq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):gq().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete fq[l];xq(k,h,a,c,!1,g)}else{k=w(Object.keys(fq));for(d=k.next();!d.done;d=k.next())m=d.value,n=U("enable_web_tiered_gel")?gq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):gq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete fq[m];wq(l,h,a,b,c,!1,g)}}
function vq(a,b){function c(){sq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=tq(a,b),e=d===Zp||d===Yp?5E3:Rp;U("web_gel_timeout_cap")&&!d.g&&(e=uq(function(){c()},e),d.g=e);
yq(d.h);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&aq&&(e=Qp);e=uq(function(){0<V("gel_min_batch_size")?gq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Tp&&c():c()},e);
d.h=e}
function wq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=Aq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Fb:g.Fb,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Hb:g.Hb,Gb:g.Gb},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=nb({context:Gn(b.config_||Fn())});if(!La(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=dq[m])&&Bq(g.batchRequest,m,n);delete dq[m];g.dangerousLogToVisitorSession=
"visitorOnlyApprovedKey"===m;Cq(g.batchRequest,h,g.dangerousLogToVisitorSession);Dq(e);g.Hb=function(q){U("start_client_gcf")&&pf.qa(function(){return B(function(p){return z(p,Eq(q),0)})});
k--;k||c()};
g.Fb=0;g.Gb=function(q){return function(){q.Fb++;if(e.bypassNetworkless&&1===q.Fb)try{no(b,l,q.batchRequest,Fq({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Hb,q.Gb,f)),aq=!1}catch(p){pj(p),d()}k--;k||c()}}(g);
try{no(b,l,g.batchRequest,Fq(e,g.dangerousLogToVisitorSession,g.Hb,g.Gb,f)),aq=!1}catch(q){pj(q),d()}}}
function xq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,n=a.get(m);l=new ej;var q=b.config_||Fn(),p=new Ni,t=new Gi;K(t,1,q.xc);K(t,2,q.wc);Qd(t,16,q.kd);K(t,17,q.vc);if(q.Qb){var u=q.Qb,A=new Di;u.coldConfigData&&K(A,1,u.coldConfigData);u.appInstallData&&K(A,6,u.appInstallData);u.coldHashData&&K(A,3,u.coldHashData);u.hotHashData&&A.g(u.hotHashData);J(t,Di,62,A)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);Bd(t,65,u)}u=T("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=sj();if(0<u.length){A=new Ji;for(var G=0;G<u.length;G++){var R=new Hi;K(R,1,u[G].key);Ed(R,2,Ii,hd(u[G].value));Kd(A,15,Hi,R)}J(p,Ji,5,A)}Hn(q,t);In(p);Jn(t);Kn(q,t);Ln(t);U("start_client_gcf")&&Mn(t);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(q=new Mi,K(q,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&
(q=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Hd(p,Mi,3)||new Mi,q=K(u,18,q),J(p,Mi,3,q));q=t;u=w(Object.entries(Jj(T("DEVICE",""))));for(A=u.next();!A.done;A=u.next())G=w(A.value),A=G.next().value,G=G.next().value,"cbrand"===A?K(q,12,G):"cmodel"===A?K(q,13,G):"cbr"===A?K(q,87,G):"cbrver"===A?K(q,88,G):"cos"===A?K(q,18,G):"cosver"===A?K(q,19,G):"cplatform"===A&&Qd(q,42,tk(G));J(p,Gi,1,t);J(l,Ni,1,p);if(t=eq[m])a:{if(Md(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(l,dj,4,t);
t=Hd(l,Ni,1)||new Ni;q=Hd(t,Mi,3)||new Mi;u=new Li;K(u,2,m);Qd(u,1,p);Kd(q,12,Li,u);J(t,Mi,3,q)}delete eq[m];m="visitorOnlyApprovedKey"===m;Gq()||Pd(l,2,g);!m&&(p=T("EVENT_ID"))&&(t=Hq(),q=new cj,K(q,1,p),Pd(q,2,t),J(l,cj,5,q));Dq(d);if(U("jspb_serialize_with_worker")&&(p=Tn())&&d.writeThenSend){cq.set(bq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),clientEvents:n,
key:bq});bq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new aj(n[t]))}catch(S){pj(new zk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())Kd(l,3,aj,p.value);n={startTime:Y(),ticks:{},infos:{}};l=Sd(l);n.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&Pn("gel_jspb_serialize",n,{sampleRate:.1});Iq(l,b,c,d,e,f,m,h)}}
function Iq(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=Aq(f);d=Fq(d,g,function(k){U("start_client_gcf")&&pf.qa(function(){return B(function(l){return z(l,Eq(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;no(b,f,"",d);aq=!1}
function Dq(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function Fq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,oe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};Gq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Cq(a,b,c){Gq()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=Hq(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Hq(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Sp/2));a++;a>Sp&&(a=1);jj("BATCH_CLIENT_COUNTER",a);return a}
function Bq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function iq(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=rj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))Lp=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",Lp),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function Gq(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function uq(a,b){return U("transport_use_scheduler")?U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Dk(function(){if("none"===Kp().j)a();else{var c={};Kp().install((c.none={lb:a},c))}},b):Dk(a,b):Bj(a,b)}
function yq(a){U("transport_use_scheduler")?pf.ba(a):window.clearTimeout(a)}
function Eq(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Ci.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Bi.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(m=sp().resolve(new np))?g?e?z(n,Cn(m,g,e),2):z(n,Cn(m,g),2):n.B(2):n.return()}return l?h?z(n,Dn(m,l,h),0):z(n,Dn(m,l),0):n.B(0)})}
function tq(a,b){b=void 0===b?200:b;return a?300===b?Zp:Xp:300===b?Yp:Wp}
function lq(a){if(U("enable_web_tiered_gel")){a=Jo[a||""];var b,c;if(null==sp().resolve(new np))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function kq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Jo[b])return b}
function mq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function pq(a){return"gelDebuggingEvent"===a}
function Aq(a){return(void 0===a?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Jq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Jq);
function Kq(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=hp();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:Lq(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Jq[d.sequenceGroup]);(d.sendIsolatedPayload?nq:hq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function Mq(a){sq(void 0,void 0,void 0===a?!1:a)}
function Lq(a){Jq[a]=a in Jq?Jq[a]+1:0;return Jq[a]}
;var Nq=[];function Oq(a,b,c){c=void 0===c?{}:c;var d=gp;T("ytLoggingEventsDefaultDisabled",!1)&&gp===gp&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=hp(),c.timestamp=Y()),Nq.push({Bc:a,payload:b,options:c})):Kq(a,b,d,c)}
;var Pq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Pq);function Qq(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:gp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());Pd(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new $i;if(c.lact)Pd(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)Pd(e,1,-1);else{var f=hp();Pd(e,1,isFinite(f)?f:-1)}if(c.sequenceGroup&&!U("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=Lq(f),h=new Zi;Pd(h,2,g);K(h,1,f);J(e,Zi,3,h);c.endOfSequence&&delete Pq[c.sequenceGroup]}J(b,
$i,33,e);(c.sendIsolatedPayload?rq:qq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var Rq=new Set,Sq=0,Tq=0,Uq=0,Vq=[],Wq=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Xq(a){try{Rq.add(a.message)}catch(b){}Sq++}
function Yq(){for(var a=w(Wq),b=a.next();!b.done;b=a.next()){var c=Lb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Zq(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Wj(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function $q(){var a;return B(function(b){return(a=If())?b.return(a.then(function(c){c=Sd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Gc(d,3)})):b.return(Promise.resolve(null))})}
;var ar={};function br(a){return ar[a]||(ar[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var cr={},dr=[],Fg=new M,er={};function fr(){for(var a=w(dr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function gr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[br(b)]:a.getAttribute("data-"+b):null;return c}
function hr(a){Fg.cb.apply(Fg,arguments)}
;function ir(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function jr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function kr(a,b,c){lr||(lr={},mr=new Set,Aj(window,"message",function(d){a:if(mr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=lr[e.id];f&&d.origin===f.Tc&&(d=f.Ed,d.H=!0,d.H&&(cb(d.u,d.sendMessage,d),d.u.length=0),d.hc(e))}}));
a=String(jr(a,"host"));lr[c]={Ed:b,Tc:a};mr.add(a)}
var lr=null,mr=null;var nr=window;
function or(a,b,c){this.o=this.g=this.h=null;this.i=0;this.H=!1;this.u=[];this.j=null;this.S={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?bc(a.src):"https://www.youtube.com"),this.h=new ir(b),c||(b=pr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),cr[this.g.id]=this,window.postMessage){this.j=
new M;qr(this);b=jr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in er)er.hasOwnProperty(e)&&rr(this,e)}}
r=or.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.hc=function(a){sr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);tr(this,a);return this};
function rr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&tr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(cr[this.g.id]=null);Ee(this.j);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);lr&&(lr[this.id]=null);this.h=null;a=this.g;for(var c in lb)lb[c][0]==a&&yj(c);this.o=this.g=null};
r.lc=function(){return{}};
function ur(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.u.push(b)}
function sr(a,b,c){a.j.Ia||(c={target:a,data:c},a.j.cb(b,c),hr(a.M+"."+b,c))}
function pr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+jr(a.h,"title"));(b=jr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=jr(a.h,"height"))&&
c.setAttribute("height",b.toString());nr.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.lc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&cb(["debugjs","debugcss"],function(k){var l=fc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+jr(a.h,"host")+("/embed/"+jr(a.h,"videoId"))+"?"+dc(g);nr.yt_embedsEnableUaChProbe?$q().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=ie(l.href).toString();ee(c,je(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):nr.yt_embedsEnableIframeSrcWithIntent?(ee(c,je(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Cc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function qr(a){kr(a.h,a,a.id);a.i=Cj(a.Cc.bind(a));Aj(a.g,"load",function(){window.clearInterval(a.i);a.i=Cj(a.Cc.bind(a))})}
function tr(a,b){a.S[b]||(a.S[b]=!0,ur(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[bc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(tc){if(tc.name&&"SyntaxError"===tc.name){if(!(tc.message&&0<tc.message.indexOf("target origin ''"))){var e=void 0,f=tc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Sq)){var m=void 0,n=void 0,q=f,p=e,t=Xd(q),u=t.message||"Unknown Error",
A=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(A+": "+u)){var R=G.split("\n");R.shift();G=R.join("\n")}var S=t.lineNumber||"Not available",ea=t.fileName||"Not available",ab=G,Ra=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ga=0;Ga<q.args.length&&!(Ra=ok(q.args[Ga],"params."+Ga,p,Ra),500<=Ra);Ga++);else if(q.hasOwnProperty("params")&&q.params){var fa=q.params;if("object"===typeof q.params)for(n in fa){if(fa[n]){var oa="params."+n,pa=qk(fa[n]);p[oa]=pa;Ra+=
oa.length+pa.length;if(500<Ra)break}}else p.params=qk(fa)}if(Vq.length)for(var da=0;da<Vq.length&&!(Ra=ok(Vq[da],"params.context."+da,p,Ra),500<=Ra);da++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:A,lineNumber:S,fileName:ea,stack:ab,params:p,sampleWeight:1},Am=Number(q.columnNumber);isNaN(Am)||(W.lineNumber=W.lineNumber+":"+Am);if("IGNORED"===q.level)m=0;else a:{for(var Bm=kk(),Cm=w(Bm.Ca),Dh=Cm.next();!Dh.done;Dh=Cm.next()){var Dm=
Dh.value;if(W.message&&W.message.match(Dm.re)){m=Dm.weight;break a}}for(var Em=w(Bm.za),Eh=Em.next();!Eh.done;Eh=Em.next()){var Fm=Eh.value;if(Fm.lb(W)){m=Fm.weight;break a}}m=1}W.sampleWeight=m;for(var Gm=w(fk),Fh=Gm.next();!Fh.done;Fh=Gm.next()){var Gh=Fh.value;if(Gh.Ib[W.name])for(var Hm=w(Gh.Ib[W.name]),Hh=Hm.next();!Hh.done;Hh=Hm.next()){var Im=Hh.value,He=W.message.match(Im.regexp);if(He){W.params["params.error.original"]=He[0];for(var Ih=Im.groups,Jm={},uc=0;uc<Ih.length;uc++)Jm[Ih[uc]]=He[uc+
1],W.params["params.error."+Ih[uc]]=He[uc+1];W.message=Gh.Wb(Jm);break}}}W.params||(W.params={});var Km=kk();W.params["params.errorServiceSignature"]="msg="+Km.Ca.length+"&cb="+Km.za.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));tb("sample").constructor!==sb&&(W.params["params.fconst"]="true");var ld=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(ld);
if(0!==ld.sampleWeight&&!Rq.has(ld.message))if(h&&U("web_enable_error_204")){var Lm=ld;Zq(void 0===g?"ERROR":g,Lm);Xq(Lm)}else{var Jh=void 0,Kh=void 0,Mm=void 0,Nm=void 0,Lh=void 0,N=ld,Ob=g;Ob=void 0===Ob?"ERROR":Ob;if("ERROR"===Ob){lk.cb("handleError",N);if(U("record_app_crashed_web")&&0===Uq&&1===N.sampleWeight)if(Uq++,U("errors_via_jspb")){var Ar=new Yi;Lh=Qd(Ar,1,1);if(!U("report_client_error_with_app_crash_ks")){var Br=new Xi,Cr=new Wi,Dr=new Vi,Er=new Ui;var Fr=K(Er,1,N.message);var Gr=J(Dr,
Ui,3,Fr);Nm=J(Cr,Vi,5,Gr);Mm=J(Br,Wi,9,Nm);J(Lh,Xi,4,Mm)}var Om=U("jspb_sparse_encoded_pivot")?new aj([{}]):new aj;Jd(Om,Yi,20,bj,Lh);Qq("appCrashed",Om)}else{var Pm={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(Pm.systemHealth={crashData:{clientError:{logMessage:{message:N.message}}}});Oq("appCrashed",Pm)}Tq++}else"WARNING"===Ob&&lk.cb("handleWarning",N);if(U("kevlar_gel_error_routing"))a:{var md=Ob;if(U("errors_via_jspb")){if(Yq())Kh=void 0;else{var vc=new Ri;
K(vc,1,N.stack);N.fileName&&K(vc,4,N.fileName);var eb=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];0!==eb.length&&(1!==eb.length||isNaN(Number(eb[0]))?2!==eb.length||isNaN(Number(eb[0]))||isNaN(Number(eb[1]))||(Od(vc,2,Number(eb[0])),Od(vc,3,Number(eb[1]))):Od(vc,2,Number(eb[0])));var Pb=new Ui;K(Pb,1,N.message);K(Pb,3,N.name);Od(Pb,6,N.sampleWeight);"ERROR"===md?Qd(Pb,2,2):"WARNING"===md?Qd(Pb,2,1):Qd(Pb,2,0);var Mh=new Si;Bd(Mh,1,dd(!0));Jd(Mh,Ri,3,Ti,vc);var Qb=new Qi;K(Qb,3,window.location.href);
for(var Qm=T("FEXP_EXPERIMENTS",[]),Nh=0;Nh<Qm.length;Nh++){var Hr=gd(Qm[Nh]),Rm=Qb.s,Ir=Hr,Sm=Pc(Rm);Zc(Sm);Dd(Rm,Sm,5,2).push(Ir)}var Oh=kj();if(!lj()&&Oh)for(var Tm=w(Object.keys(Oh)),Rb=Tm.next();!Rb.done;Rb=Tm.next()){var Um=Rb.value,Ph=new Pi;K(Ph,1,Um);K(Ph,2,String(Oh[Um]));Kd(Qb,4,Pi,Ph)}var Qh=N.params;if(Qh){var Vm=w(Object.keys(Qh));for(Rb=Vm.next();!Rb.done;Rb=Vm.next()){var Wm=Rb.value,Rh=new Pi;K(Rh,1,"client."+Wm);K(Rh,2,String(Qh[Wm]));Kd(Qb,4,Pi,Rh)}}var Xm=T("SERVER_NAME"),Ym=T("SERVER_VERSION");
if(Xm&&Ym){var Sh=new Pi;K(Sh,1,"server.name");K(Sh,2,Xm);Kd(Qb,4,Pi,Sh);var Th=new Pi;K(Th,1,"server.version");K(Th,2,Ym);Kd(Qb,4,Pi,Th)}var Ie=new Vi;J(Ie,Qi,1,Qb);J(Ie,Si,2,Mh);J(Ie,Ui,3,Pb);Kh=Ie}var Zm=Kh;if(!Zm)break a;var $m=U("jspb_sparse_encoded_pivot")?new aj([{}]):new aj;Jd($m,Vi,163,bj,Zm);Qq("clientError",$m)}else{var Ja=void 0;Ja=void 0===Ja?{}:Ja;if(Yq())Jh=void 0;else{var nd={stackTrace:N.stack};N.fileName&&(nd.filename=N.fileName);var fb=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):
[];0!==fb.length&&(1!==fb.length||isNaN(Number(fb[0]))?2!==fb.length||isNaN(Number(fb[0]))||isNaN(Number(fb[1]))||(nd.lineNumber=Number(fb[0]),nd.columnNumber=Number(fb[1])):nd.lineNumber=Number(fb[0]));var Uh={level:"ERROR_LEVEL_UNKNOWN",message:N.message,errorClassName:N.name,sampleWeight:N.sampleWeight};"ERROR"===md?Uh.level="ERROR_LEVEL_ERROR":"WARNING"===md&&(Uh.level="ERROR_LEVEL_WARNNING");var Jr={isObfuscated:!0,browserStackInfo:nd};Ja.pageUrl=window.location.href;Ja.kvPairs=[];T("FEXP_EXPERIMENTS")&&
(Ja.experimentIds=T("FEXP_EXPERIMENTS"));var Vh=kj();if(!lj()&&Vh)for(var an=w(Object.keys(Vh)),Sb=an.next();!Sb.done;Sb=an.next()){var bn=Sb.value;Ja.kvPairs.push({key:bn,value:String(Vh[bn])})}var Wh=N.params;if(Wh){var cn=w(Object.keys(Wh));for(Sb=cn.next();!Sb.done;Sb=cn.next()){var dn=Sb.value;Ja.kvPairs.push({key:"client."+dn,value:String(Wh[dn])})}}var en=T("SERVER_NAME"),fn=T("SERVER_VERSION");en&&fn&&(Ja.kvPairs.push({key:"server.name",value:en}),Ja.kvPairs.push({key:"server.version",value:fn}));
Jh={errorMetadata:Ja,stackTrace:Jr,logMessage:Uh}}var gn=Jh;if(!gn)break a;Oq("clientError",gn)}if("ERROR"===md||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var Je=!0;Je=void 0===Je?!1:Je;var hn=Nq;Nq=[];if(hn)for(var jn=w(hn),Xh=jn.next();!Xh.done;Xh=jn.next()){var wc=Xh.value;Je?Kq(wc.Bc,wc.payload,gp,wc.options):Oq(wc.Bc,wc.payload,wc.options)}Mq(!0);if(!U("web_fp_via_jspb_and_json"))break b}Mq()}}U("suppress_error_204_logging")||Zq(Ob,N);Xq(N)}}}}}else throw tc;}else console&&
console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function vr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function wr(a){return 0===a.search("get")||0===a.search("is")}
;function xr(a,b){or.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(xr,or);r=xr.prototype;r.lc=function(){var a=jr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=jr(this.h,"embedConfig")){if(Ma(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.hc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ma(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":yr(this,a);break;case "initialDelivery":Ma(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},zr(this,a.apiInterface),yr(this,a));break;default:sr(this,b,a)}};
function yr(a,b){if(Ma(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+jr(a.h,"title"))))}}
function zr(a,b){cb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:vr(c)?this[c]=function(){this.playerInfo={};
this.ka={};ur(this,c,arguments);return this}:wr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ur(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=jr(this.h,"host")+("/embed/"+jr(this.h,"videoId")),b=Number(jr(this.h,"width")),c=Number(jr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Yb(a);d=Yb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function Kr(a){if("iframe"!==a.tagName.toLowerCase()){var b=gr(a,"videoid");b&&(b={videoId:b,width:gr(a,"width"),height:gr(a,"height")},new xr(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return cr[a]});
E("YT.scan",fr);E("YT.subscribe",function(a,b,c){Fg.subscribe(a,b,c);er[a]=!0;for(var d in cr)cr.hasOwnProperty(d)&&rr(cr[d],a)});
E("YT.unsubscribe",function(a,b,c){Eg(a,b,c)});
E("YT.Player",xr);or.prototype.destroy=or.prototype.destroy;or.prototype.setSize=or.prototype.setSize;or.prototype.getIframe=or.prototype.getIframe;or.prototype.addEventListener=or.prototype.addEventListener;xr.prototype.getVideoEmbedCode=xr.prototype.getVideoEmbedCode;xr.prototype.getOptions=xr.prototype.getOptions;xr.prototype.getOption=xr.prototype.getOption;
dr.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);cb(gb(a,b),Kr)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||fr();var Lr=C.onYTReady;Lr&&Lr();var Mr=C.onYouTubeIframeAPIReady;Mr&&Mr();var Nr=C.onYouTubePlayerAPIReady;Nr&&Nr();}).call(this);
