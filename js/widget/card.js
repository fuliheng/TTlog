/**
 *  @file       card.js
 *  @brief      The Card component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/24/2018 created.
 *  @date       04/02/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Card component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';

import node from './node.js';
import widget from './widget.js';

let Card = function (tag) {
  this.node = node ({
    tag: HTML.SECTION,
    className: 'card'
  });
};

Card.prototype = Object.create(widget);

Card.prototype.constructor = Card;

Card.prototype.setHeader = function (header) {
  if (this.header) {
    this.node.replaceChild(header.node, this.header.node);
  }
  else {
    this.node.insertBefore(header.node, this.node.firstChild);
  }

  this.header = header;

  return this;
};

Card.prototype.setContent = function (content) {
  if (this.content) {
    this.node.replaceChild(content.node, this.content.node);
  }
  else {
    this.node.insertBefore(content.node, this.node.lastChild);
  }

  this.content = content;

  return this;
};

Card.prototype.setFooter = function (footer) {
  if (this.footer) {
    this.node.replaceChild(footer.node, this.footer.node);
  }
  else {
    this.node.appendChild(footer.node);
  }

  this.footer = footer;

  return this;
};

export default Card;

// widget/card.js
