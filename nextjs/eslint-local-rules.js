'use strict'

module.exports = {
  'no-chakra-imports': {
    meta: {
      docs: {
        description: 'disallow chakra components',
        category: 'Chakra',
      },
      schema: [],
    },
    create: function (context) {
      return {
        ImportDeclaration: function (node) {
          if (node.source.value === '@chakra-ui/react') {
            context.report({
              node: node,
              message: 'Import from @chakra-ui/react is deprecated',
            })
          }
        },
      }
    },
  },
}
