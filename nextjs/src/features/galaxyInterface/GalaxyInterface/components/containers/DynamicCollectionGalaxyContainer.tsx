import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { zoom4DataToCollectionGalaxyData } from '@/features/galaxyInterface/galaxies/CollectionClouds/mappers/Zoom4DataToCollectionGalaxyData'
import LandingpageCollectionContext from '@/features/pages/containers/LandingpageCollectionContainer/LandingpageCollectionContext'
import dynamic from 'next/dynamic'
import { useContext, useMemo } from 'react'
import { Dimensions } from '../../../types/galaxy'

export const DynamicPaginatedCollectionContainerNoSsr = dynamic(
    () => import('../../../galaxies/CollectionClouds/PaginatedCollectionContainer'),
    {
        ssr: false,
    }
)

export const DynamicCollectionCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const { zoomLevel4 } = useContext(LandingpageCollectionContext)
    const filterCloudData = useMemo(() => zoom4DataToCollectionGalaxyData(zoomLevel4), [zoomLevel4])

    return (
        <DynamicPaginatedCollectionContainerNoSsr
            paginatedCollectionData={filterCloudData}
            total={100}
            type={SupportedLandingPages.Publications}
            dimensions={dimensions}
        />
    )
}
