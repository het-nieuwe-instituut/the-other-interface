import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationsService } from './publications.service'
import {
  PublicationRecordRelationArgs,
  PublicationRelationsType,
  PublicationsRelationsCountType,
  PublicationsZoomLevelHoverType,
  PublicationsZoomLevel2HoverArgs,
  PublicationRecordRelationCountArgs,
  PublicationZoomLevel3DetailType,
  PublicationRecordZoomLevel3Type,
} from './publications.type'
import { PaginationArgs } from '../util/paginationArgs.type'
import { LocaleArgs } from '../util/localeArgs.type'

@Resolver(PublicationRelationsType)
export class PublicationRelationsZoomLevel3Resolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => [PublicationRelationsType], { nullable: true })
  public publicationRecordRelations(
    @Args() args: PublicationRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs
  ) {
    return this.publicationsService.getRelationsData(
      args.id,
      args.type,
      paginationArgs,
      args.locale
    )
  }

  @Query(() => [PublicationsRelationsCountType], { nullable: true })
  public publicationsRecordRelationsCount(@Args() args: PublicationRecordRelationCountArgs) {
    return this.publicationsService.getRelationsDataCount(args.id, args.type)
  }
}

@Resolver(PublicationsZoomLevelHoverType)
export class PublicationsZoomLevelRecordHoverResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationsZoomLevelHoverType)
  public async publicationsZoomRecordHover(
    @Args() args: PublicationsZoomLevel2HoverArgs,
    @Args() { locale }: LocaleArgs
  ) {
    return this.publicationsService.getZoomRecordHover(args.id, locale)
  }
}

@Resolver(PublicationZoomLevel3DetailType)
export class PublicationZoomLevel3DetailResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3Publication(@Args('id') id: string, @Args() { locale }: LocaleArgs) {
    return this.publicationsService.getZoomLevel3Data(id, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: PublicationZoomLevel3DetailType,
    @Args() { locale }: LocaleArgs
  ) {
    return this.publicationsService.getEnrichedSources(record.id, locale)
  }
}

@Resolver(PublicationRecordZoomLevel3Type)
export class PublicationRecordZoomLevel3Resolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationRecordZoomLevel3Type, { nullable: true })
  public async publicationsRecordZoomLevel3(
    @Args('id') publicationId: string,
    @Args() { locale }: LocaleArgs
  ) {
    return this.publicationsService.getZoomLevel3RecordData(publicationId, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: PublicationRecordZoomLevel3Type,
    @Args() { locale }: LocaleArgs
  ) {
    return this.publicationsService.getEnrichedSources(record.id, locale)
  }
}
