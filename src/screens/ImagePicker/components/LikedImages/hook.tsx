import { useNavigation } from '@react-navigation/native';

import { RouterNavigationProp, SCREENS } from '@common/types';

import { UseHookReturnType } from './types';

export const useHook = (): UseHookReturnType => {
  const navigation: RouterNavigationProp = useNavigation();

  const handleViewAll = () => {
    navigation.navigate(SCREENS.ApprovedImages);
  };

  return { handleViewAll };
};
