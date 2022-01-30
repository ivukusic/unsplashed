import React from 'react';

// PACKAGE IMPORTS
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from '@common/themes';
import { SCREENS } from '@common/types/screen';
// SCREENS
import Home from '@screens/Home';

// INITIALIZE STACK
const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

export const Navigation: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName={SCREENS.Home}
      screenOptions={{
        headerMode: 'screen',
        cardStyle: { backgroundColor: 'white' },
        headerStyle: { backgroundColor: Colors.header },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen component={Home} name={SCREENS.Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
