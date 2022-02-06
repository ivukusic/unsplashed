import { useLayoutEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

export const useHook = ({ headerTitle }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle });
  }, [headerTitle, navigation]);
};
