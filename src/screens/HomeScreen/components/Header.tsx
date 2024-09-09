import Block from '@components/Block';
import Button from '@components/Button';
import CustomSvg from '@components/CustomSvg';
import Input from '@components/Input';
import Text from '@components/Text';
import {getStatusBarHeight, scale, verticalScale} from '@helpers/uiHelper';
import {t} from '@locales';
import {colors} from '@themes/colors';
import {icon_camera} from '@themes/iconSvg';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

const Header = () => {
  const [valueSearch, setValueSearch] = useState('');
  const _renderSearch = () => {
    return (
      <Block row middle center style={styles.containerSearch}>
        <Input
          style={styles.input}
          value={valueSearch}
          onChangeValue={setValueSearch}
          placeholder={t('SEARCH')}
        />

        <Button middle center>
          <CustomSvg xml={icon_camera} width={20} height={20} />
        </Button>
      </Block>
    );
  };
  return (
    <Block space="between" row style={styles.container}>
      <Text bold size={28} weight={'700'}>
        {t('SHOP')}
      </Text>
      {_renderSearch()}
    </Block>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight + verticalScale(10),
    width: '100%',
    backgroundColor: colors.WHITE,
    paddingBottom: verticalScale(10),
  },
  containerSearch: {
    height: verticalScale(30),
    borderRadius: scale(18),
    backgroundColor: colors.BACKGROUND_INPUT,
    width: '65%',
    paddingHorizontal: scale(16),
  },
  input: {
    width: '90%',
    paddingHorizontal: 0,
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
