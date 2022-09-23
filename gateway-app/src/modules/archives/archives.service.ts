import { Injectable } from '@nestjs/common'
import { TripliService } from '../tripli/tripli.service'
import { ArchivesZoomLevel4FiltersArgs } from './archives.type'

export enum ArchivesZoomLevel3Ids {
    date = 'date',
    descriptionLevel = 'descriptionLevel',
    relatedNames = 'relatedNames',
}

export enum ArchivesZoomLevel4Filters {
    StartDate = 'StartDate',
    EndDate = 'EndDate',
    DescriptionLevel = 'DescriptionLevel',
    RelatedName = 'RelatedName',
}

interface ObjectFilterData {
    filter: string
}

interface ObjectFilterOptionsData {
    [x: string]: string
}

interface ArchivesZoomLevel4Data {
    record: string
    title: string | null
    firstImage: string | null
    imageLabel: string | null
}

@Injectable()
export class ArchivesService {
    protected entityType = 'tripli'
    private readonly zoomLevel2Endpoint = 'zoom-2-archives/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: ArchivesZoomLevel3Ids.date,
            name: 'Datering',
            columns: {
                name: 'century',
                uri: 'century',
                count: 'numberOfRecords',
                total: 'total',
            },
            endpoint: 'zoom-3-archives-date-filter/run',
        },
        {
            id: ArchivesZoomLevel3Ids.descriptionLevel,
            name: 'Beschrijvingsniveau',
            endpoint: 'zoom-3-archives-description-level-filter/run',
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
            endpoint: 'zoom-3-archives-related-names-filter/run',
            columns: {
                name: 'relatedNameLabel',
                uri: 'relatedName',
                count: 'count',
                total: 'total',
            },
        },
    ]

    private readonly ZoomLevel4Endpoint = 'zoom-4-archives/run'

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

    public async getZoomLevel4Data(filters: ArchivesZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams = []
        for (const [filterName, filterValue] of Object.entries(filters)) {
            searchParams.push({ key: filterName, value: filterValue })
        }

        const result = await this.tripliService.getTripliData<ArchivesZoomLevel4Data>(
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
                firstImage: res.firstImage,
                imageLabel: res.imageLabel,
            }
        })
    }

    public validateFilterInput(input: string): ArchivesZoomLevel3Ids {
        if (Object.keys(ArchivesZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return ArchivesZoomLevel3Ids[input as ArchivesZoomLevel3Ids]
        }

        throw new Error(`[Archives] Invalid filter input "${input}"`)
    }
}
