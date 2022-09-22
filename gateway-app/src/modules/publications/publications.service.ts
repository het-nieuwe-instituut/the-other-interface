import { Injectable } from '@nestjs/common'
import { TripliService } from '../tripli/tripli.service'

export enum PublicationsZoomLevel3Ids {
    relatedPerson = 'relatedPerson',
    subject = 'subject',
    geographicalKeyword = 'geographicalKeyword',
    author = 'author',
    typeOfPublication = 'typeOfPublication',
}

interface ObjectFilterData {
    filter: string
}

interface ObjectFilterOptionsData {
    [x: string]: string
}

@Injectable()
export class PublicationsService {
    protected entityType = 'tripli'
    private readonly zoomLevel2Endpoint =
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-books/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: PublicationsZoomLevel3Ids.relatedPerson,
            name: 'Gerelateerde persoon/instelling',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-related-person-filter/run',
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
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-subject-filter/run',
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
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-geographical-keyword-filter/run',
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
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-author-filter/run',
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
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-type-of-publication-filter/2/run',
            columns: {
                name: 'typeOfPublicationLabel',
                uri: 'typeOfPublication',
                count: 'count',
                total: 'total',
            },
        },
    ]

    public constructor(private tripliService: TripliService) {}

    public async getZoomLevel2Data() {
        const result = await this.tripliService.getTripliData<ObjectFilterData>(this.zoomLevel2Endpoint)
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

        const result = await this.tripliService.getTripliData<ObjectFilterOptionsData>(mapping?.endpoint, {
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
}
