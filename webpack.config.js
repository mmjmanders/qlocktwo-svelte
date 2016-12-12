/**
 * Created by mark on 12/12/2016.
 */
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    entry: './app/scripts/main',
    resolve: {
        extensions: ['.js', '.html']
    },
    output: {
        path: './.tmp/scripts',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(html|js)$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.html$/, exclude: /node_modules/, loader: 'svelte-loader'}
        ]
    },
    plugins: [
        new LodashModuleReplacementPlugin({
            'collections': true
        })
    ]
};
