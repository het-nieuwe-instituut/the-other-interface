import { getApolloClient } from '@/features/graphql/config/apollo'
import { GetServerSidePropsContext } from 'next'
import { HomepageDocument, HomepageQuery } from 'src/generated/graphql'

const homePageTask = async (context: GetServerSidePropsContext) => {
    const apolloClient = getApolloClient({ headers: context?.req?.headers })
    console.log(apolloClient)
    
    const result = await apolloClient.query<HomepageQuery>({
        variables: {
            locale: context.locale,
        },
        query: HomepageDocument,
    })

    return result
}

export default homePageTask