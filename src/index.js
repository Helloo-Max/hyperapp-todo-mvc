// import { app } from 'https://unpkg.com/hyperapp';
import { h, app } from 'hyperapp'; // used node_modules instead of hyperapp cdn
import {
  main,
  text,
  header,
  section,
  h1,
  footer,
  // } from 'https://unpkg.com/@hyperapp/html?module';
} from '@hyperapp/html';
import { focuser, lsloader, persister } from './lib/io';
import { list } from './lib/view.js';
import todoItem from './todo-item.js';
import * as AddItem from './add-item.js';
import * as TodoList from './todo-list.js';
import * as Filters from './filters.js';

const filters = Filters.wire({
  get: (state) => state.filter,
  set: (state, filter) => ({ ...state, filter }),
});

const todoList = TodoList.wire({
  get: (state) => state.list,
  set: (state, list) => ({ ...state, list }),
});

const addItem = AddItem.wire({
  get: (state) => state.newitem,
  set: (state, newitem) => ({ ...state, newitem }),
  onadd: todoList.addItem,
});

// Refactored code
app({
  init: [
    { newitem: AddItem.init(), list: TodoList.init(), filter: Filters.init() },
    focuser('.newitementry input[type=text]'),
    lsloader('list-items', (state, data) => ({
      ...state,
      list: data,
    })),
  ],
  view: (state, todos = todoList.model(state)) =>
    main([
      h('header', {}, h1(text('Todo App'))),
      main([
        section({ class: 'newitementry' }, [
          TodoList.allCheck(todos),
          ...AddItem.view(addItem.model(state)),
        ]),
        section(
          { class: 'itemlist' },
          TodoList.view({
            ...todos,
            filter: filters.getFilter(state),
          })
        ),
        todoList.isItems(state) &&
          footer({ style: { color: 'red' } }, [
            TodoList.itemCount(todos),
            Filters.menu(filters.model(state)),
            TodoList.clearButton(todos),
          ]),
      ]),
    ]),
  subscriptions: (state) => [
    persister('list-items', state.list),
    ...Filters.subs(filters.model(state)),
  ],
  node: document.getElementById('app'),
});

////////

// const addItem = AddItem.wire({
//   get: (state) => state.newitem,
//   set: (state, newitem) => ({ ...state, newitem }),
//   onadd: (state, newitem) => ({
//     ...state,
//     items: [newitem, ...state.items],
//     done: [false, ...state.done],
//   }),
// });

//////////
// ACTIONS
//////////

// const ToggleDone = (state, index) => {
//   let done = [...state.done]; // make a copy of the done array
//   done[index] = !done[index]; // toggle the done value by setting it to the opposite of what it is now
//   return { ...state, done }; // return the new state
// };

// const Delete = (state, index) => {
//   let items = [...state.items];
//   let done = [...state.done];
//   items.splice(index, 1); // remove the item from the items array
//   done.splice(index, 1); // remove the item from the done array
//   return { ...state, items, done }; // return the copies of the old state, but with the item at index removed
// };

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

// const StartEditing = (state, index) => ({ ...state, editing: index });

// const StopEditing = (state) => ({
//   ...state,
//   editing: null,
// });

// const InputEditing = (state, input) => {
//   let items = [...state.items];
//   items[state.editing] = input;
//   return { ...state, items };
// };

// app({
//   init: [
//     { newitem: AddItem.init(), items: [], done: [] },
//     focuser('.newitementry input[type=text]'),
//   ], // array with initial state and focuser => when the app is loading it will already focus the input field
//   view: (state) =>
//     main([
//       header(h1(text('Todo App'))),
//       main([
//         section({ class: 'newitementry' }, AddItem.view(addItem.model(state))),
//         section(
//           { class: 'itemlist' },
//           list({
//             items: state.items,
//             render: (itemText, index) =>
//               todoItem({
//                 value: state.items[index],
//                 editing: state.editing === index,
//                 checked: state.done[index], // 4. return current done value
//                 onedit: [StartEditing, index],
//                 oninput: InputEditing,
//                 ondone: StopEditing,
//                 ontoggle: [ToggleDone, index], // 5. when the checkbox changes, call the ToggleDone function with the index of the item => The payload (index) becomes the second argument to the action (ToggleDone).
//                 ondelete: [Delete, index],
//               }),
//           })
//         ),
//       ]),
//     ]),
//   node: document.getElementById('app'),
// });
