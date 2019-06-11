import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import FilterWarningsPlugin from 'webpack-filter-warnings-plugin';

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
            isDev
              ? {
                  // v0.23.1
                  loader: 'style-loader',
                  options: {
                    // When source map is set to true,
                    // CSS will be generated as stylesheet blobs.
                    // This is required because we should always creates separate stylesheets for user styles
                    // so that they will be injected properly in iframe mode.
                    // Plus, you will want source map during development
                    sourceMap: true,
                  },
                }
              : {
                  // v0.7.0
                  loader: MiniCssExtractPlugin.loader,
                },
            {
              // v3.0.0
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                // Only enable source map in development mode
                sourceMap: isDev,
                modules: {
                  mode: 'local',
                  localIdentName: isDev
                    ? '[name]__[local]--[hash:base64:5]'
                    : '[hash:base64:5]',
                },
              },
            },
            {
              // v3.0.0
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
              // v0.23.1
              // All vendors styles must be loaded in <style> tags
              loader: 'style-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              // v3.0.0
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
      // Optional
      // Silence mini-css-extract-plugin generating lots of warnings for CSS ordering.
      // We use CSS modules that should not care for the order of CSS imports, so we
      // should be safe to ignore these
      //
      // See: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    ],
  }),
  themeConfig: {
    logo: {
      src: '/public/images/logo.png',
    },
  },
};
