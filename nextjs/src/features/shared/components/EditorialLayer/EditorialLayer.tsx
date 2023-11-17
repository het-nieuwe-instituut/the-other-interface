'use client'
import {
  DynamicComponentRenderer,
  DynamicComponents,
} from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, Grid, GridItem, useTheme } from '../../configs/chakra'
import { scrollToContent } from '../../utils/scroll'

interface Props {
  components: DynamicComponents
  Header: React.ReactNode
  Meta?: React.ReactNode
}

export const EditorialLayer: React.FC<Props> = ({ components, Header, Meta }) => {
  const theme = useTheme()
  const { scrollPosition } = useScroll()

  return (
    <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'ivoryAlpha.95'}>
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
        <Grid
          pt={6}
          templateColumns={Meta ? { lg: '1fr 22.438rem', base: `100% 100%` } : '1fr'}
          templateRows={{ lg: '1fr', base: `auto minmax(0, 1fr)` }}
          gap={'3.75rem'}
        >
          <GridItem>
            {Header}
            {/* <PageHeader
              showPointer={scrollPosition < 750}
              handleClick={scrollToContent}
              title={title || undefined}
              preface={preface || undefined}
            /> */}
          </GridItem>
          {Meta && <GridItem>{Meta}</GridItem>}
        </Grid>
      </Box>
      <DynamicComponentRenderer components={components} />
    </Box>
  )
}
