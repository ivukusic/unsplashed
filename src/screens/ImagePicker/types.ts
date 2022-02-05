import { ImageType } from '@common/types';

export interface UseHookReturnType {
  active: ImageType | null;
  fetchImage: () => Promise<void>;
  isLoading: boolean;
  liked: ImageType[];
  onImageConfirm: (value: boolean) => void;
}
