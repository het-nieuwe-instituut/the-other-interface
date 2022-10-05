import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { StoryContainer } from '@/features/pages/containers/StoryContainer/StoryContainer'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'
import { StoryBySlugDocument, StoryBySlugQuery } from 'src/generated/graphql'

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

    const result = await apolloClient.query<StoryBySlugQuery>({
        variables: {
            locale: context.locale,
            slug: slug,
        },
        query: StoryBySlugDocument,
    })

    if (result.error || !result.data.stories?.data?.length) {
        return { notFound: true }
    }

    preparePageConfiguration(apolloClient, { host: context.req.headers.host ?? '', imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '' })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            slug,
        },
    })
}
