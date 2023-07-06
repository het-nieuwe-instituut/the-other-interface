import LandingpageContext from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
// import { Loader } from '@/features/shared/components/Loading/Loading'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { EntityNames } from 'src/generated/graphql'

export enum SupportedLandingPages {
  Publications = 'publications',
  People = 'people',
  Archives = 'archives',
  Objects = 'objects',
  Stories = 'stories',
}

type Props = {
  dimensions: {
    height: number
    width: number
  }
  type: SupportedLandingPages
}

const DynamicPaginatedFilterCloudsNoSsr = dynamic(() => import('./FilterClouds'), {
  ssr: false,
})

export const DynamicGalaxyNoSsr = dynamic(() => import('../../galaxy/Galaxy/Galaxy'), {
  ssr: false,
})

export const TypeToEntityName: Record<string, EntityNames> = {
  publications: EntityNames.Publications,
  people: EntityNames.People,
  objects: EntityNames.Objects,
  archives: EntityNames.Archives,
}

export interface LandingPageQueryParams {
  slug: SupportedLandingPages
}

const FilterCloudsContainer: React.FunctionComponent<Props> = props => {
  const router = useRouter()
  const queryParams = router.query as unknown as LandingPageQueryParams
  const type = queryParams.slug
  const { zoomLevel2: filters } = useContext(LandingpageContext)

  // if (isFiltersLoading) {
  //     return <Loader />
  // }

  // if (filtersError) {
  //     return <p>{filtersError.message}</p>
  // }

  return (
    <>
      {type === SupportedLandingPages.Stories ? (
        <DynamicGalaxyNoSsr dimensions={{ height: 800, width: props.dimensions.width }} />
      ) : (
        <DynamicPaginatedFilterCloudsNoSsr
          zoomLevel2={filters?.zoomLevel2 ?? []}
          dimensions={props.dimensions}
          type={props.type}
        />
      )}
    </>
  )
}

export default FilterCloudsContainer
