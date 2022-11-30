import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { zoom4DataToCollectionGalaxyData } from '@/features/galaxyInterface/galaxies/CollectionClouds/mappers/Zoom4DataToCollectionGalaxyData'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { Zoom4Query } from 'src/generated/graphql'
import { Dimensions } from '../../../types/galaxy'

export const DynamicPaginatedCollectionContainerNoSsr = dynamic(
    () => import('../../../galaxies/CollectionClouds/PaginatedCollectionContainer'),
    {
        ssr: false,
    }
)
const zoom2Stub: Zoom4Query = {
    __typename: 'Query' as const,
    zoomLevel4: {
        __typename: 'ZoomLevel4ParentType',
        total: 100,
        hasMore: true,
        nodes: [
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record',
                title: 'title',
                firstImage: 'image',
                imageLabel: 'imagelabel',
            },
        ],
    },
}
export const DynamicCollectionCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const filterCloudData = useMemo(() => zoom4DataToCollectionGalaxyData(zoom2Stub), [])

    return (
        <DynamicPaginatedCollectionContainerNoSsr
            paginatedCollectionData={filterCloudData}
            total={100}
            type={SupportedLandingPages.Publications}
            dimensions={dimensions}
        />
    )
}
