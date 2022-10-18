import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { PaginationArgs } from '../util/paginationArgs.type'

@Injectable()
export class TriplyService {
    private readonly endpointBaseURL: string
    private readonly apiKey: string
    private readonly baseQueryPath = '/queries/the-other-interface-acceptance'

    public constructor(configService: ConfigService, private readonly httpService: HttpService) {
        this.endpointBaseURL = configService.getOrThrow('TRIPLI_API_BASEURL')
        this.apiKey = configService.getOrThrow('TRIPLY_API_KEY')
    }

    private defaultPage = '1'
    private defaultPageSize = '16'

    public async queryTriplyData<ReturnDataType>(
        endpointArg: string,
        paginationArgs?: PaginationArgs,
        searchParams?: Record<string, string>
    ) {
        const endpoint = this.getEndpointForArg(endpointArg)

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

        if (searchParams) {
            for (const [key, value] of Object.entries(searchParams)) {
                endpoint.searchParams.append(key, value)
            }
        }

        return this.fetch<ReturnDataType>(endpoint)
    }

    private fetch<ReturnDataType>(endpoint: URL) {
        const headers = { Authorization: `Bearer ${this.apiKey}` }
        const res = this.httpService.get<ReturnDataType[]>(endpoint.toString(), { headers })
        return lastValueFrom(res)
    }

    private getEndpointForArg(endpointArg: string) {
        if (endpointArg.startsWith('https://')) {
            return new URL(endpointArg)
        }

        const endpointSuffix = endpointArg.startsWith('/') ? endpointArg : `/${endpointArg}`

        return new URL(`${this.endpointBaseURL}${this.baseQueryPath}${endpointSuffix}`)
    }
}
