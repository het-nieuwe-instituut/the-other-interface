import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import PaginatedFilterCloudsContainer from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { Loader } from '@/features/shared/components/Loading/Loading'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LandingpageComponentsDynamicZone, useLandingpageBySlugQuery } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'

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

    const { scrollPosition } = useScroll()

    if (loading) {
        return <Loader />
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
        <Breadcrumbs
                            onWrapperClick={ScrollToTop}
                            mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT} 
                        />
            <Box
                 backgroundColor="graph"
                 height="800px"
                 ref={graphRef}
            >
                 
                    {sizes?.height && sizes?.width && (
                        <>
                        <Box position={'fixed'}>
                            <PaginatedFilterCloudsContainer
                                type={type}
                                dimensions={{ height: 800, width: sizes?.width }}
                            />
                        </Box>
                        </>
                        
                    )}
            </Box>
            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box  maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
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
