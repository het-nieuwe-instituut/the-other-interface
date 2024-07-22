import { Injectable } from '@nestjs/common'
import { ExternalSource, KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../util/entityNames.type'
import { TriplyUtils } from '../triply/triply.utils'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { PaginationArgs } from '../util/paginationArgs.type'
import { Locale } from '../util/locale.type'
import { EnrichedRecordBaseType } from '../triplyRecord/triplyRecord.type'

interface PublicationsZoomLevel3Data {
  thumbnail?: string
  title?: string
  id: string
  yearOfPublication?: string
  objectNumber?: string
  holding?: string
  historyNotes?: string
  annotation?: string
  mediaType?: string
  mediaReference?: string
}
const publicationsDetailZoomLevel3DataKeys: KeysToVerify<PublicationsZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
  yearOfPublication: true,
  objectNumber: true,
  holding: true,
  historyNotes: true,
  annotation: true,
  mediaReference: true,
  mediaType: true,
}
export interface PublicationRelationsType {
  idRelation?: string
  titleR?: string
  typePub?: string
  yearPub?: string
  externalSource?: string
}

const publicationRelationsKeys: KeysToVerify<PublicationRelationsType> = {
  idRelation: true,
  titleR: true,
  typePub: true,
  yearPub: true,
  externalSource: true,
}

export interface PublicationsRelationsCountType {
  total: string
}

const publicationsRelationsCountKeys: KeysToVerify<PublicationsRelationsCountType> = {
  total: true,
}

export interface PublicationsZoomLevel2HoverData {
  title: string
  authors: string
  description: string
}

const publicationsZoomLevel2HoverDataKeys: KeysToVerify<PublicationsZoomLevel2HoverData> = {
  title: true,
  authors: true,
  description: true,
}

export interface PublicationRecordZoomLevel3Data {
  objectNumber?: string
  subType?: string
  authors?: string[]
  authorRole?: string[]
  publisher?: string
  yearOfPublication?: string
  placeOfPublication?: string
  isbn?: string
  codeOfArchive?: string
  illustration?: string
  pages?: string
  language?: string
  series?: string
  number?: string
  category?: string
  relatedKeyword?: string[]
  geoKeyword?: string[]
  availability?: string
  permanentLink?: string
  externalSource?: string
  sourceTitle?: string
  volume?: string
  issue?: string
  year?: string
  subject?: string[]
  edition?: string
  continuedFrom?: string
  continuedAs?: string
  geographicalKeywords?: string
  pysicalCarrier?: string
}

const publicationRecordZoomLevel3DataKeys: KeysToVerify<PublicationRecordZoomLevel3Data> = {
  objectNumber: true,
  subType: true,
  authors: true,
  authorRole: true,
  publisher: true,
  yearOfPublication: true,
  placeOfPublication: true,
  isbn: true,
  codeOfArchive: true,
  illustration: true,
  pages: true,
  language: true,
  series: true,
  number: true,
  category: true,
  relatedKeyword: true,
  geoKeyword: true,
  availability: true,
  permanentLink: true,
  externalSource: true,
  sourceTitle: true,
  volume: true,
  issue: true,
  year: true,
  subject: true,
  edition: true,
  continuedFrom: true,
  continuedAs: true,
  geographicalKeywords: true,
  pysicalCarrier: true,
}

@Injectable()
export class PublicationsService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'publications-recordPage/run?'
  private readonly ZoomLevel3RelationsEndpoint = 'publications-recordRelations/run?'
  private readonly ZoomLevel3RelationsCountEndpoint = 'publications-recordRelations-Count/run?'
  private readonly ZoomLevel3RecordEndpoint = 'publications-recordPage-Editorial/run?'
  private readonly ZoomLevel2HoverEndpoint = 'publications-hoverState/run?'

  private readonly EnrichedSourceEndpoints: Record<ExternalSource, string> = {
    [ExternalSource.getty]: 'publications-enrichment-getty/run',
    [ExternalSource.wikidata]: 'publications-enrichment-wikidata/run',
    [ExternalSource.rkd]: 'publications-enrichment-rkd/run',
  }

  public constructor(private readonly triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      publicationsDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 2 },
      { id, locale }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.Publications,
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
    const result = await this.triplyService.queryTriplyData<PublicationRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      publicationRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type, locale }
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
    const result = await this.triplyService.queryTriplyData<PublicationsRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      publicationsRelationsCountKeys,
      undefined,
      { id, type }
    )

    return result.data
  }

  public async getZoomLevel3RecordData(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<PublicationRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      publicationRecordZoomLevel3DataKeys,
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
    const results = await this.triplyService.queryTriplyData<PublicationsZoomLevel2HoverData>(
      this.ZoomLevel2HoverEndpoint,
      publicationsZoomLevel2HoverDataKeys,
      undefined,
      { id, language: locale }
    )
    // TODO: HNIT-1833 - throw on errors (no data or multiple resutls that don't match)

    if (results.data.length === 0) {
      return {}
    }

    return { ...TriplyUtils.combineObjectArray(results.data) }
  }

  public getEnrichedSources(
    id: string,
    locale: Locale,
    externalURI?: string | `${string};${string}` | `${string};${string};${string}`
  ): Promise<EnrichedRecordBaseType[]> {
    return this.triplyService.getEnrichedSourceData(
      this.EnrichedSourceEndpoints,
      id,
      locale,
      externalURI
    )
  }
}
