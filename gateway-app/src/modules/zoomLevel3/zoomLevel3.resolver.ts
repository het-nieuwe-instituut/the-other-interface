import { Args, Query, Resolver } from '@nestjs/graphql'
import {
  ArchiveZoomLevel3DetailType,
  ArchiveZoomLevel3UnionType,
  ArchivesFondsZoomLevel3DetailType,
  ArchivesOtherZoomLevel3DetailType,
  ArchivesRecordZoomLevel3Type,
} from '../archives/archives.type'
import { ObjectRecordZoomLevel3Type, ObjectsZoomLevel3DetailType } from '../objects/objects.type'
import { PeopleRecordZoomLevel3Type, PeopleZoomLevel3DetailType } from '../people/people.type'
import { PublicationsService } from '../publications/publications.service'
import {
  PublicationZoomLevel3DetailType,
  PublicationZoomLevel3UnionType,
  PublicationsArticleZoomLevel3DetailType,
  PublicationsAudioVisualZoomLevel3DetailType,
  PublicationsBookZoomLevel3DetailType,
  PublicationsSerialZoomLevel3DetailType,
} from '../publications/publications.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from './zoomLevel3.service'
import { ZoomLevel3Args, ZoomLevel3RelationsType } from './zoomLevel3.type'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
// import { ObjectsService } from '../objects/objects.service'

@Resolver(ZoomLevel3RelationsType)
export class ZoomLevel3Resolver {
  public constructor(
    private readonly zoomLevel3Service: ZoomLevel3Service,
    private readonly archivesService: ArchivesService,
    private readonly publicationsService: PublicationsService,
    private readonly objectsService: ObjectsService,
    private readonly peopleService: PeopleService
  ) {}

  @Query(() => [ZoomLevel3RelationsType], { nullable: true })
  public relations(@Args() args: ZoomLevel3Args) {
    return this.zoomLevel3Service.getRelations(args.id, args.type, args?.lang)
  }

  @Query(() => [ArchivesRecordZoomLevel3Type], { nullable: true })
  public async archivesRecordZoomLevel3(@Args('id') archiveId: string) {
    return this.archivesService.getZoomLevel3RecordData(archiveId)
  }

  @Query(() => [ObjectRecordZoomLevel3Type], { nullable: true })
  public async objectsRecordZoomLevel3(@Args('id') objectId: string) {
    return this.objectsService.getZoomLevel3RecordData(objectId)
  }

  @Query(() => [PeopleRecordZoomLevel3Type], { nullable: true })
  public async peopleRecordZoomLevel3(@Args('id') peopleId: string) {
    return this.peopleService.getZoomLevel3RecordData(peopleId)
  }

  // @Query(() => [ZoomLevel3RelatedRecordType], { nullable: true })
  // public allRelations(@Args() args: ZoomLevel3RelatedObjectsArgs) {
  //   return this.zoomLevel3Service.getAllRelations(args)
  // }

  @Query(() => ObjectsZoomLevel3DetailType, { nullable: true })
  public zoomLevel3Object(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Objects)
  }

  @Query(() => PeopleZoomLevel3DetailType, { nullable: true })
  public zoomLevel3Person(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.People)
  }

  @Query(() => PublicationZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3Publication(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications)
  }

  @Query(() => ArchiveZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3Archive(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives)
  }

  @Query(() => PublicationZoomLevel3UnionType, { nullable: true })
  public async zoomLevel5Publication(@Args('id') objectId: string) {
    // const type = await this.publicationsService.determinePublicationType(objectId)

    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications)
  }

  @Query(() => PublicationsBookZoomLevel3DetailType, { nullable: true })
  public zoomLevel5PublicationsBook(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications)
  }

  @Query(() => PublicationsSerialZoomLevel3DetailType, { nullable: true })
  public zoomLevel5PublicationsSerial(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications)
  }

  @Query(() => PublicationsArticleZoomLevel3DetailType, { nullable: true })
  public zoomLevel5PublicationsArticle(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications)
  }

  @Query(() => PublicationsAudioVisualZoomLevel3DetailType, { nullable: true })
  public zoomLevel5PublicationsAudiovisual(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications)
  }

  @Query(() => ArchiveZoomLevel3UnionType, { nullable: true })
  public async zoomLevel5Archive(@Args('id') objectId: string) {
    // const type = await this.archivesService.determineArchiveType(objectId)

    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives)
  }

  @Query(() => ArchivesFondsZoomLevel3DetailType, { nullable: true })
  public zoomLevel5ArchivesFonds(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives)
  }

  @Query(() => ArchivesOtherZoomLevel3DetailType, { nullable: true })
  public zoomLevel5ArchivesOther(@Args('id') objectId: string) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives)
  }
}
