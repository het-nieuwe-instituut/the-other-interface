import { Args, Resolver, Query } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ZoomLevel4Service } from './zoomLevel4.service'
import { ZoomLevel4Args, ZoomLevel4Type } from './zoomLevel4.type'

@Resolver(() => ZoomLevel4Type)
export class ZoomLevel4Resolver {
    public constructor(private readonly zoomLevel4Service: ZoomLevel4Service) {}

    @Query(() => [ZoomLevel4Type])
    public async zoomLevel4(@Args() args: ZoomLevel4Args, @Args() paginationArgs: PaginationArgs) {
        return this.zoomLevel4Service.getData(args.entityName, { archivesFilters: args.archiveFilters }, paginationArgs)
    }
}
