import React from 'react';

import { Container, DeleteContainer, DeleteIcon, Image, Overlay } from './styles';
import { Props } from './types';

export const LikedImage: React.FC<Props> = ({ image, removeLikedImage }) => {
  const handleRemovePress = () => {
    removeLikedImage(image);
  };

  return (
    <Container>
      <Image source={{ uri: image.urls.regular }} />
      <Overlay>
        <DeleteContainer onPress={handleRemovePress}>
          <DeleteIcon />
        </DeleteContainer>
      </Overlay>
    </Container>
  );
};

export default LikedImage;
