import { Args, Query, Resolver } from '@nestjs/graphql'
import { ArchivesZoomLevel3Types } from '../archives/archives.service'
import {
  ArchivesFondsZoomLevel3DetailType,
  ArchivesOtherZoomLevel3DetailType,
  ArchiveZoomLevel3UnionType,
} from '../archives/archives.type'
import { ObjectsZoomLevel3DetailType } from '../objects/objects.type'
import { PoepleZoomLevel3DetailType } from '../people/people.type'
import {
  PublicationsService,
  PublicationsZoomLevel3Types,
} from '../publications/publications.service'
import {
  PublicationsArticleZoomLevel3DetailType,
  PublicationsAudioVisualZoomLevel3DetailType,
  PublicationsBookZoomLevel3DetailType,
  PublicationsSerialZoomLevel3DetailType,
  PublicationZoomLevel3UnionType,
} from '../publications/publications.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from './zoomLevel3.service'
import {
  ZoomLevel3Args,
  ZoomLevel3RelatedObjectsArgs,
  ZoomLevel3RelatedRecordType,
  ZoomLevel3RelationsType,
} from './zoomLevel3.type'
import { ArchivesService } from '../archives/archives.service'

@Resolver(ZoomLevel3RelationsType)
export class ZoomLevel3Resolver {
  public constructor(
    private readonly zoomLevel3Service: ZoomLevel3Service,
    private readonly archivesService: ArchivesService,
    private readonly publicationsService: PublicationsService
  ) {}

  @Query(() => [ZoomLevel3RelationsType], { nullable: true })
  public relations(@Args() args: ZoomLevel3Args) {
    return this.zoomLevel3Service.getRelations(args.id, args.type, args?.lang, args.externalSource)
  }

  @Query(() => [ZoomLevel3RelatedRecordType], { nullable: true })
  public allRelations(@Args() args: ZoomLevel3RelatedObjectsArgs) {
    return this.zoomLevel3Service.getAllRelations(args)
  }

  @Query(() => ObjectsZoomLevel3DetailType, { nullable: true })
  public zoomLevel3Object(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Objects)
  }

  @Query(() => PoepleZoomLevel3DetailType, { nullable: true })
  public zoomLevel3Person(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.People)
  }

  @Query(() => PublicationZoomLevel3UnionType, { nullable: true })
  public async zoomLevel3Publication(@Args('id') objectId: string) {
    const type = await this.publicationsService.determinePublicationType(objectId)

    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications, {
      publicationType: type,
    })
  }

  @Query(() => PublicationsBookZoomLevel3DetailType, { nullable: true })
  public zoomLevel3PublicationsBook(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications, {
      publicationType: PublicationsZoomLevel3Types.book,
    })
  }

  @Query(() => PublicationsSerialZoomLevel3DetailType, { nullable: true })
  public zoomLevel3PublicationsSerial(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications, {
      publicationType: PublicationsZoomLevel3Types.serial,
    })
  }

  @Query(() => PublicationsArticleZoomLevel3DetailType, { nullable: true })
  public zoomLevel3PublicationsArticle(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications, {
      publicationType: PublicationsZoomLevel3Types.article,
    })
  }

  @Query(() => PublicationsAudioVisualZoomLevel3DetailType, { nullable: true })
  public zoomLevel3PublicationsAudiovisual(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications, {
      publicationType: PublicationsZoomLevel3Types.audiovisual,
    })
  }

  @Query(() => ArchiveZoomLevel3UnionType, { nullable: true })
  public async zoomLevel3Archive(@Args('id') objectId: string) {
    const type = await this.archivesService.determineArchiveType(objectId)

    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives, {
      archivesType: type,
    })
  }

  @Query(() => ArchivesFondsZoomLevel3DetailType, { nullable: true })
  public zoomLevel3ArchivesFonds(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives, {
      archivesType: ArchivesZoomLevel3Types.fonds,
    })
  }

  @Query(() => ArchivesOtherZoomLevel3DetailType, { nullable: true })
  public zoomLevel3ArchivesOther(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives, {
      archivesType: ArchivesZoomLevel3Types.other,
    })
  }
}
