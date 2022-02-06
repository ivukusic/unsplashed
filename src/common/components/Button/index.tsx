import React from 'react';

import { Colors } from '@common/themes';

import { ButtonWrapper, ButtonBackground, ButtonLabel, ButtonIcon } from './styles';
import { Props } from './types';

export const Button: React.FC<Props> = ({
  icon,
  label,
  type = 'default',
  onPress,
  containerProps = {},
  testID = 'button',
}) => (
  <ButtonWrapper
    activeOpacity={1}
    accessibilityRole="button"
    onPress={onPress}
    type={type}
    testID={testID}
    {...containerProps}
  >
    {type === 'primary' && <ButtonBackground />}
    {!!icon && <ButtonIcon color={Colors.white} name={icon} size={20} />}
    {!!label && <ButtonLabel state={type}>{label}</ButtonLabel>}
  </ButtonWrapper>
);
