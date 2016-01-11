var webpack = require('webpack');
var path = require('path');

var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;

module.exports = {
    context: path.join(__dirname, './app'),
    entry: {
        jsx: './index.jsx',
        html: './index.html',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                //IMAGE LOADER
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'url-loader?limit=8192&name=images/[name]-[hash].[ext]'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    "style",
                    "css?sourceMap",
                    "sass?sourceMap"
                ]
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    sassLoader: {
        includePaths: [
            require('node-bourbon').includePaths[0],
            require('node-neat').includePaths[1]
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        })
    ],
    devServer: {
        contentBase: './app',
        hot: true
    }
};
