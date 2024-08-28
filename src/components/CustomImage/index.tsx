import React from 'react';
import {
  ActivityIndicator,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {styles} from './CustomImage.style';

type Props = {
  source: Source;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

/**
 * CustomImage component.
 *
 * @param {Props} props - The component props.
 * @param {Source} props.source - The image source.
 * @param {StyleProp<ImageStyle>} [props.style] - The image style.
 * @param {StyleProp<ViewStyle>} [props.containerStyle] - The container style.
 * @return {React.ReactElement} The rendered component.
 */
const CustomImage: React.FC<Props> = ({
  source,
  style,
  containerStyle,
}: Props): React.ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(true);

  /**
   * Handle load start event.
   *
   * @return {void} No return value.
   */
  const handleLoadStart = React.useCallback((): void => {
    setLoading(true);
  }, []);

  /**
   * Handle load end event.
   *
   * @return {void} No return value.
   */
  const handleLoadEnd = React.useCallback((): void => {
    setLoading(false);
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FastImage
        style={[styles.image, style]}
        source={source}
        onLoadEnd={handleLoadEnd}
        onLoadStart={handleLoadStart}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

export default React.memo(CustomImage);
