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
    const filterValues = [
      'https://www.ica.org/standards/RiC/ontology#RecordSet',
      'https://schema.org/VisualArtwork',
      'https://schema.org/Person',
      'https://schema.org/Organization',
      'https://schema.org/CreativeWork',
    ]

    return {
      bool: {
        must: {
          multi_match: {
            query: sanitizedText,
            fields: [
              'https://www ica org/standards/RiC/ontology#title', // archives title
              'https://schema org/name', // publications name & people name
              'http://www w3 org/2004/02/skos/core#prefLabel', // objects prefLabel
              'https://schema org/description', // people & object & publication description
              'https://schema org/birthDate', // people birthDate
              'https://schema org/startDate', // people & publication startDate
              'https://schema org/foundingDate', // people foundingDate
              // 'https://schema org/birthPlace', // people birthplace - wait
              // https://schema.org/birthPlace > http://www.w3.org/2004/02/skos/core#prefLabel - wait
              'https://schema org/foundingLocation', // people foundingLocation
              'https://schema org/deathDate', // people deathDate
              'https://schema org/endDate', // people endDate
              'https://schema org/dissolutionDate', // people dissolutionDate
              // 'https://schema org/deathPlace', // people deathPlace  - wait
              // 'https://schema.org/deathPlace > http://www.w3.org/2004/02/skos/core#prefLabel'  - wait
              // 'https://schema org/location', // people & publication location  - wait
              // 'https://schema.org/location > http://www.w3.org/2004/02/skos/core#prefLabel'  - wait
              // 'https://schema org/memberOf', // people association  - wait
              // 'https://schema.org/memberOf > https://schema.org/name'  - wait
              'https://schema org/creator', // object & article creator
              // 'https://schema.org/creator > https://schema.org/name'  - wait
              // 'https://schema.org/dateCreated > http://www.cidoc-crm.org/cidoc-crm/P82a_begin_of_the_begin', // object start date  - wait
              // 'https://schema.org/dateCreated > http://www.cidoc-crm.org/cidoc-crm/P82b_end_of_the_end', // object end date  - wait
              // 'https://schema.org/about > http://www.w3.org/2004/02/skos/core#prefLabel', // object related keywords  - wait
              'https://www ica org/standards/RiC/ontology#hasOrHadLocation', // object geoKeyword
              // 'https://schema.org/contentLocation > http://www.w3.org/2004/02/skos/core#prefLabel', // object geoKeyword  - wait
              'https://schema org/publishedBy', // publication publisher
              // 'https://schema.org/keywords > http://www.w3.org/2004/02/skos/core#prefLabel', // publication related keywords  - wait
              // 'https://schema.org/contentLocation > http://www.w3.org/2004/02/skos/core#prefLabel', // publication geoKeyword  - wait
              'https://www ica org/standards/RiC/ontology#scopeAndContent', // archive description
              'https://www ica org/standards/RiC/ontology#hasBeginningDate', // archive period
              'https://www ica org/standards/RiC/ontology#hasEndDate', // archive subject
              // 'https://www.ica.org/standards/RiC/ontology#hasOrHadLocation > http://www.w3.org/2004/02/skos/core#prefLabel', // archive location  - wait
            ],
          },
        },
        filter: {
          bool: {
            should: filterValues.map(v => ({
              match_phrase: { 'http://www w3 org/1999/02/22-rdf-syntax-ns#type': v },
            })),
          },
        },
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
