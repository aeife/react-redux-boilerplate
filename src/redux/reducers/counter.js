import { handleActions } from 'redux-actions';
import { COUNTER_INCREMENT } from 'redux/actions/counter';
import { Map } from 'immutable';

export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => state.set('value', state.get('value') + payload)
}, Map({value: 1, id: 1}));
