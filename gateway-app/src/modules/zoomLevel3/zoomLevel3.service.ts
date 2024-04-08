import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { Enum_Triplyrecord_Type, Sdk, StoriesLinkedToThemeQuery } from 'src/generated/strapi-sdk'
import { StrapiUtils } from '../strapi/strapi.utils'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getRandom2ItemsFromArray } from '../util/helpers'
import { CustomError } from '../util/customError'
import { StoryService } from '../story/story.service'
import { PaginationArgs } from '../util/paginationArgs.type'

interface ZoomLevel3RelationData {
  idRelation: string
}
const zoomLevel3RelationDataKeys: KeysToVerify<ZoomLevel3RelationData> = {
  idRelation: true,
}

// key is relation graph
type GroupedRelationData = Partial<Record<EntityNames, RelationData>>

interface RelationData {
  count: string
  // key is sample uri
  groupedSampleData: Record<string, SampleData>
}

interface SampleData {
  label: string
  // key is relation graph
  groupedRelationData: GroupedRelationData
}

export enum TriplyExternalSourceEnum {
  all = 'all',
  rkd = 'rkd',
  wikidata = 'wikidata',
  getty = 'getty',
}

@Injectable()
export class ZoomLevel3Service {
  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly objectsService: ObjectsService,
    private readonly peopleService: PeopleService,
    @Inject(forwardRef(() => PublicationsService))
    private readonly publicationsService: PublicationsService,
    private readonly archivesService: ArchivesService,
    private readonly triplyService: TriplyService,
    private readonly storyService: StoryService
  ) {}

  public async getRelations(
    id: string,
    type: EntityNames,
    lang?: string,
    paginationArgs?: PaginationArgs
  ) {
    switch (type) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return [
          ...(await this.getTriplyRelatedRecords(id, type, paginationArgs?.page)),
          await this.getStoryRelationsForLinkedItem(id, type, paginationArgs?.page),
        ]
      case EntityNames.Stories:
        return this.getStoryRelations(id, lang)
      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  public async getDetail(id: string, type: EntityNames) {
    switch (type) {
      case EntityNames.Objects: {
        return this.objectsService.getZoomLevel3Data(id)
      }
      case EntityNames.People: {
        return this.peopleService.getZoomLevel3Data(id)
      }
      case EntityNames.Publications: {
        return this.publicationsService.getZoomLevel3Data(id)
      }
      case EntityNames.Archives: {
        return this.archivesService.getZoomLevel3Data(id)
      }

      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  private groupTriplyRecordsByType(
    triplyRecords: Array<{
      attributes?: { recordId: string; type: Enum_Triplyrecord_Type | string } | null
    }>
  ): Record<Enum_Triplyrecord_Type | string, string[]> {
    const groupedRecords: Record<Enum_Triplyrecord_Type | string, string[]> = {}

    triplyRecords.forEach(record => {
      if (!record.attributes) return

      const { type, recordId } = record.attributes

      if (!groupedRecords[type]) {
        groupedRecords[type] = []
      }

      groupedRecords[type].push(recordId)
    })

    return groupedRecords
  }

  private async getStoryRelations(id: string, lang?: string) {
    const res = await this.strapiGqlSdk.storyByLocale({ id })
    let story = res?.story?.data

    if (story?.attributes?.locale !== lang && lang) {
      story = story?.attributes?.localizations?.data?.find(l => l.attributes?.locale === lang)
    }

    const storyId = story?.id
    const parentId = story?.attributes?.story?.data?.id
    const childrensIds = story?.attributes?.stories?.data?.map(s => s.id) || []

    if (!storyId) {
      throw CustomError.internalCritical('Story not found')
    }

    const [storyRelations, relations, siblingsRes] = await Promise.all([
      this.strapiGqlSdk.storiesLinkedToTheme({ id: storyId, locale: lang }),
      this.strapiGqlSdk.storyTriplyRelations({ id: storyId }),
      parentId && lang
        ? this.storyService.getStorySiblings(parentId, id, lang)
        : Promise.resolve([]),
    ])

    const siblingsIds = siblingsRes?.filter(s => !!s?.id).map(s => s.id as string) || []
    const triplyRecords = (relations.story?.data?.attributes?.triplyRecords?.data || []).filter(
      r => !!r.attributes?.recordId
    )

    const groupedRecords = this.groupTriplyRecordsByType(triplyRecords)

    const data = Object.entries(groupedRecords).map(([key, recordIds]) => {
      const type = StrapiUtils.getEntityNameForRecordType(key as Enum_Triplyrecord_Type)
      const randomRecordIds = getRandom2ItemsFromArray(recordIds)

      return {
        type,
        paginatedRelations: randomRecordIds ?? [],
      }
    })

    const storyIds = this.extractStoryIds(storyRelations, storyId)
    const storiesRelationsIds = Array.from(
      new Set([...storyIds, ...childrensIds, ...siblingsIds, parentId].filter(Boolean))
    )

    return [...data, { type: EntityNames.Stories, paginatedRelations: storiesRelationsIds || [] }]
  }

  private async getStoryRelationsForLinkedItem(id: string, entityName: EntityNames, page?: number) {
    const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecord({
      recordId: id,
      type: StrapiUtils.getRecordTypeForEntityName(entityName),
      page: page || 1,
      pageSize: 2,
    })

    const randomStories = (res.stories?.data || [])
      .filter(s => !!s?.id && !!s.attributes)
      .map(s => s?.id || '')

    return {
      type: EntityNames.Stories,
      total: res.stories?.data.length || 0,
      paginatedRelations: randomStories ?? [],
    }
  }

  private async getTriplyRelatedRecords(id: string, recordType: EntityNames, page?: number) {
    const data = await Promise.all(
      [EntityNames.Archives, EntityNames.Objects, EntityNames.People, EntityNames.Publications].map(
        async entityName => {
          try {
            const data = await this.getRelationDataFromTriply({
              id,
              type: entityName,
              recordType,
              page,
            })

            return {
              id,
              type: entityName,
              paginatedRelations: data.map(d => d?.idRelation).filter(d => !!d),
            }
          } catch (error) {
            console.error(`Error fetching data for entity ${entityName}:`, error)
            return {
              id,
              type: entityName,
              paginatedRelations: [],
            }
          }
        }
      )
    )

    return data
  }

  private async getRelationDataFromTriply({
    id,
    type,
    recordType,
    page = 1,
  }: {
    id: string
    type: EntityNames
    recordType: EntityNames
    page?: number
  }) {
    const uri = TriplyUtils.getUriForTypeAndId(type, id, recordType)

    const res = await this.triplyService.queryTriplyData<ZoomLevel3RelationData>(
      `${uri}`,
      zoomLevel3RelationDataKeys,
      { page, pageSize: 2 },
      { id }
    )

    return res.data
  }

  // private getGroupedRelationData(data: ZoomLevel3RelationData[], type: EntityNames) {
  //   const groupedData: GroupedRelationData = {}

  //   for (const relationData of data) {
  //     // const type = TriplyUtils.getEntityNameFromGraph(
  //     //   relationData.graph,
  //     //   relationData.sample_extern_1
  //     // )

  //     if (!groupedData[type]) {
  //       //TODO here we add total later
  //       groupedData[type] = { count: relationData.count, groupedSampleData: {} }
  //     }

  //     const group = groupedData[type] as RelationData

  //     if (externalEntityNames.includes(type)) {
  //       if (relationData.sample_extern_1) {
  //         group.groupedSampleData[relationData.sample_extern_1] = {
  //           label: relationData.sample_extern_1_label || '',
  //           groupedRelationData: {},
  //         }
  //       }

  //       if (relationData.sample_extern_2) {
  //         group.groupedSampleData[relationData.sample_extern_2] = {
  //           label: relationData.sample_extern_2_label || '',
  //           groupedRelationData: {},
  //         }
  //       }

  //       continue
  //     }

  //     if (!group.groupedSampleData[relationData.sample]) {
  //       group.groupedSampleData[relationData.sample] = {
  //         label: relationData.sample_label,
  //         groupedRelationData: {},
  //       }
  //     }

  //     const groupSample = group.groupedSampleData[relationData.sample]
  //     const relatedType = TriplyUtils.getEntityNameFromGraph(relationData.graph_2)

  //     if (!groupSample.groupedRelationData[relatedType]) {
  //       groupSample.groupedRelationData[relatedType] = {
  //         count: relationData.count_2,
  //         groupedSampleData: {},
  //       }
  //     }
  //   }

  //   return groupedData
  // }

  // private getFormattedGroupData(groupedData: GroupedRelationData) {
  //   const formattedData: ZoomLevel3RelationsType[] = []

  //   Object.entries(groupedData).map(([type, v]) => {
  //     formattedData.push({
  //       type: type as EntityNames,
  //       total: parseInt(v.count, 10),
  //     })
  //   })

  //   return formattedData
  // }

  // expects key to be record uri
  // private formatTriplySampleData(key: string, sampleData: SampleData) {
  //   return {
  //     id: TriplyUtils.getIdFromUri(key),
  //     type: TriplyUtils.getEntityNameFromUri(key),
  //     title: sampleData.title,
  //     relations,
  //   }
  // }

  private extractStoryIds(response: StoriesLinkedToThemeQuery, excludeId?: string): string[] {
    const themesData = response?.story?.data?.attributes?.themes?.data || []

    const storyIds: string[] = []

    for (const theme of themesData) {
      for (const story of theme?.attributes?.stories?.data || []) {
        if (!story.id || story.id === excludeId) {
          continue
        }
        storyIds.push(story.id)
      }
    }

    // Remove duplicates if there are any
    return [...new Set(storyIds)]
  }

  public async getStoriesRelationsForRecord(id: string, type: EntityNames, lang: string) {
    const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecordExtended({
      recordId: id,
      type: StrapiUtils.getRecordTypeForEntityName(type),
      lang,
    })

    const stories = res.stories?.data?.filter(s => !!s?.id && !!s.attributes) || []

    return {
      type: EntityNames.Stories,
      total: res.stories?.data.length || 0,
      stories,
    }
  }
}
