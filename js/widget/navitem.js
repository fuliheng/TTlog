/**
 *  @file       navitem.js
 *  @brief      The NavItem component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/23/2018 created.
 *  @date       04/23/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details 
 *
 *  The NavItem component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';

import node from './node.js';
import widget from './widget.js';

let NavItem = function ({tag, callback}) {
  let el = node({
    tag: HTML.LI,
    className: 'nav-item',
    handler: {
      'click': callback
    }
  });

  el.appendChild(
    node({
      tag: HTML.A,
      className: 'nav-link',
      attribute: {
        'textContent': tag,
      }
    })
  );

  this.node = el;
};

NavItem.prototype = Object.create(widget);

NavItem.prototype.constructor = NavItem;

NavItem.prototype.onClick = function (handler) {
  this.node.addEventListener

};


export default NavItem;

// widget/navitem.js
