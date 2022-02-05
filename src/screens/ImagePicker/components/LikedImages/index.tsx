import React from 'react';

import { Container, CustomText, TouchableOpacity } from '@common/components';
import { Colors } from '@common/themes';

import Placeholder from '../Placeholder';
import {
  Liked,
  LikedContainer,
  LikedIcon,
  LikedImage,
  LikedOverlay,
  PlaceholderContainer,
} from './styles';
import { useHook } from './useHook';

export const LikedImages = ({ fetchImage, liked }): JSX.Element => {
  const { handleViewAll } = useHook();

  const renderPlaceholder = () => (
    <PlaceholderContainer>
      <Placeholder onPress={fetchImage} />
    </PlaceholderContainer>
  );

  const renderContent = () => {
    if (liked.length) {
      return (
        <>
          {liked.map(image => (
            <LikedContainer key={image.urls.regular}>
              <LikedImage source={{ uri: image.urls.regular }} />
              <LikedOverlay>
                <LikedIcon />
              </LikedOverlay>
            </LikedContainer>
          ))}
          {renderPlaceholder()}
        </>
      );
    }
    return renderPlaceholder();
  };

  return (
    <Container>
      <CustomText color={Colors.primary} fontWeight="black" mb="5px">
        APPROVED IMAGES ({liked.length})
      </CustomText>
      <Liked flexDirection="row">{renderContent()}</Liked>
      {!!liked.length && (
        <TouchableOpacity onPress={handleViewAll}>
          <CustomText
            color={Colors.primary}
            fontWeight="black"
            mt="10px"
            type="caption"
            textAlign="right"
          >
            VIEW ALL
          </CustomText>
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default LikedImages;
