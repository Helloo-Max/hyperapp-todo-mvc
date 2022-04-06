import { input, span, text, button } from '@hyperapp/html';
import { editable } from './lib/view.js';
import { withFocus } from './lib/decorators.js';

// Typescript
/**
 * @typedef TodoItemProps
 * @property {boolean} editing
 * @property {string} value
 * @property {boolean} checked
 * @property {import('hyperapp').Action<any, string>} oninput
 * @property ondone
 * @property ontoggle
 * @property onedit
 * @property ondelete
 */

export default (/** @type {TodoItemProps} */ props) =>
  editable(
    {
      id: 'todo-input',
      editing: props.editing,
      value: props.value,
      oninput: props.oninput,
      ondone: props.ondone,
    },
    [
      input({
        type: 'checkbox',
        checked: props.checked,
        oninput: props.ontoggle,
      }),
      span(
        {
          onclick: withFocus(props.onedit, '#todo-input'),
          class: { done: props.checked },
        },
        text(props.value)
      ),
      button({ onclick: props.ondelete }, text('X')),
    ]
  );

// what actions can return
// (state, payload) =>
// => newState
// [newState, [effectFn, options], [effectFn2, options2], ...] ]
// actionFn
// [actionFn, payload]
