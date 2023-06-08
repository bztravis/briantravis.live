const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    main: './src/scripts/main.js',
    format: './src/scripts/format.js',
    placePhotos: './src/scripts/placePhotos.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'scripts'),
  },
};
