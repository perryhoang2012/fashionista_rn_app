import React from 'react';
import {ImageStyle, StyleProp, View, ViewStyle} from 'react-native';
import FastImage, {ResizeMode, Source} from 'react-native-fast-image';
import {styles} from './CustomImage.style';

type Props = {
  source: Source;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  resizeMode?: ResizeMode;
};

const CustomImage: React.FC<Props> = ({
  source,
  style,
  containerStyle,
  resizeMode = 'cover',
}: Props): React.ReactElement => {
  const customImageStyles = [style, styles.container];
  return (
    <View style={[styles.container, containerStyle]}>
      <FastImage
        style={customImageStyles}
        source={source}
        resizeMode={FastImage.resizeMode[resizeMode]}
      />
    </View>
  );
};

export default React.memo(CustomImage);
