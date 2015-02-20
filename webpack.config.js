module.exports = {
  entry: {
   dev: ['webpack/hot/dev-server', './react_components/main.js'],
   dist: ['./react_components/main.js']
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