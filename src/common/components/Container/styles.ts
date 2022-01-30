import styled from 'styled-components/native';
import { background, compose, flexbox, layout, space } from 'styled-system';

export const ViewContainer = styled.View`
  ${compose(flexbox, layout, space, background)}
`;
