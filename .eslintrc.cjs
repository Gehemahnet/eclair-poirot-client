module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    './config/eslint/script-config.cjs',
    './config/eslint/vue-config.cjs'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    "ecmaVersion": "latest",
  },
}
