import { config } from '@/features/galaxy/RecordClouds/useZoom5DetailQuery'
import { gql, useQuery, ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'

import {
    StoryBySlugQuery,
    ZoomLevel5ObjectQuery,
    StoryBySlugDocument,
    ObjectRelationsQuery,
    StoryBySlugQueryVariables,
    ObjectRelationsQueryVariables,
    ObjectRelationsDocument,
} from 'src/generated/graphql'
import { RecordQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'

const Zoom5RecordDataDocument = gql`
    query zoom5RecordData {
        story @client
        detail @client
        relations @client
    }
`

interface GetZoom5RecordQuery {
    story: NonNullable<StoryBySlugQuery['stories']['data']>[0]
    detail: ZoomLevel5ObjectQuery['zoomLevel5Object']
    relations: ObjectRelationsQuery['relations']
}

export function useGetZoom5RecordTask() {
    const query = useQuery<GetZoom5RecordQuery>(Zoom5RecordDataDocument)

    return query
}

export async function getZoom5RecordTask(
    client: ApolloClient<NormalizedCacheObject>,
    context: GetServerSidePropsContext
) {
    const queryParams = context.query as unknown as RecordQueryParams
    const record = queryParams.record
    const detailConfig = config['Object']
    const [detailQuery, storyBySlugQuery, relations] = await Promise.all([
        detailConfig.query(client, { variables: { id: record } }),
        client.query<StoryBySlugQuery, StoryBySlugQueryVariables>({
            variables: {
                locale: context.locale,
                slug: 'test',
            },
            query: StoryBySlugDocument,
        }),
        client.query<ObjectRelationsQuery, ObjectRelationsQueryVariables>({
            variables: {
                id: record,
            },
            query: ObjectRelationsDocument,
        }),
    ])

    client.writeQuery({
        query: Zoom5RecordDataDocument,
        data: {
            story: storyBySlugQuery.data.stories.data?.[0],
            detail: detailQuery.data.zoomLevel5Object,
            relations: relations.data.relations,
        },
    })
}
