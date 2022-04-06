// IO Utilities

//////////
// EFFETCS
//////////

// dispatch is the internal hyperapp function => all of the event handlers and DOM is wired to the dispatch function
const _focuser = (_dispatch, options) => {
  requestAnimationFrame((_) => {
    let elem = document.querySelector(options.selector);
    if (elem) elem.focus();
  });
};

/** @type {(...arg:any[])=>[any, any]} */
export const focuser = (selector) => [_focuser, { selector }];

const _dispatcher = (dispatch, options) => {
  dispatch(options.action, options.payload);
};

/** @type {(...arg:any[])=>[any, any]} */
export const dispatcher = (action, payload) => [
  _dispatcher,
  { action, payload },
];

const _onhashchange = (dispatch, options) => {
  const handler = () => dispatch(options.action, location.hash);
  addEventListener('hashchange', handler);
  requestAnimationFrame(handler);
  return () => removeEventListener('hashchange', handler);
};

/** @type {(...arg:any[])=>[any, any]} */
export const onhashchange = (action) => [_onhashchange, { action }];

const _persister = (dispatch, options) => {
  requestAnimationFrame((_) =>
    localStorage.setItem(options.key, JSON.stringify(options.watch))
  );
  return () => {};
};

/** @type {(...arg:any[])=>[any, any]} */
export const persister = (key, watch) => [_persister, { key, watch }];

const _lsloader = (dispatch, options) => {
  let data = localStorage.getItem(options.key);
  if (!data) return;
  data = JSON.parse(data);
  dispatch(options.action, data);
};

/** @type {(...arg:any[])=>[any, any]} */
export const lsloader = (key, action) => [_lsloader, { key, action }];
