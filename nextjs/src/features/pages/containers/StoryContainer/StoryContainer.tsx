import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/router'
import { useStoryBySlugQuery } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'

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

    return (
        <div>
            <DynamicComponentRenderer components={data?.stories?.data[0]?.attributes?.components} />
        </div>
    )
}
