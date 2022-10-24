import { config, SupportedQuerys } from '@/features/galaxy/RecordClouds/useZoom5DetailQuery'
import { ApolloClient, gql, NormalizedCacheObject, useQuery } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'

import {
    EntityNames,
    ObjectRelationsDocument,
    ObjectRelationsQuery,
    ObjectRelationsQueryVariables,
    StoryBySlugDocument,
    StoryBySlugQuery,
    StoryBySlugQueryVariables,
    ZoomLevel5ObjectQuery,
} from 'src/generated/graphql'
import { RecordQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'

const Zoom5RecordDataDocument = gql`
    query zoom5RecordData {
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
    const type = record.split('-')[1] as SupportedQuerys
    const id: string = record.split('-')[0]
    const detailConfig = config[type]
    const [detailQuery, storyBySlugQuery, relations] = await Promise.all([
        detailConfig.query(client, { variables: { id: id } }),
        client.query<StoryBySlugQuery, StoryBySlugQueryVariables>({
            variables: {
                locale: context.locale,
                slug: 'test',
            },
            query: StoryBySlugDocument,
        }),
        client.query<ObjectRelationsQuery, ObjectRelationsQueryVariables>({
            variables: {
                id,
            },
            query: ObjectRelationsDocument,
        }),
    ])

    if (detailQuery.error || !detailQuery.data) {
        console.error('Detail query error')
        return
    }

    if (relations.error) {
        console.error('No detailQuery data')
        return
    }

    client.writeQuery({
        query: Zoom5RecordDataDocument,
        data: {
            story: storyBySlugQuery.data.stories.data?.[0],
            detail: detailConfig.accessor(detailQuery.data),
            relations: [
                ...(relations.data.relations ?? []),
                ...[
                    {
                        type: EntityNames.Objects,
                        total: 50,
                        randomRelations: [
                            {
                                id: 'test',
                                label: 'some object',
                                type: EntityNames.Objects,
                            },
                            {
                                id: 'test2',
                                label: 'some object 2',
                                type: EntityNames.Objects,
                            },
                        ],
                    },
                ],
            ],
        },
    })
}
