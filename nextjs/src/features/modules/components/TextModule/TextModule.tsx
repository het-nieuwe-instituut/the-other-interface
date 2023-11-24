import { Markdown } from '@/features/shared/components/Markdown/Markdown'
import { Box } from '@chakra-ui/react'

import { ComponentModulesTextModule } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesTextModule
}

export const TextModule: React.FC<Props> = props => {
  const content = props.component?.Richtext

  if (!content) {
    return null
  }

  return (
    <Box
      backgroundColor={'inherit'}
      pb={props.component.textModuleLayout?.spacingBottom ?? undefined}
      pt={props.component.textModuleLayout?.spacingTop ?? undefined}
      maxW={'64em'}
      overflow={'auto'} // needed due to strange behaviour of generated markdown content
    >
      <Markdown>{content}</Markdown>
    </Box>
  )
}
