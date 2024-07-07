import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './MainContainer';
import NewFineScreen from './NewFineScreen';


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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

