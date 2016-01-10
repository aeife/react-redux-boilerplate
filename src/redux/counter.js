export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

export const increment = (value = 1) => {
  console.log('INCREMENT');
  return {
    type: COUNTER_INCREMENT,
    value: 1
  };
};

export const actions = {
  increment
};

export default (state = 1, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.value;
  }
  return state;
};
