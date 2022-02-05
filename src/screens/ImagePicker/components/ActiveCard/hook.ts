import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { ImageType } from '@common/types';

import { UseHookProps, UseHookReturnType } from './types';

export const useHook = ({ uri }: UseHookProps): UseHookReturnType => {
  const [current, setCurrent] = useState<ImageType | null>(null);

  const opacity = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(0)).current;

  const updateVisibility = useCallback(
    newValue => {
      if (newValue) {
        setCurrent(newValue);
        Animated.timing(opacity, { toValue: 1, duration: 400, useNativeDriver: true }).start();
      } else {
        Animated.timing(translate, { toValue: 1, duration: 400, useNativeDriver: true }).start();
        Animated.timing(opacity, { toValue: 0, duration: 800, useNativeDriver: true }).start();
        setTimeout(() => {
          setCurrent(newValue);
          translate.setValue(0);
        }, 600);
      }
    },
    [opacity, translate],
  );

  useEffect(() => {
    if ((uri && !current) || (!uri && current)) {
      updateVisibility(uri);
    }
  }, [updateVisibility, opacity, uri, current]);

  return { current, opacity, translate };
};
