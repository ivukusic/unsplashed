import { PressableProps } from 'react-native';

export interface Props extends PressableProps {
  activeOpacity: number;
  debounce?: number;
}
