import { Map, fromJS } from 'immutable';
import { REQUEST_STREAMS, RECEIVE_STREAMS } from 'redux/actions/streamList';

export default function streamList (state = Map(), action) {
  switch (action.type) {
    case REQUEST_STREAMS:
      return state.set('game', action.payload.game);
    case RECEIVE_STREAMS:
      return state
        .set('meta', fromJS(action.payload.meta))
        .set('streams', fromJS(action.payload.streams));
    default:
      return state;
  }
};
