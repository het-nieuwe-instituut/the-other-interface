import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { GetServerSidePropsContext } from 'next/types'



const Page = () => {
    return null
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    // const result = await apolloClient.query<StoryBySlugQuery>({
    //     variables: {
    //         locale: context.locale,
    //         slug: slug,
    //     },
    //     query: StoryBySlugDocument,
    // })

    // if (result.error || !result.data.stories?.data?.length) {
    //     return { notFound: true }
    // }

    // preparePageConfiguration(apolloClient, { host: context.req.headers.host ?? '' })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            items: ['some2', 'some1'],
        },
    })
}