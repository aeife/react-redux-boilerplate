export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

export const increment = function (id = 1, value = 1) {
    return {type: COUNTER_INCREMENT, payload: {id, value}};
}

export const actions = {
  increment
};
