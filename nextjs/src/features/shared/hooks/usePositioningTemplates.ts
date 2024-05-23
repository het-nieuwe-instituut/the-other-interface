import { useRef } from 'react'
import { shuffleArray } from '../helpers/shuffleArray'

export const usePositioningTemplates = <T>(templates: T[], page = 1) => {
  const shuffledPositioningTemplatesRef = useRef<T[]>([])

  const templatesAmount = templates.length

  if (!shuffledPositioningTemplatesRef.current.length) {
    shuffledPositioningTemplatesRef.current = shuffleArray([...templates])
  }

  const currentPageIndex = (page - 1) % templatesAmount
  const nextPageIndex = page % templatesAmount

  return {
    currentTemplate: shuffledPositioningTemplatesRef.current[currentPageIndex] ?? [],
    nextTemplate: shuffledPositioningTemplatesRef.current[nextPageIndex] ?? [],
  }
}
