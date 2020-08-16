const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [{
                test: /\.pug$/,
                use: 'pug-loader'
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },

        ],

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index2.pug',
            filename: 'index2.html'

        }),
        // new HtmlWebpackPlugin({
        //     template: './src/romb.pug',
        //     filename: 'romb.html'

        // })
    ],
};