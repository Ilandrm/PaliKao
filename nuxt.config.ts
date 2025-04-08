export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "./asset/main.css",
    "primeicons/primeicons.css"
  ],
  compatibilityDate: "2024-11-01",
  ssr: true,
  modules: ["@primevue/nuxt-module"],
  primevue: {},
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
    baseURL: '/',
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
});
