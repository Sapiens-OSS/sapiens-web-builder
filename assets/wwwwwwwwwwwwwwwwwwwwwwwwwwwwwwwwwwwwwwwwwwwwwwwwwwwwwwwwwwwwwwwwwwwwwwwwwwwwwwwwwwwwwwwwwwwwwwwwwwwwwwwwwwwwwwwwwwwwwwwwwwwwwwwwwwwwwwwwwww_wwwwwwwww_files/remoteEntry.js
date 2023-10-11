var mfeAppShell;(()=>{const e=["background-color: black; display: inline-block; font-size: 12px; padding: 6px 16px; line-height: 2; border-left: 6px solid skyblue; color: skyblue; font-weight: bold; ","background-color: black; display: inline-block; font-size: 12px; padding: 6px 16px; line-height: 2; color: white; "],t=new TextDecoder("utf8"),r=e=>t.decode(new Uint8Array(e.data));console.groupCollapsed(r({type:"Buffer",data:[240,159,154,128]})+" Education Perfect Application Shell (Micro Front-end)"),console.log("%c"+r({type:"Buffer",data:[240,159,145,139]})+" Name:        %cEducation Perfect Application Shell",...e),console.log("%c"+r({type:"Buffer",data:[240,159,148,145]})+" Key:         %cmfeAppShell",...e),console.log("%c"+r({type:"Buffer",data:[240,159,140,142]})+" Environment: %clive",...e),console.log("%c"+r({type:"Buffer",data:[240,159,148,151]})+" URL:         %chttps://mfe-app-shell.educationperfect.com/release/",...e),console.log("%c"+r({type:"Buffer",data:[240,159,143,151,239,184,143]})+" Build:       %crelease",...e),console.log("%c"+r({type:"Buffer",data:[240,159,155,184]})+" Source:      %crelease-2023-10-02-vigilant-bee",...e),console.groupEnd()})(),(()=>{"use strict";var e,t,r,a,o,n,f={5326:(e,t,r)=>{var a={"./App":()=>Promise.all([r.e(84),r.e(117)]).then((()=>()=>r(117)))},o=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),n=(e,t)=>{if(r.S){var a="default",o=r.S[a];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>o,init:()=>n})},7849:e=>{e.exports=mfeClassManagement},6502:e=>{e.exports=mfeClassSync},4541:e=>{e.exports=mfeControlPanel},2364:e=>{e.exports=mfeEnrolments},8409:e=>{e.exports=mfeExperimentalSettings},796:e=>{e.exports=mfeGlobalNavigation},6452:e=>{e.exports=mfeGlobalScoreboard},6592:e=>{e.exports=mfeLearningPathways},528:e=>{e.exports=mfeModules},3158:e=>{e.exports=mfeNavigationTeacher},7281:e=>{e.exports=mfeResourceLibrary},6257:e=>{e.exports=mfeSchool},1458:e=>{e.exports=mfeSmpParent},8333:e=>{e.exports=mfeStudentApp},7074:e=>{e.exports=mfeUserAccounts}},d={};function c(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={exports:{}};return f[e].call(r.exports,r,r.exports,c),r.exports}c.m=f,c.c=d,c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var o=Object.create(null);c.r(o);var n={};e=e||[null,t({}),t([]),t(t)];for(var f=2&a&&r;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((e=>n[e]=()=>r[e]));return n.default=()=>r,c.d(o,n),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+"-"+{82:"ce7199b3070a7e3cc472",84:"9bf57f957725084c2462",117:"e9097859e277b75fc699",172:"1aa3f438597d19bcaa9e",174:"31caf5f229a03fca521d",213:"8a3ac450c114ad83fdf3",214:"5283b931af1d78218442",321:"da1fbbfc928ff2a20aee",398:"57ec63ea7ce87f4819b6",410:"69d600f925e8fcf5fd5f",428:"a9157f86fa639940f16c",476:"eb49e6a5836e0dfd210c",508:"b7c1a169a87877492f9d",536:"3c8b5a09db307899599c",560:"6e8648c309e93e88426b",566:"d3811da8519ab40b1899",584:"c5d6755c514f8580e452",603:"26a4c78f47ff114a0d93",629:"7e7744a79bc3e7ec3cf9",706:"f6e772a5360d336a53da",712:"cc7b4bfca2b72558d3ce",727:"a7459b32d89c10717252",747:"4fd9558299fbf08f1a10",759:"bd851f98362734fe26f6",781:"43b90e4c21dd9f5166c6",819:"6496f1162666972b8ce1",832:"1e71e412c7e8a2aab176",847:"e29652211d7e3ced92f3",929:"9d870ee65ccdf02bcba6"}[e]+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="mfe-app-shell:",c.l=(e,t,o,n)=>{if(r[e])r[e].push(t);else{var f,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),i=0;i<l.length;i++){var p=l[i];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==a+o){f=p;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",a+o),f.src=e,0!==f.src.indexOf(window.location.origin+"/")&&(f.crossOrigin="anonymous")),r[e]=[t];var s=(t,a)=>{f.onerror=f.onload=null,clearTimeout(u);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(a))),t)return t(a)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),d&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={172:[7162],174:[5174],213:[1213],321:[5321],398:[8398],410:[7410],428:[3428],476:[4476],508:[2508],536:[2536],560:[4560],566:[2566],584:[2584],603:[9603],629:[6629],706:[706],712:[5712],747:[4747],781:[7781],819:[5819],832:[2832],847:[3847],929:[3929]},n={706:["default","./FeatureService",528],1213:["default","./Wrapper",8333],2508:["default","./Wrapper",4541],2536:["default","./Api",796],2566:["default","./App",1458],2584:["default","./App",7074],2832:["default","./App",8409],3428:["default","./App",2364],3847:["default","./EdPotential",796],3929:["default","./Appcues",528],4476:["default","./App",3158],4560:["default","./Api",8409],4747:["default","./Hotjar",528],5174:["default","./App",7849],5321:["default","./App",7281],5712:["default","./Session",528],5819:["default","./App",6452],6629:["default","./App",796],7162:["default","./Admin",796],7410:["default","./App",6257],7781:["default","./App",6502],8398:["default","./Logger",528],9603:["default","./Discover",6592]},c.f.remotes=(e,t)=>{c.o(o,e)&&o[e].forEach((e=>{var r=c.R;r||(r=[]);var a=n[e];if(!(r.indexOf(a)>=0)){if(r.push(a),a.p)return t.push(a.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+a[1]+'" from '+a[2]),c.m[e]=()=>{throw t},a.p=0},f=(e,r,n,f,d,c)=>{try{var l=e(r,n);if(!l||!l.then)return d(l,f,c);var i=l.then((e=>d(e,f)),o);if(!c)return i;t.push(a.p=i)}catch(e){o(e)}},d=(e,t,o)=>f(t.get,a[1],r,0,l,o),l=t=>{a.p=1,c.m[e]=e=>{e.exports=t()}};f(c,a[2],0,0,((e,t,r)=>e?f(c.I,a[0],0,e,d,r):o()),1)}}))},(()=>{c.S={};var e={},t={};c.I=(r,a)=>{a||(a=[]);var o=t[r];if(o||(o=t[r]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[r])return e[r];c.o(c.S,r)||(c.S[r]={});var n=c.S[r],f="mfe-app-shell",d=e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(t);var t};try{var o=c(e);if(!o)return;var n=e=>e&&e.init&&e.init(c.S[r],a);if(o.then)return l.push(o.then(n,t));var f=n(o);if(f&&f.then)return l.push(f.catch(t))}catch(e){t(e)}},l=[];switch(r){case"default":((e,t,r,a)=>{var o=n[e]=n[e]||{},d=o[t];(!d||!d.loaded&&(1!=!d.eager?a:f>d.from))&&(o[t]={get:()=>c.e(759).then((()=>()=>c(3759))),from:f,eager:!1})})("single-spa","5.9.3"),d(528),d(8333),d(7074),d(4541),d(7281),d(1458),d(2364),d(6257),d(6502),d(6452),d(6592),d(7849),d(8409),d(796),d(3158)}return l.length?e[r]=Promise.all(l).then((()=>e[r]=1)):e[r]=1}}})(),c.p="https://mfe-app-shell.educationperfect.com/release/";var l={314:0};c.f.compat=(e,t)=>{l[e]?t.push(l[e]):0!==l[e]&&{727:1}[e]&&t.push(l[e]=new Promise((function(t,r){for(var a=({}[e]||e)+"-"+{82:"31d6cfe0d16ae931b73c",84:"31d6cfe0d16ae931b73c",117:"31d6cfe0d16ae931b73c",172:"31d6cfe0d16ae931b73c",174:"31d6cfe0d16ae931b73c",213:"31d6cfe0d16ae931b73c",214:"31d6cfe0d16ae931b73c",321:"31d6cfe0d16ae931b73c",398:"31d6cfe0d16ae931b73c",410:"31d6cfe0d16ae931b73c",428:"31d6cfe0d16ae931b73c",476:"31d6cfe0d16ae931b73c",508:"31d6cfe0d16ae931b73c",536:"31d6cfe0d16ae931b73c",560:"31d6cfe0d16ae931b73c",566:"31d6cfe0d16ae931b73c",584:"31d6cfe0d16ae931b73c",603:"31d6cfe0d16ae931b73c",629:"31d6cfe0d16ae931b73c",706:"31d6cfe0d16ae931b73c",712:"31d6cfe0d16ae931b73c",727:"b6a91b6c03b158faff97",747:"31d6cfe0d16ae931b73c",759:"31d6cfe0d16ae931b73c",781:"31d6cfe0d16ae931b73c",819:"31d6cfe0d16ae931b73c",832:"31d6cfe0d16ae931b73c",847:"31d6cfe0d16ae931b73c",929:"31d6cfe0d16ae931b73c"}[e]+".css",o=c.p+a,n=document.getElementsByTagName("link"),f=0;f<n.length;f++){var d=(p=n[f]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(d===a||d===o))return t()}var i=document.getElementsByTagName("style");for(f=0;f<i.length;f++){var p;if((d=(p=i[f]).getAttribute("data-href"))===a||d===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var a=t&&t.target&&t.target.src||o,n=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete l[e],s.parentNode.removeChild(s),r(n)},s.href=o,0!==s.href.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),document.getElementsByTagName("head")[0].appendChild(s)})).then((function(){l[e]=0})))},(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},t=e=>{var r=e[0],a="";if(1===e.length)return"*";if(r+.5){a+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,n=1;n<e.length;n++)o--,a+="u"==(typeof(d=e[n]))[0]?"-":(o>0?".":"")+(o=2,d);return a}var f=[];for(n=1;n<e.length;n++){var d=e[n];f.push(0===d?"not("+c()+")":1===d?"("+c()+" || "+c()+")":2===d?f.pop()+" "+f.pop():t(d))}return c();function c(){return f.pop().replace(/^\((.+)\)$/,"$1")}},r=(t,a)=>{if(0 in t){a=e(a);var o=t[0],n=o<0;n&&(o=-o-1);for(var f=0,d=1,c=!0;;d++,f++){var l,i,p=d<t.length?(typeof t[d])[0]:"";if(f>=a.length||"o"==(i=(typeof(l=a[f]))[0]))return!c||("u"==p?d>o&&!n:""==p!=n);if("u"==i){if(!c||"u"!=p)return!1}else if(c)if(p==i)if(d<=o){if(l!=t[d])return!1}else{if(n?l>t[d]:l<t[d])return!1;l!=t[d]&&(c=!1)}else if("s"!=p&&"n"!=p){if(n||d<=o)return!1;c=!1,d--}else{if(d<=o||i<p!=n)return!1;c=!1}else"s"!=p&&"n"!=p&&(c=!1,d--)}}var s=[],u=s.pop.bind(s);for(f=1;f<t.length;f++){var h=t[f];s.push(1==h?u()|u():2==h?u()&u():h?r(h,a):!u())}return!!u()},a=(t,r)=>{var a=t[r];return Object.keys(a).reduce(((t,r)=>!t||!a[t].loaded&&((t,r)=>{t=e(t),r=e(r);for(var a=0;;){if(a>=t.length)return a<r.length&&"u"!=(typeof r[a])[0];var o=t[a],n=(typeof o)[0];if(a>=r.length)return"u"==n;var f=r[a],d=(typeof f)[0];if(n!=d)return"o"==n&&"n"==d||"s"==d||"u"==n;if("o"!=n&&"u"!=n&&o!=f)return o<f;a++}})(t,r)?r:t),0)},o=(e,o,f,d)=>{var c=a(e,f);return r(d,c)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,a,o)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,f,c,d)),n(e[f][c])},n=e=>(e.loaded=1,e.get()),f=(e=>function(t,r,a,o){var n=c.I(t);return n&&n.then?n.then(e.bind(e,t,c.S[t],r,a,o)):e(t,c.S[t],r,a,o)})(((e,t,r,a,n)=>t&&c.o(t,r)?o(t,0,r,a):n())),d={},l={51:()=>f("default","single-spa",[1,5],(()=>c.e(759).then((()=>()=>c(3759)))))},i={727:[51]};c.f.consumes=(e,t)=>{c.o(i,e)&&i[e].forEach((e=>{if(c.o(d,e))return t.push(d[e]);var r=t=>{d[e]=0,c.m[e]=r=>{delete c.c[e],r.exports=t()}},a=t=>{delete d[e],c.m[e]=r=>{throw delete c.c[e],t}};try{var o=l[e]();o.then?t.push(d[e]=o.then(r).catch(a)):r(o)}catch(e){a(e)}}))}})(),(()=>{var e={314:0};c.f.j=(t,r)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^((21|31|8)4|117|727|759|82)$/.test(t)){var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=c.p+c.u(t),f=new Error;c.l(n,(r=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var a,o,[n,f,d]=r,l=0;if(n.some((t=>0!==e[t]))){for(a in f)c.o(f,a)&&(c.m[a]=f[a]);d&&d(c)}for(t&&t(r);l<n.length;l++)o=n[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmfe_app_shell=self.webpackChunkmfe_app_shell||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=c(5326);mfeAppShell=i})();
//# sourceMappingURL=remoteEntry.js.map