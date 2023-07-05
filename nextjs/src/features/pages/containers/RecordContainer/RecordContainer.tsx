import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'

import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'

import { RecordMeta } from '../../Meta/RecordMeta'
import { SupportedQuerys, Zoom5RecordResult } from '../../tasks/zoom5Config'
import { ScrollToContent } from '../../utils/utils'
import { RecordProvider } from './RecordContext'

interface Props {
  zoom5: Zoom5RecordResult | undefined
  type: SupportedQuerys
  landingpage: LandingpageBySlugQuery | undefined
  record: string
}

export const RecordContainer = (props: Props) => {
  return (
    <RecordProvider zoomLevel5={props.zoom5 ?? null} type={props.type}>
      <RecordPage landingpage={props.landingpage} zoom5={props.zoom5} />
    </RecordProvider>
  )
}

interface PageProps {
  landingpage: LandingpageBySlugQuery | undefined
  zoom5: Zoom5RecordResult | undefined
}

const RecordPage = (props: PageProps) => {
  const theme = useTheme()

  const { scrollPosition } = useScroll()
  const attributes = props.landingpage?.landingpages?.data[0]?.attributes

  return (
    <Box>
      <GalaxyInterface />
      <Box px={{ xl: 6, base: 0 }}>
        <Box backgroundColor="white" px={6} maxW={theme.breakpoints.xl} marginX={'auto'}>
          <Grid
            pt={6}
            templateAreas={{ lg: `"header meta"`, base: `"meta" "header"` }}
            templateColumns={{ lg: '1fr 22.438rem', base: `100% 100%` }}
            templateRows={{ lg: '1fr', base: `auto minmax(0, 1fr)` }}
            gap={'3.75rem'}
          >
            <GridItem area="header">
              <PageHeader
                showPointer={scrollPosition < 750}
                handleClick={ScrollToContent}
                title={attributes?.Title || undefined}
                preface={attributes?.Description || undefined}
                constrainPreface
              />
            </GridItem>
            <GridItem area="meta">
              <RecordMeta attributes={props.zoom5?.zoom5detail} />
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <DynamicComponentRenderer
        components={attributes?.components as LandingpageComponentsDynamicZone[]}
      />
    </Box>
  )
}
