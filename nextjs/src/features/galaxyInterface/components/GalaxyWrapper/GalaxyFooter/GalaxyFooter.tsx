'use client'
import {
  FOOTER_Z_INDEX,
  GALAXY_EDITORIAL_LAYER_PART,
} from '@/features/shared/constants/mainConstants'
import { GalaxySearchBar } from '../GalaxySearchBar/GalaxySearchBar'
import { CollpsedSearch } from '../GalaxySearchBar/fragments/CollpsedSearch'
import { GalaxyZoomNavigation } from '../GalaxyZoomNavigation/GalaxyZoomNavigation'
import { usePresenter } from './usePresenter'

type Props = {
  galaxyPagination?: React.ReactNode
}

export const GalaxyFooter: React.FC<Props> = ({ galaxyPagination }) => {
  const { isSearchBarCollapsed, toggleSearchBar, isNoActiveSearch } = usePresenter()
  const bottom = `calc(${GALAXY_EDITORIAL_LAYER_PART} +  ${1.5}rem)`
  const zIndex = FOOTER_Z_INDEX

  return (
    <div
      style={{ bottom, zIndex }} // no other easy way to refactor to tailwind from previous code
      className={`absolute left-6 grid h-[60px] w-full grid-cols-[150px_auto_190px] gap-[5px] max-[1280px]:w-[97%] min-[1280px]:left-12 min-[1280px]:grid-cols-[170px_auto_230px]`}
    >
      <div className="">{galaxyPagination}</div>

      <div>
        {isSearchBarCollapsed ? (
          <CollpsedSearch toggleSearchBar={toggleSearchBar} />
        ) : (
          <GalaxySearchBar isNoActiveSearch={isNoActiveSearch} />
        )}
      </div>

      <div className="flex h-full pl-4 align-top">
        <GalaxyZoomNavigation />
      </div>
    </div>
  )
}
