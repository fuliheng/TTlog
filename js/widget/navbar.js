/**
 *  @file       navbar.js
 *  @brief      The NavBar component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/23/2018 created.
 *  @date       04/23/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details 
 *
 *  The NavBar component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';

import node from './node.js';
import widget from './widget.js';

let NavBar = function (tag) {
  let el = node({
    tag: HTML.UL,
    className: 'nav-bar'
  });

  this.node = el;
};

NavBar.prototype = Object.create(widget);

NavBar.prototype.constructor = NavBar;

export default NavBar;

// widget/navbar.js
