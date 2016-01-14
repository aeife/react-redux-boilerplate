export const ADD_COUNTER = 'ADD_COUNTER';

let nextCounterId = 0;
export const addCounter = value => ({type: ADD_COUNTER, payload: {...value, id: nextCounterId++}});

export const actions = {
  addCounter
};
