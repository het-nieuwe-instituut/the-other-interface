import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class AppService {
    public constructor(private readonly httpService: HttpService) {}

    public getHello(): string {
        return 'Hello World!'
    }

    public async getObjectsPerType() {
        const triplyResponse = await lastValueFrom(
            this.httpService.get(
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/objects-per-type/run'
            )
        )

        return triplyResponse.data
    }
}
