import { Injectable } from '@nestjs/common'
import { ArchivesService } from '../archives/archives.service'
import { ArchivesZoomLevel4FiltersArgs } from '../archives/archives.type'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

interface ZoomLevel4FilterInput {
    archiveFilters?: ArchivesZoomLevel4FiltersArgs
}

@Injectable()
export class ZoomLevel4Service {
    public constructor(private readonly archivesService: ArchivesService) {}
    public getData(entity: EntityNames, filters: ZoomLevel4FilterInput, paginationArgs: PaginationArgs) {
        switch (entity) {
            case EntityNames.Archives: {
                if (!filters.archiveFilters) {
                    return
                }
                return this.archivesService.getZoomLevel4Data(
                    filters.archiveFilters,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.Objects:
            case EntityNames.People:
            case EntityNames.Publications:
            case EntityNames.Stories:
            default: {
                throw new Error(`Zoomlevel 4 for ${entity} not implemented`)
            }
        }
    }
}
