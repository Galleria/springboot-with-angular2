const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const helpers = require('./helpers');

const PATH = "/"
const API_URL = 'localhost:8080'+PATH;
const ENV = process.env.NODE_ENV = process.env.ENV = 'UA';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
      path: helpers.root('dist'),
      publicPath: PATH,
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
        mangle: {
          keep_fnames: true
        }
      }),
      new ExtractTextPlugin('[name].css'),
      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify(ENV),
          'API_URL': JSON.stringify(API_URL)
        }
      })
    ]
});