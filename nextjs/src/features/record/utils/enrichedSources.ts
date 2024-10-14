import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { ExternalSource } from 'src/generated/graphql'

export function getExternalSourceTranslation(exSource: ExternalSource) {
  const { t } = createTypeSafeTranslation('common')

  if (exSource === ExternalSource.Getty) {
    return t('pulledFromGetty')
  }

  if (exSource === ExternalSource.Rkd) {
    return t('pulledFromRKD')
  }

  if (exSource === ExternalSource.Wikidata) {
    return t('pulledFromWikiData')
  }
}
