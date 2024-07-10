import { Args, Query, Resolver } from '@nestjs/graphql'
import { ZoomLevel3Service } from './zoomLevel3.service'
import {
  ZoomLevel3Args,
  ZoomLevel3RelationsType,
  ZoomLevel3StoriesRelatedToRecordType,
  ZoomLevel3StoryRelationsCountArgs,
  ZoomLevel3StoryRelationsCountType,
} from './zoomLevel3.type'
import { PaginationArgs } from '../util/paginationArgs.type'

@Resolver(ZoomLevel3RelationsType)
export class ZoomLevel3Resolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

  @Query(() => [ZoomLevel3RelationsType], { nullable: true })
  public relations(@Args() args: ZoomLevel3Args, @Args() paginationArgs: PaginationArgs) {
    return this.zoomLevel3Service.getRelations(args.id, args.type, args.locale, paginationArgs)
  }

  @Query(() => ZoomLevel3StoryRelationsCountType, { nullable: true })
  public async storyRelationsCount(@Args() args: ZoomLevel3StoryRelationsCountArgs) {
    return this.zoomLevel3Service.storyRelationsCount(args.storyId, args.locale)
  }

  @Query(() => ZoomLevel3StoriesRelatedToRecordType, { nullable: true })
  public zoomLevel3StoriesRelationsForRecord(@Args() args: ZoomLevel3Args) {
    return this.zoomLevel3Service.getStoriesRelationsForRecord(args.id, args.type, args.locale)
  }
}
