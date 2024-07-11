import { Category } from '@/features/shared/utils/categories'
import { Locale, Sdk } from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'
import { zoom3RecordMetaConfig } from './zoom3RecordMetaConfig'

type Payload =
  | {
      id: string
      locale: Locale
    }
  | { locale: Locale; publicationState: PublicationState; id: string }

export async function getZoom3RecordMeta(type: Category, payload: Payload, api: Sdk) {
  try {
    const configByType = zoom3RecordMetaConfig(type, api)

    const data = await configByType?.zoomLevelQuery?.(payload)
    const item = configByType?.accesor?.(data)

    console.log('the requested data', data, item)

    if (item && item.__typename === 'ArchivesRecordZoomLevel3Type') {
      return {
        ...item,
        asteriskSuggestions: [
          {
            asterisk_date_content: 'Date',
            asterisk_date_location: 'Location',
            asterisk_date_subject: 'Subject',
            asterisk_name_content: 'Name',
            asterisk_name_location: 'Location',
            asterisk_name_subject: 'Subject',
            asterisk_subject_content: 'Subject',
            asterisk_subject_location: 'Location',
            asterisk_subject_subject: 'Subject',
          },
        ],
      }
    }

    if (item && item.__typename === 'ObjectRecordZoomLevel3Type') {
      return {
        ...item,
        asteriskSuggestions: [
          {
            asterisk_date_geoKeywords: '10-10-2021',
            asterisk_date_relatedKeyword: '10-10-2021',
            asterisk_name_geoKeywords: 'Name',
            asterisk_name_relatedKeyword: 'Name',
            asterisk_subject_geoKeywords: 'Subject',
            asterisk_subject_relatedKeyword: 'Subject',
          },
        ],
      }
    }

    // if (item && item.__typename === 'PeopleRecordZoomLevel3Type') {
    //   item.
    //   // item.asteriskSuggestions = [
    //   //   {

    //   //   },
    //   // ]
    // }

    console.log('item', item)
    return item
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
