/**
 *  @file       article.js
 *  @brief      The Article component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/07/2018 created.
 *  @date       05/05/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Article component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';

import node from './node.js';
import widget from './widget.js';

let Article = function (tag) {
  this.node = node({
    tag: HTML.ARTICLE
  });
};

Article.prototype = Object.create(widget);

Article.prototype.constructor = Article;

export default Article;

// widget/article.js
