import {
  ArchivesZoomRecordHoverQuery,
  EntityNames,
  ObjectsZoomRecordHoverQuery,
  PeopleZoomRecordHoverQuery,
  PublicationsZoomRecordHoverQuery,
  Sdk,
} from 'src/generated/graphql'

export const getZoomRecordHoverQueries = (api: Sdk, type: EntityNames) => {
  switch (type) {
    case EntityNames.People:
      return {
        hoverData: api.PeopleZoomRecordHover,
        accesor: (data?: PeopleZoomRecordHoverQuery) => data?.peopleZoomLevelHover,
      }
    case EntityNames.Archives:
      return {
        hoverData: api.ArchivesZoomRecordHover,
        accesor: (data?: ArchivesZoomRecordHoverQuery) => data?.archivesZoomRecordHover,
      }
    case EntityNames.Publications:
      return {
        hoverData: api.PublicationsZoomRecordHover,
        accesor: (data?: PublicationsZoomRecordHoverQuery) => data?.publicationsZoomRecordHover,
      }

    case EntityNames.Objects:
      return {
        hoverData: api.ObjectsZoomRecordHover,
        accesor: (data?: ObjectsZoomRecordHoverQuery) => data?.objectsZoomRecordHover,
      }
  }
}
