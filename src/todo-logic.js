export const init = () => ({
  items: [],
  done: [],
  editing: null,
});

export const toggleDone = (state, index) => {
  let done = [...state.done];
  done[index] = !done[index];
  return { ...state, done };
};

export const dlete = (state, index) => {
  let items = [...state.items];
  let done = [...state.done];
  items.splice(index, 1);
  done.splice(index, 1);
  return { ...state, items, done };
};

export const startEditing = (state, index) => ({
  ...state,
  editing: index,
});

export const stopEditing = (state) => ({
  ...state,
  editing: null,
});

export const inputEditing = (state, input) => {
  let items = [...state.items];
  items[state.editing] = input;
  return { ...state, items };
};

export const addItem = (state, newitem) => ({
  ...state,
  items: [newitem, ...state.items],
  done: [false, ...state.done],
});

export const isAllDone = (state) =>
  state.done.reduce((all, me) => all && me, true);

export const setAllDone = (state, value) => ({
  ...state,
  done: state.done.map(() => value),
});

export const getNbrOfItems = (state) => state.items.length;

export const getNbrOfCompleted = (state) =>
  state.done.filter((done) => done).length;

export const getNbrOfActive = (state) =>
  state.done.filter((done) => !done).length;

export const clearCompleted = (state) => {
  let done = state.done.filter((done) => !done);
  let items = state.items.filter((_, index) => !state.done[index]);
  return { ...state, items, done };
};
