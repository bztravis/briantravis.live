const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    main: './src/main.js',
    format: './src/format.js',
    placePhotos: './src/placePhotos.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'scripts'),
  },
};
