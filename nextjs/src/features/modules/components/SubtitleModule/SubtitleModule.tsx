import { Box, Text as ChakraText } from '@chakra-ui/react'

import { ComponentModulesSubtitle } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesSubtitle
}

export const SubtitleModule: React.FC<Props> = props => {
  return (
    <Box
      width="100%"
      backgroundColor={'inherit'}
      paddingBottom={props.component.subtitleModuleLayout?.spacingBottom ?? undefined}
      paddingTop={props.component.subtitleModuleLayout?.spacingTop ?? undefined}
    >
      <ChakraText textStyle={'h3'} maxWidth={'55rem'}>
        {props.component.text}
      </ChakraText>
    </Box>
  )
}
