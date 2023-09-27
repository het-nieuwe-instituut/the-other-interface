import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
// import { ObjectMakerType, ObjectMaterialType, ObjectTechniqueType } from './objects.type'

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
  thumbnail: true
  title: true
  id: true
}
const objectsDetailZoomLevel3DataKeys: KeysToVerify<ObjectsDetailZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
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
    // const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Objects, id)

    console.log('uri', objectsDetailZoomLevel3DataKeys, this.ZoomLevel3Endpoint)

    const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      objectsDetailZoomLevel3DataKeys,
      // TODO ask Tanja about returning only one record
      { page: 1, pageSize: 1 },
      { id }
    )

    return {
      type: EntityNames.Objects,
      id,
      thumbnail: result.data[0]?.thumbnail,
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
