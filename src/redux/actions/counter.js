import { createAction } from 'redux-actions';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const increment = createAction(COUNTER_INCREMENT, (id = 1, value = 1) => ({id, value}));

export const actions = {
  increment
};
