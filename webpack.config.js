"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
    path.join(__dirname, '/src/render.js')
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'bundle.js',
    library: 'react-bandjs-renderer',
    libraryTarget: 'umd',
    umdNamedDefine: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
};
