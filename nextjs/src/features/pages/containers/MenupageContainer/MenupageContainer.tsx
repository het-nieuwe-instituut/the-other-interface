import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { Loader } from '@/features/shared/components/Loading/Loading'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/router'
import { MenupageComponentsDynamicZone, useMenupageBySlugQuery } from 'src/generated/graphql'
import { MenupageQueryParams } from 'src/pages/[slug]'

export const MenupageContainer: React.FC = () => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('common')
    const queryParams = router.query as unknown as MenupageQueryParams

    const { data, loading, error } = useMenupageBySlugQuery({
        variables: {
            locale: router.locale,
            slug: queryParams?.slug,
        },
    })

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data?.menupages?.data.length) {
        return <p>{t('somethingWentWrong')}</p>
    }

    return (
        <div>
            <DynamicComponentRenderer
                components={data?.menupages?.data[0]?.attributes?.components as MenupageComponentsDynamicZone[]}
            />
        </div>
    )
}
