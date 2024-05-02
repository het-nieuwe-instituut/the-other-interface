import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  ArchiveRecordRelationsQuery,
  ObjectRecordRelationsQuery,
  PeopleRecordRelationsQuery,
  PublicationRecordRelationsQuery,
} from 'src/generated/graphql'

interface TotalType {
  total: string
}

type DataType =
  | (
      | (ArchiveRecordRelationsQuery &
          ObjectRecordRelationsQuery &
          PeopleRecordRelationsQuery &
          PublicationRecordRelationsQuery &
          TotalType)
      | undefined
    )
  | undefined

export const useMapRecordTableData = (data: DataType[] | undefined, category: Category) => {
  const { t } = useTypeSafeTranslation('recordTable')
  if (!data) return null

  if (category === CATEGORIES.publications) {
    if (data[0] === undefined || data[0].total === '0') return null
    const mapData = data?.flatMap((i, index) => {
      if (i && i.publicationRecordRelations && i.publicationRecordRelations?.length > 0) {
        return i.publicationRecordRelations.map(record => {
          return {
            id: record.idRelation ?? index + '',
            TableBodyItem: [
              { id: record.idRelation + '1', value: record.titleR },
              { id: record.idRelation + '2', value: record.typePub },
              { id: record.idRelation + '3', value: record.yearPub },
              { id: record.idRelation + '4', value: record.externalSource },
            ],
          }
        })
      }
    })
    const table = {
      type: CATEGORIES.publications,
      name: t('relatedPublications') ?? '',
      tableHead: [
        { label: t('relatedPublications') },
        { label: t('type') },
        { label: t('yearPublished') },
        { label: t('externalSource') },
      ],
      tableBody: mapData,
      total: data[0]?.total ?? '0',
    }
    return table
  }

  if (category === CATEGORIES.people) {
    if (data[0] === undefined || data[0].total === '0') return null
    const mapData = data?.flatMap((item, index) => {
      if (item && item.peopleRecordRelations && item.peopleRecordRelations?.length > 0) {
        return item.peopleRecordRelations.map(record => {
          return {
            id: record.idRelation ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.relationName },
              { id: '2', value: record.occupation },
              { id: '3', value: record.period },
              { id: '4', value: record.externalSource },
            ],
          }
        })
      }
    })

    const table = {
      type: CATEGORIES.people,
      name: t('realtedPeople') ?? '',
      tableHead: [
        { label: t('realtedPeople') },
        { label: t('role') },
        { label: t('peoplePeriod') },
        { label: t('externalSource') },
      ],
      tableBody: mapData,
      total: data[0]?.total ?? '0',
    }
    return table
  }

  if (category === CATEGORIES.objects) {
    if (data[0] === undefined || data[0].total === '0') return null
    const mapData = data?.flatMap((item, index) => {
      if (item && item.objectRecordRelations && item.objectRecordRelations?.length > 0) {
        return item.objectRecordRelations.map(record => {
          return {
            id: record.id ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.referenceNumber },
              { id: '3', value: record.period },
              { id: '4', value: record.externalSource },
            ],
          }
        })
      }
    })

    const table = {
      type: CATEGORIES.objects,
      name: t('realtedObjects') ?? '',
      tableHead: [
        { label: t('realtedObjects') },
        { label: t('objectNumber') },
        { label: t('creationPeriod') },
        { label: t('externalSource') },
      ],
      tableBody: mapData,
      total: data[0]?.total ?? '0',
    }
    return table
  }

  if (category === CATEGORIES.archives) {
    if (data[0] === undefined || data[0].total === '0') return null
    const mapData = data?.flatMap((item, index) => {
      if (item && item.archivesRecordRelations && item.archivesRecordRelations?.length > 0) {
        return item.archivesRecordRelations.map(record => {
          return {
            id: record.id ?? index + '',
            TableBodyItem: [
              { id: '1', value: record.titleR },
              { id: '2', value: record.referenceNumber },
              { id: '3', value: record.period },
            ],
          }
        })
      }
    })
    const table = {
      type: CATEGORIES.archives,
      name: t('relatedArchive') ?? '',
      tableHead: [
        { label: t('relatedArchive') },
        { label: t('objectNumber') },
        { label: t('archivePeriod') },
      ],
      tableBody: mapData,
      total: data[0]?.total ?? '0',
    }
    return table
  }
}
