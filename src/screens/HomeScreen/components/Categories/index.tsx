import {getCategories} from '@apis/categories.api';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomImage from '@components/CustomImage';
import CustomSvg from '@components/CustomSvg';
import Text from '@components/Text';
import {errorToast} from '@helpers/toast';
import {t} from '@locales';
import {Categories as CategoriesType} from '@models/category';
import {useQuery} from '@tanstack/react-query';
import {colors} from '@themes/colors';
import {icon_arrow_right} from '@themes/iconSvg';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import LoadingCategory from './components/LoadingCategory';

const Categories = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(1, 6),
  });

  useEffect(() => {
    if (isError) {
      errorToast('Error get categories');
    }
  }, [isError]);

  if (isLoading) {
    return <LoadingCategory />;
  }

  if (isError) {
    return <></>;
  }

  return (
    <Block mt={19}>
      <Block middle center row space="between">
        <Text bold size={20}>
          {t('CATEGORIES')}
        </Text>
        <Block row middle center>
          <Text bold size={14} mr={8}>
            {t('SEE_ALL')}
          </Text>
          <Button
            background={'PRIMARY'}
            width={30}
            height={30}
            radius={50}
            middle
            center>
            <CustomSvg xml={icon_arrow_right} width={16} height={16} />
          </Button>
        </Block>
      </Block>

      <Block row space="between" style={styles.wrap} mt={12}>
        {data?.data.map((item: CategoriesType, index: number) => (
          <Block
            px={6}
            py={5}
            key={index}
            radius={9}
            mb={8}
            shadow
            style={styles.containerItemCategory}>
            <Block row space="between" style={styles.wrap}>
              {item.images.map((itemImage, indexImage) => {
                return (
                  <CustomImage
                    source={{uri: itemImage}}
                    key={indexImage}
                    style={styles.imageCategory}
                  />
                );
              })}
            </Block>

            <Block middle center row space="between">
              <Text bold size={16}>
                {item.name}
              </Text>
              <Block pa={8} radius={9} background="#DFE9FF">
                <Text bold size={12}>
                  {item.items}
                </Text>
              </Block>
            </Block>
          </Block>
        ))}
      </Block>
    </Block>
  );
};

export default Categories;

const styles = StyleSheet.create({
  wrap: {
    flexWrap: 'wrap',
  },
  containerItemCategory: {
    width: '48%',
    backgroundColor: colors.WHITE,
  },
  imageCategory: {
    width: 75,
    height: 75,
    marginBottom: 4,
    borderRadius: 9,
  },
});
