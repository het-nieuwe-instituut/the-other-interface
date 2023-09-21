import { forwardRef, Inject, Injectable } from '@nestjs/common'
import {
  Enum_Triplyrecord_Type,
  Sdk,
  StoriesLinkedToThemeQuery,
  ThemeEntity,
} from 'src/generated/strapi-sdk'
import { StrapiUtils } from '../strapi/strapi.utils'
import { ArchivesService, ArchivesZoomLevel3Types } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import {
  PublicationsService,
  PublicationsZoomLevel3Types,
} from '../publications/publications.service'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames, externalEntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getRandom2ItemsFromArray } from '../util/helpers'
import { ZoomLevel3RelatedObjectsArgs, ZoomLevel3RelationsType } from './zoomLevel3.type'
import { CustomError } from '../util/customError'

interface ZoomLevel3RelationData {
  label: string | null
  graph: string // sample graph i.e. https://collectiedata.hetnieuweinstituut.nl/graph/people
  count: string // number

  sample: string // i.e. https://collectiedata.hetnieuweinstituut.nl/id/books/300323890
  sample_label: string
  graph_2: string // sample has a relation of type i.e. https://collectiedata.hetnieuweinstituut.nl/graph/people
  count_2: string // sample's total relation count with graph_2

  sample_1: string | null // uri of a sample of the above sample (of type graph_2)
  sample_2: string | null // uri of a sample of the above sample (of type graph_2)
  sample_1_label: string | null
  sample_2_label: string | null
  sample_extern_1: string | null // external uri of a sample of the above sample (of type graph_2)
  sample_extern_2: string | null // external uri of a sample of the above sample (of type graph_2)
  sample_extern_1_label: string | null
  sample_extern_2_label: string | null
}
const zoomLevel3RelationDataKeys: KeysToVerify<ZoomLevel3RelationData> = {
  label: true,
  graph: true,
  count: true,
  sample: true,
  sample_label: true,
  graph_2: true,
  count_2: true,
  sample_1: true,
  sample_2: true,
  sample_1_label: true,
  sample_2_label: true,
  sample_extern_1: true,
  sample_extern_2: true,
  sample_extern_1_label: true,
  sample_extern_2_label: true,
}

