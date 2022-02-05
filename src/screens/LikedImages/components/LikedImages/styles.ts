import { Dimensions } from 'react-native';

import VectorIcon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';

import TouchableOpacity from '@common/components/TouchableOpacity';
import { Colors } from '@common/themes';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  margin: 4px;
  height: 200px;
  width: ${`${(width - 38) / 2}px`};
  overflow: hidden;
  border-radius: 10px;
  background-color: #eaeaea;
`;

export const Image = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const DeleteContainer = styled(TouchableOpacity)`
  padding: 6px 12px;
  margin: 4px;
  border-radius: 8px;
  background-color: ${Colors.primary};
`;

export const DeleteIcon = styled(VectorIcon).attrs({
  color: Colors.white,
  name: 'minus',
  size: 24,
})``;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: ${`${Colors.primary}66`};
`;
