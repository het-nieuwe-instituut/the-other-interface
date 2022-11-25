import ApiClient from '@/features/graphql/api'

import {
    ObjectRelationsQuery,
    StoryBySlugQuery,
    ZoomLevel5ArchivesQuery,
    ZoomLevel5ObjectQuery,
    ZoomLevel5PersonQuery,
    ZoomLevel5PublicationQuery,
} from 'src/generated/graphql'

export enum SupportedQuerys {
    people = 'people',
    archives = 'archives',
    publications = 'publications',
    objects = 'objects',
    stories = 'stories',
}

const config = {
    [SupportedQuerys.publications]: {
        zoomLevelQuery: ApiClient?.ZoomLevel5Publication,
        relationsQuery: ApiClient?.PublicationRelations,
        accesor: (data?: ZoomLevel5PublicationQuery) => data?.zoomLevel5Publication,
    },
    [SupportedQuerys.archives]: {
        zoomLevelQuery: ApiClient?.ZoomLevel5Archives,
        relationsQuery: ApiClient?.ArchivesRelations,
        accesor: (data?: ZoomLevel5ArchivesQuery) => data?.zoomLevel5Archive,
    },
    [SupportedQuerys.objects]: {
        zoomLevelQuery: ApiClient?.ZoomLevel5Object,
        relationsQuery: ApiClient?.ObjectRelations,
        accesor: (data?: ZoomLevel5ObjectQuery) => data?.zoomLevel5Object,
    },
    [SupportedQuerys.people]: {
        zoomLevelQuery: ApiClient?.ZoomLevel5Person,
        relationsQuery: ApiClient?.PeopleRelations,
        accesor: (data?: ZoomLevel5PersonQuery) => data?.zoomLevel5Person,
    },
}

export type ZoomLevel5DetailResponses = Zoom5RecordResult

export interface Zoom5RecordResult {
    zoom5detail:
        | ZoomLevel5PublicationQuery['zoomLevel5Publication']
        | ZoomLevel5ArchivesQuery['zoomLevel5Archive']
        | ZoomLevel5ObjectQuery['zoomLevel5Object']
        | ZoomLevel5PersonQuery['zoomLevel5Person']
        | NonNullable<NonNullable<StoryBySlugQuery['stories']>['data']>[0]
    zoom5relations?: ObjectRelationsQuery['relations']
}

export async function getZoom5RecordTask(record: string) {
    try {
        const type = record.split('-')[1] as SupportedQuerys
        const id: string = record.split('-')[0]

        if (type === SupportedQuerys.stories) {
            return
        }
        const configByType = config[type]

        const [detailQuery, relations] = await Promise.all([
            configByType.zoomLevelQuery?.({ id: id }),
            configByType.relationsQuery?.({ id: id }),
        ])

        return {
            // zoom5landingPage: landingPage.data.landingpages.data[0],
            zoom5detail: configByType.accesor(detailQuery) ?? null,
            zoom5relations: relations?.relations ?? null,
        }
    } catch (e) {
        console.log(e, 'Error accured in zoom level 5 task')
    }
}
