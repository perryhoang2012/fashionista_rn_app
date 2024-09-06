import Toast from 'react-native-toast-message';

export const toast = (
  text: string,
  type?: 'success' | 'warning' | 'info' | 'danger' | 'error',
  duration?: number,
  text2?: string,
) => {
  let toastType = type || 'success';
  if (type === 'warning' || type === 'info') {
    toastType = 'info';
  }
  if (type === 'danger' || type === 'error') {
    toastType = 'error';
  }

  return Toast.show({
    text1: text,
    text2,
    autoHide: true,
    type: toastType,
    visibilityTime: duration || 2000,
  });
};

export const errorToast = (title: string, duration?: number) => {
  toast(title, 'danger', duration || 5000);
};
