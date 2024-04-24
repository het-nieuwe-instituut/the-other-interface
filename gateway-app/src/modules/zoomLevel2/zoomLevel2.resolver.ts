import { Args, Resolver, Query } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ZoomLevel2Service } from './zoomLevel2.service'
import {
  ZoomLevel2Args,
  ZoomLevel2ParentType,
  ZoomLevel2AmountParentType,
  SearchArgs,
  SearchAllParentType,
} from './zoomLevel2.type'

@Resolver()
export class ZoomLevel2Resolver {
  public constructor(private readonly zoomLevel2Service: ZoomLevel2Service) {}

  @Query(() => ZoomLevel2ParentType)
  public async zoomLevel2(@Args() args: ZoomLevel2Args, @Args() paginationArgs: PaginationArgs) {
    return this.zoomLevel2Service.getData(args.entityName, paginationArgs, args.text)
  }

  @Query(() => ZoomLevel2AmountParentType)
  public async zoomLevel2Amount(@Args() args: ZoomLevel2Args) {
    return this.zoomLevel2Service.getDataAmount(args.entityName, args.text)
  }

  @Query(() => SearchAllParentType)
  public async searchByAllCategories(
    @Args() args: SearchArgs,
    @Args() paginationArgs: PaginationArgs
  ) {
    return this.zoomLevel2Service.getSearchByAllCategories(args.text, paginationArgs)
  }

  @Query(() => ZoomLevel2AmountParentType)
  public async searchByAllCategoriesAmount(@Args() args: SearchArgs) {
    return this.zoomLevel2Service.getSearchByAllCategoriesAmount(args.text)
  }
}
