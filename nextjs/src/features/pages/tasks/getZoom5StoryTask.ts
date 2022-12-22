import { extractSlugAndId } from '@/features/galaxyInterface/utils/extractors'
import ApiClient from '@/features/graphql/api'
import { ObjectRelationsQuery, StoryBySlugQuery } from 'src/generated/graphql'

export interface GetZoom5StoryQuery {
    story?: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0]
    relations?: ObjectRelationsQuery['relations']
}

export async function getZoom5StoryTask(record: string, locale: string) {
    try {
        const {slug} = extractSlugAndId(record)
        const storyBySlug = await ApiClient?.storyBySlug({ slug, locale })

        return {
            story: storyBySlug?.stories?.data?.[0],
        }
        
    } catch (e) {
        if (e) {
            console.error('story query error')
        }
    }
}
