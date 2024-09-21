import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { catchError, lastValueFrom, map } from 'rxjs'
import { Config } from 'src/config/config'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ErrorReporterService } from '../util/errorReporter.service'
import { get } from 'lodash'
import { Locale } from '../util/locale.type'
import { TriplyUtils } from './triply.utils'
import { EnrichedRecordBaseType } from '../triplyRecord/triplyRecord.type'
import { SlackService } from '../util/slack.service'

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
    private readonly errorReporterService: ErrorReporterService,
    private readonly slackService: SlackService
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

    const date = new Date()
    const data = await this.fetch<ReturnDataType>(endpoint)

    const elapsedMs = new Date().getTime() - date.getTime()
    if (elapsedMs > 3000) {
      const message = `Triply query for ${endpoint} took ${elapsedMs}ms`
      console.warn(message)
      this.slackService
        .postMessageToChannel(this.slackService.channels.systemNotification, message)
        .catch(err => console.error(err))
    }

    this.checkResponseType(data, keysToVerify, endpoint)

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
        if (!enrichedSource) {
          return
        }

        const externalSourceUrl = TriplyUtils.getExternalSourceUrlFromData(
          enrichedSource,
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

    return enrichedSources.reduce<EnrichedRecordBaseType[]>(
      (acc, curr) => (curr ? [...acc, curr] : acc),
      []
    )
  }

  private fetch<ReturnDataType>(endpoint: URL) {
    const headers = { Authorization: `Bearer ${this.apiKey}`, 'Accept-Encoding': '*' }
    const res = this.httpService.get<ReturnDataType[]>(endpoint.toString(), { headers })

    return lastValueFrom(
      res.pipe(
        catchError(err => {
          const message = `Error fetching from Triply at ${endpoint}: ${get(err, 'message') || err}`
          console.error(message)
          this.slackService
            .postMessageToChannel(this.slackService.channels.systemNotification, message)
            .catch(err => console.error(err))
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
    keysToVerify: KeysToVerify<ReturnDataType>,
    endpoint: URL
  ) {
    if (!responseData || !Array.isArray(responseData) || !responseData.length) {
      return
    }

    try {
      const expectedKeys = Object.keys(keysToVerify)
      const receivedKeys = Object.keys(responseData[0])

      expectedKeys.forEach(k => {
        if (!receivedKeys.includes(k)) {
          const message = `"${k}" is not returned in ${JSON.stringify(
            receivedKeys
          )} from ${endpoint.toString()}`

          this.errorReporterService.logError(new Error(message))
        }
      })
    } catch (err: Error | unknown) {
      const keys = JSON.stringify(keysToVerify)
      const message = `Unable to test keys ${keys} in response ${JSON.stringify(responseData)}`
      console.error(message)

      this.errorReporterService.logError(err instanceof Error ? err : new Error(message))
    }
  }
}
