import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
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

export interface GetZoom5StoryQuery {
    story?: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0]
    relations?: ObjectRelationsQuery['relations']
}

export async function getZoom5StoryTask(
    client: ApolloClient<NormalizedCacheObject>,
    context: GetServerSidePropsContext
): Promise<GetZoom5StoryQuery | undefined> {
    const queryParams = context.query as unknown as StoryQueryParams
    const slug = queryParams.slug

    const storyBySlug = await client.query<StoryBySlugQuery>({
        variables: {
            locale: context.locale,
            slug: slug,
        },
        query: StoryBySlugDocument,
    })

    const storyId = storyBySlug.data.stories.data?.[0]?.id
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

    return {
        story: storyBySlug.data.stories.data?.[0],
        relations: relations.data.relations,
    }
}
