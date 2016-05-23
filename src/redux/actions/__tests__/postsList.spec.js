import { expect } from 'chai';
import { actions, REQUEST_POSTS, RECEIVE_POSTS } from '../postsList.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to request posts', () => {
    const subreddit = 'news';
    const expectedAction = {
      type: REQUEST_POSTS,
      payload: {
        subreddit
      }
    };

    expect(actions.requestPosts(subreddit)).to.deep.equal(expectedAction);
  });

  it('should create an action to receive posts', () => {
    const subreddit = 'news';
    const response = {data: {children: [{id: 1}, {id: 2}]}};
    const expectedAction = {
      type: RECEIVE_POSTS,
      payload: {
        subreddit,
        posts: [{id: 1}, {id: 2}]
      }
    };

    expect(actions.receivePosts(subreddit, response)).to.deep.equal(expectedAction);
  });

  describe('async', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('creates RECEIVE_POSTS when fetching posts', () => {
      const subreddit = 'news';
      nock('http://www.reddit.com')
        .get('/r/news.json')
        .reply(200, {children: [{id: 1}]});

      const expectedActions = [
        {type: 'REQUEST_POSTS', payload: {subreddit}},
        {type: 'RECEIVE_POSTS', payload: {
          subreddit,
          posts: [{id: 1}]
        }}
      ];
      const store = mockStore({});
      store.dispatch(actions.fetchPosts(subreddit))
        .then(() => {
          expect(store.getActions).toEqual(expectedActions);
        });
    });
  });
});
