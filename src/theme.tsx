import React, {
  FunctionComponent,
  createContext,
  useState,
  useContext,
} from 'react';
import { theme, ComponentsProvider } from 'docz';

import { Page } from './components';

// Import global style
import 'normalize.css';
import './styles/global.css';

export const ThemeContext = createContext({
  theme: 'light',
  switchTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const Theme: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
      }}
    >
      <ComponentsProvider
        components={{
          page: Page,
        }}
      >
        {children}
      </ComponentsProvider>
    </ThemeContext.Provider>
  );
};

/**
 * This theme configuration will be merged with `themeConfig` setting in the `doczrc.js` project configuration
 */
const defaultThemeConfig = {
  showPlaygroundEditor: true,
  editorMaxLines: 20,
  /**
   * Customize codemirror theme
   * Available themes: https://codemirror.net/theme/
   */
  codemirrorTheme: 'monokai',
  colors: {
    blackLight: '#242635',
    black: '#151725',
    blackDark: '#0e1019', // text
    whiteLight: '#fcfcfd', // text
    white: '#F8F8F9',
    whiteDark: '#f4f4f5',
    primaryLight: '#d9eaff',
    primary: '#006fff',
    secondary: '#62ddbd',
    danger: '#ec5564',
  },
  logo: {
    src: null,
    width: 40,
  },
};

export default theme(defaultThemeConfig)(Theme);
