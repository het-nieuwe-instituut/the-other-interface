import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRef } from 'react'
import { StoryComponentsDynamicZone } from 'src/generated/graphql'
import { useGetZoom5Task } from 'src/pages/story/[slug]'
import RecordsCloudsContainer from '../../../galaxy/RecordClouds/RecordsCloudsContainer'
import { StoryMeta } from '../../Meta/StoryMeta'

export const StoryContainer: React.FC = () => {
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)

    const { data, loading, error } = useGetZoom5Task()

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }
    // StoryBySlug will always have one item
    const story = data?.story

    if (!story) {
        return null
    }

    return (
        <>
            <Box backgroundColor="graph" height="800px" ref={graphRef}>
                {sizes?.height && sizes?.width && (
                    <RecordsCloudsContainer dimensions={{ height: 800, width: sizes?.width }} />
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
                            <PageHeader
                                title={story.attributes?.title}
                                preface={story.attributes?.description ?? undefined}
                            />
                        </GridItem>
                        <GridItem area={'meta'}>
                            <StoryMeta story={story} />
                        </GridItem>
                    </Grid>
                </Box>
                <DynamicComponentRenderer components={story.attributes?.components as StoryComponentsDynamicZone[]} />
            </Box>
        </>
    )
}
