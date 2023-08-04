import { extractSlugAndId } from '@/features/galaxyInterface/utils/extractors'
import { PublicationState } from '@/features/shared/types/enums'
import { initApiClient } from '@/features/shared/utils/api'
import { GetServerSidePropsContext } from 'next'

import { ObjectRelationsQuery, StoryBySlugQuery } from 'src/generated/graphql'

export interface GetZoom5StoryQuery {
  story?: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0]
  relations?: ObjectRelationsQuery['relations']
  publicationState?: PublicationState
}

export async function getZoom5StoryTask(
  {
    record,
    locale,
    publicationState,
  }: {
    record: string
    locale: string
    publicationState: PublicationState
  },
  context?: GetServerSidePropsContext
) {
  try {
    const { slug } = extractSlugAndId(record)
    const api = context ? initApiClient(context) : initApiClient(null)
    const storyBySlug = await api?.storyBySlug({
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
