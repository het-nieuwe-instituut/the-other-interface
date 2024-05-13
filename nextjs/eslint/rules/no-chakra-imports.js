module.exports = {
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
}
