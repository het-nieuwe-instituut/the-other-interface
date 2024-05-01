import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { TriplyUtils } from '../triply/triply.utils'
import { getHttpThumbnailOrNull } from '../util/helpers'
import { PaginationArgs } from '../util/paginationArgs.type'

interface PublicationsZoomLevel3Data {
  thumbnail?: string
  title?: string
  id: string
  yearOfPublication?: string
  objectNumber?: string
}
const publicationsDetailZoomLevel3DataKeys: KeysToVerify<PublicationsZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
  yearOfPublication: true,
  objectNumber: true,
}
export interface PublicationRelationsType {
  idRelation?: string
  titleR?: string
  typePub?: string
  yearPub?: string
  externalSource?: string
}

const publicationRelationsKeys: KeysToVerify<PublicationRelationsType> = {
  idRelation: true,
  titleR: true,
  typePub: true,
  yearPub: true,
  externalSource: true,
}

export interface PublicationsRelationsCountType {
  total: string
}

const publicationsRelationsCountKeys: KeysToVerify<PublicationsRelationsCountType> = {
  total: true,
}

export interface PublicationsZoomLevel2HoverData {
  title: string
  profession: string
  description: string
}

const publicationsZoomLevel2HoverDataKeys: KeysToVerify<PublicationsZoomLevel2HoverData> = {
  title: true,
  profession: true,
  description: true,
}

interface PublicationsBooksDetailZoomLevel3Data {
  thumbnail: true
  id: true
  typeOfPublication?: string
  typeOfPublicationLabel?: string
  title?: string
  author?: string
  authorLabel?: string
  authorRole?: string
  authorRoleLabel?: string
  publisher?: string
  publisherLabel?: string
  yearOfPublication?: string
  placeOfPublication?: string
  placeOfPublicationLabel?: string
  isbn?: string
  description?: string
  annotation?: string
  codeOfArchive?: string
  codeOfArchiveLabel?: string
  edition?: string
  illustration?: string
  numberOfPages?: string
  language?: string
  languageLabel?: string
  seriesLabel?: string
  number?: string
  geographicalKeyword?: string
  geographicalKeywordLabel?: string
  subject?: string
  subjectLabel?: string
  relatedPerInst?: string
  relatedPerInstLabel?: string
  objectNumber?: string
  availability?: string
  shelfmark?: string
  permanentLink?: string
}
const publicationsBooksDetailZoomLevel3DataKeys: KeysToVerify<PublicationsBooksDetailZoomLevel3Data> =
  {
    id: true,
    thumbnail: true,
    typeOfPublication: true,
    typeOfPublicationLabel: true,
    title: true,
    author: true,
    authorLabel: true,
    authorRole: true,
    authorRoleLabel: true,
    publisher: true,
    publisherLabel: true,
    yearOfPublication: true,
    placeOfPublication: true,
    placeOfPublicationLabel: true,
    isbn: true,
    description: true,
    annotation: true,
    codeOfArchive: true,
    codeOfArchiveLabel: true,
    edition: true,
    illustration: true,
    numberOfPages: true,
    language: true,
    languageLabel: true,
    seriesLabel: true,
    number: true,
    geographicalKeyword: true,
    geographicalKeywordLabel: true,
    subject: true,
    subjectLabel: true,
    relatedPerInst: true,
    relatedPerInstLabel: true,
    objectNumber: true,
    availability: true,
    shelfmark: true,
    permanentLink: true,
  }

interface PublicationsSerialDetailZoomLevel3Data {
  id: string
  thumbnail?: string
  typeOfPublication?: string
  typeOfPublicationLabel?: string
  title?: string
  publisher?: string
  publisherLabel?: string
  yearOfPublication?: string
  placeOfPublication?: string
  placeOfPublicationLabel?: string
  subject?: string
  subjectLabel?: string
  language?: string
  languageLabel?: string
  continuedFrom?: string
  continuedAs?: string
  remarks?: string
  availability?: string
  shelfmark?: string
  holding?: string
  permanentLink?: string
}
const publicationsSerialDetailZoomLevel3DataKeys: KeysToVerify<PublicationsSerialDetailZoomLevel3Data> =
  {
    id: true,
    thumbnail: true,
    typeOfPublication: true,
    typeOfPublicationLabel: true,
    title: true,
    publisher: true,
    publisherLabel: true,
    yearOfPublication: true,
    placeOfPublication: true,
    placeOfPublicationLabel: true,
    subject: true,
    subjectLabel: true,
    language: true,
    languageLabel: true,
    continuedFrom: true,
    continuedAs: true,
    remarks: true,
    availability: true,
    shelfmark: true,
    holding: true,
    permanentLink: true,
  }

