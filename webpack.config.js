module.exports = {
  // This is the entry point or start of our react application
  entry: ['./src/index.js'],

  // The plain compiled JavaScript will be output into this file
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  // This section describes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that end in a .js or .jsx extension
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: 'eval-source-map'
};
