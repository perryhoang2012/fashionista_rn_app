import Block from '@components/Block';
import Button from '@components/Button';
import {colors} from '@themes/colors';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
const {width: D_WIDTH} = Dimensions.get('window');

type Props = {
  state: string;
  setState: (value: string) => void;
  onSubmit: () => void;
  isWrongPassword: boolean;
};

const InputPassword = (props: Props) => {
  const {state, setState, onSubmit, isWrongPassword} = props;
  const inputRef = useRef<TextInput>(null);

  const renderDots = () => {
    const maxDots = 6;
    const dots = [];

    for (let i = 0; i < maxDots; i++) {
      dots.push(
        <Block
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor:
                i < state.length
                  ? isWrongPassword
                    ? colors.RED
                    : colors.PRIMARY
                  : colors.PRIMARY_SECONDARY,
            },
          ]}
        />,
      );
    }
    return dots;
  };

  return (
    <Block middle center>
      <Button
        row
        middle
        center
        space="between"
        mb={20}
        width={D_WIDTH / 2}
        onPress={() => {
          if (inputRef?.current) {
            inputRef.current?.focus();
          }
        }}>
        {renderDots()}
      </Button>
      <TextInput
        ref={inputRef}
        value={state}
        onChangeText={e => {
          if (e.length > 6) {
            return;
          }
          setState(e);
        }}
        maxLength={6}
        secureTextEntry
        style={styles.hiddenInput}
        onSubmitEditing={onSubmit}
        blurOnSubmit={false}
        autoFocus
      />
    </Block>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  dot: {
    height: 17,
    width: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  hiddenInput: {
    height: 1,
    width: 1,
    opacity: 0,
    position: 'absolute',
  },
});
