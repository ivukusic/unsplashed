import { useNavigation } from '@react-navigation/native';

import { RouterNavigationProp, SCREENS } from '@common/types';

export const useHook = () => {
  const navigation: RouterNavigationProp = useNavigation();

  const handleViewAll = () => {
    navigation.navigate(SCREENS.LikedImages);
  };

  return { handleViewAll };
};