interface PublicationArticleDetailZoomLevel3Data {
  id: string
  thumbnail?: string
  typeOfPublication?: string
  typeOfPublicationLabel?: string
  title?: string
  author?: string
  authorLabel?: string
  authorRole?: string
  authorRoleLabel?: string
  sourceTitle?: string
  sourceTitleLabel?: string
  volume?: string
  issue?: string
  yearOfPublication?: string
  page?: string
  publisher?: string
  publisherLabel?: string
  abstract?: string
  language?: string
  languageLabel?: string
  geographicalKeyword?: string
  geographicalKeywordLabel?: string
  subject?: string
  subjectLabel?: string
  relatedPerInst?: string
  relatedPerInstLabel?: string
  objectNumber?: string
  availability?: string
  shelfmark?: string
  permanentLink?: string
}
const publicationArticleDetailZoomLevel3DataKeys: KeysToVerify<PublicationArticleDetailZoomLevel3Data> =
  {
    id: true,
    thumbnail: true,
    typeOfPublication: true,
    typeOfPublicationLabel: true,
    title: true,
    author: true,
    authorLabel: true,
    authorRole: true,
    authorRoleLabel: true,
    sourceTitle: true,
    sourceTitleLabel: true,
    volume: true,
    issue: true,
    yearOfPublication: true,
    page: true,
    publisher: true,
    publisherLabel: true,
    abstract: true,
    language: true,
    languageLabel: true,
    geographicalKeyword: true,
    geographicalKeywordLabel: true,
    subject: true,
    subjectLabel: true,
    relatedPerInst: true,
    relatedPerInstLabel: true,
    objectNumber: true,
    availability: true,
    shelfmark: true,
    permanentLink: true,
  }

interface PublicationsAudioVisualDetailZoomLevel3Data {
  id: string
  thumbnail?: string
  typeOfPublication?: string
  typeOfPublicationLabel?: string
  title?: string
  author?: string
  authorLabel?: string
  authorRole?: string
  authorRoleLabel?: string
  publisher?: string
  publisherLabel?: string
  yearOfPublication?: string
  placeOfPublication?: string
  placeOfPublicationLabel?: string
  abstract?: string
  annotation?: string
  scope?: string
  language?: string
  languageLabel?: string
  medium?: string
  geographicalKeyword?: string
  geographicalKeywordLabel?: string
  subject?: string
  subjectLabel?: string
  relatedPerInst?: string
  relatedPerInstLabel?: string
  permanentLink?: string
  objectNumber?: string
  availability?: string
  shelfmark?: string
}
const publicationsAudioVisualDetailZoomLevel3DataKeys: KeysToVerify<PublicationsAudioVisualDetailZoomLevel3Data> =
  {
    id: true,
    thumbnail: true,
    typeOfPublication: true,
    typeOfPublicationLabel: true,
    title: true,
    author: true,
    authorLabel: true,
    authorRole: true,
    authorRoleLabel: true,
    publisher: true,
    publisherLabel: true,
    yearOfPublication: true,
    placeOfPublication: true,
    placeOfPublicationLabel: true,
    abstract: true,
    annotation: true,
    scope: true,
    language: true,
    languageLabel: true,
    medium: true,
    geographicalKeyword: true,
    geographicalKeywordLabel: true,
    subject: true,
    subjectLabel: true,
    relatedPerInst: true,
    relatedPerInstLabel: true,
    permanentLink: true,
    objectNumber: true,
    availability: true,
    shelfmark: true,
  }

export enum PublicationsZoomLevel3Types {
  serial = 'serial',
  book = 'book',
  article = 'article',
  audiovisual = 'audiovisual',
}

type PublicationsZoomLevel3DataTypes =
  | PublicationsBooksDetailZoomLevel3Data
  | PublicationsSerialDetailZoomLevel3Data
  | PublicationArticleDetailZoomLevel3Data
  | PublicationsAudioVisualDetailZoomLevel3Data
const publicationsZoomLevel3DataTypeKeys = {
  [PublicationsZoomLevel3Types.article]: publicationArticleDetailZoomLevel3DataKeys,
  [PublicationsZoomLevel3Types.audiovisual]: publicationsAudioVisualDetailZoomLevel3DataKeys,
  [PublicationsZoomLevel3Types.book]: publicationsBooksDetailZoomLevel3DataKeys,
  [PublicationsZoomLevel3Types.serial]: publicationsSerialDetailZoomLevel3DataKeys,
}

