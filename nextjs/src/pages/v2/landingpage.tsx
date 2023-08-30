import { LandingpageContainer } from '@/features/pagesV2/containers/LandingpageContainer/LandingpageContainer'
import { CloudCategory } from '@/features/shared/types/categories'
import { initApiClient } from '@/features/shared/utils/api'
import { Locale } from '@/features/shared/utils/locale'
import { getPublicationState } from '@/features/shared/utils/publication-state'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

interface LandingPageQueryParams {
  category: CloudCategory
  locale: Locale
}

const LandingPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <LandingpageContainer landingpage={props.landingpage} category={props.category} />
)

export default LandingPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { category } = context.query as unknown as LandingPageQueryParams
  const locale = context.locale
  const publicationState = getPublicationState(context.preview)

  const api = initApiClient(context)

  const landingpage = await api.landingpageBySlug({
    slug: category,
    locale,
    publicationState,
  })

  return {
    props: {
      category,
      publicationState,
      landingpage,
    },
  }
}
