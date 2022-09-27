import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class TripliService {
    public constructor(private configService: ConfigService, private readonly httpService: HttpService) {}

    private defaultPage = '1'
    private defaultPageSize = '16'

    public async getTripliData<ReturnDataType>(
        endpointSuffix: string,
        paginationArgs?: { page: number; pageSize: number },
        searchParams?: { key: string; value: string }[]
    ) {
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')
        const endpointBaseURL: string = this.configService.getOrThrow('TRIPLI_API_BASEURL')

        const endpoint = new URL(`${endpointBaseURL}${endpointSuffix.startsWith('/') ? '' : '/'}${endpointSuffix}`)

        if (paginationArgs) {
            endpoint.searchParams.append(
                'page',
                paginationArgs.page ? paginationArgs.page.toString() : this.defaultPage
            )
            endpoint.searchParams.append(
                'pageSize',
                paginationArgs.pageSize ? paginationArgs.pageSize.toString() : this.defaultPageSize
            )
        }

        if (searchParams && searchParams.length) {
            for (const { key, value } of searchParams) {
                endpoint.searchParams.append(key, value)
            }
        }

        const res = await lastValueFrom(
            this.httpService.get<ReturnDataType[]>(endpoint.toString(), {
                headers: { Authorization: `Bearer ${apiKey}` },
            })
        )
        return res
    }
}
