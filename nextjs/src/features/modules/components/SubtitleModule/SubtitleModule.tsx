import { Box, Text as ChakraText } from '@chakra-ui/react'

import { ComponentModulesSubtitle } from 'src/generated/graphql'
import { modulesSpacingMapper } from '../../modulesSpacing'

interface Props {
  component: ComponentModulesSubtitle
}

export const SubtitleModule: React.FC<Props> = props => {
  return (
    <Box
      width="100%"
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.Subtitle.spacingTop}
      pb={modulesSpacingMapper?.Subtitle.spacingBottom}
    >
      <ChakraText textStyle={'h3'} maxWidth={'55rem'}>
        {props.component.text}
      </ChakraText>
    </Box>
  )
}
