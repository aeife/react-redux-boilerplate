import { handleActions } from 'redux-actions';
import { COUNTER_INCREMENT } from 'redux/actions/counter';

export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => ({value: state.value + payload, id: state.id})
}, {value: 1, id: 1});
