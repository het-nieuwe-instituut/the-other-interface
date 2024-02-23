import { Text, Box } from '@chakra-ui/react'

import { ComponentModulesTitleModule } from 'src/generated/graphql'
import { modulesSpacingMapper } from '../../modulesSpacing'

interface Props {
  component: ComponentModulesTitleModule
}

export const Title: React.FC<Props> = props => {
  return (
    <Box
      width="100%"
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.TitleModule.spacingTop}
      pb={modulesSpacingMapper?.TitleModule.spacingBottom}
    >
      <Text textStyle="h1" as={'h1'}>
        {props.component.Title}
      </Text>
    </Box>
  )
}
