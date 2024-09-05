import {getCategories} from '@apis/categories.api';
import Block from '@components/Block';
import {useQuery} from '@tanstack/react-query';
import {colors} from '@themes/colors';
import React from 'react';
import {Text} from 'react-native';

const HomeScreen = () => {
  const {data: dataCategory, isLoading: loadingCategory} = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(1, 6),
  });

  console.log(dataCategory, loadingCategory);
  return (
    <Block flex middle center background={colors.WHITE}>
      <Text>HomeScreen</Text>
      {/* <CountDownTimer timeEnd={'2024-09-06 23:59:59'} /> */}
    </Block>
  );
};

export default HomeScreen;
