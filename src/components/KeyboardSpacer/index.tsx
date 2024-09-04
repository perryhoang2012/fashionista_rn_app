import React, {useEffect, useState, useCallback} from 'react';
import {
  Keyboard,
  LayoutAnimation,
  View,
  Dimensions,
  ViewStyle,
  Platform,
  StyleSheet,
  LayoutAnimationConfig,
  KeyboardEvent,
} from 'react-native';

type KeyboardSpacerProps = {
  topSpacing?: number;
  onToggle?: (isKeyboardOpened: boolean, keyboardSpace: number) => void;
  style?: ViewStyle;
};

const defaultAnimation: LayoutAnimationConfig = {
  duration: 500,
  create: {
    duration: 300,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 200,
  },
};

const KeyboardSpacer: React.FC<KeyboardSpacerProps> = ({
  topSpacing = 0,
  onToggle = () => null,
  style,
}) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  const updateKeyboardSpace = useCallback(
    (event: KeyboardEvent) => {
      if (!event.endCoordinates) {
        return;
      }

      let animationConfig = defaultAnimation;
      if (Platform.OS === 'ios') {
        animationConfig = LayoutAnimation.create(
          event.duration,
          LayoutAnimation.Types[event.easing],
          LayoutAnimation.Properties.opacity,
        );
      }
      LayoutAnimation.configureNext(animationConfig);

      const screenHeight = Dimensions.get('window').height;
      const calculatedKeyboardSpace =
        screenHeight - event.endCoordinates.screenY + topSpacing;

      setKeyboardSpace(calculatedKeyboardSpace);
      onToggle(true, calculatedKeyboardSpace);
    },
    [onToggle, topSpacing],
  );

  const resetKeyboardSpace = useCallback(
    (event: KeyboardEvent) => {
      let animationConfig = defaultAnimation;
      if (Platform.OS === 'ios') {
        animationConfig = LayoutAnimation.create(
          event.duration,
          LayoutAnimation.Types[event.easing],
          LayoutAnimation.Properties.opacity,
        );
      }
      LayoutAnimation.configureNext(animationConfig);

      setKeyboardSpace(0);
      onToggle(false, 0);
    },
    [onToggle],
  );

  useEffect(() => {
    const updateListener =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const resetListener =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

    const listeners = [
      Keyboard.addListener(updateListener, updateKeyboardSpace),
      Keyboard.addListener(resetListener, resetKeyboardSpace),
    ];

    return () => {
      listeners.forEach(listener => listener.remove());
    };
  }, [updateKeyboardSpace, resetKeyboardSpace]);

  return <View style={[styles.container, {height: keyboardSpace}, style]} />;
};

export default KeyboardSpacer;

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
