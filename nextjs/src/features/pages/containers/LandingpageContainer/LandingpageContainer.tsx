import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { SupportedLandingPages } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
// import { Loader } from '@/features/shared/components/Loading/Loading'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'

const DynamicFilterCloudsNoSsr = dynamic(() => import('../../../galaxy/FilterClouds/FilterCloudsContainer'), {
    ssr: false,
})

interface Props {
    landingpage: LandingpageBySlugQuery | undefined
    slug: SupportedLandingPages
}

export const LandingpageContainer = (props: Props) => {
    const { landingpage: data} = props
    const type = props.slug
    const { t } = useTypeSafeTranslation('common')
    const theme = useTheme()

    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)

    const { scrollPosition } = useScroll()

    // if (loading) {
    //     return <Loader />
    // }

    // if (error) {
    //     return <p>{error.message}</p>
    // }

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
            <GalaxyWrapper renderTopRight={() => <GalaxyTopRight />} renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef}>
                    {sizes?.height && sizes?.width && (
                        <Box position={'fixed'}>
                            <DynamicFilterCloudsNoSsr type={type} dimensions={{ height: 800, width: sizes?.width }} />
                        </Box>
                    )}
                </Box>
            </GalaxyWrapper>
            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={landingpage.attributes?.Title || undefined}
                        preface={landingpage.attributes?.Description || undefined}
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
