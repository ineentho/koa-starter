/*
 * Babel is only used for jest tests while jest doesn't support native .esm modules.
 * The application itself runs directly on node esm modules
 */

module.exports = {
  env: {
    test: {
      plugins: [['@babel/plugin-transform-modules-commonjs', { spec: true }]],
    },
  },
}
