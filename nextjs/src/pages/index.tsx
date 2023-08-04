import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { prepareReduxState } from '@/features/shared/configs/store'
import { initApiClient } from '@/features/shared/utils/api'
import { getPublicationState } from '@/features/shared/utils/publication-state'
import { GetServerSidePropsContext } from 'next'

const Home = (props: Awaited<ReturnType<typeof getServerSideProps>>['props']) => {
  return <HomepageContainer {...props} />
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const publicationState = getPublicationState(context.preview)
  const locale = context.locale
  const api = initApiClient(context)

  const [homepage, zoomLevel1Data] = await Promise.all([
    api?.homepage({ locale, publicationState }),
    api?.zoomLevel1(),
  ])

  return {
    props: {
      publicationState,
      host: context.req.headers.host || null,
      homepage,
      zoomLevel1Data,
      activeZoom: (context.query?.preservedZoom as ZoomStates) ?? ZoomStates.Zoom0,
      reduxState: prepareReduxState({
        galaxyInterface: {
          activeZoom: (context.query?.preservedZoom as ZoomStates) ?? ZoomStates.Zoom0,
        },
      }),
    },
  }
}
