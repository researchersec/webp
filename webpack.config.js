const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your app
  output: {
    filename: 'bundle.js',  // The output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  resolve: {
    fallback: {
      "fs": false, // fs isn't needed in the browser, disable it
      "path": require.resolve("path-browserify"), // Provide polyfill for path
      "stream": require.resolve("stream-browserify"), // Polyfill stream API
      "buffer": require.resolve("buffer/"), // Polyfill for buffer
      "process": require.resolve("process/browser") // Polyfill process
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',  // Change to 'production' for production builds
};
