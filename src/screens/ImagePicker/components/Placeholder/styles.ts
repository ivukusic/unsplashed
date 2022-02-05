import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';

import TouchableOpacity from '@common/components/TouchableOpacity';
import { Colors } from '@common/themes';

export const Container = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
`;

export const Plus = styled(Icon).attrs(props => ({
  color: Colors.light,
  name: 'plus',
  size: props.large ? 50 : 20,
}))`
  padding: 10px;
`;
