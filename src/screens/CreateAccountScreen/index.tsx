import Block from '@components/Block';
import Button from '@components/Button';
import InputOnForm from '@components/InputOnForm';
import KeyboardSpacer from '@components/KeyboardSpacer';
import Text from '@components/Text';
import {t} from '@locales';
import {goBack, replace} from '@navigation/NavigationService';
import {emailRules, passwordRules} from '@utils/validationRules';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ImageBackground} from 'react-native';
import {styles} from './CreateAccountScreen.styles';

const CreateAccountScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitted},
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    replace('BottomTab');
  };

  return (
    <Block flex>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={require('@assets/images/background_create_account.png')}>
        <Block flex center px={30}>
          <Text semiBold size={50} weight={'700'}>
            {t('CREATE_ACCOUNT')}
          </Text>
        </Block>
        <Block flex px={20}>
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
          <Block height={20} />
          <Controller
            control={control}
            name="password"
            rules={passwordRules}
            render={({field: {onChange, onBlur, value}}) => (
              <InputOnForm
                value={value}
                onChangeValue={onChange}
                onBlur={onBlur}
                placeholder={t('PASSWORD')}
                error={errors.password?.message as string}
                isSubmitted={isSubmitted}
                isPassword={true}
              />
            )}
          />
          <KeyboardSpacer />
          <Block mt={50}>
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

export default CreateAccountScreen;
