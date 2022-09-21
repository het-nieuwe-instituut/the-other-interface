import { Injectable } from '@nestjs/common'
import { TripliService } from '../tripli/tripli.service'

export enum PeopleZoomLevel3Ids {
    deathDate = 'deathDate',
    nameType = 'nameType',
    birthDate = 'birthDate',
    period = 'period',
    place = 'place',
    profession = 'profession',
}

interface ObjectFilterData {
    filter: string
}

interface ObjectFilterOptionsData {
    [x: string]: string
}

@Injectable()
export class PeopleService {
    protected entityType = 'tripli'
    private readonly zoomLevel2Endpoint =
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-people/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: PeopleZoomLevel3Ids.deathDate,
            name: 'Overlijdensdatum',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-death-date-filter/run',
            columns: {
                name: 'century',
                uri: 'century',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PeopleZoomLevel3Ids.nameType,
            name: 'Naam soort',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-name-type-filter/run',
            columns: {
                name: 'nameType',
                uri: 'nameType',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PeopleZoomLevel3Ids.birthDate,
            name: 'Geboortedatum',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-birth-date-filter/run',
            columns: {
                name: 'century',
                uri: 'century',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PeopleZoomLevel3Ids.period,
            name: 'Periode',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-period-filter/run',
            columns: {
                name: 'century',
                uri: 'century',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PeopleZoomLevel3Ids.place,
            name: 'Plaats',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-place-filter/run',
            columns: {
                name: 'placeLabel',
                uri: 'place',
                count: 'count',
                total: 'total',
            },
        },
        {
            id: PeopleZoomLevel3Ids.profession,
            name: 'Beroep/Werkveld',
            endpoint:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-profession-filter/run',
            columns: {
                name: 'professionLabel',
                uri: 'profession',
                count: 'count',
                total: 'total',
            },
        },
    ]

    public constructor(private tripliService: TripliService) {}

    public async getZoomLevel2Data() {
        const result = await this.tripliService.getTripliData<ObjectFilterData>(this.zoomLevel2Endpoint)
        return result.data.map(r => {
            const filterMapping = this.ZoomLevel3Mapping.find(m => m.name === r.filter)
            if (!filterMapping) return
            return { filter: filterMapping.name, id: filterMapping.id }
        })
    }

    public async getZoomLevel3Data(id: PeopleZoomLevel3Ids, page = 1, pageSize = 16) {
        const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

        if (!mapping) {
            throw new Error(`[People] Mapping ${id} not found`)
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
