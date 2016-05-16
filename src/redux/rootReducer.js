import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterList from 'redux/reducers/counterList';
import postsList from 'redux/reducers/postsList';

export default combineReducers({
  counters: counterList,
  postsData: postsList,
  routing: routerReducer
});
