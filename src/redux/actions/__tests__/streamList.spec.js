import { expect } from 'chai';
import { actions } from '../streamList.js';
import { REQUEST_STREAMS, RECEIVE_STREAMS } from '../streamList.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to request streams', () => {
    const game = 'My Game';
    const expectedAction = {
      type: REQUEST_STREAMS,
      payload: {
        game
      }
    };

    expect(actions.requestStreams(game)).to.deep.equal(expectedAction);
  });

  it('should create an action to receive streams', () => {
    const game = 'My Game';
    const response = {_total: 100, streams: [{id: 1}, {id: 2}]};
    const expectedAction = {
      type: RECEIVE_STREAMS,
      payload: {
        game,
        streams: [{id: 1}, {id: 2}],
        meta: {
          total: 100
        }
      }
    };

    expect(actions.receiveStreams(game, response)).to.deep.equal(expectedAction);
  });

  describe('async', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('creates RECEIVE_STREAMS when fetching streams', (done) => {
      const game = 'League of Legends';
      nock('https://api.twitch.tv')
        .get('/kraken/streams')
        .query({game: 'League of Legends'})
        .reply(200, {
          streams: [{id: 1}],
          _total: 100
        });

      const expectedActions = [
        {type: 'REQUEST_STREAMS', payload: {game}},
        {type: 'RECEIVE_STREAMS', payload: {
          game,
          meta: {total: 100},
          streams: [{id: 1}]
        }}
      ];
      const store = mockStore({}, expectedActions, done);
      store.dispatch(actions.fetchStreams(game));
    });
  });
});
