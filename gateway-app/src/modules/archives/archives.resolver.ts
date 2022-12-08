import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TriplyUtils } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { ZoomLevel5Service } from '../zoomLevel5/zoomLevel5.service'
import { ArchivesFondsZoomLevel5DetailType } from './archives.type'

@Resolver(ArchivesFondsZoomLevel5DetailType)
export class ArchivesOtherResolver {
    public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

    @Query(() => ArchivesFondsZoomLevel5DetailType)
    public archiveOther() {
        throw CustomError.internal('not yet implemented')
    }

    @ResolveField()
    public populatedCreator(@Parent() archiveOther: ArchivesFondsZoomLevel5DetailType) {
        if (!archiveOther.creator) {
            return
        }

        const type = TriplyUtils.getEntityNameFromUri(archiveOther.creator)
        const id = TriplyUtils.getIdFromUri(archiveOther.creator)

        return this.zoomLevel5Service.getDetail(id, type)
    }
}
