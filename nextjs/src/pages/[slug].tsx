import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { initApiClient } from '@/features/shared/utils/api'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface MenupageQueryParams {
  slug: string
}

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <MenupageContainer menupage={props.menupage} />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryParams = context.query as unknown as MenupageQueryParams
  const { slug } = queryParams
  const { locale } = context
  const api = initApiClient(context)

  const menupage = await api?.menupageBySlug({ slug, locale })

  return {
    props: {
      menupage,
    },
  }
}
