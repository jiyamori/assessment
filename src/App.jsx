// App.js
import React from 'react';
import { AppContextProvider } from './ContextAPI';
import ThemeToggle from './ThemeToggle';
import LoginPage from './LoginPage';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <ThemeToggle />
        <LoginPage />
      </div>
    </AppContextProvider>
  );
}

export default App;
