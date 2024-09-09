import React, {useState} from 'react';
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

  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <FastImage
        style={customImageStyles}
        source={isError ? require('@assets/images/logo.png') : source}
        resizeMode={FastImage.resizeMode[resizeMode]}
        onError={handleError}
      />
    </View>
  );
};

export default React.memo(CustomImage);
