import { ul, li, input } from '@hyperapp/html';
import { withTargetValue, withEnterKey } from './decorators';

export const textInput = (props) =>
  input({
    ...props,
    type: 'text',
    value: props.value,
    oninput: withTargetValue(props.oninput),
    onkeypress: withEnterKey(props.ondone),
  });

export const editable = ({ editing, ...inputProps }, content) =>
  editing ? textInput({ ...inputProps, onblur: inputProps.ondone }) : content;

export const list = ({ items, render }) =>
  ul(items.map((value, index) => li(render(value, index))));
