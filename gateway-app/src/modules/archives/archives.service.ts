import { Injectable } from '@nestjs/common'
import { ExternalSource, KeysToVerify, TriplyService } from '../triply/triply.service'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../util/entityNames.type'
import { Locale } from '../util/locale.type'
import { ArchiveAsteriskType } from './archives.type'
import { EnrichedRecordBaseType } from '../triplyRecord/triplyRecord.type'

export interface ArchivesDetailZoomLevel3DataType {
  id?: string
  title?: string
  thumbnail?: string
  objectNumber?: string
  asterisk_date_title?: string
  asterisk_name_title?: string
  asterisk_subject_title?: string
  asterisk_date_description?: string
  asterisk_name_description?: string
  asterisk_subject_description?: string
}
const archivesDetailZoomLevel3DataKeys: KeysToVerify<ArchivesDetailZoomLevel3DataType> = {
  id: true,
  title: true,
  thumbnail: true,
  objectNumber: true,
  asterisk_date_title: true,
  asterisk_name_title: true,
  asterisk_subject_title: true,
  asterisk_date_description: true,
  asterisk_name_description: true,
  asterisk_subject_description: true,
}

export interface ArchiveRelationsType {
  id?: string
  titleR?: string
  referenceNumber?: string
  period?: string
  asterisk_date_person?: string
  asterisk_name_person?: string
  asterisk_subject_person?: string
}

const archiveRelationsKeys: KeysToVerify<ArchiveRelationsType> = {
  id: true,
  titleR: true,
  referenceNumber: true,
  period: true,
  asterisk_date_person: true,
  asterisk_name_person: true,
  asterisk_subject_person: true,
}

export interface ArchiveRelationsCountType {
  total: string
}

const archiveRelationsCountKeys: KeysToVerify<ArchiveRelationsCountType> = {
  total: true,
}

export enum ArchivesZoomLevel3Types {
  fonds = 'fonds',
  other = 'other',
}

export interface ArchivesZoomLevel2HoverData {
  title: string
  creators: string
  description: string
}

const archivesZoomLevel2HoverDataKeys: KeysToVerify<ArchivesZoomLevel2HoverData> = {
  title: true,
  creators: true,
  description: true,
}

export interface ArchivesRecordZoomLevel3Data {
  id: string
  thumbnail?: string
  custodialHistory?: string
  scope?: string
  systemOfArrangement?: string
  existence?: string
  existenceLocation?: string
  sources?: string
  referenceCode?: string
  titleType?: string
  descriptionLevel?: string
  size?: string
  period?: string
  access?: string
  photographCreator?: string
  rights?: string
  permanentLink?: string
  externalSource?: string
  asterisk_date_content?: string
  asterisk_name_content?: string
  asterisk_subject_content?: string
  asterisk_date_subject?: string
  asterisk_name_subject?: string
  asterisk_subject_subject?: string
  asterisk_date_location?: string
  asterisk_name_location?: string
  asterisk_subject_location?: string
}

const archivesRecordZoomLevel3DataKeys: KeysToVerify<ArchivesRecordZoomLevel3Data> = {
  id: true,
  thumbnail: true,
  custodialHistory: true,
  scope: true,
  systemOfArrangement: true,
  existence: true,
  existenceLocation: true,
  sources: true,
  referenceCode: true,
  titleType: true,
  descriptionLevel: true,
  size: true,
  period: true,
  access: true,
  photographCreator: true,
  rights: true,
  permanentLink: true,
  externalSource: true,
  asterisk_date_subject: true,
  asterisk_name_subject: true,
  asterisk_subject_subject: true,
  asterisk_date_location: true,
  asterisk_name_location: true,
  asterisk_subject_location: true,
  asterisk_date_content: true,
  asterisk_name_content: true,
  asterisk_subject_content: true,
}

@Injectable()
export class ArchivesService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'archives-recordPage/run?'
  private readonly ZoomLevel3RelationsEndpoint = 'archives-recordRelations/run?'
  private readonly ZoomLevel3RelationsCountEndpoint = 'archives-recordRelations-Count/run?'
  private readonly ZoomLevel3RecordEndpoint = 'archives-recordPage-editorial/run?'
  private readonly ZoomLevel2HoverEndpoint = 'archives-hoverState/run?'

  private readonly EnrichedSourceEndpoints: Record<ExternalSource, string> = {
    [ExternalSource.getty]: 'archives-enrichment-getty/run',
    [ExternalSource.wikidata]: 'archives-enrichment-wikidata/run',
    [ExternalSource.rkd]: 'archives-enrichment-rkd/run',
  }

  private asteriskKeys: (keyof typeof ArchiveAsteriskType.prototype)[] = [
    'asterisk_subject_person',
    'asterisk_date_person',
    'asterisk_name_person',
    'asterisk_date_subject',
    'asterisk_name_subject',
    'asterisk_subject_subject',
    'asterisk_date_location',
    'asterisk_name_location',
    'asterisk_subject_location',
    'asterisk_date_description',
    'asterisk_name_description',
    'asterisk_subject_description',
    'asterisk_date_content',
    'asterisk_name_content',
    'asterisk_subject_content',
  ]

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<ArchivesDetailZoomLevel3DataType>(
      this.ZoomLevel3Endpoint,
      archivesDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 2 },
      { id, language: locale }
    )

    const asteriskSuggestions = this.formatAsteriskSuggestions(result.data)

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.Archives,
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
    const result = await this.triplyService.queryTriplyData<ArchiveRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      archiveRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type, language: locale }
    )

    const asteriskSuggestions = this.formatAsteriskSuggestions(result.data)
    const data = TriplyUtils.sanitizeObjectArray(result.data, 'relation', 'idRelation', 'thumbnail')

    return {
      id,
      ...data,
      asteriskSuggestions,
    }
  }

  public async getRelationsDataCount(id: string, type: EntityNames) {
    const result = await this.triplyService.queryTriplyData<ArchiveRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      archiveRelationsCountKeys,
      undefined,
      { id, type }
    )

    return result.data
  }

  public async getZoomLevel3RecordData(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<ArchivesRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      archivesRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id, language: locale }
    )

    const asteriskSuggestions = this.formatAsteriskSuggestions(result.data)

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      id,
      asteriskSuggestions,
    }
  }

  public async getZoomRecordHover(id: string, locale: Locale) {
    const results = await this.triplyService.queryTriplyData<ArchivesZoomLevel2HoverData>(
      this.ZoomLevel2HoverEndpoint,
      archivesZoomLevel2HoverDataKeys,
      undefined,
      { id, language: locale }
    )
    // TODO: HNIT-1833 - throw on errors (no data or multiple resutls that don't match)

    if (results.data.length === 0) {
      return {}
    }

    return { ...TriplyUtils.combineObjectArray(results.data) }
  }

  public getEnrichedSources(id: string, locale: Locale): Promise<EnrichedRecordBaseType[]> {
    return this.triplyService.getEnrichedSourceData(this.EnrichedSourceEndpoints, id, locale)
  }

  private formatAsteriskSuggestions(data: ArchiveAsteriskType[]) {
    return data.reduce<ArchiveAsteriskType[]>((acc, cur) => {
      const hasValue = this.asteriskKeys.some(key => cur[key] !== undefined)
      if (hasValue) {
        acc.push(cur)
      }

      this.asteriskKeys.forEach(key => delete cur[key])

      return acc
    }, [])
  }
}
