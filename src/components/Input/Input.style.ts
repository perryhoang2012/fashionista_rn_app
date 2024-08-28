import {StyleSheet} from 'react-native';
import {moderateScale, scale} from '../../helpers/uiHelper';
import {colors} from '../../themes/colors';
import {fonts} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: scale(40),
    width: '100%',
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: colors.BLACK,
    paddingHorizontal: moderateScale({size: 10}),
    fontFamily: fonts.MEDIUM,
  },
  buttonEye: {
    position: 'absolute',
    right: moderateScale({size: 10}),
    top: scale(32),
    zIndex: 1,
  },
});
