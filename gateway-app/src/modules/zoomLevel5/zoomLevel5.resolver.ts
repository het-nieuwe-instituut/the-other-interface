import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ObjectsZoomLevel5DetailType } from '../objects/objects.type'
import { PoepleZoomLevel5DetailType } from '../people/people.type'
import { PublicationsZoomLevel5Types } from '../publications/publications.service'
import {
    PublicationsArticleZoomLevel5DetailType,
    PublicationsAudioVisualZoomLevel5DetailType,
    PublicationsBookZoomLevel5DetailType,
    PublicationsSerialZoomLevel5DetailType,
} from '../publications/publications.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel5Service } from './zoomLevel5.service'
import { RelatedRecordType, ZoomLevel5Args, ZoomLevel5Type } from './zoomLevel5.type'

@Resolver(ZoomLevel5Type)
export class ZoomLevel5Resolver {
    public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

    @Query(() => [ZoomLevel5Type], { nullable: true })
    public relations(@Args() args: ZoomLevel5Args) {
        return this.zoomLevel5Service.getRelations(args.id, args.type)
    }

    @Query(() => ObjectsZoomLevel5DetailType, { nullable: true })
    public zoomLevel5Object(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Objects)
    }

    @Query(() => PoepleZoomLevel5DetailType, { nullable: true })
    public zoomLevel5Person(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.People)
    }

    @Query(() => PublicationsBookZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsBook(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, PublicationsZoomLevel5Types.book)
    }

    @Query(() => PublicationsSerialZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsSerial(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, PublicationsZoomLevel5Types.serial)
    }

    @Query(() => PublicationsArticleZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsArticle(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, PublicationsZoomLevel5Types.article)
    }

    @Query(() => PublicationsAudioVisualZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsAudiovisual(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(
            objectId,
            EntityNames.Publications,
            PublicationsZoomLevel5Types.audiovisual
        )
    }
}

@Resolver(RelatedRecordType)
export class RelatedRecordTypeResolver {
    public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

    @ResolveField(() => RelatedRecordType)
    public randomRelations(@Parent() parent: RelatedRecordType) {
        return this.zoomLevel5Service.getRelations(parent.id, parent.type)
    }
}
