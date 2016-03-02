import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import 'styles/main.scss';

import Root from './containers/Root';
import routes from 'routes/index';
import configureStore from 'redux/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const history = createHistory();
syncReduxAndRouter(history, store, state => state.router);

ReactDOM.render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app')
);
