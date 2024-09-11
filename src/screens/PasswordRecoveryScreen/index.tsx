import Avatar from '@components/Avatar';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomSvg from '@components/CustomSvg';
import Text from '@components/Text';
import {t} from '@locales';
import {goBack} from '@navigation/NavigationService';
import {icon_check} from '@themes/iconSvg';
import React, {useState} from 'react';
import {
  ImageBackground,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {styles} from './PasswordRecoveryScreen.styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const PasswordRecoveryScreen = () => {
  //   const route =
  //     useRoute<RouteProp<RootStackParamList, 'PasswordRecoveryScreen'>>();
  //   const {email} = route?.params;

  const [valueSelectMethodResetPassword, setValueSelectMethodResetPassword] =
    useState<string>('SMS');

  const [step, setStep] = useState<number>(1);

  // useFocusEffect(() => {
  //   setStep(1);
  // });

  const onSubmit = () => {
    setStep(2);
  };

  const _renderBody = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Button
              style={styles.buttonSelect}
              background={'PRIMARY_SECONDARY'}
              onPress={() => {
                setValueSelectMethodResetPassword('SMS');
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
              }}>
              <Block width={24}>
                <Text>{''}</Text>
              </Block>
              <Block flex center middle>
                <Text size={16} color={'PRIMARY'} bold>
                  {t('SMS')}
                </Text>
              </Block>
              <Block
                middle
                center
                background="PRIMARY"
                style={[styles.buttonCheck]}>
                {valueSelectMethodResetPassword === 'SMS' && (
                  <CustomSvg xml={icon_check} width={12} height={12} />
                )}
              </Block>
            </Button>
            <Button
              mt={10}
              style={styles.buttonSelect}
              background={'PINK_SECONDARY'}
              onPress={() => {
                setValueSelectMethodResetPassword('EMAIL');
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
              }}>
              <Block width={24}>
                <Text>{''}</Text>
              </Block>
              <Block flex center middle>
                <Text size={16} color={'PINK'} bold>
                  {t('EMAIL')}
                </Text>
              </Block>
              <Block
                middle
                center
                background="PINK"
                style={[styles.buttonCheck]}>
                {valueSelectMethodResetPassword === 'EMAIL' && (
                  <CustomSvg xml={icon_check} width={12} height={12} />
                )}
              </Block>
            </Button>
          </>
        );

      case 2:
        return (
          <>
            <Text>+98*******00</Text>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Block flex>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={require('@assets/images/background_create_account.png')}>
        <Block flex={2} middle center>
          <Avatar uri={require('@assets/images/avatar_male.png')} />
          <Block middle>
            <Text mb={12} mt={20} size={20} bold>
              {t('PASSWORD_RECOVERY')}
            </Text>
            <Block width={'70%'}>
              <Text size={16} light center>
                {t(
                  step === 1
                    ? 'SUBTITLE_PASSWORD_RECOVERY'
                    : 'ENTER_4_DIGITS_CODE',
                )}
              </Text>
            </Block>

            <Block mt={16}>{_renderBody()}</Block>
          </Block>
        </Block>
        <Block flex center px={20}>
          <Button
            middle
            center
            height={50}
            background={'PRIMARY'}
            radius={16}
            onPress={onSubmit}>
            <Text light size={22} color={'WHITE'}>
              {t('NEXT')}
            </Text>
          </Button>
          <Button middle center mt={14} onPress={() => goBack()}>
            <Text light size={15} color={'BLACK'}>
              {t('CANCEL')}
            </Text>
          </Button>
        </Block>
      </ImageBackground>
    </Block>
  );
};

export default PasswordRecoveryScreen;
