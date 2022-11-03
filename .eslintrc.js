module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    jquery: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
<<<<<<< HEAD
  rules: {},
=======
  rules: {
    'no-console': 'off',
  },
>>>>>>> 0b99a1df6726a552c775289950725fcc6512a58e
}
