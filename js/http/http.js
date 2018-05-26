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
'use strict';

const get_headers = (token) => {
  let headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  });

  if (token.hasOwnProperty('auth')) {
    headers.append('Authorization', token.auth);
  } // fi

  if (token.hasOwnProperty('account')) {
    headers.append('Account-ID', token.account);
  } // fi

  return headers;
}; // get_headers()

const get_url = (url, args={}) => {
  let query = [];

  for (var key in args) {
    if (args.hasOwnProperty(key)) {
      let k = encodeURIComponent(key);
      let v = encodeURIComponent(args[key]);

      query.push(`${k}=${v}`);
    } // fi
  } // od

  url += (query.length) ? '?' + query.join('&') : '';

  return url;
}; // get_url()

export default {
  token: {},

  HTTP_OK: 200,

  HTTP_203: 203,

  HTTP_204: 204,

  seal: (token, auth, account) => {
    token.auth = auth;
    token.account = account;
  },

  get: (url, args={}, token={}) => {
    return fetch(
      get_url(url, args),
      {
        method: 'GET',
        headers: get_headers(token),
      } 
    );
  },

  head: (url, token={}) => {
    return fetch(
      url,
      {
        method: 'HEAD',
        headers: get_headers(token),
      } 
    );
  },

  patch: (url, data, token={}) => {
    return fetch(
      url,
      {
        method: 'PATCH',
        headers: get_headers(token),
        body: JSON.stringify(data)
      } 
    );
  },

  post: (url, data, token={}) => {
    console.log('token: ' + token.auth);

    return fetch(
      url,
      {
        method: 'POST',
        headers: get_headers(token),
        body: JSON.stringify(data)
      } 
    );
  },

  put: (url, data, token={}) => {
    return fetch(
      url,
      {
        method: 'PUT',
        headers: get_headers(token),
        body: JSON.stringify(data)
      } 
    );
  },

  query: (url, data, token={}) => {
    console.log('query => token: ' + token.auth);

    return fetch(
      url,
      {
        method: 'POST',
        headers: get_headers(token),
        body: JSON.stringify(data)
      } 
    ).then(response => {
      let json = {};

      if (response.status == 200) {
        json = response.json();
      }

      return json;
    });
  },
};

// http.js
