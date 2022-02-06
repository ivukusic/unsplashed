import React from 'react';

import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Navigation } from '@core/navigation';
import { AppProviders } from '@core/providers';

Icon.loadFont();

const App = () => {
  return (
    <AppProviders>
      <Navigation />
    </AppProviders>
  );
};

export default App;
