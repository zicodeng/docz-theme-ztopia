import React, { FunctionComponent } from 'react';
import { theme, ComponentsProvider } from 'docz';

import { Page } from './components';

// Import global style
import 'normalize.css';
import './styles/global.css';

const Theme: FunctionComponent = ({ children }) => (
  <ComponentsProvider
    components={{
      page: Page,
    }}
  >
    {children}
  </ComponentsProvider>
);

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
    white: '#f6f6f7',
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
