import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../build/webpack.config.babel.js';

const app = express();
const compiler = webpack(config);

app.use(express.static(path.resolve('./dist')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  headers: { "X-Custom-Header": "yes" },
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler, {
log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.listen(8080, '0.0.0.0');
