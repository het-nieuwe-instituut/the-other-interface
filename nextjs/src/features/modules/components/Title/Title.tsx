import { Text, Box } from '@chakra-ui/react'

import { ComponentModulesTitleModule } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesTitleModule
}

export const Title: React.FC<Props> = props => {
  return (
    <Box
      width="100%"
      backgroundColor={'inherit'}
      pt={props.component.titleModuleLayout?.spacingTop ?? undefined}
      pb={props.component.titleModuleLayout?.spacingBottom ?? undefined}
    >
      <Text textStyle="h1" as={'h1'}>
        {props.component.Title}
      </Text>
    </Box>
  )
}
