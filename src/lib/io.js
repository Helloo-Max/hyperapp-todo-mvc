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

export const focuser = (selector) => [_focuser, { selector }];
