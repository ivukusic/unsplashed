import styled from 'styled-components/native';
import { background, border, compose, flexbox, layout, space } from 'styled-system';

export const ViewContainer = styled.View`
  ${compose(border, flexbox, layout, space, background)}
`;
