import { Text, Box } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { ReactNode } from 'react'

const CustomMarkdownRenderer = () => {
  const customThemeStyle = {
    p: ({ children }: { children: ReactNode }) => (
      <Text as="p" textStyle="recordText" margin={0} position="relative" color={'blackAlpha.100'}>
        {children}
      </Text>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <Text as="li" textStyle="recordText" margin={0} position="relative" color={'blackAlpha.100'}>
        {children}
      </Text>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <Box
        as="ul"
        sx={{
          listStyle: 'none',
          li: {
            paddingLeft: { base: '34px !important', xl: '22px !important' },
            '&::before': {
              content: '""',
              top: '50%',
              transform: 'translateY(-50%)',
              position: 'absolute',
              color: 'blackAlpha.100',
              width: { base: '16px', xl: '12px' },
              height: { base: '16px', xl: '12px' },
              backgroundImage: 'url(/images/ellipse-icon.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              left: 0,
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
            paddingLeft: { base: '34px !important', xl: '22px !important' },
            '&::before': {
              content: 'counter(list-counter) ""',
              position: 'absolute',
              color: 'blackAlpha.100',
              fontSize: { sm: '32px', md: '32px', lg: '32px', xl: '21px', '2xl': '21px' },
              fontFamily: "'Social'",
              fontStyle: 'normal',
              lineHeight: '130%',
              letterSpacing: {
                sm: '0.32px',
                md: '0.32px',
                lg: '0.32px',
                xl: '0.21px',
                '2xl': '0.21px',
              },
              left: 0,
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
