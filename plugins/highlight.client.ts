import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import lua from "highlight.js/lib/languages/lua";
import highlightJS from "@highlightjs/vue-plugin";
import "highlight.js/styles/atom-one-dark.css";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("lua", lua);
  nuxtApp.vueApp.use(highlightJS);
});
