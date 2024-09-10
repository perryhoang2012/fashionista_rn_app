import Block from '@components/Block';
import CustomImage from '@components/CustomImage';
import React from 'react';
import {Source} from 'react-native-fast-image';
import {styles} from './Avatar.styles';

type Props = {
  uri: Source;
  width?: number;
  height?: number;
};

const Avatar = (props: Props) => {
  const {uri, width, height} = props;
  return (
    <Block
      middle
      center
      style={[styles.container, {width: width || 110, height: height || 110}]}>
      <CustomImage source={uri} style={styles.image} />
    </Block>
  );
};

export default Avatar;
