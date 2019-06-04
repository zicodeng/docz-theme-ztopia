import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import pkg from './package.json';

// https://www.docz.site/docs/project-configuration
export default {
  src: './example',
  public: './public',
  title: 'Ztopia Theme',
  description: pkg.description,
  theme: path.resolve(__dirname, './dist'),
  typescript: false,
  notUseSpecifiers: true,
  htmlContext: {
    head: {
      links: [
        // Google fonts
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap',
        },
        // Font Awesome
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
  filterComponents: files =>
    files.filter(file => /([^d]\.(t|j)sx?)$/.test(file)),
  modifyBundlerConfig: (config, isDev) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        // For loading user styles (using CSS modules)
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, './example')],
          use: [
            {
              loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: true,
                localIdentName: isDev
                  ? '[name]__[local]--[hash:base64:5]'
                  : '[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        },
        // For loading vendor styles (not using CSS modules)
        {
          test: /\.css$/,
          include: [],
          use: [
            {
              loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    optimization: {
      ...config.optimization,
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          styles: {
            chunks: 'all',
            name: 'styles',
            test: module => /(\.module)?\.css$/.test(module.type),
            enforce: true,
          },
        },
      },
    },
    plugins: [
      ...config.plugins,
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash].css',
      }),
    ],
  }),
  themeConfig: {
    logo: {
      src: '/public/images/logo.png',
    },
  },
};
