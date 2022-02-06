import React from 'react';

import { renderHook, RenderHookOptions } from '@testing-library/react-hooks';

import { AppProviders } from '@core/providers';
import { RootState } from '@core/redux';

type Props = {
  initialState?: RootState;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (callback: (props?: any) => any, options?: RenderHookOptions<any> & Props) =>
  renderHook(callback, {
    wrapper: ({ children }) => (
      <AppProviders initialState={options?.initialState}>{children}</AppProviders>
    ),
    ...options,
  });

export * from '@testing-library/react-hooks';
export { customRender as renderHook };
