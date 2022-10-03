
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/router'
import { useLandingpageBySlugQuery } from 'src/generated/graphql'
import { StoryQueryParams } from 'src/pages/story/[slug]'


import dynamic from 'next/dynamic'
import { useWindowSize } from '@/features/shared/hooks/window'

const DynamicFilterCloudsNoSsr = dynamic(() => import('../../../filters/FilterClouds/FilterClouds'), {
    ssr: false,
})

const test = [
    {
        class: 'test1',
        numberOfInstances: '240',
    },
    {
        class: 'test2',
        numberOfInstances: '152',
    },
    {
        class: 'test3',
        numberOfInstances: '96',
    },
    {
        class: 'test4',
        numberOfInstances: '96',
    },
]

export const LandingpageContainer: React.FC = () => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('common')
    const queryParams = router.query as unknown as StoryQueryParams
    const window = useWindowSize()

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
            <DynamicFilterCloudsNoSsr data={test} dimensions={{ height: 800, width: window.width ?? 0}} />
            <DynamicComponentRenderer components={data?.landingpages?.data[0]?.attributes?.components} />
        </div>
    )
}
