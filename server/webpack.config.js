
module.exports = {
  entry: './src/index.js',
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
        exclude:/node-modules/,
        loaders: 'babel-loader'
    }]
  }
}
