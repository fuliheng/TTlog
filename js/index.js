/**
 *  @file       index.js
 *  @brief      The entry point of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/12/2018 created.
 *  @date       04/07/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The entry point of ULog.
 */
'use strict';

import Blog from './blog/blog.js';

window.addEventListener('load', () => {
  let blog = Blog();

  document.getElementsByTagName('html')[0].style.height = '100vh';

  document.body.style.height = '100vh';
  document.body.style.margin = '0';

  document.body.appendChild(blog.node);
});

// index.js
