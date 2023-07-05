import { Args, Resolver, Query } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ZoomLevel4Service } from './zoomLevel4.service'
import { ZoomLevel4Args, ZoomLevel4ParentType } from './zoomLevel4.type'

@Resolver()
export class ZoomLevel4Resolver {
  public constructor(private readonly zoomLevel4Service: ZoomLevel4Service) {}

  @Query(() => ZoomLevel4ParentType)
  public async zoomLevel4(@Args() args: ZoomLevel4Args, @Args() paginationArgs: PaginationArgs) {
    return this.zoomLevel4Service.getData(
      args.entityName,
      {
        archivesFilters: args.archivesFilters,
        objectsFilters: args.objectsFilters,
        peopleFilters: args.peopleFilters,
        publicationsFilters: args.publicationsFilters,
      },
      paginationArgs
    )
  }
}
