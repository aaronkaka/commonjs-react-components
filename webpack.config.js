var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __SCRIPTINCLUDE__: JSON.stringify(JSON.parse(process.env.BUILD_SCRIPTINCLUDE || 'false'))
});

module.exports = {
  entry: {
   dev: ['webpack/hot/dev-server', './react_components/index.js'],
   dist: ['./react_components/index.js']
  },
  output: {
    path: './',
    filename: 'build/[name].card-component.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [definePlugin]
};