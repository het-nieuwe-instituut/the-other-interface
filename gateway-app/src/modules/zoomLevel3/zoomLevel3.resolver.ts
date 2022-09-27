import { Args, Query, Resolver } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ZoomLevel3Service } from './zoomLevel3.service'
import { ZoomLevel3Args, ZoomLevel3Type } from './zoomLevel3.type'

@Resolver(() => ZoomLevel3Type)
export class ZoomLevel3Resolver {
    public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}
    @Query(() => [ZoomLevel3Type])
    public async zoomLevel3(@Args() args: ZoomLevel3Args, @Args() paginationArgs: PaginationArgs) {
        return this.zoomLevel3Service.getData(args.entityName, args.filterId, paginationArgs)
    }
}
