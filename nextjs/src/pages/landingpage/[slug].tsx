import { addApolloState } from '@/features/graphql/config/apollo'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { GetServerSidePropsContext } from 'next'
import { getServerPageLandingBySlug } from 'src/generated/graphql-ssr'

export interface LandingPageQueryParams {
    slug: string
}

const Page = () => {
    return <LandingpageContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
        const queryParams = context.query as unknown as LandingPageQueryParams
        const slug = queryParams.slug

        const result = await getServerPageLandingBySlug(
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
                destination: `/error?message=${err.message}`,
                permanent: false,
            },
        }
    }
}
