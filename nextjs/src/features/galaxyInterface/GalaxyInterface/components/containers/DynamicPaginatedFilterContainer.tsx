import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { zoom3QueryToPaginatedFilterCloudData } from '@/features/galaxyInterface/galaxies/PaginatedFilterClouds/mappers/zoom3QueryToPaginatedFilterCloudData'
import { uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Zoom3Query } from 'src/generated/graphql'
import MemoizedPaginatedFilterClouds from '../../../galaxies/PaginatedFilterClouds/PaginatedFilterClouds'
import { Dimensions } from '../../../types/galaxy'

const zoom3Stub: Zoom3Query = {
    __typename: 'Query' as const,
    zoomLevel3: [
        { __typename: 'ZoomLevel3Type' as const, uri: uniqueId(), name: uniqueId(), count: 100, total: 1000 },
        { __typename: 'ZoomLevel3Type' as const, uri: uniqueId(), name: uniqueId(), count: 100, total: 1000 },
        { __typename: 'ZoomLevel3Type' as const, uri: uniqueId(), name: uniqueId(), count: 100, total: 1000 },
        { __typename: 'ZoomLevel3Type' as const, uri: uniqueId(), name: uniqueId(), count: 100, total: 1000 },
    ],
}
export const DynamicPaginatedFilterCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const router = useRouter()
    const filterCloudData = useMemo(() => zoom3QueryToPaginatedFilterCloudData(zoom3Stub), [])

    return (
        <MemoizedPaginatedFilterClouds
            paginatedCloudItems={filterCloudData}
            total={zoom3Stub.zoomLevel3[0].total ?? 0}
            type={(router.query.slug as SupportedLandingPages) ?? SupportedLandingPages.Publications}
            filter={(router.query.filter as string) ?? 'typeOfPublication'}
            dimensions={dimensions}
        />
    )
}
