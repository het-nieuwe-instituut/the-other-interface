import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
// import { Loader } from '@/features/shared/components/Loading/Loading'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRef } from 'react'
import { HomepageComponentsDynamicZone, HomepageQuery, ZoomLevel1Query } from 'src/generated/graphql'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'
import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { HomepageProvider } from './HomepageContext'
import DynamicGalaxy from '../../../galaxy/Galaxy/Galaxy'

// export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxy/Galaxy/Galaxy'), {
//     ssr: true,
// })

export type Props = {
    homepage: HomepageQuery | undefined,
    host?: string | null,
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
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const theme = useTheme()

    const { scrollPosition } = useScroll()

    return (
        <Box backgroundColor="graph">
            <Breadcrumbs
                bg={scrollPosition >= 750 ? 'graph' : 'trasparent'}
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <GalaxyWrapper renderTopRight={() => <GalaxyTopRight />} renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef}>
                    {sizes?.height && sizes?.width && (
                        <Box position={'fixed'}>
                            <DynamicGalaxy dimensions={{ height: 800, width: sizes?.width }} />
                        </Box>
                    )}
                </Box>
            </GalaxyWrapper>
            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={data?.homepage?.data?.attributes?.Title || undefined}
                        preface={data?.homepage?.data?.attributes?.description || undefined}
                    />
                    <DynamicComponentRenderer
                        components={data?.homepage?.data?.attributes?.components as HomepageComponentsDynamicZone[]}
                    />
                </Box>
            </Box>
        </Box>
    )
}
