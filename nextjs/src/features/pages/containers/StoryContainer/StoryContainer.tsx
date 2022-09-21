import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useStoryBySlugQuery } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'
import { StoryMeta } from '../../Meta/StoryMeta'

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

    if (!data?.stories?.data.length) {
        return <p>{t('somethingWentWrong')}</p>
    }

    // StoryBySlug will always have one item
    const story = data?.stories?.data[0]

    return (
        <Box paddingLeft={6} paddingRight={6} paddingTop={6} paddingBottom={6}>
            <Grid
                templateAreas={{
                    lg: `"header meta"`,
                    base: `"meta"
                            "header"`,
                }}
                templateColumns={{ lg: '1fr 22.438rem', base: `100% 100%` }}
                templateRows={{ lg: '1fr 1fr', base: `auto minmax(0, 1fr)` }}
                gap={'3.625rem'}
            >
                <GridItem area={'header'}>
                    <PageHeader title={story.attributes?.title} preface={story.attributes?.preface ?? undefined} />
                </GridItem>
                <GridItem area={'meta'}>
                    <StoryMeta story={story} />
                </GridItem>
            </Grid>
            <DynamicComponentRenderer components={data?.stories?.data[0]?.attributes?.components} />
        </Box>
    )
}
