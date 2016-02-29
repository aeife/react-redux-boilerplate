import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import counterList from 'redux/reducers/counterList';
import postsList from 'redux/reducers/postsList';

export default combineReducers({
  counters: counterList,
  postsData: postsList,
  router
});
