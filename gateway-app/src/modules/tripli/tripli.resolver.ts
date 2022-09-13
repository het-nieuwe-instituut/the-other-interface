import { Query, Resolver } from '@nestjs/graphql'
import { TripliService } from './tripli.service'
import { TripliType } from './tripli.type'

@Resolver()
export class TripliResolver {
    public constructor(private readonly tripliService: TripliService) {}

    // TODO: added for POC, delete (or update for actual requirements) before production
    @Query(() => [TripliType])
    public async counts() {
        return this.tripliService.getCounts()
    }
}
