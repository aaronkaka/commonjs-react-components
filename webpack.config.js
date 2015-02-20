module.exports = {
  entry: ['webpack/hot/dev-server', './react_components/main.js'],
  output: {
    path: './',
    filename: 'card-component.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};