import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import homePageTask from '@/features/pages/tasks/homePageTask'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'

const Home = () => {
    return <HomepageContainer />
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
   const result = await homePageTask(context)

    if (result.error || !result.data.homepage?.data?.attributes) {
        return { notFound: true }
    }

    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    preparePageConfiguration(apolloClient, { host: context.req.headers.host ?? '', imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '' })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            host: context.req.headers.host || null,
        },
    })
}
