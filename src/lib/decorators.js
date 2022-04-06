import { focuser, dispatcher } from './io.js';

// 1. perform logic (Effect) with the called action
// 2. use selector: ... as payload for the focusEffect as an argument
// [focusEffect, { selector: '.itemlist input[type=text]' }],
export const withFocus = (action, selector) => (state) =>
  [state, dispatcher(action), focuser(selector)];

// Universal utility action that returns a wrapping action (state, payload)
export const withEnterKey = (action) => (state, payload) => {
  if (payload.key && payload.key === 'Enter') return [action, payload];
  return state;
};

export const withTargetValue = (action) => (state, payload) => {
  if (payload.target && payload.target.value)
    return [action, payload.target.value];
  return state;
};
