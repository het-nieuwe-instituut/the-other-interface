import { forwardRef, Inject, Injectable } from '@nestjs/common'
import {
  Enum_Triplyrecord_Type,
  PublicationState,
  Sdk,
  StoriesQuery,
} from 'src/generated/strapi-sdk'
import { StrapiUtils } from '../strapi/strapi.utils'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
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

interface PaginatedTriplyRecordRelationsType {
  story: {
    data: {
      id: string
      attributes:
        | {
            __typename?: 'TriplyRecordEntity' | undefined
            id?: string | null | undefined
            attributes?:
              | {
                  __typename?: 'TriplyRecord' | undefined
                  recordId: string
                  type: Enum_Triplyrecord_Type
                }
              | null
              | undefined
          }[]
        | undefined
    }
  }
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
        return this.getStoryRelations(id, lang, paginationArgs?.page)
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

  public async storyRelationsCount(storyId: string, lang?: string) {
    // counts for triply records related to story
    const [resTriplyArchives, resTriplyPublications, resTriplyPeople, resTriplyObjects] =
      await Promise.all(
        [
          Enum_Triplyrecord_Type.Archive,
          Enum_Triplyrecord_Type.Publication,
          Enum_Triplyrecord_Type.People,
          Enum_Triplyrecord_Type.Object,
        ].map(type =>
          this.strapiGqlSdk.triplyRecords({
            filters: {
              and: [{ stories: { id: { eq: storyId } } }, { type: { eq: type } }],
            },
          })
        )
      )

    // counts for strapi stories related to story
    const themes = await this.strapiGqlSdk.themes({
      filters: { stories: { id: { eq: storyId } } },
      locale: lang || 'nl',
    })

    const themeIds = themes.themes?.data?.flatMap(theme => {
      if (theme.id) return theme.id
      return []
    })

    const stories = await this.strapiGqlSdk.storiesIds({
      filters: { themes: { id: { in: themeIds } } },
      locale: lang || 'nl',
      publicationState: PublicationState.Live,
      pagination: { page: 1, pageSize: 500 },
    })

    return {
      linkedStoryCount: stories.stories?.data.length || 0,
      linkedTriplyRecords: {
        archives: resTriplyArchives.triplyRecords?.meta.pagination.total,
        people: resTriplyPeople.triplyRecords?.meta.pagination.total,
        publications: resTriplyPublications.triplyRecords?.meta.pagination.total,
        objects: resTriplyObjects.triplyRecords?.meta.pagination.total,
      },
    }
  }

  private async getStoryRelations(id: string, lang?: string, page?: number) {
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

    const [siblingsRes] = await Promise.all([
      parentId && lang
        ? this.storyService.getStorySiblings(parentId, id, lang)
        : Promise.resolve([]),
    ])

    // related stories from strapi (based on story theme)
    const themes = await this.strapiGqlSdk.themes({
      filters: { stories: { id: { eq: storyId } } },
      locale: lang || 'nl',
    })

    const themeIds = themes.themes?.data?.flatMap(theme => {
      if (theme.id) return theme.id
      return []
    })

    const paginatedStoryRelations = await this.strapiGqlSdk.stories({
      filters: { themes: { id: { in: themeIds } } },
      locale: lang || 'nl',
      publicationState: PublicationState.Live,
      pagination: { page, pageSize: 2 },
    })

    const siblingsIds = siblingsRes?.filter(s => !!s?.id).map(s => s.id as string) || []

    const storyIds = this.extractStoryIds(paginatedStoryRelations, storyId)
    const storiesRelationsIds = Array.from(
      new Set([...storyIds, ...childrensIds, ...siblingsIds, parentId].filter(Boolean))
    )

    // related records (archives, objects, people, publications) from triply (based on story theme)
    const paginatedTriplyRecordRelations = await Promise.all(
      [
        Enum_Triplyrecord_Type.Archive,
        Enum_Triplyrecord_Type.Object,
        Enum_Triplyrecord_Type.People,
        Enum_Triplyrecord_Type.Publication,
      ].map(async entityName => {
        const data = await this.strapiGqlSdk.storyTriplyRelations({
          id: storyId,
          page,
          pageSize: 2,
          type: entityName,
        })
        return {
          story: {
            data: {
              id: id,
              attributes: data.story?.data?.attributes?.triplyRecords?.data,
            },
          },
        }
      })
    )

    const data = this.groupData(paginatedTriplyRecordRelations)

    // combine it all to return
    return [...data, { type: EntityNames.Stories, paginatedRelations: storiesRelationsIds || [] }]
  }

  private async getStoryRelationsForLinkedItem(id: string, entityName: EntityNames, page?: number) {
    const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecord({
      recordId: id,
      type: StrapiUtils.getRecordTypeForEntityName(entityName),
      pagination: { page: page || 1, pageSize: 2 },
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

  private groupData(recordRelations: PaginatedTriplyRecordRelationsType[]) {
    const data = recordRelations.flatMap(records => {
      if (!records?.story?.data?.attributes) return []

      const newRecord = records?.story?.data?.attributes.reduce((acc, curr) => {
        if (!curr.attributes?.type || curr.attributes?.recordId.length < 1) return acc
        if (acc.type) {
          return {
            ...acc,
            paginatedRelations: [...acc.paginatedRelations, curr.attributes?.recordId],
          }
        } else {
          return {
            ...acc,
            type: StrapiUtils.getEntityNameForRecordType(
              curr.attributes?.type as Enum_Triplyrecord_Type
            ),
            paginatedRelations: [curr.attributes?.recordId],
          }
        }
      }, {} as { type: EntityNames; paginatedRelations: string[] })

      if (!newRecord.type || newRecord.paginatedRelations.length < 1) return []
      return newRecord
    })

    return data
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

  private extractStoryIds(response: StoriesQuery, excludeId?: string): string[] {
    const stories = response.stories?.data || []

    const storyIds: string[] = []

    for (const story of stories) {
      if (!story.id || story.id === excludeId) {
        continue
      } else {
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
