import { Text, Box } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { ReactNode } from 'react'

const CustomMarkdownRenderer = () => {
  const customThemeStyle = {
    p: ({ children }: { children: ReactNode }) => (
      <Text as="p" textStyle="recordText" margin={0}>
        {children}
      </Text>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <Text as="li" textStyle="recordText" margin={0} position="relative" pl={5}>
        {children}
      </Text>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <Box
        as="ul"
        sx={{
          listStyle: 'none',
          li: {
            '&::before': {
              content: '"•"',
              position: 'absolute',
              left: 0,
              color: '#666666',
            },
          },
        }}
      >
        {children}
      </Box>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <Box
        as="ol"
        sx={{
          listStyle: 'none',
          counterReset: 'list-counter',
          li: {
            counterIncrement: 'list-counter',
            paddingLeft: '20px !important',
            '&::before': {
              content: 'counter(list-counter) "."',
              position: 'absolute',
              left: 0,
              color: '#666666',
            },
          },
        }}
      >
        {children}
      </Box>
    ),
    // Add more mappings.
  }

  return ChakraUIRenderer(customThemeStyle)
}

export default CustomMarkdownRenderer
