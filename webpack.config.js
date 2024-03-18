const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/main.js", // Adjust if your entry file is different
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader, "css-loader"] // Extract CSS into separate files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html", // This is the default value, but it's good to be explicit
    }),
    new HtmlWebpackPlugin({
      template: "./src/shop.html",
      filename: "shop.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/cart.html",
      filename: "cart.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/checkout.html",
      filename: "checkout.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/detail.html",
      filename: "detail.html",
    }),

    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "img" },
      ],
    }),
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
};
