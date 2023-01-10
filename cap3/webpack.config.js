const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: ['./src/index.ts'],
    output:{
        filename: './js/index.js',
        path: path.resolve(__dirname,'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html"}),
        new CopyPlugin({
            patterns: [
              { from: "./public/img", to: "img" },
              { from: "./public/css", to: "css" },
            ],
          }),
    ],   
    devtool: "inline-source-map",
    mode: "development",
    devServer:{
        static: "./dist"
    }
}