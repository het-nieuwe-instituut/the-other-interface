import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'

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

// export interface ArchivesFondsDetailZoomLevel3Data {
//   id: string
//   thumnail?: string
//   objectNumber?: string
//   title?: string
//   startDate?: string
//   endDate?: string
//   dateLabel?: string
//   dimensionFree?: string
//   mediaReference?: string
//   mediaReferenceLabel?: string
//   existenceOfOriginals?: string
//   scopeContent?: string
//   relatedMaterial?: string
//   rights?: string
//   rightsLabel?: string
//   permanentLink?: string
// }

// const archivesFondsDetailZoomLevel3DataKeys: KeysToVerify<ArchivesFondsDetailZoomLevel3Data> = {
//   id: true,
//   thumnail: true,
//   objectNumber: true,
//   title: true,
//   startDate: true,
//   endDate: true,
//   dateLabel: true,
//   dimensionFree: true,
//   mediaReference: true,
//   mediaReferenceLabel: true,
//   existenceOfOriginals: true,
//   scopeContent: true,
//   relatedMaterial: true,
//   rights: true,
//   rightsLabel: true,
//   permanentLink: true,
// }

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

  private readonly ZoomLevel3Endpoint =
    'archives-recordPage/run?'

  private readonly ZoomLevel3RecordEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/archives-recordPage-editorial/11/run?'

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

  public async getZoomLevel3RecordData(id: string) {
    const result = await this.triplyService.queryTriplyData<ArchivesRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      archivesRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id }
    )

    return result?.data
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
