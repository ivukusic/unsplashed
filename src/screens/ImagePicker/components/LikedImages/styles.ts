import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';

import { Colors } from '@common/themes';

export const Liked = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const LikedContainer = styled.View`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
  overflow: hidden;
`;

export const LikedImage = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const PlaceholderContainer = styled.View`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
`;

export const LikedIcon = styled(Icon).attrs({ color: Colors.white, name: 'check', size: 14 })`
  padding: 10px;
`;

export const LikedOverlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: ${`${Colors.primary}66`};
`;
