import ApiClient from '@/features/graphql/api'
import { ObjectRelationsQuery, StoryBySlugQuery } from 'src/generated/graphql'

export interface GetZoom5StoryQuery {
    story?: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0]
    relations?: ObjectRelationsQuery['relations']
}

export async function getZoom5StoryTask(slug: string, locale: string) {
    try {
        const storyBySlug = await ApiClient?.storyBySlug({ slug, locale })
        const storyId = storyBySlug?.stories.data?.[0]?.id

        if (!storyId) {
            return null
            throw new Error('cant find id')
        }

        const relations = await ApiClient?.StoriesRelations({ id: storyId })

        return {
            story: storyBySlug?.stories.data?.[0],
            relations: relations?.relations,
        }
    } catch (e) {
        if (e) {
            console.error('story query error')
        }
    }
}
