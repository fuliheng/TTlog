/**
 *  @file       widget.js
 *  @brief      The Widget component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/24/2018 created.
 *  @date       05/07/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Widget component of the Widget system.
 */
'use strict';

let widget = {
  /**
   * Append specifed node as this node's child.
   *
   * @name appendChild
   * @function
   * @param node The node to be appended.
   * @returns {undefined}
   */
  appendChild: function (node) {
    let el = this.node;

    el.appendChild(node);

    return this;
  },

  /**
   * Add the specified CSS class to this node.
   *
   * @name removeClass
   * @function
   * @param cls The class name to be added..
   * @returns {this}
   */
  addClass: function (cls) {
    if (!this.node.className.includes(cls)) {
      this.node.className += this.node.className ? ` ${cls}` : cls;
    } // fi

    return this;
  },

  /**
   * Register event-listener fn for specified event e.
   *
   * @name addEventListener
   * @function
   * @param e The interested event.
   * @param fn The listener for the event e.
   * @returns {this}
   */
  addEventListener: function (e, fn) {
    this.node.addEventListener(e, fn);

    return this;
  },

  /**
   * Remove the specified CSS class from this node.
   *
   * @name removeClass
   * @function
   * @param cls The class name to be removed.
   * @returns {this}
   */
  removeClass: function (cls) {
    this.node.className = this.node.className.replace(
      RegExp(`[ ]*${cls}`, 'g'), ''
    );

    return this;
  },

  /**
   * Setting the HTML attribute of the node.
   *
   * @name setAttribute
   * @function
   * @param attribute The HTML attribute to be set.
   * @param value     The attribute value.
   * @returns {this}
   */
  setAttribute: function (attribute, value) {
    this.node[attribute] = value;

    return this;
  },

  /**
   * Setting the CSS property of this node.
   *
   * @name setProperty
   * @function
   * @param property The CSS property to be set.
   * @param value    The property value.
   * @returns {this}
   */
  setProperty: function (property, value) {
    this.node.style[property] = value;

    return this;
  },
};

export default widget;

// widget/widget.js
