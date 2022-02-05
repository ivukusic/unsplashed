import { ImageType } from '@common/types';

export interface Props {
  image: ImageType;
  removeLikedImage: (image: ImageType) => void;
}
