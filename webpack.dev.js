const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: '/\.js$', // filtering to anything that ends in .js with RegEx
                exclude: /none_modules/, // exclude files and directories to be loaded
                loader: 'babel-loader' // babel-loader that allow us to use webpack on our JavaScript files
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        })
    ]
}