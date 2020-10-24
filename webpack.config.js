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
        }, {
            test: /\.(png|jpe?g|gif|svg|ico)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            }, ],
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
            template: './src/template/colors_and_type.pug',
            filename: 'colors_and_type.html'

        }),
        new HtmlWebpackPlugin({
            template: './src/template/form_elements.pug',
            filename: 'form_elements.html'

        }),
        new HtmlWebpackPlugin({
            template: './src/template/headers_footers.pug',
            filename: 'headers_footers.html'

        }),
        new HtmlWebpackPlugin({
            template: './src/template/cards.pug',
            filename: 'cards.html'

        }),
    ],
};