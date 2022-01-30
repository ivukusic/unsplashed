import React from 'react';

import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Navigation } from '@core/navigation';

Icon.loadFont();

const App = () => {
  return <Navigation />;
};

export default App;
