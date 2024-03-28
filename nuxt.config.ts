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

  modules: [
    // PWA (work in progress)
    //"@vite-pwa/nuxt"
  ],

  // Run as a client-only app
  ssr: false,
});
