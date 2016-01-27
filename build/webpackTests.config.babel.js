import path from 'path';

export default {
  target: 'node',
  entry: path.resolve('./src/components/Heading/__tests__/Heading.spec.js'),
  output: {
    path: path.resolve('./testdist'),
    filename: 'bundletest.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'babel'
      ]
    }, {
      test: /\.scss?$/,
      exclude: /node_modules/,
      loaders: [
        'null-loader'
      ]
    }]
  }
};
