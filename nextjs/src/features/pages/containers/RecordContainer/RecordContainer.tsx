import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import { Zoom5RecordResult } from '../../tasks/zoom5Config'
import { ScrollToContent } from '../../utils/utils'
import { RecordProvider } from './RecordContext'

interface Props {
    zoom5: Zoom5RecordResult | undefined
    landingpage: LandingpageBySlugQuery | undefined
    record: string
}

export const RecordContainer = (props: Props) => {
    return (
        <RecordProvider zoomLevel5={props.zoom5 ?? null}>
            <RecordPage landingpage={props.landingpage} />
        </RecordProvider>
    )
}

interface PageProps {
    landingpage: LandingpageBySlugQuery | undefined
}

const RecordPage = (props: PageProps) => {
    const theme = useTheme()

    const { scrollPosition } = useScroll()
    const attributes = props.landingpage?.landingpages?.data[0]?.attributes

    return (
        <>
            <GalaxyInterface />

            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={attributes?.Title || undefined}
                        preface={attributes?.Description || undefined}
                    />
                </Box>
                <DynamicComponentRenderer components={attributes?.components as LandingpageComponentsDynamicZone[]} />
            </Box>
        </>
    )
}
