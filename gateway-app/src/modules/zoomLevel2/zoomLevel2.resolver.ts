import { Args, Resolver, Query } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ZoomLevel2Service } from './zoomLevel2.service'
import { ZoomLevel2Args, ZoomLevel2ParentType } from './zoomLevel2.type'

@Resolver()
export class ZoomLevel2Resolver {
  public constructor(private readonly zoomLevel2Service: ZoomLevel2Service) {}

  @Query(() => ZoomLevel2ParentType)
  public async zoomLevel2(@Args() args: ZoomLevel2Args, @Args() paginationArgs: PaginationArgs) {
    return this.zoomLevel2Service.getData(args.entityName, paginationArgs)
  }
}
