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
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader',
            ],
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        }, ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9001
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/template/ui_kit.pug',
            filename: 'ui_kit.html'

        }),
    ],
};