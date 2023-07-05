// import { Loader } from '@/features/shared/components/Loading/Loading'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'

import {
  HomepageComponentsDynamicZone,
  HomepageQuery,
  ZoomLevel1Query,
} from 'src/generated/graphql'

import { ScrollToContent } from '../../utils/utils'
import { HomepageProvider } from './HomepageContext'

export type Props = {
  homepage: HomepageQuery | undefined
  host?: string | null
  imagePath?: string
  zoomLevel1Data: ZoomLevel1Query | undefined
}

export const HomepageContainer = (props: Props) => {
  return (
    <HomepageProvider zoomLevel1={props.zoomLevel1Data}>
      <Homepage data={props.homepage} />
    </HomepageProvider>
  )
}

const Homepage: React.FC<{ data?: HomepageQuery }> = ({ data }) => {
  const { scrollPosition } = useScroll()
  const theme = useTheme()

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface />
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
    </Box>
  )
}
