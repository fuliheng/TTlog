/**
 *  @file       node.js
 *  @brief      The Node module of the Widget subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/25/2018 created.
 *  @date       04/02/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Node module of the Widget subsystem.
 */
'use strict';

let node = function ({tag, className, attribute, handler}) {
  let el = document.createElement(tag);

  if (className) {
    el.className = className;
  } // fi

  if (attribute) {
    Object.entries(attribute).forEach(([key, value]) => {
      el[key] = value;
    });
  } // fi

  if (handler) {
    Object.entries(handler).forEach(([e, fn]) => {
      el.addEventListener(e, fn);
    });
  }

  return el;
};

export default node;

// widget/node.js
