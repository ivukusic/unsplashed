import { ImageType } from '@common/types';

export interface Props {
  active: ImageType | null;
  onImageConfirm: (value: boolean) => void;
}
