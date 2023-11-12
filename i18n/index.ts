export default defineI18nConfig(() => ({
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root'
  },
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  vueI18n: {
    fallbackLocale: 'ru'

  }
}))
