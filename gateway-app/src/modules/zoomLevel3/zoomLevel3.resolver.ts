import { Args, Query, Resolver } from '@nestjs/graphql'
import {
  ArchiveZoomLevel3DetailType,
  ArchivesRecordZoomLevel3Type,
} from '../archives/archives.type'
import { ObjectRecordZoomLevel3Type, ObjectsZoomLevel3DetailType } from '../objects/objects.type'
import { PeopleRecordZoomLevel3Type, PeopleZoomLevel3DetailType } from '../people/people.type'
import { PublicationsService } from '../publications/publications.service'
import {
  PublicationRecordZoomLevel3Type,
  PublicationZoomLevel3DetailType,
} from '../publications/publications.type'
import { EntityNames } from '../util/entityNames.type'
import { ZoomLevel3Service } from './zoomLevel3.service'
import {
  ZoomLevel3Args,
  ZoomLevel3RelationsType,
  ZoomLevel3StoriesRelatedToRecordType,
  ZoomLevel3StoryRelationsCountArgs,
  ZoomLevel3StoryRelationsCountType,
} from './zoomLevel3.type'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PaginationArgs } from '../util/paginationArgs.type'
import { Locale } from '../util/locale.type'

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
  public relations(@Args() args: ZoomLevel3Args, @Args() paginationArgs: PaginationArgs) {
    return this.zoomLevel3Service.getRelations(args.id, args.type, args.locale, paginationArgs)
  }

  @Query(() => ZoomLevel3StoryRelationsCountType, { nullable: true })
  public async storyRelationsCount(@Args() args: ZoomLevel3StoryRelationsCountArgs) {
    return this.zoomLevel3Service.storyRelationsCount(args.storyId, args.locale)
  }

  @Query(() => [ArchivesRecordZoomLevel3Type], { nullable: true })
  public async archivesRecordZoomLevel3(
    @Args('id') archiveId: string,
    @Args('locale') locale: Locale
  ) {
    return this.archivesService.getZoomLevel3RecordData(archiveId, locale)
  }

  @Query(() => [ObjectRecordZoomLevel3Type], { nullable: true })
  public async objectsRecordZoomLevel3(
    @Args('id') objectId: string,
    @Args('locale') locale: Locale
  ) {
    return this.objectsService.getZoomLevel3RecordData(objectId, locale)
  }

  @Query(() => [PeopleRecordZoomLevel3Type], { nullable: true })
  public async peopleRecordZoomLevel3(
    @Args('id') peopleId: string,
    @Args('locale') locale: Locale
  ) {
    return this.peopleService.getZoomLevel3RecordData(peopleId, locale)
  }

  @Query(() => [PublicationRecordZoomLevel3Type], { nullable: true })
  public async publicationsRecordZoomLevel3(
    @Args('id') publicationId: string,
    @Args('locale') locale: Locale
  ) {
    return this.publicationsService.getZoomLevel3RecordData(publicationId, locale)
  }

  @Query(() => ObjectsZoomLevel3DetailType, { nullable: true })
  public zoomLevel3Object(@Args('id') objectId: string, @Args('locale') locale: Locale) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Objects, locale)
  }
  @Query(() => PeopleZoomLevel3DetailType, { nullable: true })
  public zoomLevel3Person(@Args('id') objectId: string, @Args('locale') locale: Locale) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.People, locale)
  }
  @Query(() => PublicationZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3Publication(@Args('id') objectId: string, @Args('locale') locale: Locale) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Publications, locale)
  }
  @Query(() => ArchiveZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3Archive(@Args('id') objectId: string, @Args('locale') locale: Locale) {
    return this.zoomLevel3Service.getDetail(objectId, EntityNames.Archives, locale)
  }

  @Query(() => ZoomLevel3StoriesRelatedToRecordType, { nullable: true })
  public zoomLevel3StoriesRelationsForRecord(@Args() args: ZoomLevel3Args) {
    return this.zoomLevel3Service.getStoriesRelationsForRecord(args.id, args.type, args.locale)
  }
}
