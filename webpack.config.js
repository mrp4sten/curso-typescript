const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/app.js','./src/register.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    //clean: true,
  },
  devServer: {
    static: './dist',
  },
};