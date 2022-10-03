import { Injectable } from '@nestjs/common'
import { TriplyService } from '../triply/triply.service'
import { TriplyUtils, ZoomLevel3ReturnData } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PeopleType, PeopleZoomLevel4FiltersArgs } from './people.type'

export enum PeopleZoomLevel3Ids {
    deathDate = 'deathDate',
    nameType = 'nameType',
    birthDate = 'birthDate',
    period = 'period',
    place = 'place',
    profession = 'profession',
}

export enum PeopleZoomLevel4Filters {
    NameType = 'NameType',
    Profession = 'Profession',
    Place = 'Place',
    Period = 'Period',
    BirthDate = 'BirthDate',
    DeathDate = 'DeathDate',
}

interface PeopleFilterData {
    filter: string
}

export interface PeopleData {
    name: string | null
    birthDate: string | null
    deathDate: string | null
    nationalityLabel: string | null
}

interface PeopleZoomLevel4Data {
    record: string
    name: string
}

interface PeopleDetailZoomLevel5Data {
    name?: string
    nameType?: string
    nameVariation?: string
    birthDate?: string
    birthPlace?: string
    birthPlaceLabel?: string
    deathDate?: string
    deathPlace?: string
    deathPlaceLabel?: string
    place?: string
    placeLabel?: string
    startDate?: string
    endDate?: string
    nationality?: string
    nationalityLabel?: string
    institution?: string
    institutionLabel?: string
    profession?: string
    professionLabel?: string
    gender?: string
    association?: string
    associationLabel?: string
    relatedItem?: string
    relatedItemLabel?: string
    description?: string
    permanentLink?: string
}

@Injectable()
export class PeopleService {
    protected entityType = 'triply'
    private readonly detailEndpoint = '/zoom-5-people/run?record=https://collectiedata.hetnieuweinstituut.nl/id/people/'
    private readonly zoomLevel2Endpoint = 'zoom-2-people/run'

    private readonly ZoomLevel3Mapping = [
        {
            id: PeopleZoomLevel3Ids.deathDate,
            name: 'Overlijdensdatum',
            endpoint: 'zoom-3-people-death-date-filter/run',
        },
        {
            id: PeopleZoomLevel3Ids.nameType,
            name: 'Naam soort',
            endpoint: 'zoom-3-people-name-type-filter/run',
        },
        {
            id: PeopleZoomLevel3Ids.birthDate,
            name: 'Geboortedatum',
            endpoint: 'zoom-3-people-birth-date-filter/run',
        },
        {
            id: PeopleZoomLevel3Ids.period,
            name: 'Periode',
            endpoint: 'zoom-3-people-period-filter/run',
        },
        {
            id: PeopleZoomLevel3Ids.place,
            name: 'Plaats',
            endpoint: 'zoom-3-people-place-filter/run',
        },
        {
            id: PeopleZoomLevel3Ids.profession,
            name: 'Beroep/Werkveld',
            endpoint: 'zoom-3-people-profession-filter/run',
        },
    ]

    private readonly ZoomLevel4Endpoint = 'zoom-4-people/run'

    private readonly ZoomLevel5Endpoint = 'zoom-5-people/run'

    public constructor(private triplyService: TriplyService) {}

    public async getZoomLevel2Data() {
        const result = await this.triplyService.queryTriplyData<PeopleFilterData>(this.zoomLevel2Endpoint)
        return result.data
            .map(r => {
                const filterMapping = this.ZoomLevel3Mapping.find(m => m.name === r.filter)
                if (!filterMapping) return
                return { filter: filterMapping.name, id: filterMapping.id }
            })
            .filter(f => !!f?.id)
    }

    public async getZoomLevel3Data(id: PeopleZoomLevel3Ids, page = 1, pageSize = 16) {
        const mapping = this.ZoomLevel3Mapping.find(m => m.id === id)

        if (!mapping) {
            throw new Error(`[People] Mapping ${id} not found`)
        }

        const result = await this.triplyService.queryTriplyData<ZoomLevel3ReturnData>(mapping?.endpoint, {
            page,
            pageSize,
        })

        return TriplyUtils.parseLevel3OutputData(result.data, EntityNames.People)
    }

    public async getZoomLevel4Data(filters: PeopleZoomLevel4FiltersArgs, page = 1, pageSize = 48) {
        if (Object.keys(filters).length === 0) {
            return []
        }

        const searchParams = []
        for (const [filterName, filterValue] of Object.entries(filters)) {
            searchParams.push({ key: filterName, value: filterValue })
        }

        const result = await this.triplyService.queryTriplyData<PeopleZoomLevel4Data>(
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
                title: res.name,
                firstImage: null,
                imageLabel: null,
            }
        })
    }

    public async getZoomLevel5Data(objectId: string) {
        const uri = TriplyUtils.getUriForTypeAndId(EntityNames.People, objectId)
        const result = await this.triplyService.queryTriplyData<PeopleDetailZoomLevel5Data>(
            this.ZoomLevel5Endpoint,
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

    public validateFilterInput(input: string): PeopleZoomLevel3Ids {
        if (Object.keys(PeopleZoomLevel3Ids).includes(input)) {
            // we can do this since we do key=value
            return PeopleZoomLevel3Ids[input as PeopleZoomLevel3Ids]
        }

        throw new Error(`[People] Invalid filter input "${input}"`)
    }

    public async getPeopleDetails(peopleId: string) {
        const res = await this.triplyService.queryTriplyData<PeopleData>(`${this.detailEndpoint}${peopleId}`)

        const parsedResponse: PeopleType = {}
        res.data.forEach(d => {
            if (d.name) parsedResponse.name = d.name
            if (d.birthDate) parsedResponse.birthDate = d.birthDate
            if (d.deathDate) parsedResponse.deathDate = d.deathDate
            if (d.nationalityLabel) parsedResponse.nationalityLabel = d.nationalityLabel
        })

        return parsedResponse
    }
}
