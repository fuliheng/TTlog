/**
 *  @file       container.js
 *  @brief      The Container module of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/18/2018 created.
 *  @date       03/25/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Container module of the ULog.
 */
'use strict';

const container = function (el='div') {
  this.node = document.createElement(el);
  this.node.style.height = '100vh';
};

container.prototype = {
  setHeader: function (header) {
    this.node.insertBefore(header, this.node.firstChild);

    return this;
  },

  setContent: function (content) {
    this.node.insertBefore(content, this.node.lastChild);

    return this;
  },

  setFooter: function (footer) {
    this.node.appendChild(footer);

    return this;
  },
};

export default container;

// container.js
