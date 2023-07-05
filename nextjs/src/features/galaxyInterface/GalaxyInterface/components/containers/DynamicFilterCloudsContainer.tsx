import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { zoom2ToFilterCloudData } from '@/features/galaxyInterface/galaxies/FilterClouds/mappers/zoom2ToFilterCloudData'
import LandingpageContext from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext, useMemo } from 'react'

import { Dimensions } from '../../../types/galaxy'

export const DynamicGalaxyNoSsr = dynamic(
  () => import('../../../galaxies/FilterClouds/FilterClouds'),
  {
    ssr: false,
  }
)

export const DynamicFilterCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({
  dimensions,
}) => {
  const { zoomLevel2 } = useContext(LandingpageContext)
  const filterCloudData = useMemo(() => zoom2ToFilterCloudData(zoomLevel2), [zoomLevel2])
  const slug = useRouter()?.query?.slug as SupportedLandingPages

  if (!zoomLevel2?.zoomLevel2.length) {
    return null
  }

  return (
    <DynamicGalaxyNoSsr filterCloudData={filterCloudData} type={slug} dimensions={dimensions} />
  )
}
