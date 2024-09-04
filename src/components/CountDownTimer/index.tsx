import Block from '@components/Block';
import CustomSvg from '@components/CustomSvg';
import Text from '@components/Text';
import {colors} from '@themes/colors';
import {icon_clock} from '@themes/iconSvg';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';

type Props = {
  color?: string;
  timeEnd: string;
};

const CountDownTimer = (props: Props) => {
  const {color, timeEnd} = props;

  const [secondsState, setSecondsState] = useState<number>(0);

  useEffect(() => {
    if (dayjs(timeEnd).isValid()) {
      setSecondsState(dayjs(dayjs(timeEnd)).diff(dayjs(), 'seconds'));
    }
  }, [timeEnd]);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (secondsState > 0) {
      intervalId = setInterval(() => {
        setSecondsState(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (secondsState <= 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [secondsState]);

  const formatTime = (sec: number, type: string) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    if (type === 'hours') {
      return hours < 10 ? `0${hours}` : hours;
    } else if (type === 'minutes') {
      return minutes < 10 ? `0${minutes}` : minutes;
    } else if (type === 'seconds') {
      return seconds < 10 ? `0${seconds}` : seconds;
    } else {
      return '00';
    }
  };

  return (
    <Block row>
      <CustomSvg xml={icon_clock} width={24} height={24} />
      <Block row middle center ml={10}>
        <Block
          mr={8}
          width={32}
          height={30}
          middle
          center
          radius={7}
          background={color || colors.WHITE_SECONDARY}>
          <Text size={16} semiBold>
            {formatTime(secondsState, 'hours')}
          </Text>
        </Block>
        <Block
          mr={8}
          width={32}
          height={30}
          middle
          center
          radius={7}
          background={color || colors.WHITE_SECONDARY}>
          <Text size={16} semiBold>
            {formatTime(secondsState, 'minutes')}
          </Text>
        </Block>
        <Block
          width={32}
          height={30}
          middle
          center
          radius={7}
          background={color || colors.WHITE_SECONDARY}>
          <Text size={16} semiBold>
            {formatTime(secondsState, 'seconds')}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default React.memo(CountDownTimer);
