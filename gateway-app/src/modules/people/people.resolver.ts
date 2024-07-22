import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PaginationArgs } from '../util/paginationArgs.type'

import {
  PeopleRecordRelationArgs,
  PeopleRecordRelationCountArgs,
  PeopleRecordZoomLevel3Type,
  PeopleRelationsCountType,
  PeopleRelationsType,
  PeopleZoomLevel2HoverArgs,
  PeopleZoomLevel3DetailType,
  PeopleZoomLevelHoverType,
} from './people.type'
import { PeopleService } from './people.service'
import { LocaleArgs } from '../util/localeArgs.type'

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

@Resolver(PeopleZoomLevel3DetailType)
export class PeopleZoomLevel3DetailResolver {
  public constructor(private readonly peopleService: PeopleService) {}

  @Query(() => PeopleZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3People(@Args('id') id: string, @Args() { locale }: LocaleArgs) {
    return this.peopleService.getZoomLevel3Data(id, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: PeopleZoomLevel3DetailType,
    @Args() { locale }: LocaleArgs
  ) {
    return this.peopleService.getEnrichedSources(record.id, locale, record?.externalURI)
  }
}

@Resolver(PeopleRecordZoomLevel3Type)
export class PeopleRecordZoomLevel3Resolver {
  public constructor(private readonly peopleService: PeopleService) {}

  @Query(() => PeopleRecordZoomLevel3Type, { nullable: true })
  public async peopleRecordZoomLevel3(
    @Args('id') publicationId: string,
    @Args() { locale }: LocaleArgs
  ) {
    return this.peopleService.getZoomLevel3RecordData(publicationId, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: PeopleRecordZoomLevel3Type,
    @Args() { locale }: LocaleArgs
  ) {
    return this.peopleService.getEnrichedSources(record.id, locale, record?.externalSource)
  }
}
