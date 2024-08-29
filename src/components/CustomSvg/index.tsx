import React from 'react';
import {SvgXml} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  xml: string;
};

const CustomSvg = (props: Props) => {
  const {xml, width, height} = props;
  return <SvgXml xml={xml} width={width} height={height} />;
};

export default CustomSvg;
