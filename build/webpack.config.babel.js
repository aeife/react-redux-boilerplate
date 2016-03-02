import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import autoprefixer from 'autoprefixer';

import config from '../config';

const webpackConfig = {
  name: 'reduxBoilerplate',
  target: 'web',
  devtool: config.devtools,
  resolve: {
    root: config.dir_src,
    extensions: ['', '.js']
  },
  module: {}
};

webpackConfig.entry = {
  app: config.hmr
    ? [config.dir_src + '/index.js', 'webpack-hot-middleware/client']
    : [config.dir_src + '/index.js']
};

webpackConfig.output = {
  filename: `[name].bundle.js`,
  path: config.dir_dist,
  publicPath: '/'
};

// NEEDED??
webpackConfig.devServer = {
  contentBase: config.dir_dist,
  hot: true
};

webpackConfig.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    template: config.dir_src + '/index.html',
    filename: 'index.html',
    inject: 'body'
  })
];
if (config.hmr) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}
if (config.env === 'production') {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true
      },
      comments: false
    })
  );
  webpackConfig.plugins.push(
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  );
}

webpackConfig.module.loaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel'
}];

if (config.env === 'production') {
  webpackConfig.module.loaders.push({
    test: /\.scss?$/,
    loader: ExtractTextPlugin.extract('style?sourceMap', [
      'css?modules&localIdentName=[name]---[local]---[hash:base64:5]&sourceMap&importLoaders=1',
      'postcss',
      'sass?sourceMap'
    ])
  });
} else {
  webpackConfig.module.loaders.push({
    test: /\.scss?$/,
    loaders: [
      'style?sourceMap',
      'css?modules&localIdentName=[name]---[local]---[hash:base64:5]&sourceMap&importLoaders=1',
      'postcss',
      'sass?sourceMap'
    ]
  });
}

webpackConfig.postcss = function () {
  return [autoprefixer];
};

webpackConfig.module.preLoaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'eslint'
}];
webpackConfig.eslint = {
  configFile: path.resolve('./.eslintrc'),
  emitWarning: true
};

export default webpackConfig;
