/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    // 禁用未使用值的错误提示
    'no-unused-vars': 'off'
  }
}
