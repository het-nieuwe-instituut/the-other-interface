import { useParams, useRouter } from 'next/navigation'
import { CATEGORIES } from '@/features/shared/utils/categories'
import useTranslation from 'next-translate/useTranslation'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoryMetaByIdQuery } from '@/features/shared/hooks/queries/useStoryMetaByIdQuery'
import { StoryEntity } from 'src/generated/graphql'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'
import { useLocale } from '@/features/shared/hooks/useLocale'

export const usePresenter = () => {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const lang = useLocale()
  const { t: tStories } = useTranslation('stories')

  const { data, isLoading } = useStoryMetaByIdQuery({ id, options: { fetchOnWindowFocus: false } })

  const story = data?.storyMetaByLocale?.data

  const relatedStories = [
    // childs if story has childs
    ...(story?.attributes?.child_stories?.data ?? []),

    // parent if story has parent
    ...(story?.attributes?.parent_story?.data ? [story.attributes.parent_story.data] : []),

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
