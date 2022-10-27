import { ApolloClient, gql, NormalizedCacheObject, useQuery } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'

import {
    ObjectRelationsQuery,
    PeopleRelationsQuery,
    PeopleRelationsQueryVariables,
    StoriesRelationsDocument,
    StoryBySlugDocument,
    StoryBySlugQuery,
} from 'src/generated/graphql'
import { StoryQueryParams } from 'src/pages/story/[slug]'

export const Zoom5StoryDataDocument = gql`
    query zoom5RecordData {
        zoom5Story @client
        zoom5relations @client
    }
`

export interface GetZoom5StoryQuery {
    zoom5Story?: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0]
    zoom5relations?: ObjectRelationsQuery['relations']
}

export function useGetZoom5StoryTask() {
    const query = useQuery<GetZoom5StoryQuery>(Zoom5StoryDataDocument)

    if (!query.data) {
        return { ...query, data: query.previousData }
    }
    return query
}
export async function getZoom5StoryTask(
    client: ApolloClient<NormalizedCacheObject>,
    context: GetServerSidePropsContext
) {
    const queryParams = context.query as unknown as StoryQueryParams
    const slug = queryParams.slug

    const storyBySlug = await client.query<StoryBySlugQuery>({
        variables: {
            locale: context.locale,
            slug: slug,
        },
        query: StoryBySlugDocument,
    })

    const storyId = storyBySlug.data.stories.data?.[0].id
    if (storyBySlug.error || !storyBySlug.data || !storyId) {
        console.error('story query error')
        return
    }

    const relations = await client.query<PeopleRelationsQuery, PeopleRelationsQueryVariables>({
        variables: {
            id: storyId,
        },
        query: StoriesRelationsDocument,
    })

    if (relations.error) {
        console.error('No detailQuery data')
        return
    }

    const story = storyBySlug.data.stories.data?.[0]

    client.writeQuery<GetZoom5StoryQuery>({
        query: Zoom5StoryDataDocument,
        data: {
            zoom5Story: story,
            zoom5relations: relations.data.relations,
        },
        overwrite: true,
    })
}
