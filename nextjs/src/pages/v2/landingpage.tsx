import { TypeToEntityName } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'

import { initApiClient } from '@/features/shared/utils/api'
import { getPublicationState } from '@/features/shared/utils/publication-state'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface LandingPageQueryParams {
  type: SupportedLandingPages
}

const LandingPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('props', props)
  return <div></div>
}

export default LandingPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { type } = context.query as unknown as LandingPageQueryParams
  const publicationState = getPublicationState(context.preview)
  const entityName = TypeToEntityName[type]
  let zoomLevel2

  const api = initApiClient(context)

  if (entityName) {
    const api = initApiClient(context)
    zoomLevel2 = await api.zoomLevel2({ entityName })
  }

  const landingpage = await api.landingpageBySlug({
    slug: entityName,
    locale: context?.locale,
    publicationState,
  })

  return {
    props: {
      type: entityName,
      publicationState,
      zoomLevel2,
      landingpage,
    },
  }
}
