import { SupportedLandingPages } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import { ScrollToContent } from '../../utils/utils'

interface Props {
    landingpage: LandingpageBySlugQuery | undefined
}

export const LandingpageContainer = (props: Props) => {
    const { landingpage: data } = props
    const theme = useTheme()

    const { scrollPosition } = useScroll()
    const landingpage = data?.landingpages?.data[0]

    return (
        <>
            <GalaxyInterface />
            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={landingpage?.attributes?.Title || undefined}
                        preface={landingpage?.attributes?.Description || undefined}
                    />
                    <DynamicComponentRenderer
                        components={
                            data?.landingpages?.data[0]?.attributes?.components as LandingpageComponentsDynamicZone[]
                        }
                    />
                </Box>
            </Box>
        </>
    )
}
