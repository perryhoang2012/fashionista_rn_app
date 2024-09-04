import React, {useEffect} from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {styles} from './Loading.style';
import useGeneralStore from '@store/generalStore';
import {colors} from '@themes/colors';

const Loading = () => {
  const {isLoading, hideLoading} = useGeneralStore();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        hideLoading();
      }, 10000);
    }
  }, [hideLoading, isLoading]);

  return (
    <Modal
      transparent
      animationType="none"
      visible={isLoading}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color={colors.PRIMARY} />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
