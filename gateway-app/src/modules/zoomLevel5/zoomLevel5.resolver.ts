import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ZoomLevel5Service } from './zoomLevel5.service'
import { ZoomLevel5Args, ZoomLevel5Type } from './zoomLevel5.type'

@Resolver(ZoomLevel5Type)
export class ZoomLevel5Resolver {
    public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

    @Query(() => ZoomLevel5Type)
    public getLevel5Data(@Args() args: ZoomLevel5Args) {
        return this.zoomLevel5Service.getLevel5Data(args)
    }

    @ResolveField()
    public randomRecords(@Parent() type: ZoomLevel5Type) {
        // TODO
    }
}
