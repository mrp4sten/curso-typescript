const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/app.js','./src/register.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/css", to: "css" },
        { from: "./src/img", to: "img" },
      ],
    }),
  ],
};