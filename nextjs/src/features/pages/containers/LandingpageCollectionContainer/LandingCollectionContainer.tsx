import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import { SupportedLandingPages } from '../../../galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { ScrollToContent } from '../../utils/utils'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

interface Props {
    landingpage: LandingpageBySlugQuery | undefined
}

export const LandingCollectionContainer = (props: Props) => {
    const { landingpage: data } = props
    return <LandingCollection data={data} />
}

export const LandingCollection: React.FC<{ data?: LandingpageBySlugQuery }> = ({ data }) => {
    const theme = useTheme()

    const { scrollPosition } = useScroll()
    const landingpage = data?.landingpages?.data[0]

    return (
        <>
            <GalaxyInterface />

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
