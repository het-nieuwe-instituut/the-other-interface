import { Args, Query, Resolver } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'

import {
  PeopleRecordRelationArgs,
  PeopleRelationsCountType,
  PeopleRelationsType,
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
    return this.peopleService.getRelationsData(args.id, args.type, paginationArgs)
  }

  @Query(() => [PeopleRelationsCountType], { nullable: true })
  public peopleRecordRelationsCount(@Args() args: PeopleRecordRelationArgs) {
    return this.peopleService.getRelationsDataCount(args.id, args.type)
  }
}
