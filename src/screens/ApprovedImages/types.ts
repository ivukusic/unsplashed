import { ImageType } from '@common/types';

export interface UseHookReturnType {
  liked: ImageType[];
  removeLikedImage: (image: ImageType) => void;
}
