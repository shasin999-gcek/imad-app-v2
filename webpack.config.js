var debug = process.env.NODE_ENV !=="production";
var webpack = require('webpack');

module.exports = {
  entry: "./pages/Layout/bundle.js",
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/pages",
    filename: "bundle.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
  ],
  watch: true
};
