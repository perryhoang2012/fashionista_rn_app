import Block from '@components/Block';
import {colors} from '@themes/colors';
import React from 'react';
import {Text} from 'react-native';
import Header from './components/Header';
import Banner from './components/Banner';

const HomeScreen = () => {
  // const {
  //   data: dataCategory,
  //   isLoading: loadingCategory,
  //   isError,
  //   status,
  //   error,
  // } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: () => getCategories(1, 6),
  // });

  return (
    <Block flex background={colors.WHITE} px={20}>
      <Header />
      <Banner />
      <Block flex>
        <Text>HomeScreen</Text>
      </Block>
      {/* <CountDownTimer timeEnd={'2024-09-06 23:59:59'} /> */}
    </Block>
  );
};

export default HomeScreen;
