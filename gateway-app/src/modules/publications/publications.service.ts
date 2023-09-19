import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { PublicationAuthorType } from './publications.type'

export interface PublicationsZoomLevel2Data {
  thumbnail: true
  title: true
  id: true
}

export const publicationsZoomLevel2DataKeys: KeysToVerify<PublicationsZoomLevel2Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

interface PublicationsBooksDetailZoomLevel3Data {
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
  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/books-landingPage/run'

  private readonly ZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/books-landingPage-count/run'

  private readonly ZoomLevel4CountEndpoint = 'zoom4-books-count/run'

  private readonly ZoomLevel3Endpoint = {
    [PublicationsZoomLevel3Types.article]: 'zoom-3-books-article/run',
    [PublicationsZoomLevel3Types.audiovisual]: 'zoom-3-books-audiovisual/run',
    [PublicationsZoomLevel3Types.book]: 'zoom-3-books-book/run',
    [PublicationsZoomLevel3Types.serial]: 'zoom-3-books-serial/run',
  }

  private readonly publicationDescriptionLevelEndpoint = 'Zoom-3-books-type/run'

  public constructor(
    private readonly triplyService: TriplyService,
    @Inject(forwardRef(() => ZoomLevel3Service))
    private readonly zoomLevel3Service: ZoomLevel3Service
  ) {}

  public async determinePublicationType(id: string) {
    interface TypeOfPublicationData {
      type: string
    }
    const typeOfPublicationDataKeys: KeysToVerify<TypeOfPublicationData> = {
      type: true,
    }

    const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Publications, id)
    const res = await this.triplyService.queryTriplyData<TypeOfPublicationData>(
      this.publicationDescriptionLevelEndpoint,
      typeOfPublicationDataKeys,
      undefined,
      { record: uri }
    )

    if (!res?.data?.length) {
      return PublicationsZoomLevel3Types.book
    }

    switch (res.data[0].type) {
      case 'zoom_3-books-serial':
        return PublicationsZoomLevel3Types.serial
      case 'zoom_3-books-article':
        return PublicationsZoomLevel3Types.article
      case 'zoom_3-books-audiovisual':
        return PublicationsZoomLevel3Types.audiovisual
      case 'zoom_3-books-book':
      default:
        return PublicationsZoomLevel3Types.book
    }
  }

  public async getZoomLevel2Data(page = 1, pageSize = 48) {
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel2Data>(
      this.ZoomLevel2Endpoint,
      publicationsZoomLevel2DataKeys,
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

  public async getZoomLevel3Data(publicationType: PublicationsZoomLevel3Types, objectId: string) {
    const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Publications, objectId)
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel3DataTypes>(
      this.ZoomLevel3Endpoint[publicationType],
      publicationsZoomLevel3DataTypeKeys[publicationType],
      undefined,
      { record: uri }
    )

    return {
      ...TriplyUtils.combineObjectArray(result.data),
      id: objectId,
      type: publicationType,
      authors: this.getAuthorsValueFromData(result.data),
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

  private getAuthorsValueFromData(
    data: PublicationsZoomLevel3DataTypes[]
  ): PublicationAuthorType[] {
    return data
      .filter(d => 'author' in d && !!d.author)
      .map((d: PublicationsWithAuthors) => ({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: TriplyUtils.getIdFromUri(d.author!),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        author: d.author!,
        authorLabel: d.authorLabel,
        authorRole: d.authorRole,
        authorRoleLabel: d.authorRoleLabel,
      }))
  }
}
