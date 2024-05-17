import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../util/entityNames.type'

export interface ArchivesDetailZoomLevel3DataType {
  id?: string
  title?: string
  thumbnail?: string
  objectNumber?: string
}
const archivesDetailZoomLevel3DataKeys: KeysToVerify<ArchivesDetailZoomLevel3DataType> = {
  id: true,
  title: true,
  thumbnail: true,
  objectNumber: true,
}

export interface ArchiveRelationsType {
  id?: string
  titleR?: string
  referenceNumber?: string
  period?: string
}

const archiveRelationsKeys: KeysToVerify<ArchiveRelationsType> = {
  id: true,
  titleR: true,
  referenceNumber: true,
  period: true,
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
}

@Injectable()
export class ArchivesService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'archives-recordPage/run?'

  private readonly ZoomLevel3RelationsEndpoint = 'archives-recordRelations/run?'

  private readonly ZoomLevel3RelationsCountEndpoint = 'archives-recordRelations-Count/run?'

  private readonly ZoomLevel3RecordEndpoint = 'archives-recordPage-editorial/run?'

  private readonly ZoomLevel2HoverEndpoint = 'archives-hoverState/run?'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: string) {
    const result = await this.triplyService.queryTriplyData<ArchivesDetailZoomLevel3DataType>(
      this.ZoomLevel3Endpoint,
      archivesDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 2 },
      { id }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.Archives,
      id,
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail)?.split(';'),
    }
  }

  public async getRelationsData(id: string, type: EntityNames, paginationArgs: PaginationArgs) {
    const result = await this.triplyService.queryTriplyData<ArchiveRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      archiveRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type }
    )
    const output = TriplyUtils.sanitizeObjectArray(result.data, 'relation', 'idRelation')
    return output
  }

  public async getRelationsDataCount(id: string, type: EntityNames) {
    const result = await this.triplyService.queryTriplyData<ArchiveRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      archiveRelationsCountKeys,
      { page: 1, pageSize: 1 },
      { id, type }
    )

    return result.data
  }

  public async getZoomLevel3RecordData(id: string) {
    const result = await this.triplyService.queryTriplyData<ArchivesRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      archivesRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id }
    )

    return result?.data
  }

  public async getZoomRecordHover(id: string) {
    const results = await this.triplyService.queryTriplyData<ArchivesZoomLevel2HoverData>(
      this.ZoomLevel2HoverEndpoint,
      archivesZoomLevel2HoverDataKeys,
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
