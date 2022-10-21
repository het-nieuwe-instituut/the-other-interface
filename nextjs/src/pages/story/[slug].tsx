import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { StoryContainer } from '@/features/pages/containers/StoryContainer/StoryContainer'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'

export interface StoryQueryParams {
    slug: string
}

const Page = () => {
    return <StoryContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as StoryQueryParams
    const slug = queryParams.slug
    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    preparePageConfiguration(apolloClient, { host: context.req.headers.host ?? '', imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '' })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            slug,
        },
    })
}