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

  public getMultipleAuthors = async (
    ids: readonly string[]
  ): Promise<(AuthorEntityResponse[] | null)[]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithAuthors({ ids: [...ids] })
    if (!res.stories) {
      return []
    }

    return []

    // return ids.map(id => {
    //   const author = res.stories?.data.find(s => s.id === id)?.attributes?.authors
    //   if (!author) {
    //     return null
    //   }

    //   return author as AuthorEntityResponse
    // })
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

    const res = await this.strapiGqlSdk.storiesWithChildStories({ ids: [...ids] })

    return ids.map(id => {
      const childStories = res.stories?.data.find(d => d.id === id)?.attributes?.child_stories
      if (!childStories) {
        return []
      }

      return childStories.data as StoryEntity[]
    })
  }

  //   TODO: implement this for the sibling stories
  //   public async getStorySiblings(parentId: string, currentStoryId: string, locale: Locale) {
  //     const parentRes = await this.strapiGqlSdk.story({ id: parentId, locale })

  //     const parentStory = parentRes?.story?.data
  //     const siblingsStories = parentStory?.attributes?.child_stories?.data
  //     const siblings = siblingsStories?.filter(s => s.id !== currentStoryId)
  //     return siblings
  //   }

  public getSiblings = async (ids: readonly string[]): Promise<StoryEntity[][]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithSiblings({ ids: [...ids] })

    return ids.map(id => {
      const sbilings = res.stories?.data.find(d => d.id === id)?.attributes?.parent_story?.data
        ?.attributes?.child_stories
      if (!sbilings) {
        return []
      }

      return sbilings.data as StoryEntity[]
    })
  }

  public getComponents = async (
    ids: readonly string[]
    // eslint-disable-next-line prettier/prettier
  ): Promise<(typeof StoryComponentsDynamicZone)[][]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithComponents({ ids: [...ids] })

    return ids.map(id => {
      const componenets = res.stories?.data.find(d => d.id === id)?.attributes?.components
      if (!componenets) {
        return []
      }

      // eslint-disable-next-line prettier/prettier
      return componenets as (typeof StoryComponentsDynamicZone)[]
    })
  }

  public getLocalizations = async (ids: readonly string[]): Promise<StoryEntity[][]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithLocalizations({ ids: [...ids] })

    return ids.map(id => {
      const localizations = res.stories?.data.find(d => d.id === id)?.attributes?.localizations
      if (!localizations) {
        return []
      }

      return localizations.data as StoryEntity[]
    })
  }

  public getTriplyRecords = async (ids: readonly string[]): Promise<TriplyRecordEntity[][]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithTriplyRecords({ ids: [...ids] })

    return ids.map(id => {
      const triplyRecords = res.stories?.data.find(d => d.id === id)?.attributes?.triplyRecords
      if (!triplyRecords) {
        return []
      }

      return triplyRecords.data as TriplyRecordEntity[]
    })
  }

  public getStoryLinks = async (
    ids: readonly string[]
  ): Promise<(ComponentModulesButtonsModule | null)[]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithStoryLinks({ ids: [...ids] })

    return ids.map(id => {
      const links = res.stories?.data.find(d => d.id === id)?.attributes?.storyLinks
      if (!links) {
        return null
      }

      return links as ComponentModulesButtonsModule
    })
  }

  public getTimeframe = async (
    ids: readonly string[]
  ): Promise<(ComponentCoreTimeframe | null)[]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithTimeframe({ ids: [...ids] })

    return ids.map(id => {
      const timeframe = res.stories?.data.find(d => d.id === id)?.attributes?.timeframe
      if (!timeframe) {
        return null
      }

      return timeframe
    })
  }

  public getPublicationDate = async (
    ids: readonly string[]
  ): Promise<(ComponentCorePublicationDate | null)[]> => {
    if (!ids.length) {
      return []
    }

    const res = await this.strapiGqlSdk.storiesWithPublicationDate({ ids: [...ids] })

    return ids.map(id => {
      const pubDate = res.stories?.data.find(d => d.id === id)?.attributes?.publicationDate
      if (!pubDate) {
        return null
      }

      return pubDate as ComponentCorePublicationDate
    })
  }
}
