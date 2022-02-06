import React from 'react';

import { Screen } from '@common/components';

import ActiveCard from './components/ActiveCard';
import ApproveButtons from './components/ApproveButtons';
import LikedImages from './components/LikedImages';
import { useHook } from './hook';
import { Divider } from './styles';

export const ImagePicker: React.FC = () => {
  const { active, fetchImage, liked, onImageConfirm } = useHook();

  return (
    <Screen alignItems="stretch" header={{ headerTitle: 'Unsplash' }} mode="view">
      <LikedImages liked={liked} fetchImage={fetchImage} />
      <Divider />
      <ActiveCard fetchImage={fetchImage} uri={active?.urls.regular} />
      <Divider />
      <ApproveButtons active={active} onImageConfirm={onImageConfirm} />
    </Screen>
  );
};

export default ImagePicker;
