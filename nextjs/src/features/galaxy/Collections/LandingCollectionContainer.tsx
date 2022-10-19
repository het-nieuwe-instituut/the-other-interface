import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, useTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSize } from '@chakra-ui/react-use-size'
import { useCallback, useRef, useState } from 'react'
import { LandingpageComponentsDynamicZone, useLandingpageBySlugQuery } from 'src/generated/graphql'
import { SupportedLandingPages } from '../PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { PaginatedCollectionContainer } from './PaginatedCollectionContainer'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

export const LandingCollectionContainer: React.FC = () => {
    const { locale, query } = useRouter()
    const queryParams = query as unknown as LandingPageQueryParams
    const type = queryParams.slug
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const { t } = useTypeSafeTranslation('common')
    const theme = useTheme()

    const { data, loading, error } = useLandingpageBySlugQuery({
        variables: {
            locale: locale,
            slug: queryParams?.slug,
        },
    })

    const measuredRef = useCallback((node: HTMLDivElement) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
            setWidth(node.getBoundingClientRect().height)
        }
    }, [])

    // const graphRef = useRef<HTMLDivElement | null>(null)
    // const sizes = useSize(graphRef)

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
                bgGradient="radial(50% 50% at 50% 50%, #B5FD99 0%, rgba(181, 253, 153, 0) 76.56%)"
                backgroundColor="graph"
                height="800px"
                ref={measuredRef}
                padding={6}
            >
                {height && width && (
                    <PaginatedCollectionContainer type={type} dimensions={{ height: 800, width: width }} />
                )}
            </Box>
            <Box px={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} px={6} pt={6} maxW={theme.breakpoints.xl} marginX={'auto'} pb={1}>
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
