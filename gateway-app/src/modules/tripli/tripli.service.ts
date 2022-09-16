import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { EntityIdentifierMapping, EntityNames } from './tripli.type'

interface ObjectPerTypeData {
    count: string
    dataset: string
    graph: string
}

interface ObjectFilterData {
    filter: string
}

@Injectable()
export class TripliService {
    public constructor(private configService: ConfigService, private readonly httpService: HttpService) {}

    public async getData<DataType>(endpoint: string) {
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')
        const res = await lastValueFrom(
            this.httpService.get<DataType>(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } })
        )

        return res.data
    }

    public async getCounts() {
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

        const endpoint =
            'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-1-record-counts/run'

        // TECHNICAL-DEBT: implement error handling
        // TECHNICAL-DEBT: (dynamically) verify received type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = await lastValueFrom(
            this.httpService.get<ObjectPerTypeData[]>(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } })
        )
        return res.data.map(r => {
            return {
                name: r.dataset,
                count: parseInt(r.count, 10),
                id: EntityIdentifierMapping.find(e => e.metadata?.identifiableURI === r.graph)?.id,
            }
        })
    }

    public async getFilters(entity: EntityNames) {
        const mapping = EntityIdentifierMapping.find(e => e.id === entity)
        if (!mapping) {
            throw new Error(`Entity '${entity}' not found`)
        }

        if (mapping.type === 'tripli') {
            if (!mapping.metadata.endPointZoom2) {
                throw new Error('Zoom endpoint not found')
            }
            const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

            const res = await lastValueFrom(
                this.httpService.get<ObjectFilterData[]>(mapping.metadata.endPointZoom2, {
                    headers: { Authorization: `Bearer ${apiKey}` },
                })
            )

            if (res) {
                return res.data.map(f => {
                    return { filter: f.filter } // needed for build, also room for expansion
                })
            }
        }

        return []
    }
}
