import React from 'react';

import { Container, Plus } from './styles';
import { Props } from './types';

export const Placeholder: React.FC<Props> = ({ large = false, onPress }) => (
  <Container onPress={onPress}>
    <Plus large={large} />
  </Container>
);

export default Placeholder;
