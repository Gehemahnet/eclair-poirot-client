import ru from '~/i18n/ru';
import auth from '~/i18n/ru/auth';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    ru: {
      ...ru,
      auth: auth,
    },
  },
}));
