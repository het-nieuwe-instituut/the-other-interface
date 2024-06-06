'use client'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { usePresenter } from './usePresenter'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'

export const CategoryGalaxy: React.FC = () => {
  const {
    isSearchModeActive,
    isResultAmountLoading,
    currentPageNumber,
    pageAmount,
    isResultEmpty,
    increasePageNumber,
    decreasePageNumber,
  } = usePresenter()

  return (
    <div className={'w-screen bg-pink-100'}>
      <div className="relative mx-auto flex h-screen w-screen max-w-[1440px] items-center justify-center overflow-hidden px-[25px]">
        {isSearchModeActive && <BlurOverlay />}
        <Records pageAmount={pageAmount} />

        <GalaxyFooter
          galaxyPagination={
            <GalaxyPagination
              currentPageNumber={currentPageNumber}
              pageAmount={pageAmount}
              isResultAmountLoading={isResultAmountLoading}
              handleLeftClick={decreasePageNumber}
              handleRightClick={increasePageNumber}
              isResultEmpty={isResultEmpty}
            />
          }
        />
      </div>
    </div>
  )
}
