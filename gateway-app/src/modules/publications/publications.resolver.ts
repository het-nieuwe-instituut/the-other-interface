import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CustomError } from '../util/customError'
import { PublicationsService } from './publications.service'
import {
  PublicationAuthorType,
  PublicationsArticleZoomLevel3DetailType,
  PublicationsAudioVisualZoomLevel3DetailType,
  PublicationsBookZoomLevel3DetailType,
  PublicationsSerialZoomLevel3DetailType,
} from './publications.type'

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
