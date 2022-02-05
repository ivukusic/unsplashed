import { TouchableOpacityProps } from 'react-native';

export interface TouchableProps extends TouchableOpacityProps {
  activeOpacity: number;
  debounce?: number;
}
