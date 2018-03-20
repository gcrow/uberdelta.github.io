const path = require('path');

module.exports = {
  entry: './front-static/js/main.js',
  entry: ['./front-static/js/main.js', './front-static/js/home.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};