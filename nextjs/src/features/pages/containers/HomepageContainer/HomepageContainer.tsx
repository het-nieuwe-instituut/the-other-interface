
import { ObjectPerType } from '@/features/GalaxyInterface/components/Galaxy/hooks/useD3Simulation'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { Box } from '@chakra-ui/react'
import { useSize } from "@chakra-ui/react-use-size"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useHomepageQuery } from 'src/generated/graphql'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../GalaxyInterface/components/Galaxy/Galaxy'), {
    ssr: false,
})

const result: ObjectPerType[] = [
    {
        class: 'test1',
        numberOfInstances: '814',
        xFromCenter: -300,
        yFromCenter: 0,
    },
    {
        class: 'test2',
        numberOfInstances: '308',
        xFromCenter: 250,
        yFromCenter: -150,
    },
    {
        class: 'test3',
        numberOfInstances: '192',
        xFromCenter: 175,
        yFromCenter: 175,
    },

    {
        class: 'test4',
        numberOfInstances: '192',
        xFromCenter: 350,
        yFromCenter: 120,
    },
]

export const HomepageContainer = () => {
    const { locale } = useRouter()
    const { data, loading, error } = useHomepageQuery({ variables: { locale } })
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    

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
                    <DynamicGalaxyNoSsr data={result} dimensions={{ height: 800, width: sizes?.width }} />
                )}
            </Box>
            <DynamicComponentRenderer components={data?.homepage?.data?.attributes?.components} />
        </div>
    )
}
