import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { EntityIdentifierMapping, EntityNames, PaginationArgs } from './tripli.type'

interface ObjectPerTypeData {
    count: string
    dataset: string
    graph: string
}

interface ObjectFilterData {
    filter: string
}

interface ObjectFilterOptionsData {
    [x: string]: string
}

@Injectable()
export class TripliService {
    public constructor(private configService: ConfigService, private readonly httpService: HttpService) {}

    private defaultPage = '1'
    private defaultPageSize = '16'

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
                id: EntityIdentifierMapping.find(e => e.zoomLevel1?.URI === r.graph)?.id,
            }
        })
    }

    public async getFilters(entity: EntityNames) {
        const mapping = EntityIdentifierMapping.find(e => e.id === entity)
        if (!mapping) {
            throw new Error(`Entity '${entity}' not found`)
        }

        if (mapping.type === 'tripli') {
            if (!mapping.zoomLevel2?.endpoint) {
                throw new Error('Zoom endpoint not found')
            }
            const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

            const res = await lastValueFrom(
                this.httpService.get<ObjectFilterData[]>(mapping.zoomLevel2.endpoint, {
                    headers: { Authorization: `Bearer ${apiKey}` },
                })
            )

            if (res) {
                const resN = res.data.map(f => {
                    const filterMapping = mapping.zoomLevel3?.find(m => m.name === f.filter)
                    if (!filterMapping) return
                    return { filter: filterMapping.name, id: filterMapping.id }
                })

                return resN
            }
        }

        return []
    }

    public async getFilterOptions(entity: EntityNames, filter: string, paginationArgs: PaginationArgs) {
        const mapping = EntityIdentifierMapping.find(e => e.id === entity)
        if (!mapping) {
            throw new Error(`Entity '${entity}' not found`)
        }

        if (mapping.type === 'tripli') {
            const filterMapping = mapping.zoomLevel3?.find(f => f.id === filter)
            if (!filterMapping) {
                throw new Error(`Filter ${filter} not found`)
            }

            const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

            const pagedEndpoint = new URL(filterMapping.endpoint)
            pagedEndpoint.searchParams.append(
                'page',
                paginationArgs.page ? paginationArgs.page.toString() : this.defaultPage
            )
            pagedEndpoint.searchParams.append(
                'pageSize',
                paginationArgs.pageSize ? paginationArgs.pageSize.toString() : this.defaultPageSize
            )

            const res = await lastValueFrom(
                this.httpService.get<ObjectFilterOptionsData[]>(pagedEndpoint.toString(), {
                    headers: { Authorization: `Bearer ${apiKey}` },
                })
            )

            if (res.data) {
                return res.data.map(d => {
                    return {
                        uri: d[filterMapping.columns.uri] || null,
                        name: d[filterMapping.columns.name] || null,
                        count: d[filterMapping.columns.count] ? parseInt(d[filterMapping.columns.count], 10) : null,
                        total: d[filterMapping.columns.total] ? parseInt(d[filterMapping.columns.total], 10) : null,
                    }
                })
            }
        }

        return []
    }
}
