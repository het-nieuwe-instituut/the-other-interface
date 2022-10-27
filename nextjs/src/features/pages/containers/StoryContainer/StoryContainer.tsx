import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { StoryBySlugQuery, StoryComponentsDynamicZone, StoryEntity, useStoryBySlugQuery } from 'src/generated/graphql'
import { StoryMeta } from '../../Meta/StoryMeta'
import { LandingPageQueryParams } from '../LandingpageCollectionContainer/LandingCollectionContainer'

const DynamicRecordCloudsNoSsr = dynamic(() => import('../../../galaxy/RecordClouds/RecordClouds'), {
    ssr: false,
})

export const StoryContainer: React.FC = () => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('common')
    const queryParams = router.query as unknown as LandingPageQueryParams

    const { data, loading, error } = useStoryBySlugQuery({
        variables: {
            locale: router.locale,
            slug: queryParams?.slug,
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

    return <Story story={data.stories.data[0]} />
}

const Story: React.FC<{ story?: NonNullable<NonNullable<StoryBySlugQuery['stories']>['data']>[0] }> = ({ story }) => {
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
                        zoomLevel5={story}
                        relations={[]}
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
                            <PageHeader
                                title={story?.attributes?.title}
                                preface={story?.attributes?.description ?? undefined}
                            />
                        </GridItem>
                        <GridItem area={'meta'}>
                            <StoryMeta story={story as StoryEntity} />
                        </GridItem>
                    </Grid>
                </Box>
                <DynamicComponentRenderer components={story?.attributes?.components as StoryComponentsDynamicZone[]} />
            </Box>
        </>
    )
}
