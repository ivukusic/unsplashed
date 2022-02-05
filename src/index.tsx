import React from 'react';

import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Navigation } from '@core/navigation';
import { persistor, store } from '@core/redux';

Icon.loadFont();

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default App;
