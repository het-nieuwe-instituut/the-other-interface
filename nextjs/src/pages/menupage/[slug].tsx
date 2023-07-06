import ApiClient from '@/features/graphql/api'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface MenuPageQueryParam {
  slug: string
}

const Menupage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <MenupageContainer {...props} />
}

export default Menupage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryParams = context.query as unknown as MenuPageQueryParam
  const slug = queryParams.slug

  const menupage = await ApiClient?.menupageBySlug({ slug })

  return {
    props: {
      host: context.req.headers.host || null,
      menupage,
    },
  }
}
