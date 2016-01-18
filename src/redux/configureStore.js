import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import DevTools from 'containers/DevTools';

const middleware = applyMiddleware(thunk);

let finalCreateStore;
if (__DEBUG__) {
  finalCreateStore = compose(
    middleware,
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  )(createStore);
} else {
  finalCreateStore = compose(middleware)(createStore);
}

function getDebugSessionKey () {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore (initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer').default)
    );
  }

  return store;
}
