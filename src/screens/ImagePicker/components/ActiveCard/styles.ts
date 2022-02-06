import { Animated } from 'react-native';

import styled from 'styled-components/native';

import { Colors } from '@common/themes';

export const MainImage = styled.View`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled(Animated.Image)`
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
`;

export const Overlay = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: ${`${Colors.primary}66`};
`;
