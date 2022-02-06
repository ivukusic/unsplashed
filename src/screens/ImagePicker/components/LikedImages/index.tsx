import React from 'react';

import { Container, CustomText, Pressable } from '@common/components';
import { Colors } from '@common/themes';

import Placeholder from '../Placeholder';
import { useHook } from './hook';
import {
  Liked,
  LikedContainer,
  LikedIcon,
  LikedImage,
  LikedOverlay,
  PlaceholderContainer,
} from './styles';
import { Props } from './types';

export const LikedImages: React.FC<Props> = ({ fetchImage, liked }) => {
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
        <Pressable onPress={handleViewAll}>
          <CustomText
            color={Colors.primary}
            fontWeight="black"
            mt="10px"
            type="caption"
            textAlign="right"
          >
            VIEW ALL
          </CustomText>
        </Pressable>
      )}
    </Container>
  );
};

export default LikedImages;
