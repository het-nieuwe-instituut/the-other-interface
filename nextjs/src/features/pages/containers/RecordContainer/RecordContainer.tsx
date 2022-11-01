import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { Loader } from '@/features/shared/components/Loading/Loading'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import { useGetZoom5RecordTask } from '../../tasks/getZoom5RecordTask'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'

const DynamicRecordCloudsNoSsr = dynamic(() => import('../../../galaxy/RecordClouds/RecordClouds'), {
    ssr: false,
})

export const RecordContainer: React.FC = () => {
    const { data, loading, error } = useGetZoom5RecordTask()
    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return <RecordPage data={data} />
}

const RecordPage: React.FC<{ data?: ReturnType<typeof useGetZoom5RecordTask>['data'] }> = ({ data }) => {
    const router = useRouter()
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()

    return (
        <>
            <Breadcrumbs
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <GalaxyWrapper renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef} key={router.query.record as string}>
                    {sizes?.height && sizes?.width && (
                        <Box position={'fixed'} pointerEvents={'auto'}>
                            <DynamicRecordCloudsNoSsr
                                key={router.query.record as string}
                                zoomLevel5={data?.zoom5detail}
                                relations={data?.zoom5relations ?? []}
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
                        title={data?.zoom5landingPage?.attributes?.Title || undefined}
                        preface={data?.zoom5landingPage?.attributes?.Description || undefined}
                    />
                </Box>
                <DynamicComponentRenderer
                    components={data?.zoom5landingPage?.attributes?.components as LandingpageComponentsDynamicZone[]}
                />
            </Box>
        </>
    )
}
