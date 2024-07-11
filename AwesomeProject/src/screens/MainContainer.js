import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../src/screens/HomeScreen';
import SettingsScreen from '../../src/screens/SettingsScreen';
import AlertsScreen from '../../src/screens/AlertsScreen';
import ProfileScreen from '../../src/screens/ProfileScreen';


// Screen Names
const homeName = 'Home';
const settingsName = 'Settings';
const alertsName = 'Alerts';
const profileName = 'Profile';


const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (rn === alertsName) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#08C1CD',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#002C54',
          height: 70,
          width: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        headerStyle: {
          backgroundColor: '#FFFCFC',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 2,
          marginBottom: 10,
        },
        tabBarIconStyle: {
          size: 40,
          marginBottom: 0,
          marginTop: 10,
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
      <Tab.Screen name={alertsName} component={AlertsScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
      

    </Tab.Navigator>
  );
}
