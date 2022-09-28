import { Inject, Injectable } from '@nestjs/common'
import { Sdk } from 'src/generated/strapi-sdk'
import { StrapiUtils } from '../strapi/strapi.utils'
import { TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
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

    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly triplyService: TriplyService
    ) {}

    public async getRelations(id: string, type: EntityNames) {
        switch (type) {
            case EntityNames.Archives:
            case EntityNames.Objects:
            case EntityNames.People:
            case EntityNames.Publications:
                return [
                    ...(await this.getRelationsFromTriply(id, type)),
                    await this.getStoryRelationsForLinkedItem(id, type),
                ]
            case EntityNames.Stories:
                return this.getStoryRelations(id)
            case EntityNames.External:
            // TODO
            default:
                throw new Error('type not implemented')
        }
    }

    private async getRelationsFromTriply(id: string, type: EntityNames) {
        const uri = TriplyUtils.getUriForTypeAndId(type, id)
        const res = await this.triplyService.queryTriplyData<ZoomLevel5RelationData>(`${this.relationsEndpoint}${uri}`)

        return res.data.map(d => {
            const type = TriplyUtils.getEntityNameFromGraph(d.graph)

            const randomRelations = []
            if (d.sample_1_label && d.sample_1) {
                randomRelations.push(this.formatTriplyRelationData(d.sample_1_label, d.sample_1, type))
            }

            if (d.sample_2_label && d.sample_2) {
                randomRelations.push(this.formatTriplyRelationData(d.sample_2_label, d.sample_2, type))
            }

            return {
                type,
                total: parseInt(d.count, 10),
                randomRelations,
            }
        })
    }

    private async getStoryRelations(id: string) {
        const relations = await this.strapiGqlSdk.storyTriplyRelations({ id })
        const triplyRecords = (relations.story?.data?.attributes?.triplyRecords?.data || []).filter(
            r => !!r.attributes?.recordId
        )

        const records = await Promise.all(
            triplyRecords.map(r => {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const type = StrapiUtils.getEntityNameForRecordType(r.attributes!.type)

                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return this.getRelationsFromTriply(r.attributes!.recordId, type)
            })
        )

        return records.flatMap(r => r)
    }

    private async getStoryRelationsForLinkedItem(id: string, entityName: EntityNames) {
        const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecord({
            recordId: id,
            type: StrapiUtils.getRecordTypeForEntityName(entityName),
        })
        const randomStories = (res.stories?.data || []).map(s => ({
            id: s.id,
            type: EntityNames.Stories,
            label: s.attributes?.title,
        }))

        return {
            type: EntityNames.Stories,
            total: res.stories?.data.length || 0,
            randomRelations: randomStories,
        }
    }

    private formatTriplyRelationData(label: string, uri: string, type: EntityNames) {
        return {
            id: TriplyUtils.getIdFromUri(uri),
            type,
            label,
        }
    }
}
