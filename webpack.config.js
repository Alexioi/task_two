const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/main.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./[name].js",
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.css|scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./font/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9001,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/**/*.png",
          to: "img",
          flatten: true,
        },
        {
          from: "src/**/*.svg",
          to: "img",
          flatten: true,
        },
      ],
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/pages/index/index.pug",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/colors-and-type/colors-and-type.pug",
      filename: "colors-and-type.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/form_elements/form_elements.pug",
      filename: "form_elements.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/headers_footers/headers_footers.pug",
      filename: "headers_footers.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/cards/cards.pug",
      filename: "cards.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      mask: "jquery-mask-plugin",
    }),
  ],
};
