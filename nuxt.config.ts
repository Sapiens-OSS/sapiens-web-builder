// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "icon", href: "/favicon.ico" },
      ],
      title: "Hammerstone Web Builder",
    },
  },
  content: {
    sources: {
      content: {
        driver: "github",
        repo: "Sapiens-OSS/sapiens-modding-wiki",
        branch: "master",
        dir: "docs",
        // Needs to match the catch all directory
        prefix: "/wiki"
      }
    }
  },
  ssr: false,
});
