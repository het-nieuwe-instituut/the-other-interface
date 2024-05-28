import { Markdown } from '@/features/shared/components/Markdown/Markdown'
import { Box } from '@chakra-ui/react'

import { ComponentModulesTextModule } from 'src/generated/graphql'
import { modulesSpacingMapper } from '../../modulesSpacing'

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
      pt={modulesSpacingMapper?.TextModule.spacingTop}
      pb={modulesSpacingMapper?.TextModule.spacingBottom}
      maxW={'64em'}
      overflow={'auto'} // needed due to strange behaviour of generated markdown content
    >
      <Markdown>{content}</Markdown>
    </Box>
  )
}
