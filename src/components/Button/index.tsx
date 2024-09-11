import {scale, verticalScale} from '@helpers/uiHelper';
import {colors} from '@themes/colors';
import React from 'react';
import {Keyboard, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './Button.styles';

export type ButtonProps = {
  /**
   * @default false
   */
  flex?: boolean;
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
  top?: boolean;
  /**
   * @default false
   */
  bottom?: boolean;
  /**
   * @default false
   */
  space?: 'around' | 'between' | 'evenly' | false;
  /**
   * @default false
   */
  wrap?: boolean;
  /**
   * @default {}
   */
  style?: StyleProp<ViewStyle>;
  /**
   * @default 0
   */
  pa?: number;
  /**
   * @default 0
   */
  px?: number;
  /**
   * @default 0
   */
  py?: number;
  /**
   * @default 0
   */
  pl?: number;
  /**
   * @default 0
   */
  pr?: number;
  /**
   * @default 0
   */
  pt?: number;
  /**
   * @default 0
   */
  pb?: number;
  /**
   * @default 0
   */
  ma?: number;
  /**
   * @default 0
   */
  mx?: number;
  /**
   * @default 0
   */
  my?: number;
  /**
   * @default 0
   */
  ml?: number;
  /**
   * @default 0
   */
  mr?: number;
  /**
   * @default 0
   */
  mt?: number;
  /**
   * @default 0
   */
  mb?: number;
  /**
   * @default false
   */
  animated?: boolean;
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
  isThirdSide?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * @default () => {}
   */
  onPress?: () => void;
  /**
   * @default 0
   */
  opacity?: number;
  /**
   * @default 0
   */
  props?: any;
  /**
   * @default 0
   */
  children?: React.ReactNode;
  /**
   * @default {}
   */
  hitSlop?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  /**
   * @default {}
   */
  ba?: {
    width: number;
    color: string;
  };
  /**
   * @default {}
   */
  bb?: {
    width: number;
    color: string;
  };
  /**
   * @default {}
   */
  bt?: {
    width: number;
    color: string;
  };
  /**
   * @default {}
   */
  br?: {
    width: number;
    color: string;
  };
  /**
   * @default {}
   */
  bl?: {
    width: number;
    color: string;
  };
  /**
   * @default 0
   */
  radius?: number;
  /**
   * @default 0
   */
  width?: number | string;
  /**
   * @default 0
   */
  height?: number | string;
  /**
   * @default null
   */
  background?: string;
  /**
   * @default false
   */
  loading?: boolean;
  /**
   * @default false
   */
  delayLongPress?: number;
  /**
   * @default false
   */
  onLongPress?: () => void;
};

const Button: React.FC<ButtonProps> = props => {
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
    opacity,
    disabled,
    onPress,
    hitSlop,
    ba,
    bb,
    bt,
    br,
    bl,
    radius,
    width,
    height,
    background,
    loading,
    onLongPress,
  } = props;

  const buttonStyles: any = [
    flex && {flex: 1},
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
    px && {paddingHorizontal: px},
    py && {paddingVertical: py},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    ma && {margin: ma},
    mx && {marginHorizontal: mx},
    my && {marginVertical: my},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mt && {marginTop: verticalScale(mt)},
    mb && {marginBottom: mb},
    ba && {borderWidth: ba.width, borderColor: ba.color},
    bb && {borderBottomWidth: bb.width, borderBottomColor: bb.color},
    bt && {borderTopWidth: bt.width, borderTopColor: bt.color},
    bl && {borderLeftWidth: bl.width, borderLeftColor: bl.color},
    br && {borderRightWidth: br.width, borderRightColor: br.color},
    radius && {borderRadius: radius},
    width && {width: typeof width === 'number' ? scale(width) : width},
    height && {
      height: typeof height === 'number' ? scale(height) : height,
    },
    background && {
      backgroundColor:
        background in colors
          ? colors[background as keyof typeof colors]
          : background,
    },
    style,
  ];

  return (
    <TouchableOpacity
      {...props}
      style={buttonStyles}
      activeOpacity={opacity || 0.85}
      onPress={() => {
        if (!disabled || !loading) {
          onPress && onPress();
          Keyboard.dismiss();
        }
      }}
      onLongPress={() => {
        if (!disabled || !loading) {
          onLongPress && onLongPress();
          Keyboard.dismiss();
        }
      }}
      hitSlop={hitSlop}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
