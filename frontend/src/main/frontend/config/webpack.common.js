const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
var pckg = require('../package.json');

const METADATA = {
    TITLE: pckg.name,
    VERSION: pckg.version
};

module.exports = {

  entry: {
    'polyfills': './polyfills.ts',
    'vendor': './vendor.ts',
    'app': './app/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
          test: /\.ts$/,
          loader: 'string-replace-loader',
          exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },


      { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass'] }
    ]
  },

  plugins: [

    new CleanWebpackPlugin(['dist']),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }) ,

    new webpack.DefinePlugin({
      'process.env': {
        'VERSION': JSON.stringify(METADATA.VERSION),
        'TITLE' : JSON.stringify(METADATA.TITLE)
      }
    })
    
  ]
};