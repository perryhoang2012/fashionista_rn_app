import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import useGeneralStore from 'src/store/generalStore';
import {styles} from './Loading.style';

const Loading = () => {
  const isLoading = useGeneralStore(state => state.isLoading);

  return (
    <Modal
      transparent
      animationType="none"
      visible={isLoading}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
