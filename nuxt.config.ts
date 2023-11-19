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
  ],
  i18n: {
    vueI18n: './i18n/config.ts',
  },
  sourcemap: {
    server: true,
    client: true,
  },


});
