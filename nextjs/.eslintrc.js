const path = require('path')

module.exports = {
  plugins: ['@typescript-eslint', 'jsx-a11y', 'eslint-plugin-local-rules'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  settings: {
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.js'),
    },
  },
  rules: {
    'local-rules/no-chakra-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'jsx-a11y/control-has-associated-label': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['CustomComponent'],
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'tr', 'video'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 3,
      },
    ],
  },
}
