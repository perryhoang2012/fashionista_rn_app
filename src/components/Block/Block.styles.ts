import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  middle: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.2)', // iOS
    shadowOffset: {width: 0, height: 2}, // iOS
    shadowOpacity: 0.8, // iOS
    shadowRadius: 3, // iOS
    elevation: 5,
  },
});
