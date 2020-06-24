const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    externals: ['.js'],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            use: ['babel-loader']
        }]
    }
}