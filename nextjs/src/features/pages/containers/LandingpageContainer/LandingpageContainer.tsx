import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/router'
import { useLandingpageBySlugQuery } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'

export const LandingpageContainer: React.FC = () => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('common')
    const queryParams = router.query as unknown as LandingPageQueryParams

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

    return (
        <div>
            <DynamicComponentRenderer components={data?.landingpages?.data[0]?.attributes?.components} />
        </div>
    )
}
