import { ImageType } from '@common/types';

export interface UseHookReturnType {
  active: ImageType | null;
  disliked: ImageType[];
  fetchImage: () => Promise<void>;
  isLoading: boolean;
  liked: ImageType[];
  onImageConfirm: (value: boolean) => void;
}
