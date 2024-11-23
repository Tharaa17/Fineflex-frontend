import React, { createContext, useState, useContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// UserProvider component to wrap the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold user data

  const login = (userData) => {
    setUser(userData); 
    console.log('User Data in login:', userData)// Save user data
  };

  const logout = () => {
    setUser(null); // Clear user data
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the UserContext
export const useUser = () => useContext(UserContext);
