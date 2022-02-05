import { Animated } from 'react-native';

import { ImageType } from '@common/types';

export interface Props {
  fetchImage: () => Promise<void>;
  uri?: string;
}

export interface UseHookProps {
  uri?: string;
}

export interface UseHookReturnType {
  current: ImageType | null;
  opacity: Animated.Value;
  translate: Animated.Value;
}
