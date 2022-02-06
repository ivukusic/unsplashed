import React, { PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { createStore, persistor, RootState, store } from '@core/redux';

const queryClient = new QueryClient();

export const AppProviders = ({
  children,
  initialState,
}: PropsWithChildren<{ initialState?: RootState }>) => {
  const mockStore = initialState ? createStore(initialState) : store;
  const mockPersistor = initialState ? persistStore(mockStore) : persistor;

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={mockStore}>
        <PersistGate persistor={mockPersistor}>{children}</PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  );
};
