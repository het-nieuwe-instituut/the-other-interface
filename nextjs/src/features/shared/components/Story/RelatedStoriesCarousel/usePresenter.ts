import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { CATEGORIES } from '@/features/shared/utils/categories'
import useTranslation from 'next-translate/useTranslation'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoryMetaById } from '@/features/shared/hooks/queries/useStoryMetaById'
import { StoryEntity } from 'src/generated/graphql'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'

export const usePresenter = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = params?.id as string
  const lang = searchParams?.get('lang')
  const { t: tStories } = useTranslation('stories')

  const { data, isLoading } = useStoryMetaById(id)

  const story = data?.storyMetaByLocale?.data

  const relatedStories = [
    // childs if story has childs
    ...(story?.attributes?.stories?.data ?? []),

    // parent if story has parent
    ...(story?.attributes?.story?.data ? [story.attributes.story.data] : []),

    // siblings if story has siblings
    ...(story?.attributes?.siblings ?? []),
  ]

  const stories = storiesToCarouselDataMapper(relatedStories as StoryEntity[])

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
