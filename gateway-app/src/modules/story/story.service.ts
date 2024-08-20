import { Inject, Injectable } from '@nestjs/common'
import { Sdk } from '../../generated/strapi-sdk'
import { EntityNames } from '../util/entityNames.type'
import { Locale } from '../util/locale.type'
import { AuthorEntityResponse } from 'src/modules/author/author.type'
import { LocationRelationResponseCollection } from 'src/modules/location/location.type'
import {
  StoryComponentsDynamicZone,
  StoryEntity,
  StoryRelationResponseCollection,
} from 'src/modules/story/story.type'
import { StoryEntityResponse } from 'src/modules/story/story.types.circular'
import { ComponentCorePublicationDate } from 'src/modules/strapi/components/core/publicationDate'
import { ComponentCoreTimeframe } from 'src/modules/strapi/components/core/timeframe'
import { ComponentModulesButtonsModule } from 'src/modules/strapi/components/modules/buttonsModule'
import { ThemeRelationResponseCollection } from 'src/modules/theme/theme.type'
import { TriplyRecordRelationResponseCollection } from 'src/modules/triplyRecord/triplyRecord.type'

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

  public async getStoryById(id: string, locale: Locale) {
    const story = await this.strapiGqlSdk.storyWithoutRelations({ id, locale })
    return story.story
  }

  public async getStorySiblings(parentId: string, currentStoryId: string, locale: Locale) {
    const parentRes = await this.strapiGqlSdk.story({ id: parentId, locale })

    const parentStory = parentRes?.story?.data
    const siblingsStories = parentStory?.attributes?.child_stories?.data
    const siblings = siblingsStories?.filter(s => s.id !== currentStoryId)
    return siblings
  }

  public getAuthors = async (ids: readonly string[]): Promise<AuthorEntityResponse[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getLocations = async (
    ids: readonly string[]
  ): Promise<LocationRelationResponseCollection[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getThemes = async (ids: readonly string[]): Promise<ThemeRelationResponseCollection[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getParentStory = async (ids: readonly string[]): Promise<StoryEntityResponse[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getChildStories = async (
    ids: readonly string[]
  ): Promise<StoryRelationResponseCollection[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getSiblings = async (ids: readonly string[]): Promise<StoryEntity[][]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getComponents = async (
    ids: readonly string[]
    // eslint-disable-next-line prettier/prettier
  ): Promise<(typeof StoryComponentsDynamicZone)[][]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getLocalizations = async (
    ids: readonly string[]
  ): Promise<StoryRelationResponseCollection[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getTriplyRecords = async (
    ids: readonly string[]
  ): Promise<TriplyRecordRelationResponseCollection[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getStoryLinks = async (
    ids: readonly string[]
  ): Promise<ComponentModulesButtonsModule[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getTimeframe = async (ids: readonly string[]): Promise<ComponentCoreTimeframe[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getPublicationDate = async (
    ids: readonly string[]
  ): Promise<ComponentCorePublicationDate[]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }
}
