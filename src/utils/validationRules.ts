import {t} from '@locales';

export const emailRules = {
  required: t('EMAIL_REQUIRED'),
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: t('INVALID_EMAIL'),
  },
};
