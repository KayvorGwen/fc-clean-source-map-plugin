var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var nodeExternals = require('webpack-node-externals')

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    // devtool: '#source-map',
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        // filename: '[name].[chunkhash].js',
        // chunkFilename: '[name].[chunkhash].js',
        // chunkFilename: 'index.js',
        // library: 'cacheGet',
        libraryTarget: 'umd'
    },
    target: "node",
    externals: [nodeExternals()], //为了忽略node_modules文件夹中的所有模块 
})