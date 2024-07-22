import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import {
  ObjectRecordRelationArgs,
  ObjectRecordRelationCountArgs,
  ObjectRecordZoomLevel3Type,
  ObjectRelationsCountType,
  ObjectRelationsType,
  ObjectsZoomLevel2HoverArgs,
  ObjectsZoomLevel3DetailType,
  ObjectsZoomLevelHoverType,
} from './objects.type'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ObjectsService } from './objects.service'
import { LocaleArgs } from '../util/localeArgs.type'

@Resolver(ObjectRelationsType)
export class ObjectRelationstZoomLevel3Resolver {
  public constructor(private readonly objectsService: ObjectsService) {}

  @Query(() => [ObjectRelationsType], { nullable: true })
  public objectRecordRelations(
    @Args() args: ObjectRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs
  ) {
    return this.objectsService.getRelationsData(args.id, args.type, paginationArgs, args.locale)
  }

  @Query(() => [ObjectRelationsCountType], { nullable: true })
  public objectRecordRelationsCount(@Args() args: ObjectRecordRelationCountArgs) {
    return this.objectsService.getRelationsDataCount(args.id, args.type)
  }
}

@Resolver(ObjectsZoomLevelHoverType)
export class ObjectsZoomLevelRecordHoverResolver {
  public constructor(private readonly objectsService: ObjectsService) {}

  @Query(() => ObjectsZoomLevelHoverType)
  public async objectsZoomRecordHover(@Args() args: ObjectsZoomLevel2HoverArgs) {
    return this.objectsService.getZoomRecordHover(args.id, args.locale)
  }
}

@Resolver(ObjectsZoomLevel3DetailType)
export class ObjectsZoomLevel3DetailResolver {
  public constructor(private readonly objectsService: ObjectsService) {}

  @Query(() => ObjectsZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3Object(@Args('id') id: string, @Args() { locale }: LocaleArgs) {
    return this.objectsService.getZoomLevel3Data(id, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: ObjectsZoomLevel3DetailType,
    @Args() { locale }: LocaleArgs
  ) {
    return this.objectsService.getEnrichedSources(record.id, locale, record?.externalURI)
  }
}

@Resolver(ObjectRecordZoomLevel3Type)
export class ObjectsRecordZoomLevel3Resolver {
  public constructor(private readonly objectsService: ObjectsService) {}

  @Query(() => ObjectRecordZoomLevel3Type, { nullable: true })
  public async objectsRecordZoomLevel3(
    @Args('id') publicationId: string,
    @Args() { locale }: LocaleArgs
  ) {
    return this.objectsService.getZoomLevel3RecordData(publicationId, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: ObjectRecordZoomLevel3Type,
    @Args() { locale }: LocaleArgs
  ) {
    return this.objectsService.getEnrichedSources(record.id, locale, record.externalSource)
  }
}
