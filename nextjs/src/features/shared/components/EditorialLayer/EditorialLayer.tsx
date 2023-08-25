import {
  DynamicComponentRenderer,
  DynamicComponents,
} from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { scrollToContent } from '../../utils/scroll'

interface Props {
  title?: string | null
  preface?: string | null
  components: DynamicComponents
}

export const EditorialLayer: React.FC<Props> = ({ components, preface, title }) => {
  const theme = useTheme()
  const { scrollPosition } = useScroll()

  return (
    <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
        <PageHeader
          showPointer={scrollPosition < 750}
          handleClick={scrollToContent}
          title={title || undefined}
          preface={preface || undefined}
        />
        <DynamicComponentRenderer components={components} />
      </Box>
    </Box>
  )
}
