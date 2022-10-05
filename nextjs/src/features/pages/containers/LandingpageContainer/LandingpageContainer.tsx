import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, useTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useLandingpageBySlugQuery } from 'src/generated/graphql'
import { StoryQueryParams } from 'src/pages/story/[slug]'

export const LandingpageContainer: React.FC = () => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('common')
    const queryParams = router.query as unknown as StoryQueryParams
    const theme = useTheme()

    const { data, loading, error } = useLandingpageBySlugQuery({
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

    if (!data?.landingpages?.data.length) {
        return <p>{t('somethingWentWrong')}</p>
    }

    const landingpage = data?.landingpages?.data[0]

    return (
        <Box px={{ xl: 6, base: 0 }} py={{ xl: 6, base: 0 }}>
            <Box backgroundColor={'white'} px={6} maxW={theme.breakpoints.xl} marginX={'auto'}>
                <PageHeader
                    title={landingpage.attributes?.Title || undefined}
                    // preface={landingpage.attributes?.Description ?? undefined}
                />
            </Box>
            <DynamicComponentRenderer components={data?.landingpages?.data[0]?.attributes?.components} />
        </Box>
    )
}
