import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

interface ContainerProps extends LayoutProps, FlexboxProps, SpaceProps {}

export interface Props {
  icon?: string;
  label?: string;
  containerProps?: ContainerProps;
  type?: 'default' | 'primary';
  onPress: () => void;
}
