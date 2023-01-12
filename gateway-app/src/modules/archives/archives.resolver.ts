import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TriplyUtils } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { ZoomLevel5Service } from '../zoomLevel5/zoomLevel5.service'
import { ArchivesFondsCreatorType, ArchivesFondsZoomLevel5DetailType } from './archives.type'

@Resolver(ArchivesFondsZoomLevel5DetailType)
export class ArchivesOtherResolver {
    @Query(() => ArchivesFondsZoomLevel5DetailType)
    public archiveOther() {
        throw CustomError.internal('not yet implemented')
    }
}

@Resolver(ArchivesFondsCreatorType)
export class ArchivesFondsCreatorResolver {
    public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

    @ResolveField()
    public populatedCreator(@Parent() archiveCreator: ArchivesFondsCreatorType) {
        if (!archiveCreator.creator) {
            return
        }

        const type = TriplyUtils.getEntityNameFromUri(archiveCreator.creator)
        const id = TriplyUtils.getIdFromUri(archiveCreator.creator)

        return this.zoomLevel5Service.getDetail(id, type)
    }
}
