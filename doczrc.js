import path from 'path';

import { css } from 'docz-plugin-css';

import postcssConfig from './postcss.config';
import pkg from './package.json';

// https://www.docz.site/docs/project-configuration
export default {
  src: './',
  public: './public',
  title: 'Ztopia Theme',
  description: pkg.description,
  theme: path.resolve(__dirname, './src/theme.tsx'),
  typescript: true,
  notUseSpecifiers: true,
  filterComponents: files =>
    files.filter(file => /([^d]\.(t|j)sx?)$/.test(file)),
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/monokai.css',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
          integrity:
            'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  /** Control menu order */
  menu: [
    { name: 'Docs', menu: ['Introduction', 'Getting Started'] },
    { name: 'Components', menu: [] },
  ],
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
      loaderOpts: postcssConfig,
    }),
  ],
  // Customize docz-theme-default
  // https://github.com/pedronauck/docz/tree/master/core/docz-theme-default
  themeConfig: {
    logo: {
      src: '/public/images/logo.png',
    },
  },
};
