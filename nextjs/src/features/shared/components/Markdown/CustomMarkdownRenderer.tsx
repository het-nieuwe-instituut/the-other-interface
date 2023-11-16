import { Text } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { ReactNode } from 'react'

const CustomMarkdownRenderer = () => {
  const customThemeStyle = {
    p: ({ children }: { children: ReactNode }) => (
      <Text as="p" textStyle="recordText" margin={0}>
        {children}
      </Text>
    ),
    // Add more mappings.
  }

  return ChakraUIRenderer(customThemeStyle)
}

export default CustomMarkdownRenderer
