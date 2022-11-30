import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { Dimensions } from '../../../types/galaxy'
import { zoom2ToFilterCloudData } from '@/features/galaxyInterface/galaxies/FilterClouds/mappers/zoom2ToFilterCloudData'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { ZoomLevel2Query } from 'src/generated/graphql'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxies/FilterClouds/FilterClouds'), {
    ssr: false,
})
const zoom2Stub: ZoomLevel2Query = {
    __typename: 'Query' as const,
    zoomLevel2: [
        { __typename: 'ZoomLevel2Type' as const, filter: 'test', id: 'author' },
        { __typename: 'ZoomLevel2Type' as const, filter: 'test2', id: 'subject' },
        { __typename: 'ZoomLevel2Type' as const, filter: 'test3', id: 'typeOfPublication' },
    ],
}
export const DynamicFilterCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const filterCloudData = useMemo(() => zoom2ToFilterCloudData(zoom2Stub), [])

    return (
        <DynamicGalaxyNoSsr
            filterCloudData={filterCloudData}
            type={SupportedLandingPages.Publications}
            dimensions={dimensions}
        />
    )
}
