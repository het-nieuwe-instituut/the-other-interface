import { HomepageContainer } from '@/features/pagesV2/containers/HomepageContainer/HomepageContainer'
import { initApiClient } from '@/features/shared/utils/api'
import { getPublicationState } from '@/features/shared/utils/publication-state'
import { GetServerSidePropsContext } from 'next'

export interface HomePageQueryParams {
  page?: string
}

const Home = (props: Awaited<ReturnType<typeof getServerSideProps>>['props']) => {
  return <HomepageContainer {...props} />
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const publicationState = getPublicationState(context.preview)
  const locale = context.locale
  const api = initApiClient(context)
  const { page } = context.query as unknown as HomePageQueryParams

  const [homepage, themes] = await Promise.all([
    api?.homepage({ locale, publicationState }),
    // api?.zoomLevel1(),
    api?.themes({
      locale,
      publicationState,
      pagination: { page: parseInt(page ?? '1'), pageSize: 1 },
      sort: 'createdAt:asc',
    }),
  ])

  return {
    props: {
      publicationState,
      homepage,
      themes,
    },
  }
}
