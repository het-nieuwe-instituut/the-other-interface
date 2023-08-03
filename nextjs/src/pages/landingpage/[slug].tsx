import { zoom4QueryTask } from '@/features/galaxy/Collections/zoom4QueryTask'
import { TypeToEntityName } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import {
  includesZoomStatesMainGalaxy,
  includesZoomStatesZoom2Galaxy,
  includesZoomStatesZoom3Galaxy,
  includesZoomStatesZoom4Galaxy,
} from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { LandingpageProvider } from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
import { zoom3Query } from '@/features/pages/tasks/zoom3Query.mapper'
import { prepareReduxState } from '@/features/shared/configs/store'
import { initApiClient } from '@/features/shared/utils/api'
import { getPublicationState } from '@/features/shared/utils/publication-state'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import util from 'util'

import { EntityNames } from 'src/generated/graphql'

export interface LandingPageQueryParams {
  slug: SupportedLandingPages
  preservedZoom: ZoomStates
  filter?: string
  collection?: string
  page?: string
}

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <LandingpageProvider
      zoomLevel2={props.zoomLevel2 ?? null}
      zoomLevel3={props.zoomLevel3 ?? null}
      zoomLevel4={props.zoomLevel4 ?? null}
      stories={props.stories?.storiesWithoutRelations?.data}
    >
      <LandingpageContainer landingpage={props.landingpage} />
    </LandingpageProvider>
  )
}

export default Page

const ZoomMapper: Partial<Record<ZoomStates, ZoomStates>> = {
  [ZoomStates.Zoom2]: ZoomStates.Zoom2Initial,
  [ZoomStates.Zoom3]: ZoomStates.Zoom3Initial,
  [ZoomStates.Zoom4]: ZoomStates.Zoom4Initial,
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { slug, preservedZoom, filter, collection, page } =
    context.query as unknown as LandingPageQueryParams
  const publicationState = getPublicationState(context.preview)
  const locale = context.locale
  const entityName = TypeToEntityName[slug]
  let zoomLevel2 = null
  let zoomLevel3 = null
  let zoomLevel4 = null
  let stories = null

  const api = initApiClient(context)

  if (entityName && includesZoomStatesZoom2Galaxy.includes(preservedZoom)) {
    const api = initApiClient(context)
    zoomLevel2 = await api.zoomLevel2({ entityName })
  }

  if (
    slug === EntityNames.Stories.toLowerCase() &&
    includesZoomStatesMainGalaxy.includes(preservedZoom)
  ) {
    stories = await api.storiesWithoutRelations({ pagination: { pageSize: 200 }, locale })
  }

  if (includesZoomStatesZoom3Galaxy.includes(preservedZoom) && filter) {
    zoomLevel3 = await zoom3Query(api)[slug]?.({
      filterId: filter,
      page: parseInt(page ?? '1'),
      pageSize: 16,
    })
  }

  if (includesZoomStatesZoom4Galaxy.includes(preservedZoom) && filter && collection) {
    zoomLevel4 = await zoom4QueryTask(
      slug,
      {
        filter,
        page: page ?? '1',
        collection,
      },
      api
    )
    console.log(util.inspect(zoomLevel4, false, null, true /* enable colors */))
  }

  const landingpage = await api.landingpageBySlug({
    slug,
    locale: context?.locale,
    publicationState,
  })

  return {
    props: {
      slug,
      publicationState,
      landingpage,
      zoomLevel2,
      zoomLevel3,
      zoomLevel4,
      stories,
      reduxState: prepareReduxState({
        galaxyInterface: {
          activeZoom: ZoomMapper[preservedZoom] ?? preservedZoom ?? null,
          params: { slug },
        },
      }),
    },
  }
}
