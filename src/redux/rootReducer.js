import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import counterList from 'redux/reducers/counterList';

export default combineReducers({
  counters: counterList,
  router
});
