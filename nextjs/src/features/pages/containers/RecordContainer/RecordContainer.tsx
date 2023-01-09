import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import RecordClouds from '../../../galaxy/RecordClouds/RecordClouds'
import { RecordMeta } from '../../Meta/RecordMeta'
import { Zoom5RecordResult } from '../../tasks/zoom5Config'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'
import { RecordProvider } from './RecordContext'

interface Props {
    zoom5: Zoom5RecordResult | undefined
    landingpage: LandingpageBySlugQuery | undefined
    record: string
}

export const RecordContainer = (props: Props) => {
    return (
        <RecordProvider zoomLevel5={props.zoom5 ?? null}>
            <RecordPage landingpage={props.landingpage} zoom5={props.zoom5} />
        </RecordProvider>
    )
}

interface PageProps {
    landingpage: LandingpageBySlugQuery | undefined
    zoom5: Zoom5RecordResult | undefined
}

const RecordPage = (props: PageProps) => {
    const router = useRouter()
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()
    const attributes = props.landingpage?.landingpages?.data[0]?.attributes

    return (
        <>
            <Breadcrumbs
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <GalaxyWrapper renderTopRight={() => <GalaxyTopRight />} renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef} key={router.query.record as string}>
                    {sizes?.height && sizes?.width && (
                        <Box position={'fixed'}>
                            <RecordClouds key={router.query.record as string} dimensions={sizes} />
                        </Box>
                    )}
                </Box>
            </GalaxyWrapper>

            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
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
                            />
                            <DynamicComponentRenderer
                                components={attributes?.components as LandingpageComponentsDynamicZone[]}
                            />
                        </GridItem>
                        <GridItem area="meta">
                            <RecordMeta attributes={props.zoom5?.zoom5detail} />
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
