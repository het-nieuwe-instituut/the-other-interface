import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData, zoomLevel3ReturnDataKeys } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel5Service } from '../zoomLevel5/zoomLevel5.service'
import { PublicationsZoomLevel4FiltersArgs } from './publications.type'

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

interface PublicationsFilterData {
    filter: string
}
const publicationsFilterDataKeys: KeysToVerify<PublicationsFilterData> = {
    filter: true,
}

interface PublicationsZoomLevel4Data {
    record: string
    title: string
}
const publicationsZoomLevel4DataKeys: KeysToVerify<PublicationsZoomLevel4Data> = {
    record: true,
    title: true,
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
const publicationsBooksDetailZoomLevel5DataKeys: KeysToVerify<PublicationsBooksDetailZoomLevel5Data> = {
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
const publicationsSerialDetailZoomLevel5DataKeys: KeysToVerify<PublicationsSerialDetailZoomLevel5Data> = {
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
const publicationArticleDetailZoomLevel5DataKeys: KeysToVerify<PublicationArticleDetailZoomLevel5Data> = {
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
const publicationsAudioVisualDetailZoomLevel5DataKeys: KeysToVerify<PublicationsAudioVisualDetailZoomLevel5Data> = {
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

@Injectable()
export class PublicationsService {
    protected entityType = 'triply'
    private readonly zoomLevel2Endpoint = 'zoom-2-books/run'

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

    private readonly ZoomLevel4Endpoint = 'zoom-4-books/run'
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
        @Inject(forwardRef(() => ZoomLevel5Service)) private readonly zoomLevel5Service: ZoomLevel5Service
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

    public async getZoomLevel2Data() {
        const result = await this.triplyService.queryTriplyData<PublicationsFilterData>(
            this.zoomLevel2Endpoint,
            publicationsFilterDataKeys
        )

        return result.data
            .map(r => {
                const filterMapping = this.ZoomLevel3Mapping.find(m => m.name === r.filter)
                if (!filterMapping) return
                return { filter: filterMapping.name, id: filterMapping.id }
            })
            .filter(f => !!f?.id)
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

    public async getZoomLevel4Data(filters: PublicationsZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams = TriplyUtils.getQueryParamsFromObject(filters)

        const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel4Data>(
            this.ZoomLevel4Endpoint,
            publicationsZoomLevel4DataKeys,
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
                    title: res.title,
                    firstImage: null,
                    imageLabel: null,
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

        return { ...TriplyUtils.combineObjectArray(result.data), id: objectId, type: publicationType }
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
}
