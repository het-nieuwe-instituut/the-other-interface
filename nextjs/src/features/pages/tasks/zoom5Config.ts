import { type ApiClientType } from '@/features/graphql/api'

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
  stories = 'story',
}

export const zoom5Config = (api: ApiClientType) => ({
  [SupportedQuerys.publications]: {
    zoomLevelQuery: api?.ZoomLevel5Publication,
    relationsQuery: api?.PublicationRelations,
    accesor: (data?: ZoomLevel5PublicationQuery) => data?.zoomLevel5Publication,
  },
  [SupportedQuerys.archives]: {
    zoomLevelQuery: api?.ZoomLevel5Archives,
    relationsQuery: api?.ArchivesRelations,
    accesor: (data?: ZoomLevel5ArchivesQuery) => data?.zoomLevel5Archive,
  },
  [SupportedQuerys.objects]: {
    zoomLevelQuery: api?.ZoomLevel5Object,
    relationsQuery: api?.ObjectRelations,
    accesor: (data?: ZoomLevel5ObjectQuery) => data?.zoomLevel5Object,
  },
  [SupportedQuerys.people]: {
    zoomLevelQuery: api?.ZoomLevel5Person,
    relationsQuery: api?.PeopleRelations,
    accesor: (data?: ZoomLevel5PersonQuery) => data?.zoomLevel5Person,
  },
})

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
