const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');
const webpack = require('webpack');
module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: DIST_DIR,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss']
    },
    module : {
        rules : [
            {
                test: /\.s?css$/,
                exclude: /node-modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test : /\.jsx?/,
                include : SRC_DIR,
                loader : 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};