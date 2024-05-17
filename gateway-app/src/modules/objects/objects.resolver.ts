import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import {
  ObjectMakerType,
  ObjectRecordRelationArgs,
  ObjectRelationsCountType,
  ObjectRelationsType,
  ObjectsZoomLevel2HoverArgs,
  ObjectsZoomLevelHoverType,
} from './objects.type'
import { TriplyUtils } from '../triply/triply.utils'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ObjectsService } from './objects.service'

@Resolver(ObjectRelationsType)
export class ObjectRelationstZoomLevel3Resolver {
  public constructor(private readonly objectsService: ObjectsService) {}

  @Query(() => [ObjectRelationsType], { nullable: true })
  public objectRecordRelations(
    @Args() args: ObjectRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs,
    @Args('locale') locale: string
  ) {
    return this.objectsService.getRelationsData(args.id, args.type, paginationArgs, locale)
  }

  @Query(() => [ObjectRelationsCountType], { nullable: true })
  public objectRecordRelationsCount(@Args() args: ObjectRecordRelationArgs) {
    return this.objectsService.getRelationsDataCount(args.id, args.type)
  }
}

@Resolver(ObjectMakerType)
export class ObjectMakerResolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}
  @ResolveField()
  public populatedMaker(@Parent() object: ObjectMakerType, @Args('locale') locale: string) {
    if (!object.maker) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(object.maker)
    const id = TriplyUtils.getIdFromUri(object.maker)

    return this.zoomLevel3Service.getDetail(id, type, locale)
  }
}

@Resolver(ObjectsZoomLevelHoverType)
export class ObjectsZoomLevelRecordHoverResolver {
  public constructor(private readonly objectsService: ObjectsService) {}

  @Query(() => ObjectsZoomLevelHoverType)
  public async objectsZoomRecordHover(
    @Args() args: ObjectsZoomLevel2HoverArgs,
    @Args('locale') locale: string
  ) {
    return this.objectsService.getZoomRecordHover(args.id, locale)
  }
}
