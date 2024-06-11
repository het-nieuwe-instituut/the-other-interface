'use client'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { usePresenter } from './usePresenter'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'

export const CategoryGalaxy: React.FC = () => {
  const {
    isSearchModeActive,
    isResultAmountLoading,
    currentPageNumber,
    pageAmount,
    isResultEmpty,
    increasePageNumber,
    decreasePageNumber,
    isError,
    records,
  } = usePresenter()

  const { t } = useTypeSafeTranslation('category')

  const renderMainContent = () => {
    if (isError) {
      return (
        <div className="flex h-full items-center justify-center">
          <p className={TypographyVariants({ times: 'md' })}>{t('errorLoadingCategoryItems')}</p>
        </div>
      )
    }

    if (isResultAmountLoading) {
      return (
        <div className="flex h-full  items-center justify-center">
          <ThemedSpinner />
        </div>
      )
    }

    if (isResultEmpty) {
      return (
        <div className="w-full">
          <p
            className={TypographyVariants({
              times: 'lg',
              className: 'text-blue-100 text-[74px] leading-normal justify-start mb-[12vh]',
            })}
          >
            {t('noResultsFound')}.
          </p>
        </div>
      )
    }

    return <Records pageAmount={pageAmount} records={records} />
  }

  return (
    <div className={'w-screen bg-pink-100'}>
      <div className="relative mx-auto flex h-screen w-screen max-w-[1440px] items-center justify-center overflow-hidden px-[25px]">
        {isSearchModeActive && <BlurOverlay />}
        {renderMainContent()}

        <GalaxyFooter
          galaxyPagination={
            <GalaxyPagination
              currentPageNumber={currentPageNumber}
              pageAmount={pageAmount}
              isResultAmountLoading={isResultAmountLoading}
              handleLeftClick={decreasePageNumber}
              handleRightClick={increasePageNumber}
              isResultEmpty={isResultEmpty}
              isResultError={isError}
            />
          }
        />
      </div>
    </div>
  )
}
