import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { zoom4DataToCollectionGalaxyData } from '@/features/galaxyInterface/galaxies/CollectionClouds/mappers/Zoom4DataToCollectionGalaxyData'
import LandingpageCollectionContext from '@/features/pages/containers/LandingpageCollectionContainer/LandingpageCollectionContext'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext, useMemo } from 'react'
import { Dimensions } from '../../../types/galaxy'

export const DynamicPaginatedCollectionContainerNoSsr = dynamic(
    () => import('../../../galaxies/CollectionClouds/PaginatedCollectionContainer'),
    {
        ssr: false,
    }
)

export const DynamicCollectionCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const router = useRouter()
    const { zoomLevel4 } = useContext(LandingpageCollectionContext)
    const filterCloudData = useMemo(() => zoom4DataToCollectionGalaxyData(zoomLevel4), [zoomLevel4])

    return (
        <DynamicPaginatedCollectionContainerNoSsr
            paginatedCollectionData={filterCloudData}
            total={100}
            type={(router.query.slug as SupportedLandingPages) ?? SupportedLandingPages.Publications}
            collection={router.query.collection as string}
            filter={(router.query.filter as string) ?? 'typeOfPublication'}
            dimensions={dimensions}
        />
    )
}
