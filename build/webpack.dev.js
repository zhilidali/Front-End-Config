const webpack = require('webpack');
const config = require('../config/config.js');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: config.port,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    /* development default configuration */
    // new webpack.NamedModulesPlugin(),
    // new webpack.NamedChunksPlugin(),
    // new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),

    // HotModuleReplacementPlugin
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {},
};
