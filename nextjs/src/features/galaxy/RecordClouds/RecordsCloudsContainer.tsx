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
    // const router = useRouter()

    // const {
    //     data: zoom3,
    //     loading,
    //     error,
    // } = useZoom3Query[props.type]({
    //     variables: {
    //         filterId: (router.query.filter as string) ?? '',
    //         page: parseInt((router.query.page as string) ?? '1'),
    //         pageSize: 16,
    //     },
    // })

    // if (loading) {
    //     return <Text>Loading</Text>
    // }

    // if (error) {
    //     return <p>{error.message}</p>
    // }

    return (
        <>
            <DynamicRecordCloudsNoSsr dimensions={props.dimensions} />
        </>
    )
}

export default RecordCloudsContainer
