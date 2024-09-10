import Block from '@components/Block';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {styles} from './PasswordTypingScreen.styles';
import Text from '@components/Text';
import Avatar from '@components/Avatar';
import {t} from '@locales';
import Button from '@components/Button';
import {colors} from '@themes/colors';
import CustomSvg from '@components/CustomSvg';
import {icon_arrow_right} from '@themes/iconSvg';
import InputPassword from './components/InputPassword';
import {goBack, replace} from '@navigation/NavigationService';

const PasswordTypingScreen = () => {
  //   const route = useRoute();
  //   const {email} = route?.params;

  const [password, setPassword] = useState<string>('');

  const onSubmit = () => {
    replace('BottomTab');
  };

  return (
    <Block flex>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={require('@assets/images/background_login.png')}>
        <Block flex={2} middle center>
          <Avatar uri={require('@assets/images/avatar_male.png')} />
          <Text mt={20} size={28} bold>
            Hello, Perry!!!
          </Text>
          <Block middle>
            <Text mb={12} mt={20} size={18} light>
              {t('TYPE_YOU_PASSWORD')}
            </Text>
            <InputPassword
              state={password}
              setState={setPassword}
              onSubmit={onSubmit}
            />
          </Block>
        </Block>
        <Block flex row middle center>
          <Text mr={12} size={16} light>
            {t('NOT_YOU')}
          </Text>
          <Button
            background={colors.PRIMARY}
            width={30}
            height={30}
            radius={50}
            middle
            center
            onPress={() => goBack()}>
            <CustomSvg xml={icon_arrow_right} width={16} height={16} />
          </Button>
        </Block>
      </ImageBackground>
    </Block>
  );
};

export default PasswordTypingScreen;
