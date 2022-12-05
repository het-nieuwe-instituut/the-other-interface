import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { zoom3QueryToPaginatedFilterCloudData } from '@/features/galaxyInterface/galaxies/PaginatedFilterClouds/mappers/zoom3QueryToPaginatedFilterCloudData'
import LandingpageFilterContext from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContext'
import { useRouter } from 'next/router'
import { useContext, useMemo } from 'react'
import MemoizedPaginatedFilterClouds from '../../../galaxies/PaginatedFilterClouds/PaginatedFilterClouds'
import { Dimensions } from '../../../types/galaxy'

export const DynamicPaginatedFilterCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const router = useRouter()
    const { zoomLevel3 } = useContext(LandingpageFilterContext)
    const filterCloudData = useMemo(() => zoom3QueryToPaginatedFilterCloudData(zoomLevel3), [zoomLevel3])

    if (!zoomLevel3?.zoomLevel3?.length) {
        return null
    }

    return (
        <MemoizedPaginatedFilterClouds
            paginatedCloudItems={filterCloudData}
            total={zoomLevel3?.zoomLevel3[0].total ?? 0}
            type={(router.query.slug as SupportedLandingPages) ?? SupportedLandingPages.Publications}
            filter={(router.query.filter as string) ?? 'typeOfPublication'}
            dimensions={dimensions}
        />
    )
}
