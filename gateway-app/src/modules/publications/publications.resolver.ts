import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationsService } from './publications.service'
import {
    PublicationsArticleZoomLevel5DetailType,
    PublicationsAudioVisualZoomLevel5DetailType,
    PublicationsBookZoomLevel5DetailType,
    PublicationsSerialZoomLevel5DetailType,
} from './publications.type'

@Resolver(PublicationsAudioVisualZoomLevel5DetailType)
export class PublicationsAudioVisualResolver {
    public constructor(private readonly publicationsService: PublicationsService) {}

    @Query(() => PublicationsAudioVisualZoomLevel5DetailType)
    public publicationAudioVisual() {
        throw new Error('not yet implemented')
    }

    @ResolveField()
    public populatedAuthor(@Parent() publication: PublicationsAudioVisualZoomLevel5DetailType) {
        return this.publicationsService.resolveAuthor(publication)
    }

    @ResolveField()
    public populatedPublisher(@Parent() publication: PublicationsAudioVisualZoomLevel5DetailType) {
        return this.publicationsService.resolvePublisher(publication)
    }
}

@Resolver(PublicationsArticleZoomLevel5DetailType)
export class PublicationsArticleResolver {
    public constructor(private readonly publicationsService: PublicationsService) {}

    @Query(() => PublicationsArticleZoomLevel5DetailType)
    public publicationArticle() {
        throw new Error('not yet implemented')
    }

    @ResolveField()
    public populatedAuthor(@Parent() publication: PublicationsArticleZoomLevel5DetailType) {
        return this.publicationsService.resolveAuthor(publication)
    }

    @ResolveField()
    public populatedPublisher(@Parent() publication: PublicationsArticleZoomLevel5DetailType) {
        return this.publicationsService.resolvePublisher(publication)
    }
}

@Resolver(PublicationsBookZoomLevel5DetailType)
export class PublicationsBookResolver {
    public constructor(private readonly publicationsService: PublicationsService) {}

    @Query(() => PublicationsBookZoomLevel5DetailType)
    public publicationBook() {
        throw new Error('not yet implemented')
    }

    @ResolveField()
    public populatedAuthor(@Parent() publication: PublicationsBookZoomLevel5DetailType) {
        return this.publicationsService.resolveAuthor(publication)
    }

    @ResolveField()
    public populatedPublisher(@Parent() publication: PublicationsBookZoomLevel5DetailType) {
        return this.publicationsService.resolvePublisher(publication)
    }
}

@Resolver(PublicationsSerialZoomLevel5DetailType)
export class PublicationsSerialResolver {
    public constructor(private readonly publicationsService: PublicationsService) {}

    @Query(() => PublicationsSerialZoomLevel5DetailType)
    public publicationSerial() {
        throw new Error('not yet implemented')
    }

    @ResolveField()
    public populatedPublisher(@Parent() publication: PublicationsSerialZoomLevel5DetailType) {
        return this.publicationsService.resolvePublisher(publication)
    }
}
