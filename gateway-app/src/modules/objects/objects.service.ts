import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData, zoomLevel3ReturnDataKeys } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ObjectMakerType, ObjectMaterialType, ObjectTechniqueType } from './objects.type'

export enum ObjectsZoomLevel3Ids {
  subject = 'subject',
  personInstitution = 'personInstitution',
  technique = 'technique',
  objectName = 'objectName',
  creator = 'creator',
  date = 'date',
  material = 'material',
}

export enum ObjectsZoomLevel4Filters {
  Objectname = 'Objectname',
  Maker = 'Maker',
  Material = 'Objectname',
  Technique = 'Technique',
  Subject = 'Subject',
  PerInst = 'PerInst',
  date = 'date',
}

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

interface ObjectsDetailZoomLevel5Data {
  image?: string
  imageLabel?: string
  title?: string
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
const objectsDetailZoomLevel5DataKeys: KeysToVerify<ObjectsDetailZoomLevel5Data> = {
  image: true,
  imageLabel: true,
  title: true,
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

  private readonly ZoomLevel3Mapping = [
    {
      id: ObjectsZoomLevel3Ids.subject,
      name: 'Onderwerp',
      endpoint: 'zoom-3-objects-subject-filter/run',
    },
    {
      id: ObjectsZoomLevel3Ids.personInstitution,
      name: 'Persoon/instelling',
      endpoint: 'zoom-3-objects-person-institution-filter/run',
    },
    {
      id: ObjectsZoomLevel3Ids.technique,
      name: 'Technieken',
      endpoint: 'zoom-3-objects-technique-filter/run',
    },
    {
      id: ObjectsZoomLevel3Ids.objectName,
      name: 'Objectnaam',
      endpoint: 'zoom-3-objects-objectname-filter/run',
    },
    {
      id: ObjectsZoomLevel3Ids.creator,
      name: 'Vervaardiger',
      endpoint: 'zoom-3-objects-creator-filter/run',
    },
    {
      id: ObjectsZoomLevel3Ids.date,
      name: 'Datering',
      endpoint: 'zoom-3-objects-date-filter/run',
    },
    {
      id: ObjectsZoomLevel3Ids.material,
      name: 'Materialen',
      endpoint: 'zoom-3-objects-material-filter/run',
    },
  ]

  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/objects-landingPage/run'

  private readonly ZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/objects-landingPage-count/run'

  private readonly ZoomLevel5Endpoint = 'zoom-5-objects/run'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: ObjectsZoomLevel3Ids, page = 1, pageSize = 16) {
    const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

    if (!mapping) {
      throw CustomError.internalCritical(`[Objects] Mapping ${id} not found`)
    }

    const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(
      mapping?.endpoint,
      zoomLevel3ReturnDataKeys,
      { page, pageSize }
    )

    return TriplyUtils.parseLevel3OutputData(result.data)
  }

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

  public async getZoomLevel5Data(objectId: string) {
    const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Objects, objectId)
    const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel5Data>(
      this.ZoomLevel5Endpoint,
      objectsDetailZoomLevel5DataKeys,
      undefined,
      { record: uri }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      id: objectId,
      ...this.getDimensionValueFromData(result.data),
      dimensionUnit: result.data.find(d => d.dimensionUnit)?.dimensionUnit,
      makers: this.getMakersValueFromData(result.data),
      materials: this.getMaterialsValueFromData(result.data),
      techniques: this.getTechniquesValueFromData(result.data),
    }
  }

  public validateFilterInput(input: string): ObjectsZoomLevel3Ids {
    if (Object.keys(ObjectsZoomLevel3Ids).includes(input)) {
      // we can do this since we do key=value
      return ObjectsZoomLevel3Ids[input as ObjectsZoomLevel3Ids]
    }

    throw CustomError.internalCritical(`[Objects] Invalid filter input "${input}"`)
  }

  private getDimensionValueFromData(data: ObjectsDetailZoomLevel5Data[]) {
    const dimHeight = data.find(d => d.dimensionType === 'hoogte')?.dimensionValue
    const dimWidth = data.find(d => d.dimensionType === 'breedte')?.dimensionValue
    const dimDepth = data.find(d => d.dimensionType === 'diepte')?.dimensionValue

    return { dimDepth, dimWidth, dimHeight }
  }

  private getMakersValueFromData(data: ObjectsDetailZoomLevel5Data[]): ObjectMakerType[] {
    return data
      .filter(d => !!d.maker)
      .map(d => ({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: TriplyUtils.getIdFromUri(d.maker!),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        maker: d.maker!,
        makerLabel: d.makerLabel,
        makerRole: d.makerRole,
        makerRoleLabel: d.makerRoleLabel,
      }))
  }

  private getMaterialsValueFromData(data: ObjectsDetailZoomLevel5Data[]): ObjectMaterialType[] {
    return data
      .filter(d => !!d.material)
      .map(d => ({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: TriplyUtils.getIdFromUri(d.material!),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        material: d.material!,
        materialLabel: d.materialLabel,
      }))
  }

  private getTechniquesValueFromData(data: ObjectsDetailZoomLevel5Data[]): ObjectTechniqueType[] {
    return data
      .filter(d => !!d.technique)
      .map(d => ({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: TriplyUtils.getIdFromUri(d.technique!),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        technique: d.technique!,
        techniqueLabel: d.techniqueLabel,
      }))
  }
}
