import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';
import DevTools from 'containers/DevTools';

let finalCreateStore;
if (__DEBUG__) {
  finalCreateStore = compose(
    DevTools.instrument()
  )(createStore);
} else {
  finalCreateStore = compose()(createStore);
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
