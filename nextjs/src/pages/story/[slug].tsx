import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { StoryContainer } from '@/features/pages/containers/StoryContainer/StoryContainer'
import { getZoom5StoryTask } from '@/features/pages/tasks/getZoom5StoryTask'
import { prepareReduxState } from '@/features/shared/configs/store'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface StoryQueryParams {
  slug: string
  preservedZoom?: ZoomStates
}

const Page = (pageProps: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!pageProps.story?.attributes) {
    return <p>no type received</p>
  }
  return <StoryContainer type={pageProps.type} record={pageProps?.story} story={pageProps?.story} />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryParams = context.query as unknown as StoryQueryParams
  const locale = context.locale ?? 'en'
  const slug = queryParams.slug
  const preservedZoom = queryParams.preservedZoom

  const { story, type } = await getZoom5StoryTask(slug, locale)
  if (!story) {
    return { props: {} }
  }

  return {
    props: {
      story,
      type,
      reduxState: prepareReduxState({
        galaxyInterface: {
          activeZoom: preservedZoom ? preservedZoom : ZoomStates.Zoom5Initial,
          params: { slug, record: slug },
        },
      }),
    },
  }
}
