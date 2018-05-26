/**
 *  @file       post_collection.js
 *  @brief      The PostCollection module of the Blog subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       05/01/2018 created.
 *  @date       05/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The PostCollection module of the Blog subsystem.
 */
'use strict';

import HTML from '../html/html.js';

import Post from '../widget/post.js';
import node from './node.js';
import widget from './widget.js';

export default {
  post: [],

  current: null,

  fetchPost: function () {
  },

  newPost: function () {
    this.current = new Post();

    this.post.push(this.current);

    return this.current;
  }
}

// blog/post_collection.js
