import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { Dimensions } from '@/features/galaxy/types/galaxy'
import { zoom2ToFilterCloudData } from '@/features/galaxyInterface/galaxies/FilterClouds/mappers/zoom2ToFilterCloudData'
import { uniqueId } from 'lodash'
import dynamic from 'next/dynamic'
import { ZoomLevel2Query } from 'src/generated/graphql'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxies/FilterClouds/FilterClouds'), {
    ssr: false,
})
const zoom2Stub: ZoomLevel2Query = {
    __typename: 'Query' as const,
    zoomLevel2: [
        { __typename: 'ZoomLevel2Type' as const, filter: 'test', id: uniqueId() },
        { __typename: 'ZoomLevel2Type' as const, filter: 'test2', id: uniqueId() },
        { __typename: 'ZoomLevel2Type' as const, filter: 'test3', id: uniqueId() },
    ],
}
export const DynamicFilterCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    return (
        <DynamicGalaxyNoSsr
            filterCloudData={zoom2ToFilterCloudData(zoom2Stub)}
            type={SupportedLandingPages.Publications}
            dimensions={dimensions}
        />
    )
}
