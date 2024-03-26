import {
  ArchiveRecordRelationsQuery,
  ObjectRecordRelationsQuery,
  PeopleRecordRelationsQuery,
  PublicationRecordRelationsQuery,
} from 'src/generated/graphql'

export const mapRecordTableData = (
  data:
    | (
        | ArchiveRecordRelationsQuery
        | ObjectRecordRelationsQuery
        | PeopleRecordRelationsQuery
        | PublicationRecordRelationsQuery
        | undefined
      )[]
    | undefined
) => {
  return (data || []).map(item => {
    if (item?.publicationRecordRelations?.length > 0) {
      return {
        name: 'Related Publications',
        tableBody: item?.publicationRecordRelations.map((record, index) => {
          return {
            id: record.idRelation,
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: index, value: record.titleR },
              { id: index, value: record.yearPub },
              { id: index, value: record.yearPub },
            ],
          }
        }),
        tableHead: [{ label: 'Publication Title' }, { label: 'Availability' }, { label: 'Dates' }],
      }
    }
    if (item?.peopleRecordRelations?.length > 0) {
      return {
        name: 'Related People',
        tableBody: item?.peopleRecordRelations.map((record, index) => {
          return {
            id: record.idRelation,
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: index, value: record.relationName },
              { id: index, value: record.occupation },
              { id: index, value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Name' }, { label: 'Profession' }, { label: 'Dates' }],
      }
    }
    if (item?.objectsRecordRelations?.length > 0) {
      return {
        name: 'Related Objects',
        tableBody: item?.objectsRecordRelations.map((record, index) => {
          return {
            id: record.id,
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: index, value: record.titleR },
              { id: index, value: record.period },
              { id: index, value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Object title' }, { label: 'Maker(s)' }, { label: 'Dates' }],
      }
    }
    if (item?.archivesRecordRelations?.length > 0) {
      return {
        name: 'Related Archives',
        tableBody: item?.archivesRecordRelations.map((record, index) => {
          return {
            id: record.id,
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: index, value: record.titleR },
              { id: index, value: record.period },
              { id: index, value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Fonds name' }, { label: 'Creater(s)' }, { label: 'Dates' }],
      }
    }
  })
}
