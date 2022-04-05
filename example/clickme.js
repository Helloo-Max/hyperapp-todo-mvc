// Example code for a basic click counter

// import { h, text, app } from 'https://unpkg.com/hyperapp';
import { app } from 'https://unpkg.com/hyperapp';
import {
  main,
  h1,
  h2,
  button,
  p,
  input,
  text,
} from 'https://unpkg.com/@hyperapp/html?module';

// Action
const ClickHandler = (state) => ({ ...state, clicks: state.clicks + 1 });
// Updates the state.name
const InputHandler = (state, event) => ({
  ...state,
  name: event.target.value,
});

app({
  init: { name: 'John Doe', clicks: 0 },
  view: (state) =>
    main([
      h1({ class: 'greeting' }, text('Hello, ' + state.name)),
      h2(text('Clicks: ' + state.clicks)),
      button({ onclick: ClickHandler }, text('Click me!')),
      p[
        (text('Please enter your name: '),
        input({
          type: 'text',
          value: state.name,
          oninput: InputHandler,
        }))
      ],
    ]),
  node: document.getElementById('app'),
});
