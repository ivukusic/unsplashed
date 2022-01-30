import React from 'react';

import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Provider as ReduxProdiver } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Navigation } from '@core/navigation';
import { persistor, store } from '@core/redux';

Icon.loadFont();

const App = () => {
  return (
    <ReduxProdiver store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </ReduxProdiver>
  );
};

export default App;
