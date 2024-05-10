import { Inject, Injectable } from '@nestjs/common'
import { CustomError } from '../util/customError'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { getUniqueById } from '../util/helpers'
import {
  ComponentModulesImage,
  HomepageComponentsDynamicZone,
  PublicationState,
  Sdk,
  StoriesQuery,
} from 'src/generated/strapi-sdk'
import { ConfigService } from '@nestjs/config'

interface ResultData {
  thumbnail: string
  title: string
  id: string
  categoryType: string
}

const resultDataKeys: KeysToVerify<ResultData> = {
  thumbnail: true,
  title: true,
  id: true,
  categoryType: true,
}

interface ElasticsearchResult {
  hits: {
    total: {
      value: number
    }
    hits: {
      _source: {
        '@id': string
        'https://schema org/url': string[]
        'https://www ica org/standards/RiC/ontology#title': string[]
      }
    }[]
  }
}

const keysToVerifyResponse: KeysToVerify<ElasticsearchResult> = {
  hits: {
    total: {
      value: true,
    },
    hits: [
      {
        _source: {
          // TODO enable when we have fixed issue with empty items in response
          '@id': false,
          'https://schema org/url': false,
          'https://www ica org/standards/RiC/ontology#title': false,
        },
      },
    ],
  },
}

@Injectable()
export class ZoomLevel2Service {
  private readonly SearchByAllEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/datasets/the-other-interface-acceptance/knowledge-graph/services/knowledge-graph/_search'
  private readonly SearchByAllAmountEndpoint = 'textSearchCount/run?'

  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    // private readonly configService: ConfigService,
    private readonly triplyService: TriplyService
  ) {}
  public getData(entity: EntityNames, paginationArgs: PaginationArgs, text?: string) {
    switch (entity) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return this.getZoomLevel2Data({
          type: entity,
          page: paginationArgs.page,
          pageSize: paginationArgs.pageSize,
          text,
        })

      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }

  public getDataAmount(entity: EntityNames, text?: string) {
    switch (entity) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return this.getZoomLevel2DataAmount(entity, text)

      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }

  public async getSearchByAllCategories(
    text: string,
    locale: string,
    paginationArgs: PaginationArgs
  ) {
    const itemsPerPage = paginationArgs.pageSize ?? 12
    const storiesPerPage = 2
    const triplyPerPage = 10

    const storyFilters = {
      title: {
        containsi: text,
      },
    }

    const totalStories = await this.strapiGqlSdk.storiesIds({
      filters: storyFilters,
      locale,
      publicationState: PublicationState.Live,
      pagination: { page: 1, pageSize: 1 },
    })

    const totalTriply = await this.triplyService.postQueryTriplyData<ElasticsearchResult>(
      this.SearchByAllEndpoint,
      keysToVerifyResponse,
      { page: 1, pageSize: 1 },
      text ? { text } : undefined
    )

    const totalStoriesCounter = totalStories?.stories?.meta?.pagination?.total ?? 0
    const totalTriplyCounter = totalTriply.hits.total.value ?? 0

    // Calculate offsets
    const currentPage = paginationArgs.page
    const offsetStories = (currentPage - 1) * storiesPerPage
    const offsetTriply = (currentPage - 1) * triplyPerPage

    let storiesToFetch = Math.max(0, Math.min(storiesPerPage, totalStoriesCounter - offsetStories))
    let triplyToFetch = Math.max(0, Math.min(triplyPerPage, totalTriplyCounter - offsetTriply))

    // Adjust the fetch sizes to not exceed the total per page
    if (storiesToFetch + triplyToFetch > itemsPerPage) {
      if (storiesToFetch > storiesPerPage) {
        triplyToFetch = itemsPerPage - storiesToFetch
      } else {
        storiesToFetch = itemsPerPage - triplyToFetch
      }
    }

    // Calculate correct pages based on adjusted fetches
    const storyPage = Math.ceil(offsetStories / storiesPerPage) + 1
    const triplyPage = Math.ceil(offsetTriply / triplyPerPage) + 1

    const stories = await this.strapiGqlSdk.stories({
      filters: {
        title: {
          containsi: text,
        },
      },
      locale,
      publicationState: PublicationState.Live,
      pagination: { page: storyPage, pageSize: storiesToFetch },
    })

    const result = await this.triplyService.postQueryTriplyData<ElasticsearchResult>(
      this.SearchByAllEndpoint,
      keysToVerifyResponse,
      { page: triplyPage, pageSize: triplyToFetch },
      text ? { text } : undefined
    )

    const formattedStories = this.storyToRecordMapper(stories)?.filter(Boolean) ?? []
    const formattedTriplyResult = this.elasticSearchToRecordMapper(result)?.filter(Boolean) ?? []

    return {
      page: paginationArgs.page,
      nodes: [...formattedStories, ...formattedTriplyResult],
      total: totalStoriesCounter + totalTriplyCounter,
    }
  }

  public async getSearchByAllCategoriesAmount(text: string) {
    const countResult = await this.triplyService.queryTriplyData<{ count?: string }>(
      this.SearchByAllAmountEndpoint,
      { count: true },
      undefined,
      text ? { text } : undefined
    )

    const total = countResult?.data.pop()?.count ?? '0'

    return {
      total,
    }
  }

  private async getZoomLevel2Data({
    type,
    page = 1,
    pageSize = 48,
    text,
  }: {
    type: EntityNames
    page?: number
    pageSize?: number
    text?: string
  }) {
    const uri = TriplyUtils.getUriForLevel2Data({ type, text, isDataAmount: false })

    const result = await this.triplyService.queryTriplyData<ResultData>(
      uri,
      resultDataKeys,
      { page, pageSize },
      text ? { text } : undefined
    )

    const uniqueNodes = getUniqueById(result?.data).map(res => ({
      thumbnail: res.thumbnail,
      title: res.title,
      id: res.id,
    }))

    return {
      page,
      nodes: uniqueNodes,
    }
  }

  private async getZoomLevel2DataAmount(type: EntityNames, text?: string) {
    const uri = TriplyUtils.getUriForLevel2Data({ type, text, isDataAmount: true })

    const countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
      uri,
      { total: true },
      undefined,
      text ? { text } : undefined
    )

    const total = countResult?.data.pop()?.total ?? '0'

    return {
      total,
    }
  }

  private extractTypeAndId(url: string): { type: string; id: string } {
    const match = /id\/([^\/]+)\/(\d+)/.exec(url)
    return {
      type: match ? match[1] : '',
      id: match ? match[2] : '',
    }
  }

  private storyToRecordMapper(stories: StoriesQuery) {
    return stories.stories?.data?.map(story => {
      const components = story?.attributes?.components
      const imageComponent = components?.find(
        component => component?.__typename === 'ComponentModulesImage'
      ) as ComponentModulesImage

      const url = this.imageBasePath(imageComponent?.image.data?.attributes?.url ?? '')

      return {
        title: story?.attributes?.title ?? '',
        thumbnail: url,
        id: story.id,
        type: EntityNames.Stories,
      }
    })
  }

  private elasticSearchToRecordMapper(data: ElasticsearchResult) {
    return data.hits.hits.map(item => {
      const { type, id } = this.extractTypeAndId(item._source['@id'])

      if (!id || !type) {
        return null
      }

      const thumbnail = item._source['https://schema org/url']
        ? item._source['https://schema org/url'][0]
        : ''
      const title = item._source['https://www ica org/standards/RiC/ontology#title']
        ? item._source['https://www ica org/standards/RiC/ontology#title'][0]
        : ''

      return {
        thumbnail: thumbnail,
        title: title,
        id: id,
        type: this.triplyService.mapTypeToEnum(type.toLowerCase()),
      }
    })
  }

  private imageBasePath(url: string): string {
    if (!url) {
      return url
    }

    try {
      new URL(url)
      return url
    } catch {
      const baseURL = 'http://localhost:1337'
      return new URL(url, baseURL).toString()
    }
  }
}
