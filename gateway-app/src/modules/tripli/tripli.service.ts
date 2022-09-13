import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'

interface ObjectPerTypeData {
    class: string
    numberOfInstances: string
}

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
        const endpoint =
            'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/objects-per-type/run'

        // TECHNICAL-DEBT: implement error handling
        // TECHNICAL-DEBT: (dynamically) verify received type
        const res = await lastValueFrom(this.httpService.get<ObjectPerTypeData[]>(endpoint))
        return res.data.map(r => {
            return {
                class: r.class,
                numberOfInstances: parseInt(r.numberOfInstances, 10),
            }
        })
    }
}
