import { Injectable } from '@nestjs/common'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PaginationArgs, ZoomLevel3IdType } from './zoomLevel3.type'

@Injectable()
export class ZoomLevel3Service {
    public constructor(
        private readonly archivesService: ArchivesService,
        private readonly objectsService: ObjectsService,
        private readonly peopleService: PeopleService,
        private readonly publicationsService: PublicationsService
    ) {}

    public async getData(entity: EntityNames, filterInput: ZoomLevel3IdType, paginationArgs: PaginationArgs) {
        switch (entity) {
            case EntityNames.Archives: {
                const filter = this.archivesService.validateFilterInput(filterInput)
                return this.archivesService.getZoomLevel3Data(filter, paginationArgs.page, paginationArgs.pageSize)
            }
            case EntityNames.Objects: {
                const filter = this.objectsService.validateFilterInput(filterInput)
                return this.objectsService.getZoomLevel3Data(filter, paginationArgs.page, paginationArgs.pageSize)
            }
            case EntityNames.People: {
                const filter = this.peopleService.validateFilterInput(filterInput)
                return this.peopleService.getZoomLevel3Data(filter, paginationArgs.page, paginationArgs.pageSize)
            }
            case EntityNames.Publications: {
                const filter = this.publicationsService.validateFilterInput(filterInput)
                return this.publicationsService.getZoomLevel3Data(filter, paginationArgs.page, paginationArgs.pageSize)
            }
            case EntityNames.Stories:
            default: {
                throw new Error(`[ZoomLevel3] ${entity} not implemented yet`)
            }
        }
    }
}
