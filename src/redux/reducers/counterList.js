import { ADD_COUNTER } from 'redux/actions/counterList';
import { COUNTER_INCREMENT } from 'redux/actions/counter';
import { List } from 'immutable';
import counterReducer from './counter';

export default function counterList (state = List(), action) {
  switch (action.type) {
    case ADD_COUNTER:
      return state.push(counterReducer(undefined, action));

    case COUNTER_INCREMENT:
      return state.map(counter => counterReducer(counter, action));

    default:
      return state;
  }
}
