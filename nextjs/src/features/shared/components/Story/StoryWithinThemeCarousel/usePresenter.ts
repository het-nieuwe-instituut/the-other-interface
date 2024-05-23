import { useParams, useRouter } from 'next/navigation'
import { CATEGORIES } from '@/features/shared/utils/categories'
import useTranslation from 'next-translate/useTranslation'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoriesRelatedByTheme } from '@/features/shared/hooks/queries/useStoriesRelationWithinTheme'
import { storiesToCarouselDataMapper } from '../../../mappers/storiesToCarouselDataMapper'
import { StoryEntity } from 'src/generated/graphql'
import { useLocale } from '@/features/shared/hooks/useLocale'

export const usePresenter = () => {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const lang = useLocale()

  const { data, isLoading } = useStoriesRelatedByTheme(id)
  const { t: tStories } = useTranslation('stories')

  const stories = storiesToCarouselDataMapper(
    data?.storiesRealtedWithinTheme?.stories as StoryEntity[]
  )

  const handleRedirect = (id: string | null | undefined) => {
    let url = `/detail/${CATEGORIES.stories}/${id}`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

  return {
    stories,
    isLoading,
    tStories,
    handleRedirect,
  }
}
