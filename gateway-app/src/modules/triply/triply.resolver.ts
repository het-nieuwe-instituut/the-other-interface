import { Args, Query, Resolver } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'
import { TriplyService } from './triply.service'
import { SearchArgsType, SearchResultType } from './triply.type'

@Resolver()
export class TriplyResolver {
  public constructor(private readonly triplyService: TriplyService) {}

  @Query(() => SearchResultType)
  public search(@Args() args: SearchArgsType, @Args() paginationArgs: PaginationArgs) {
    return this.triplyService.search(args.text, args.lang, paginationArgs)
  }
}
