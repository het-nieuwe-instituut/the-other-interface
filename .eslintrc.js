const rules = {
    semi: [2, 'never'],
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/member-ordering': [2],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    'no-return-await': 'error',
    'no-else-return': 'error',
    'no-console': 'error',
    'react/jsx-boolean-value': [2, 'always'],
    'react/self-closing-comp': [
        2,
        {
            component: true,
        },
    ],
    'eslint-comments/no-unused-disable': 'error',
    'lodash/import-scope': ['error', 'method'],
    'lodash/prefer-lodash-method': 0,
    'lodash/prefer-noop': 0,
    'lodash/prefer-get': 0,
    'prettier/prettier': [
        'error',
        {
            endOfLine: 'auto',
        },
    ],
    'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['class', 'function', 'while', 'return', 'for'] },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
}

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['node_modules'],
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:lodash/recommended',
        'plugin:prettier/recommended',
    ],
    rules: rules,
}
