import { Injectable } from '@nestjs/common'
import { TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
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

interface ArchivesZoomLevel4Data {
    record: string
    title: string | null
    firstImage: string | null
    imageLabel: string | null
}

export enum ArchivesZoomLevel5Types {
    fonds = 'fonds',
    other = 'other',
}

export interface ArchivesFondsDetailZoomLevel5Data {
    objectNumber?: string
    title?: string
    startDate?: string
    endDate?: string
    dateLabel?: string
    dimensionFree?: string
    mediaReference?: string
    mediaReferenceLabel?: string
    existenceOfOriginals?: string
    scopeContent?: string
    relatedMaterial?: string
    rights?: string
    rightsLabel?: string
    permanentLink?: string
}

export interface ArchivesOtherDetailZoomLevel5Data {
    descriptionLevel?: string
    objectNumber?: string
    recordTitle?: string
    startDate?: string
    endDate?: string
    productionDate?: string
    extent?: string
    repository?: string
    repositoryLabel?: string
    creator?: string
    creatorLabel?: string
    creatorHistory?: string
    custodialHistory?: string
    systemOfArrangement?: string
    contentScope?: string
    conditionsGoverningAccess?: string
    relatedMaterial?: string
    appendices?: string
    source?: string
    partReference?: string
    partTitle?: string
    right?: string
    rightLabel?: string
    permanentLink?: string
}

type ArchivesZoomLeve5DataType = ArchivesOtherDetailZoomLevel5Data | ArchivesFondsDetailZoomLevel5Data

@Injectable()
export class ArchivesService {
    protected entityType = 'triply'
    private readonly zoomLevel2Endpoint = 'zoom-2-archives/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: ArchivesZoomLevel3Ids.date,
            name: 'Datering',
            endpoint: 'zoom-3-archives-date-filter/run',
        },
        {
            id: ArchivesZoomLevel3Ids.descriptionLevel,
            name: 'Beschrijvingsniveau',
            endpoint: 'zoom-3-archives-description-level-filter/run',
        },
        {
            id: ArchivesZoomLevel3Ids.relatedNames,
            name: 'Gerelateerde namen',
            endpoint: 'zoom-3-archives-related-names-filter/run',
        },
    ]

    private readonly ZoomLevel4Endpoint = 'zoom-4-archives/run'

    private readonly ZoomLevel5Endpoint = {
        [ArchivesZoomLevel5Types.fonds]: 'zoom-5-archives/run',
        [ArchivesZoomLevel5Types.other]: 'zoom-5-archives-fonds/run',
    }

    public constructor(private triplyService: TriplyService) {}

    public async getZoomLevel2Data() {
        const result = await this.triplyService.queryTriplyData<ObjectFilterData>(this.zoomLevel2Endpoint)
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

        const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(mapping?.endpoint, {
            page,
            pageSize,
        })

        return TriplyUtils.parseLevel3OutputData(result.data, EntityNames.Archives)
    }

    public async getZoomLevel4Data(filters: ArchivesZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams = []
        for (const [filterName, filterValue] of Object.entries(filters)) {
            searchParams.push({ key: filterName, value: filterValue })
        }

        const result = await this.triplyService.queryTriplyData<ArchivesZoomLevel4Data>(
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

    public async getZoomLevel5Data(type: ArchivesZoomLevel5Types, objectId: string) {
        const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Archives, objectId)

        const result = await this.triplyService.queryTriplyData<ArchivesZoomLeve5DataType>(
            this.ZoomLevel5Endpoint[type],
            undefined,
            [
                {
                    key: 'record',
                    value: uri,
                },
            ]
        )

        return TriplyUtils.combineObjectArray(result.data)
    }

    public validateFilterInput(input: string): ArchivesZoomLevel3Ids {
        if (Object.keys(ArchivesZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return ArchivesZoomLevel3Ids[input as ArchivesZoomLevel3Ids]
        }

        throw new Error(`[Archives] Invalid filter input "${input}"`)
    }
}
