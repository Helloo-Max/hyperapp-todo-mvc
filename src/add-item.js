import { button, text } from '@hyperapp/html';
import { textInput } from './lib/view.js';

export const wire = ({ get, set, onadd }) => {
  // get(state) => myvalue
  // set(state, newvalue) => newstate

  // Gets the current value of the input field and put it in the state (newitem)
  const InputNewItem = (state, input) => set(state, input);

  // if the input field is empty, don't add the item to the list, else put it in the iters[] array
  const AddItem = (state) => {
    let value = get(state);
    if (!value) return state;
    state = set(state, null);
    state = onadd(state, value);
    return state;
  };

  return {
    model: (state) => ({
      value: get(state),
      InputNewItem,
      AddItem,
    }),
  };
};

export const view = (model) => [
  textInput({
    value: model.value,
    oninput: model.InputNewItem, // 1. when the input field changes, call the InputNewItem action
    placeholder: 'What do you need to do?',
    ondone: model.AddItem, // 2. when the enter key is pressed or button is clicked, call the AddItem action
  }),
  button({ onclick: model.AddItem }, text('+')),
];

export const init = () => null;
