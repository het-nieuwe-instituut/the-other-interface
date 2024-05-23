import { Box, Text as ChakraText } from '@chakra-ui/react'

import { ComponentModulesPullquote } from 'src/generated/graphql'
import { modulesSpacingMapper } from '../../modulesSpacing'

interface Props {
  component: ComponentModulesPullquote
}

export const Pullquote: React.FC<Props> = props => {
  return (
    <Box
      width="100%"
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.Pullquote.spacingTop}
      pb={modulesSpacingMapper?.Pullquote.spacingBottom}
    >
      <ChakraText textStyle={'pullquote'}>{props.component.text}</ChakraText>
    </Box>
  )
}
