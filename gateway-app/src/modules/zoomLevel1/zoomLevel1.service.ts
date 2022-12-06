import { Injectable } from '@nestjs/common'
import { StoryService } from '../story/story.service'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { EntityNames } from './zoomLevel1.type'

interface ObjectPerTypeData {
    count: string
    dataset: string
    graph: string
}
const objectPerTypeDataKeys: KeysToVerify<ObjectPerTypeData> = {
    count: true,
    dataset: true,
    graph: true,
}
@Injectable()
export class ZoomLevel1Service {
    private readonly EntityIdentifierMapping = [
        {
            id: EntityNames.Archives,
            zoomLevel1: {
                URI: 'https://collectiedata.hetnieuweinstituut.nl/graph/archives',
            },
        },
        {
            id: EntityNames.Objects,
            zoomLevel1: {
                URI: 'https://collectiedata.hetnieuweinstituut.nl/graph/objects',
            },
        },
        {
            id: EntityNames.People,
            zoomLevel1: {
                URI: 'https://collectiedata.hetnieuweinstituut.nl/graph/people',
            },
        },
        {
            id: EntityNames.Publications,
            zoomLevel1: {
                URI: 'https://collectiedata.hetnieuweinstituut.nl/graph/books',
            },
        },
    ]
    public constructor(private readonly triplyService: TriplyService, private readonly storyService: StoryService) {}

    public async getData() {
        const strapiData = await this.storyService.getStoryDataForZoomLevel1()

        const endpoint = 'zoom-1-record-counts/run'

        const result = await this.triplyService.queryTriplyData<ObjectPerTypeData>(endpoint, objectPerTypeDataKeys)
        const triplyData = result.data.map(r => {
            return {
                name: r.dataset,
                count: parseInt(r.count, 10),
                id: this.EntityIdentifierMapping.find(e => e.zoomLevel1?.URI === r.graph)?.id,
            }
        })

        return [...triplyData, strapiData]
    }
}
