import { useGetZoom5RecordTask } from '@/features/pages/tasks/getZoom5RecordTask'
import { Loader } from '@/features/shared/components/Loading/Loading'
import dynamic from 'next/dynamic'

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
    const { data, loading, error } = useGetZoom5RecordTask()

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <>
            <DynamicRecordCloudsNoSsr
                zoomLevel5={data?.zoom5detail}
                relations={data?.zoom5relations ?? []}
                dimensions={props.dimensions}
            />
        </>
    )
}

export default RecordCloudsContainer
