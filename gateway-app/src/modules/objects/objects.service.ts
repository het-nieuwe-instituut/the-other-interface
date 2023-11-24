import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'

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

  private readonly ZoomLevel3Endpoint =
    'objects-recordPage/run?'

  private readonly ZoomLevel3RecordEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/objects-recordPage-editorial/run?'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: string) {
    const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      objectsDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.Objects,
      id,
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail)?.split(';'),
    }
  }

  public async getZoomLevel3RecordData(id: string) {
    const result = await this.triplyService.queryTriplyData<ObjectRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      objectRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id }
    )

    return result.data
  }

  // private getDimensionValueFromData(data: ObjectsDetailZoomLevel3Data[]) {
  //   const dimHeight = data.find(d => d.dimensionType === 'hoogte')?.dimensionValue
  //   const dimWidth = data.find(d => d.dimensionType === 'breedte')?.dimensionValue
  //   const dimDepth = data.find(d => d.dimensionType === 'diepte')?.dimensionValue

  //   return { dimDepth, dimWidth, dimHeight }
  // }

  // private getMakersValueFromData(data: ObjectsDetailZoomLevel3Data[]): ObjectMakerType[] {
  //   return data
  //     .filter(d => !!d.maker)
  //     .map(d => ({
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       id: TriplyUtils.getIdFromUri(d.maker!),
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       maker: d.maker!,
  //       makerLabel: d.makerLabel,
  //       makerRole: d.makerRole,
  //       makerRoleLabel: d.makerRoleLabel,
  //     }))
  // }

  // private getMaterialsValueFromData(data: ObjectsDetailZoomLevel3Data[]): ObjectMaterialType[] {
  //   return data
  //     .filter(d => !!d.material)
  //     .map(d => ({
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       id: TriplyUtils.getIdFromUri(d.material!),
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       material: d.material!,
  //       materialLabel: d.materialLabel,
  //     }))
  // }

  // private getTechniquesValueFromData(data: ObjectsDetailZoomLevel3Data[]): ObjectTechniqueType[] {
  //   return data
  //     .filter(d => !!d.technique)
  //     .map(d => ({
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       id: TriplyUtils.getIdFromUri(d.technique!),
  //       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //       technique: d.technique!,
  //       techniqueLabel: d.techniqueLabel,
  //     }))
  // }
}
