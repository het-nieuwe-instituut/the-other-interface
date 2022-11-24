import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
// import { Loader } from '@/features/shared/components/Loading/Loading'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import { Zoom5RecordResult } from '../../tasks/getZoom5RecordTask'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'
import { RecordProvider } from './RecordContext'

const DynamicRecordCloudsNoSsr = dynamic(() => import('../../../galaxy/RecordClouds/RecordClouds'), {
    ssr: false,
})

interface Props {
    zoom5: Zoom5RecordResult | undefined,
    landingpage: LandingpageBySlugQuery | undefined,
    record: string
}

export const RecordContainer = (props: Props) => {
    // const { data, loading, error } = useGetZoom5RecordTask()
    // if (loading) {
    //     return <Loader />
    // }

    // if (error) {
    //     return <p>{error.message}</p>
    // }

    return (
        <RecordProvider zoomLevel5={props.zoom5 ?? null} >
            <RecordPage landingpage={props.landingpage} />
        </RecordProvider>
    )
}


interface PageProps {
    landingpage: LandingpageBySlugQuery | undefined,
}

const RecordPage = (props: PageProps) => {
    const router = useRouter()
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()
    const attributes = props.landingpage?.landingpages?.data[0]?.attributes;

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
                            <DynamicRecordCloudsNoSsr
                                key={router.query.record as string}
                                dimensions={sizes}
                            />
                        </Box>
                    )}
                </Box>
            </GalaxyWrapper>

            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={attributes?.Title || undefined}
                        preface={attributes?.Description || undefined}
                    />
                </Box>
                <DynamicComponentRenderer
                    components={attributes?.components as LandingpageComponentsDynamicZone[]}
                />
            </Box>
        </>
    )
}
