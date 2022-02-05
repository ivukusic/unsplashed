import React from 'react';

import { Container, DeleteContainer, DeleteIcon, Image, Overlay } from './styles';

export const LikedImage = ({ image, removeLikedImage }): JSX.Element => {
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
