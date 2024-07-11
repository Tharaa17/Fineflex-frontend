import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './MainContainer';
import NewFineScreen from './NewFineScreen';
import NewFineScreen2 from './NewFineScreen2';
import NewFineScreen3 from './NewFineScreen3';
import NewFineScreen4 from './NewFineScreen4';
import FineHistoryScreen from './FineHistoryScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainContainer">
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewFine"
          component={NewFineScreen}
          options={{ title: 'New Fine' }}
        />
        <Stack.Screen
          name="NewFine2"
          component={NewFineScreen2}
          options={{ title: 'New Fine' }}
        />
        <Stack.Screen
          name="NewFine3"
          component={NewFineScreen3}
          options={{ title: 'New Fine' }}
        />
        <Stack.Screen
          name="NewFine4"
          component={NewFineScreen4}
          options={{ title: 'New Fine' }}
        />
        <Stack.Screen
          name="FineHistoryScreen"
          component={FineHistoryScreen}
          options={{ title: 'Fine History' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

