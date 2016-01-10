import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../build/webpack.config.babel.js';
import fallback from 'connect-history-api-fallback';

const app = express();
const compiler = webpack(config);

app.use(fallback())
app.use(express.static(path.resolve('./dist')));
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

app.listen(8080, '0.0.0.0');
