import Block from '@components/Block';
import React from 'react';
import {StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadingCategory = () => {
  return (
    <SkeletonPlaceholder borderRadius={9}>
      <Block style={styles.container} />
    </SkeletonPlaceholder>
  );
};

export default LoadingCategory;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 636,
    marginTop: 19,
    backgroundColor: 'red',
  },
});
