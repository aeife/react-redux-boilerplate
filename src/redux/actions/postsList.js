export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  payload: {
    subreddit
  }
});

export const receivePosts = (subreddit, response) => ({
  type: RECEIVE_POSTS,
  payload: {
    subreddit,
    posts: response.data ? response.data.children : []
  }
});

export const fetchPosts = (subreddit) => {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(res => res.json())
      .then(res => dispatch(receivePosts(subreddit, res)))
      .catch(error => dispatch(receivePosts(subreddit, error)));
  };
};

export const actions = {
  requestPosts,
  receivePosts,
  fetchPosts
};
