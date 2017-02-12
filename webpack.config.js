const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './client/components/index.jsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'client', 'compiled'),
    publicPath: '/compiled/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  devtool : '#source-map',

  plugins: [
   new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"development"'
    }
  }),
  new webpack.HotModuleReplacementPlugin()
  ]
};
