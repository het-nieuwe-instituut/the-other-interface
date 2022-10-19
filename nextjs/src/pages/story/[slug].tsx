import { config } from '@/features/galaxy/RecordClouds/useZoom5DetailQuery'
import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { StoryContainer } from '@/features/pages/containers/StoryContainer/StoryContainer'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { ApolloClient, gql, NormalizedCacheObject, useQuery } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'
import { StoryBySlugDocument, StoryBySlugQuery, ZoomLevel5ObjectQuery } from 'src/generated/graphql'

export interface StoryQueryParams {
    slug: string
    record: string
}

const Page = () => {
    return <StoryContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as StoryQueryParams
    const slug = queryParams.slug
    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    await getZoom5Task(apolloClient, context)

    preparePageConfiguration(apolloClient, {
        host: context.req.headers.host ?? '',
        imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '',
    })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            slug,
        },
    })
}

const Zoom5DataDocument = gql`
    query zoom5data {
        story @client
        detail @client
    }
`

interface GetZoom5Query {
    story: NonNullable<StoryBySlugQuery['stories']['data']>[0]
    detail: ZoomLevel5ObjectQuery['zoomLevel5Object']
}

export function useGetZoom5Task() {
    const query = useQuery<GetZoom5Query>(Zoom5DataDocument)

    return query
}

async function getZoom5Task(client: ApolloClient<NormalizedCacheObject>, context: GetServerSidePropsContext) {
    const queryParams = context.query as unknown as StoryQueryParams
    const slug = queryParams.slug

    const detailConfig = config['Object']
    const detailQuery = await detailConfig.query(client, { variables: { id: '9220' } })
    const result = await client.query<StoryBySlugQuery>({
        variables: {
            locale: context.locale,
            slug: slug,
        },
        query: StoryBySlugDocument,
    })

    client.writeQuery({
        query: Zoom5DataDocument,
        data: {
            story: result.data.stories.data?.[0],
            detail: detailQuery.data.zoomLevel5Object,
        },
    })
}
