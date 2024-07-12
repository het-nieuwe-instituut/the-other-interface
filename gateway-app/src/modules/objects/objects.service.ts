import { Injectable } from '@nestjs/common'
import { ExternalSource, KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../util/entityNames.type'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'
import { PaginationArgs } from '../util/paginationArgs.type'
import { Locale } from '../util/locale.type'
import { ObjectAsteriskType } from './objects.type'
import { EnrichedRecordBaseType } from '../triplyRecord/triplyRecord.type'

export interface ObjectsDetailZoomLevel3Data {
  thumbnail?: string
  title?: string
  id: string
  description?: string
  asterisk_date_title?: string
  asterisk_name_title?: string
  asterisk_subject_title?: string
  mediaType?: string
  mediaReference?: string
}

const objectsDetailZoomLevel3DataKeys: KeysToVerify<ObjectsDetailZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
  description: true,
  asterisk_date_title: true,
  asterisk_name_title: true,
  asterisk_subject_title: true,
  mediaReference: true,
  mediaType: true,
}

export interface ObjectsRelationsType {
  id?: string
  relation?: string
  idRelation?: string
  objectType?: string
  referenceNumber?: string
  period?: string
  thumbnail?: string
  asterisk_date_person?: string
  asterisk_name_person?: string
  asterisk_subject_person?: string
  externalSource?: string
}

const objectsRelationsKeys: KeysToVerify<ObjectsRelationsType> = {
  id: true,
  relation: true,
  idRelation: true,
  objectType: true,
  referenceNumber: true,
  period: true,
  thumbnail: true,
  asterisk_date_person: true,
  asterisk_name_person: true,
  asterisk_subject_person: true,
  externalSource: true,
}

export interface ObjectsRelationsCountType {
  total: string
}

const objectsRelationsCountKeys: KeysToVerify<ObjectsRelationsCountType> = {
  total: true,
}

export interface ObjectsZoomLevel2HoverData {
  title: string
  maker: string
  description: string
}

const objectsZoomLevel2HoverDataKeys: KeysToVerify<ObjectsZoomLevel2HoverData> = {
  title: true,
  maker: true,
  description: true,
}

export interface ObjectRecordZoomLevel3Data {
  objectNumber?: string
  titleType?: string
  objectName?: string
  objectType?: string
  archiveCode?: string
  maker?: string
  date?: string
  materials?: string
  techniques?: string
  hasParts?: string
  dimension?: string
  scale?: string
  creditLine?: string
  rights?: string
  permanentLink?: string
  geoKeywords?: string
  asterisk_date_relatedKeyword?: string
  asterisk_name_relatedKeyword?: string
  asterisk_subject_relatedKeyword?: string
  asterisk_date_geoKeywords?: string
  asterisk_name_geoKeywords?: string
  asterisk_subject_geoKeywords?: string
}

const objectRecordZoomLevel3DataKeys: KeysToVerify<ObjectRecordZoomLevel3Data> = {
  objectNumber: true,
  titleType: true,
  objectName: true,
  objectType: true,
  archiveCode: true,
  maker: true,
  date: true,
  materials: true,
  techniques: true,
  hasParts: true,
  dimension: true,
  scale: true,
  creditLine: true,
  rights: true,
  permanentLink: true,
  geoKeywords: true,
  asterisk_date_relatedKeyword: true,
  asterisk_name_relatedKeyword: true,
  asterisk_subject_relatedKeyword: true,
  asterisk_date_geoKeywords: true,
  asterisk_name_geoKeywords: true,
  asterisk_subject_geoKeywords: true,
}

@Injectable()
export class ObjectsService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'objects-recordPage/run?'
  private readonly ZoomLevel3RelationsEndpoint = 'objects-recordRelations/run?'
  private readonly ZoomLevel3RelationsCountEndpoint = 'objects-recordRelations-Count/run?'
  private readonly ZoomLevel3RecordEndpoint = 'objects-recordPage-editorial/run?'
  private readonly ZoomLevel2HoverEndpoint = 'objects-hoverState/run?'

  private readonly EnrichedSourceEndpoints: Record<ExternalSource, string> = {
    [ExternalSource.getty]: 'archives-enrichment-getty/run',
    [ExternalSource.wikidata]: 'archives-enrichment-wikidata/run',
    [ExternalSource.rkd]: 'archives-enrichment-rkd/run',
  }

  private asteriskKeys: (keyof typeof ObjectAsteriskType.prototype)[] = [
    'asterisk_subject_person',
    'asterisk_date_person',
    'asterisk_name_person',
    'asterisk_date_geoKeywords',
    'asterisk_name_geoKeywords',
    'asterisk_subject_geoKeywords',
    'asterisk_date_relatedKeyword',
    'asterisk_name_relatedKeyword',
    'asterisk_subject_relatedKeyword',
  ]

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      objectsDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id, language: locale }
    )

    const asteriskSuggestions = this.formatAsteriskSuggestions(result.data)

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.Objects,
      id,
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail)?.split(';'),
      asteriskSuggestions,
    }
  }

  public async getRelationsData(
    id: string,
    type: EntityNames,
    paginationArgs: PaginationArgs,
    locale: Locale
  ) {
    const result = await this.triplyService.queryTriplyData<ObjectsRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      objectsRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type, language: locale }
    )

    return TriplyUtils.sanitizeObjectArray(result.data, 'idRelation', 'relation', 'thumbnail')
  }

  public async getRelationsDataCount(id: string, type: EntityNames) {
    const result = await this.triplyService.queryTriplyData<ObjectsRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      objectsRelationsCountKeys,
      undefined,
      { id, type }
    )

    return result.data
  }

  public async getZoomLevel3RecordData(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<ObjectRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      objectRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id, language: locale }
    )

    const asteriskSuggestions = this.formatAsteriskSuggestions(result.data)
    const data = TriplyUtils.combineObjectArray(result.data)
    if (!data) {
      return
    }

    return {
      ...data,
      id,
      asteriskSuggestions,
    }
  }

  public async getZoomRecordHover(id: string, locale: Locale) {
    const results = await this.triplyService.queryTriplyData<ObjectsZoomLevel2HoverData>(
      this.ZoomLevel2HoverEndpoint,
      objectsZoomLevel2HoverDataKeys,
      undefined,
      { id, language: locale }
    )

    if (results.data.length === 0) {
      return {}
    }

    return TriplyUtils.combineObjectArray(results.data)
  }

  public getEnrichedSources(id: string, locale: Locale): Promise<EnrichedRecordBaseType[]> {
    return this.triplyService.getEnrichedSourceData(this.EnrichedSourceEndpoints, id, locale)
  }

  private formatAsteriskSuggestions(data: ObjectAsteriskType[]) {
    return data.reduce<ObjectAsteriskType[]>((acc, cur) => {
      const hasValue = this.asteriskKeys.some(key => cur[key] !== undefined)
      if (hasValue) {
        acc.push(cur)
      }

      this.asteriskKeys.forEach(key => delete cur[key])

      return acc
    }, [])
  }
}
