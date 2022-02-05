import React from 'react';

import { Container, Plus } from './styles';

export const Placeholder = ({ large = false, onPress }): JSX.Element => (
  <Container onPress={onPress}>
    <Plus large={large} />
  </Container>
);

export default Placeholder;
