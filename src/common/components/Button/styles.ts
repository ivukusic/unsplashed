import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';
import { compose, flexbox, layout, space } from 'styled-system';

import { CustomText } from '@common/components';
import { Colors } from '@common/themes';

import TouchableOpacity from '../TouchableOpacity';

const style = {
  default: {
    borderColor: Colors.secondary,
    backgroundColor: Colors.secondary,
    borderWidth: '1px',
    color: Colors.white,
  },
  primary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: Colors.white,
  },
};

export const ButtonWrapper = styled(TouchableOpacity)`
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  min-height: 58px;
  background-color: ${({ type }) => style[type].backgroundColor};
  border-color: ${({ type }) => style[type].borderColor};
  border-width: ${({ type }) => style[type].borderWidth};
  border-radius: 30px;
  ${compose(layout, flexbox, space)};
`;

export const ButtonBackground = styled(LinearGradient).attrs({
  colors: ['#4770d4', '#234083'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ButtonLabel = styled(CustomText).attrs({ type: 'body', fontWeight: 'bold' })`
  color: ${({ state }) => style[state].color};
`;

export const ButtonIcon = styled(Icon).attrs({ color: Colors.white, size: 20 })`
  margin-right: 10px;
`;
