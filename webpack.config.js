const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$', // filtering to anything that ends in .js with RegEx
                exclude: /none_modules/, // exclude files and directories to be loaded
                loader: 'babel-loader' // babel-loader that allow us to use webpack on our JavaScript files
            }
        ]
    }
}