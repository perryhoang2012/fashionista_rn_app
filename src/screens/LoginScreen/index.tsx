import Block from '@components/Block';
import Button from '@components/Button';
import Input from '@components/Input';
import Text from '@components/Text';
import {t} from '@locales';
import {colors} from '@themes/colors';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {styles} from './LoginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <Block flex>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={require('@assets/images/background_login.png')}>
        <Block flex center />
        <Block flex px={20} space="between" pb={100}>
          <Block>
            <Text semiBold size={52}>
              {t('Login')}
            </Text>
            <Text mt={4} light size={19}>
              {t('SER_YOU_BACK')}
            </Text>
          </Block>

          <Block mt={20}>
            <Input
              value={email}
              onChangeValue={setEmail}
              placeholder={t('EMAIL')}
            />
          </Block>
          <Block>
            <Button
              middle
              center
              height={50}
              background={colors.PRIMARY}
              radius={16}>
              <Text light size={22} color={colors.WHITE}>
                {t('NEXT')}
              </Text>
            </Button>
            <Button middle center mt={14}>
              <Text light size={15} color={colors.BLACK}>
                {t('CANCEL')}
              </Text>
            </Button>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
};

export default LoginScreen;
