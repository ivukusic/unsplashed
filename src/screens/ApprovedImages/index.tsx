import React from 'react';

import { Screen } from '@common/components';

import LikedImage from './components/LikedImages';
import { useHook } from './hook';

export const ApprovedImages: React.FC = () => {
  const { liked, removeLikedImage } = useHook();

  return (
    <Screen
      header={{ headerTitle: 'Approved Images' }}
      mode="scroll"
      flexDirection="row"
      flexWrap="wrap"
      pl={11}
      pr={11}
    >
      {liked?.map(image => (
        <LikedImage key={image.urls.regular} image={image} removeLikedImage={removeLikedImage} />
      ))}
    </Screen>
  );
};

export default ApprovedImages;
