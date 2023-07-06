// lint-staged.config.js
module.exports = {
  '**/*.(ts|tsx)': () => 'cd .. && npm run tsc --noEmit',

  '**/*.(ts|tsx|js)': filenames => [
    `cd .. && npm run eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': filenames => `prettier --write ${filenames.join(' ')}`,
  '**/*.spec.(ts|tsx)': filenames => `jest ${filenames.join(' ')}`,
}
