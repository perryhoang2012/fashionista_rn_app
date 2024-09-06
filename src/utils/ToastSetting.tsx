import {getStatusBarHeight} from '@helpers/uiHelper';
import React from 'react';
import Toast from 'react-native-toast-message';
import {toastConfig} from './toastConfig';

export default function ToastSettings() {
  return (
    <Toast
      topOffset={getStatusBarHeight + 10}
      config={toastConfig}
      position="top"
    />
  );
}
