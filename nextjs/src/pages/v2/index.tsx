import { HomepageContainer } from '@/features/pagesV2/containers/HomepageContainer/HomepageContainer'
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

  const [homepage] = await Promise.all([
    api?.homepage({ locale, publicationState }),
    api?.zoomLevel1(),
  ])

  return {
    props: {
      publicationState,
      homepage,
    },
  }
}
