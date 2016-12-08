import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunk);

let finalCreateStore;
if (__DEBUG__) {
  finalCreateStore = compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : require('containers/DevTools').default.instrument(),
    window.devToolsExtension ? f => f : require('redux-devtools').persistState(getDebugSessionKey())
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
