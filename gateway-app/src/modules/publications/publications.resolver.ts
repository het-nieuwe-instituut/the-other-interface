import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CustomError } from '../util/customError'
import { PublicationsService } from './publications.service'
import {
  PublicationsAudioVisualZoomLevel3DetailType,
  PublicationsArticleZoomLevel3DetailType,
  PublicationsBookZoomLevel3DetailType,
  PublicationsSerialZoomLevel3DetailType,
  PublicationAuthorType,
  PublicationRecordRelationArgs,
  PublicationRelationsType,
  PublicationsRelationsCountType,
  PublicationsZoomLevelHoverType,
  PublicationsZoomLevel2HoverArgs,
} from './publications.type'
import { PaginationArgs } from '../util/paginationArgs.type'

@Resolver(PublicationRelationsType)
export class PublicationRelationsZoomLevel3Resolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => [PublicationRelationsType], { nullable: true })
  public publicationRecordRelations(
    @Args() args: PublicationRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs,
    @Args('locale') locale: string
  ) {
    return this.publicationsService.getRelationsData(args.id, args.type, paginationArgs, locale)
  }

  @Query(() => [PublicationsRelationsCountType], { nullable: true })
  public publicationsRecordRelationsCount(@Args() args: PublicationRecordRelationArgs) {
    return this.publicationsService.getRelationsDataCount(args.id, args.type)
  }
}

@Resolver(PublicationsAudioVisualZoomLevel3DetailType)
export class PublicationsAudioVisualResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationsAudioVisualZoomLevel3DetailType)
  public publicationAudioVisual() {
    throw CustomError.internal('not yet implemented')
  }
  public populatedPublisher(
    @Parent() publication: PublicationsAudioVisualZoomLevel3DetailType,
    @Args('locale') locale: string
  ) {
    return this.publicationsService.resolvePublisher(publication, locale)
  }
}

@Resolver(PublicationsArticleZoomLevel3DetailType)
export class PublicationsArticleResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationsArticleZoomLevel3DetailType)
  public publicationArticle() {
    throw CustomError.internal('not yet implemented')
  }

  @ResolveField()
  public populatedPublisher(
    @Parent() publication: PublicationsArticleZoomLevel3DetailType,
    @Args('locale') locale: string
  ) {
    return this.publicationsService.resolvePublisher(publication, locale)
  }
}

@Resolver(PublicationsBookZoomLevel3DetailType)
export class PublicationsBookResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationsBookZoomLevel3DetailType)
  public publicationBook() {
    throw CustomError.internal('not yet implemented')
  }

  @ResolveField()
  public populatedPublisher(
    @Parent() publication: PublicationsBookZoomLevel3DetailType,
    @Args('locale') locale: string
  ) {
    return this.publicationsService.resolvePublisher(publication, locale)
  }
}

@Resolver(PublicationsSerialZoomLevel3DetailType)
export class PublicationsSerialResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationsSerialZoomLevel3DetailType)
  public publicationSerial() {
    throw CustomError.internal('not yet implemented')
  }

  @ResolveField()
  public populatedPublisher(
    @Parent() publication: PublicationsSerialZoomLevel3DetailType,
    @Args('locale') locale: string
  ) {
    return this.publicationsService.resolvePublisher(publication, locale)
  }
}

@Resolver(PublicationAuthorType)
export class PublicationAuthorResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @ResolveField()
  public populatedAuthor(
    @Parent() publication: PublicationsBookZoomLevel3DetailType,
    @Args('locale') locale: string
  ) {
    return this.publicationsService.resolveAuthor(publication, locale)
  }
}

@Resolver(PublicationsZoomLevelHoverType)
export class PublicationsZoomLevelRecordHoverResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationsZoomLevelHoverType)
  public async publicationsZoomRecordHover(
    @Args() args: PublicationsZoomLevel2HoverArgs,
    @Args('locale') locale: string
  ) {
    return this.publicationsService.getZoomRecordHover(args.id, locale)
  }
}
