// https://eslint.org/docs/latest/use/configure/
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'vue', 'react-hooks', 'jsx-a11y', 'prettier'], // 'react-refresh',
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // 兼容 jsx 新的语法
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 'react-refresh/only-export-components': 'warn',

    'prettier/prettier': 'off',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ], // 允许使用短路、三目
    'func-names': ['error', 'as-needed'], // 需要时添加函数名称
    'no-param-reassign': ['error', { props: false }], // 函数形参可修改
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'no-debugger': 'off',

    // eslint-plugin-import
    'import/order': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    // eslint-plugin-jsx-a11y
    'jsx-a11y/no-static-element-interactions': 'warn',
    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    // eslint-plugin-react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // eslint-plugin-vue
    'vue/script-setup-uses-vars': 'error',
    'vue/attributes-order': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
    // typescript-eslint
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
  },
};
