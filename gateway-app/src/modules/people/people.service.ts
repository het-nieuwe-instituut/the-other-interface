import { Injectable } from '@nestjs/common'
import { ExternalSource, KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../util/entityNames.type'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'
import { PaginationArgs } from '../util/paginationArgs.type'
import { Locale } from '../util/locale.type'
import { PeopleZoomLevel3DetailAsteriskType } from './people.type'
import { EnrichedRecordBaseType } from '../triplyRecord/triplyRecord.type'

interface PeopleDetailZoomLevel3Data {
  thumbnail?: string
  title?: string
  id: string
  description?: string
  asterisk_subject_description?: string
  asterisk_date_description?: string
  asterisk_name_description?: string
}
const peopleDetailZoomLevel3DataKeys: KeysToVerify<PeopleDetailZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
  description: true,
  asterisk_date_description: true,
  asterisk_name_description: true,
  asterisk_subject_description: true,
}

export interface PeopleRelationsType {
  idRelation?: string
  relationName?: string
  titleR?: string
  occupation?: string
  period?: string
  externalSource?: string
}

const PeopleRelationsKeys: KeysToVerify<PeopleRelationsType> = {
  idRelation: true,
  relationName: true,
  titleR: true,
  occupation: true,
  period: true,
  externalSource: true,
}

export interface PeopleRelationsCountType {
  total: string
}

const peopleRelationsCountKeys: KeysToVerify<PeopleRelationsCountType> = {
  total: true,
}
export interface PeopleRecordZoomLevel3Data {
  type?: string
  profession?: string
  nameVariations?: string
  birthDate?: string
  birthPlace?: string
  deathDate?: string
  deathPlace?: string
  nationality?: string
  gender?: string
  period?: string
  association?: string
  permanentLink?: string
  externalSource?: string
}

const peopleRecordZoomLevel3DataKeys: KeysToVerify<PeopleRecordZoomLevel3Data> = {
  type: true,
  profession: true,
  nameVariations: true,
  birthDate: true,
  birthPlace: true,
  deathDate: true,
  deathPlace: true,
  nationality: true,
  gender: true,
  period: true,
  association: true,
  permanentLink: true,
  externalSource: true,
}

export interface PeopleZoomLevel2HoverData {
  title: string
  profession: string
  description: string
}

const peopleZoomLevel2HoverDataKeys: KeysToVerify<PeopleZoomLevel2HoverData> = {
  title: true,
  profession: true,
  description: true,
}

@Injectable()
export class PeopleService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'people-recordPage/run?'
  private readonly ZoomLevel3RelationsEndpoint = 'people-recordRelations/run?'
  private readonly ZoomLevel3RelationsCountEndpoint = 'people-recordRelations-Count/run?'
  private readonly ZoomLevel3RecordEndpoint = 'people-recordPage-editorial/run?'
  private readonly ZoomLevel2HoverEndpoint = 'people-hoverState/run?'

  private readonly EnrichedSourceEndpoints: Record<ExternalSource, string> = {
    [ExternalSource.getty]: 'people-enrichment-getty/run',
    [ExternalSource.wikidata]: 'people-enrichment-wikidata/run',
    [ExternalSource.rkd]: 'people-enrichment-rkd/run',
  }

  private asteriskKeys: (keyof typeof PeopleZoomLevel3DetailAsteriskType.prototype)[] = [
    'asterisk_date_description',
    'asterisk_name_description',
    'asterisk_subject_description',
  ]

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<PeopleDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      peopleDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 100 }, // TODO: Setting to 100 - temp fix to get the new data and get it working again - need a better solution
      { id, locale }
    )

    const asteriskSuggestions = this.formatAsteriskSuggestions(result.data)

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      asteriskSuggestions,
      type: EntityNames.People,
      id,
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail)?.split(';'),
    }
  }

  public async getRelationsData(
    id: string,
    type: EntityNames,
    paginationArgs: PaginationArgs,
    locale: Locale
  ) {
    const result = await this.triplyService.queryTriplyData<PeopleRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      PeopleRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type, language: locale }
    )

    const output = TriplyUtils.sanitizeObjectArray(
      result.data,
      'idRelation',
      'relation',
      'thumbnail'
    )
    return output
  }

  public async getRelationsDataCount(id: string, type: EntityNames) {
    const result = await this.triplyService.queryTriplyData<PeopleRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      peopleRelationsCountKeys,
      undefined,
      { id, type }
    )

    return result.data
  }

  public async getZoomLevel3RecordData(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<PeopleRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      peopleRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id, language: locale }
    )

    const data = TriplyUtils.combineObjectArray(result.data)
    if (!data) {
      return
    }

    return { ...data, id }
  }

  public async getZoomRecordHover(id: string, locale: Locale) {
    const results = await this.triplyService.queryTriplyData<PeopleZoomLevel2HoverData>(
      this.ZoomLevel2HoverEndpoint,
      peopleZoomLevel2HoverDataKeys,
      undefined,
      { id, language: locale }
    )
    // TODO: HNIT-1833 - throw on errors (no data or multiple resutls that don't match)

    if (results.data.length === 0) {
      return {}
    }

    return TriplyUtils.combineObjectArray(results.data)
  }

  public getEnrichedSources(id: string, locale: Locale): Promise<EnrichedRecordBaseType[]> {
    return this.triplyService.getEnrichedSourceData(this.EnrichedSourceEndpoints, id, locale)
  }

  private formatAsteriskSuggestions(data: PeopleDetailZoomLevel3Data[]) {
    return data.reduce<PeopleZoomLevel3DetailAsteriskType[]>((acc, cur) => {
      const hasValue = this.asteriskKeys.some(key => cur[key] !== undefined)
      if (hasValue) {
        acc.push({ ...cur })
      }

      this.asteriskKeys.forEach(key => delete cur[key])
      return acc
    }, [])
  }
}
