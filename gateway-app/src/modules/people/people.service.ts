import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData, zoomLevel3ReturnDataKeys } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PeopleAssociationType } from './people.type'

export enum PeopleZoomLevel3Ids {
  deathDate = 'deathDate',
  nameType = 'nameType',
  birthDate = 'birthDate',
  period = 'period',
  place = 'place',
  profession = 'profession',
}

export enum PeopleZoomLevel4Filters {
  NameType = 'NameType',
  Profession = 'Profession',
  Place = 'Place',
  Period = 'Period',
  BirthDate = 'BirthDate',
  DeathDate = 'DeathDate',
}

export interface PeopleData {
  name: string | null
  birthDate: string | null
  deathDate: string | null
  nationalityLabel: string | null
}

interface PeopleZoomLevel2Data {
  thumbnail: string
  title: string
  id: string
}
const peopleZoomLevel2DataKeys: KeysToVerify<PeopleZoomLevel2Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

interface PeopleDetailZoomLevel5Data {
  name?: string
  nameType?: string
  nameVariation?: string
  birthDate?: string
  birthPlace?: string
  birthPlaceLabel?: string
  deathDate?: string
  deathPlace?: string
  deathPlaceLabel?: string
  place?: string
  placeLabel?: string
  startDate?: string
  endDate?: string
  nationality?: string
  nationalityLabel?: string
  institution?: string
  institutionLabel?: string
  profession?: string
  professionLabel?: string
  gender?: string
  association?: string
  associationLabel?: string
  relatedItem?: string
  relatedItemLabel?: string
  description?: string
  permanentLink?: string
}
const peopleDetailZoomLevel5DataKeys: KeysToVerify<PeopleDetailZoomLevel5Data> = {
  name: true,
  nameType: true,
  nameVariation: true,
  birthDate: true,
  birthPlace: true,
  birthPlaceLabel: true,
  deathDate: true,
  deathPlace: true,
  deathPlaceLabel: true,
  place: true,
  placeLabel: true,
  startDate: true,
  endDate: true,
  nationality: true,
  nationalityLabel: true,
  institution: true,
  institutionLabel: true,
  profession: true,
  professionLabel: true,
  gender: true,
  association: true,
  associationLabel: true,
  relatedItem: true,
  relatedItemLabel: true,
  description: true,
  permanentLink: true,
}

@Injectable()
export class PeopleService {
  protected entityType = 'triply'
  private readonly detailEndpoint =
    '/zoom-5-people/run?record=https://collectiedata.hetnieuweinstituut.nl/id/people/'
  private readonly zoomLevel2Endpoint = 'zoom-2-people/run'

  private readonly ZoomLevel3Mapping = [
    {
      id: PeopleZoomLevel3Ids.deathDate,
      name: 'Overlijdensdatum',
      endpoint: 'zoom-3-people-death-date-filter/run',
    },
    {
      id: PeopleZoomLevel3Ids.nameType,
      name: 'Naam soort',
      endpoint: 'zoom-3-people-name-type-filter/run',
    },
    {
      id: PeopleZoomLevel3Ids.birthDate,
      name: 'Geboortedatum',
      endpoint: 'zoom-3-people-birth-date-filter/run',
    },
    {
      id: PeopleZoomLevel3Ids.period,
      name: 'Periode',
      endpoint: 'zoom-3-people-period-filter/run',
    },
    {
      id: PeopleZoomLevel3Ids.place,
      name: 'Plaats',
      endpoint: 'zoom-3-people-place-filter/run',
    },
    {
      id: PeopleZoomLevel3Ids.profession,
      name: 'Beroep/Werkveld',
      endpoint: 'zoom-3-people-profession-filter/run',
    },
  ]

  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/people-landingPage/run'
  private readonly ZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/people-landingPage-count/run'

  private readonly ZoomLevel5Endpoint = 'zoom-5-people/run'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel3Data(id: PeopleZoomLevel3Ids, page = 1, pageSize = 16) {
    const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

    if (!mapping) {
      throw CustomError.internalCritical(`[People] Mapping ${id} not found`)
    }

    const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(
      mapping?.endpoint,
      zoomLevel3ReturnDataKeys,
      { page, pageSize }
    )

    return TriplyUtils.parseLevel3OutputData(result.data)
  }

  public async getZoomLevel2Data(page = 1, pageSize = 48) {
    const result = await this.triplyService.queryTriplyData<PeopleZoomLevel2Data>(
      this.ZoomLevel2Endpoint,
      peopleZoomLevel2DataKeys,
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
    const uri = TriplyUtils.getUriForTypeAndId(EntityNames.People, objectId)
    const result = await this.triplyService.queryTriplyData<PeopleDetailZoomLevel5Data>(
      this.ZoomLevel5Endpoint,
      peopleDetailZoomLevel5DataKeys,
      undefined,
      { record: uri }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      id: objectId,
      nameTypes: result.data.filter(d => !!d.nameType).map(d => d.nameType),
      associations: this.getAssociationsFromData(result.data),
    }
  }

  public validateFilterInput(input: string): PeopleZoomLevel3Ids {
    if (Object.keys(PeopleZoomLevel3Ids).includes(input)) {
      // we can do this since we do key=value
      return PeopleZoomLevel3Ids[input as PeopleZoomLevel3Ids]
    }

    throw CustomError.internalCritical(`[People] Invalid filter input "${input}"`)
  }

  private getAssociationsFromData(data: PeopleDetailZoomLevel5Data[]): PeopleAssociationType[] {
    return data
      .filter(d => !!d.association)
      .map(d => ({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        association: d.association!,
        associationLabel: d.associationLabel,
      }))
  }
}
