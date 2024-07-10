'use client'
import { useMemo, useRef } from 'react'
import { shuffleArray } from '../helpers/shuffleArray'
import { usePageNumber } from './usePageNumber'
import { storiesPositionsTemplates } from '@/features/galaxyInterface/galaxies/MainGalaxy/fragments/Stories/positioningTemplates'
import React from 'react'

export const usePositioningTemplates = <T,>(templates: T[], page = 1) => {
  const shuffledPositioningTemplatesRef = useRef<T[]>([])

  const templatesAmount = templates.length

  const shuffledPositioningTemplates = useMemo(() => {
    if (!shuffledPositioningTemplatesRef.current.length) {
      shuffledPositioningTemplatesRef.current = shuffleArray([...templates])
    }

    return shuffledPositioningTemplatesRef.current
  }, [templates])

  const currentPageIndex = (page - 1) % templatesAmount
  const nextPageIndex = page % templatesAmount

  return {
    currentTemplate: shuffledPositioningTemplates[currentPageIndex] ?? [],
    nextTemplate: shuffledPositioningTemplates[nextPageIndex] ?? [],
    originalTemplateIndex: templates.indexOf(shuffledPositioningTemplates[currentPageIndex]),
  }
}

export const HomepageTemplatesContext = React.createContext<{
  currentTemplate: (typeof storiesPositionsTemplates)[number]
  nextTemplate: (typeof storiesPositionsTemplates)[number]
  originalTemplateIndex: number
  pageNumber: number
}>({
  currentTemplate: [],
  nextTemplate: [],
  originalTemplateIndex: 0,
  pageNumber: 0,
})
export const HomepageTemplatesProvider = ({ children }: { children: React.ReactNode }) => {
  const { pageNumber } = usePageNumber()
  const val = usePositioningTemplates(storiesPositionsTemplates, pageNumber)
  return (
    <HomepageTemplatesContext.Provider value={{ ...val, pageNumber }}>
      {children}
    </HomepageTemplatesContext.Provider>
  )
}
export const useHomepageTemplatesContext = () => React.useContext(HomepageTemplatesContext)
