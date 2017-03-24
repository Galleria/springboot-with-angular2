const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const helpers = require('./helpers');
const commonConfig = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = "/"
const ENV = process.env.ENV = process.env.NODE_ENV = 'DEV';
const API_URL = 'http://localhost:8080'+PATH;

module.exports = webpackMerge(commonConfig,{
    devtool: 'cheap-module-eval-source-map',
    output: {
      path: helpers.root('dist'),
      publicPath: PATH,
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new webpack.DefinePlugin({
          'process.env': {
            'ENV': JSON.stringify(ENV),
            'API_URL': JSON.stringify(API_URL)
          }
      })
    ]
});
