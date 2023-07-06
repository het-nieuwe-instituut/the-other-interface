import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData, zoomLevel3ReturnDataKeys } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PeopleAssociationType, PeopleZoomLevel4FiltersArgs } from './people.type'

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

interface PeopleFilterData {
  filter: string
}
const peopleFilterDataKeys: KeysToVerify<PeopleFilterData> = {
  filter: true,
}

export interface PeopleData {
  name: string | null
  birthDate: string | null
  deathDate: string | null
  nationalityLabel: string | null
}

interface PeopleZoomLevel4Data {
  record: string
  name: string
}
const peopleZoomLevel4DataKeys: KeysToVerify<PeopleZoomLevel4Data> = {
  record: true,
  name: true,
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

  private readonly ZoomLevel4Endpoint = 'zoom-4-people-V2/run'
  private readonly ZoomLevel4CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/Joran/zoom4-people-count/run'

  private readonly ZoomLevel5Endpoint = 'zoom-5-people/run'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel2Data() {
    const result = await this.triplyService.queryTriplyData<PeopleFilterData>(
      this.zoomLevel2Endpoint,
      peopleFilterDataKeys
    )

    return result.data
      .map(r => {
        const filterMapping = this.ZoomLevel3Mapping.find(m => m.name === r.filter)
        if (!filterMapping) return
        return { filter: filterMapping.name, id: filterMapping.id }
      })
      .filter(f => !!f?.id)
  }

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

  public async getZoomLevel4Data(filters: PeopleZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
    if (Object.keys(filters).length === 0) {
      return []
    }

    const searchParams = TriplyUtils.getQueryParamsFromObject(filters)

    const result = await this.triplyService.queryTriplyData<PeopleZoomLevel4Data>(
      this.ZoomLevel4Endpoint,
      peopleZoomLevel4DataKeys,
      { page, pageSize },
      searchParams
    )

    const countResult = await this.triplyService.queryTriplyData<{ count?: string }>(
      this.ZoomLevel4CountEndpoint,
      { count: true },
      undefined,
      searchParams
    )
    const total = parseInt(countResult.data.pop()?.count || '0', 10)

    return {
      total,
      appliedFilters: JSON.stringify(filters),
      page,
      hasMore: page * pageSize < total,
      nodes: result.data.map(res => {
        return {
          record: res.record,
          title: res.name,
          firstImage: null,
          imageLabel: null,
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
