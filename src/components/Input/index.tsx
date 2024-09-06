import React from 'react';
import {KeyboardTypeOptions, TextInput, ViewStyle} from 'react-native';
import {styles} from './Input.styles';

type Props = {
  value: string;
  onChangeValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  style?: ViewStyle;
  placeholder?: string;
  middle?: boolean;
  center?: boolean;
};

const Input = (props: Props) => {
  const {
    value,
    onChangeValue,
    keyboardType,
    style,
    placeholder,
    middle,
    center,
  } = props;

  return (
    <TextInput
      value={value}
      onChangeText={onChangeValue}
      keyboardType={keyboardType || 'default'}
      style={[
        styles.container,
        center && styles.center,
        middle && styles.middle,
        style,
      ]}
      placeholder={placeholder}
    />
  );
};

export default Input;
