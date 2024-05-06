import { Inject, Injectable } from '@nestjs/common'
import { Sdk } from '../../generated/strapi-sdk'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@Injectable()
export class StoryService {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  public async getStoryDataForZoomLevel1() {
    const storiesTotal = await this.strapiGqlSdk.storiesTotal()
    return {
      name: EntityNames.Stories,
      count: storiesTotal.stories?.meta.pagination.total || 0,
      id: EntityNames.Stories,
    }
  }

  public async getStoryById(id: string, locale: string) {
    const story = await this.strapiGqlSdk.storyWithoutRelations({ id, locale })
    return story.story
  }

  public async getStorySiblings(parentId: string, currentStoryId: string, locale: string) {
    const parentRes = await this.strapiGqlSdk.story({ id: parentId, locale })

    const parentStory = parentRes?.story?.data
    const siblingsStories = parentStory?.attributes?.child_stories?.data
    const siblings = siblingsStories?.filter(s => s.id !== currentStoryId)
    return siblings
  }

  public async getStoryRecordHover(id: string) {
    const res = await this.strapiGqlSdk.storyWithoutRelations({ id })
    const author = `${res.story?.data?.attributes?.author?.data?.attributes?.firstName} ${res.story?.data?.attributes?.author?.data?.attributes?.lastName}`
    // TODO: HNIT-1833 - throw on errors (no data or multiple resutls that don't match)
    return {
      title: res.story?.data?.attributes?.title,
      author,
      description: res.story?.data?.attributes?.shortDescription,
    }
  }
}
