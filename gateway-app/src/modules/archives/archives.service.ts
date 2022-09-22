import { Injectable } from '@nestjs/common'
import { TripliService } from '../tripli/tripli.service'

export enum ArchivesZoomLevel3Ids {
    date = 'date',
    descriptionLevel = 'descriptionLevel',
    relatedNames = 'relatedNames',
}

interface ObjectFilterData {
    filter: string
}

interface ObjectFilterOptionsData {
    [x: string]: string
}

@Injectable()
export class ArchivesService {
    protected entityType = 'tripli'
    private readonly zoomLevel2Endpoint =
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-archives/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: ArchivesZoomLevel3Ids.date,
            name: 'Datering',
            columns: {
                name: 'relatedNameLabel',
                uri: 'relatedName',
                count: 'count',
                total: 'total',
            },
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-date-filter/run',
        },
        {
            id: ArchivesZoomLevel3Ids.descriptionLevel,
            name: 'Beschrijvingsniveau',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-description-level-filter/run',
            columns: {
                name: 'descriptionLevel',
                uri: 'descriptionLevel',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: ArchivesZoomLevel3Ids.relatedNames,
            name: 'Gerelateerde namen',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-related-names-filter/run',
            columns: {
                name: 'relatedNameLabel',
                uri: 'relatedName',
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

    public async getZoomLevel3Data(id: ArchivesZoomLevel3Ids, page = 1, pageSize = 16) {
        const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

        if (!mapping) {
            throw new Error(`[Archives] Mapping ${id} not found`)
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
