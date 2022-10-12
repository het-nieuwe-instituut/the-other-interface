import { Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useZoom3Query } from 'src/generated/graphql'
import { SupportedLandingPages } from '../FilterClouds/FilterClouds'

type Props = {
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
}

const DynamicPaginatedFilterCloudsNoSsr = dynamic(() => import('./PaginatedFilterClouds'), {
    ssr: false,
})

const PaginatedFilterCloudsContainer: React.FunctionComponent<Props> = props => {
    const { data: zoom3, loading, error } = useZoom3Query()

    if (loading) {
        return <Text>Loading</Text>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <DynamicPaginatedFilterCloudsNoSsr
            zoom3={zoom3?.zoomLevel3 ?? []}
            dimensions={props.dimensions}
            type={props.type}
        />
    )
}

export default PaginatedFilterCloudsContainer
