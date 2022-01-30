import { Platform } from 'react-native';

const type = {
  base: Platform.select({
    ios: 'Inter-Regular',
    android: 'Inter-Regular-slnt=0',
  }),
  bold: Platform.select({
    ios: 'Inter-Bold',
    android: 'Inter-Bold-slnt=0',
  }),
  extraBold: Platform.select({
    ios: 'Inter-ExtraBold',
    android: 'Inter-ExtraBold-slnt=0',
  }),
  semiBold: Platform.select({
    ios: 'Inter-SemiBold',
    android: 'Inter-SemiBold-slnt=0',
  }),
  medium: Platform.select({
    ios: 'Inter-Medium',
    android: 'Inter-Medium-slnt=0',
  }),
  light: Platform.select({
    ios: 'Inter-Light',
    android: 'Inter-Light-slnt=0',
  }),
};
const size = {
  h1: 33,
  h2: 30,
  h3: 24,
  h4: 20,
  h5: 16,
  h6: 14,
  xl: 18,
  large: 17,
  normal: 16,
  medium: 14,
  small: 12,
  tiny: 10,
  xtiny: 9,
};

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.bold,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.bold,
    fontSize: size.h6,
  },
  large: {
    fontFamily: type.base,
    fontSize: size.large,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.normal,
  },
  medium: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  tiny: {
    fontFamily: type.bold,
    fontSize: size.tiny,
  },
  xtiny: {
    fontFamily: type.bold,
    fontSize: size.xtiny,
  },
};

export default {
  type,
  size,
  style,
};
