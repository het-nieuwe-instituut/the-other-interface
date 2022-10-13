import { Inject, Injectable } from '@nestjs/common'
import { Enum_Triplyrecord_Type, Sdk } from 'src/generated/strapi-sdk'
import { StrapiUtils } from '../strapi/strapi.utils'
import { ArchivesService, ArchivesZoomLevel5Types } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService, PublicationsZoomLevel5Types } from '../publications/publications.service'
import { TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { getRandom2ItemsFromArray } from '../util/helpers'
import { ZoomLevel5RelatedObjectsArgs } from './zoomLevel5.type'

interface ZoomLevel5RelationData {
    graph: string // sample graph i.e. https://collectiedata.hetnieuweinstituut.nl/graph/people
    count: string // number

    sample: string // i.e. https://collectiedata.hetnieuweinstituut.nl/id/books/300323890
    sample_label: string
    graph_2: string // sample has a relation of type i.e. https://collectiedata.hetnieuweinstituut.nl/graph/people
    count_2: string // sample's total relation count with graph_2

    sample_1: string | null // uri of a sample of the above sample (of type graph_2)
    sample_2: string | null // uri of a sample of the above sample (of type graph_2)
    sample_1_label: string | null
    sample_2_label: string | null
    sample_extern_1: string | null // external uri of a sample of the above sample (of type graph_2)
    sample_extern_2: string | null // external uri of a sample of the above sample (of type graph_2)
    sample_extern_1_label: string | null
    sample_extern_2_label: string | null
}

interface ZoomLevel5RelatedObjectData {
    dataset: string
    graph: string // i.e. https://collectiedata.hetnieuweinstituut.nl/graph/people
    label: string
    externObj: string // i.e. https://collectiedata.hetnieuweinstituut.nl/id/people/25376
}

// key is relation graph
type GroupedRelationData = Record<string, RelationData>

interface RelationData {
    count: string
    // key is sample uri
    groupedSampleData: Record<string, SampleData>
}

interface SampleData {
    label: string
    // key is relation graph
    groupedRelationData: GroupedRelationData
}

@Injectable()
export class ZoomLevel5Service {
    private relationsEndpoint = '/zoom-5-relations/run?record='
    private relatedObjectsEndpoint = '/zoom-5-relatedObjects/run?record='

    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly objectsService: ObjectsService,
        private readonly peopleService: PeopleService,
        private readonly publicationsService: PublicationsService,
        private readonly archivesService: ArchivesService,
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

    public async getAllRelations({ id, type, relatedObjectsType }: ZoomLevel5RelatedObjectsArgs) {
        const uri = TriplyUtils.getUriForTypeAndId(type, id)
        const res = await this.triplyService.queryTriplyData<ZoomLevel5RelatedObjectData>(
            `${this.relatedObjectsEndpoint}${uri}`
        )

        return res.data
            .filter(d => TriplyUtils.getEntityNameFromGraph(d.graph) === relatedObjectsType)
            .map(d => ({
                id: TriplyUtils.getIdFromUri(d.externObj),
                type: relatedObjectsType,
                ...this.getRecordSpecificFieldsFromRelatedObject(relatedObjectsType, d),
            }))
    }

    public getDetail(
        id: string,
        type: EntityNames,
        metadata?: { publicationType?: PublicationsZoomLevel5Types; archivesType?: ArchivesZoomLevel5Types }
    ) {
        switch (type) {
            case EntityNames.Objects: {
                return this.objectsService.getZoomLevel5Data(id)
            }
            case EntityNames.People: {
                return this.peopleService.getZoomLevel5Data(id)
            }
            case EntityNames.Publications: {
                if (!metadata?.publicationType) {
                    throw new Error(`publicationType is required`)
                }
                return this.publicationsService.getZoomLevel5Data(metadata.publicationType, id)
            }
            case EntityNames.Archives: {
                if (!metadata?.archivesType) {
                    throw new Error(`publicationType is required`)
                }
                return this.archivesService.getZoomLevel5Data(metadata.archivesType, id)
            }
            case EntityNames.Stories:
            case EntityNames.External:
            default:
                throw new Error('type not implemented')
        }
    }

    private async getRelationsFromTriply(id: string, type: EntityNames) {
        const uri = TriplyUtils.getUriForTypeAndId(type, id)
        const res = await this.triplyService.queryTriplyData<ZoomLevel5RelationData>(`${this.relationsEndpoint}${uri}`)

        const groupedData: GroupedRelationData = {}
        for (const relationData of res.data) {
            if (!groupedData[relationData.graph]) {
                groupedData[relationData.graph] = {
                    count: relationData.count,
                    groupedSampleData: {},
                }
            }

            const group = groupedData[relationData.graph]

            if (!group.groupedSampleData[relationData.sample]) {
                group.groupedSampleData[relationData.sample] = {
                    label: relationData.sample_label,
                    groupedRelationData: {},
                }
            }

            const groupSample = group.groupedSampleData[relationData.sample]

            if (!groupSample.groupedRelationData[relationData.graph_2]) {
                groupSample.groupedRelationData[relationData.graph_2] = {
                    count: relationData.count_2,
                    groupedSampleData: {},
                }
            }
        }

        return Object.entries(groupedData).map(([k, v]) => {
            const type = TriplyUtils.getEntityNameFromGraph(k)
            const randomRelations = Object.entries(v.groupedSampleData).map(([k, v]) =>
                this.formatTriplySampleData(k, v)
            )

            return {
                type,
                total: parseInt(v.count, 10),
                randomRelations,
            }
        })
    }

    private async getStoryRelations(id: string) {
        const relations = await this.strapiGqlSdk.storyTriplyRelations({ id })
        const triplyRecords = (relations.story?.data?.attributes?.triplyRecords?.data || []).filter(
            r => !!r.attributes?.recordId
        )

        const groupedRecords: Record<Enum_Triplyrecord_Type | string, string[]> = {}
        for (const record of triplyRecords) {
            if (!record.id || !record.attributes) {
                continue
            }

            if (!groupedRecords[record.attributes.type]) {
                groupedRecords[record.attributes.type] = []
            }

            groupedRecords[record.attributes.type].push(record.id)
        }

        const promises = Object.entries(groupedRecords).map(async ([key, recordIds]) => {
            const type = StrapiUtils.getEntityNameForRecordType(key as Enum_Triplyrecord_Type)
            const randomRecordIds = getRandom2ItemsFromArray(recordIds)
            const randomRelations = await Promise.all(randomRecordIds.map(id => this.getRelationsFromTriply(id, type)))

            return {
                type,
                total: recordIds.length,
                randomRelations: randomRelations,
            }
        })

        return Promise.all(promises)
    }

    private async getStoryRelationsForLinkedItem(id: string, entityName: EntityNames) {
        const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecord({
            recordId: id,
            type: StrapiUtils.getRecordTypeForEntityName(entityName),
        })

        const randomStories = getRandom2ItemsFromArray(res.stories?.data || [])
            .filter(s => !!s.id && !!s.attributes)
            .map(s => ({
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

    private getRecordSpecificFieldsFromRelatedObject(type: EntityNames, d: ZoomLevel5RelatedObjectData) {
        switch (type) {
            case EntityNames.People:
                return {
                    name: d.label,
                    // these are not yet returned from triply endpoint
                    // birthDate: d.birthDate,
                    // profession: d.profession,
                }
            case EntityNames.Archives:
            // TODO: waiting on triply to implement
            case EntityNames.Objects:
            // TODO: waiting on triply to implement
            case EntityNames.Publications:
            // TODO: waiting on triply to implement
            case EntityNames.Stories:
            case EntityNames.External:
            case EntityNames.Media:
            default:
                throw new Error('not yet implemented')
        }
    }

    // expects key to be record uri
    private formatTriplySampleData(key: string, sampleData: SampleData) {
        const relations = Object.entries(sampleData.groupedRelationData).map(([k, v]) => ({
            type: TriplyUtils.getEntityNameFromGraph(k),
            total: v.count,
        }))

        return {
            id: TriplyUtils.getIdFromUri(key),
            type: TriplyUtils.getEntityNameFromUri(key),
            label: sampleData.label,
            relations,
        }
    }
}
