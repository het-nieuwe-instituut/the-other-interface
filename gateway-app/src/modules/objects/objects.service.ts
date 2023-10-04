import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getHttpThumbnailOrNull } from '../util/helpers'

interface ObjectsZoomLevel2Data {
  thumbnail: string
  title: string
  id: string
}

const objectsZoomLevel2DataKeys: KeysToVerify<ObjectsZoomLevel2Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

interface ObjectsDetailZoomLevel3Data {
  thumbnail?: string
  title?: string
  id: string
  imageLabel?: string
  titleType?: string
  objectNumber?: string
  objectName?: string
  objectNameLabel?: string
  archiveCollectionCode?: string
  maker?: string
  makerLabel?: string
  makerRole?: string
  makerRoleLabel?: string
  startDate?: string
  endDate?: string
  numberOfParts?: string
  scale?: string
  technique?: string
  techniqueLabel?: string
  material?: string
  materialLabel?: string
  dimensionPart?: string
  dimensionType?: string
  dimensionValue?: string
  dimensionUnit?: string
  description?: string
  associationPerson?: string
  associationPersonLabel?: string
  associationPersonType?: string
  relatedObjectTitle?: string
  creditLine?: string
  rights?: string
  rightsLabel?: string
  creationPlace?: string
  creationPlaceLabel?: string
  permanentLink?: string
}
const objectsDetailZoomLevel3DataKeys: KeysToVerify<ObjectsDetailZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
  imageLabel: true,
  titleType: true,
  objectNumber: true,
  objectName: true,
  objectNameLabel: true,
  archiveCollectionCode: true,
  maker: true,
  makerLabel: true,
  makerRole: true,
  makerRoleLabel: true,
  startDate: true,
  endDate: true,
  numberOfParts: true,
  scale: true,
  technique: true,
  techniqueLabel: true,
  material: true,
  materialLabel: true,
  dimensionPart: true,
  dimensionType: true,
  dimensionValue: true,
  dimensionUnit: true,
  description: true,
  associationPerson: true,
  associationPersonLabel: true,
  associationPersonType: true,
  relatedObjectTitle: true,
  creditLine: true,
  rights: true,
  rightsLabel: true,
  creationPlace: true,
  creationPlaceLabel: true,
  permanentLink: true,
}

@Injectable()
export class ObjectsService {
  protected entityType = 'triply'

  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/objects-landingPage/run'

  private readonly ZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/objects-landingPage-count/run'

  private readonly ZoomLevel3Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/objects-recordPage/run?'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel2Data(page = 1, pageSize = 48) {
    const result = await this.triplyService.queryTriplyData<ObjectsZoomLevel2Data>(
      this.ZoomLevel2Endpoint,
      objectsZoomLevel2DataKeys,
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

  public async getZoomLevel3Data(id: string) {
    const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      objectsDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id }
    )

    return {
      type: EntityNames.Objects,
      id,
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail),
      title: result.data[0]?.title,
    }
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
