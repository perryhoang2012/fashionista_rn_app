import {t} from '@locales';

export const emailRules = {
  required: t('EMAIL_REQUIRED'),
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: t('INVALID_EMAIL'),
  },
};

export const passwordRules = {
  required: t('PASSWORD_REQUIRED'),
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
    message: t('INVALID_PASSWORD'),
  },
};
