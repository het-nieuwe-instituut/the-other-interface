import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import { useGetZoom5RecordTask } from '../../tasks/getZoom5RecordTask'

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
    const router = useRouter()
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)

    return (
        <>
            <Box backgroundColor="graph" height="800px" ref={graphRef} key={router.query.record as string}>
                {sizes?.height && sizes?.width && (
                    <DynamicRecordCloudsNoSsr
                        key={router.query.record as string}
                        zoomLevel5={data?.detail}
                        relations={data?.relations ?? []}
                        dimensions={sizes}
                    />
                )}
            </Box>

            <Box px={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} px={6} pt={6} maxW={theme.breakpoints.xl} marginX={'auto'} pb={1}>
                    <PageHeader
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
