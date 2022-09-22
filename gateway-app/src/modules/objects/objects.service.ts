import { Injectable } from '@nestjs/common'
import { TripliService } from '../tripli/tripli.service'

export enum ObjectsZoomLevel3Ids {
    subject = 'subject',
    personInstitution = 'personInstitution',
    technique = 'technique',
    objectName = 'objectName',
    creator = 'creator',
    date = 'date',
    material = 'material',
}

interface ObjectFilterData {
    filter: string
}

interface ObjectFilterOptionsData {
    [x: string]: string
}

@Injectable()
export class ObjectsService {
    protected entityType = 'tripli'
    private readonly zoomLevel2Endpoint =
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-objects/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: ObjectsZoomLevel3Ids.subject,
            name: 'Onderwerp',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-subject-filter/run',
            columns: {
                name: 'subjectLabel',
                uri: 'subject',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: ObjectsZoomLevel3Ids.personInstitution,
            name: 'Persoon/instelling',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-person-institution-filter/run',
            columns: {
                name: 'perInstLabel',
                uri: 'perInst',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: ObjectsZoomLevel3Ids.technique,
            name: 'Technieken',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-technique-filter/run',
            columns: {
                name: 'techniqueLabel',
                uri: 'technique',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: ObjectsZoomLevel3Ids.objectName,
            name: 'Objectnaam',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-objectname-filter/run',
            columns: {
                name: 'objectnameLabel',
                uri: 'objectname',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: ObjectsZoomLevel3Ids.creator,
            name: 'Vervaardiger',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-creator-filter/run',
            columns: {
                name: 'creatorLabel',
                uri: 'creator',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: ObjectsZoomLevel3Ids.date,
            name: 'Datering',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-date-filter/run',
            columns: {
                name: 'century',
                uri: 'century',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: ObjectsZoomLevel3Ids.material,
            name: 'Materialen',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-material-filter/run',
            columns: {
                name: 'materialLabel',
                uri: 'material',
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

    public async getZoomLevel3Data(id: ObjectsZoomLevel3Ids, page = 1, pageSize = 16) {
        const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

        if (!mapping) {
            throw new Error(`[Objects] Mapping ${id} not found`)
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

    public validateFilterInput(input: string): ObjectsZoomLevel3Ids {
        if (Object.keys(ObjectsZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return ObjectsZoomLevel3Ids[input as ObjectsZoomLevel3Ids]
        }

        throw new Error(`[Objects] Invalid filter input "${input}"`)
    }
}
