import { TypeToEntityName } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { LandingpageContainer } from '@/features/pagesV2/containers/LandingpageContainer/LandingpageContainer'

import { initApiClient } from '@/features/shared/utils/api'
import { Locale } from '@/features/shared/utils/locale'
import { getPublicationState } from '@/features/shared/utils/publication-state'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface LandingPageQueryParams {
  type: SupportedLandingPages
  locale: Locale
}

const LandingPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('props', props)

  return <LandingpageContainer landingpage={props.landingpage} />
}

export default LandingPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { type, locale = 'en' } = context.query as unknown as LandingPageQueryParams
  const publicationState = getPublicationState(context.preview)

  const api = initApiClient(context)

  const landingpage = await api.landingpageBySlug({
    slug: TypeToEntityName[type],
    locale,
    publicationState,
  })

  return {
    props: {
      type,
      publicationState,
      landingpage,
    },
  }
}
