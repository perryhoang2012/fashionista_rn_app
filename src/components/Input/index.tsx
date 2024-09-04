import CustomSvg from '@components/CustomSvg';
import Text from '@components/Text';
import {colors} from '@themes/colors';
import {icon_eye_slash} from '@themes/iconSvg';
import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  ViewStyle,
} from 'react-native';
import Block from '../Block';
import Button from '../Button';
import {styles} from './Input.style';

type Props = {
  title?: string;
  value: string;
  onChangeValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  style?: ViewStyle;
  isPassword?: boolean;
  placeholder?: string;
  error?: string;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;

  isSubmitted?: boolean;
};

const Input = (props: Props) => {
  const {
    value,
    onChangeValue,
    keyboardType,
    style,
    isPassword,
    placeholder,
    error,
    onBlur,
    isSubmitted,
  } = props;

  const [isSecureText, setIsSecureText] = useState<boolean>(false);

  return (
    <>
      <Block style={[{...styles.container}, style]}>
        <TextInput
          secureTextEntry={isSecureText}
          value={value}
          onChangeText={onChangeValue}
          keyboardType={keyboardType || 'default'}
          style={{...styles.input}}
          placeholder={placeholder}
          onBlur={onBlur}
        />

        {isPassword && (
          <Button
            style={styles.buttonEye}
            onPress={() => setIsSecureText(pre => !pre)}>
            <CustomSvg xml={icon_eye_slash} />
          </Button>
        )}
      </Block>
      <Block height={20} mt={4}>
        {error && isSubmitted && (
          <Text size={14} color={colors.RED}>
            {error}
          </Text>
        )}
      </Block>
    </>
  );
};

export default Input;
