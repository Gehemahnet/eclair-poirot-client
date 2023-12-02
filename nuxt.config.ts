
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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/scss/mixins.scss" as *;
          @use "@/assets/scss/variables.scss" as *;
           `,
        },
      },
    },
  },
  modules: ['@nuxtjs/i18n', '@nuxt/image'],
  i18n: {
    vueI18n: './i18n/config.ts',
  },
  sourcemap: {
    server: true,
    client: true,
  },


});
