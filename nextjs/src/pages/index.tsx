import { addApolloState, initializeApollo } from '@/features/graphql/config/apollo'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { GetServerSidePropsContext } from 'next'
import { getServerPageHome } from 'src/generated/graphql-ssr'

const Home = () => {
    return <HomepageContainer />
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const client = initializeApollo({ headers: context?.req?.headers })

    const result = await getServerPageHome({
        variables: {
            locale: context.locale,
        },
    })

    if (result.props.error || !result.props.data.homepage?.data?.attributes) {
        return { notFound: true }
    }

    return addApolloState(client.cache.extract(), {
        props: {},
    })
}
