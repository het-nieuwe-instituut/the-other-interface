import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'

interface ObjectPerTypeData {
    count: string
    dataset: string
    graph: string
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

    public async getCounts(zoomLevel = 1) {
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

        let endpoint
        switch (zoomLevel) {
            case 1:
                endpoint =
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-1-record-counts/run'
                break

            default:
                throw new Error(`Zoom level ${zoomLevel} not implemented yet`)
        }

        // TECHNICAL-DEBT: implement error handling
        // TECHNICAL-DEBT: (dynamically) verify received type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = await lastValueFrom(
            this.httpService.get<ObjectPerTypeData[]>(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } })
        )
        return res.data.map(r => {
            return {
                class: r.dataset,
                numberOfInstances: parseInt(r.count, 10),
            }
        })
    }
}
