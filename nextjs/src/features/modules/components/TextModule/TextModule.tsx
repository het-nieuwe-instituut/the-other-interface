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
      px={6}
      backgroundColor={'white'}
      pb={props.component.textModuleLayout?.spacingBottom ?? undefined}
      pt={props.component.textModuleLayout?.spacingTop ?? undefined}
      overflow={'auto'} // needed due to strange behaviour of generated markdown content
    >
      <Box maxWidth={'55rem'}>
        <Markdown>{content}</Markdown>
      </Box>
    </Box>
  )
}
