import Avatar from '@components/Avatar';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomSvg from '@components/CustomSvg';
import Text from '@components/Text';
import {t} from '@locales';
import {RootStackParamList} from '@models/navigation';
import {goBack, navigate, replace} from '@navigation/NavigationService';
import {RouteProp, useRoute} from '@react-navigation/native';
import {icon_arrow_right} from '@themes/iconSvg';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import InputPassword from './components/InputPassword';
import {styles} from './PasswordTypingScreen.styles';

const PasswordTypingScreen = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, 'PasswordTypingScreen'>>();
  const {email} = route?.params;

  const [password, setPassword] = useState<string>('');
  const [countWrongPassword, setCountWrongPassword] = useState<number>(0);
  const [isWrongPassword, setIsWrongPassword] = useState<boolean>(false);

  const onSubmit = () => {
    if (password === '123456') {
      setIsWrongPassword(false);
      setCountWrongPassword(0);
      setTimeout(() => {
        replace('BottomTab');
      }, 200);
    } else {
      setIsWrongPassword(true);
      setCountWrongPassword(countWrongPassword + 1);
    }
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
              isWrongPassword={isWrongPassword}
            />
            <Block mt={20} height={30}>
              {countWrongPassword >= 3 && (
                <Button
                  onPress={() =>
                    navigate('PasswordRecoveryScreen', {email: email})
                  }>
                  <Text size={16} light>
                    {t('FORGOT_YOUR_PASSWORD')}
                  </Text>
                </Button>
              )}
            </Block>
          </Block>
        </Block>
        <Block flex row middle center>
          <Text mr={12} size={16} light>
            {t('NOT_YOU')}
          </Text>
          <Button
            background={'PRIMARY'}
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
