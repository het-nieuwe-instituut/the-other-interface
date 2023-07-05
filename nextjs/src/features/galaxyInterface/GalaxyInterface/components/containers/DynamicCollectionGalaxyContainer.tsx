import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { zoom4DataToCollectionGalaxyData } from '@/features/galaxyInterface/galaxies/CollectionClouds/mappers/Zoom4DataToCollectionGalaxyData'
import LandingpageContext from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext, useMemo } from 'react'

import { Dimensions } from '../../../types/galaxy'

export const DynamicPaginatedCollectionContainerNoSsr = dynamic(
  () => import('../../../galaxies/CollectionClouds/PaginatedCollection'),
  {
    ssr: false,
  }
)

export const DynamicCollectionCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({
  dimensions,
}) => {
  const router = useRouter()
  const { zoomLevel4 } = useContext(LandingpageContext)
  const filterCloudData = useMemo(() => zoom4DataToCollectionGalaxyData(zoomLevel4), [zoomLevel4])

  if (!zoomLevel4?.zoomLevel4?.nodes?.length) {
    return null
  }

  return (
    <DynamicPaginatedCollectionContainerNoSsr
      paginatedCollectionData={filterCloudData}
      total={zoomLevel4.zoomLevel4.total}
      page={parseInt(router.query.page as string)}
      type={(router.query.slug as SupportedLandingPages) ?? SupportedLandingPages.Publications}
      collection={router.query.collection as string}
      filter={(router.query.filter as string) ?? 'typeOfPublication'}
      dimensions={dimensions}
    />
  )
}
