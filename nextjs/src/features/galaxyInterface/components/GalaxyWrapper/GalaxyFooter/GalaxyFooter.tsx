'use client'
import { State } from '@/features/shared/configs/store'
import {
  FOOTER_Z_INDEX,
  GALAXY_EDITORIAL_LAYER_PART,
} from '@/features/shared/constants/mainConstants'
import { AnimatePresence, motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GalaxySearchBar } from '../GalaxySearchBar/GalaxySearchBar'
import { CollpsedSearch } from '../GalaxySearchBar/fragments/CollpsedSearch'
import { GalaxyZoomNavigation } from '../GalaxyZoomNavigation/GalaxyZoomNavigation'
import { cn } from '@/features/ui/utils/cn'
import { GalaxyZoomAnimationStateContext } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'

type Props = {
  galaxyPagination?: React.ReactNode
}

export const GalaxyFooter: React.FC<Props> = ({ galaxyPagination }) => {
  const searchParams = useSearchParams()
  const searchResult = searchParams?.get('searchResult')
  const isSearchResult = !!searchResult
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const [isSearchBarCollapsed, setIsSearchBarCollapsed] = useState(true)
  const { animationState } = useContext(GalaxyZoomAnimationStateContext)

  const toggleSearchBar = useCallback(() => {
    setIsSearchBarCollapsed(collapse => !collapse)
  }, [])

  useEffect(() => {
    // Search bar shoudn't collapse even if user close it on search result page
    if (isSearchResult) {
      return
    }

    setIsSearchBarCollapsed(!isSearchModeActive)
  }, [isSearchModeActive, isSearchResult])

  useEffect(() => {
    // Search bar should be expanded on search result page
    if (isSearchResult) {
      setIsSearchBarCollapsed(false)
    }
  }, [isSearchResult])

  const bottom = `calc(${GALAXY_EDITORIAL_LAYER_PART} +  ${1.5}rem)`
  const zIndex = FOOTER_Z_INDEX
  const search = searchParams?.get('search')
  const isNoActiveSearch = !search && !isSearchResult

  return (
    <div
      style={{ bottom, zIndex }} // no other easy way to refactor to tailwind from previous code
      className={cn(
        `absolute left-6 grid h-[60px] w-full grid-cols-[150px_auto_190px] gap-[5px] max-[1280px]:w-[97%] min-[1280px]:left-12 min-[1280px]:grid-cols-[170px_auto_230px]`,
        (animationState === 'backwards' || animationState === 'forward') &&
          'animate-[toBlurAndHide_300ms_ease-in-out_forwards]'
      )}
    >
      <div className="">{galaxyPagination}</div>

      <div className="relative w-full">
        <AnimatePresence>
          {isSearchBarCollapsed ? (
            <motion.div
              key={'collapsed-search w-full'}
              className="absolute w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transitionDuration: '0s' }}
              transition={{
                duration: 0.3,
              }}
            >
              <CollpsedSearch toggleSearchBar={toggleSearchBar} className="relative w-full" />
            </motion.div>
          ) : (
            <motion.div
              key={'search-bar'}
              className="absolute w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
            >
              <GalaxySearchBar isNoActiveSearch={isNoActiveSearch} className="relative w-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex h-full pl-4 align-top">
        <GalaxyZoomNavigation />
      </div>
    </div>
  )
}
