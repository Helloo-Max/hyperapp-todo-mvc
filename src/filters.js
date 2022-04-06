import { ul, li, a, text } from '@hyperapp/html';
import { onhashchange } from './lib/io.js';

export const init = () => null;

export const wire = ({ get, set }) => {
  const HashHandler = (state, hash) =>
    set(
      state,
      hash === '#completed'
        ? 'completed'
        : hash === '#active'
        ? 'active'
        : 'all'
    );
  return {
    model: (state) => ({
      filter: get(state),
      HashHandler,
    }),
    getFilter: get,
  };
};

export const menu = (model) =>
  ul({ class: 'filters' }, [
    li(
      a({ href: '#', class: { current: model.filter === 'all' } }, text('All'))
    ),
    li(
      a(
        {
          href: '#completed',
          class: { current: model.filter === 'completed' },
        },
        text('Completed')
      )
    ),
    li(
      a(
        {
          href: '#active',
          class: { current: model.filter === 'active' },
        },
        text('Active')
      )
    ),
  ]);

export const subs = (model) => [onhashchange(model.HashHandler)];
