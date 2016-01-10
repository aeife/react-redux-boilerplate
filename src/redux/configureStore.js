import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from './rootReducer';
import DevTools from 'containers/DevTools';

let finalCreateStore;
if (__DEBUG__) {
  finalCreateStore = compose(
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  )(createStore);
} else {
  finalCreateStore = compose()(createStore);
}

function getDebugSessionKey () {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore (initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer'))
    );
  }

  return store;
}
