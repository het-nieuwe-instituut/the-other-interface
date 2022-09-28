import { Injectable } from '@nestjs/common'
import { TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
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

interface PublicationsFilterOptionsData {
    [x: string]: string
}

interface PublicationsZoomLevel4Data {
    record: string
    title: string
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
type PublicationsZoomLevel5DataTypes = PublicationsBooksDetailZoomLevel5Data

export enum PublicationsZoomLevel5Types {
    serial = 'serial',
    book = 'book',
    article = 'article',
    audiovisual = 'audiovisual',
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
            columns: {
                name: 'realtedPerInstLabel',
                uri: 'relatedPerInstLink',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PublicationsZoomLevel3Ids.subject,
            name: 'Onderwerp',
            endpoint: 'zoom-3-books-subject-filter/run',
            columns: {
                name: 'subjectLabel',
                uri: 'subject',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PublicationsZoomLevel3Ids.geographicalKeyword,
            name: 'Geografisch trefwoord',
            endpoint: 'zoom-3-books-geographical-keyword-filter/run',
            columns: {
                name: 'geograficalKeywordLabel',
                uri: 'geograficalKeyword',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PublicationsZoomLevel3Ids.author,
            name: 'Auteur(s)',
            endpoint: 'zoom-3-books-author-filter/run',
            columns: {
                name: 'authorLabel',
                uri: 'author',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PublicationsZoomLevel3Ids.typeOfPublication,
            name: 'Soort publicatie',
            endpoint: 'zoom-3-books-type-of-publication-filter/2/run',
            columns: {
                name: 'typeOfPublicationLabel',
                uri: 'typeOfPublication',
                count: 'count',
                total: 'total',
            },
        },
    ]

    private readonly ZoomLevel4Endpoint = 'zoom-4-books/run'

    private readonly ZoomLevel5Endpoint = {
        [PublicationsZoomLevel5Types.article]: 'zoom-5-books-article/run',
        [PublicationsZoomLevel5Types.audiovisual]: 'zoom-5-books-audiovisual/run',
        [PublicationsZoomLevel5Types.book]: 'zoom-5-books-book/run',
        [PublicationsZoomLevel5Types.serial]: 'zoom-5-books-serial/run',
    }

    public constructor(private triplyService: TriplyService) {}

    public async getZoomLevel2Data() {
        const result = await this.triplyService.queryTriplyData<PublicationsFilterData>(this.zoomLevel2Endpoint)
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
            throw new Error(`[Publications] Mapping ${id} not found`)
        }

        const result = await this.triplyService.queryTriplyData<PublicationsFilterOptionsData>(mapping?.endpoint, {
            page,
            pageSize,
        })

        return result.data.map(d => {
            return {
                uri: d[mapping.columns.uri] || null,
                name: d[mapping.columns.name] || null,
                count: d[mapping.columns.count] ? parseInt(d[mapping.columns.count], 10) : null,
                total: d[mapping.columns.total] ? parseInt(d[mapping.columns.total], 10) : null,
            }
        })
    }

    public async getZoomLevel4Data(filters: PublicationsZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams = []
        for (const [filterName, filterValue] of Object.entries(filters)) {
            searchParams.push({ key: filterName, value: filterValue })
        }

        const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel4Data>(
            this.ZoomLevel4Endpoint,
            {
                page,
                pageSize,
            },
            searchParams
        )

        return result.data.map(res => {
            return {
                record: res.record,
                title: res.title,
                firstImage: null,
                imageLabel: null,
            }
        })
    }

    public async getZoomLevel5Data(publicationType: PublicationsZoomLevel5Types, objectId: string) {
        const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Publications, objectId)
        const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel5DataTypes>(
            this.ZoomLevel5Endpoint[publicationType],
            undefined,
            [
                {
                    key: 'record',
                    value: uri,
                },
            ]
        )

        return this.parseObjectData(result.data)
    }

    private parseObjectData(results: PublicationsZoomLevel5DataTypes[]) {
        const output: { [x: string]: string } = {}
        let nullFlag = true
        for (const result of results) {
            for (const filledPair of Object.entries(result).filter(e => !!e[1])) {
                nullFlag = false
                const [key, value] = filledPair
                output[key] = value
            }
        }

        return nullFlag ? null : output
    }

    public validateFilterInput(input: string): PublicationsZoomLevel3Ids {
        if (Object.keys(PublicationsZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return PublicationsZoomLevel3Ids[input as PublicationsZoomLevel3Ids]
        }

        throw new Error(`[Publications] Invalid filter input "${input}"`)
    }
}
