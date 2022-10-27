import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { HomepageComponentsDynamicZone, HomepageQuery, useHomepageQuery } from 'src/generated/graphql'
import { ScrollToContent, ScrollToTop } from '../../utils/utils'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxy/Galaxy/Galaxy'), {
    ssr: false,
})

export const HomepageContainer = () => {
    const { locale } = useRouter()
    const { data, loading, error } = useHomepageQuery({ variables: { locale } })
    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return <Homepage data={data} />
}

const Homepage: React.FC<{ data?: HomepageQuery }> = ({ data }) => {
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const theme = useTheme()

    const { scrollPosition } = useScroll()

    return (
        <Box backgroundColor="graph">
            <Breadcrumbs 
                bg={scrollPosition >= 750 ? 'graph' : 'trasparent'}  
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <Box
                backgroundColor="graph"
                height="800px"
                ref={graphRef}
            >
                {sizes?.height && sizes?.width && (
                    <Box position={'fixed'}>
                        <DynamicGalaxyNoSsr dimensions={{ height: 800, width: sizes?.width }}  />
                    </Box>
                )}
            </Box>
            <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
                <Box  maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <PageHeader
                        showPointer={scrollPosition < 750}
                        handleClick={ScrollToContent}
                        title={data?.homepage?.data?.attributes?.Title || undefined}
                        preface={data?.homepage?.data?.attributes?.description || undefined}
                    />
                    <DynamicComponentRenderer
                        components={data?.homepage?.data?.attributes?.components as HomepageComponentsDynamicZone[]}
                    />
                </Box>
            </Box>
        </Box>
    )
}
