import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
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

export const useMapRecordTableData = (
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
  const { t } = useTypeSafeTranslation('recordTable')

  return (data || []).map((item, index) => {
    if (item?.publicationRecordRelations && item?.publicationRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.publications,
        name: t('relatedPublications') ?? '',
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
          { label: t('relatedPublications') },
          { label: t('type') },
          { label: t('yearPublished') },
          { label: t('externalSource') },
        ],
        total: item.total,
      }
    }
    if (item?.peopleRecordRelations && item?.peopleRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.people,
        name: t('realtedPeople') ?? '',
        tableBody: item?.peopleRecordRelations.map(record => {
          return {
            id: record.idRelation ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.relationName },
              { id: '2', value: record.occupation },
              { id: '3', value: record.period },
              { id: '4', value: record.externalSource },
            ],
          }
        }),
        tableHead: [
          { label: t('realtedPeople') },
          { label: t('role') },
          { label: t('peoplePeriod') },
          { label: t('externalSource') },
        ],
        total: item.total,
      }
    }
    if (item?.objectRecordRelations && item?.objectRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.objects,
        name: t('realtedObjects') ?? '',
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
          { label: t('realtedObjects') },
          { label: t('objectNumber') },
          { label: t('creationPeriod') },
          { label: t('externalSource') },
        ],
        total: item.total,
      }
    }
    if (item?.archivesRecordRelations && item?.archivesRecordRelations?.length > 0) {
      return {
        type: CATEGORIES.archives,
        name: t('relatedArchive') ?? '',
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
        tableHead: [
          { label: t('relatedArchive') },
          { label: t('objectNumber') },
          { label: t('archivePeriod') },
        ],
        total: item.total,
      }
    }
  })
}
