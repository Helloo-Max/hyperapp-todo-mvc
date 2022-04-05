var SSR_NODE = 1;
var TEXT_NODE = 3;
var EMPTY_OBJ$1 = {};
var EMPTY_ARR$1 = [];
var SVG_NS = "http://www.w3.org/2000/svg";

var id = (a) => a;
var map = EMPTY_ARR$1.map;
var isArray = Array.isArray;
var enqueue =
  typeof requestAnimationFrame !== "undefined"
    ? requestAnimationFrame
    : setTimeout;

var createClass = (obj) => {
  var out = "";

  if (typeof obj === "string") return obj

  if (isArray(obj)) {
    for (var k = 0, tmp; k < obj.length; k++) {
      if ((tmp = createClass(obj[k]))) {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (var k in obj) {
      if (obj[k]) out += (out && " ") + k;
    }
  }

  return out
};

var shouldRestart = (a, b) => {
  for (var k in { ...a, ...b }) {
    if (typeof (isArray(a[k]) ? a[k][0] : a[k]) === "function") {
      b[k] = a[k];
    } else if (a[k] !== b[k]) return true
  }
};

var patchSubs = (oldSubs, newSubs = EMPTY_ARR$1, dispatch) => {
  for (
    var subs = [], i = 0, oldSub, newSub;
    i < oldSubs.length || i < newSubs.length;
    i++
  ) {
    oldSub = oldSubs[i];
    newSub = newSubs[i];

    subs.push(
      newSub && newSub !== true
        ? !oldSub ||
          newSub[0] !== oldSub[0] ||
          shouldRestart(newSub[1], oldSub[1])
          ? [
              newSub[0],
              newSub[1],
              (oldSub && oldSub[2](), newSub[0](dispatch, newSub[1])),
            ]
          : oldSub
        : oldSub && oldSub[2]()
    );
  }
  return subs
};

var getKey = (vdom) => (vdom == null ? vdom : vdom.key);

var patchProperty = (node, key, oldValue, newValue, listener, isSvg) => {
  if (key === "style") {
    for (var k in { ...oldValue, ...newValue }) {
      oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];
      if (k[0] === "-") {
        node[key].setProperty(k, oldValue);
      } else {
        node[key][k] = oldValue;
      }
    }
  } else if (key[0] === "o" && key[1] === "n") {
    if (
      !((node.events || (node.events = {}))[(key = key.slice(2))] = newValue)
    ) {
      node.removeEventListener(key, listener);
    } else if (!oldValue) {
      node.addEventListener(key, listener);
    }
  } else if (!isSvg && key !== "list" && key !== "form" && key in node) {
    node[key] = newValue == null ? "" : newValue;
  } else if (newValue == null || newValue === false) {
    node.removeAttribute(key);
  } else {
    node.setAttribute(key, newValue);
  }
};

var createNode = (vdom, listener, isSvg) => {
  var props = vdom.props;
  var node =
    vdom.type === TEXT_NODE
      ? document.createTextNode(vdom.tag)
      : (isSvg = isSvg || vdom.tag === "svg")
      ? document.createElementNS(SVG_NS, vdom.tag, props.is && props)
      : document.createElement(vdom.tag, props.is && props);

  for (var k in props) {
    patchProperty(node, k, null, props[k], listener, isSvg);
  }

  for (var i = 0; i < vdom.children.length; i++) {
    node.appendChild(
      createNode(
        (vdom.children[i] = maybeVNode(vdom.children[i])),
        listener,
        isSvg
      )
    );
  }

  return (vdom.node = node)
};

var patch = (parent, node, oldVNode, newVNode, listener, isSvg) => {
  if (oldVNode === newVNode) ; else if (
    oldVNode != null &&
    oldVNode.type === TEXT_NODE &&
    newVNode.type === TEXT_NODE
  ) {
    if (oldVNode.tag !== newVNode.tag) node.nodeValue = newVNode.tag;
  } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
    node = parent.insertBefore(
      createNode((newVNode = maybeVNode(newVNode)), listener, isSvg),
      node
    );
    if (oldVNode != null) {
      parent.removeChild(oldVNode.node);
    }
  } else {
    var tmpVKid;
    var oldVKid;

    var oldKey;
    var newKey;

    var oldProps = oldVNode.props;
    var newProps = newVNode.props;

    var oldVKids = oldVNode.children;
    var newVKids = newVNode.children;

    var oldHead = 0;
    var newHead = 0;
    var oldTail = oldVKids.length - 1;
    var newTail = newVKids.length - 1;

    isSvg = isSvg || newVNode.tag === "svg";

    for (var i in { ...oldProps, ...newProps }) {
      if (
        (i === "value" || i === "selected" || i === "checked"
          ? node[i]
          : oldProps[i]) !== newProps[i]
      ) {
        patchProperty(node, i, oldProps[i], newProps[i], listener, isSvg);
      }
    }

    while (newHead <= newTail && oldHead <= oldTail) {
      if (
        (oldKey = getKey(oldVKids[oldHead])) == null ||
        oldKey !== getKey(newVKids[newHead])
      ) {
        break
      }

      patch(
        node,
        oldVKids[oldHead].node,
        oldVKids[oldHead],
        (newVKids[newHead] = maybeVNode(
          newVKids[newHead++],
          oldVKids[oldHead++]
        )),
        listener,
        isSvg
      );
    }

    while (newHead <= newTail && oldHead <= oldTail) {
      if (
        (oldKey = getKey(oldVKids[oldTail])) == null ||
        oldKey !== getKey(newVKids[newTail])
      ) {
        break
      }

      patch(
        node,
        oldVKids[oldTail].node,
        oldVKids[oldTail],
        (newVKids[newTail] = maybeVNode(
          newVKids[newTail--],
          oldVKids[oldTail--]
        )),
        listener,
        isSvg
      );
    }

    if (oldHead > oldTail) {
      while (newHead <= newTail) {
        node.insertBefore(
          createNode(
            (newVKids[newHead] = maybeVNode(newVKids[newHead++])),
            listener,
            isSvg
          ),
          (oldVKid = oldVKids[oldHead]) && oldVKid.node
        );
      }
    } else if (newHead > newTail) {
      while (oldHead <= oldTail) {
        node.removeChild(oldVKids[oldHead++].node);
      }
    } else {
      for (var keyed = {}, newKeyed = {}, i = oldHead; i <= oldTail; i++) {
        if ((oldKey = oldVKids[i].key) != null) {
          keyed[oldKey] = oldVKids[i];
        }
      }

      while (newHead <= newTail) {
        oldKey = getKey((oldVKid = oldVKids[oldHead]));
        newKey = getKey(
          (newVKids[newHead] = maybeVNode(newVKids[newHead], oldVKid))
        );

        if (
          newKeyed[oldKey] ||
          (newKey != null && newKey === getKey(oldVKids[oldHead + 1]))
        ) {
          if (oldKey == null) {
            node.removeChild(oldVKid.node);
          }
          oldHead++;
          continue
        }

        if (newKey == null || oldVNode.type === SSR_NODE) {
          if (oldKey == null) {
            patch(
              node,
              oldVKid && oldVKid.node,
              oldVKid,
              newVKids[newHead],
              listener,
              isSvg
            );
            newHead++;
          }
          oldHead++;
        } else {
          if (oldKey === newKey) {
            patch(
              node,
              oldVKid.node,
              oldVKid,
              newVKids[newHead],
              listener,
              isSvg
            );
            newKeyed[newKey] = true;
            oldHead++;
          } else {
            if ((tmpVKid = keyed[newKey]) != null) {
              patch(
                node,
                node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node),
                tmpVKid,
                newVKids[newHead],
                listener,
                isSvg
              );
              newKeyed[newKey] = true;
            } else {
              patch(
                node,
                oldVKid && oldVKid.node,
                null,
                newVKids[newHead],
                listener,
                isSvg
              );
            }
          }
          newHead++;
        }
      }

      while (oldHead <= oldTail) {
        if (getKey((oldVKid = oldVKids[oldHead++])) == null) {
          node.removeChild(oldVKid.node);
        }
      }

      for (var i in keyed) {
        if (newKeyed[i] == null) {
          node.removeChild(keyed[i].node);
        }
      }
    }
  }

  return (newVNode.node = node)
};

