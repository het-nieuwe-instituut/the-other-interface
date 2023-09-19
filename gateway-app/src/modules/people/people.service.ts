import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PeopleAssociationType } from './people.type'

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

interface PeopleDetailZoomLevel3Data {
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
const peopleDetailZoomLevel3DataKeys: KeysToVerify<PeopleDetailZoomLevel3Data> = {
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
  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/people-landingPage/run'
  private readonly ZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/people-landingPage-count/run'

  private readonly detailEndpoint =
    '/zoom-3-people/run?record=https://collectiedata.hetnieuweinstituut.nl/id/people/'

  private readonly ZoomLevel3Endpoint = 'zoom-3-people/run'

  public constructor(private triplyService: TriplyService) {}

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

  public async getZoomLevel3Data(objectId: string) {
    const uri = TriplyUtils.getUriForTypeAndId(EntityNames.People, objectId)
    const result = await this.triplyService.queryTriplyData<PeopleDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      peopleDetailZoomLevel3DataKeys,
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

  private getAssociationsFromData(data: PeopleDetailZoomLevel3Data[]): PeopleAssociationType[] {
    return data
      .filter(d => !!d.association)
      .map(d => ({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        association: d.association!,
        associationLabel: d.associationLabel,
      }))
  }
}
