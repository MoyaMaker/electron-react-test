const merge  = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin({
      exclude: '/node_modules/',
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })],
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});
