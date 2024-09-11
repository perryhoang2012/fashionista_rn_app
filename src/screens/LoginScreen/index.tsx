import Block from '@components/Block';
import Button from '@components/Button';
import InputOnForm from '@components/InputOnForm';
import KeyboardSpacer from '@components/KeyboardSpacer';
import Text from '@components/Text';
import {t} from '@locales';
import {goBack, navigate} from '@navigation/NavigationService';
import {emailRules} from '@utils/validationRules';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ImageBackground} from 'react-native';
import {styles} from './LoginScreen.styles';

const LoginScreen = () => {
  // const {showLoading, hideLoading} = useGeneralStore();
  const {
    getValues,
    control,
    handleSubmit,
    formState: {errors, isSubmitted},
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    // showLoading();

    setTimeout(() => {
      // hideLoading();
      navigate('PasswordTypingScreen', {email: getValues('email')});
    }, 500);
  };

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
            <Controller
              control={control}
              name="email"
              rules={emailRules}
              render={({field: {onChange, onBlur, value}}) => (
                <InputOnForm
                  value={value}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  placeholder={t('EMAIL')}
                  error={errors.email?.message as string}
                  isSubmitted={isSubmitted}
                />
              )}
            />
            <KeyboardSpacer />
          </Block>
          <Block>
            <Button
              middle
              center
              height={50}
              background={'PRIMARY'}
              radius={16}
              onPress={handleSubmit(onSubmit)}>
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
        </Block>
      </ImageBackground>
    </Block>
  );
};

export default LoginScreen;