interface ZoomLevel3RelatedObjectData {
  dataset: string
  graph: string // i.e. https://collectiedata.hetnieuweinstituut.nl/graph/people
  label: string
  externObj: string // i.e. https://collectiedata.hetnieuweinstituut.nl/id/people/25376
  pidWorkURI: string | null
  profession: string | null
  professionLabel: string | null
  birthDate: string | null
  availability: string | null
  date: string | null
  creator: string | null
  creatorLabel: string | null
}
const zoomLevel3RelatedObjectDataKeys: KeysToVerify<ZoomLevel3RelatedObjectData> = {
  dataset: true,
  graph: true,
  label: true,
  externObj: true,
  pidWorkURI: true,
  profession: true,
  professionLabel: true,
  birthDate: true,
  availability: true,
  date: true,
  creator: true,
  creatorLabel: true,
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

  public async getRelations(
    id: string,
    type: EntityNames,
    lang?: string,
    externalSource?: TriplyExternalSourceEnum
  ) {
    console.log('i am here')
    switch (type) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        console.log(type)
        return [
          ...(await this.getTriplyRelations(id, type, externalSource)),
          await this.getStoryRelationsForLinkedItem(id, type),
        ]
      case EntityNames.Stories:
        console.log(type)
        return this.getStoryRelations(id, lang, externalSource)
      case EntityNames.External:
      // TODO
      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  public async getAllRelations({ id, type, relatedObjectsType }: ZoomLevel3RelatedObjectsArgs) {
    const uri = TriplyUtils.getUriForTypeAndId(type, id)
    const res = await this.triplyService.queryTriplyData<ZoomLevel3RelatedObjectData>(
      `${this.relatedObjectsEndpoint}${uri}`,
      zoomLevel3RelatedObjectDataKeys
    )

    return res.data
      .filter(d => TriplyUtils.getEntityNameFromGraph(d.graph) === relatedObjectsType)
      .map(d => ({
        id: TriplyUtils.getIdFromUri(d.externObj),
        type: relatedObjectsType,
        name: d.label,
        pidWorkURI: d.pidWorkURI,
        profession: d.profession,
        professionLabel: d.professionLabel,
        birthDate: d.birthDate,
        availability: d.availability,
        date: d.date,
        creator: d.creator,
        creatorLabel: d.creatorLabel,
      }))
  }

  public async getDetail(
    id: string,
    type: EntityNames,
    metadata?: {
      publicationType?: PublicationsZoomLevel3Types
      archivesType?: ArchivesZoomLevel3Types
    }
  ) {
    switch (type) {
      case EntityNames.Objects: {
        return this.objectsService.getZoomLevel3Data(id)
      }
      case EntityNames.People: {
        return this.peopleService.getZoomLevel3Data(id)
      }
      case EntityNames.Publications: {
        const subType = metadata?.publicationType
          ? metadata.publicationType
          : await this.publicationsService.determinePublicationType(id)

        return this.publicationsService.getZoomLevel3Data(subType, id)
      }
      case EntityNames.Archives: {
        const subType = metadata?.archivesType
          ? metadata?.archivesType
          : await this.archivesService.determineArchiveType(id)

        return this.archivesService.getZoomLevel3Data(subType, id)
      }
      case EntityNames.Stories:
      case EntityNames.External:
      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  private async getTriplyRelations(
    id: string,
    type: EntityNames,
    externalSource?: TriplyExternalSourceEnum
  ) {
    const data = await this.getRelationDataFromTriply(id, type, externalSource)

    const groupedData = this.getGroupedRelationData(data)

    return this.getFormattedGroupData(groupedData)
  }

  private async getStoryRelations(
    id: string,
    lang?: string,
    externalSource?: TriplyExternalSourceEnum
  ) {
    console.log('getStoryRelations', id, externalSource)
    const relations = await this.strapiGqlSdk.storyTriplyRelations({ id })
    const relations2 = await this.strapiGqlSdk.storiesLinkedToTheme({ id, locale: lang })
    console.log(relations2.story?.data?.attributes?.themes)
    const triplyRecords = (relations.story?.data?.attributes?.triplyRecords?.data || []).filter(
      r => !!r.attributes?.recordId
    )

    const storyIds = this.extractStoryIds(relations2)
    console.log(storyIds)

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

    const promises = Object.entries(groupedRecords).map(async ([key, recordIds]) => {
      const type = StrapiUtils.getEntityNameForRecordType(key as Enum_Triplyrecord_Type)
      const randomRecordIds = getRandom2ItemsFromArray(recordIds)
      const randomRelations = await Promise.all(
        randomRecordIds.map(id => this.getTriplyRelatedRecords(id, type, externalSource))
      )

      return {
        type,
        total: recordIds.length,
        randomRelations: randomRelations,
      }
    })

    return Promise.all(promises)
  }

  private async getStoryRelationsForLinkedItem(id: string, entityName: EntityNames) {
    const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecord({
      recordId: id,
      type: StrapiUtils.getRecordTypeForEntityName(entityName),
    })

    const randomStories = getRandom2ItemsFromArray(res.stories?.data || [])
      .filter(s => !!s.id && !!s.attributes)
      .map(s => ({
        id: s.id,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        slug: s.attributes!.slug,
        type: EntityNames.Stories,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        label: s.attributes!.title,
      }))

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
    const data = await this.getRelationDataFromTriply(id, type, externalSource)

    const groupedData = this.getGroupedRelationData(data)
    const formattedData = this.getFormattedGroupData(groupedData)

    return {
      id,
      type,
      label: data.length ? data[0].label || '' : '',
      relations: formattedData,
    }
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

  private getGroupedRelationData(data: ZoomLevel3RelationData[]) {
    const groupedData: GroupedRelationData = {}

    for (const relationData of data) {
      const type = TriplyUtils.getEntityNameFromGraph(
        relationData.graph,
        relationData.sample_extern_1
      )

      if (!groupedData[type]) {
        groupedData[type] = { count: relationData.count, groupedSampleData: {} }
      }

      const group = groupedData[type] as RelationData

      if (externalEntityNames.includes(type)) {
        if (relationData.sample_extern_1) {
          group.groupedSampleData[relationData.sample_extern_1] = {
            label: relationData.sample_extern_1_label || '',
            groupedRelationData: {},
          }
        }

        if (relationData.sample_extern_2) {
          group.groupedSampleData[relationData.sample_extern_2] = {
            label: relationData.sample_extern_2_label || '',
            groupedRelationData: {},
          }
        }

        continue
      }

      if (!group.groupedSampleData[relationData.sample]) {
        group.groupedSampleData[relationData.sample] = {
          label: relationData.sample_label,
          groupedRelationData: {},
        }
      }

      const groupSample = group.groupedSampleData[relationData.sample]
      const relatedType = TriplyUtils.getEntityNameFromGraph(relationData.graph_2)

      if (!groupSample.groupedRelationData[relatedType]) {
        groupSample.groupedRelationData[relatedType] = {
          count: relationData.count_2,
          groupedSampleData: {},
        }
      }
    }

    return groupedData
  }

  private getFormattedGroupData(groupedData: GroupedRelationData) {
    const formattedData: ZoomLevel3RelationsType[] = []

    Object.entries(groupedData).map(([type, v]) => {
      const randomRelations = Object.entries(v.groupedSampleData).map(([k, v]) =>
        this.formatTriplySampleData(k, v)
      )

      formattedData.push({
        type: type as EntityNames,
        total: parseInt(v.count, 10),
        randomRelations,
      })
    })

    return formattedData
  }

  // expects key to be record uri
  private formatTriplySampleData(key: string, sampleData: SampleData) {
    const relations = Object.entries(sampleData.groupedRelationData).map(([relatedType, data]) => ({
      type: relatedType as EntityNames,
      total: data.count ? parseInt(data.count, 10) : 0,
    }))

    return {
      id: TriplyUtils.getIdFromUri(key),
      type: TriplyUtils.getEntityNameFromUri(key),
      label: sampleData.label,
      relations,
    }
  }

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
