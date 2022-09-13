import { addApolloState } from '@/features/graphql/config/apollo'
import { StoryContainer } from '@/features/pages/containers/StoryContainer/StoryContainer'
import { GetServerSidePropsContext } from 'next'
import { getServerPageStoryBySlug } from 'src/generated/graphql-ssr'

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

    const result = await getServerPageStoryBySlug(
        {
            variables: {
                locale: context.locale,
                slug: slug,
            },
        },
        { headers: context?.req?.headers }
    )

    if (result.props.error || !result.props.data.stories?.data?.length) {
        return { notFound: true }
    }

    return addApolloState(result.props.apolloState, {
        props: {
            slug,
        },
    })
}
