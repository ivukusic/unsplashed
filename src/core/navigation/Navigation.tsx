import React from 'react';

// PACKAGE IMPORTS
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from '@common/themes';
import { SCREENS } from '@common/types/screen';
// SCREENS
import ApprovedImages from '@screens/ApprovedImages';
import ImagePicker from '@screens/ImagePicker';

// INITIALIZE STACK
const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

export const Navigation: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName={SCREENS.ImagePicker}
      screenOptions={{
        headerMode: 'screen',
        cardStyle: { backgroundColor: 'white' },
        headerStyle: { backgroundColor: Colors.header },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen component={ImagePicker} name={SCREENS.ImagePicker} />
      <Stack.Screen component={ApprovedImages} name={SCREENS.ApprovedImages} />
    </Stack.Navigator>
  </NavigationContainer>
);
