import React from 'react';
import AppNavigator from './src/screens/AppNavigator';
import { UserProvider } from './src/screens/utils/UserContext';

function App() {

  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );

}

export default App;