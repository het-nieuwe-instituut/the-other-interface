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
// import { ZoomLevel3RelatedObjectsArgs } from './zoomLevel3.type'
import { CustomError } from '../util/customError'

interface ZoomLevel3RelationData {
  id: string
}
const zoomLevel3RelationDataKeys: KeysToVerify<ZoomLevel3RelationData> = {
  id: true,
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
  private relationsEndpoint = '/zoom-3-relations/run?record='
  private relatedObjectsEndpoint = '/zoom-3-relatedObjects/run?record='

  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly objectsService: ObjectsService,
    private readonly peopleService: PeopleService,
    @Inject(forwardRef(() => PublicationsService))
    private readonly publicationsService: PublicationsService,
    private readonly archivesService: ArchivesService,
    private readonly triplyService: TriplyService
  ) {}

  public async getRelations(id: string, type: EntityNames, lang?: string) {
    switch (type) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return [
          ...(await this.getTriplyRelatedRecords(id, type)),
          await this.getStoryRelationsForLinkedItem(id, type),
        ]
      case EntityNames.Stories:
        return this.getStoryRelations(id, lang)
      case EntityNames.External:
      // TODO
      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  public async getDetail(id: string, type: EntityNames) {
    console.log('type', type, EntityNames.Archives)
    switch (type) {
      case EntityNames.Objects: {
        return this.objectsService.getZoomLevel3Data(id)
      }
      case EntityNames.People: {
        return this.peopleService.getZoomLevel3Data(id)
      }
      case EntityNames.Publications: {
        return this.publicationsService.getZoomLevel3Data(type, id)
      }
      case EntityNames.Archives: {
        return this.archivesService.getZoomLevel3Data(EntityNames.Archives, id)
      }
      case EntityNames.Stories:
      case EntityNames.External:
      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  private async getStoryRelations(id: string, lang?: string) {
    const storyRelations = await this.strapiGqlSdk.storiesLinkedToTheme({ id, locale: lang })
    const relations = await this.strapiGqlSdk.storyTriplyRelations({ id })
    const triplyRecords = (relations.story?.data?.attributes?.triplyRecords?.data || []).filter(
      r => !!r.attributes?.recordId
    )

    const groupedRecords: Record<Enum_Triplyrecord_Type | string, string[]> = {}
    for (const record of triplyRecords) {
      if (!record.attributes?.recordId) {
        continue
      }

      if (!groupedRecords[record.attributes.type]) {
        groupedRecords[record.attributes.type] = []
      }

      groupedRecords[record.attributes.type].push(record.attributes.recordId)
    }

    const data = Object.entries(groupedRecords).map(([key, recordIds]) => {
      const type = StrapiUtils.getEntityNameForRecordType(key as Enum_Triplyrecord_Type)
      const randomRecordIds = getRandom2ItemsFromArray(recordIds)
      // const randomRelations = await Promise.all(randomRecordIds.map(id => this.getDetail(id, type)))

      return {
        type,
        randomRelations: randomRecordIds,
      }
    })

    const storyIds = this.extractStoryIds(storyRelations)
    // const randomRecordIds = getRandom2ItemsFromArray(storyIds)
    // const stories = await this.strapiGqlSdk.storiesByIds({ storiesIds: randomRecordIds })
    // const data = await Promise.all(promises)

    return [...data, { type: EntityNames.Stories, randomRelations: storyIds || [] }]
  }

  private async getStoryRelationsForLinkedItem(id: string, entityName: EntityNames) {
    const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecord({
      recordId: id,
      type: StrapiUtils.getRecordTypeForEntityName(entityName),
    })

    const randomStories = getRandom2ItemsFromArray(res.stories?.data || [])
      .filter(s => !!s.id && !!s.attributes)
      .map(s => s?.id || '')

    return {
      type: EntityNames.Stories,
      total: res.stories?.data.length || 0,
      randomRelations: randomStories,
    }
  }

  private async getTriplyRelatedRecords(
    id: string,
    type: EntityNames,
    externalSource?: TriplyExternalSourceEnum
  ) {
    const entityNames = Object.values(EntityNames)
    const data = await Promise.all(
      entityNames.map(async entityName => {
        // const triplyType =  StrapiUtils.getRecordTypeForEntityName(entityName)
        return {
          id,
          type: entityName,
          relations: await this.getRelationDataFromTriply(id, entityName, externalSource),
        }
      })
    )
    return data
  }

  private async getRelationDataFromTriply(
    id: string,
    type: EntityNames,
    externalSource?: TriplyExternalSourceEnum
  ) {
    const uri = TriplyUtils.getUriForTypeAndId(type, id)
    const params = externalSource ? { ExternalSources: externalSource } : undefined

    const res = await this.triplyService.queryTriplyData<ZoomLevel3RelationData>(
      `${this.relationsEndpoint}${uri}`,
      zoomLevel3RelationDataKeys,
      undefined,
      params
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

  private extractStoryIds(response: StoriesLinkedToThemeQuery): string[] {
    const themesData = response?.story?.data?.attributes?.themes?.data || []

    const storyIds: string[] = []

    for (const theme of themesData) {
      for (const story of theme?.attributes?.stories?.data || []) {
        if (!story.id) {
          continue
        }
        storyIds.push(story.id)
      }
    }

    // Remove duplicates if there are any
    return [...new Set(storyIds)]
  }
}
