import {errorToast} from '@helpers/toast';
import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';
import {useEffect} from 'react';
import {Platform} from 'react-native';

const useOnlineManager = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener(state => {
        onlineManager.setOnline(
          state.isConnected !== null &&
            state.isConnected &&
            Boolean(state.isInternetReachable),
        );
        if (state.isConnected === false) {
          errorToast('No internet connection', 100000);
        }
      });
    }
  }, []);
};

export default useOnlineManager;
