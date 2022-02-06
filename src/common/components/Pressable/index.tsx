import { Pressable as PressableNative } from 'react-native';

import withPreventDoubleClick from './withPreventDoubleClick';

export const Pressable = withPreventDoubleClick(PressableNative);

export default Pressable;
