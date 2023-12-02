import ru from '~/i18n/ru';
import auth from '~/i18n/ru/auth';
import errors from '~/i18n/ru/errors';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    ru: {
      ...ru,
      auth: auth,
      errors: errors,
    },
  },
}));
