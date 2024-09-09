import {getBannerHome} from '@apis/banner.api';
import Block from '@components/Block';
import CustomImage from '@components/CustomImage';
import {scale, verticalScale} from '@helpers/uiHelper';
import {Banners} from '@models/banner';
import {useQuery} from '@tanstack/react-query';
import {colors} from '@themes/colors';
import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LoadingBanner from './components/LoadingBanner';
import {errorToast} from '@helpers/toast';
const {width: D_WIDTH} = Dimensions.get('window');

const widthBanner = D_WIDTH - scale(40);

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const {data, isLoading, isError} = useQuery({
    queryKey: ['bannerHome'],
    queryFn: () => getBannerHome(),
  });

  useEffect(() => {
    if (isError) {
      errorToast('Error get banner home');
    }
  }, [isError]);

  const _renderItem = ({item, index}: {item: Banners; index: number}) => {
    return (
      <Block radius={9} key={index} style={styles.containerBanner}>
        <CustomImage
          source={{uri: item.image}}
          style={styles.imageBanner}
          containerStyle={{borderRadius: 9}}
          resizeMode="cover"
        />
      </Block>
    );
  };

  const _renderDots = (activeIndex: number) => {
    return (
      <Block space="between" width={150} row height={10}>
        {(data?.data || []).map((item, i) => (
          <Block key={i}>
            <Block>
              {activeIndex === i ? (
                <Block
                  style={[
                    styles.dotBanner,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                      width: 40,
                      backgroundColor: colors.PRIMARY,
                    },
                  ]}
                />
              ) : (
                <Block style={styles.dotBanner} />
              )}
            </Block>
          </Block>
        ))}
      </Block>
    );
  };

  return isLoading ? (
    <LoadingBanner />
  ) : (
    <Block radius={9}>
      {data || !isError ? (
        <>
          <Carousel
            data={data?.data || []}
            renderItem={_renderItem}
            sliderWidth={widthBanner}
            itemWidth={widthBanner}
            onSnapToItem={index => setActiveSlide(index)}
            autoplay={true}
            loop={true}
            autoplayInterval={2000}
          />
          <Pagination
            containerStyle={styles.containerPagination}
            activeDotIndex={activeSlide}
            dotsLength={5}
            renderDots={activeIndex => _renderDots(activeIndex)}
          />
        </>
      ) : (
        <></>
      )}
    </Block>
  );
};

export default Banner;

const styles = StyleSheet.create({
  containerBanner: {
    width: widthBanner,
    height: verticalScale(150),
    backgroundColor: 'red',
  },
  dotBanner: {
    width: scale(10),
    height: scale(10),
    backgroundColor: colors.WHITE_SECONDARY,
    borderRadius: scale(5),
  },
  containerPagination: {
    height: scale(24),
    paddingTop: 0,
    paddingBottom: 0,
  },
  imageBanner: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
  },
});
