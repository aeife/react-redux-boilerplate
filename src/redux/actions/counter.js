import { createAction } from 'redux-actions';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const increment = createAction(COUNTER_INCREMENT, (value = 1) => value);

export const actions = {
  increment
};
