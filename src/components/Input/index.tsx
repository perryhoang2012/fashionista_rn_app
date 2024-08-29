import {KeyboardTypeOptions, TextInput, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Input.style';
import Block from '../Block';
import Button from '../Button';
import {SvgXml} from 'react-native-svg';
import {icon_eye_slash} from '@assets/icons';

type Props = {
  title?: string;
  value: string;
  onChangeValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  style?: ViewStyle;
  isPassword?: boolean;
  placeholder?: string;
};

const Input = (props: Props) => {
  const {value, onChangeValue, keyboardType, style, isPassword, placeholder} =
    props;

  const [isSecureText, setIsSecureText] = useState<boolean>(false);

  return (
    <Block style={[{...styles.container}, style]}>
      <TextInput
        secureTextEntry={isSecureText}
        value={value}
        onChangeText={onChangeValue}
        keyboardType={keyboardType || 'default'}
        style={{...styles.input}}
        placeholder={placeholder}
      />

      {isPassword && (
        <Button
          style={styles.buttonEye}
          onPress={() => setIsSecureText(pre => !pre)}>
          <SvgXml xml={icon_eye_slash} />
        </Button>
      )}
    </Block>
  );
};

export default Input;
