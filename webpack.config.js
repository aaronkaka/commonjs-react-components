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
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};