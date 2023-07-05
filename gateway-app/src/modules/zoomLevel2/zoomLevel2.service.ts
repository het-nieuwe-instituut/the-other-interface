import { Injectable } from '@nestjs/common'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@Injectable()
export class ZoomLevel2Service {
  public constructor(
    private readonly archivesService: ArchivesService,
    private readonly objectsService: ObjectsService,
    private readonly peopleService: PeopleService,
    private readonly publicationsService: PublicationsService
  ) {}

  public async getData(entity: EntityNames) {
    switch (entity) {
      case EntityNames.Archives: {
        return this.archivesService.getZoomLevel2Data()
      }
      case EntityNames.Objects: {
        return this.objectsService.getZoomLevel2Data()
      }
      case EntityNames.People: {
        return this.peopleService.getZoomLevel2Data()
      }
      case EntityNames.Publications: {
        return this.publicationsService.getZoomLevel2Data()
      }
      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`[ZoomLevel2] ${entity} not implemented yet`)
      }
    }
  }
}
