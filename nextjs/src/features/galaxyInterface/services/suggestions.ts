import { CLOUD_CATEGORIES, SearchCategory } from '@/features/shared/utils/categories'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { useEffect, useState } from 'react'
// This will hold our global translations once initialized
let globalTranslations: Map<string, string | undefined> | null = null

const getTranslationConfig = (translate: typeof createTypeSafeTranslation) => [
  {
    key: 'nameType',
    type: CLOUD_CATEGORIES.people,
    value: translate('suggestions').t('personNameType'),
  },
  {
    key: 'profession',
    type: CLOUD_CATEGORIES.people,
    value: translate('suggestions').t('personProfession'),
  },
  {
    key: 'place',
    type: CLOUD_CATEGORIES.people,
    value: translate('suggestions').t('personPlace'),
  },
  {
    key: 'nationality',
    type: CLOUD_CATEGORIES.people,
    value: translate('suggestions').t('personNationality'),
  },
  {
    key: 'gender',
    type: CLOUD_CATEGORIES.people,
    value: translate('suggestions').t('personGender'),
  },
  {
    key: 'asterisk',
    type: CLOUD_CATEGORIES.people,
    value: translate('suggestions').t('personAsterisk'),
  },
  {
    key: 'author',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationAuthor'),
  },
  {
    key: 'type',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationType'),
  },
  {
    key: 'geoKeywords',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationGeoKeywords'),
  },
  {
    key: 'geopgraphy',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationGeopgraphy'),
  },
  {
    key: 'subject',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationSubject'),
  },
  {
    key: 'relatedPerson',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationRelatedPerson'),
  },
  {
    key: 'availability',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationAvailability'),
  },
  {
    key: 'publisher',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('publicationPublisher'),
  },
  {
    key: 'objectName',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectObjectName'),
  },
  {
    key: 'creator',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectCreator'),
  },
  {
    key: 'material',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectMaterial'),
  },
  {
    key: 'technique',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectTechnique'),
  },
  {
    key: 'subject',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectSubject'),
  },
  {
    key: 'personInstitution',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectPersonInstitution'),
  },
  {
    key: 'geography',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectGeography'),
  },
  {
    key: 'rights',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectRights'),
  },
  {
    key: 'asterisk',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('objectAsterisk'),
  },
  {
    key: 'descriptionLevel',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archiveDescriptionLevel'),
  },
  {
    key: 'creator',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archiveCreator'),
  },
  {
    key: 'name',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archiveName'),
  },
  {
    key: 'subject',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archiveSubject'),
  },
  {
    key: 'geography',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archiveGeography'),
  },
  {
    key: 'photograhCreator',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archivePhotograhCreator'),
  },
  {
    key: 'rights',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archiveRights'),
  },
  {
    key: 'asterisk',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('archiveAsterisk'),
  },
  {
    key: 'collectionHighlights',
    type: CLOUD_CATEGORIES.archives,
    value: translate('suggestions').t('collectionHighlights'),
  },
  {
    key: 'collectionHighlights',
    type: CLOUD_CATEGORIES.objects,
    value: translate('suggestions').t('collectionHighlights'),
  },
  {
    key: 'collectionHighlights',
    type: CLOUD_CATEGORIES.people,
    value: translate('suggestions').t('collectionHighlights'),
  },
  {
    key: 'collectionHighlights',
    type: CLOUD_CATEGORIES.publications,
    value: translate('suggestions').t('collectionHighlights'),
  },
]

function initializeGlobalTranslations() {
  if (globalTranslations) return globalTranslations

  const translate = createTypeSafeTranslation
  const config = getTranslationConfig(translate)
  globalTranslations = new Map(config.map(item => [`${item.key}-${item.type}`, item.value]))
  return globalTranslations
}

export function useSuggestionsTranslations(): (
  category: string,
  searchCategory: SearchCategory
) => string | undefined {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!globalTranslations) {
      initializeGlobalTranslations()
    }
    setIsInitialized(true)
  }, [])

  return (category: string, searchCategory: SearchCategory) =>
    isInitialized ? globalTranslations?.get(`${category}-${searchCategory}`) : undefined
}
