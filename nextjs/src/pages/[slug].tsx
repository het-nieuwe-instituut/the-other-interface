import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'
import { MenupageBySlugDocument, MenupageBySlugQuery } from 'src/generated/graphql'

export interface MenupageQueryParams {
    slug: string
}

const Page = () => {
    return <MenupageContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as MenupageQueryParams
    const slug = queryParams.slug

    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    const result = await apolloClient.query<MenupageBySlugQuery>({
        variables: {
            locale: context.locale,
            slug: slug,
        },
        query: MenupageBySlugDocument,
    })

    if (result.error || !result.data.menupages?.data.length) {
        return { notFound: true }
    }

    preparePageConfiguration(apolloClient, { host: context.req.headers.host ?? '' })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            slug,
        },
    })
}
