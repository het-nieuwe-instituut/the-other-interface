import ApiClient from '@/features/graphql/api'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { getPublicationState } from '@/features/shared/utils/publication-state'
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
  const publicationState = getPublicationState(context.preview)

  const menupage = await ApiClient?.menupageBySlug({
    slug,
    publicationState: publicationState as string,
  })

  return {
    props: {
      publicationState,
      host: context.req.headers.host || null,
      menupage,
    },
  }
}
