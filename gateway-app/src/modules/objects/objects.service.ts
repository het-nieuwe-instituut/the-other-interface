import { Injectable } from '@nestjs/common'
import { TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ObjectsZoomLevel4FiltersArgs } from './objects.type'

export enum ObjectsZoomLevel3Ids {
    subject = 'subject',
    personInstitution = 'personInstitution',
    technique = 'technique',
    objectName = 'objectName',
    creator = 'creator',
    date = 'date',
    material = 'material',
}

export enum ObjectsZoomLevel4Filters {
    Objectname = 'Objectname',
    Maker = 'Maker',
    Material = 'Objectname',
    Technique = 'Technique',
    Subject = 'Subject',
    PerInst = 'PerInst',
    StartDate = 'StartDate',
    EndDate = 'EndDate',
}

interface ObjectFilterData {
    filter: string
}

interface ObjectsZoomLevel4Data {
    record: string
    title: string | null
    firstImage: string | null
    imageLabel: string | null
}

interface ObjectsDetailZoomLevel5Data {
    image?: string
    imageLabel?: string
    title?: string
    titleType?: string
    objectNumber?: string
    objectName?: string
    objectNameLabel?: string
    archiveCollectionCode?: string
    maker?: string
    makerLabel?: string
    makerRole?: string
    makerRoleLabel?: string
    startDate?: string
    endDate?: string
    numberOfParts?: string
    scale?: string
    technique?: string
    techniqueLabel?: string
    material?: string
    materialLabel?: string
    dimensionPart?: string
    dimensionType?: string
    dimensionValue?: string
    dimensionUnit?: string
    description?: string
    associationPerson?: string
    associationPersonLabel?: string
    associationPersonType?: string
    relatedObjectTitle?: string
    creditLine?: string
    rights?: string
    rightsLabel?: string
    creationPlace?: string
    creationPlaceLabel?: string
    permanentLink?: string
}

@Injectable()
export class ObjectsService {
    protected entityType = 'triply'
    private readonly zoomLevel2Endpoint = 'zoom-2-objects/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: ObjectsZoomLevel3Ids.subject,
            name: 'Onderwerp',
            endpoint: 'zoom-3-objects-subject-filter/run',
        },
        {
            id: ObjectsZoomLevel3Ids.personInstitution,
            name: 'Persoon/instelling',
            endpoint: 'zoom-3-objects-person-institution-filter/run',
        },
        {
            id: ObjectsZoomLevel3Ids.technique,
            name: 'Technieken',
            endpoint: 'zoom-3-objects-technique-filter/run',
        },
        {
            id: ObjectsZoomLevel3Ids.objectName,
            name: 'Objectnaam',
            endpoint: 'zoom-3-objects-objectname-filter/run',
        },
        {
            id: ObjectsZoomLevel3Ids.creator,
            name: 'Vervaardiger',
            endpoint: 'zoom-3-objects-creator-filter/run',
        },
        {
            id: ObjectsZoomLevel3Ids.date,
            name: 'Datering',
            endpoint: 'zoom-3-objects-date-filter/run',
        },
        {
            id: ObjectsZoomLevel3Ids.material,
            name: 'Materialen',
            endpoint: 'zoom-3-objects-material-filter/run',
        },
    ]

    private readonly ZoomLevel4Endpoint = 'zoom-4-objects/run'

    private readonly ZoomLevel5Endpoint = 'zoom-5-objects/run'

    private readonly ZoomLevel4CountEndpoint =
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/Joran/zoom4-objects-count/run?'

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

    public async getZoomLevel3Data(id: ObjectsZoomLevel3Ids, page = 1, pageSize = 16) {
        const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

        if (!mapping) {
            throw new Error(`[Objects] Mapping ${id} not found`)
        }

        const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(mapping?.endpoint, {
            page,
            pageSize,
        })

        return TriplyUtils.parseLevel3OutputData(result.data)
    }

    public async getZoomLevel4Data(filters: ObjectsZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams = TriplyUtils.getQueryParamsFromObject(filters)

        const result = await this.triplyService.queryTriplyData<ObjectsZoomLevel4Data>(
            this.ZoomLevel4Endpoint,
            {
                page,
                pageSize,
            },
            searchParams
        )

        const countResult = await this.triplyService.queryTriplyData<{ count?: number }>(
            this.ZoomLevel4CountEndpoint,
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
                }
            }),
        }
    }

    public async getZoomLevel5Data(objectId: string) {
        const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Objects, objectId)
        const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel5Data>(
            this.ZoomLevel5Endpoint,
            undefined,
            { record: uri }
        )

        return TriplyUtils.combineObjectArray(result.data)
    }

    public validateFilterInput(input: string): ObjectsZoomLevel3Ids {
        if (Object.keys(ObjectsZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return ObjectsZoomLevel3Ids[input as ObjectsZoomLevel3Ids]
        }

        throw new Error(`[Objects] Invalid filter input "${input}"`)
    }
}
