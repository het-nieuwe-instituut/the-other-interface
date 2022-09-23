import { Injectable } from '@nestjs/common'
import { TripliService } from '../tripli/tripli.service'
import { TripliUtils } from '../tripli/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

interface ZoomLevel5RelationData {
    graph: string // sample graph i.e. https://collectiedata.hetnieuweinstituut.nl/graph/people
    count: string // number
    sample_1: string | null // uri
    sample_2: string | null // uri
    sample_1_label: string | null
    sample_2_label: string | null
}

@Injectable()
export class ZoomLevel5Service {
    private relationsEndpoint = '/zoom-5-relations/run?record='

    public constructor(private readonly tripliService: TripliService) {}

    public async getRelations(id: string, type: EntityNames) {
        switch (type) {
            case EntityNames.Archives:
            case EntityNames.Objects:
            case EntityNames.People:
            case EntityNames.Publications:
                return [
                    ...(await this.getRelationsFromTriply(id)),
                    // TODO: uncomment after Strapi relations are added
                    // ...(await this.getStoryRelationsForLinkedItem(id, type)),
                ]
            case EntityNames.Stories:
            // TODO
            case EntityNames.External:
            // TODO
            default:
                throw new Error('type not implemented')
        }
    }

    private async getRelationsFromTriply(id: string) {
        const res = await this.tripliService.getTripliData<ZoomLevel5RelationData>(`${this.relationsEndpoint}${id}`)

        return res.data.map(d => {
            const type = TripliUtils.getEntityNameFromGraph(d.graph)

            const randomRelations = []
            if (d.sample_1_label && d.sample_1) {
                randomRelations.push(this.formatRelationData(d.sample_1_label, d.sample_1, type))
            }

            if (d.sample_2_label && d.sample_2) {
                randomRelations.push(this.formatRelationData(d.sample_2_label, d.sample_2, type))
            }

            return {
                type,
                total: parseInt(d.count, 10),
                randomRelations,
            }
        })
    }

    private async getStoryRelationsForLinkedItem(id: string, type: EntityNames) {
        // TODO: implement after story relations are added in Strapi
        throw new Error('not yet implemented')
    }

    private formatRelationData(label: string, uri: string, type: EntityNames) {
        return {
            id: TripliUtils.getIdFromUri(uri),
            type,
            label,
        }
    }
}
