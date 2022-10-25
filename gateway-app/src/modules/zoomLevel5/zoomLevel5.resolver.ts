import { Args, Query, Resolver } from '@nestjs/graphql'
import { ArchivesZoomLevel5Types } from '../archives/archives.service'
import {
    ArchivesFondsZoomLevel5DetailType,
    ArchivesOtherZoomLevel5DetailType,
    ArchiveZoomLevel5UnionType,
} from '../archives/archives.type'
import { ObjectsZoomLevel5DetailType } from '../objects/objects.type'
import { PoepleZoomLevel5DetailType } from '../people/people.type'
import { PublicationsService, PublicationsZoomLevel5Types } from '../publications/publications.service'
import {
    PublicationsArticleZoomLevel5DetailType,
    PublicationsAudioVisualZoomLevel5DetailType,
    PublicationsBookZoomLevel5DetailType,
    PublicationsSerialZoomLevel5DetailType,
    PublicationZoomLevel5UnionType,
} from '../publications/publications.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel5Service } from './zoomLevel5.service'
import {
    ZoomLevel5Args,
    ZoomLevel5RelatedObjectsArgs,
    ZoomLevel5RelatedRecordType,
    ZoomLevel5RelationsType,
} from './zoomLevel5.type'
import { ArchivesService } from '../archives/archives.service'

@Resolver(ZoomLevel5RelationsType)
export class ZoomLevel5Resolver {
    public constructor(
        private readonly zoomLevel5Service: ZoomLevel5Service,
        private readonly archivesService: ArchivesService,
        private readonly publicationsService: PublicationsService
    ) {}

    @Query(() => [ZoomLevel5RelationsType], { nullable: true })
    public relations(@Args() args: ZoomLevel5Args) {
        return this.zoomLevel5Service.getRelations(args.id, args.type)
    }

    @Query(() => [ZoomLevel5RelatedRecordType], { nullable: true })
    public allRelations(@Args() args: ZoomLevel5RelatedObjectsArgs) {
        return this.zoomLevel5Service.getAllRelations(args)
    }

    @Query(() => ObjectsZoomLevel5DetailType, { nullable: true })
    public zoomLevel5Object(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Objects)
    }

    @Query(() => PoepleZoomLevel5DetailType, { nullable: true })
    public zoomLevel5Person(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.People)
    }

    @Query(() => PublicationZoomLevel5UnionType, { nullable: true })
    public async zoomLevel5Publication(@Args('id') objectId: string) {
        const type = await this.publicationsService.determinePublicationType(objectId)

        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, {
            publicationType: type,
        })
    }

    @Query(() => PublicationsBookZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsBook(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, {
            publicationType: PublicationsZoomLevel5Types.book,
        })
    }

    @Query(() => PublicationsSerialZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsSerial(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, {
            publicationType: PublicationsZoomLevel5Types.serial,
        })
    }

    @Query(() => PublicationsArticleZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsArticle(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, {
            publicationType: PublicationsZoomLevel5Types.article,
        })
    }

    @Query(() => PublicationsAudioVisualZoomLevel5DetailType, { nullable: true })
    public zoomLevel5PublicationsAudiovisual(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Publications, {
            publicationType: PublicationsZoomLevel5Types.audiovisual,
        })
    }

    @Query(() => ArchiveZoomLevel5UnionType, { nullable: true })
    public async zoomLevel5Archive(@Args('id') objectId: string) {
        const type = await this.archivesService.determineArchiveType(objectId)

        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Archives, {
            archivesType: type,
        })
    }

    @Query(() => ArchivesFondsZoomLevel5DetailType, { nullable: true })
    public zoomLevel5ArchivesFonds(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Archives, {
            archivesType: ArchivesZoomLevel5Types.fonds,
        })
    }

    @Query(() => ArchivesOtherZoomLevel5DetailType, { nullable: true })
    public zoomLevel5ArchivesOther(@Args('id') objectId: string) {
        return this.zoomLevel5Service.getDetail(objectId, EntityNames.Archives, {
            archivesType: ArchivesZoomLevel5Types.other,
        })
    }
}
