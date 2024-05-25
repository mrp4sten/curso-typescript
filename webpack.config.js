const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/app.js', './src/register.js'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000.
  }
};
