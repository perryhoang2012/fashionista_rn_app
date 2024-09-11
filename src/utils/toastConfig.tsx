import Block from '@components/Block';
import Button from '@components/Button';
import Text from '@components/Text';
import {colors} from '@themes/colors';
import React from 'react';
import {StyleSheet} from 'react-native';
import Toast, {BaseToastProps} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <Button opacity={0.9} onPress={() => Toast.hide()} style={styles.widthFull}>
      <Block middle center style={[styles.container, styles.backgroundSuccess]}>
        <Text medium center color="WHITE" size={14}>
          {props.text1}
        </Text>
      </Block>
    </Button>
  ),

  error: (props: BaseToastProps) => (
    <Button opacity={0.9} onPress={() => Toast.hide()} style={styles.widthFull}>
      <Block middle center style={[styles.container, styles.backgroundError]}>
        <Text medium center color="WHITE" size={14}>
          {props.text1}
        </Text>
      </Block>
    </Button>
  ),
  info: (props: BaseToastProps) => (
    <Button opacity={0.9} onPress={() => Toast.hide()} style={styles.widthFull}>
      <Block middle center style={[styles.container, styles.backgroundInfo]}>
        <Text medium center color="WHITE" size={14}>
          {props.text1}
        </Text>
      </Block>
    </Button>
  ),
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    alignSelf: 'center',
  },
  widthFull: {width: '100%'},
  backgroundSuccess: {backgroundColor: colors.PRIMARY},
  backgroundError: {backgroundColor: colors.BACKGROUND_ERROR},
  backgroundInfo: {backgroundColor: colors.BACKGROUND_INFO},
});
