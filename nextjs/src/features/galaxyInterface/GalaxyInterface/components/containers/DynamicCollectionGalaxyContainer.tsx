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
                record: 'record1',
                title: 'title1',
                firstImage: 'image1',
                imageLabel: 'imagelabel1',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record2',
                title: 'title2',
                firstImage: 'image2',
                imageLabel: 'imagelabel2',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record3',
                title: 'title3',
                firstImage: 'image3',
                imageLabel: 'imagelabel3',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record3',
                title: 'title3',
                firstImage: 'image3',
                imageLabel: 'imagelabel3',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record4',
                title: 'title4',
                firstImage: 'image4',
                imageLabel: 'imagelabel4',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record5',
                title: 'title5',
                firstImage: 'image5',
                imageLabel: 'imagelabel5',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record6',
                title: 'title6',
                firstImage: 'image6',
                imageLabel: 'imagelabel6',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record7',
                title: 'title7',
                firstImage: 'image7',
                imageLabel: 'imagelabel7',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record8',
                title: 'title8',
                firstImage: 'image8',
                imageLabel: 'imagelabel8',
            },
            {
                __typename: 'ZoomLevel4Type' as const,
                record: 'record9',
                title: 'title9',
                firstImage: 'image9',
                imageLabel: 'imagelabel9',
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
