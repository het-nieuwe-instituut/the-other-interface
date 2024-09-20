import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { catchError, lastValueFrom } from 'rxjs'
import { Config } from 'src/config/config'
import { PaginationArgs } from '../util/paginationArgs.type'
import { SearchResultItemType, SearchResultType } from './triplyElasticSearch.type'
import { TriplyUtils } from '../triply/triply.utils'
import { map } from 'rxjs'
import { Locale } from '../util/locale.type'
import { get } from 'lodash'
import { SlackService } from '../util/slack.service'

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
        'https://www ica org/standards/RiC/ontology#title'?: string[] // archives title
        'https://schema.org/name'?: string[] // publications name & people name
        'http://www.w3.org/2004/02/skos/core#prefLabel'?: string[] // objects prefLabel
      }
    }[]
  }
}

@Injectable()
export class TriplyElasticSearchService {
  private readonly apiKey: string
  private readonly elasticSearchURL: Record<Locale, string>

  public constructor(
    private readonly configService: ConfigService<Config>,
    private readonly httpService: HttpService,
    private readonly slackService: SlackService
  ) {
    const endpointBaseURL = configService.getOrThrow('TRIPLY_API_BASEURL')
    this.apiKey = configService.getOrThrow('TRIPLY_API_KEY')
    const env = configService.getOrThrow('ENV')

    if (env !== 'production') {
      this.elasticSearchURL = {
        [Locale.nl]: `${endpointBaseURL}/datasets/the-other-interface-acceptance/knowledge-graph/services/knowledge-graph/_search`,
        [Locale.en]: `${endpointBaseURL}/datasets/the-other-interface-acceptance/knowledge-graph-english/services/knowledge-graph-english/_search`,
      }
    } else {
      this.elasticSearchURL = {
        [Locale.nl]: `${endpointBaseURL}/datasets/the-other-interface/knowledge-graph/services/knowledge-graph-ES/_search`,
        [Locale.en]: `${endpointBaseURL}/datasets/the-other-interface/knowledge-graph-english/services/knowledge-graph-english/_search`,
      }
    }
  }

  public async search(
    search: string,
    locale: Locale,
    { start = 0, limit = 12 }: Pick<PaginationArgs, 'start' | 'limit'>
  ): Promise<SearchResultType> {
    const elasticQuery = {
      from: start,
      size: limit,
      query: this.getQuery(search),
    }
    const date = new Date()

    const endpoint = new URL(this.elasticSearchURL[locale])
    const res = await this.post<ElasticsearchResult>(endpoint, elasticQuery)

    const elapsedMs = new Date().getTime() - date.getTime()
    if (elapsedMs > 3000) {
      const message = `Triply query for ${endpoint} took ${elapsedMs}ms`
      console.warn(message)
      this.slackService
        .postMessageToChannel(this.slackService.channels.systemNotification, message)
        .catch(err => console.error(err))
    }

    const formattedResult = res.hits.hits.map(h => this.formatSearchResult(h))

    return {
      nodes: formattedResult,
      total: res.hits.total.value,
    }
  }

  private post<ReturnDataType>(endpoint: URL, body: object) {
    const headers = { Authorization: `Bearer ${this.apiKey}` }
    const res = this.httpService.post<ReturnDataType>(endpoint.toString(), body, { headers })

    return lastValueFrom(
      res.pipe(
        catchError(err => {
          const message = get(err, 'message') || err
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
      const titleField =
        item._source['https://www ica org/standards/RiC/ontology#title'] ||
        item._source['https://schema.org/name'] ||
        item._source['http://www.w3.org/2004/02/skos/core#prefLabel']
      const title = titleField?.join(', ') || ''

      return {
        thumbnail,
        title,
        id,
        type,
      }
    } catch (e) {
      console.error(get(e, 'message') || e)
      return null
    }
  }

  private getQuery(searchText: string) {
    const sanitizedText = this.escapeElasticsearchQuery(searchText)

    return {
      multi_match: {
        query: sanitizedText,
        fields: [
          'https://www ica org/standards/RiC/ontology#title', // archives title
          'https://schema.org/name', // publications name & people name
          'http://www.w3.org/2004/02/skos/core#prefLabel', // objects prefLabel
        ],
      },
    }
  }

  private escapeElasticsearchQuery(queryString: string) {
    // List of characters to escape in Elasticsearch queries
    const specialCharacters = /[+\-=&|><!(){}\[\]^"~*?:\\\/]/g

    // Escape each special character with a backslash
    return queryString.replace(specialCharacters, '\\$&')
  }
}
