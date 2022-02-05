import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import Placeholder from '../Placeholder';
import { Image, MainImage, Overlay } from './styles';

const { width } = Dimensions.get('screen');

export const ActiveCard = ({ fetchImage, uri }): JSX.Element => {
  const [current, setCurrent] = useState(null);

  const opacity = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(0)).current;

  const updateVisibility = useCallback(
    newValue => {
      if (newValue) {
        setCurrent(newValue);
        Animated.timing(opacity, { toValue: 1, duration: 400, useNativeDriver: true }).start();
      } else {
        Animated.timing(translate, { toValue: 1, duration: 400, useNativeDriver: true }).start();
        Animated.timing(opacity, { toValue: 0, duration: 800, useNativeDriver: true }).start();
        setTimeout(() => {
          setCurrent(newValue);
          translate.setValue(0);
        }, 600);
      }
    },
    [opacity, translate],
  );

  useEffect(() => {
    if ((uri && !current) || (!uri && current)) {
      updateVisibility(uri);
    }
  }, [updateVisibility, opacity, uri, current]);

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
