import fs from 'fs-extra';

import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import tslint from 'rollup-plugin-tslint';
import progress from 'rollup-plugin-progress';
import typescript2 from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import typescript from 'typescript';
import chalk from 'chalk';

import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

console.log(chalk.green(`Building ${pkg.name} for ${NODE_ENV}...`));

// Remove previously built lib first
fs.removeSync('./dist');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const external = id =>
  (!id.startsWith('.') && !id.startsWith('/') && !id.endsWith('css')) ||
  id.includes('./helpers');

const onwarn = warning => {
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    return;
  }
  console.warn(`(!) ${warning.message}`);
};

const plugins = [
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
    plugins: ['@babel/plugin-proposal-class-properties'],
    babelrc: false,
  }),
  postcss({
    modules: {
      // CSS files that should not be transpiled and converted to CSS modules
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
];

export default [
  {
    input: './src/theme.tsx',
    output: { file: './dist/index.js', format: 'cjs' },
    external,
    onwarn,
    plugins,
  },
  {
    input: './src/helpers/index.ts',
    output: { file: './dist/helpers/index.js', format: 'esm' },
    external,
    onwarn,
    plugins: [
      typescript2({
        typescript,
        clean: true, // suppress (plugin rpt2) Error: Unknown object type "asyncfunction"
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: './dist',
          },
          include: ['./src/helpers/**/*'],
        },
      }),
      copy({
        targets: [
          {
            src: './README.md',
            dest: './dist',
          },
          {
            src: './package.json',
            dest: './dist',
          },
          {
            src: './public',
            dest: './dist',
          },
        ],
      }),
      ...plugins,
    ],
  },
];
