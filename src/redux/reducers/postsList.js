import { Map, fromJS } from 'immutable';
import { REQUEST_POSTS, RECEIVE_POSTS } from 'redux/actions/postsList';

export default function postsList (state = Map(), action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return state.set('subreddit', action.payload.subreddit);
    case RECEIVE_POSTS:
      return state
        .set('posts', fromJS(action.payload.posts));
    default:
      return state;
  }
};
