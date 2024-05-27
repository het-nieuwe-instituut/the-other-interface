import { Args, Query, Resolver } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'

import {
  PeopleRecordRelationArgs,
  PeopleRecordRelationCountArgs,
  PeopleRelationsCountType,
  PeopleRelationsType,
  PeopleZoomLevel2HoverArgs,
  PeopleZoomLevelHoverType,
} from './people.type'
import { PeopleService } from './people.service'

@Resolver(PeopleRelationsType)
export class PeopleZoomLevel3Resolver {
  public constructor(private readonly peopleService: PeopleService) {}

  @Query(() => [PeopleRelationsType], { nullable: true })
  public peopleRecordRelations(
    @Args() args: PeopleRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs
  ) {
    return this.peopleService.getRelationsData(args.id, args.type, paginationArgs, args.locale)
  }

  @Query(() => [PeopleRelationsCountType], { nullable: true })
  public peopleRecordRelationsCount(@Args() args: PeopleRecordRelationCountArgs) {
    return this.peopleService.getRelationsDataCount(args.id, args.type)
  }
}

@Resolver(PeopleZoomLevelHoverType)
export class PeopleZoomLevelRecordHoverResolver {
  public constructor(private readonly peopleService: PeopleService) {}

  @Query(() => PeopleZoomLevelHoverType)
  public async peopleZoomLevelHover(@Args() args: PeopleZoomLevel2HoverArgs) {
    return this.peopleService.getZoomRecordHover(args.id, args.locale)
  }
}
