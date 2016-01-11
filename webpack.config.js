var webpack = require('webpack');
var path = require('path');

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
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },

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
                test: /\.woff$/,
                loader: 'url?limit=100000'
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
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        }),
    ],
    devServer: {
        contentBase: './app',
        hot: true
    }
};
