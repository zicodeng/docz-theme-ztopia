import React, {
  FunctionComponent,
  createContext,
  useState,
  useContext,
} from 'react';
import { theme, ComponentsProvider } from 'docz';

import {
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Link,
  ThematicBreak,
  InlineCode,
  OrderedList,
  UnorderedList,
  Blockquote,
  Page,
} from './components';

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
          p: Paragraph,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          a: Link,
          hr: ThematicBreak,
          inlineCode: InlineCode,
          ol: OrderedList,
          ul: UnorderedList,
          blockquote: Blockquote,
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
    primaryLight: '#d9eaff', // sidebar menu item (hovered)
    primary: '#006fff', // brand, link
    primaryDark: '#0058cc', // link (hovered)
    secondary: '#62ddbd',
    danger: '#ec5564',
  },
  fonts: {
    body: 'Lato, sans-serif',
    title: 'Oswald, sans-serif',
  },
  logo: {
    src: null,
    width: 40,
  },
};

export default theme(defaultThemeConfig)(Theme);
