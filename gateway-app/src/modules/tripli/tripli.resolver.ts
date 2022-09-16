import { Args, Query, Resolver } from '@nestjs/graphql'
import { StoryService } from '../story/story.service'
import { TripliService } from './tripli.service'
import { EntityNames, TripliCountsType, TripliFiltersType } from './tripli.type'

@Resolver()
export class TripliResolver {
    public constructor(private readonly tripliService: TripliService, private readonly storyService: StoryService) {}

    @Query(() => [TripliCountsType])
    public async counts() {
        const strapiData = await this.storyService.getPeopleDataForZoomLevel1()
        const tripliData = await this.tripliService.getCounts()

        return [...tripliData, strapiData]
    }

    @Query(() => [TripliFiltersType])
    public async filters(@Args('entityName') entityName: EntityNames) {
        const result = await this.tripliService.getFilters(entityName)

        return result
    }
}
