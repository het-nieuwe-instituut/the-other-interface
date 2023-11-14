import { Injectable } from '@nestjs/common'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { CustomError } from '../util/customError'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@Injectable()
export class ZoomLevel2Service {
  public constructor(
    private readonly archivesService: ArchivesService,
    private readonly objectsService: ObjectsService,
    private readonly peopleService: PeopleService,
    private readonly publicationsService: PublicationsService
  ) {}
  public getData(entity: EntityNames, paginationArgs: PaginationArgs, text?: string) {
    console.log({ text })
    switch (entity) {
      case EntityNames.Archives: {
        return this.archivesService.getZoomLevel2Data(
          paginationArgs.page,
          paginationArgs.pageSize,
          text
        )
      }
      case EntityNames.Objects: {
        return this.objectsService.getZoomLevel2Data(
          paginationArgs.page,
          paginationArgs.pageSize,
          text
        )
      }

      case EntityNames.People: {
        return this.peopleService.getZoomLevel2Data(
          paginationArgs.page,
          paginationArgs.pageSize,
          text
        )
      }
      case EntityNames.Publications: {
        return this.publicationsService.getZoomLevel2Data(
          paginationArgs.page,
          paginationArgs.pageSize,
          text
        )
      }
      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }

  public getDataAmount(entity: EntityNames, text?: string) {
    switch (entity) {
      case EntityNames.Archives: {
        return this.archivesService.getZoomLevel2DataAmount(text)
      }
      case EntityNames.Objects: {
        return this.objectsService.getZoomLevel2DataAmount(text)
      }

      case EntityNames.People: {
        return this.peopleService.getZoomLevel2DataAmount(text)
      }
      case EntityNames.Publications: {
        return this.publicationsService.getZoomLevel2DataAmount(text)
      }
      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }
}
