// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "icon", href: "/favicon.ico" },
      ],
      title: "Hammerstone Web Builder",
    },
  },
  // ssr: false,
});
