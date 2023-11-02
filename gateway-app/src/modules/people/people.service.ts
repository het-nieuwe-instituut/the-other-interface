import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getHttpThumbnailOrNull, getUniqueById } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'

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
  thumbnail?: string
  title?: string
  id: string
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
  thumbnail: true,
  title: true,
  id: true,
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

  private readonly ZoomLevel3Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/people-recordPage/run?'

  public constructor(private triplyService: TriplyService) {}

  public async getZoomLevel2Data(page = 1, pageSize = 48) {
    const result = await this.triplyService.queryTriplyData<PeopleZoomLevel2Data>(
      this.ZoomLevel2Endpoint,
      peopleZoomLevel2DataKeys,
      { page, pageSize }
    )

    const uniqueNodes = getUniqueById(result.data).map(res => ({
      thumbnail: res.thumbnail,
      title: res.title,
      id: res.id,
    }))

    return {
      page,
      nodes: uniqueNodes,
    }
  }

  public async getZoomLevel2DataAmount() {
    const countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
      this.ZoomLevel2CountEndpoint,
      { total: true },
      undefined
    )

    const total = countResult?.data.pop()?.total ?? '0'

    return {
      total,
    }
  }

  public async getZoomLevel3Data(id: string) {
    const result = await this.triplyService.queryTriplyData<PeopleDetailZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      peopleDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 2 },
      { id }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.People,
      id,
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail),
    }
  }
}
