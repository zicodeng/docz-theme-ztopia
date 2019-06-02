const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars')({
      variables: require('./src/styles/variables'),
    }),
    require('postcss-custom-media')({
      importFrom: path.join(__dirname, './src/styles/viewports.css'),
    }),
    require('postcss-nested'),
    require('postcss-extend-rule'),
    require('autoprefixer'),
    require('cssnano')({}),
  ],
};
