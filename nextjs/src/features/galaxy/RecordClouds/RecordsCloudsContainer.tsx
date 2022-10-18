import { Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useZoomLevel5DetailQuery } from './useZoom5DetailQuery'

type Props = {
    dimensions: {
        height: number
        width: number
    }
}

const DynamicRecordCloudsNoSsr = dynamic(() => import('./RecordClouds'), {
    ssr: false,
})

const RecordCloudsContainer: React.FunctionComponent<Props> = props => {
    const { data, loading, error } = useZoomLevel5DetailQuery('object')

    if (loading) {
        return <Text>Loading</Text>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <>
            <DynamicRecordCloudsNoSsr zoomLevel5={data} dimensions={props.dimensions} />
        </>
    )
}

export default RecordCloudsContainer
