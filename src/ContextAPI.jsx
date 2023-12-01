// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Add other state or functions you want to share here

  return (
    <AppContext.Provider value={{ theme, setTheme, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext