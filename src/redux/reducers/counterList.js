import { handleActions } from 'redux-actions';
import { ADD_COUNTER } from 'redux/actions/counterList';
import { COUNTER_INCREMENT } from 'redux/actions/counter';
import { List } from 'immutable';
import counterReducer from './counter';

export default handleActions({
  [ADD_COUNTER]: (state, action) => state.push(counterReducer(undefined, action)),
  [COUNTER_INCREMENT]: (state, action) => state.map(counter => counterReducer(counter, action))
}, List());
