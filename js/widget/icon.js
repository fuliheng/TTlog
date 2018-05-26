/**
 *  @file       icon.js
 *  @brief      The Icon component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/02/2018 created.
 *  @date       04/07/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Icon component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';

import node from './node.js';
import widget from './widget.js';

let Icon = function (tag, handler) {
  let el = node({
    tag: HTML.SPAN,
    handler: handler,
    className: 'icon'
  });
  
  el.appendChild(
    node({
      tag: HTML.I,
      className: `fas fa-${tag}`
    })
  );

  this.node = el;
}

Icon.prototype = Object.create(widget);

Icon.prototype.constructor = Icon;

export default Icon;

// widget/icon.js
