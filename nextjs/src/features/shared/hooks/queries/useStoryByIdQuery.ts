'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { getPublicationState } from '../../utils/publication-state'
import { useLocale } from '../useLocale'
import { extractStoryData } from '../../helpers/extractStoryData'

export function useStoryByIdQuery(id: string) {
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const api = initApiClientService()
  const lang = useLocale()

  const queryFn = async () => {
    const res = await api.storyById({
      id,
      locale: lang ?? 'nl',
      publicationState: getPublicationState(isDraftMode),
    })

    const story = res?.storyByLocale?.data

    if (!story) {
      return null
    }

    return extractStoryData(story)
  }

  return useQuery({
    queryKey: ['story-by-id', id, lang, isDraftMode],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
