import { CATEGORIES } from '@/features/shared/utils/categories'
import {
  ArchiveRecordRelationsQuery,
  ObjectRecordRelationsQuery,
  PeopleRecordRelationsQuery,
  PublicationRecordRelationsQuery,
} from 'src/generated/graphql'

interface TotalType {
  total: string
}

export const mapRecordTableData = (
  data:
    | (
        | (ArchiveRecordRelationsQuery &
            ObjectRecordRelationsQuery &
            PeopleRecordRelationsQuery &
            PublicationRecordRelationsQuery &
            TotalType)
        | undefined
      )[]
    | undefined
) => {
  return (data || []).map((item, index) => {
    if (item?.publicationRecordRelations && item?.publicationRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.publications,
        name: 'Related Publications',
        tableBody: item?.publicationRecordRelations.map(record => {
          return {
            id: record.idRelation ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.typePub },
              { id: '3', value: record.yearPub },
              { id: '4', value: record.externalSource },
            ],
          }
        }),
        tableHead: [
          { label: 'Related Publications' },
          { label: 'Type' },
          { label: 'Year of publication' },
          { label: 'External source' },
        ],
        total: item.total,
      }
    }
    if (item?.peopleRecordRelations && item?.peopleRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.people,
        name: 'Related People',
        tableBody: item?.peopleRecordRelations.map(record => {
          return {
            id: record.idRelation ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.relationName },
              { id: '2', value: record.occupation },
              { id: '3', value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Name' }, { label: 'Profession' }, { label: 'Dates' }],
        total: item.total,
      }
    }
    if (item?.objectRecordRelations && item?.objectRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.objects,
        name: 'Related Objects',
        tableBody: item?.objectRecordRelations.map(record => {
          return {
            id: record.id ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.referenceNumber },
              { id: '3', value: record.period },
              { id: '4', value: record.externalSource },
            ],
          }
        }),
        tableHead: [
          { label: 'Related Objects' },
          { label: 'Object number' },
          { label: 'Creation Period' },
          { label: 'External Source' },
        ],
        total: item.total,
      }
    }
    if (item?.archivesRecordRelations && item?.archivesRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.archives,
        name: 'Related Archives',
        tableBody: item?.archivesRecordRelations.map(record => {
          return {
            id: record.id ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.referenceNumber },
              { id: '3', value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Record Type' }, { label: 'Object Number' }, { label: 'Period' }],
        total: item.total,
      }
    }
  })
}
