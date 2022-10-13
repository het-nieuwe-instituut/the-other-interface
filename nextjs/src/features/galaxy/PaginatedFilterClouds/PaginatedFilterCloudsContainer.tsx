import { Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { EntityNames, useZoom3Query } from 'src/generated/graphql'

type Props = {
    dimensions: {
        height: number
        width: number
    }
    type: EntityNames
}

const DynamicPaginatedFilterCloudsNoSsr = dynamic(() => import('./PaginatedFilterClouds'), {
    ssr: false,
})

const PaginatedFilterCloudsContainer: React.FunctionComponent<Props> = props => {
    const {
        data: zoom3,
        loading,
        error,
    } = useZoom3Query({
        variables: {
            filterId: 'author',
            page: 1,
            pageSize: 16,
        },
    })

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
