export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18/config.ts',
  },
  sourcemap: {
    server: true,
    client: true,
  },


});
