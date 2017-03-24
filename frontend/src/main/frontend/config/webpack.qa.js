const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const helpers = require('./helpers');

const PATH = "/"
const ENV = process.env.ENV = process.env.NODE_ENV = 'QA';
const API_URL = 'http://localhost:8080'+PATH;

module.exports = webpackMerge(commonConfig,{
    devtool: 'source-map',
    output: {
      path: helpers.root('dist'),
      publicPath: PATH,
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
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
