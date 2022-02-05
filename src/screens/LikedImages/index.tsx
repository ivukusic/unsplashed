import React from 'react';

import { Screen } from '@common/components';

import LikedImage from './components/LikedImages';
import { useHook } from './useHook';

export const LikedImages = (): JSX.Element => {
  const { liked, removeLikedImage } = useHook();

  return (
    <Screen mode="scroll" flexDirection="row" flexWrap="wrap" padding={11}>
      {liked?.map(image => (
        <LikedImage key={image.urls.regular} image={image} removeLikedImage={removeLikedImage} />
      ))}
    </Screen>
  );
};

export default LikedImages;
