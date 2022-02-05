import React from 'react';
import { Dimensions } from 'react-native';

import Placeholder from '../Placeholder';
import { useHook } from './hook';
import { Image, MainImage, Overlay } from './styles';
import { Props } from './types';

const { width } = Dimensions.get('screen');

export const ActiveCard: React.FC<Props> = ({ fetchImage, uri }) => {
  const { current, opacity, translate } = useHook({ uri });

  const translateX = translate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -width * 2],
  });
  const rotateZ = translate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-22deg'],
  });
  return (
    <MainImage>
      <Placeholder large onPress={fetchImage} />

      {current && (
        <Image style={{ opacity, transform: [{ translateX }, { rotateZ }] }} source={{ uri }} />
      )}
      {current && <Overlay style={{ opacity }} />}
    </MainImage>
  );
};

export default ActiveCard;
