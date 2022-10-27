import Breadcrumbs from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import {
    LandingpageBySlugQuery,
    LandingpageComponentsDynamicZone,
    useLandingpageBySlugQuery,
} from 'src/generated/graphql'
import { PaginatedCollectionContainer } from '../../../galaxy/Collections/PaginatedCollectionContainer'
import { SupportedLandingPages } from '../../../galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

export const LandingCollectionContainer: React.FC = () => {
    const { locale, query } = useRouter()
    const queryParams = query as unknown as LandingPageQueryParams

    const { data, loading, error } = useLandingpageBySlugQuery({
        variables: {
            locale: locale,
            slug: queryParams?.slug,
        },
    })
    const { t } = useTypeSafeTranslation('common')

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data?.landingpages?.data.length) {
        return <p>{t('somethingWentWrong')}</p>
    }

    return <LandingCollection data={data} />
}

export const LandingCollection: React.FC<{ data?: LandingpageBySlugQuery }> = ({ data }) => {
    const { query } = useRouter()
    const queryParams = query as unknown as LandingPageQueryParams
    const type = queryParams.slug

    const theme = useTheme()

    const { scrollPosition } = useScroll()

    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const landingpage = data?.landingpages?.data[0]

    return (
        <>
            <Box
                backgroundColor="graph"
                ref={graphRef}
                position={'sticky'}
                top="-750px"
                zIndex={0}
                onClick={ScrollToTop}
                cursor={scrollPosition >= 750 ? 'pointer' : 'cursor'}
            >
                <Box
                    bgGradient="radial(50% 50% at 50% 50%, #B5FD99 0%, rgba(181, 253, 153, 0) 76.56%)"
                    backgroundRepeat={'no-repeat'}
                    bgSize={'1691px 1691px'}
                    backgroundPosition={'center'}
                    backgroundColor="graph"
                    height="800px"
                    ref={graphRef}
                >
                    {sizes?.height && sizes?.width && (
                        <>
                            <Breadcrumbs />
                            <PaginatedCollectionContainer
                                type={type}
                                dimensions={{ height: 800, width: sizes.width }}
                            />
                        </>
                    )}
                </Box>
            </Box>
            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2}>
                <Box backgroundColor={'white'} px={6} pt={6} maxW={theme.breakpoints.xl} marginX={'auto'} pb={1}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={landingpage?.attributes?.Title || undefined}
                        preface={landingpage?.attributes?.Description || undefined}
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
