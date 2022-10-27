import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
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
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return <RecordPage data={data} />
}

const RecordPage: React.FC<{ data?: ReturnType<typeof useGetZoom5RecordTask>['data'] }> = ({ data }) => {
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()

    console.log(data)

    return (
        <>
        <Breadcrumbs
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT} 
            />
            <Box backgroundColor="graph" height="800px" ref={graphRef}>
                {sizes?.height && sizes?.width && (
                    <Box position={'fixed'}>
                        <DynamicRecordCloudsNoSsr
                            zoomLevel5={data?.detail}
                            relations={data?.relations ?? []}
                            dimensions={sizes}
                        />
                    </Box>
                )}
            </Box>

            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box  maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={data?.landingPage?.attributes?.Title || undefined}
                        preface={data?.landingPage?.attributes?.Description || undefined}
                    />
                </Box>
                <DynamicComponentRenderer
                    components={data?.landingPage?.attributes?.components as LandingpageComponentsDynamicZone[]}
                />
            </Box>
        </>
    )
}
