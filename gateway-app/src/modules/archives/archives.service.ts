import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
// import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
// import { ArchivesFondsCreatorType } from './archives.type'

export interface ArchivesZoomLevel2Data {
  thumbnail: true
  title: true
  id: true
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
}
const archivesDetailZoomLevel3DataKeys: KeysToVerify<ArchivesDetailZoomLevel3DataType> = {
  id: true,
  title: true,
  thumbnail: true,
}

@Injectable()
export class ArchivesService {
  protected entityType = 'triply'

  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/archives-landingPage/run'

  private readonly ZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/archives-landingPage-count/run'

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

  public async getZoomLevel2Data(page = 1, pageSize = 48) {
    const result = await this.triplyService.queryTriplyData<ArchivesZoomLevel2Data>(
      this.ZoomLevel2Endpoint,
      archivesZoomLevel2DataKeys,
      { page, pageSize }
    )

    const countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
      this.ZoomLevel2CountEndpoint,
      { total: true },
      undefined
    )

    const total = countResult?.data.pop()?.total ?? '0'

    return {
      page,
      total,
      nodes: result.data.map(res => {
        return {
          thumbnail: res.thumbnail,
          title: res.title,
          id: res.id,
        }
      }),
    }
  }

  public async getZoomLevel3Data(type: EntityNames, id: string) {
    console.log('uri', archivesDetailZoomLevel3DataKeys, this.ZoomLevel3Endpoint)

    const result = await this.triplyService.queryTriplyData<ArchivesDetailZoomLevel3DataType>(
      this.ZoomLevel3Endpoint,
      archivesDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 2 },
      { id }
    )

    console.log('result', result)

    // const pidWorkURIs: Set<string> = new Set()
    // result.data.forEach(d => 'pidWorkURI' in d && d.pidWorkURI && pidWorkURIs.add(d.pidWorkURI))

    return {
      type,
      id,
      thumbnail: result.data[0]?.thumbnail,
      title: result.data[0]?.title,
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
