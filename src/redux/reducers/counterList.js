import { handleActions } from 'redux-actions';
import { ADD_COUNTER } from 'redux/actions/counterList';
import { COUNTER_INCREMENT } from 'redux/actions/counter';
import { List } from 'immutable';
import counterReduxer from './counter';

export default handleActions({
  [ADD_COUNTER]: (state, action) => state.push(counterReduxer(undefined, action)),
  [COUNTER_INCREMENT]: (state, action) => state.map(counter => counterReduxer(counter, action))
}, List());
