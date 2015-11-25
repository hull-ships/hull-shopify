'use strict';

/* global module, require, process, __dirname */

var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');
var moment = require('moment');

var pkg = require('./package.json');
var manifest = require('./manifest.json');

// DO NOT CHANGE FOLDERS
// WIHTOUT UPDATING PACKAGE.JSON TOO.
var sourceFolder = 'src';
var outputFolder = 'dist';
var assetsFolder = '';
var serverPort = process.env.PORT || 8081;
var previewUrl = 'http://localhost:' + serverPort;

var hotReload = true;

var libName = pkg.name;
var displayName = manifest.name || libName;

// DO NOT CHANGE SHIP ENTRY
// WITHOUT UPDATING PACKAGE.JSON TOO
// THESE ARE THE JS FILES USED AS ENTRY POINTS TO COMPILE YOUR APP


/*
  --------------------------------
  Compiled JS files
  --------------------------------
*/
var entry = {
  ship: './' + sourceFolder + '/ship.js'
};

/*
  --------------------------------
  Copied files
  --------------------------------
*/
var files = {
  'src/vendors/**/*': path.join(outputFolder, assetsFolder, 'vendors'),
  'src/images/**/*': path.join(outputFolder, assetsFolder, 'images'),
  'src/icons/**/*': path.join(outputFolder, assetsFolder, 'icons'),
  'src/locales/**/*': path.join(outputFolder, 'locales'),
  'manifest.json': outputFolder,
  'src/*.ico': outputFolder,
  'src/*.md': outputFolder,
  'src/*.jpg': outputFolder,
  'src/*.png': outputFolder,
  'src/*.html': outputFolder,
  'CNAME': outputFolder,
};

var output = {
  path: path.join(__dirname, outputFolder, assetsFolder, '/'),
  pathinfo: true,
  filename: '[name].js',
  chunkFileName: '[name].chunk.js',
  libraryTarget: 'umd',
  library: 'Hull'+displayName+'Ship',
  publicPath: assetsFolder + '/',
};

var resolve = { extensions: ['', '.js', '.jsx', '.css', '.scss'] };

// about babel : it's VERY SLOW. DO NOT APPLY IT TO EVERY SOURCE FILE. see the Excludes we applied
var loaderLibrary = {
  json: {test: /\.json$/, loader: 'json' },
  js: {test: /\.(js)$/, loader: 'babel', exclude: /node_modules|src\/vendors/ }
};

var devLoaders = [
  loaderLibrary.json,
  loaderLibrary.js
];

var loaders = [
  loaderLibrary.json,
  loaderLibrary.js
];


// We remove the 'dist' from the filenames for demo and index.html in package.json
// Package.json expects our files to be addressable from the same repo
// We put them in `dist` to have a clean structure but then we need to build them in the right place
var plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
  new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js', minChunks: Infinity}),
  new webpack.DefinePlugin({
    BUILD_DATE: JSON.stringify(moment().format('MMMM, DD, YYYY, HH:mm:ss')),
    PUBLIC_PATH: JSON.stringify(output.publicPath),
  }),
];


/*
  ----------------------------
  NGROK
  ----------------------------
*/
var ngrok;
if(process.env.NGROK_AUTHTOKEN) {
  ngrok = {
    port: serverPort,
    authtoken: process.env.NGROK_AUTHTOKEN,
    subdomain: libName,
  };
}

/*
  ----------------------------
  CLOUDFRONT
  ----------------------------
*/
var cloudfront;
if (process.env.AWS_KEY && process.env.AWS_SECRET) {
  var cloudfrontInvalidations = ['/' + libName + '/*'];
  cloudfront = {
    config: {
      credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
      },
      distributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
      region: 'us-east-1',
    },
    invalidationBatch: {
      CallerReference: new Date().toString(),
      Paths: {
        Quantity: cloudfrontInvalidations.length,
        Items: cloudfrontInvalidations,
      },
    },
  };
}

/*
  ----------------------------
  DEV MODE / HOT RELOAD overrides
*/
var devEntry = entry;
var devPlugins = plugins;

module.exports = {

  libName: libName,
  displayName: displayName,

  hotReload: hotReload,
  ngrok: ngrok,
  cloudfront: cloudfront,

  files: files,

  sourceFolder: sourceFolder,
  outputFolder: outputFolder,
  assetsFolder: assetsFolder,
  serverPort: serverPort,
  previewUrl: previewUrl,


  entry: entry,
  output: output,
  plugins: plugins,

  devEntry: devEntry,
  devPlugins: devPlugins,
  devLoaders: devLoaders,

  resolve: resolve,
  loaders: loaders,

  pkg: pkg,

};
