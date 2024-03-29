// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
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
  googleFonts: {
    preload: true,
    families: {
      Inter: [400, 700],
      Oswald: [700],
      SourceSansPro: [400],
    },
  },
  content: {
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: "github-dark",
    },
  },
});
