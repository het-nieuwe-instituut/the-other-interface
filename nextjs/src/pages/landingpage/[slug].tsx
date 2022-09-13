import { addApolloState } from '@/features/graphql/config/apollo'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getServerPageLandingBySlug } from 'src/generated/graphql-ssr'

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <LandingpageContainer slug={props.slug} />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
        const slug: string = context.query?.slug as string

        const result = await getServerPageLandingBySlug(
            {
                variables: {
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
