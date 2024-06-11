import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import {
  ObjectMakerType,
  ObjectRecordRelationArgs,
  ObjectRecordRelationCountArgs,
  ObjectRelationsCountType,
  ObjectRelationsType,
  ObjectsZoomLevel2HoverArgs,
  ObjectsZoomLevelHoverType,
} from './objects.type'
import { TriplyUtils } from '../triply/triply.utils'
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

@Resolver(ObjectMakerType)
export class ObjectMakerResolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}
  @ResolveField()
  public populatedMaker(@Parent() object: ObjectMakerType, @Args() { locale }: LocaleArgs) {
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
  public async objectsZoomRecordHover(@Args() args: ObjectsZoomLevel2HoverArgs) {
    return this.objectsService.getZoomRecordHover(args.id, args.locale)
  }
}
