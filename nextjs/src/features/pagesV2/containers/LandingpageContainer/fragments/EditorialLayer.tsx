import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'

import { LandingpageComponentsDynamicZone, LandingpageBySlugQuery } from 'src/generated/graphql'

import { ScrollToContent } from '../../../utils/utils'

export const EditorialLayer: React.FC<{ landingpage?: LandingpageBySlugQuery }> = ({
  landingpage,
}) => {
  const theme = useTheme()

  const { scrollPosition } = useScroll()

  const page = landingpage?.landingpages.data[0]

  return (
    <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
        <PageHeader
          showPointer={scrollPosition < 750}
          handleClick={ScrollToContent}
          title={page?.attributes?.Title || undefined}
          preface={page?.attributes?.Description || undefined}
        />
        <DynamicComponentRenderer
          components={page?.attributes?.components as LandingpageComponentsDynamicZone[]}
        />
      </Box>
    </Box>
  )
}
