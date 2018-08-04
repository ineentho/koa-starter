const pluginJest = require('eslint-plugin-jest')

module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.test.mjs'],
      ...pluginJest.configs.recommended,
      env: {
        jest: true,
      },
    },
  ],
}
