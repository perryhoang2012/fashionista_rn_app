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
    shadowColor: 'rgba(9, 9, 9, .2)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.41,
    elevation: 3,
    backgroundColor: 'white',
  },
});
