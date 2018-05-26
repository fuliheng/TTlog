/**
 *  @file       button.js
 *  @brief      The Button module of the Widget subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       05/04/2018 created.
 *  @date       05/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Button module of the Widget subsystem.
 */
'use strict';

import HTML from '../html/html.js';

import Icon from './icon.js';

import node from './node.js';
import widget from './widget.js';

const Button = function () {
  let el = node({
    tag: HTML.BUTTON,
    className: 'button'
  });
  
  this.node = el;
}

Button.prototype = Object.create(widget);

Button.prototype.constructor = Button;

Button.prototype.addIcon = function (tag) {
  this.node.insertBefore(
    new Icon(tag).node,
    this.node.firstElementChild
  );

  return this;
}

Button.prototype.setText = function (text) {
  let el = this.node.querySelector('.button-text') ||
    this.node.appendChild(
      node({
        tag: HTML.SPAN,
        className: 'button-text'
      })
    );

  el.textContent = text;

  return this;
}

export default Button;

// widget/button.js
