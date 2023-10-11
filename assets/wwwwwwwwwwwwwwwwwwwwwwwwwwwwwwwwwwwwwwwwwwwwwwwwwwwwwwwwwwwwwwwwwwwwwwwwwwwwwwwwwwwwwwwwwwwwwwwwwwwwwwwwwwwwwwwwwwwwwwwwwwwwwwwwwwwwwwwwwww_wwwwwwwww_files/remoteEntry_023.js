var mfeModules;(()=>{const e=["background-color: black; display: inline-block; font-size: 12px; padding: 6px 16px; line-height: 2; border-left: 6px solid deeppink; color: deeppink; font-weight: bold; ","background-color: black; display: inline-block; font-size: 12px; padding: 6px 16px; line-height: 2; color: white; "],n=new TextDecoder("utf8"),t=e=>n.decode(new Uint8Array(e.data));console.groupCollapsed(t({type:"Buffer",data:[240,159,154,128]})+" Global Federated Module Utilities (Micro Front-end)"),console.log("%c"+t({type:"Buffer",data:[240,159,145,139]})+" Name:        %cGlobal Federated Module Utilities",...e),console.log("%c"+t({type:"Buffer",data:[240,159,148,145]})+" Key:         %cmfeModules",...e),console.log("%c"+t({type:"Buffer",data:[240,159,140,142]})+" Environment: %clive",...e),console.log("%c"+t({type:"Buffer",data:[240,159,148,151]})+" URL:         %chttps://mfe-modules.educationperfect.com/release/",...e),console.log("%c"+t({type:"Buffer",data:[240,159,143,151,239,184,143]})+" Build:       %crelease",...e),console.log("%c"+t({type:"Buffer",data:[240,159,155,184]})+" Source:      %crelease-2023-10-11-furry-fenix",...e),console.groupEnd()})(),function(){"use strict";var e,n,t,r,o={2011:function(e,n,t){var r={"./EventBus":function(){return t.e(398).then((function(){return function(){return t(4398)}}))},"./Session":function(){return t.e(87).then((function(){return function(){return t(8087)}}))},"./Notifications":function(){return t.e(511).then((function(){return function(){return t(1511)}}))},"./Hotjar":function(){return t.e(856).then((function(){return function(){return t(7856)}}))},"./Appcues":function(){return t.e(918).then((function(){return function(){return t(9918)}}))},"./Logger":function(){return t.e(663).then((function(){return function(){return t(1663)}}))},"./FeatureService":function(){return t.e(520).then((function(){return function(){return t(8520)}}))},"./Types":function(){return t.e(730).then((function(){return function(){return t(730)}}))}},o=function(e,n){return t.R=n,n=t.o(r,e)?r[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,n},i=function(e,n){if(t.S){var r="default",o=t.S[r];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=e,t.I(r,n)}};t.d(n,{get:function(){return o},init:function(){return i}})}},i={};function u(e){var n=i[e];if(void 0!==n)return n.exports;var t=i[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,u),t.loaded=!0,t.exports}u.m=o,u.c=i,u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,{a:n}),n},u.d=function(e,n){for(var t in n)u.o(n,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(n,t){return u.f[t](e,n),n}),[]))},u.u=function(e){return e+"-"+{76:"2d144dcc3bfe8ebbffcf",87:"23328527e8814817d483",122:"8b295dbc6504b7c13f42",129:"eed4371d90e3eb992c25",134:"ce388cf72d1b4fd18647",164:"cb2052231c984a92072b",206:"3de2b32988464d4c219d",243:"5fbd3d4a382a269113de",252:"6de1d5c523ae18dc132a",374:"6341a45bf26ac741ea40",387:"a066850f0b0d65b515bc",398:"918d9708bf98decf90f6",450:"845f02451c59d9764751",496:"6ede27c677749bd9db9d",511:"e2314a8797b16b1f3fbc",520:"0995640a4862f1045513",630:"313bcbcb65400dbba0fb",649:"b797477bee2124be8c84",663:"461a039a9c20bcb1b29c",726:"8d85278ace89e133bf7f",730:"203de619a6dea088a802",856:"438d14e58eb71e7ef6ad",905:"08ceae31354753b06d7a",918:"d24b40b10ed898ad8dd3"}[e]+".js"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},n="@educationperfect/mfe-modules:",u.l=function(t,r,o,i){if(e[t])e[t].push(r);else{var c,f;if(void 0!==o)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var l=a[d];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+o){c=l;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",n+o),c.src=t,0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous")),e[t]=[r];var s=function(n,r){c.onerror=c.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),f&&document.head.appendChild(c)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},t={},r={},u.f.remotes=function(e,n){u.o(t,e)&&t[e].forEach((function(e){var t=u.R;t||(t=[]);var o=r[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return n.push(o.p);var i=function(n){n||(n=new Error("Container missing")),"string"==typeof n.message&&(n.message+='\nwhile loading "'+o[1]+'" from '+o[2]),u.m[e]=function(){throw n},o.p=0},c=function(e,t,r,u,c,f){try{var a=e(t,r);if(!a||!a.then)return c(a,u,f);var d=a.then((function(e){return c(e,u)}),i);if(!f)return d;n.push(o.p=d)}catch(e){i(e)}},f=function(e,n,r){return c(n.get,o[1],t,0,a,r)},a=function(n){o.p=1,u.m[e]=function(e){e.exports=n()}};c(u,o[2],0,0,(function(e,n,t){return e?c(u.I,o[0],0,e,f,t):i()}),1)}}))},function(){u.S={};var e={},n={};u.I=function(t,r){r||(r=[]);var o=n[t];if(o||(o=n[t]={}),!(r.indexOf(o)>=0)){if(r.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={}),u.S[t];var i=[];return e[t]=i.length?Promise.all(i).then((function(){return e[t]=1})):1}}}(),u.p="https://mfe-modules.educationperfect.com/release/",function(){var e={770:0};u.f.j=function(n,t){var r=u.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var i=u.p+u.u(n),c=new Error;u.l(i,(function(t){if(u.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}}),"chunk-"+n,n)}};var n=function(n,t){var r,o,i=t[0],c=t[1],f=t[2],a=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)u.o(c,r)&&(u.m[r]=c[r]);f&&f(u)}for(n&&n(t);a<i.length;a++)o=i[a],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_educationperfect_mfe_modules=self.webpackChunk_educationperfect_mfe_modules||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var c=u(2011);mfeModules=c}();
//# sourceMappingURL=remoteEntry.js.map