var mfeAssessmentsStudent;!function(){"use strict";var e,n,t,r,o,i,u={7469:function(e,n,t){var r={"./App":function(){return Promise.all([t.e(594),t.e(74)]).then((function(){return function(){return t(6074)}}))}},o=function(e,n){return t.R=n,n=t.o(r,e)?r[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,n},i=function(e,n){if(t.S){var r=t.S.default,o="default";if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,n)}};t.d(n,{get:function(){return o},init:function(){return i}})},2818:function(e){e.exports=void 0}},s={};function a(e){var n=s[e];if(void 0!==n)return n.exports;var t=s[e]={exports:{}};return u[e].call(t.exports,t,t.exports,a),t.exports}a.m=u,a.c=s,a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,t){return a.f[t](e,n),n}),[]))},a.u=function(e){return e+"-"+{74:"8c9527a92f51a74428b6",594:"29e87529cc60d2576d3a"}[e]+".js"},a.miniCssF=function(e){return e+"-55885838df0b9e2f8720..css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},n="mfe-assessments-student:",a.l=function(t,r,o,i){if(e[t])e[t].push(r);else{var u,s;if(void 0!==o)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+o){u=l;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",n+o),u.src=t,0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous")),e[t]=[r];var d=function(n,r){u.onerror=u.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},r={},a.f.remotes=function(e,n){a.o(t,e)&&t[e].forEach((function(e){var t=a.R;t||(t=[]);var o=r[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return n.push(o.p);var i=function(n){n||(n=new Error("Container missing")),"string"==typeof n.message&&(n.message+='\nwhile loading "'+o[1]+'" from '+o[2]),u[e]=function(){throw n},o.p=0},s=function(e,t,r,u,s,a){try{var f=e(t,r);if(!f||!f.then)return s(f,u,a);var c=f.then((function(e){return s(e,u)}),i);if(!a)return c;n.push(o.p=c)}catch(e){i(e)}},f=function(e,n,r){return s(n.get,o[1],t,0,c,r)},c=function(n){o.p=1,u[e]=function(e){e.exports=n()}};s(a,o[2],0,0,(function(e,n,t){return e?s(a.I,o[0],0,e,f,t):i()}),1)}}))},function(){a.S={};var e={},n={};a.I=function(t,r){r||(r=[]);var o=n[t];if(o||(o=n[t]={}),!(r.indexOf(o)>=0)){if(r.push(o),e[t])return e[t];a.o(a.S,t)||(a.S[t]={}),a.S[t];var i=[];return e[t]=i.length?Promise.all(i).then((function(){return e[t]=1})):1}}}(),a.p=function(){const e=window.__MFE_APPLICATIONS__.mfeAssessmentsStudent;{const n=["background-color: black; display: inline-block; font-size: 12px; padding: 6px 16px; line-height: 2; border-left: 6px solid aquamarine; color: aquamarine; font-weight: bold; ","background-color: black; display: inline-block; font-size: 12px; padding: 6px 16px; line-height: 2; color: white; "],t=new TextDecoder("utf8"),r=e=>t.decode(new Uint8Array(e.data));console.groupCollapsed(r({type:"Buffer",data:[240,159,154,128]})+" Assessments (Student Section) (Micro Front-end)"),console.log("%c"+r({type:"Buffer",data:[240,159,145,139]})+" Name:  %cAssessments (Student Section)",...n),console.log("%c"+r({type:"Buffer",data:[240,159,148,145]})+" Key:   %cmfeAssessmentsStudent",...n),console.log("%c"+r({type:"Buffer",data:[240,159,148,151]})+" URL:   %c"+e,...n),console.log("%c"+r({type:"Buffer",data:[240,159,143,151,239,184,143]})+" Build: %crelease-fep-842-full-mfe-integration",...n),console.groupEnd()}return e}(),o=function(e){return new Promise((function(n,t){var r=a.miniCssF(e),o=a.p+r;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(u=t[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===n))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===e||o===n)return u}}(r,o))return n();!function(e,n,t,r){var o=document.createElement("link");o.setAttribute("data-mfe-style","mfeAssessmentsStudent"),o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=s,o.parentNode.removeChild(o),r(a)}},o.href=n,0!==o.href.indexOf(window.location.origin+"/")&&(o.crossOrigin="anonymous"),document.head.appendChild(o)}(e,o,n,t)}))},i={587:0},a.f.miniCss=function(e,n){i[e]?n.push(i[e]):0!==i[e]&&{74:1}[e]&&n.push(i[e]=o(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))},function(){var e={587:0};a.f.j=function(n,t){var r=a.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var i=a.p+a.u(n),u=new Error;a.l(i,(function(t){if(a.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}}),"chunk-"+n,n)}};var n=function(n,t){var r,o,i=t[0],u=t[1],s=t[2],f=0;for(r in u)a.o(u,r)&&(a.m[r]=u[r]);for(s&&s(a),n&&n(t);f<i.length;f++)o=i[f],a.o(e,o)&&e[o]&&e[o][0](),e[i[f]]=0},t=self.webpackChunkmfe_assessments_student=self.webpackChunkmfe_assessments_student||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var f=a(7469);mfeAssessmentsStudent=f}();
//# sourceMappingURL=remoteEntry.js.map