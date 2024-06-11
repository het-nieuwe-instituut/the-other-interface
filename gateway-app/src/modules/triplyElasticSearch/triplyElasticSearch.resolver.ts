import { Args, Query, Resolver } from '@nestjs/graphql'
import { TriplyElasticSearchService } from './triplyElasticSearch.service'
import { SearchArgsType, SearchResultType } from './triplyElasticSearch.type'

@Resolver(SearchResultType)
export class TriplyElasticSearchResolver {
  public constructor(private readonly triplyElasticSearchService: TriplyElasticSearchService) {}

  @Query(() => SearchResultType)
  public searchTriply(@Args() args: SearchArgsType) {
    return this.triplyElasticSearchService.search(args.text, args.lang, {
      page: args.page,
      pageSize: args.pageSize,
    })
  }
}
