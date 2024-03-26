import {
  ArchiveRecordRelationsQuery,
  ObjectRecordRelationsQuery,
  PeopleRecordRelationsQuery,
  PublicationRecordRelationsQuery,
} from 'src/generated/graphql'

export const mapRecordTableData = (
  data:
    | (
        | (ArchiveRecordRelationsQuery &
            ObjectRecordRelationsQuery &
            PeopleRecordRelationsQuery &
            PublicationRecordRelationsQuery)
        | undefined
      )[]
    | undefined
) => {
  return (data || []).map((item, index) => {
    if (item?.publicationRecordRelations && item?.publicationRecordRelations?.length > 0) {
      return {
        name: 'Related Publications',
        tableBody: item?.publicationRecordRelations.map(record => {
          return {
            id: record.idRelation ?? index + '',
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.yearPub },
              { id: '3', value: record.yearPub },
            ],
          }
        }),
        tableHead: [{ label: 'Publication Title' }, { label: 'Availability' }, { label: 'Dates' }],
      }
    }
    if (item?.peopleRecordRelations && item?.peopleRecordRelations?.length > 0) {
      return {
        name: 'Related People',
        tableBody: item?.peopleRecordRelations.map(record => {
          return {
            id: record.idRelation ?? index + '',
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: '1', value: record.relationName },
              { id: '2', value: record.occupation },
              { id: '3', value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Name' }, { label: 'Profession' }, { label: 'Dates' }],
      }
    }
    if (item?.objectRecordRelations && item?.objectRecordRelations?.length > 0) {
      return {
        name: 'Related Objects',
        tableBody: item?.objectRecordRelations.map(record => {
          return {
            id: record.id ?? index + '',
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.period },
              { id: '3', value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Object title' }, { label: 'Maker(s)' }, { label: 'Dates' }],
      }
    }
    if (item?.archivesRecordRelations && item?.archivesRecordRelations?.length > 0) {
      return {
        name: 'Related Archives',
        tableBody: item?.archivesRecordRelations.map(record => {
          return {
            id: record.id ?? index + '',
            // idRelation, titleR, yearPub
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.period },
              { id: '3', value: record.period },
            ],
          }
        }),
        tableHead: [{ label: 'Fonds name' }, { label: 'Creater(s)' }, { label: 'Dates' }],
      }
    }
  })
}
