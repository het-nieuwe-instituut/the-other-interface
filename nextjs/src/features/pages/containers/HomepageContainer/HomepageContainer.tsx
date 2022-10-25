import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { GalaxyButton } from '../../../shared/components/Buttons/GalaxyButton'
import Breadcrumbs from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { HomepageComponentsDynamicZone, HomepageQuery, useHomepageQuery } from 'src/generated/graphql'

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

    return (
        <Box>
            <GalaxyWrapper
                renderTopLeft={() => <Breadcrumbs />}
                // renderTopRight={() => <Menu />}
                renderBottom={() => <GalaxyButton text="Go to searchportal" />}
                renderGalaxy={() => (
                    <Box backgroundColor="graph" height="800px" ref={graphRef}>
                        {sizes?.height && sizes?.width && (
                            <DynamicGalaxyNoSsr dimensions={{ height: 800, width: sizes?.width }} />
                        )}
                    </Box>
                )}
            />
            <Box px={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} maxW={theme.breakpoints.xl} marginX={'auto'}>
                    <DynamicComponentRenderer
                        components={data?.homepage?.data?.attributes?.components as HomepageComponentsDynamicZone[]}
                    />
                </Box>
            </Box>
        </Box>
    )
}
