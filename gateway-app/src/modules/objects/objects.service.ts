import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../util/entityNames.type'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'
import { PaginationArgs } from '../util/paginationArgs.type'
import { Locale } from '../util/locale.type'

export interface ObjectsDetailZoomLevel3Data {
  thumbnail?: string
  title?: string
  id: string
  description?: string
}

const objectsDetailZoomLevel3DataKeys: KeysToVerify<ObjectsDetailZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
  description: true,
}

export interface ObjectsRelationsType {
  id?: string
  titleR?: string
  referenceNumber?: string
  period?: string
  externalSource?: string
}

const objectsRelationsKeys: KeysToVerify<ObjectsRelationsType> = {
  id: true,
  titleR: true,
  referenceNumber: true,
  period: true,
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
  profession: string
  description: string
}

const objectsZoomLevel2HoverDataKeys: KeysToVerify<ObjectsZoomLevel2HoverData> = {
  title: true,
  profession: true,
  description: true,
}

export interface ObjectRecordZoomLevel3Data {
  objectNumber?: string
  titleType?: string
  objectName?: string
  archiveCode?: string
  // objectname?: string
  // maker?: string
  date?: string
  materials?: string
  techniques?: string
  hasParts?: string
  dimension?: string
  scale?: string
  creditLine?: string
  rights?: string
  permanentLink?: string
}

const objectRecordZoomLevel3DataKeys: KeysToVerify<ObjectRecordZoomLevel3Data> = {
  objectNumber: true,
  titleType: true,
  objectName: true,
  archiveCode: true,
  // maker: true,
  date: true,
  materials: true,
  techniques: true,
  hasParts: true,
  dimension: true,
  scale: true,
  creditLine: true,
  rights: true,
  permanentLink: true,
}

@Injectable()
export class ObjectsService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'objects-recordPage/run?'

  private readonly ZoomLevel3RelationsEndpoint = 'objects-recordRelations/run?'

  private readonly ZoomLevel3RelationsCountEndpoint = 'objects-recordRelations-Count/run?'

  private readonly ZoomLevel3RecordEndpoint = 'objects-recordPage-editorial/run?'

  private readonly ZoomLevel2HoverEndpoint = 'objects-hoverState/run?'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: string, locale: Locale) {
    const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      objectsDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id, language: locale }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.Objects,
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
    const result = await this.triplyService.queryTriplyData<ObjectsRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      objectsRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type, language: locale }
    )

    const output = TriplyUtils.sanitizeObjectArray(result.data, 'idRelation', 'relation')
    return output
  }

  public async getRelationsDataCount(id: string, type: EntityNames) {
    const result = await this.triplyService.queryTriplyData<ObjectsRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      objectsRelationsCountKeys,
      { page: 1, pageSize: 1 },
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

    return result.data
  }

  public async getZoomRecordHover(id: string, locale: Locale) {
    const results = await this.triplyService.queryTriplyData<ObjectsZoomLevel2HoverData>(
      this.ZoomLevel2HoverEndpoint,
      objectsZoomLevel2HoverDataKeys,
      undefined,
      { id }
    )
    // TODO: HNIT-1833 - throw on errors (no data or multiple resutls that don't match)

    if (results.data.length === 0) {
      return {}
    }

    return { ...TriplyUtils.combineObjectArray(results.data) }
  }
}
