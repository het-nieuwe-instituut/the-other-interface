import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { PaginationArgs } from '../util/paginationArgs.type'
import { SlackService } from '../util/slack.service'

/**
 * Due to typescript's limitations, we decided to use this approach to verify expected
 * keys in runtime. There are other solutions, but those require fundamental changes to
 * how we use queryTriplyData, or to the core of typescript.
 *
 * A sample use case would be:
 * 		interface A {
 * 			foo: bar
 * 		}
 *
 * 		const aKeys: KeysToVerify<T> = {
 * 			foo: true 	<-- without this key/value, compiler will error
 * 		}
 *
 * 		// if there is a type mismatch between A & aKeys, compiler will error
 * 		... triplyService.queryTriplyData<A>(..., aKeys, ...)
 *
 *
 * Although this approach creates duplicate code (double interface definition), the type
 * safety is still enforced. If the actual interface/type (T) is updated, the compiler
 * should error at the constant definition.
 *
 * At the moment, the keys are only used to verify their existence. If needed, it could
 * be extended to check for value types as well.
 *
 */
export type KeysToVerify<T> = Record<keyof T, true>

@Injectable()
export class TriplyService {
    private readonly endpointBaseURL: string
    private readonly apiKey: string
    private readonly baseQueryPath: string

    public constructor(
        configService: ConfigService,
        private readonly httpService: HttpService,
        private readonly slackService: SlackService
    ) {
        this.endpointBaseURL = configService.getOrThrow('TRIPLI_API_BASEURL')
        this.apiKey = configService.getOrThrow('TRIPLY_API_KEY')
        this.baseQueryPath =
            configService.getOrThrow('ENV') === 'development'
                ? '/queries/the-other-interface-acceptance'
                : '/queries/the-other-interface'
    }

    private defaultPage = '1'
    private defaultPageSize = '16'

    public async queryTriplyData<ReturnDataType>(
        endpointArg: string,
        keysToVerify: KeysToVerify<ReturnDataType>,
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

        const res = await this.fetch<ReturnDataType>(endpoint)
        this.checkResponseType(res, keysToVerify)

        return res
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

    private checkResponseType<ReturnDataType>(responseData: unknown, keysToVerify: KeysToVerify<ReturnDataType>) {
        if (!responseData || !Array.isArray(responseData) || !responseData.length) {
            return
        }

        try {
            Object.keys(keysToVerify).forEach(k => {
                if (!(k in responseData[0])) {
                    const message = `${String(k)} belonging to ${JSON.stringify(
                        keysToVerify
                    )} is not returned in ${JSON.stringify(responseData)}`

                    // response is irrelevant, no need to await
                    this.slackService.postMessageToChannel(this.slackService.channels.systemNotification, message)
                }
            })
        } catch (err) {
            const message = `Unable to test keys ${JSON.stringify(keysToVerify)} in response ${JSON.stringify(
                responseData
            )}`

            // response is irrelevant, no need to await
            this.slackService.postMessageToChannel(this.slackService.channels.systemNotification, message)
        }
    }
}
