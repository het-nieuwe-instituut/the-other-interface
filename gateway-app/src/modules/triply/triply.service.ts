import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { catchError, lastValueFrom, map } from 'rxjs'
import { Config } from 'src/config/config'
import { PaginationArgs } from '../util/paginationArgs.type'
import { RollbarService } from '../util/rollbar.service'
import { get } from 'lodash'
import { Locale } from '../util/locale.type'
import { TriplyUtils } from './triply.utils'
import { EnrichedRecordBaseType } from './triply.type'

export enum ExternalSource {
  getty = 'getty',
  wikidata = 'wikidata',
  rkd = 'rkd',
}

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
    private configService: ConfigService<Config>,
    private readonly httpService: HttpService,
    private readonly rollbarService: RollbarService
  ) {
    this.endpointBaseURL = configService.getOrThrow('TRIPLY_API_BASEURL')
    this.apiKey = configService.getOrThrow('TRIPLY_API_KEY')
    const env = configService.getOrThrow('ENV')
    this.baseQueryPath =
      env !== 'production' ? '/queries/the-other-interface-testing' : '/queries/the-other-interface'
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

    const data = await this.fetch<ReturnDataType>(endpoint)
    this.checkResponseType(data, keysToVerify)

    return { data }
  }

  public async getEnrichedSourceData(
    enrichedSourceEndpoints: Record<ExternalSource, string>,
    id: string,
    locale: Locale
  ): Promise<EnrichedRecordBaseType[]> {
    const sources = Object.entries(enrichedSourceEndpoints)
    const params = { id, language: locale }

    const enrichedSources = await Promise.all(
      sources.map(async ([source, endpoint]) => {
        const result = await this.queryTriplyData(endpoint, {}, undefined, params)

        const enrichedSource = TriplyUtils.combineObjectArray(result.data as object[])
        const externalSourceUrl = TriplyUtils.getExternalSourceUrlFromData(
          result.data,
          source as ExternalSource
        )

        return {
          ...enrichedSource,
          id,
          externalSourceType: source as ExternalSource,
          externalSourceUrl,
        }
      })
    )

    return enrichedSources
  }

  private fetch<ReturnDataType>(endpoint: URL) {
    const headers = { Authorization: `Bearer ${this.apiKey}` }
    const res = this.httpService.get<ReturnDataType[]>(endpoint.toString(), { headers })

    return lastValueFrom(
      res.pipe(
        catchError(err => {
          console.error(get(err, 'message') || err)
          return []
        }),
        map(res => res.data)
      )
    )
  }

  private getEndpointForArg(endpointArg: string) {
    if (endpointArg.startsWith('https://')) {
      return new URL(endpointArg)
    }

    const endpointSuffix = endpointArg.startsWith('/') ? endpointArg : `/${endpointArg}`

    return new URL(`${this.endpointBaseURL}${this.baseQueryPath}${endpointSuffix}`)
  }

  private checkResponseType<ReturnDataType>(
    responseData: unknown,
    keysToVerify: KeysToVerify<ReturnDataType>
  ) {
    if (!responseData || !Array.isArray(responseData) || !responseData.length) {
      return
    }

    try {
      const expectedKeys = Object.keys(keysToVerify)
      const receivedKeys = Object.keys(responseData[0])

      expectedKeys.forEach(k => {
        if (!receivedKeys.includes(k)) {
          const message = `"${k}" is not returned in ${JSON.stringify(receivedKeys)}`

          this.rollbarService.logError(message)
        }
      })
    } catch (err) {
      const message = `Unable to test keys ${JSON.stringify(
        keysToVerify
      )} in response ${JSON.stringify(responseData)}`
      this.rollbarService.logError(message)
    }
  }
}
