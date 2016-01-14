import { COUNTER_INCREMENT } from 'redux/actions/counter';
import { ADD_COUNTER } from 'redux/actions/counterList';
import { Map } from 'immutable';

export default function counter (state, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      if (state.get('id') === action.payload.id) {
        return state.set('value', state.get('value') + action.payload.value);
      }
      return state;

    case ADD_COUNTER:
      return Map({value: 1, id: action.payload.id});

    default:
      return state;
  }
}
