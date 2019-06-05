import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import tslint from 'rollup-plugin-tslint';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import chalk from 'chalk';

import clean from './scripts/rollup-plugin-clean';

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

console.log(chalk.green(`Building bundle for ${NODE_ENV}...`));

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/theme.tsx',
  output: { file: './dist/index.js', format: 'esm' },
  external: id =>
    !id.startsWith('.') && !id.startsWith('/') && !id.endsWith('css'),
  onwarn: warning => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    console.warn(`(!) ${warning.message}`);
  },
  plugins: [
    clean('dist'),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    resolve({
      extensions,
    }),
    url({
      emitFiles: false,
      limit: 5000 * 1024, // 5Mb
    }),
    commonjs({}),
    babel({
      extensions,
      include: ['./src/**'],
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        ['@babel/preset-env', { modules: false }],
      ],
      babelrc: false,
    }),
    postcss({
      modules: {
        globalModulePaths: [/node_modules/],
        generateScopedName: isDev
          ? '[name]__[local]--[hash:base64:5]'
          : '[hash:base64:5]',
      },
    }),
    progress({}),
    tslint({
      configuration: './tslint.json',
      include: [/\*.tsx?/],
    }),
    isDev ? null : terser(),
  ],
};
