import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { StoryComponentsDynamicZone, useStoryBySlugQuery } from 'src/generated/graphql'
import { StoryQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'
import RecordsCloudsContainer from '../../../galaxy/RecordClouds/RecordsCloudsContainer'
import { StoryMeta } from '../../Meta/StoryMeta'

export const StoryContainer: React.FC = () => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('common')
    const queryParams = router.query as unknown as StoryQueryParams
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)

    const { data, loading, error } = useStoryBySlugQuery({
        variables: {
            locale: router.locale,
            slug: queryParams?.record,
        },
    })

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data?.stories?.data?.length) {
        return <p>{t('somethingWentWrong')}</p>
    }

    // StoryBySlug will always have one item
    const story = data?.stories?.data[0]

    return (
        <>
            <Box backgroundColor="graph" height="800px" ref={graphRef}>
                {sizes?.height && sizes?.width && (
                    <RecordsCloudsContainer dimensions={{ height: 800, width: sizes?.width }} recordId={''} />
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
                <DynamicComponentRenderer
                    components={data?.stories?.data[0]?.attributes?.components as StoryComponentsDynamicZone[]}
                />
            </Box>
        </>
    )
}
