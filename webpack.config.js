const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js", // Adjust if your entry file is different
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
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
};
