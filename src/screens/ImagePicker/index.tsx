import React from 'react';

import { Screen } from '@common/components';

import ActiveCard from './components/ActiveCard';
import ApproveButtons from './components/ApproveButtons';
import LikedImages from './components/LikedImages';
import { Divider } from './styles';
import { useHook } from './useHook';

export const ImagePicker = (): JSX.Element => {
  const { active, fetchImage, liked, onImageConfirm } = useHook();

  return (
    <Screen mode="view" alignItems="stretch">
      <LikedImages liked={liked} fetchImage={fetchImage} />
      <Divider />
      <ActiveCard fetchImage={fetchImage} uri={active?.urls.regular} />
      <Divider />
      <ApproveButtons active={active} onImageConfirm={onImageConfirm} />
    </Screen>
  );
};

export default ImagePicker;
