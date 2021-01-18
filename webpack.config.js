const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './server.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    libraryTarget: "commonjs2"
  },
  target: 'node',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.jpe?g$/, /\.png$/, /\.gif$/, /\.svg$/],
        loader: 'file-loader',
        options: {
          name: 'client/build/static/media/[name].[hash:8].[ext]',
          publicPath: url => url.replace(/client\/build/, ''),
          emitFile: false,
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader"
          }
        ]
      },
    ]
  }
};