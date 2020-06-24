var webpack = require('webpack')
var shell = require('shelljs')
var webpackConfig = require('./webpack.prod.conf')
var ora = require('ora')
var path = require('path')

var spinner = ora('building for production...')
spinner.start()

shell.rm('-rf', path.resolve(__dirname, '../dist'))

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})