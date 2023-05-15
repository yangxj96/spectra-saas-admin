require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    ecmaFeatures: {
        // lambda表达式
        arrowFunctions: true,
        // 解构赋值
        destructuring: true,
        // class
        classes: true,
        // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
        defaultParams: true,
        // 块级作用域，允许使用let const
        blockBindings: true
    }
}