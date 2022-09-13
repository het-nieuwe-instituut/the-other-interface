import { addApolloState } from '@/features/graphql/config/apollo'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { GetServerSidePropsContext } from 'next'
import { getServerPageMenuBySlug } from 'src/generated/graphql-ssr'

export interface MenupageQueryParams {
    slug: string
}

const Page = () => {
    return <MenupageContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
        const queryParams = context.query as unknown as MenupageQueryParams
        const slug = queryParams.slug

        const result = await getServerPageMenuBySlug(
            {
                variables: {
                    locale: context.locale,
                    slug: slug,
                },
            },
            { headers: context?.req?.headers }
        )

        return addApolloState(result.props.apolloState, {
            props: {
                slug,
            },
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return {
            redirect: {
                destination: `/500?message=${err.message}`,
                permanent: false,
            },
        }
    }
}
