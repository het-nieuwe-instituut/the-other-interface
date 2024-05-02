import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
// import { CustomError } from '../util/customError'
// import { PublicationsService } from './publications.service'

import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { CustomError } from '../util/customError'
import { PublicationsService } from './publications.service'
import {
  PublicationZoomLevel3DetailType,
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

@Resolver(PublicationZoomLevel3DetailType)
export class PublicationZoomLevel3Resolver {
  public constructor(
    private readonly zoomLevel3Service: ZoomLevel3Service,
    private readonly publicationsService: PublicationsService
  ) {}

  @Query(() => PublicationZoomLevel3DetailType)
  public publicationDetailZoomLevel3(@Parent() piublication: PublicationZoomLevel3DetailType) {
    return this.zoomLevel3Service.getDetail(piublication?.id, EntityNames.Publications)
  }
}

@Resolver(PublicationRelationsType)
export class PublicationRelationsZoomLevel3Resolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => [PublicationRelationsType], { nullable: true })
  public publicationRecordRelations(
    @Args() args: PublicationRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs
  ) {
    return this.publicationsService.getRelationsData(args.id, args.type, paginationArgs)
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
  public populatedPublisher(@Parent() publication: PublicationsAudioVisualZoomLevel3DetailType) {
    return this.publicationsService.resolvePublisher(publication)
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
  public populatedPublisher(@Parent() publication: PublicationsArticleZoomLevel3DetailType) {
    return this.publicationsService.resolvePublisher(publication)
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
  public populatedPublisher(@Parent() publication: PublicationsBookZoomLevel3DetailType) {
    return this.publicationsService.resolvePublisher(publication)
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
  public populatedPublisher(@Parent() publication: PublicationsSerialZoomLevel3DetailType) {
    return this.publicationsService.resolvePublisher(publication)
  }
}

@Resolver(PublicationAuthorType)
export class PublicationAuthorResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @ResolveField()
  public populatedAuthor(@Parent() publication: PublicationsBookZoomLevel3DetailType) {
    return this.publicationsService.resolveAuthor(publication)
  }
}

@Resolver(PublicationsZoomLevelHoverType)
export class PublicationsZoomLevel2HoverResolver {
  public constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => PublicationsZoomLevelHoverType)
  public async publicationsZoomLevel2Hover(@Args() args: PublicationsZoomLevel2HoverArgs) {
    return this.publicationsService.getZoomLevel2Hover(args.id)
  }
}
