var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/client.jsx',
  output: { path: __dirname + '/assets', filename: 'bundle.js' },
  devtool: "#eval-source-map",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  }
}

