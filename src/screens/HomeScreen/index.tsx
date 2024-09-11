import Block from '@components/Block';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Header from './components/Header';
import {styles} from './HomeScreen.styles';

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
    <Block flex background={'WHITE'}>
      <Header />
      <ScrollView style={styles.containerScrollView}>
        <Banner />
        <Categories />
        <Block flex>
          <Text>HomeScreen</Text>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default HomeScreen;
