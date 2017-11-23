var path = require('path');

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/app'),
    filename: 'bundle.js'
  }
};
