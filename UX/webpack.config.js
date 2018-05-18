const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ["babel-polyfill", "./src/app.js"],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 6969
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ]
};

module.exports = config;