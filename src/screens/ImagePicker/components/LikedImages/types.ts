import { ImageType } from '@common/types';

export interface Props {
  fetchImage: () => Promise<void>;
  liked: ImageType[];
}

export interface UseHookReturnType {
  handleViewAll: () => void;
}
