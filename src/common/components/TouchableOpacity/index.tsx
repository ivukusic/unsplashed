import { TouchableOpacity as TouchableOpacityNative } from 'react-native';

import withPreventDoubleClick from './withPreventDoubleClick';

export const TouchableOpacity = withPreventDoubleClick(TouchableOpacityNative);

export default withPreventDoubleClick(TouchableOpacityNative);
