import { Text } from 'react-native';

import styled from 'styled-components/native';
import {
  space,
  layout,
  compose,
  fontSize,
  lineHeight,
  color,
  textAlign,
  flexbox,
  size,
} from 'styled-system';

import { Colors } from '@common/themes';

import { CustomTextStyle, TYPOGRAPHY_WEIGHT } from './types';

export const Container = styled(Text)<CustomTextStyle>`
  font-family: ${({ fontFamily, fontWeight }): string =>
    TYPOGRAPHY_WEIGHT[fontWeight] || fontFamily};
  text-decoration: ${({ underline }): string => (underline ? 'underline' : 'none')};
  text-align-vertical: center;
  text-decoration-color: ${({ color: colorProp, underlineColor }) => underlineColor || colorProp};
  ${compose(space, layout, fontSize, lineHeight, color, textAlign, flexbox, size)}
`;

Container.defaultProps = {
  color: Colors.body,
  debug: false,
  textAlign: 'left',
  type: 'body',
};
