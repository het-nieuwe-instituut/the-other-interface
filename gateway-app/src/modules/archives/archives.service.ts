import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getHttpThumbnailOrNull, getUniqueById } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'

export interface ArchivesZoomLevel2Data {
  thumbnail: string
  title: string
  id: string
}

export const archivesZoomLevel2DataKeys: KeysToVerify<ArchivesZoomLevel2Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

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

export enum ArchivesZoomLevel3Types {
  fonds = 'fonds',
  other = 'other',
}

export interface ArchivesFondsDetailZoomLevel3Data {
  id: string
  thumnail?: string
  objectNumber?: string
  title?: string
  startDate?: string
  endDate?: string
  dateLabel?: string
  dimensionFree?: string
  mediaReference?: string
  mediaReferenceLabel?: string
  existenceOfOriginals?: string
  scopeContent?: string
  relatedMaterial?: string
  rights?: string
  rightsLabel?: string
  permanentLink?: string
}

const archivesFondsDetailZoomLevel3DataKeys: KeysToVerify<ArchivesFondsDetailZoomLevel3Data> = {
  id: true,
  thumnail: true,
  objectNumber: true,
  title: true,
  startDate: true,
  endDate: true,
  dateLabel: true,
  dimensionFree: true,
  mediaReference: true,
  mediaReferenceLabel: true,
  existenceOfOriginals: true,
  scopeContent: true,
  relatedMaterial: true,
  rights: true,
  rightsLabel: true,
  permanentLink: true,
}

export interface ArchivesOtherDetailZoomLevel3Data {
  id: string
  thumbnail?: string
  descriptionLevel?: string
  objectNumber?: string
  recordTitle?: string
  startDate?: string
  endDate?: string
  productionDate?: string
  extent?: string
  repository?: string
  repositoryLabel?: string
  creator?: string
  creatorLabel?: string
  creatorHistory?: string
  custodialHistory?: string
  systemOfArrangement?: string
  contentScope?: string
  conditionsGoverningAccess?: string
  relatedMaterial?: string
  appendices?: string
  source?: string
  partReference?: string
  partTitle?: string
  right?: string
  rightsLabel?: string
  permanentLink?: string
  pidWorkURI?: string
}

const archivesOtherDetailZoomLevel3DataKeys: KeysToVerify<ArchivesOtherDetailZoomLevel3Data> = {
  id: true,
  thumbnail: true,
  descriptionLevel: true,
  objectNumber: true,
  recordTitle: true,
  startDate: true,
  endDate: true,
  productionDate: true,
  extent: true,
  repository: true,
  repositoryLabel: true,
  creator: true,
  creatorLabel: true,
  creatorHistory: true,
  custodialHistory: true,
  systemOfArrangement: true,
  contentScope: true,
  conditionsGoverningAccess: true,
  relatedMaterial: true,
  appendices: true,
  source: true,
  partReference: true,
  partTitle: true,
  right: true,
  rightsLabel: true,
  permanentLink: true,
  pidWorkURI: true,
}
type ArchivesZoomLeve3DataType =
  | ArchivesOtherDetailZoomLevel3Data
  | ArchivesFondsDetailZoomLevel3Data
const archivesZoomLevel3DataKeys = {
  [ArchivesZoomLevel3Types.other]: archivesOtherDetailZoomLevel3DataKeys,
  [ArchivesZoomLevel3Types.fonds]: archivesFondsDetailZoomLevel3DataKeys,
}

@Injectable()
export class ArchivesService {
  protected entityType = 'triply'

  // TODO: replace DeprecatedZoomLevel2Endpoint and DeprecatedZoomLevel2CountEndpoint with testing environment endpoints
  private readonly DeprecatedZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/archives-landingPage/run'

  private readonly DeprecatedZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/archives-landingPage-count/run'

  private readonly ZoomLevel2TextSearchEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/archives-textSearch/run'
  private readonly ZoomLevel2TextSearchCountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/archives-textSearch-Count/run'

  // TODO: change to convention when Triply adds this to normal space
  // private readonly archivesDescriptionLevelEndpoint =
  //   'https://api.collectiedata.hetnieuweinstituut.nl/queries/Joran/zoom3-archives-type-only/run?'

  private readonly ZoomLevel3Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/archives-recordPage/run?'

  public constructor(private triplyService: TriplyService) {}

  // public async determineArchiveType(id: string) {
  //   interface ArchivesDescriptionLevelData {
  //     record: string
  //     descriptionLevel: string
  //   }
  //   const keys: KeysToVerify<ArchivesDescriptionLevelData> = {
  //     record: true,
  //     descriptionLevel: true,
  //   }

  //   const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Archives, id)
  //   const res = await this.triplyService.queryTriplyData<ArchivesDescriptionLevelData>(
  //     this.archivesDescriptionLevelEndpoint,
  //     keys,
  //     undefined,
  //     { record: uri }
  //   )

  //   if (res.data[0].descriptionLevel === 'archief') {
  //     return ArchivesZoomLevel3Types.fonds
  //   }

  //   return ArchivesZoomLevel3Types.other
  // }

  public async getZoomLevel2Data(page = 1, pageSize = 48, text?: string) {
    let result

    if (text) {
      result = await this.triplyService.queryTriplyData<ArchivesZoomLevel2Data>(
        this.ZoomLevel2TextSearchEndpoint,
        archivesZoomLevel2DataKeys,
        { page, pageSize },
        { text }
      )
    } else {
      result = await this.triplyService.queryTriplyData<ArchivesZoomLevel2Data>(
        this.DeprecatedZoomLevel2Endpoint,
        archivesZoomLevel2DataKeys,
        { page, pageSize }
      )
    }

    const uniqueNodes = getUniqueById(result?.data).map(res => ({
      thumbnail: res.thumbnail,
      title: res.title,
      id: res.id,
    }))

    return {
      page,
      nodes: uniqueNodes,
    }
  }

  public async getZoomLevel2DataAmount(text?: string) {
    let countResult

    if (text) {
      countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
        this.ZoomLevel2TextSearchCountEndpoint,
        { total: true },
        undefined,
        { text }
      )
    } else {
      countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
        this.DeprecatedZoomLevel2CountEndpoint,
        { total: true },
        undefined
      )
    }

    const total = countResult?.data.pop()?.total ?? '0'

    console.log('getZoomLevel2DataAmount', { text, data: countResult?.data })

    return {
      total,
    }
  }

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
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail),
    }
  }

  // private getCreatorsValueFromData(data: ArchivesZoomLeve3DataType[]): ArchivesFondsCreatorType[] {
  //   return data
  //     .filter(d => 'creator' in d && !!d.creator)
  //     .map((d: ArchivesOtherDetailZoomLevel3Data) => ({
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       id: TriplyUtils.getIdFromUri(d.creator!),
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       creator: d.creator!,
  //       creatorHistory: d.creatorHistory,
  //       creatorLabel: d.creatorLabel,
  //     }))
  // }
}
