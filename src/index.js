// import { app } from 'https://unpkg.com/hyperapp';
import { app } from 'hyperapp'; // used node_modules instead of hyperapp cdn
import {
  main,
  text,
  input,
  button,
  ul,
  li,
  span,
  header,
  section,
  h1,
  // } from 'https://unpkg.com/@hyperapp/html?module';
} from '@hyperapp/html';
import { focuser } from './lib/io';

//////////
// ACTIONS
//////////

// Universal utility action that returns a wrapping action (state, payload)
const withEnterKey = (action) => (state, payload) => {
  if (payload.key && payload.key === 'Enter') return [action, payload];
  return state;
};

const withTargetValue = (action) => (state, payload) => {
  if (payload.target && payload.target.value)
    return [action, payload.target.value];
  return state;
};

// Gets the current value of the input field and put it in the state (newitem)
const InputNewItem = (state, input) => ({
  ...state,
  newitem: input,
});

// if the input field is empty, don't add the item to the list, else put it in the iters[] array
const AddItem = (state) =>
  !state.newitem
    ? state
    : {
        ...state, // get the current state
        items: [state.newitem, ...state.items], // add the new item to the items array
        done: [false, ...state.done], // add a new item to the done array with => done: false
        newitem: null, // clear the input field
      };

const ToggleDone = (state, index) => {
  let done = [...state.done]; // make a copy of the done array
  done[index] = !done[index]; // toggle the done value by setting it to the opposite of what it is now
  return { ...state, done }; // return the new state
};

const Delete = (state, index) => {
  let items = [...state.items];
  let done = [...state.done];
  items.splice(index, 1); // remove the item from the items array
  done.splice(index, 1); // remove the item from the done array
  return { ...state, items, done }; // return the copies of the old state, but with the item at index removed
};

// const StartEditing = (state, index) => {
//   // immediately start editing when the user clicks on an item
//   // however, this approach is not pure => pure actions only returns data and contains no logic!
//   requestAnimationFrame((_) =>
//     requestAnimationFrame((_) => {
//       let elem = document.querySelector('.itemlist input[type=text]');
//       if (elem) elem.focus();
//     })
//   );
//   return {
//     ...state,
//     editing: index,
//   };
// };

const StartEditing = (state, index) => {
  // 1. return data
  return [
    {
      ...state,
      editing: index,
    },
    // 2. perform logic (Effect) with the called action
    // 3. use selector: ... as payload for the focusEffect as an argument
    // [focusEffect, { selector: '.itemlist input[type=text]' }],
    focuser('.itemlist input[type=text]'),
  ];
};

const StopEditing = (state) => ({
  ...state,
  editing: null,
});

const InputEditing = (state, input) => {
  let items = [...state.items];
  items[state.editing] = input;
  return { ...state, items };
};

app({
  init: { newitem: null, items: [], done: [] },
  view: (state) =>
    main([
      header(h1(text('Todo App'))),
      main([
        section({ class: 'newitementry' }, [
          input({
            type: 'text',
            value: state.newitem,
            oninput: withTargetValue(InputNewItem), // 1. when the input field changes, call the InputNewItem action
            placeholder: 'What do you need to do?',
            onkeypress: withEnterKey(AddItem), // 2. when the enter key is pressed, call the withEnterKey action
          }),
          button({ onclick: AddItem }, text('+')), // 3. when the button is clicked, call the AddItem action
        ]),
        section({ class: 'itemlist' }, [
          ul(
            state.items.map(
              (
                itemText,
                index // 3. map through the items array
              ) =>
                li(
                  state.editing === index
                    ? input({
                        type: 'text',
                        value: state.items[index],
                        oninput: withTargetValue(InputEditing),
                        onblur: StopEditing,
                        onkeypress: withEnterKey(StopEditing),
                      })
                    : [
                        input({
                          type: 'checkbox',
                          checked: state.done[index], // 4. return current done value
                          oninput: [ToggleDone, index], // 5. when the checkbox changes, call the ToggleDone function with the index of the item => The payload (index) becomes the second argument to the action (ToggleDone).
                        }),
                        span(
                          {
                            onclick: [StartEditing, index],
                            class: { done: state.done[index] },
                          },
                          text(itemText)
                        ),
                        button({ onclick: [Delete, index] }, text('x')),
                      ]
                )
            )
          ),
        ]),
      ]),
    ]),
  node: document.getElementById('app'),
});
