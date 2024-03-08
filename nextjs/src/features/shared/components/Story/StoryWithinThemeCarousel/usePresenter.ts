import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { CATEGORIES } from '@/features/shared/utils/categories'
import useTranslation from 'next-translate/useTranslation'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoriesRelatedByTheme } from '@/features/shared/hooks/queries/useStoriesRelationWithinTheme'
import { mapStoriesToRelatedCarouselItems } from '../../Record/RecordStoriesCarousel/storiesRelatedToRecordDataMapper'
import { StoryEntity } from 'src/generated/graphql'

export const usePresenter = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = params?.id as string
  const lang = searchParams?.get('lang')

  const { data, isLoading } = useStoriesRelatedByTheme(id)
  const { t: tStories } = useTranslation('stories')

  const stories = mapStoriesToRelatedCarouselItems(
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
