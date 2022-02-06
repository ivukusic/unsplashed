import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

interface ContainerProps extends LayoutProps, FlexboxProps, SpaceProps {}

export interface Props {
  containerProps?: ContainerProps;
  icon?: string;
  label?: string;
  onPress: () => void;
  type?: 'default' | 'primary';
  testID?: string;
}
