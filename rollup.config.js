/**
 *  @file       rollup.config.js
 *  @brief      The Configuration file for the rollup.js
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/12/2018 created.
 *  @date       04/15/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Configuration file for the rollup.js
 */

import babel from 'rollup-plugin-babel';

export default {
  input: 'js/index.js',
  output: {
    file: 'out/ulog.js',
    format: 'iife',
    sourcemap: 'true',
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          "env",
          {
            targets: {
              browsers: [
                "last 2 versions"
              ]
            },
            modules: false
          }
        ]
      ],
      plugins: [
        "external-helpers"
      ]
    }),
  ],
};

// rollup.config.js
