import {colors} from '@themes/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonSelect: {
    borderRadius: 18,
    width: 199,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  buttonCheck: {
    borderRadius: 20,
    width: 24,
    height: 24,
    borderColor: colors.WHITE,
    borderWidth: 3,
  },
});
