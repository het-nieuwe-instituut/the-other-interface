import { Loader } from '@/features/shared/components/Loading/Loading'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
    useZoom3ArchivesQuery,
    useZoom3DPeopleQuery,
    useZoom3DPublicationsQuery,
    useZoom3ObjectsQuery,
    Zoom3ArchivesDocument,
    Zoom3DPeopleDocument,
    Zoom3DPublicationsDocument,
    Zoom3ObjectsDocument,
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

export const Zoom3QueryDocument = {
    [SupportedLandingPages.Archives]: Zoom3ArchivesDocument,
    [SupportedLandingPages.Objects]: Zoom3ObjectsDocument,
    [SupportedLandingPages.People]: Zoom3DPeopleDocument,
    [SupportedLandingPages.Publications]: Zoom3DPublicationsDocument,
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
            page: parseInt((router.query.page as string) ?? '1'),
            pageSize: 16,
        },
    })

    if (loading) {
        return <Loader />
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
