import { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';

import {
  SpaceProps,
  LayoutProps,
  FontSizeProps,
  LineHeightProps,
  ColorProps,
  TextAlignProps,
  FlexboxProps,
  SizeProps,
} from 'styled-system';

import { Colors } from '@common/themes';

export type TypeScale = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'h5' | 'h6' | 'body' | 'caption';

export type TypeWeight =
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'bold'
  | 'extraBold'
  | 'black';
export type TypeWeightValues =
  | 'NunitoSans-ExtraLight'
  | 'NunitoSans-Light'
  | 'NunitoSans-Regular'
  | 'NunitoSans-SemiBold'
  | 'NunitoSans-Bold'
  | 'NunitoSans-ExtraBold'
  | 'NunitoSans-Black';

export type TypographyProps = {
  color: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
};
type Typography = {
  [type in TypeScale]?: TypographyProps;
};

export type TypographyWeightProps = {
  fontFamily: string;
};
type TypographyWeight = {
  [type in TypeWeight]?: TypeWeightValues;
};

export const TYPOGRAPHY: Typography = {
  h1: {
    color: Colors.black,
    fontSize: '36px',
    lineHeight: '42px',
    fontFamily: 'NunitoSans-Bold',
  },
  h2: {
    color: Colors.black,
    fontSize: '30px',
    lineHeight: '36px',
    fontFamily: 'NunitoSans-Bold',
  },
  h3: {
    color: Colors.black,
    fontSize: '24px',
    lineHeight: '28px',
    fontFamily: 'NunitoSans-Bold',
  },
  h4: {
    color: Colors.black,
    fontSize: '22px',
    lineHeight: '26px',
    fontFamily: 'NunitoSans-SemiBold',
  },
  h5: {
    color: Colors.black,
    fontSize: '20px',
    lineHeight: '24px',
    fontFamily: 'NunitoSans-SemiBold',
  },
  h6: {
    color: Colors.black,
    fontSize: '18px',
    lineHeight: '22px',
    fontFamily: 'NunitoSans-SemiBold',
  },
  body: {
    color: Colors.body,
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'NunitoSans-Regular',
  },
  caption: {
    color: Colors.black,
    fontSize: '14px',
    lineHeight: '18px',
    fontFamily: 'NunitoSans-SemiBold',
  },
};

export const TYPOGRAPHY_WEIGHT: TypographyWeight = {
  extraLight: 'NunitoSans-ExtraLight',
  light: 'NunitoSans-Light',
  regular: 'NunitoSans-Regular',
  medium: 'NunitoSans-SemiBold',
  bold: 'NunitoSans-Bold',
  extraBold: 'NunitoSans-ExtraBold',
  black: 'NunitoSans-Black',
};

interface Extend extends SpaceProps, LayoutProps, FontSizeProps, LineHeightProps, TextAlignProps {}
export interface CustomTextStyle
  extends SpaceProps,
    LayoutProps,
    FontSizeProps,
    LineHeightProps,
    TextAlignProps,
    FlexboxProps,
    SizeProps,
    ColorProps {
  type?: TypeScale;
  fontWeight?: TypeWeight;
  fontFamily?: TypeWeightValues;
  underline?: boolean;
  underlineColor?: string;
}

export type Props = PropsWithChildren<CustomTextStyle & TextProps>;
