import { extractSlugAndId } from '@/features/galaxyInterface/utils/extractors'
import ApiClient from '@/features/graphql/api'
import { PublicationState } from '@/features/shared/types/enums'

import { ObjectRelationsQuery, StoryBySlugQuery } from 'src/generated/graphql'

export interface GetZoom5StoryQuery {
  story?: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0]
  relations?: ObjectRelationsQuery['relations']
  publicationState?: PublicationState
}

export async function getZoom5StoryTask({
  record,
  locale,
  publicationState,
}: {
  record: string
  locale: string
  publicationState: PublicationState
}) {
  try {
    const { slug } = extractSlugAndId(record)
    const storyBySlug = await ApiClient?.storyBySlug({
      slug,
      locale,
      publicationState,
    })

    return {
      story: storyBySlug?.stories?.data?.[0],
      type: slug,
    }
  } catch (e) {
    if (e) {
      console.error('story query error')
    }

    return {}
  }
}