var propsChanged = (a, b) => {
  for (var k in a) if (a[k] !== b[k]) return true
  for (var k in b) if (a[k] !== b[k]) return true
};

var maybeVNode = (newVNode, oldVNode) =>
  newVNode !== true && newVNode !== false && newVNode
    ? typeof newVNode.tag === "function"
      ? ((!oldVNode ||
          oldVNode.memo == null ||
          propsChanged(oldVNode.memo, newVNode.memo)) &&
          ((oldVNode = newVNode.tag(newVNode.memo)).memo = newVNode.memo),
        oldVNode)
      : newVNode
    : text("");

var recycleNode = (node) =>
  node.nodeType === TEXT_NODE
    ? text(node.nodeValue, node)
    : createVNode(
        node.nodeName.toLowerCase(),
        EMPTY_OBJ$1,
        map.call(node.childNodes, recycleNode),
        SSR_NODE,
        node
      );

var createVNode = (tag, { key, ...props }, children, type, node) => ({
  tag,
  props,
  key,
  children,
  type,
  node,
});

var text = (value, node) =>
  createVNode(value, EMPTY_OBJ$1, EMPTY_ARR$1, TEXT_NODE, node);

var h = (tag, { class: c, ...props }, children = EMPTY_ARR$1) =>
  createVNode(
    tag,
    { ...props, ...(c ? { class: createClass(c) } : EMPTY_OBJ$1) },
    isArray(children) ? children : [children]
  );

