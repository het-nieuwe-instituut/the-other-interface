import { Inject, Injectable } from '@nestjs/common'
import { Sdk } from '../../generated/strapi-sdk'
import { EntityNames } from '../util/entityNames.type'
import { Locale } from '../util/locale.type'
import { AuthorEntityResponse } from 'src/modules/author/author.type'
import { LocationEntity } from 'src/modules/location/location.type'
import { StoryComponentsDynamicZone, StoryEntity } from 'src/modules/story/story.type'
import { StoryEntityResponse } from 'src/modules/story/story.types.circular'
import { ComponentCorePublicationDate } from 'src/modules/strapi/components/core/publicationDate'
import { ComponentCoreTimeframe } from 'src/modules/strapi/components/core/timeframe'
import { ComponentModulesButtonsModule } from 'src/modules/strapi/components/modules/buttonsModule'
import { ThemeEntity } from 'src/modules/theme/theme.type'
import { TriplyRecordEntity } from 'src/modules/triplyRecord/triplyRecord.type'

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

  //   TODO: implement this for the sibling stories
  //   public async getStorySiblings(parentId: string, currentStoryId: string, locale: Locale) {
  //     const parentRes = await this.strapiGqlSdk.story({ id: parentId, locale })

  //     const parentStory = parentRes?.story?.data
  //     const siblingsStories = parentStory?.attributes?.child_stories?.data
  //     const siblings = siblingsStories?.filter(s => s.id !== currentStoryId)
  //     return siblings
  //   }

  public getAuthors = async (ids: readonly string[]): Promise<(AuthorEntityResponse | null)[]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithAuthor({ ids: [...ids] })
    if (!res.stories) {
      return []
    }

    return ids.map(id => {
      const author = res.stories?.data.find(s => s.id === id)?.attributes?.author
      if (!author) {
        return null
      }

      return author as AuthorEntityResponse
    })
  }

  public getLocations = async (ids: readonly string[]): Promise<LocationEntity[][]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithLocations({ ids: [...ids] })
    if (!res.stories) {
      return []
    }

    return ids.map(id => {
      const locations = res.stories?.data.find(s => s.id === id)?.attributes?.locations
      if (!locations) {
        return []
      }

      return locations.data as LocationEntity[]
    })
  }

  public getThemes = async (ids: readonly string[]): Promise<ThemeEntity[][]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithThemes({ ids: [...ids] })
    if (!res.stories) {
      return []
    }

    return ids.map(id => {
      const themes = res.stories?.data.find(s => s.id === id)?.attributes?.themes
      if (!themes) {
        return []
      }

      return themes.data as ThemeEntity[]
    })
  }

  public getParentStory = async (
    ids: readonly string[]
  ): Promise<(StoryEntityResponse | null)[]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithParentStory({ ids: [...ids] })
    if (!res.stories) {
      return []
    }

    return ids.map(id => {
      const parentStory = res.stories?.data.find(s => s.id === id)?.attributes?.parent_story
      if (!parentStory) {
        return null
      }

      return parentStory as StoryEntityResponse
    })
  }

  public getChildStories = async (ids: readonly string[]): Promise<StoryEntity[][]> => {
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

  public getLocalizations = async (ids: readonly string[]): Promise<StoryEntity[][]> => {
    if (!ids.length) {
      return []
    }

    // TODO
    return Promise.resolve([])
  }

  public getTriplyRecords = async (ids: readonly string[]): Promise<TriplyRecordEntity[][]> => {
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
