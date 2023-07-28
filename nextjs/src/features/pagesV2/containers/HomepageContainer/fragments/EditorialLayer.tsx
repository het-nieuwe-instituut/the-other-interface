import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { HomepageComponentsDynamicZone, HomepageQuery } from 'src/generated/graphql'

import { ScrollToContent } from '../../../utils/utils'

export const EditorialLayer: React.FC<{ data?: HomepageQuery }> = ({ data }) => {
  const { scrollPosition } = useScroll()
  const theme = useTheme()

  return (
    <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
        <PageHeader
          showPointer={scrollPosition < 750}
          handleClick={ScrollToContent}
          title={data?.homepage?.data?.attributes?.Title || undefined}
          preface={data?.homepage?.data?.attributes?.description || undefined}
        />
        <DynamicComponentRenderer
          components={
            data?.homepage?.data?.attributes?.components as HomepageComponentsDynamicZone[]
          }
        />
      </Box>
    </Box>
  )
}
