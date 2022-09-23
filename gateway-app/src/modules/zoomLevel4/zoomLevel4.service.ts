import { Injectable } from '@nestjs/common'
import { ArchivesService } from '../archives/archives.service'
import { ArchivesZoomLevel4FiltersArgs } from '../archives/archives.type'
import { ObjectsService } from '../objects/objects.service'
import { ObjectsZoomLevel4FiltersArgs } from '../objects/objects.type'
import { PeopleService } from '../people/people.service'
import { PeopleZoomLevel4FiltersArgs } from '../people/people.type'
import { PublicationsService } from '../publications/publications.service'
import { PublicationsZoomLevel4FiltersArgs } from '../publications/publications.type'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

interface ZoomLevel4FilterInput {
    archivesFilters?: ArchivesZoomLevel4FiltersArgs
    objectsFilters?: ObjectsZoomLevel4FiltersArgs
    peopleFilters?: PeopleZoomLevel4FiltersArgs
    publicationsFilters?: PublicationsZoomLevel4FiltersArgs
}

@Injectable()
export class ZoomLevel4Service {
    public constructor(
        private readonly archivesService: ArchivesService,
        private readonly objectsService: ObjectsService,
        private readonly peopleService: PeopleService,
        private readonly publicationsService: PublicationsService
    ) {}
    public getData(entity: EntityNames, filters: ZoomLevel4FilterInput, paginationArgs: PaginationArgs) {
        switch (entity) {
            case EntityNames.Archives: {
                if (!filters.archivesFilters) {
                    return
                }
                return this.archivesService.getZoomLevel4Data(
                    filters.archivesFilters,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.Objects: {
                if (!filters.objectsFilters) {
                    return
                }
                return this.objectsService.getZoomLevel4Data(
                    filters.objectsFilters,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }

            case EntityNames.People: {
                if (!filters.peopleFilters) {
                    return
                }
                return this.peopleService.getZoomLevel4Data(
                    filters.peopleFilters,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.Publications: {
                if (!filters.publicationsFilters) {
                    return
                }
                return this.publicationsService.getZoomLevel4Data(
                    filters.publicationsFilters,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.Stories:
            default: {
                throw new Error(`Zoomlevel 4 for ${entity} not implemented`)
            }
        }
    }
}
