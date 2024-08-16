// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      script: ["https://unpkg.com/@babel/standalone/babel.min.js"],
    },
  },

  modules: ["nuxt-monaco-editor"],

  // Run as a client-only app
  ssr: false,
});
