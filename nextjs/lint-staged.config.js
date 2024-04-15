// lint-staged.config.js
module.exports = {
  '**/*.(ts|tsx)': () => 'cd .. && npm run tsc --noEmit',

  '**/*.(ts|tsx|js)': filenames => [
    `cd .. && npm run eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  '**/*.(md|json)': filenames => {
    const filesToFormat = filenames.filter(filename => !filename.includes('graphql.schema.json'))
    return `prettier --write ${filesToFormat.join(' ')}`
  },
  '**/*.spec.(ts|tsx)': filenames => `jest ${filenames.join(' ')}`,
}
