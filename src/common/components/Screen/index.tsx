import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Scroll, ViewContainer } from './styles';
import { Props } from './types';

export const Screen: React.FC<Props> = ({
  children,
  header = { headerMode: 'default' },
  mode = 'view',
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  const renderContent = (): ReactNode => {
    if (mode === 'scroll') {
      return (
        <Scroll {...rest} paddingBottom={rest.paddingBottom || insets.bottom + 15}>
          {children}
        </Scroll>
      );
    }
    return (
      <ViewContainer pb={insets.bottom + 15} {...rest}>
        {children}
      </ViewContainer>
    );
  };

  const statusBarColor = header?.headerMode === 'default' ? 'white' : 'red';
  const statusBarStyle = header?.headerMode === 'default' ? 'light-content' : 'dark-content';
  return (
    <>
      <StatusBar animated translucent backgroundColor={statusBarColor} barStyle={statusBarStyle} />
      {renderContent()}
    </>
  );
};
