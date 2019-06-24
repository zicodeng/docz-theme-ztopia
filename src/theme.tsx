import React, { FunctionComponent, useState } from 'react';
import { theme, ComponentsProvider } from 'docz';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLightbulb as fasLightbulb,
  faSearch,
  faCode,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as farLightbulb } from '@fortawesome/free-regular-svg-icons';

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
  PreformattedText,
  OrderedList,
  UnorderedList,
  Blockquote,
  Table,
  Loader,
  Props,
  Playground,
  Page,
  NotFound,
} from './components';
import { ThemeProvider } from './ThemeContext';

// Import global style
import 'normalize.css';
import './styles/global.css';

// Initialize font awesome
library.add(fasLightbulb, farLightbulb, faSearch, faCode, faInfo);

const Theme: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
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
        pre: PreformattedText,
        ol: OrderedList,
        ul: UnorderedList,
        blockquote: Blockquote,
        table: Table,
        loading: Loader,
        props: Props,
        playground: Playground,
        page: Page,
        notFound: NotFound,
      }}
    >
      <ThemeProvider
        value={{
          theme,
          switchTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
        }}
      >
        {children}
      </ThemeProvider>
    </ComponentsProvider>
  );
};

/**
 * This theme configuration will be merged with `themeConfig` setting in the `doczrc.js` project configuration
 */
const defaultThemeConfig = {
  colors: {
    blackLight: '#242635', // sidebar background (dark), table header background (dark), preview handle background (dark), <blockquote> background, <code> background
    black: '#151725', // page background (dark)
    blackDark: '#0e1019', // text
    whiteLight: '#fcfcfd', // text
    white: '#ffffff', // page background (light)
    whiteDark: '#f5f7f9', // sidebar background (light), table header background (light), preview handle background (light), <blockquote> background, <code> background
    grey: '#d1d4db', // table border, preview border, preview handle bars
    primaryLight: '#d9eaff', // sidebar menu item (hovered)
    primary: '#006fff', // brand background, link, thematic break, preview error type, props table property name, <h1>, <blockquote> border left, search result
    primaryDark: '#0046a3', // link (hovered)
    secondary: '#62ddbd', // props table shape type, brand background, <hr>, search result
    highlight: '#ec5564', // matched search query
    error: 'rgba(200,0,0,0.8)', // preview error background
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
