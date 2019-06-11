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
      links: [],
    },
  },
  /** Control menu order */
  menu: [
    { name: 'Docs', menu: ['Introduction', 'Getting Started', 'Design'] },
    { name: 'Components', menu: ['Button'] },
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
              // Always creates separate stylesheets for user styles
              // so that they will be injected properly in iframe mode
              loader: MiniCssExtractPlugin.loader,
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
              // All vendors styles must be loaded in <style> tags
              loader: 'style-loader',
              options: {
                sourceMap: false,
              },
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
