import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { TriplyUtils } from '../triply/triply.utils'
import { PaginationArgs } from '../util/paginationArgs.type'

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

// new
export interface PeopleRelationsType {
  idRelation: string
  relationName: string
  occupation: string
  period: string
}

const PeopleRelationsKeys: KeysToVerify<PeopleRelationsType> = {
  idRelation: true,
  relationName: true,
  occupation: true,
  period: true,
}

export interface PeopleRelationsCountType {
  total: string
}

const peopleRelationsCountKeys: KeysToVerify<PeopleRelationsCountType> = {
  total: true,
}
export interface PeopleRecordZoomLevel3Data {
  type?: string
  profession?: string
  nameVariations?: string
  birthDate?: string
  birthPlace?: string
  deathDate?: string
  deathPlace?: string
  nationality?: string
  gender?: string
  period?: string
  association?: string
  permanentLink?: string
  externalSource?: string
}

const peopleRecordZoomLevel3DataKeys: KeysToVerify<PeopleRecordZoomLevel3Data> = {
  type: true,
  profession: true,
  nameVariations: true,
  birthDate: true,
  birthPlace: true,
  deathDate: true,
  deathPlace: true,
  nationality: true,
  gender: true,
  period: true,
  association: true,
  permanentLink: true,
  externalSource: true,
}

@Injectable()
export class PeopleService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'people-recordPage/run?'

  private readonly ZoomLevel3RelationsEndpoint = 'people-recordRelations/run?'

  private readonly ZoomLevel3RelationsCountEndpoint = 'people-recordRelations-Count/run?'

  private readonly ZoomLevel3RecordEndpoint = 'people-recordPage-editorial/18/run?'

  public constructor(private triplyService: TriplyService) {}

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
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail)?.split(';'),
    }
  }

  public async getRelationsData(id: string, type: EntityNames, paginationArgs: PaginationArgs) {
    const result = await this.triplyService.queryTriplyData<PeopleRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      PeopleRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type }
    )

    return result.data
  }

  public async getRelationsDataCount(id: string, type: EntityNames) {
    const result = await this.triplyService.queryTriplyData<PeopleRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      peopleRelationsCountKeys,
      { page: 1, pageSize: 10 },
      { id, type }
    )

    return result.data
  }

  public async getZoomLevel3RecordData(id: string) {
    const result = await this.triplyService.queryTriplyData<PeopleRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      peopleRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id }
    )

    return result.data
  }
}
