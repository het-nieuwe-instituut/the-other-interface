import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData, zoomLevel3ReturnDataKeys } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ArchivesZoomLevel4FiltersArgs } from './archives.type'

export enum ArchivesZoomLevel3Ids {
    date = 'date',
    descriptionLevel = 'descriptionLevel',
    relatedNames = 'relatedNames',
}

export enum ArchivesZoomLevel4Filters {
    date = 'date',
    descriptionLevel = 'descriptionLevel',
    relatedName = 'relatedName',
}

interface ObjectFilterData {
    filter: string
}
const objectFilterDataKeys: KeysToVerify<ObjectFilterData> = { filter: true }

interface ArchivesZoomLevel4Data {
    record: string
    title: string | null
    firstImage: string | null
    imageLabel: string | null
    pidWorkURI: string | null
}
const archivesZoomLevel4DataKeys: KeysToVerify<ArchivesZoomLevel4Data> = {
    record: true,
    title: true,
    firstImage: true,
    imageLabel: true,
    pidWorkURI: true,
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
const archivesFondsDetailZoomLevel5DataKeys: KeysToVerify<ArchivesFondsDetailZoomLevel5Data> = {
    objectNumber: true,
    title: true,
    startDate: true,
    endDate: true,
    dateLabel: true,
    dimensionFree: true,
    mediaReference: true,
    mediaReferenceLabel: true,
    existenceOfOriginals: true,
    scopeContent: true,
    relatedMaterial: true,
    rights: true,
    rightsLabel: true,
    permanentLink: true,
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
    rightsLabel?: string
    permanentLink?: string
    pidWorkURI?: string
}
const archivesOtherDetailZoomLevel5DataKeys: KeysToVerify<ArchivesOtherDetailZoomLevel5Data> = {
    descriptionLevel: true,
    objectNumber: true,
    recordTitle: true,
    startDate: true,
    endDate: true,
    productionDate: true,
    extent: true,
    repository: true,
    repositoryLabel: true,
    creator: true,
    creatorLabel: true,
    creatorHistory: true,
    custodialHistory: true,
    systemOfArrangement: true,
    contentScope: true,
    conditionsGoverningAccess: true,
    relatedMaterial: true,
    appendices: true,
    source: true,
    partReference: true,
    partTitle: true,
    right: true,
    rightsLabel: true,
    permanentLink: true,
    pidWorkURI: true,
}

type ArchivesZoomLeve5DataType = ArchivesOtherDetailZoomLevel5Data | ArchivesFondsDetailZoomLevel5Data
const archivesZoomLevel5DataKeys = {
    [ArchivesZoomLevel5Types.other]: archivesOtherDetailZoomLevel5DataKeys,
    [ArchivesZoomLevel5Types.fonds]: archivesFondsDetailZoomLevel5DataKeys,
}

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

    private readonly ZoomLevel4Endpoint = 'zoom-4-archives-V2/run'

    // TODO: change to convention when Triply adds this to normal space
    private readonly archivesDescriptionLevelEndpoint =
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/Joran/zoom5-archives-type-only/run?'

    private readonly ZoomLevel4CountEndpoint = 'zoom4-archives-count/run?'

    private readonly ZoomLevel5Endpoint = {
        [ArchivesZoomLevel5Types.other]: 'zoom-5-archives/run',
        [ArchivesZoomLevel5Types.fonds]: 'zoom-5-archives-fonds/run',
    }

    public constructor(private triplyService: TriplyService) {}

    public async determineArchiveType(id: string) {
        interface ArchivesDescriptionLevelData {
            record: string
            descriptionLevel: string
        }
        const keys: KeysToVerify<ArchivesDescriptionLevelData> = {
            record: true,
            descriptionLevel: true,
        }

        const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Archives, id)
        const res = await this.triplyService.queryTriplyData<ArchivesDescriptionLevelData>(
            this.archivesDescriptionLevelEndpoint,
            keys,
            undefined,
            { record: uri }
        )

        if (res.data[0].descriptionLevel === 'archief') {
            return ArchivesZoomLevel5Types.fonds
        }

        return ArchivesZoomLevel5Types.other
    }

    public async getZoomLevel2Data() {
        const result = await this.triplyService.queryTriplyData<ObjectFilterData>(
            this.zoomLevel2Endpoint,
            objectFilterDataKeys
        )

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
            throw CustomError.internalCritical(`[Archives] Mapping ${id} not found`)
        }

        const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(
            mapping?.endpoint,
            zoomLevel3ReturnDataKeys,
            { page, pageSize }
        )

        return TriplyUtils.parseLevel3OutputData(result.data)
    }

    public async getZoomLevel4Data(filters: ArchivesZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams: Record<string, string> = {}
        if (filters.date) searchParams.date = filters.date
        if (filters.descriptionLevel) searchParams.DescriptionLevel = filters.descriptionLevel
        if (filters.relatedName) searchParams.RelatedName = filters.relatedName

        const result = await this.triplyService.queryTriplyData<ArchivesZoomLevel4Data>(
            this.ZoomLevel4Endpoint,
            archivesZoomLevel4DataKeys,
            { page, pageSize },
            searchParams
        )

        const countResult = await this.triplyService.queryTriplyData<{ count?: number }>(
            this.ZoomLevel4CountEndpoint,
            { count: true },
            undefined,
            searchParams
        )
        const total = countResult.data.pop()?.count || 0

        return {
            total,
            appliedFilters: JSON.stringify(filters),
            page,
            hasMore: page * pageSize < total,
            nodes: result.data.map(res => {
                return {
                    record: res.record,
                    title: res.title,
                    firstImage: res.firstImage,
                    imageLabel: res.imageLabel,
                    pidWorkUri: res.pidWorkURI,
                }
            }),
        }
    }

    public async getZoomLevel5Data(type: ArchivesZoomLevel5Types, objectId: string) {
        const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Archives, objectId)

        const result = await this.triplyService.queryTriplyData<ArchivesZoomLeve5DataType>(
            this.ZoomLevel5Endpoint[type],
            archivesZoomLevel5DataKeys[type],
            undefined,
            { record: uri }
        )

        const pidWorkURIs: Set<string> = new Set()
        result.data.forEach(d => 'pidWorkURI' in d && d.pidWorkURI && pidWorkURIs.add(d.pidWorkURI))

        return { ...TriplyUtils.combineObjectArray(result.data), pidWorkURIs, type, id: objectId }
    }

    public validateFilterInput(input: string): ArchivesZoomLevel3Ids {
        if (Object.keys(ArchivesZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return ArchivesZoomLevel3Ids[input as ArchivesZoomLevel3Ids]
        }

        throw CustomError.internalCritical(`[Archives] Invalid filter input "${input}"`)
    }
}
