import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class TripliService {
    public constructor(private configService: ConfigService, private readonly httpService: HttpService) {}

    private defaultPage = '1'
    private defaultPageSize = '16'

    public async getTripliData<ReturnDataType>(endpoint: string, paginationArgs?: { page: number; pageSize: number }) {
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

        if (paginationArgs) {
            const pagedEndpoint = new URL(endpoint)
            pagedEndpoint.searchParams.append(
                'page',
                paginationArgs.page ? paginationArgs.page.toString() : this.defaultPage
            )
            pagedEndpoint.searchParams.append(
                'pageSize',
                paginationArgs.pageSize ? paginationArgs.pageSize.toString() : this.defaultPageSize
            )

            endpoint = pagedEndpoint.toString()
        }

        const res = await lastValueFrom(
            this.httpService.get<ReturnDataType[]>(endpoint, {
                headers: { Authorization: `Bearer ${apiKey}` },
            })
        )
        return res
    }
}
