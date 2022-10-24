import Breadcrumbs from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { Box, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
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

    return (
        <div>
            <Box
                backgroundColor="graph"
                height="800px"
                ref={graphRef}
                position={'sticky'}
                top="-750px"
                zIndex={40}
                onClick={ScrollToTop}
                cursor={scrollPosition > 800 ? 'pointer' : 'cursor'} // Maybe?
            >
                <Box position={'sticky'} top="0px" height="0px">
                    <Breadcrumbs />
                </Box>
                <Box>
                    {sizes?.height && sizes?.width && (
                        <DynamicGalaxyNoSsr dimensions={{ height: 800, width: sizes?.width }} />
                    )}
                </Box>
            </Box>
            <Box px={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
                    <DynamicComponentRenderer
                        components={data?.homepage?.data?.attributes?.components as HomepageComponentsDynamicZone[]}
                    />
                </Box>
            </Box>
        </div>
    )

    function ScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
}
