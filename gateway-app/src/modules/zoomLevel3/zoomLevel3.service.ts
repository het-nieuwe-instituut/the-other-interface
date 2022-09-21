import { Injectable } from '@nestjs/common'
import { ArchivesService, ArchivesZoomLevel3Ids } from '../archives/archives.service'
import { ObjectsService, ObjectsZoomLevel3Ids } from '../objects/objects.service'
import { PeopleService, PeopleZoomLevel3Ids } from '../people/people.service'
import { PublicationsService, PublicationsZoomLevel3Ids } from '../publications/publications.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PaginationArgs } from './zoomLevel3.type'

@Injectable()
export class ZoomLevel3Service {
    public constructor(
        private readonly archivesService: ArchivesService,
        private readonly objectsService: ObjectsService,
        private readonly peopleService: PeopleService,
        private readonly publicationsService: PublicationsService
    ) {}

    public async getData(entity: EntityNames, filter: string, paginationArgs: PaginationArgs) {
        switch (entity) {
            case EntityNames.Archives: {
                return this.archivesService.getZoomLevel3Data(
                    filter as ArchivesZoomLevel3Ids,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.Objects: {
                return this.objectsService.getZoomLevel3Data(
                    filter as ObjectsZoomLevel3Ids,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.People: {
                return this.peopleService.getZoomLevel3Data(
                    filter as PeopleZoomLevel3Ids,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.Publications: {
                return this.publicationsService.getZoomLevel3Data(
                    filter as PublicationsZoomLevel3Ids,
                    paginationArgs.page,
                    paginationArgs.pageSize
                )
            }
            case EntityNames.Stories:
            default: {
                throw new Error(`[ZoomLevel3] ${entity} not implemented yet`)
            }
        }
    }
}
