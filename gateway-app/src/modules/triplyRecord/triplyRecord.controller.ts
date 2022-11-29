import { Controller, Get, Body } from '@nestjs/common'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { TriplyRecordType } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@Controller()
export class TriplyRecordController {
    public constructor(
        private readonly archivesService: ArchivesService,
        private readonly objectsService: ObjectsService,
        private readonly publicationService: PublicationsService,
        private readonly peopleService: PeopleService
    ) {}

    @Get('/triply/validate')
    public async validate(@Body() data: TriplyRecordType[]): Promise<TriplyRecordType[]> {
        const invalidEntries: TriplyRecordType[] = []
        for await (const entry of data) {
            if (entry.type === EntityNames.People) {
                const { id, ...rest } = await this.peopleService.getZoomLevel5Data(entry.id)
                if (!Object.keys(rest).length) {
                    invalidEntries.push(entry)
                }
            } else if (entry.type === EntityNames.Publications) {
                const { id, ...rest } = await this.publicationService.getZoomLevel5Data(entry.publicationType, entry.id)
                if (!Object.keys(rest).length) {
                    invalidEntries.push(entry)
                }
            } else if (entry.type === EntityNames.Objects) {
                const { id, ...rest } = await this.objectsService.getZoomLevel5Data(entry.id)
                if (!Object.keys(rest).length) {
                    invalidEntries.push(entry)
                }
            } else if (entry.type === EntityNames.Media) {
                const { id, ...rest } = await this.archivesService.getZoomLevel5Data(entry.archiveType, entry.id)
                if (!Object.keys(rest).length) {
                    invalidEntries.push(entry)
                }
            }
        }
        return invalidEntries
    }
}
