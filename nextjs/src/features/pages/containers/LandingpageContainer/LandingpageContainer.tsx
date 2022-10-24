import Breadcrumbs from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { SupportedLandingPages } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { LandingpageComponentsDynamicZone, useLandingpageBySlugQuery } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'

const DynamicFilterCloudsNoSsr = dynamic(() => import('../../../galaxy/FilterClouds/FilterCloudsContainer'), {
    ssr: false,
})

export const LandingpageContainer: React.FC = () => {
    const { locale, query } = useRouter()
    const queryParams = query as unknown as LandingPageQueryParams
    const type = queryParams.slug as unknown as SupportedLandingPages
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

    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

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
            <Box
                backgroundColor="graph"
                height="800px"
                ref={graphRef}
                position={'sticky'}
                top="-750px"
                zIndex={40}
                onClick={ScrollToTop}
                cursor={scrollPosition > 50 ? 'pointer' : 'cursor'}
            >
                <Box position={'sticky'} top="0px" height="0px">
                    <Breadcrumbs />
                </Box>
                {sizes?.height && sizes?.width && (
                    <DynamicFilterCloudsNoSsr type={type} dimensions={{ height: 800, width: sizes?.width }} />
                )}
            </Box>
            <Box px={{ xl: 6, base: 0 }}>
                <Box
                    backgroundColor={'white'}
                    px={6}
                    maxW={theme.breakpoints.xl}
                    marginX={'auto'}
                    pb={1}
                    paddingTop={6}
                >
                    <PageHeader
                        showPointer={scrollPosition < 50}
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
