import { Inject, Injectable } from '@nestjs/common'
import { CustomError } from '../util/customError'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ElasticsearchResult, KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { getUniqueById } from '../util/helpers'
import {
  ComponentModulesImage,
  PublicationState,
  Sdk,
  StoriesQuery,
} from 'src/generated/strapi-sdk'
import { StrapiUtils } from '../strapi/strapi.utils'

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

@Injectable()
export class ZoomLevel2Service {
  private readonly SearchByAllEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/datasets/the-other-interface-acceptance/knowledge-graph/services/knowledge-graph/_search'
  private readonly SearchByAllAmountEndpoint = 'textSearchCount/run?'

  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
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

    const totalTriply = await this.triplyService.postQueryTriplyData(
      this.SearchByAllEndpoint,
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

    const stories =
      storiesToFetch > 0
        ? await this.strapiGqlSdk.stories({
            filters: {
              title: {
                containsi: text,
              },
            },
            locale,
            publicationState: PublicationState.Live,
            pagination: { page: storyPage, pageSize: storiesToFetch },
          })
        : undefined

    const result =
      triplyToFetch > 0
        ? await this.triplyService.postQueryTriplyData(
            this.SearchByAllEndpoint,
            { page: triplyPage, pageSize: triplyToFetch },
            text ? { text } : undefined
          )
        : undefined

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

  private storyToRecordMapper(stories?: StoriesQuery) {
    if (!stories) {
      return null
    }
    return stories.stories?.data?.map(story => {
      const components = story?.attributes?.components
      const imageComponent = components?.find(
        component => component?.__typename === 'ComponentModulesImage'
      ) as ComponentModulesImage

      const url = StrapiUtils.getImagePath(imageComponent?.image.data?.attributes?.url)

      return {
        title: story?.attributes?.title ?? '',
        thumbnail: url,
        id: story.id,
        type: EntityNames.Stories,
      }
    })
  }

  private elasticSearchToRecordMapper(data?: ElasticsearchResult) {
    if (!data || !data.hits || !data.hits.hits) {
      return null
    }

    return data.hits.hits.map(item => {
      const type = TriplyUtils.getEntityNameFromUri(item._id)
      const id = TriplyUtils.getIdFromUri(item._id)

      if (!id || !type) {
        return null
      }

      const thumbnailLinks = item._source['https://schema org/url'] || []
      if (thumbnailLinks?.length > 1) {
        throw CustomError.external('multiple thumbnails found')
      }

      const title =
        item._source['https://www ica org/standards/RiC/ontology#title']?.join(', ') || ''

      return {
        thumbnail: thumbnailLinks?.[0],
        title: title,
        id: id,
        type,
      }
    })
  }
}
