import { Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
    useZoom3ArchivesQuery,
    useZoom3DPeopleQuery,
    useZoom3DPublicationsQuery,
    useZoom3ObjectsQuery,
} from 'src/generated/graphql'

export enum SupportedLandingPages {
    Publications = 'publications',
    People = 'people',
    Archives = 'archives',
    Objects = 'objects',
}

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

const useZoom3Query = {
    [SupportedLandingPages.Archives]: useZoom3ArchivesQuery,
    [SupportedLandingPages.Objects]: useZoom3ObjectsQuery,
    [SupportedLandingPages.People]: useZoom3DPeopleQuery,
    [SupportedLandingPages.Publications]: useZoom3DPublicationsQuery,
}

const PaginatedFilterCloudsContainer: React.FunctionComponent<Props> = props => {
    const router = useRouter()

    const {
        data: zoom3,
        loading,
        error,
    } = useZoom3Query[props.type]({
        variables: {
            filterId: (router.query.filter as string) ?? '',
            page: parseInt((router.query.page as string) ?? '0'),
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
        <>
            <DynamicPaginatedFilterCloudsNoSsr
                zoom3={zoom3?.zoomLevel3 ?? []}
                dimensions={props.dimensions}
                type={props.type}
            />
        </>
    )
}

export default PaginatedFilterCloudsContainer
