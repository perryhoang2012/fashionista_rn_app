import Block from '@components/Block';
import {colors} from '@themes/colors';
import React from 'react';
import {Text} from 'react-native';

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
    <Block flex middle center background={colors.WHITE}>
      <Text>HomeScreen</Text>
      {/* <CountDownTimer timeEnd={'2024-09-06 23:59:59'} /> */}
    </Block>
  );
};

export default HomeScreen;
