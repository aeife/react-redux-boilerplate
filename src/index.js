import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';

import Root from './containers/Root';
import routes from 'routes/index';
import configureStore from 'redux/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const history = createHistory();

ReactDOM.render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app')
);
