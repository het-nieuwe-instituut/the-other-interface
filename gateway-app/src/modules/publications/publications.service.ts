import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { TriplyUtils } from '../triply/triply.utils'
import { getHttpThumbnailOrNull, getUniqueById } from '../util/helpers'

export interface PublicationsZoomLevel2Data {
  thumbnail: string
  title: string
  id: string
}

export const publicationsZoomLevel2DataKeys: KeysToVerify<PublicationsZoomLevel2Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

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

@Injectable()
export class PublicationsService {
  protected entityType = 'triply'

  // TODO: replace DeprecatedZoomLevel2Endpoint and DeprecatedZoomLevel2CountEndpoint with testing environment endpoints
  private readonly DeprecatedZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/books-landingPage/run'
  private readonly DeprecatedZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/books-landingPage-count/run'

  private readonly ZoomLevel2TextSearchEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/publications-textSearch/run'
  private readonly ZoomLevel2TextSearchCountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/publications-textSearch-Count/run'

  private readonly ZoomLevel3Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/publications-recordPage/run?'

  private readonly publicationDescriptionLevelEndpoint = 'Zoom-3-books-type/run'

  public constructor(
    private readonly triplyService: TriplyService,
    @Inject(forwardRef(() => ZoomLevel3Service))
    private readonly zoomLevel3Service: ZoomLevel3Service
  ) {}

  public async getZoomLevel2Data(page = 1, pageSize = 48, text?: string) {
    let result

    if (text) {
      result = await this.triplyService.queryTriplyData<PublicationsZoomLevel2Data>(
        this.ZoomLevel2TextSearchEndpoint,
        publicationsZoomLevel2DataKeys,
        { page, pageSize },
        { text }
      )
    } else {
      result = await this.triplyService.queryTriplyData<PublicationsZoomLevel2Data>(
        this.DeprecatedZoomLevel2Endpoint,
        publicationsZoomLevel2DataKeys,
        { page, pageSize }
      )
    }

    const uniqueNodes = getUniqueById(result?.data).map(res => ({
      thumbnail: res.thumbnail,
      title: res.title,
      id: res.id,
    }))

    return {
      page,
      nodes: uniqueNodes,
    }
  }

  public async getZoomLevel2DataAmount(text?: string) {
    let countResult

    if (text) {
      countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
        this.ZoomLevel2TextSearchCountEndpoint,
        { total: true },
        undefined,
        { text }
      )
    } else {
      countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
        this.DeprecatedZoomLevel2CountEndpoint,
        { total: true },
        undefined
      )
    }

    const total = countResult?.data.pop()?.total ?? '0'

    return {
      total,
    }
  }

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
      thumbnail: getHttpThumbnailOrNull(result.data[0]?.thumbnail),
    }
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
}
