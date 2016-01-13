import { handleActions } from 'redux-actions';
import { COUNTER_INCREMENT } from 'redux/actions/counter';
import { ADD_COUNTER } from 'redux/actions/counterList';
import { Map } from 'immutable';

export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => {
    if (state.get('id') === payload.id) {
      return state.set('value', state.get('value') + payload.value);
    }
    return state;
  },
  [ADD_COUNTER]: (state, { payload }) => {
    return Map({value: 1, id: payload.id});
  }
});
