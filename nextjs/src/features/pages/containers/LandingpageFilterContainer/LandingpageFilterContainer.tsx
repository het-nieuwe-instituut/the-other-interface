import { PaginatedFilterType } from '@/features/galaxy/PaginatedFilterClouds/types'
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

const DynamicFilterCloudsNoSsr = dynamic(() => import('../../../galaxy/PaginatedFilterClouds/PaginatedFilterClouds'), {
    ssr: false,
})

const testData: PaginatedFilterType[] = [
    { numberOfInstances: 102, name: 'Rick Woltheus' },
    { numberOfInstances: 315, name: 'Test tester' },
    { numberOfInstances: 114, name: 'nmgnrt uigneuig' },
    { numberOfInstances: 80, name: ' nrejign erjmfferji vuiregnerin ierngg' },
    { numberOfInstances: 114, name: 'gniein meifjg ergmjic erg' },
    { numberOfInstances: 200, name: 'qfjiwf ' },
    { numberOfInstances: 260, name: 'wf kmwer gj' },
    { numberOfInstances: 739, name: 'erg' },
    { numberOfInstances: 169, name: 'test9' },
    { numberOfInstances: 800, name: 'test0' },
    { numberOfInstances: 137, name: 'test10' },
    { numberOfInstances: 302, name: 'test11' },
    { numberOfInstances: 137, name: 'test12' },
    { numberOfInstances: 195, name: 'test13' },
    { numberOfInstances: 291, name: 'test14' },
    { numberOfInstances: 482, name: 'test15' },
    { numberOfInstances: 241, name: 'test16' },
    { numberOfInstances: 122, name: 'test17' },
    { numberOfInstances: 169, name: 'test234' },
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
