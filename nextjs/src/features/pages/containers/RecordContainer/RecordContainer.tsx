import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
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
    console.log(data)

    return <RecordPage data={data} />
}

const RecordPage: React.FC<{ data?: ReturnType<typeof useGetZoom5RecordTask>['data'] }> = ({ data }) => {
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    // const story = data?.story
    console.log(data)
    return (
        <>
            <Box backgroundColor="graph" height="800px" ref={graphRef}>
                {sizes?.height && sizes?.width && (
                    <DynamicRecordCloudsNoSsr
                        zoomLevel5={data?.detail}
                        relations={data?.relations ?? []}
                        dimensions={sizes}
                    />
                )}
            </Box>

            <Box px={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} px={6} maxW={theme.breakpoints.xl} marginX={'auto'}>
                    <Grid
                        pt={6}
                        templateAreas={{
                            lg: `"header meta"`,
                            base: `"meta"
                            "header"`,
                        }}
                        templateColumns={{ lg: '1fr 22.438rem', base: `100% 100%` }}
                        templateRows={{ lg: '1fr', base: `auto minmax(0, 1fr)` }}
                        gap={'3.75rem'}
                    >
                        <GridItem area={'header'}>
                            <PageHeader title={data?.detail?.title ?? ''} preface={data?.detail?.description ?? ''} />
                        </GridItem>
                        {/* {story && (
                            <GridItem area={'meta'}>
                                <StoryMeta story={story} />
                            </GridItem>
                        )} */}
                    </Grid>
                </Box>
                {/* {story && (
                    <DynamicComponentRenderer
                        components={story.attributes?.components as StoryComponentsDynamicZone[]}
                    />
                )} */}
            </Box>
        </>
    )
}
