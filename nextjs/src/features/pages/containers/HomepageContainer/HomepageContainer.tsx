import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { HomepageComponentsDynamicZone, useHomepageQuery, useZoomLevel1Query, ZoomLevel1Query } from 'src/generated/graphql'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxy/Galaxy/Galaxy'), {
    ssr: false,
})
export const HomepageContainer = () => {
    const { locale } = useRouter()
    const { data: counters } = useZoomLevel1Query()
    const { data, loading, error } = useHomepageQuery({ variables: { locale } })
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const theme = useTheme()

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <Box backgroundColor="graph" height="800px" ref={graphRef}>
                {sizes?.height && sizes?.width && (
                    <DynamicGalaxyNoSsr data={counters as ZoomLevel1Query} dimensions={{ height: 800, width: sizes?.width }} />
                )}
            </Box>
            <Box px={{ xl: 6, base: 0 }} py={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} maxW={theme.breakpoints.xl} marginX={'auto'}>
                    <DynamicComponentRenderer components={data?.homepage?.data?.attributes?.components as HomepageComponentsDynamicZone[]} />
                </Box>
            </Box>
        </div>
    )
}
