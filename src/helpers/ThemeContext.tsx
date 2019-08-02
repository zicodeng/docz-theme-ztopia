import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  switchTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const ThemeConsumer = ThemeContext.Consumer;

export const useTheme = () => useContext(ThemeContext);
