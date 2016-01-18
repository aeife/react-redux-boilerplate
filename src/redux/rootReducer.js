import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import counterList from 'redux/reducers/counterList';
import streamList from 'redux/reducers/streamList';

export default combineReducers({
  counters: counterList,
  streamData: streamList,
  router
});
