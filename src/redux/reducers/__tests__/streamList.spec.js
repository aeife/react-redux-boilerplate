import { expect } from 'chai';
import reducer from '../streamList';
import { Map, fromJS } from 'immutable';

describe('streamList reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.equal(Map({}));
  });

  it('should handle REQUEST_STREAMS', () => {
    const game = 'My Game';
    expect(reducer(Map({}), {
      type: 'REQUEST_STREAMS',
      payload: {
        game
      }
    })).to.equal(Map({game}));
  });

  it('should handle RECEIVE_STREAMS', () => {
    const game = 'My Game';
    const payload = {
      game,
      meta: {
        total: 100
      },
      streams: [{id: 1}, {id: 3}]
    };
    expect(reducer(Map({game}), {
      type: 'RECEIVE_STREAMS',
      payload
    })).to.equal(fromJS(payload));
  });
});
