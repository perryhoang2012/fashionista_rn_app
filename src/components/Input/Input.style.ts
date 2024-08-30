import {StyleSheet} from 'react-native';
import {moderateScale, scale} from '../../helpers/uiHelper';
import {colors} from '../../themes/colors';
import {fonts} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.WHITE_SECONDARY,
    borderRadius: 60,
    paddingHorizontal: 12,
  },
  input: {
    height: scale(40),
    width: '100%',
    borderRadius: scale(8),
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
