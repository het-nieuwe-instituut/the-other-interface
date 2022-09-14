import { Query, Resolver } from '@nestjs/graphql'
import { StoryService } from '../story/story.service'
import { TripliService } from './tripli.service'
import { TripliType } from './tripli.type'

@Resolver()
export class TripliResolver {
    public constructor(private readonly tripliService: TripliService, private readonly storyService: StoryService) {}

    @Query(() => [TripliType])
    public async counts() {
        const strapiData = await this.storyService.getPeopleDataForZoomLevel1()
        const tripliData = await this.tripliService.getCounts()

        return [...tripliData, strapiData]
    }
}
