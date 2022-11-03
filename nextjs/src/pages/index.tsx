import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'
import { HomepageDocument, HomepageQuery } from 'src/generated/graphql'

const Home = () => {
    return <HomepageContainer />
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    const result = await apolloClient.query<HomepageQuery>({
        variables: {
            locale: context.locale,
        },
        query: HomepageDocument,
    })

    if (result.error || !result.data.homepage?.data?.attributes) {
        return { notFound: true }
    }

    preparePageConfiguration(apolloClient, { host: context.req.headers.host ?? '', imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '' })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            host: context.req.headers.host || null,
        },
    })
}