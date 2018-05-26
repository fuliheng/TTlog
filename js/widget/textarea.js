/**
 *  @file       textarea.js
 *  @brief      The TextArea component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/26/2018 created.
 *  @date       04/02/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The TextArea component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';

import node from './node.js';
import widget from './widget.js';

let TextArea = function (tag) {
  this.node = node({
    tag: HTML.TEXTAREA,
    attribute: {
      rows: 25,
    }
  });
};

TextArea.prototype = Object.create(widget);

TextArea.prototype.constructor = TextArea;

export default TextArea;

// widget/textarea.js
