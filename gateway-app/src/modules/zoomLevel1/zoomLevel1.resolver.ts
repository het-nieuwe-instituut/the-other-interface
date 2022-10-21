import { Query, Resolver } from '@nestjs/graphql'
import { log } from 'console'
import { ZoomLevel1Service } from './zoomLevel1.service'
import { ZoomLevel1Type } from './zoomLevel1.type'

@Resolver(() => ZoomLevel1Type)
export class ZoomLevel1Resolver {
    public constructor(private readonly zoomLevel1Service: ZoomLevel1Service) {}
    @Query(() => [ZoomLevel1Type])
    public async zoomLevel1() {
        log('req: Zoom1')
        return this.zoomLevel1Service.getData()
    }
}
