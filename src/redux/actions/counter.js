export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

export const increment = (id = 1, value = 1) => ({type: COUNTER_INCREMENT, payload: {id, value}});

export const actions = {
  increment
};
