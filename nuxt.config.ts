// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.ts" },
      { code: "fr", iso: "fr-FR", file: "fr-FR.ts" },
    ],
    langDir: "locales/",
    defaultLocale: "en",
  },
  content: {
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: "github-dark",
    },
  },
});
