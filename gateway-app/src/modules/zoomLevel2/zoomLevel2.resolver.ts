import { Args, Query, Resolver } from '@nestjs/graphql'
import { ZoomLevel2Service } from './zoomLevel2.service'
import { ZoomLevel2Args, ZoomLevel2Type } from './zoomLevel2.type'

@Resolver(() => ZoomLevel2Type)
export class ZoomLevel2Resolver {
    public constructor(private zoomLevel2Service: ZoomLevel2Service) {}
    @Query(() => [ZoomLevel2Type])
    public async zoomLevel2(@Args() args: ZoomLevel2Args) {
        return this.zoomLevel2Service.getData(args.entityName)
    }
}