type PublicationsWithAuthors =
  | PublicationsBooksDetailZoomLevel3Data
  | PublicationArticleDetailZoomLevel3Data
  | PublicationsAudioVisualDetailZoomLevel3Data

export interface PublicationRecordZoomLevel3Data {
  objectNumber?: string
  subType?: string
  authors?: string[]
  authorRole?: string[]
  publisher?: string
  yearOfPublication?: string
  placeOfPublication?: string
  isbn?: string
  annotation?: string
  codeOfArchive?: string
  illustration?: string
  pages?: string
  language?: string
  series?: string
  number?: string
  category?: string
  relatedKeyword?: string[]
  geoKeyword?: string[]
  availability?: string
  permanentLink?: string
  externalSource?: string
  sourceTitle?: string
  volume?: string
  issue?: string
  year?: string
  subject?: string[]
}

const publicationRecordZoomLevel3DataKeys: KeysToVerify<PublicationRecordZoomLevel3Data> = {
  objectNumber: true,
  subType: true,
  authors: true,
  authorRole: true,
  publisher: true,
  yearOfPublication: true,
  placeOfPublication: true,
  isbn: true,
  annotation: true,
  codeOfArchive: true,
  illustration: true,
  pages: true,
  language: true,
  series: true,
  number: true,
  category: true,
  relatedKeyword: true,
  geoKeyword: true,
  availability: true,
  permanentLink: true,
  externalSource: true,
  sourceTitle: true,
  volume: true,
  issue: true,
  year: true,
  subject: true,
}

@Injectable()
export class PublicationsService {
  protected entityType = 'triply'

  private readonly ZoomLevel3Endpoint = 'publications-recordPage/run?'

  private readonly ZoomLevel3RelationsEndpoint = 'publications-recordRelations/run?'

  private readonly ZoomLevel3RelationsCountEndpoint = 'publications-recordRelations-Count/run?'

  private readonly ZoomLevel3RecordEndpoint = 'publications-recordPage-Editorial/run?'

  private readonly ZoomLevel2HoverEndpoint = 'publications-hoverState/run?'

  // private readonly publicationDescriptionLevelEndpoint = 'Zoom-3-books-type/run'

  public constructor(
    private readonly triplyService: TriplyService,
    @Inject(forwardRef(() => ZoomLevel3Service))
    private readonly zoomLevel3Service: ZoomLevel3Service
  ) {}

  public async getZoomLevel3Data(id: string) {
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      publicationsDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 2 },
      { id }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      type: EntityNames.Publications,
      id,
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail)?.split(';'),
    }
  }

  public async getRelationsData(id: string, type: EntityNames, paginationArgs: PaginationArgs) {
    const result = await this.triplyService.queryTriplyData<PublicationRelationsType>(
      this.ZoomLevel3RelationsEndpoint,
      publicationRelationsKeys,
      { page: paginationArgs.page ?? 1, pageSize: paginationArgs.pageSize ?? 5 },
      { id, type }
    )
    const output = TriplyUtils.sanitizeObjectArray(result.data, 'idRelation', 'relation')
    return output
  }

  public async getRelationsDataCount(id: string, type: EntityNames) {
    const result = await this.triplyService.queryTriplyData<PublicationsRelationsCountType>(
      this.ZoomLevel3RelationsCountEndpoint,
      publicationsRelationsCountKeys,
      { page: 1, pageSize: 1 },
      { id, type }
    )

    return result.data
  }

  public async getZoomLevel3RecordData(id: string) {
    const result = await this.triplyService.queryTriplyData<PublicationRecordZoomLevel3Data>(
      this.ZoomLevel3RecordEndpoint,
      publicationRecordZoomLevel3DataKeys,
      { page: 1, pageSize: 1 },
      { id }
    )

    return result.data
  }

  public resolveAuthor(publication: PublicationsZoomLevel3DataTypes) {
    if (!('author' in publication) || !publication.author) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(publication.author)
    const id = TriplyUtils.getIdFromUri(publication.author)

    return this.zoomLevel3Service.getDetail(id, type)
  }

  public resolvePublisher(publication: PublicationsZoomLevel3DataTypes) {
    if (!('publisher' in publication) || !publication.publisher) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(publication.publisher)
    const id = TriplyUtils.getIdFromUri(publication.publisher)

    return this.zoomLevel3Service.getDetail(id, type)
  }

  public async getZoomLevel2Hover(id: string) {
    const results = await this.triplyService.queryTriplyData<PublicationsZoomLevel2HoverData>(
      this.ZoomLevel2HoverEndpoint,
      publicationsZoomLevel2HoverDataKeys,
      undefined,
      { id }
    )
    return results.data[0]
  }
}
