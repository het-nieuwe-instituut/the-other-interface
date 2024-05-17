import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { Config } from 'src/config/config'
import { PaginationArgs } from '../util/paginationArgs.type'
import { SearchResultItemType } from './triplyElasticSearch.type'
import { TriplyUtils } from '../triply/triply.utils'

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
  private readonly elasticSearchURL: string

  public constructor(
    private readonly configService: ConfigService<Config>,
    private readonly httpService: HttpService
  ) {
    const endpointBaseURL = configService.getOrThrow('TRIPLY_API_BASEURL')
    this.apiKey = configService.getOrThrow('TRIPLY_API_KEY')
    const env = configService.getOrThrow('ENV')

    if (env !== 'production') {
      this.elasticSearchURL = `${endpointBaseURL}/datasets/the-other-interface-acceptance/knowledge-graph/services/knowledge-graph/_search`
    } else {
      this.elasticSearchURL = `${endpointBaseURL}/datasets/the-other-interface/knowledge-graph/services/knowledge-graph-ES/_search`
    }
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

  private post<ReturnDataType>(endpoint: URL, body: string) {
    const headers = { Authorization: `Bearer ${this.apiKey}` }
    const res = this.httpService.post<ReturnDataType>(endpoint.toString(), body, { headers })

    return lastValueFrom(res)
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
            'https://www ica org/standards/RiC/ontology#title', // archives title
            'https://schema.org/name', // publications name & people name
            'http://www.w3.org/2004/02/skos/core#prefLabel', // objects prefLabel
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
