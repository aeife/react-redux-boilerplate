import rootReducer from './rootReducer';
import {createStore} from 'redux';

export default function configureStore () {
  const store = createStore(rootReducer);
  return store;
}
