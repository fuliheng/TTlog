(function () {
  'use strict';

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

  var container = function container() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';

    this.node = document.createElement(el);
    this.node.style.height = '100vh';
  };

  container.prototype = {
    setHeader: function setHeader(header) {
      this.node.insertBefore(header, this.node.firstChild);

      return this;
    },

    setContent: function setContent(content) {
      this.node.insertBefore(content, this.node.lastChild);

      return this;
    },

    setFooter: function setFooter(footer) {
      this.node.appendChild(footer);

      return this;
    }
  };

  // container.js

  /**
   *  @file       html.js
   *  @brief      The HTML module of the HTML subsystem.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/25/2018 created.
   *  @date       04/23/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The HTML module of the HTML subsystem.
   */

  var TAG = {
    A: 'a',
    ARTICLE: 'article',
    ASIDE: 'aside',
    BODY: 'body',
    BUTTON: 'button',
    DATALIST: 'datalist',
    DIV: 'div',
    FIGURE: 'figure',
    FOOTER: 'footer',
    FORM: 'form',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    HEADER: 'header',
    I: 'i',
    IMG: 'img',
    INPUT: 'input',
    LABEL: 'label',
    LI: 'li',
    NAV: 'nav',
    OL: 'ol',
    OPTION: 'option',
    P: 'p',
    PRE: 'pre',
    SECTION: 'section',
    SELECT: 'select',
    SPAN: 'span',
    TABLE: 'table',
    TBODY: 'tbody',
    TD: 'td',
    TEXTAREA: 'textarea',
    TH: 'th',
    THEAD: 'thead',
    TR: 'tr',
    UL: 'ul'
  };

  // html/html.js

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   *  @file       node.js
   *  @brief      The Node module of the Widget subsystem.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/25/2018 created.
   *  @date       04/02/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Node module of the Widget subsystem.
   */

  var node = function node(_ref) {
    var tag = _ref.tag,
        className = _ref.className,
        attribute = _ref.attribute,
        handler = _ref.handler;

    var el = document.createElement(tag);

    if (className) {
      el.className = className;
    } // fi

    if (attribute) {
      Object.entries(attribute).forEach(function (_ref2) {
        var _ref3 = slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        el[key] = value;
      });
    } // fi

    if (handler) {
      Object.entries(handler).forEach(function (_ref4) {
        var _ref5 = slicedToArray(_ref4, 2),
            e = _ref5[0],
            fn = _ref5[1];

        el.addEventListener(e, fn);
      });
    }

    return el;
  };

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

  var widget = {
    /**
     * Append specifed node as this node's child.
     *
     * @name appendChild
     * @function
     * @param node The node to be appended.
     * @returns {undefined}
     */
    appendChild: function appendChild(node) {
      var el = this.node;

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
    addClass: function addClass(cls) {
      if (!this.node.className.includes(cls)) {
        this.node.className += this.node.className ? ' ' + cls : cls;
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
    addEventListener: function addEventListener(e, fn) {
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
    removeClass: function removeClass(cls) {
      this.node.className = this.node.className.replace(RegExp('[ ]*' + cls, 'g'), '');

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
    setAttribute: function setAttribute(attribute, value) {
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
    setProperty: function setProperty(property, value) {
      this.node.style[property] = value;

      return this;
    }
  };

  // widget/widget.js

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

  var Article = function Article(tag) {
    this.node = node({
      tag: TAG.ARTICLE
    });
  };

  Article.prototype = Object.create(widget);

  Article.prototype.constructor = Article;

  // widget/article.js

  /**
   *  @file       icon.js
   *  @brief      The Icon component of the Widget system.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/02/2018 created.
   *  @date       04/07/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Icon component of the Widget system.
   */

  var Icon = function Icon(tag, handler) {
    var el = node({
      tag: TAG.SPAN,
      handler: handler,
      className: 'icon'
    });

    el.appendChild(node({
      tag: TAG.I,
      className: 'fas fa-' + tag
    }));

    this.node = el;
  };

  Icon.prototype = Object.create(widget);

  Icon.prototype.constructor = Icon;

  // widget/icon.js

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

  var Button = function Button() {
    var el = node({
      tag: TAG.BUTTON,
      className: 'button'
    });

    this.node = el;
  };

  Button.prototype = Object.create(widget);

  Button.prototype.constructor = Button;

  Button.prototype.addIcon = function (tag) {
    this.node.insertBefore(new Icon(tag).node, this.node.firstElementChild);

    return this;
  };

  Button.prototype.setText = function (text) {
    var el = this.node.querySelector('.button-text') || this.node.appendChild(node({
      tag: TAG.SPAN,
      className: 'button-text'
    }));

    el.textContent = text;

    return this;
  };

  // widget/button.js

  /**
   *  @file       http.js
   *  @brief      The http module.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/16/2018 created.
   *  @date       04/16/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The http module.
   */

  // http.js

  /**
   *  @file       post.js
   *  @brief      The Post component of the system.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/07/2018 created.
   *  @date       05/07/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Post component of the system.
   */

  var TOOLBAR = function () {
    var el = node({
      tag: TAG.DIV,
      attribute: {
        'contentEditable': 'false'
      }
    });

    [{
      tag: 'edit',
      cmd: ''
    }, {
      tag: 'undo',
      cmd: 'undo'
    }, {
      tag: 'redo',
      cmd: 'redo'
    }, {
      tag: 'copy',
      cmd: 'copy'
    }, {
      tag: 'cut',
      cmd: 'cut'
    }, {
      tag: 'paste',
      cmd: 'paste'
    }, {
      tag: 'bold',
      cmd: 'bold'
    }, {
      tag: 'italic',
      cmd: 'italic'
    }, {
      tag: 'underline',
      cmd: 'underline'
    }, {
      tag: 'align-left',
      cmd: 'justifyLeft'
    }, {
      tag: 'align-center',
      cmd: 'justifyCenter'
    }, {
      tag: 'align-right',
      cmd: 'justifyRight'
    }, {
      tag: 'list-ol',
      cmd: 'insertOrderedList'
    }, {
      tag: 'list-ul',
      cmd: 'insertUnorderedList'
    }, {
      tag: 'indent',
      cmd: 'indent'
    }, {
      tag: 'outdent',
      cmd: 'outdent'
    }, {
      tag: 'link',
      cmd: '',
      value: ''
    }].forEach(function (ctrl) {
      var icon = new Icon(ctrl.tag, {
        'mousedown': function mousedown(e) {
          e.preventDefault();
        },
        'click': function click(e) {
          document.execCommand(ctrl.cmd, false, ctrl.value);
        }
      });

      icon.addClass('edit-tool');

      el.appendChild(icon.node);
    });

    el.className = 'toolbar';

    return el;
  }();

  var titleBar = function titleBar() {
    var el = node({
      tag: TAG.DIV,
      className: 'post-title flex-container'
    });

    var title = node({
      tag: TAG.SPAN,
      className: 'flex-main'
    });

    var t = node({
      tag: TAG.H3
    });

    t.textContent = '標題：未定';
    title.appendChild(t);

    el.appendChild(title);

    el.appendChild(new Button().addIcon('pencil-alt').setText(' 編 輯 ').setAttribute('id', 'btn-edit').setAttribute('contentEditable', 'false').addEventListener('click', function (e) {
      var newPost = document.querySelector('#new-post');

      if (newPost.contentEditable == 'false') {
        newPost.contentEditable = 'true';
      } else {
        newPost.contentEditable = 'false';
      }
    }).node);

    return el;
  };

  var Post = function Post(tag) {
    var article = new Article();

    article.addClass('edit-area').setProperty('writing-mode', 'vertical-rl');

    this.node = node({
      tag: TAG.FORM,
      attribute: {
        'id': 'new-post',
        'contentEditable': 'false'
      },
      handler: {
        "submit": function submit(e) {
          e.preventDefault();

          var formData = new FormData();

          formData.append('content', article.node.innerHTML);

          fetch('post', {
            method: 'POST',
            body: formData
          }).then(function (response) {
            return response.json();
          }).then(function (json) {
            console.log(JSON.stringify(json, null, 2));
          });
        }
      }
    });

    this.node.appendChild(titleBar());

    this.node.appendChild(TOOLBAR);

    this.node.appendChild(article.node);

    this.node.appendChild(node({
      tag: TAG.INPUT,
      attribute: {
        'type': 'submit',
        'value': '貼  文'
      }
    }));
  };

  Post.prototype = Object.create(widget);

  Post.prototype.constructor = Post;

  // post/post.js

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

  var Card = function Card(tag) {
    this.node = node({
      tag: TAG.SECTION,
      className: 'card'
    });
  };

  Card.prototype = Object.create(widget);

  Card.prototype.constructor = Card;

  Card.prototype.setHeader = function (header) {
    if (this.header) {
      this.node.replaceChild(header.node, this.header.node);
    } else {
      this.node.insertBefore(header.node, this.node.firstChild);
    }

    this.header = header;

    return this;
  };

  Card.prototype.setContent = function (content) {
    if (this.content) {
      this.node.replaceChild(content.node, this.content.node);
    } else {
      this.node.insertBefore(content.node, this.node.lastChild);
    }

    this.content = content;

    return this;
  };

  Card.prototype.setFooter = function (footer) {
    if (this.footer) {
      this.node.replaceChild(footer.node, this.footer.node);
    } else {
      this.node.appendChild(footer.node);
    }

    this.footer = footer;

    return this;
  };

  // widget/card.js

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

  var NavBar = function NavBar(tag) {
    var el = node({
      tag: TAG.UL,
      className: 'nav-bar'
    });

    this.node = el;
  };

  NavBar.prototype = Object.create(widget);

  NavBar.prototype.constructor = NavBar;

  // widget/navbar.js

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

  var NavItem = function NavItem(_ref) {
    var tag = _ref.tag,
        callback = _ref.callback;

    var el = node({
      tag: TAG.LI,
      className: 'nav-item',
      handler: {
        'click': callback
      }
    });

    el.appendChild(node({
      tag: TAG.A,
      className: 'nav-link',
      attribute: {
        'textContent': tag
      }
    }));

    this.node = el;
  };

  NavItem.prototype = Object.create(widget);

  NavItem.prototype.constructor = NavItem;

  NavItem.prototype.onClick = function (handler) {
    this.node.addEventListener;
  };

  // widget/navitem.js

  /**
   *  @file       blogger.js
   *  @brief      The Blogger module of Nav subsystem.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/23/2018 created.
   *  @date       04/23/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Blogger module of Nav subsystem.
   */

  var navBlogger = (function () {
    var el = new NavBar();

    [{
      tag: '貼 文',
      callback: function callback(e) {
        // new post
      }
    }, {
      tag: '編  輯',
      callback: function callback(e) {
        // new post
      }
    }, {
      tag: '儲  存',
      callback: function callback(e) {
        // new post
      }
    }].forEach(function (o) {
      var item = new NavItem(o);

      el.appendChild(item.node);
    });

    return el;
  });

  // nav/blogger.js

  /**
   *  @file       blog.js
   *  @brief      The Blog module of ULog.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/18/2018 created.
   *  @date       04/23/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Blog module of the ULog.
   */

  var navbar = function navbar() {
    var bar = navBlogger();

    var el = node({
      tag: TAG.SECTION
    });

    el.appendChild(bar.node);

    return el;
  };

  var banner = function banner() {
    var el = document.createElement('header');

    var title = document.createElement('h1');
    title.textContent = 'U Log';

    el.appendChild(title);
    el.style.background = '#00a0ffff';
    el.style.height = '5rem';

    el.appendChild(navbar());

    return el;
  };

  var content = function content() {
    var card = new Card('blog');
    var post = new Post();
    var el = document.createElement('main');

    card.appendChild(post.node);

    el.appendChild(card.node);

    return el;
  };

  var footer = function footer() {
    var el = document.createElement('footer');

    var copyright = document.createElement('p');
    copyright.textContent = '© 2018, Yiwei Chiao';
    copyright.style.margin = '0';

    el.appendChild(copyright);

    el.style.background = '#ff0000ff';
    el.style.height = '2rem';

    return el;
  };

  function Blog () {
    var blog = new container('div');

    return blog.setHeader(banner()).setFooter(footer()).setContent(content());
  }
  // blog.js

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

  window.addEventListener('load', function () {
    var blog = Blog();

    document.getElementsByTagName('html')[0].style.height = '100vh';

    document.body.style.height = '100vh';
    document.body.style.margin = '0';

    document.body.appendChild(blog.node);
  });

  // index.js

}());
//# sourceMappingURL=ulog.js.map
