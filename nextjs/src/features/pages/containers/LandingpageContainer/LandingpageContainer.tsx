import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useLandingpageBySlugQuery } from 'src/generated/graphql'

import { FilterType, PossibleFilters } from '@/features/filters/FilterClouds/usePresenter'
import dynamic from 'next/dynamic'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'

const DynamicFilterCloudsNoSsr = dynamic(() => import('../../../filters/FilterClouds/FilterClouds'), {
    ssr: false,
})

const config: { [key: string]: FilterType[] } = {
    archives: [
        { filter: PossibleFilters.ByName, numberOfInstances: 240 },
        { filter: PossibleFilters.ByDate, numberOfInstances: 240 },
        { filter: PossibleFilters.ByDesLevel, numberOfInstances: 240 },
    ],
    objects: [
        { filter: PossibleFilters.ByPerson, numberOfInstances: 240 },
        { filter: PossibleFilters.ByProject, numberOfInstances: 240 },
        { filter: PossibleFilters.BySubject, numberOfInstances: 240 },
        { filter: PossibleFilters.ByMaker, numberOfInstances: 240 },
        { filter: PossibleFilters.ByType, numberOfInstances: 240 },
        { filter: PossibleFilters.ByDate, numberOfInstances: 240 },
    ],
    people: [
        { filter: PossibleFilters.ByType, numberOfInstances: 240 },
        { filter: PossibleFilters.ByDate, numberOfInstances: 240 },
        { filter: PossibleFilters.ByPlace, numberOfInstances: 240 },
        { filter: PossibleFilters.ByBirthDate, numberOfInstances: 240 },
        { filter: PossibleFilters.ByProfession, numberOfInstances: 240 },
        { filter: PossibleFilters.ByDeathDate, numberOfInstances: 240 },
    ],
    publications: [
        { filter: PossibleFilters.ByAuthor, numberOfInstances: 240 },
        { filter: PossibleFilters.BySubject, numberOfInstances: 150 },
        { filter: PossibleFilters.ByDate, numberOfInstances: 80 },
        { filter: PossibleFilters.ByPerson, numberOfInstances: 200 },
        { filter: PossibleFilters.ByLocation, numberOfInstances: 60 },
    ],
}

export const LandingpageContainer: React.FC = () => {
    const { locale, query } = useRouter()
    const queryParams = query as unknown as LandingPageQueryParams
    const type = queryParams.slug
    const { t } = useTypeSafeTranslation('common')
    const theme = useTheme()

    const { data, loading, error } = useLandingpageBySlugQuery({
        variables: {
            locale: locale,
            slug: queryParams?.slug,
        },
    })
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const currentConfig = config[type]

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
        <>
            <Box backgroundColor="graph" height="800px" ref={graphRef}>
                {sizes?.height && sizes?.width && (
                    <DynamicFilterCloudsNoSsr
                        type={type}
                        data={currentConfig}
                        dimensions={{ height: 800, width: sizes?.width }}
                    />
                )}
            </Box>
            <Box px={{ xl: 6, base: 0 }} py={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} px={6} maxW={theme.breakpoints.xl} marginX={'auto'} pb={1}>
                    <PageHeader
                        title={landingpage.attributes?.Title || undefined}
                        preface={landingpage.attributes?.Description || undefined}
                    />
                </Box>
                <DynamicComponentRenderer components={data?.landingpages?.data[0]?.attributes?.components} />
            </Box>
        </>
    )
}
