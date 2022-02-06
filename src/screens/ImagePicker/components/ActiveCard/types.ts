import { Animated } from 'react-native';

import { ImageType } from '@common/types';

export interface Props {
  fetchImage: () => Promise<void>;
  uri?: string;
}

export interface UseHookProps {
  uri: string | undefined;
}

export interface UseHookReturnType {
  current?: ImageType;
  opacity: Animated.Value;
  translate: Animated.Value;
}
