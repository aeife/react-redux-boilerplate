import { createAction, handleActions } from 'redux-actions';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const increment = createAction(COUNTER_INCREMENT, (value = 1) => value);

export const actions = {
  increment
};

export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => state + payload
}, 1);
