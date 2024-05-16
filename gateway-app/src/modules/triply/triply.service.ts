import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { Config } from 'src/config/config'
import { PaginationArgs } from '../util/paginationArgs.type'
import { RollbarService } from '../util/rollbar.service'
import { SearchResultItemType } from './triply.type'
import { TriplyUtils } from './triply.utils'

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

export interface ElasticsearchResult {
  hits: {
    total: {
      value: number
    }
    hits: {
      _id: string // uri
      _source: {
        '@id': string
        'https://schema org/url'?: string[]
        'https://www ica org/standards/RiC/ontology#title'?: string[]
      }
    }[]
  }
}

@Injectable()
export class TriplyService {
  private readonly endpointBaseURL: string
  private readonly apiKey: string
  private readonly baseQueryPath: string
  private readonly elasticSearchURL: string

  public constructor(
    private configService: ConfigService<Config>,
    private readonly httpService: HttpService,
    private readonly rollbarService: RollbarService
  ) {
    this.endpointBaseURL = configService.getOrThrow('TRIPLY_API_BASEURL')
    this.apiKey = configService.getOrThrow('TRIPLY_API_KEY')
    this.baseQueryPath = ''
    const env = configService.getOrThrow('ENV')

    if (env === 'development' || env === 'staging') {
      this.baseQueryPath = '/queries/the-other-interface-testing'
      this.elasticSearchURL = `${this.endpointBaseURL}/datasets/the-other-interface-acceptance/knowledge-graph/services/knowledge-graph/_search`
    } else if (env === 'acceptance') {
      this.baseQueryPath = '/queries/the-other-interface-acceptance'
      this.elasticSearchURL = `${this.endpointBaseURL}/datasets/the-other-interface-acceptance/knowledge-graph/services/knowledge-graph/_search`
    } else {
      this.baseQueryPath = '/queries/the-other-interface'
      this.elasticSearchURL = `${this.endpointBaseURL}/datasets/the-other-interface/knowledge-graph/services/knowledge-graph-ES/_search`
    }
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
    this.checkResponseType(res.data, keysToVerify)

    return res
  }

  // TODO: implement locale after ElasticSearch endpoint is updated - HNIT-1903
  public async search(search: string, locale: string, { page = 1, pageSize = 12 }: PaginationArgs) {
    const elasticQuery = JSON.stringify({
      from: pageSize * (page - 1),
      size: pageSize,
      query: this.getQueryString(search),
    })

    const res = await this.post<ElasticsearchResult>(new URL(this.elasticSearchURL), elasticQuery)

    return res.data.hits.hits.map(h => this.formatSearchResult(h))
  }

  private fetch<ReturnDataType>(endpoint: URL) {
    const headers = { Authorization: `Bearer ${this.apiKey}` }
    const res = this.httpService.get<ReturnDataType[]>(endpoint.toString(), { headers })

    return lastValueFrom(res)
  }

  private post<ReturnDataType>(endpoint: URL, body: string) {
    const headers = { Authorization: `Bearer ${this.apiKey}` }
    const res = this.httpService.post<ReturnDataType>(endpoint.toString(), body, { headers })

    return lastValueFrom(res)
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

  private formatSearchResult(
    item: ElasticsearchResult['hits']['hits'][0]
  ): SearchResultItemType | null {
    try {
      const type = TriplyUtils.getEntityNameFromUri(item._id)
      const id = TriplyUtils.getIdFromUri(item._id)

      if (!id || !type) {
        return null
      }

      const thumbnail = item._source['https://schema org/url']?.[0]
      const title =
        item._source['https://www ica org/standards/RiC/ontology#title']?.join(', ') || ''

      return {
        thumbnail,
        title,
        id,
        type,
      }
    } catch (e) {
      console.error(e)
      return null
    }
  }

  private getQueryString(searchText: string) {
    const sanitizedText = this.escapeElasticsearchQuery(searchText)

    return JSON.stringify({
      query: {
        multi_match: {
          query: sanitizedText,
          fields: [
            'https://www ica org/standards/RiC/ontology#title',
            'https://schema.org/name',
            'http://www.w3.org/2004/02/skos/core#prefLabel',
            'https://schema.org/name',
          ],
        },
      },
    })
  }

  private escapeElasticsearchQuery(queryString: string) {
    // List of characters to escape in Elasticsearch queries
    const specialCharacters = /[+\-=&|><!(){}\[\]^"~*?:\\\/]/g

    // Escape each special character with a backslash
    return queryString.replace(specialCharacters, '\\$&')
  }
}
