import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TriplyUtils } from '../triply/triply.utils'
import { ZoomLevel5Service } from '../zoomLevel5/zoomLevel5.service'
import { ArchivesOtherZoomLevel5DetailType } from './archives.type'

@Resolver(ArchivesOtherZoomLevel5DetailType)
export class ArchivesOtherResolver {
    public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

    @Query(() => ArchivesOtherZoomLevel5DetailType)
    public archiveOther() {
        throw new Error('not yet implemented')
    }

    @ResolveField()
    public populatedCreator(@Parent() archiveOther: ArchivesOtherZoomLevel5DetailType) {
        if (!archiveOther.creator) {
            return
        }

        const type = TriplyUtils.getEntityNameFromUri(archiveOther.creator)
        const id = TriplyUtils.getIdFromUri(archiveOther.creator)

        return this.zoomLevel5Service.getDetail(id, type)
    }
}
