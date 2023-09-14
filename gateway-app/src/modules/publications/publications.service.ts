import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData, zoomLevel3ReturnDataKeys } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel5Service } from '../zoomLevel5/zoomLevel5.service'
import { PublicationAuthorType } from './publications.type'

export enum PublicationsZoomLevel3Ids {
  relatedPerson = 'relatedPerson',
  subject = 'subject',
  geographicalKeyword = 'geographicalKeyword',
  author = 'author',
  typeOfPublication = 'typeOfPublication',
}

export enum PublicationsZoomLevel4Filters {
  Author = 'Author',
  TypeOfPublication = 'TypeOfPublication',
  GeograficalKeyword = 'GeograficalKeyword',
  Subject = 'Subject',
  RelatedPerInst = 'RelatedPerInst',
}

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

interface PublicationsBooksDetailZoomLevel5Data {
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
const publicationsBooksDetailZoomLevel5DataKeys: KeysToVerify<PublicationsBooksDetailZoomLevel5Data> =
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

interface PublicationsSerialDetailZoomLevel5Data {
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
const publicationsSerialDetailZoomLevel5DataKeys: KeysToVerify<PublicationsSerialDetailZoomLevel5Data> =
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

interface PublicationArticleDetailZoomLevel5Data {
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
const publicationArticleDetailZoomLevel5DataKeys: KeysToVerify<PublicationArticleDetailZoomLevel5Data> =
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

interface PublicationsAudioVisualDetailZoomLevel5Data {
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
const publicationsAudioVisualDetailZoomLevel5DataKeys: KeysToVerify<PublicationsAudioVisualDetailZoomLevel5Data> =
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

export enum PublicationsZoomLevel5Types {
  serial = 'serial',
  book = 'book',
  article = 'article',
  audiovisual = 'audiovisual',
}

type PublicationsZoomLevel5DataTypes =
  | PublicationsBooksDetailZoomLevel5Data
  | PublicationsSerialDetailZoomLevel5Data
  | PublicationArticleDetailZoomLevel5Data
  | PublicationsAudioVisualDetailZoomLevel5Data
const publicationsZoomLevel5DataTypeKeys = {
  [PublicationsZoomLevel5Types.article]: publicationArticleDetailZoomLevel5DataKeys,
  [PublicationsZoomLevel5Types.audiovisual]: publicationsAudioVisualDetailZoomLevel5DataKeys,
  [PublicationsZoomLevel5Types.book]: publicationsBooksDetailZoomLevel5DataKeys,
  [PublicationsZoomLevel5Types.serial]: publicationsSerialDetailZoomLevel5DataKeys,
}

type PublicationsWithAuthors =
  | PublicationsBooksDetailZoomLevel5Data
  | PublicationArticleDetailZoomLevel5Data
  | PublicationsAudioVisualDetailZoomLevel5Data

@Injectable()
export class PublicationsService {
  protected entityType = 'triply'
  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/books-landingPage/run'

  private readonly ZoomLevel3Mapping = [
    {
      id: PublicationsZoomLevel3Ids.relatedPerson,
      name: 'Gerelateerde persoon/instelling',
      endpoint: 'zoom-3-books-related-person-filter/run',
    },
    {
      id: PublicationsZoomLevel3Ids.subject,
      name: 'Onderwerp',
      endpoint: 'zoom-3-books-subject-filter/run',
    },
    {
      id: PublicationsZoomLevel3Ids.geographicalKeyword,
      name: 'Geografisch trefwoord',
      endpoint: 'zoom-3-books-geographical-keyword-filter/run',
    },
    {
      id: PublicationsZoomLevel3Ids.author,
      name: 'Auteur(s)',
      endpoint: 'zoom-3-books-author-filter/run',
    },
    {
      id: PublicationsZoomLevel3Ids.typeOfPublication,
      name: 'Soort publicatie',
      endpoint: 'zoom-3-books-type-of-publication-filter/run',
    },
  ]

  private readonly ZoomLevel4CountEndpoint = 'zoom4-books-count/run'

  private readonly ZoomLevel5Endpoint = {
    [PublicationsZoomLevel5Types.article]: 'zoom-5-books-article/run',
    [PublicationsZoomLevel5Types.audiovisual]: 'zoom-5-books-audiovisual/run',
    [PublicationsZoomLevel5Types.book]: 'zoom-5-books-book/run',
    [PublicationsZoomLevel5Types.serial]: 'zoom-5-books-serial/run',
  }

  private readonly publicationDescriptionLevelEndpoint = 'Zoom-5-books-type/run'

  public constructor(
    private readonly triplyService: TriplyService,
    @Inject(forwardRef(() => ZoomLevel5Service))
    private readonly zoomLevel5Service: ZoomLevel5Service
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
      return PublicationsZoomLevel5Types.book
    }

    switch (res.data[0].type) {
      case 'zoom_5-books-serial':
        return PublicationsZoomLevel5Types.serial
      case 'zoom_5-books-article':
        return PublicationsZoomLevel5Types.article
      case 'zoom_5-books-audiovisual':
        return PublicationsZoomLevel5Types.audiovisual
      case 'zoom_5-books-book':
      default:
        return PublicationsZoomLevel5Types.book
    }
  }

  public async getZoomLevel3Data(id: PublicationsZoomLevel3Ids, page = 1, pageSize = 16) {
    const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

    if (!mapping) {
      throw CustomError.internalCritical(`[Publications] Mapping ${id} not found`)
    }

    const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(
      mapping?.endpoint,
      zoomLevel3ReturnDataKeys,
      { page, pageSize }
    )

    return TriplyUtils.parseLevel3OutputData(result.data)
  }

  public async getZoomLevel2Data(page = 1, pageSize = 48) {
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel2Data>(
      this.ZoomLevel2Endpoint,
      publicationsZoomLevel2DataKeys,
      { page, pageSize }
    )

    return {
      page,
      nodes: result.data.map(res => {
        return {
          thumbnail: res.thumbnail,
          title: res.title,
          id: res.id,
        }
      }),
    }
  }

  public async getZoomLevel5Data(publicationType: PublicationsZoomLevel5Types, objectId: string) {
    const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Publications, objectId)
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel5DataTypes>(
      this.ZoomLevel5Endpoint[publicationType],
      publicationsZoomLevel5DataTypeKeys[publicationType],
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

  public validateFilterInput(input: string): PublicationsZoomLevel3Ids {
    if (Object.keys(PublicationsZoomLevel3Ids).includes(input)) {
      // we can do this since we do key=value
      return PublicationsZoomLevel3Ids[input as PublicationsZoomLevel3Ids]
    }

    throw CustomError.internalCritical(`[Publications] Invalid filter input "${input}"`)
  }

  public resolveAuthor(publication: PublicationsZoomLevel5DataTypes) {
    if (!('author' in publication) || !publication.author) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(publication.author)
    const id = TriplyUtils.getIdFromUri(publication.author)

    return this.zoomLevel5Service.getDetail(id, type)
  }

  public resolvePublisher(publication: PublicationsZoomLevel5DataTypes) {
    if (!('publisher' in publication) || !publication.publisher) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(publication.publisher)
    const id = TriplyUtils.getIdFromUri(publication.publisher)

    return this.zoomLevel5Service.getDetail(id, type)
  }

  private getAuthorsValueFromData(
    data: PublicationsZoomLevel5DataTypes[]
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
