import {scale, verticalScale} from '@helpers/uiHelper';
import {colors} from '@themes/colors';
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './Block.styles';

export interface BlockProps {
  /**
   * @default false
   */
  flex?: boolean | number;
  /**
   * @default false
   */
  row?: boolean;
  /**
   * @default false
   */
  column?: boolean;
  /**
   * @default false
   */
  center?: boolean;
  /**
   * @default false
   */
  middle?: boolean;
  /**
   * @default false
   */
  left?: boolean;
  /**
   * @default false
   */
  right?: boolean;
  /**
   * @default false
   */
  top?: boolean | number | undefined;
  /**
   * @default false
   */
  bottom?: boolean;
  /**
   * @default false
   */
  space?: 'around' | 'between' | 'evenly';
  /**
   * @default false
   */
  wrap?: boolean;
  /**
   * @default {}
   */
  style?: StyleProp<ViewStyle>;
  /**
   * @default {}
   */
  pa?: number;
  /**
   * @default {}
   */
  px?: number;
  /**
   * @default {}
   */
  py?: number;
  /**
   * @default {}
   */
  pl?: number;
  /**
   * @default {}
   */
  pr?: number;
  /**
   * @default {}
   */
  pt?: number;
  /**
   * @default {}
   */
  pb?: number;
  /**
   * @default {}
   */
  ma?: number;
  /**
   * @default {}
   */
  mx?: number;
  /**
   * @default {}
   */
  my?: number;
  /**
   * @default {}
   */
  ml?: number;
  /**
   * @default {}
   */
  mr?: number;
  /**
   * @default {}
   */
  mt?: number;
  /**
   * @default {}
   */
  mb?: number;
  /**
   * @default false
   */
  shadow?: boolean;
  /**
   * @default false
   */
  primary?: boolean;
  /**
   * @default false
   */
  secondary?: boolean;
  /**
   * @default false
   */
  children?: React.ReactNode;
  /**
   * @default {}
   */
  ba?: {
    width: number;
    color: string;
    style?: string;
  };
  /**
   * @default {}
   */
  bb?: {
    width: number;
    color: string;
    style?: string;
  };
  /**
   * @default {}
   */
  bt?: {
    width: number;
    color: string;
    style?: string;
  };
  /**
   * @default {}
   */
  br?: {
    width: number;
    color: string;
    style?: string;
  };
  /**
   * @default {}
   */
  bl?: {
    width: number;
    color: string;
    style?: string;
  };
  /**
   * @default 0
   */
  radius?: number;
  /**
   * @default undefined
   */
  width?: number | string;
  /**
   * @default undefined
   */
  height?: number | string;
  /**
   * @default undefined
   */
  background?: string;
}

const Block: React.FC<BlockProps> = props => {
  const {
    children,
    shadow,
    flex,
    row,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    space,
    wrap,
    style,
    pa,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    ma,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    ba,
    bb,
    bt,
    br,
    bl,
    radius,
    width,
    height,
    background,
  } = props;

  const blockStyles: any = [
    flex && {flex: typeof flex === 'boolean' ? 1 : flex},
    row && styles.row,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    shadow && styles.shadow,
    space && {justifyContent: `space-${space}`},
    wrap && {flexWrap: 'wrap'},
    pa && {padding: pa},
    px && {paddingHorizontal: scale(px)},
    py && {paddingVertical: py},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: verticalScale(pb)},
    ma && {margin: ma},
    mx && {marginHorizontal: mx},
    my && {marginVertical: my},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    ba && {borderWidth: ba.width, borderColor: ba.color, borderStyle: ba.style},
    bb && {
      borderBottomWidth: bb.width,
      borderBottomColor: bb.color,
      borderBottomStyle: bb.style,
    },
    bt && {
      borderTopWidth: bt.width,
      borderTopColor: bt.color,
      borderTopStyle: bt.style,
    },
    bl && {
      borderLeftWidth: bl.width,
      borderLeftColor: bl.color,
      borderLeftStyle: bl.style,
    },
    br && {
      borderRightWidth: br.width,
      borderRightColor: br.color,
      borderRightStyle: br.style,
    },
    radius && {borderRadius: radius},
    width && {width},
    height && {height},
    background && {
      backgroundColor:
        background in colors
          ? colors[background as keyof typeof colors]
          : background,
    },
    style,
  ];

  return (
    <View {...props} style={blockStyles}>
      {children}
    </View>
  );
};

export default Block;
