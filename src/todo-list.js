import todoItem from './todo-item.js';
import { list } from './lib/view.js';
import * as todos from './todo-logic.js';
import { button, input, p, text } from '@hyperapp/html';

export const init = todos.init;

export const wire = ({ get, set }) => {
  const map = (fn) => (state, payload) => set(state, fn(get(state), payload));
  return {
    model: (state) => ({
      ...get(state),
      ToggleDone: map(todos.toggleDone),
      Delete: map(todos.dlete),
      StartEditing: map(todos.startEditing),
      StopEditing: map(todos.stopEditing),
      InputEditing: map(todos.inputEditing),
      SetAllDone: map(todos.setAllDone),
      ClearCompleted: map(todos.clearCompleted),
    }),
    addItem: map(todos.addItem),
    isItems: (state) => !!todos.getNbrOfItems(get(state)),
  };
};

export const view = ({ filter, ...model }) =>
  list({
    items: model.items,
    props: (index) => ({
      hidden:
        (filter === 'completed' && !model.done[index]) ||
        (filter === 'active' && model.done[index]),
    }),
    render: (_, index) =>
      todoItem({
        value: model.items[index],
        editing: model.editing === index,
        checked: model.done[index],
        onedit: [model.StartEditing, index],
        oninput: model.InputEditing,
        ondone: model.StopEditing,
        ontoggle: [model.ToggleDone, index],
        ondelete: [model.Delete, index],
      }),
  });

export const allCheck = (model) => {
  let allDone = todos.isAllDone(model);

  return input({
    type: 'checkbox',
    style: { visibility: model.items.length ? 'visible' : 'hidden' },
    checked: allDone,
    oninput: [model.SetAllDone, !allDone],
  });
};

export const itemCount = (model) => {
  let n = todos.getNbrOfActive(model);
  return p(text(n + ' items left'));
};

export const clearButton = (model) => {
  let n = todos.getNbrOfCompleted(model);
  if (!n) return false;
  return button({ onclick: model.ClearCompleted }, text('Clear completed'));
};
