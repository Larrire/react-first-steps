import React, { useState, createContext } from "react";

export const ThemeContext = createContext('light');

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = () => {
    setTheme(
      prevState => prevState === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <ThemeContext.Provider value={{theme, onToggleTheme: handleToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}