import { Box, Text as ChakraText } from '@chakra-ui/react'

import { ComponentModulesPullquote } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesPullquote
}

export const Pullquote: React.FC<Props> = props => {
  return (
    <Box
      width="100%"
      px={6}
      backgroundColor={'inherit'}
      paddingBottom={props.component.pullquoteModuleLayout?.spacingBottom ?? undefined}
      paddingTop={props.component.pullquoteModuleLayout?.spacingTop ?? undefined}
    >
      <ChakraText textStyle={'pullquote'}>{props.component.text}</ChakraText>
    </Box>
  )
}
