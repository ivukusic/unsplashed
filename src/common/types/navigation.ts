import { StackNavigationProp } from '@react-navigation/stack';

import { SCREENS } from './screen';

export type RouteStackParamList = {
  [SCREENS.ImagePicker]: undefined;
  [SCREENS.LikedImages]: undefined;
};

export type RouterNavigationProp = StackNavigationProp<RouteStackParamList>;
