import { PaginatedFilterType } from '@/features/filters/PaginatedFilterClouds/usePresenter'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LandingpageComponentsDynamicZone, useLandingpageBySlugQuery } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'

const DynamicFilterCloudsNoSsr = dynamic(() => import('../../../filters/PaginatedFilterClouds/PaginatedFilterClouds'), {
    ssr: false,
})

const testData: PaginatedFilterType[] = [
    { numberOfInstances: 102, filter: 'Rick Woltheus' },
    { numberOfInstances: 315, filter: 'Test tester' },
    { numberOfInstances: 114, filter: 'nmgnrt uigneuig' },
    { numberOfInstances: 80, filter: ' nrejign erjmfferji vuiregnerin ierngg' },
    { numberOfInstances: 114, filter: 'gniein meifjg ergmjic erg' },
    { numberOfInstances: 200, filter: 'qfjiwf ' },
    { numberOfInstances: 260, filter: 'wf kmwer gj' },
    { numberOfInstances: 739, filter: 'erg' },
    { numberOfInstances: 169, filter: 'test9' },
    { numberOfInstances: 800, filter: 'test0' },
    { numberOfInstances: 137, filter: 'test10' },
    { numberOfInstances: 302, filter: 'test11' },
    { numberOfInstances: 137, filter: 'test12' },
    { numberOfInstances: 195, filter: 'test13' },
    { numberOfInstances: 291, filter: 'test14' },
    { numberOfInstances: 482, filter: 'test15' },
    { numberOfInstances: 241, filter: 'test16' },
    { numberOfInstances: 122, filter: 'test17' },
    { numberOfInstances: 169, filter: 'test234' },
]

export const LandingpageFilterContainer: React.FC = () => {
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
                        data={testData}
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
                <DynamicComponentRenderer
                    components={
                        data?.landingpages?.data[0]?.attributes?.components as LandingpageComponentsDynamicZone[]
                    }
                />
            </Box>
        </>
    )
}
