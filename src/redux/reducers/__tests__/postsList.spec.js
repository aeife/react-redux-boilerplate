import { expect } from 'chai';
import reducer from '../postsList';
import { Map, fromJS } from 'immutable';

describe('postsList reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.equal(Map({}));
  });

  it('should handle REQUEST_POSTS', () => {
    const subreddit = 'news';
    expect(reducer(Map({}), {
      type: 'REQUEST_POSTS',
      payload: {
        subreddit
      }
    })).to.equal(Map({subreddit}));
  });

  it('should handle RECEIVE_POSTS', () => {
    const subreddit = 'news';
    const payload = {
      subreddit,
      posts: [{id: 1}, {id: 3}]
    };
    expect(reducer(Map({subreddit}), {
      type: 'RECEIVE_POSTS',
      payload
    })).to.equal(fromJS(payload));
  });
});
