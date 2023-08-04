import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { RecordContainer } from '@/features/pages/containers/RecordContainer/RecordContainer'
import { getZoom5RecordTask } from '@/features/pages/tasks/getZoom5RecordTask'
import { SupportedQuerys } from '@/features/pages/tasks/zoom5Config'
import { prepareReduxState } from '@/features/shared/configs/store'
import { initApiClient } from '@/features/shared/utils/api'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface RecordQueryParams {
  record: string
  slug: SupportedQuerys
  filter: string
  collection: string
  preservedZoom?: ZoomStates
}

const Page = (pageProps: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!pageProps.zoom5?.type) {
    return <p>no type received</p>
  }
  return (
    <RecordContainer
      type={pageProps.zoom5?.type}
      key={pageProps.record}
      zoom5={pageProps?.zoom5}
      landingpage={pageProps?.landingpage}
      record={pageProps?.record}
    />
  )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryParams = context.query as unknown as RecordQueryParams
  const record = queryParams.record
  const slug = queryParams.slug
  const preservedZoom = queryParams.preservedZoom
  const api = initApiClient(context)

  const [landingpage, zoom5] = await Promise.all([
    api?.landingpageBySlug({ slug, locale: context?.locale }),
    getZoom5RecordTask(record, api),
  ])

  return {
    props: {
      record,
      zoom5: zoom5,
      landingpage,
      reduxState: prepareReduxState({
        galaxyInterface: {
          activeZoom: preservedZoom ? preservedZoom : ZoomStates.Zoom5Initial,
          params: { slug, record: record },
        },
      }),
    },
  }
}
