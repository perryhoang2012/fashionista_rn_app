import Block from '@components/Block';
import CustomImage from '@components/CustomImage';
import Text from '@components/Text';
import {colors} from '@themes/colors';
import React from 'react';
import {styles} from './StartScreen.styles';
import Button from '@components/Button';
import CustomSvg from '@components/CustomSvg';
import {navigate} from '@navigation/NavigationService';
import {t} from '@locales';
import {icon_arrow_right} from '@themes/iconSvg';

const StartScreen = () => {
  const goToLogin = () => {
    navigate('LoginScreen');
  };
  return (
    <Block flex center background={colors.WHITE}>
      <Block flex />
      <Block flex={2} middle center>
        <CustomImage
          source={require('@assets/images/logo.png')}
          style={styles.logo}
        />
      </Block>

      <Block middle center flex px={20}>
        <Button
          radius={16}
          middle
          center
          background={colors.PRIMARY}
          height={50}
          width={'100%'}
          onPress={goToLogin}>
          <Text size={22} color={colors.WHITE}>
            {t('GET_STARTED')}
          </Text>
        </Button>
        <Button middle row mt={18} onPress={goToLogin}>
          <Text size={15} mr={16} light>
            {t('HAVE_AN_ACCOUNT')}
          </Text>
          <Block
            middle
            center
            background={colors.PRIMARY}
            width={30}
            height={30}
            radius={50}>
            <CustomSvg xml={icon_arrow_right} width={14} height={14} />
          </Block>
        </Button>
      </Block>
    </Block>
  );
};

export default StartScreen;