var app = ({
  node,
  view,
  subscriptions,
  dispatch = id,
  init = EMPTY_OBJ$1,
}) => {
  var vdom = node && recycleNode(node);
  var subs = [];
  var state;
  var busy;

  var update = (newState) => {
    if (state !== newState) {
      if ((state = newState) == null) dispatch = subscriptions = render = id;
      if (subscriptions) subs = patchSubs(subs, subscriptions(state), dispatch);
      if (view && !busy) enqueue(render, (busy = true));
    }
  };

  var render = () =>
    (node = patch(
      node.parentNode,
      node,
      vdom,
      (vdom = view(state)),
      listener,
      (busy = false)
    ));

  var listener = function (event) {
    dispatch(this.events[event.type], event);
  };

  return (
    (dispatch = dispatch((action, props) =>
      typeof action === "function"
        ? dispatch(action(state, props))
        : isArray(action)
        ? typeof action[0] === "function"
          ? dispatch(action[0], action[1])
          : action
              .slice(1)
              .map(
                (fx) => fx && fx !== true && (fx[0] || fx)(dispatch, fx[1]),
                update(action[0])
              )
        : update(action)
    ))(init),
    dispatch
  )
};

const EMPTY_ARR = [];
const EMPTY_OBJ = {};

const tag = (tag) => (
  props = EMPTY_OBJ,
  children = props.tag != null || Array.isArray(props) ? props : EMPTY_ARR
) => h(tag, props === children ? EMPTY_OBJ : props, children);
const h1 = tag("h1");
const li = tag("li");
const ul = tag("ul");
const main = tag("main");
const span = tag("span");
const input = tag("input");
const button = tag("button");
const header = tag("header");
const section = tag("section");

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

const focuser = (selector) => [_focuser, { selector }];

// import { app } from 'https://unpkg.com/hyperapp';

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
