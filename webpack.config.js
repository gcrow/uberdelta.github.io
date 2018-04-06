const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: './front-static/js/main.js',
  entry: ['./front-static/js/main.js', './front-static/js/home.js'],
  output: {
    //filename: 'bundle.js',
    filename: PROD ? 'bundle.min.js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  /*
  module: {
    loaders:[
    ]
  },
  plugins: [
    new ExtractTextPlugin(''),
  ] */
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
  
};