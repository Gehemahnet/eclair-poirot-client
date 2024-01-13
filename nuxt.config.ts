
export default defineNuxtConfig({
  devtools: {enabled: true},
  vite: {
    server: {
      proxy: {
        '/api/': {
          target: 'http://localhost:8000',
          changeOrigin: true,
        },
      },
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-primevue',
  ],
  i18n: {
    vueI18n: './i18n/config.ts',
  },
  googleFonts: {
    families: {
      Roboto: [400, 600, 700],
    },
  },
  css: [
    'primevue/resources/themes/lara-light-green/theme.css',
    '~/assets/css/app.css',
    '~/assets/css/variables.css',
  ],
  sourcemap: {
    server: true,
    client: true,
  },


});
