import { Args, Query, Resolver } from '@nestjs/graphql'
import { TripliService } from './tripli.service'
import { GetCountsArgs, TripliType } from './tripli.type'

@Resolver()
export class TripliResolver {
    public constructor(private readonly tripliService: TripliService) {}

    @Query(() => [TripliType])
    public async counts(@Args() { zoomLevel }: GetCountsArgs) {
        return this.tripliService.getCounts(zoomLevel)
    }
}
