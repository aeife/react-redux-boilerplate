import { createAction } from 'redux-actions';

export const ADD_COUNTER = 'ADD_COUNTER';
let nextCounterId = 0;
export const addCounter = createAction(ADD_COUNTER, value => ({...value, id: nextCounterId++}));

export const actions = {
  addCounter
};
