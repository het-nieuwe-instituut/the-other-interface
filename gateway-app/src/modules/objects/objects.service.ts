import { Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData, zoomLevel3ReturnDataKeys } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
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
    date = 'date',
}

interface ObjectFilterData {
    filter: string
}
const objectFilterDataKeys: KeysToVerify<ObjectFilterData> = {
    filter: true,
}

interface ObjectsZoomLevel4Data {
    record: string
    title: string | null
    firstImage: string | null
    imageLabel: string | null
    pidWorkURI: string | null
}
const objectsZoomLevel4DataKeys: KeysToVerify<ObjectsZoomLevel4Data> = {
    record: true,
    title: true,
    firstImage: true,
    imageLabel: true,
    pidWorkURI: true,
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
const objectsDetailZoomLevel5DataKeys: KeysToVerify<ObjectsDetailZoomLevel5Data> = {
    image: true,
    imageLabel: true,
    title: true,
    titleType: true,
    objectNumber: true,
    objectName: true,
    objectNameLabel: true,
    archiveCollectionCode: true,
    maker: true,
    makerLabel: true,
    makerRole: true,
    makerRoleLabel: true,
    startDate: true,
    endDate: true,
    numberOfParts: true,
    scale: true,
    technique: true,
    techniqueLabel: true,
    material: true,
    materialLabel: true,
    dimensionPart: true,
    dimensionType: true,
    dimensionValue: true,
    dimensionUnit: true,
    description: true,
    associationPerson: true,
    associationPersonLabel: true,
    associationPersonType: true,
    relatedObjectTitle: true,
    creditLine: true,
    rights: true,
    rightsLabel: true,
    creationPlace: true,
    creationPlaceLabel: true,
    permanentLink: true,
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

    private readonly ZoomLevel4Endpoint = 'zoom-4-objects-V2/run'

    private readonly ZoomLevel5Endpoint = 'zoom-5-objects/run'

    private readonly ZoomLevel4CountEndpoint =
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/Joran/zoom4-objects-count/run?'

    public constructor(private triplyService: TriplyService) {}

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

    public async getZoomLevel3Data(id: ObjectsZoomLevel3Ids, page = 1, pageSize = 16) {
        const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

        if (!mapping) {
            throw CustomError.internalCritical(`[Objects] Mapping ${id} not found`)
        }

        const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(
            mapping?.endpoint,
            zoomLevel3ReturnDataKeys,
            { page, pageSize }
        )

        return TriplyUtils.parseLevel3OutputData(result.data)
    }

    public async getZoomLevel4Data(filters: ObjectsZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams = TriplyUtils.getQueryParamsFromObject(filters)

        const result = await this.triplyService.queryTriplyData<ObjectsZoomLevel4Data>(
            this.ZoomLevel4Endpoint,
            objectsZoomLevel4DataKeys,
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
                    firstImage: res.firstImage,
                    imageLabel: res.imageLabel,
                    pidWorkURI: res.pidWorkURI,
                }
            }),
        }
    }

    public async getZoomLevel5Data(objectId: string) {
        const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Objects, objectId)
        const result = await this.triplyService.queryTriplyData<ObjectsDetailZoomLevel5Data>(
            this.ZoomLevel5Endpoint,
            objectsDetailZoomLevel5DataKeys,
            undefined,
            { record: uri }
        )

        return {
            ...TriplyUtils.combineObjectArray(result.data),
            id: objectId,
            ...this.getDimensionValueFromData(result.data),
            dimensionUnit: result.data.find(d => d.dimensionUnit)?.dimensionUnit,
        }
    }

    public validateFilterInput(input: string): ObjectsZoomLevel3Ids {
        if (Object.keys(ObjectsZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return ObjectsZoomLevel3Ids[input as ObjectsZoomLevel3Ids]
        }

        throw CustomError.internalCritical(`[Objects] Invalid filter input "${input}"`)
    }

    private getDimensionValueFromData(data: ObjectsDetailZoomLevel5Data[]) {
        const dimHeight = data.find(d => d.dimensionType === 'hoogte')?.dimensionValue
        const dimWidth = data.find(d => d.dimensionType === 'breedte')?.dimensionValue
        const dimDepth = data.find(d => d.dimensionType === 'diepte')?.dimensionValue

        return { dimDepth, dimWidth, dimHeight }
    }
}
