import { StackNavigationProp } from '@react-navigation/stack';

import { SCREENS } from './screen';

export type RouteStackParamList = {
  [SCREENS.Home]: undefined;
};

export type RouterNavigationProp = StackNavigationProp<RouteStackParamList>;
